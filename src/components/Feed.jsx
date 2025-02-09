"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
import { useMyContext } from "./context/context";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import { roboto } from "@/lib/fonts";
import { Button } from "./ui/button";

// API client with error handling and retry logic
const api = {
  async fetchPlaylistVideos(playlistId) {
    if (!playlistId) return [];
    try {
      const encodedPlaylist = btoa(playlistId);
      const { data } = await axios.get(
        "/api/gEbAI5UeHweGPI7VdAqw2r2JgvM6HTqQ",
        {
          params: { playlistId: encodedPlaylist },
          timeout: 15000,
        }
      );
      return data || [];
    } catch (error) {
      console.error("It is the fucking API");
    }
  },
};

// Custom hook for video filtering and sorting
const useVideoProcessing = (videos, search, reverse) => {
  return useMemo(() => {
    const filtered = videos.filter((video) =>
      video.stuxnet.toLowerCase().includes(search.toLowerCase())
    );
    return reverse ? [...filtered].reverse() : filtered;
  }, [videos, search, reverse]);
};

const VideoCard = ({ video, name, index }) => {
  const thumbnailSrc = useMemo(() => {
    try {
      return atob(video?.calloc) || "/applesv.svg";
    } catch (error) {
      console.error("This thumbnail is Fucked");
      return "/applesv.svg";
    }
  }, [video?.calloc]);

  if (!video) return null;

  return (
    <div className="mb-2 md:mb-3">
      <div className="flex group rounded-[9px] sm:px-2 md:px-[2px] pb-3 w-full m-auto flex-col gap-3">
        <Link
          prefetch={true}
          href={{
            pathname: `/free/${name}/${video.malloc}`,
            query: { passcode: video.stuxnet },
          }}
          className="overflow-hidden rounded-[7px]"
        >
          <Image
            loading={index < 12 ? "eager" : "lazy"}
            decoding="sync"
            src={thumbnailSrc}
            alt={video?.stuxnet || "Video thumbnail"}
            width={1280}
            height={720}
            unoptimized={true}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCIgZmlsbD0iIzAwMDAwYyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzAwMDAwYyIgLz48L3N2Zz4="
            priority={index < 12}
            className="aspect-video group-active:scale-105 md:group-hover:scale-110 lg:group-active:scale-105 transition-transform duration-150 object-cover"
          />
        </Link>
        <section>
          <Link
            prefetch={true}
            href={{
              pathname: `/free/${name}/${video.malloc}`,
              query: { passcode: video.stuxnet },
            }}
            className="text-[15px] pl-2 line-clamp-2 font-bold"
          >
            {video?.stuxnet || "Video title unavailable"}
          </Link>
          <Link
            href="https://applecourses.vercel.app"
            className={clsx(
              "flex gap-4 w-fit items-center dark:text-zinc-200 pl-[8px] mt-1",
              roboto.className
            )}
          >
            <span className="text-[13px] tracking-tighter font-medium">
              Apple Courses
            </span>
            <span className="text-[12px]">22.5M views</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default function Feed({ name, initial }) {
  const { search, select, setSelect } = useMyContext();
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!select && initial) {
      setSelect(initial);
    }
  }, [name]);

  const {
    data: videos = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["playlist", select || initial],
    queryFn: ({ queryKey }) => api.fetchPlaylistVideos(queryKey[1]),
    enabled: !!(select || initial),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 2, // 48 hrs
    retry: 4,
    retryDelay: 1500,
  });

  const processedVideos = useVideoProcessing(videos, search, reverse);

  if (error) {
    return (
      <div className="text-center py-10 min-h-[50vh] lg:min-h-[70vh] items-center justify-center flex flex-col gap-4">
        <p className="text-2xl sm:text-3xl font-mono font-bold">
          Something went wrong!
        </p>
        <p className="text-lg sm:text-xl">Try reloading the page</p>
        <Link href="www.facebook.com/applecourses.netlify.app5" target="_blank">
          <Button variant="secondary" className="text-[16px]">
            Still noting? Report this to admin.
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <aside className="flex justify-end px-4 lg:px-5 lg:mt-0 mb-[1px]">
        <Button
          variant="secondary"
          onClick={() => setReverse(!reverse)}
          className="text-xs font-medium uppercase h-[25px] rounded-sm m-0"
          aria-label={`Sort ${reverse ? "Descending" : "Ascending"}`}
        >
          {reverse ? "Z-A" : "A-Z"}
        </Button>
      </aside>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-2">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))
          : processedVideos.map((video, index) => (
              <VideoCard
                key={video.malloc || index}
                video={video}
                name={name}
                index={index}
              />
            ))}
      </main>
    </div>
  );
}

const VideoSkeleton = () => (
  <div className="flex mb-3 flex-wrap space-y-2">
    <Skeleton className="aspect-video object-cover w-[95%] lg:w-[500px] m-auto md:px-1 rounded-xl" />
    <div className="space-y-1 w-[95%] m-auto lg:ml-2 lg:w-[96%] overflow-hidden">
      <Skeleton className="h-[18px] w-full rounded-[6px]" />
      <Skeleton className="h-[10px] w-[200px] lg:w-[200px] rounded-[5px]" />
    </div>
  </div>
);
