import { notFound } from "next/navigation";
import { Category } from "@/components/categorypills";
import Feed from "@/components/Feed";
import Sidebar2 from "@/components/ui/side";
import { free } from "../file2";
import { Suspense } from "react";
import { getProduct } from "@/app/[view]/file";
import { getCachedData, prefetchData } from "@/components/ui/malware";

// Enable ISR
export const revalidate = 3600; // 1 hour

// Memory cache configuration
const MEMORY_CACHE = new Map();
const CACHE_TTL_MS = 3600000; // 1 hour

async function getData(cname) {
  // Check memory cache
  const cached = MEMORY_CACHE.get(cname);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  try {
    // Use React cached Redis getter
    const data = await getCachedData(cname);

    if (!data) return null;

    // Parse if needed
    const parsedData = typeof data === "string" ? JSON.parse(data) : data;

    // Update memory cache
    MEMORY_CACHE.set(cname, {
      data: parsedData,
      timestamp: Date.now(),
    });

    return parsedData;
  } catch (error) {
    console.error(`Data fetch error for ${cname}:`, error);
    return cached?.data || null;
  }
}

export async function generateStaticParams() {
  const courses = free.map((course) => ({
    cname: course.title,
  }));

  // Prefetch data at build time
  try {
    await Promise.all(
      courses.map(async ({ cname }) => {
        const data = await prefetchData(cname);
        if (data) {
          MEMORY_CACHE.set(cname, {
            data: typeof data === "string" ? JSON.parse(data) : data,
            timestamp: Date.now(),
          });
        }
      })
    );
  } catch (error) {
    console.error("Prefetch error:", error);
  }

  return courses;
}

export async function generateMetadata({ params }) {
  const { cname } = await params;
  const course = getProduct(cname);

  if (!course) return {};

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
          <aside className="max-md:hidden">
            <Sidebar2 chapters={systemlogs} mats={mats} key={cname} />
          </aside>

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
