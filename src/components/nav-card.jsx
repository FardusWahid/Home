"use client";
import { oswald } from "@/lib/fonts";
import clsx from "clsx";
import Link from "next/link";
import { useMyContext } from "./context/context";
import { useEffect } from "react";
export default function Card2({ name, title }) {
  const { setSelect } = useMyContext();
  useEffect(() => {
    setSelect("");
  }, []);
  return (
    <div className="w-[95%] mx-auto dark:text-cyan-50">
      <Link
        href={`/free/${title}`}
        prefetch={true}
        className="ty shadow-[5px_3px_1px_2px] shadow-zinc-100 dark:shadow-gray-900 active:shadow-none transition-all ease-in-out duration-150  group w-full flex justify-between items-center gap-6 px-5 md:px-7 py-4 md:py-4 bg-cyan-50  dark:bg-gray-950 relative overflow-hidden rounded-lg"
      >
        <div className="relative overflow-hidden z-[1] text-left">
          <div className="relative overflow-hidden">
            <h1
              className={`${oswald.className} text-2xl font-extrabold tracking-tighter md:text-[27px] mb-1 line-clamp-1`}
            >
              {name}
            </h1>
          </div>
          <div className={clsx("relative overflow-hidden")}>
            <p className="font-normal">Continue for Free</p>
          </div>
        </div>

        <div className="w-[55px] flex-shrink-0 aspect-square rounded-full border-2 border-white group-hover:border-purple-600 flex justify-center items-center bg-purple-600 dark:bg-gray-900 z-[1] transition-all duration-200 relative overflow-hidden">
          <svg
            viewBox="0 0 163 163"
            xmlns="http://www.w3.org/2000/svg"
            className="size-12 z-[1] fill-white group-hover:fill-purple-600 transition-all duration-200"
          >
            <path d="M105.9,74.4 L67.2,44.2 C63.5,41.3 58,43.9 58,48.7 L58,109 C58,113.7 63.4,116.4 67.2,113.5 L105.9,83.3 C108.8,81.1 108.8,76.6 105.9,74.4Z" />
          </svg>
          <div className="absolute inset-0 bg-white rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
        </div>
      </Link>
    </div>
  );
}
