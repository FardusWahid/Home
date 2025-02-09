import { getProduct } from "@/app/[view]/file";
import CopyDialog from "@/components/copy";
import Player from "@/components/player";

export async function generateMetadata({ params, searchParams }) {
  const { cname, playerId } = await params;
  const course = getProduct(cname);

  if (!course) {
    return notFound();
  }
  const { passcode } = await searchParams;
  const videoTitle = passcode;

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
    url: `https://applecourses.vercel.app/free/${course.slug}/${playerId}?passcode=${passcode}`,
  };

  return {
    title: videoTitle,
    description: course.seo.metaDescription,
    keywords: course.seo.keywords.join(","),
    alternates: {
      canonical: `https://applecourses.vercel.app/free/${course.slug}/${playerId}?passcode=${passcode}`,
    },
    openGraph: {
      title: videoTitle,
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
      title: videoTitle,
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

export default async function PlayerPage({ params, searchParams }) {
  const { playerId } = await params;
  const { passcode } = await searchParams;
  const videoTitle = passcode;

  return (
    <div>
      <div className="pb-1 shadow-md z-40 shadow-zinc-100 dark:shadow-gray-800"></div>
      <section className="z-0 mt-2 relative">
        <Player Id={playerId} />

        <h1 className="text-[16px] lg:text-[18px] font-semibold md:font-bold tracking-tight p-2">
          {videoTitle}
        </h1>

        <aside className="lg:absolute lg:right-0 lg:top-0 pr-5 flex justify-end">
          <CopyDialog links={[{id:"app", url: "https://applecourses.verce.app"}]} buttonName="Copy link"/>
        </aside>
      </section>
    </div>
  );
}
