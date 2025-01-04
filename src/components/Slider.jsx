"use client";
import { Slide } from "../app/[view]/file";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { one } from "@/lib/fonts";
import clsx from "clsx";
import Link from "next/link";

function Slider() {
  const autoplayOptions = {
    delay: 2500,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    playOnInit: true,
  };

  return (
    <div className="w-[98%] mx-auto sm:w-[95%] lg:w-[500px] min-[1110px]:w-[550px] xl:w-[700px] min-[1750px]:w-[850px] xl:pr-5 2xl:pr-7 lg:pr-2">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[Autoplay(autoplayOptions)]}
      >
        <CarouselContent>
          {Slide.map((file, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-sm">
                <Link href={`/courses/${file.slug}`}>
                  <Image
                    src={file.image}
                    alt={file.alt}
                    width={850}
                    height={800}
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="object-cover aspect-video hover:scale-110 transition-transform duration-200 ease-in-out"
                  />
                </Link>
              </div>
              <aside>
                <Link href={`/courses/${file.slug}`}>
                  <p
                    className={clsx(
                      one.className,
                      "capitalize text-center bg-zinc-50 dark:bg-nine py-2 md:py-2 text-lg md:text-[20px] font-sans font-bold mt-1 truncate"
                    )}
                  >
                    {file.title}
                  </p>
                </Link>
              </aside>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Slider;
