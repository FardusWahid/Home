import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Category } from "@/components/categorypills";
import Feed from "@/components/Feed";
import Sidebar2 from "@/components/ui/side";
import { free } from "../file2";
import { getProduct } from "@/app/[view]/file";
import { getDataset } from "@/components/ui/malware";

export async function generateStaticParams() {
  return free.map((course) => ({
    cname: course.title,
  }));
}

// Enhanced metadata generation
export async function generateMetadata({ params }) {
  const { cname } = await params;
  const course = getProduct(cname);

  if (!course) return {};

  const {
    seo: { metaTitle, metaDescription, keywords },
    image,
    name,
    description,
    type,
    status,
    year,
  } = course;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords.join(", "),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: image.url,
          width: 1200,
          height: 630,
          alt: image.alt,
        },
      ],
      type: "website",
      locale: "en_US",
      siteName: "ACS Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [image.url],
    },
    alternates: {
      canonical: `https://applecourses.netlify.app/free/${cname}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    structured: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: name,
      description: description,
      provider: {
        "@type": "Organization",
        name: "ACS Shop",
        sameAs: "https://applecourses.netlify.app",
      },
      courseCode: cname,
      educationalLevel: "HSC Intermediate College",
      academicYear: year,
      courseStatus: status,
      courseType: type,
    },
  };
}

// Performance optimized page component
export default async function Front({ params }) {
  const { cname } = await params;

  if (!cname) {
    notFound();
  }

  const system32 = getDataset(cname);

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
            <div role="status" aria-label="Loading content">
              Please wait...
            </div>
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
            <section
              className="overflow-auto lg:pl-1"
              itemScope
              itemType="https://schema.org/Chapter"
            >
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

// Generate sitemap entries for better SEO
export async function generateSitemapEntries() {
  return free.map((course) => ({
    url: `https://applecourses.netlify.app/free/${course.title}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));
}
