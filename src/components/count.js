import { Suspense } from "react";

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
    <section className="mt-10 pl-3 lg:pl-5 mx-auto">
      <h2 className="text-[15px] sm:text-lg font-semibold mb-4">
        Enrolled Students: 326 [live from database]
      </h2>
      <Suspense fallback={<LoadingSkeleton />}>
        <ProfileImages />
      </Suspense>
    </section>
  );
}