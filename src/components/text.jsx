import { ArrowRight, ChevronRight, Sparkle, Sparkles } from "lucide-react";
import Link from "next/link";
import { space } from "@/lib/fonts";
import clsx from "clsx";

export default function Text() {
  return (
    <div className="px-4 md:px-5">
      <div>
        <div className="inline-flex items-center gap-1 mt-4 text-[15px] mb-3 md:mb-4">
          <Sparkle className="w-4 h-4" />
          <span className={clsx(space.className, "font-bold")}>
            trusted & Secure • Guaranteed
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4 md:mb-6">
          <span className="block">Get Your Favourite Courses</span>
          <span className="block">
            <span className="text-purple-800 dark:text-yellow-500">
              For a Fraction
            </span>{" "}
            OF the
          </span>
          <span className="block">
            <span>Original Price</span>
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-sm:hidden dark:text-gray-300 mb-6 md:mb-8 max-w-xl">
          Tired of spending thousands on courses or getting scammed by random
          dude online? Give Apple Courses a try!
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <Link
            href="https://ipremium.vercel.app"
            className="sm:w-[240px] w-full bn group bg-[#192a56]  text-white dark:bg-yellow-500 dark:lg:bg-blue-500 dark:text-black rounded-[1px_10px_1px_10px] px-8 py-3 text-base font-semibold"
          >
            <span className="flex justify-center items-center  gap-2">
              <Sparkles className="w-5 h-5 lg:group-hover:scale-110 lg:transition-transform lg:ease-in-out lg:duration-100" />
              Free Courses
              <ChevronRight size={28} />
            </span>
          </Link>

          <Link
            href="/courses?cat=all"
            className="sm:w-[240px] w-full bn group bg-cyan-50 dark:bg-black rounded-[10px_2px_10px_2px] px-8 py-3 text-[17px] lg:text-base font-semibold"
          >
            <span className="flex justify-center items-center gap-2">
              Explore Courses
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-8 md:mt-12  grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-blue-400">
              100%
            </div>
            <div
              className={clsx(
                space.className,
                "text-sm tracking-tighter text-black dark:text-gray-400 mt-1"
              )}
            >
              Secure..kokhono content Remove hobe na!
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-blue-400">
              300+
            </div>
            <div
              className={clsx(
                space.className,
                "text-sm tracking-tighter text-black dark:text-gray-400 mt-1"
              )}
            >
              Enrolled Personals
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-blue-400">
              1080p/720p
            </div>
            <div
              className={clsx(
                space.className,
                "text-sm tracking-tighter text-black dark:text-gray-400 mt-1"
              )}
            >
              (HD) Video Resolutions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
