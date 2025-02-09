import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

// Constants
const CACHE_EXPIRATION = 2700; // 45 minutes in seconds
const MAX_RESULTS = 50; // YouTube's max allowed per request
const DEFAULT_THUMB = "https://i.ytimg.com/vi//hqdefault.jpg";

/**
 * Processes a single video item from the YouTube API response.
 * @param {Object} item - A single video item from the playlistItems API.
 * @returns {Object} - Processed video data.
 */
const processItem = (item) => {
  try {
    const snippet = item.snippet || {};
    const resourceId = snippet.resourceId || {};
    const thumbnails = snippet.thumbnails || {};

    const videoId = resourceId.videoId || "deleted";
    const title = snippet.title || "Video unavailable";

    return {
      stuxnet: title,
      IamKira: snippet.description || "",
      calloc: btoa(
        thumbnails.high?.url ||
          thumbnails.medium?.url ||
          DEFAULT_THUMB.replace("vi//", `vi/${videoId}/`)
      ),
      malloc: btoa(videoId),
    };
  } catch (error) {
    console.error("Error processing video item:", error);
    return {
      stuxnet: "Unavailable video",
      IamKira: "",
      calloc: btoa(DEFAULT_THUMB),
      malloc: btoa("deleted"),
    };
  }
};

/**
 * Fetches all videos from a YouTube playlist, handling pagination.
 * @param {string} playlistId - The YouTube playlist ID.
 * @returns {Promise<Array>} - Array of processed video items.
 */
const fetchPlaylistVideos = async (playlistId) => {
  const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${
    "PL" + playlistId
  }&key=${process.env.YOUTUBE_API_KEY_ONE}&maxResults=${MAX_RESULTS}`;
  let videos = [];
  let nextPageToken = null;
  let pageCount = 0;

  do {
    pageCount++;
    const apiURL = `${baseURL}${
      nextPageToken ? `&pageToken=${nextPageToken}` : ""
    }`;

    const start = Date.now();
    const res = await fetch(apiURL);

    if (!res.ok) {
      throw new Error(`YouTube API: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log(`Page ${pageCount} fetched in ${Date.now() - start}ms`);

    if (data.items?.length) {
      videos.push(...data.items.map(processItem));
    }

    nextPageToken = data.nextPageToken;
  } while (nextPageToken && pageCount < 10); // Safety cap to prevent infinite loops

  return videos;
};

/**
 * Handles GET requests for fetching playlist videos.
 * @param {Request} request - The incoming request object.
 * @returns {NextResponse} - JSON response containing video data or an error message.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let playlistId = atob(searchParams.get("playlistId") || "");

  // Validate playlist ID format
  if (!/^[\w-]{34}$/.test("PL" + playlistId)) {
    console.log(`Invalid playlist ID: ${playlistId}`);
    return NextResponse.json(
      { error: "Invalid playlist identifier" },
      { status: 400 }
    );
  }

  const cacheKey = `playlist-${"PL" + playlistId}`;
  console.log(`Fetching playlist: ${playlistId}`);

  try {
    // Cache-first strategy
    const cached = await redis.get(cacheKey);
    if (cached) {
      console.log(`Cache hit for playlist: ${playlistId}`);
      return NextResponse.json(cached);
    }

    // Fetch videos from YouTube API
    const videos = await fetchPlaylistVideos(playlistId);

    // Cache only successful fetches
    if (videos.length) {
      await redis
        .setex(cacheKey, CACHE_EXPIRATION, videos)
        .then(() =>
          console.log(
            `Cached ${videos.length} items for playlist: ${playlistId}`
          )
        )
        .catch((e) => console.error("Caching failed:", e));
    }

    return NextResponse.json(videos);
  } catch (error) {
    console.error(`Error fetching playlist: ${playlistId}`, error.message);

    // Attempt stale cache fallback
    const stale = await redis.get(cacheKey).catch(() => null);
    if (stale) {
      console.log(`Serving stale cache for playlist: ${playlistId}`);
      return NextResponse.json(stale);
    }

    return NextResponse.json(
      { error: "Unable to retrieve playlist data" },
      { status: 500 }
    );
  }
}
