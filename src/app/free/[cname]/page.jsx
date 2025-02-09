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
    return notFound();
  }

  // Construct structured data for the course
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Apple Courses ACS Shop",
      sameAs: "https://applecourses.vercel.app",
    },
    inLanguage: "bn-BD",
    courseMode: "online",
    price: "FREE",
    priceCurrency: "BDT",
    image: course.image.url,
    url: `https://applecourses.vercel.app/free/${course.slug}`,
  };

  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    keywords: course.seo.keywords.join(","),
    alternates: {
      canonical: `https://applecourses.vercel.app/free/${course.slug}`,
    },
    openGraph: {
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
      images: [
        {
          url: course.image.url,
          width: 1200,
          height: 630,
          alt: course.name,
          type: "image/jpeg",
        },
      ],
      url: `https://applecourses.vercel.app/free/${course.slug}`,
      locale: "bn_BD",
      type: "website",
      siteName: "Apple Courses ACS Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
      images: [course.image.url],
      creator: "https://www.facebook.com/applecourses.netlify.app5",
    },

    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    verification: {
      google: "TcPRyeIhClDj72ukKF9fJ6yxNREcpj7BFNzxYiWYyTM",
    },
    // Adding structured data
    other: {
      structuredData: JSON.stringify(structuredData),
    },
  };
}



// In-memory cache object and TTL configuration (1 hour)
const inMemoryCache = {};
const CACHE_TTL_MS = 3600000; // 1 hour

// Cleanup function: remove expired keys from the cache
function cleanupCache() {
  const now = Date.now();
  Object.keys(inMemoryCache).forEach((key) => {
    if (now - inMemoryCache[key].timestamp >= CACHE_TTL_MS) {
      delete inMemoryCache[key];
      console.log(`Cache expired and removed for key: ${key}`);
    }
  });
}

export async function generateStaticParams() {
  return free.map((course) => ({ cname: course.title }));
}

async function getData(cname) {
  // Run cleanup to remove expired cache entries
  cleanupCache();

  const now = Date.now();

  // If a fresh cache entry exists, return it immediately
  if (
    inMemoryCache[cname] &&
    now - inMemoryCache[cname].timestamp < CACHE_TTL_MS
  ) {
    console.log(`In-memory cache hit for key: ${cname}`);
    return inMemoryCache[cname].data;
  }

  try {
    // Attempt to fetch data from Upstash Redis
    const redisData = await c3po.get(cname);
    if (!redisData) {
      console.warn(`Redis cache miss for key: ${cname}`);
      // Fallback: If stale data exists, return it instead of failing outright
      if (inMemoryCache[cname]) {
        console.warn(`Returning stale in-memory cache for key: ${cname}`);
        return inMemoryCache[cname].data;
      }
      return null;
    }

    // Parse data if needed
    const parsedData =
      typeof redisData === "string" ? JSON.parse(redisData) : redisData;

    if (!parsedData || typeof parsedData !== "object") {
      console.error(`Invalid data format for key: ${cname}`);
      if (inMemoryCache[cname]) {
        console.warn(`Returning stale in-memory cache for key: ${cname}`);
        return inMemoryCache[cname].data;
      }
      return null;
    }

    // Update the in-memory cache with fresh data and current timestamp
    inMemoryCache[cname] = { data: parsedData, timestamp: now };
    return parsedData;
  } catch (error) {
    console.error(`Error fetching data for key: ${cname}: ${error.message}`);
    // Fallback: If an error occurs, return stale data if available
    if (inMemoryCache[cname]) {
      console.warn(
        `Returning stale in-memory cache due to error for key: ${cname}`
      );
      return inMemoryCache[cname].data;
    }
    return null;
  }
}

export default async function Front({ params }) {
  const { cname } = await params;

  if (!cname || typeof cname !== "string") {
    console.error("Invalid `cname` parameter:", cname);
    notFound();
  }

  const system32 = await getData(cname);

  if (!system32) {
    console.error(`No data found for key: ${cname}`);
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
