import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Separate data fetching into its own component
const ProfileImages = async () => {
  const user = await fetch(
    "https://gist.githubusercontent.com/FardusWahid/fcf3bf322ea6a886ec4d910cc17fdf08/raw/386f6495019f01d3de0fbce7b09f43fbe466b871/db.json"
  );
  const data = await user.json();

  return (
    <div className="flex items-center flex-wrap -space-x-3">
      {data.map((profile, index) => (
        <div
          key={index}
          className="relative group w-12 h-12 rounded-full border-2 border-white dark:border-black bg-gray-200 overflow-hidden"
        >
          <img
            src={profile}
            alt={`Profile ${index + 1}`}
            className="w-full h-full object-cover brightness-[0.3]"
            loading="lazy"
          />
        </div>
      ))}
      <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-xs px-5">
        135+ more
      </div>
    </div>
  );
};

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="flex items-center flex-wrap -space-x-3">
    {[...Array(100)].map((_, index) => (
      <div
        key={index}
        className="relative w-12 h-12 rounded-full border-2 border-white dark:border-black bg-gray-300 animate-pulse"
      />
    ))}
    <div className="relative w-12 h-12 rounded-full border-2 border-white bg-gray-300 animate-pulse" />
  </div>
);

export default function Count() {
  return (
    <div className="my-5">
      <div className="flex items-center justify-around sm:justify-normal sm:gap-5 py-3 gap-2">
        <Link href="/phone">
          <Button
            variant="outline"
            className="h-8 px-3 sm:px-4 md:px-5 font-bold shadow-md shadow-zinc-100 dark:bg-gray-800 dark:shadow-zinc-900 rounded-[12px]"
          >
            View Mobile Demo
          </Button>
        </Link>

        <Link href="/landscape">
          <Button
            variant="outline"
            className="h-8 px-3 sm:px-4 font-bold md:px-5 shadow-md shadow-zinc-100 dark:bg-gray-800 dark:shadow-zinc-900 rounded-[12px]"
          >
            View Desktop Demo
          </Button>
        </Link>
      </div>

      <h2 className="ml-3 text-lg font-bold">Enrolled Students: 326+</h2>

      <section className="pl-3 lg:pl-5 my-1 mx-auto">
        <Suspense fallback={<LoadingSkeleton />}>
          <ProfileImages />
        </Suspense>
      </section>
    </div>
  );
}
