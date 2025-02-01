import { one } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { FolderDown, History, Video, Youtube } from "lucide-react";
import clsx from "clsx";

export const Card = ({ file }) => {
  const seoImageUrl = new URL(file.image.url);
  const optimizedImageUrl = seoImageUrl
    .toString()
    .replace(/\/upload\//, "/upload/q_auto,f_auto/");

  return (
    <div
      key={file.slug}
      className="p-2 w-full md:max-w-[420px] mx-auto  min-[1600px]:max-w-[440px] rounded-md shadow-[5px_-6px_8px_1px,_-5px_-6px_8px_1px] shadow-zinc-100 dark:shadow-nine"
      itemScope
      itemType="https://schema.org/Course"
      itemID={`https://applecourses.netlify.app/courses/${file.slug}`}
    >
      <section className="overflow-hidden relative rounded-md">
        <Image
          src={optimizedImageUrl}
          width={700}
          height={700}
          loading="lazy"
          alt={file.image.alt}
          className="object-cover aspect-video hover:scale-105 transition-transform ease-in-out duration-200"
          itemProp="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1600px) 420px, 440px"
          priority={false}
          quality={75}
          blurDataURL={`${optimizedImageUrl}&w=50&q=20`}
          placeholder="blur"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: optimizedImageUrl,
              caption: file.image.alt,
              representativeOfPage: true,
              thumbnailUrl: `${optimizedImageUrl}&w=100`,
              name: file.name,
              description: file.image.alt,
            }),
          }}
        />

        <p className="absolute bottom-1 right-1 bg-nine text-white font-mono text-sm px-2 py-[2px] rounded-[5px] bg-opacity-70 pointer-events-none">
          {file.status}
        </p>
      </section>
      <h1
        className={clsx("text-center text-xl py-1 capitalize", one.className)}
        itemProp="name"
      >
        {file.name}
      </h1>
      <aside className="grid grid-cols-2 gap-2 min-[450px]:px-3 md:px-2 lg:px-0 xl:px-2 2xl:px-3 w-[99%] m-auto py-2 md:py-3">
        <p className="t" itemProp="ACS Shop">
          <Video />
          {file.tags[0]}
        </p>
        <p className="t" itemProp="ACS Engineering">
          <Youtube size={22} />
          {file.tags[1]}
        </p>
        <p className="t" itemProp="ACS Course">
          <History className="w-5" />
          {file.tags[2]}
        </p>
        <p className="t" itemProp="ACS cycles">
          <FolderDown size={22} />
          {file.tags[3]}
        </p>
      </aside>
      <aside className="pb-4">
        <p className="font-medium text-lg flex justify-center items-center gap-2">
          Price:
          <span
            className="font-bold text-2xl uppercase"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="BDT" />
            <span itemProp="price">{file.price}</span>
            <span className="font-thin text-lg">BDT</span>
          </span>
        </p>

        <section className="py-3 w-[55%] m-auto">
          <Link
            href={`/courses/${file.slug}`}
            className={clsx(
              "flex justify-center py-2 font-extrabold text-lg tracking-tight bn rounded-md bg-[#f0fafa] dark:bg-nine",
              one.className
            )}
            itemProp="url"
          >
            BUY NOW
          </Link>
        </section>
      </aside>

      <meta itemProp="inLanguage" content="bn-BD" />
      <meta itemProp="provider" content="ACS Shop" />
      <meta itemProp="educationalLevel" content="HSC" />
      <meta itemProp="courseMode" content="online" />
    </div>
  );
};
