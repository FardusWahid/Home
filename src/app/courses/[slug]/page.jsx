import { Files } from "@/app/[view]/file";
import { Inbox } from "@/components/inbox";
import { oswald, space } from "@/lib/fonts";
import clsx from "clsx";
import {
  Copy,
  Handshake,
  MessageCircleQuestion,
  Share2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Count from "@/components/count";
import { notFound } from "next/navigation";
import { getProduct } from "@/app/[view]/file";
import Link from "next/link";
import CopyDialog from "@/components/copy";

export async function generateStaticParams() {
  return Files.map((file) => ({
    slug: file.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getProduct(slug);

  if (!course) {
    return {};
  }

  // Construct structured data for the course
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.seo.metaDescription,
    provider: {
      "@type": "Organization",
      name: "ACS Shop",
      sameAs: "https://applecourses.vercel.app",
    },
    inLanguage: "bn-BD",
    courseMode: "online",
    price: course.price,
    priceCurrency: "BDT",
    image: course.image.url,
    url: `https://applecourses.vercel.app/courses/${course.slug}`,
  };

  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    keywords: course.seo.keywords.join(","),
    alternates: {
      canonical: `https://applecourses.vercel.app/courses/${course.slug}`,
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
      url: `https://applecourses.vercel.app/courses/${course.slug}`,
      locale: "bn_BD",
      type: "website",
      siteName: "ACS Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
      images: [course.image.url],
      creator: "https://web.facebook.com/applecourses.netlify.app5",
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

export default async function CourseDetail({ params }) {
  const { slug } = await params;
  const course = getProduct(slug);
  if (!course) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <h1
        className={clsx(
          oswald.className,
          "capitalize text-[26px] md:text-3xl text-center dark:text-cyan-50 mt-2 mb-4 md:mb-6 lg:pt-2"
        )}
      >
        {course.name}
      </h1>

      <main className="lg:flex lg:flex-row-reverse lg:justify-around lg:gap-8 w-full">
        {/* Course Media Section */}
        <aside
          className="w-full lg:w-[42%] xl:p-5 max-w-[700px] mx-auto shadow-[-2px_-5px_5px]  shadow-zinc-100
          dark:shadow-gray-900 py-3 px-2 rounded-md overflow-hidden h-fit"
        >
          <figure className="rounded-md overflow-hidden">
            <Image
              src={course.image.url}
              alt={course.image.alt}
              width={700}
              height={500}
              priority={true}
              loading="eager"
              className="object-cover aspect-video"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 700px"
            />
          </figure>
          <div className="mt-3 pb-5">
            <p
              className="text-start font-sans italic font-bold text-[14px] dark:text-cyan-100 pl-1 md:text-[15px] py-3"
              role="note"
            >
              {course.price === "free" ? (
                <span className="flex items-center justify-center gap-2">
                  {
                    "Yehh!! This Course is completely FREE. No need to Login. Just share with your Friends!!"
                  }{" "}
                  <CopyDialog
                    links={[
                      { id: "app", url: "https://applecourses.vercel.app" },
                    ]}
                  />
                </span>
              ) : (
                <span>
                  {
                    "Still skeptical..Whether you should buy it or not??  Haven't tried out course before ?? Here's some"
                  }{" "}
                  <Link
                    className="text-purple-900 text-[15px] md:text-[16px] hover:underline active:underline dark:text-purple-200 font-extrabold"
                    href="/free"
                  >
                    {" @Free Course as Demo !!"}
                  </Link>{" "}
                </span>
              )}
            </p>
            {course.price === "free" ? (
              <section className="py-3 flex button_top justify-center items-center m-auto">
                <Link
                  href="/free"
                  className={clsx(
                    "buy-button w-[75%]  font-extrabold text-lg",
                    oswald.className
                  )}
                  itemProp="url"
                >
                  <span className="button_top">Continue For Free</span>
                </Link>
              </section>
            ) : (
              <section className="flex justify-center items-center pt-4 pb-5">
                <Inbox aria-label="Contact support" />
              </section>
            )}
          </div>
        </aside>

        {/* Course Details Section */}
        <article
          itemScope
          itemType="https://schema.org/Course"
          className="w-full lg:w-[50%] xl:w-[50%] min-[500px]:pl-5 pt-5 md:pt-2 lg:pt-1"
        >
          {/* Add more comprehensive schema.org markup */}
          <meta itemProp="provider" content="ACS Shop" />
          <meta itemProp="courseMode" content="online" />
          <meta itemProp="inLanguage" content="bn-BD" />
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="price" content={course.price} />
            <meta itemProp="priceCurrency" content="BDT" />
            <meta
              itemProp="availability"
              content="https://schema.org/InStock"
            />
          </div>

          <div className="space-y-6">
            <section>
              <h2
                className={clsx(
                  space.className,
                  "font-bold capitalize text-2xl flex items-center gap-1 tracking-tighter"
                )}
              >
                <Sparkles aria-hidden="true" /> Course Information
              </h2>
              <ul
                className={clsx(
                  space.className,
                  "mt-3 list-disc pl-5 space-y-3 text-[15px] md:text-base tracking-tighter font-bold dark:text-cyan-100 capitalize"
                )}
                itemProp="coursePrerequisites"
              >
                {course.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <hr className="dark:border-gray-700 opacity-30 dark:opacity-50" />

            <section>
              <h2
                className={clsx(
                  space.className,
                  "font-bold capitalize text-[19px] flex items-center gap-1 tracking-tighter"
                )}
              >
                <Handshake aria-hidden="true" /> Our Assurance
              </h2>
              <ul
                className={clsx(
                  space.className,
                  "mt-3 list-disc pl-5 space-y-3 text-[15px] md:text-base tracking-tight font-bold dark:text-cyan-100 capitalize"
                )}
              >
                {course.assurance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <hr className="dark:border-gray-700 opacity-30 dark:opacity-50" />

            <section>
              <h2
                className={clsx(
                  space.className,
                  "font-bold capitalize text-[19px] flex items-center gap-1 tracking-tighter"
                )}
              >
                <MessageCircleQuestion aria-hidden="true" /> Important Notice
              </h2>
              <ul
                className={clsx(
                  space.className,
                  "mt-3 list-disc pl-5 space-y-3 text-[15px] md:text-base tracking-tight font-bold dark:text-cyan-100 capitalize"
                )}
              >
                <li>
                  This site is completely independent and not affiliated with
                  any EdTech company.
                </li>
                <li>
                  As a third-party provider, there may be a brief delay in
                  course content updates. We strive to minimize these delays.
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <footer className="mt-8">
        <Count />
      </footer>
    </div>
  );
}
