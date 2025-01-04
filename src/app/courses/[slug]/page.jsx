import { Files } from "@/app/[view]/file";
import { Inbox } from "@/components/inbox";
import Login from "@/components/Login";
import { oswald, space } from "@/lib/fonts";
import clsx from "clsx";
import { Handshake, MessageCircleQuestion, Sparkles } from "lucide-react";
import Image from "next/image";
import Count from "@/components/count";
import { notFound } from "next/navigation";
import { getProduct } from "@/app/[view]/file";
import Head from "next/head";

// Generate Static Params
export async function generateStaticParams() {
  return Files.map((file) => ({
    slug: file.slug,
  }));
}

// Generate Metadata
export async function generateMetadata({ params }) {
  const course = getProduct(params.slug);
  if (!course) {
    return notFound();
  }
  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    keywords: course.seo.keywords.join(","),
    openGraph: {
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
      images: [course.image.url],
      url: `https://applecourses.vercel.app/courses/${course.slug}`,
      locale: "bn_BD",
      type: "website",
    },
  };
}

export default async function Cool({ params }) {
  const course = getProduct(params.slug);
  if (!course) {
    return notFound();
  }

  return (
    <div>
      {/* SEO Optimized Head Tags */}
      <Head>
        <title>{course.seo.metaTitle}</title>
        <meta name="description" content={course.seo.metaDescription} />
        <meta name="keywords" content={course.seo.keywords.join(",")} />
        <meta property="og:title" content={course.seo.metaTitle} />
        <meta property="og:description" content={course.seo.metaDescription} />
        <meta property="og:image" content={course.image.url} />
        <meta
          property="og:url"
          content={`https://applecourses.vercel.app/courses/${course.slug}`}
        />
        <link
          rel="canonical"
          href={`https://applecourses.vercel.app/courses/${course.slug}`}
        />
      </Head>

      <h1
        className={clsx(
          oswald.className,
          "capitalize text-[26px] md:text-3xl text-center dark:text-cyan-50 mt-2 mb-4 md:mb-6 lg:pt-2"
        )}
      >
        {course.name}
      </h1>

      <main className="lg:flex lg:flex-row-reverse lg:justify-around  w-full">
        <aside className="w-full lg:w-[42%] xl:p-5 max-w-[700px] mx-auto shadow-inner shadow-zinc-100 dark:shadow-black py-3 px-2 rounded-md overflow-hidden">
          <section className="rounded-md overflow-hidden">
            <Image
              src={course.image.url}
              alt={course.image.alt}
              width={700}
              height={100}
              priority={true}
              loading="eager"
              className="object-cover aspect-video"
            />
          </section>
          <p className="text-start font-sans font-bold text-[14px] dark:text-cyan-100 pl-1 md:text-[15px] py-3">
            If the course labeled as FREE then just hit the LOG-IN Button to
            Continue!
          </p>
          <section className="flex justify-around md:justify-between gap-3 pt-4 pb-5">
            <Inbox />
            <Login />
          </section>
        </aside>

        <article
          itemScope
          itemType="http://schema.org/Product"
          className="w-full lg:w-[50%] xl:w-[50%] min-[500px]:pl-5 pt-5 md:pt-2 lg:pt-1"
        >
          <meta itemProp="name" content={course.name} />
          <meta itemProp="description" content={course.description} />
          <meta itemProp="image" content={course.image.url} />
          <meta itemProp="price" content={course.price} />
          <meta itemProp="priceCurrency" content="BDT" />

          <div>
           
            <p
              className={clsx(
                space.className,
                " font-bold pb-3 pt-3 capitalize text-2xl flex items-center gap-1 tracking-tighter"
              )}
            >
              <Sparkles /> Course Information:
            </p>
            <ol
              className={clsx(
                space.className,
                "list-disc pl-5 space-y-3 text-[15px] md:text-base tracking-tighter font-bold dark:text-cyan-100 capitalize"
              )}
            >
              {course.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>

            <hr className="mt-5 dark:border-gray-700" />

            <p
              className={clsx(
                space.className,
                " font-bold pb-3 pt-3 capitalize text-[19px] flex items-center gap-1 tracking-tighter"
              )}
            >
              <Handshake />
              Assurance:
            </p>
            <ol
              className={clsx(
                space.className,
                "list-disc pl-5 space-y-3 text-[15px] md:text-base tracking-tight font-bold dark:text-cyan-100 capitalize"
              )}
            >
              {course.assurance.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <hr className="mt-5 mb-2 dark:border-gray-700" />

            <p
              className={clsx(
                space.className,
                "font-bold pb-3 pt-3 capitalize text-[19px] flex items-center gap-1 tracking-tighter"
              )}
            >
              <MessageCircleQuestion />
              Caution:
            </p>
            <ol
              className={clsx(
                space.className,
                "list-disc pl-5 space-y-3 text-[15px] md:text-base tracking-tight font-bold dark:text-cyan-100 capitalize"
              )}
            >
              <li>
                This Site completely independent and not affiliated with any Ed
                tech company.
              </li>
              <li>
                Since we&apos;re a third party provider, There&apos;ll be a
                minimum amount of delay updating the course content. we&apos;re
                constantly trying to keep it as minimal as possible
              </li>
            </ol>
          </div>
        </article>
      </main>

      <section>
        <Count />
        <br />
      </section>
    </div>
  );
}
