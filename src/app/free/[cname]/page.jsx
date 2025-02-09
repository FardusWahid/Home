import { c3po } from "@/components/ui/malware";
import { notFound } from "next/navigation";
import { Category } from "@/components/categorypills";
import Feed from "@/components/Feed";
import Sidebar2 from "@/components/ui/side";
import { free } from "../file2";
import { Suspense } from "react";
import { getProduct } from "@/app/[view]/file";
export async function generateMetadata({ params }) {
  const { cname } = await params;
  const course = getProduct(cname);

  if (!course) {
    return {};
  }

  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    openGraph: {
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
      images: [{ url: course.image.url }],
    },
  };
}

const inMemoryCache = {};
const CACHE_TTL_MS = 3600000; // 1 hour
async function getData(cname) {
  if (
    inMemoryCache[cname] &&
    Date.now() - inMemoryCache[cname].timestamp < CACHE_TTL_MS
  ) {
    console.log(`Cache hit for ${cname}`);
    return inMemoryCache[cname].data;
  }

  try {
    const redisData = await c3po.get(cname);

    if (!redisData) {
      console.warn(`Redis cache miss for ${cname}`);
      return null;
    }

    // **Fix: Ensure JSON.parse is only used on strings**
    const parsedData =
      typeof redisData === "string" && redisData.startsWith("{")
        ? JSON.parse(redisData)
        : redisData;

    inMemoryCache[cname] = { data: parsedData, timestamp: Date.now() };

    return parsedData;
  } catch (error) {
    console.error(`Error fetching data for ${cname}: ${error.message}`);

    // Fallback to in-memory cache if available
    if (inMemoryCache[cname]) {
      console.warn(`Returning stale cache for ${cname}`);
      return inMemoryCache[cname].data;
    }

    return null;
  }
}

export async function generateStaticParams() {
  const courses = free.map((course) => ({
    cname: course.title,
  }));

  return courses;
}

export default async function Front({ params }) {
  const { cname } = await params;

  if (!cname) {
    notFound();
  }

  const system32 = await getData(cname);

  if (!system32) {
    notFound();
  }

  const { systemlogs = [], mats = [] } = system32;

  if (!Array.isArray(systemlogs) || systemlogs.length === 0) {
    console.error(`No systemlogs found for key: ${cname}`);
    notFound();
  }

  return (
    <div className="max-h-[calc(100vh-65px)] flex flex-col">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-center font-semibold">
            Please wait...
          </div>
        }
      >
        <div className="grid grid-cols-[auto_1fr] flex-grow overflow-auto">
          {/* Sidebar */}
          <aside className="max-md:hidden">
            <Sidebar2 chapters={systemlogs} mats={mats} key={cname} />
          </aside>

          {/* Main Content */}
          <main className="overflow-x-auto">
            <div className="sticky inset-0 bg-white dark:bg-black pt-[5px] lg:pt-2 pb-[3px] z-10">
              <Category names={systemlogs} key={cname} />
            </div>
            <section className="overflow-auto lg:pl-1">
              <Feed
                key={cname}
                initial={systemlogs[0]?.base64audit || ""}
                name={cname}
              />
            </section>
          </main>
        </div>
      </Suspense>
    </div>
  );
}
