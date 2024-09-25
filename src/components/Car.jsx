'use client';

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Slide from "./slide";

function Caru(props) {
  return (
    <div className="w-11/12 md:w-full bg-black lg:w-[550px] rounded-md gap-2 m-auto mt-0 mx-5">
      <Carousel 
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem> 
            <Slide 
              src="/eng24.webp"
              line="Enroll For 499" 
              go="/admission"
              priority={true}
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/med24.webp"
              line="Enroll For 599" 
              go="/admission"
              loading="lazy"
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/var.webp"
              line="Enroll for 499"
              go="/admission"
              loading="lazy"
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/ict26.webp"
              line="Enroll for FREE"
              go="https://apple26.netlify.app/"
              loading="lazy"
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/cc1.webp"
              line="250 Per Cycle"
              go="/h26"
              loading="lazy"
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/bpc266.webp"
              line="Enroll For 450" 
              go="/h26"
              loading="lazy"
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/HSC-25.webp"
              line="499 per Subject"
              go="/h25"
              loading="lazy"
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/frb.webp"
              line="FREE FRB 2024"
              go="/freecourses/frb"
              loading="lazy"
            />
          </CarouselItem>

          <CarouselItem> 
            <Slide 
              src="/copy.webp"
              line="Read Copyright"
              go="/copyright"
              loading="lazy"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Caru;
