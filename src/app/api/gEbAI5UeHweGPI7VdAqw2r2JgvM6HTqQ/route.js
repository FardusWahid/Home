import { NextResponse } from "next/server";

const MAX_RESULTS = 50;
const DEFAULT_THUMB = "https://i.ytimg.com/vi//hqdefault.jpg";

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
  } while (nextPageToken && pageCount < 10);

  return videos;
};

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

  console.log(`Fetching playlist: ${playlistId}`);

  try {
    // Fetch videos directly from YouTube API
    const videos = await fetchPlaylistVideos(playlistId);

    if (!videos.length) {
      throw new Error("No videos found in playlist");
    }

    return NextResponse.json(videos);
  } catch (error) {
    console.error(`Error fetching playlist: ${playlistId}`, error.message);
    return NextResponse.json(
      { error: "Unable to retrieve playlist data" },
      { status: 500 }
    );
  }
}

