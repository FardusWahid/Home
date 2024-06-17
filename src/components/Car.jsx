'use client'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import Slide from "./slide"
  

function Caru(props) {

    

  return (
    <div className="w-11/12  md:w-full bg-black lg:w-[550px] rounded-md  gap-2  m-auto mt-0 mx-5">
        <Carousel 
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
    <CarouselContent>



    <CarouselItem> 
      <Slide 
      src="/oor.webp"
      line="Go to Telegram" 
      go="https://t.me/applecourses"
      />
      
    </CarouselItem>

    <CarouselItem> 
      <Slide 
      src="/oor.webp"
      line="Go to Telegram" 
      go="https://t.me/applecourses"
      />
      
    </CarouselItem>

    <CarouselItem> 
      <Slide 
      src="/oor.webp"
      line="Go to Telegram" 
      go="https://t.me/applecourses"
      />
      
    </CarouselItem>

    <CarouselItem> 
      <Slide 
      src="/eng24.webp"
      line="Enroll For 499 bdt" 
      go="/h24"
      />
      
    </CarouselItem>


    <CarouselItem> 
      <Slide 
      src="/cc1.webp"
      line="250 bdt per Cycle"
      go='/h26'
       />
     
    </CarouselItem>


    <CarouselItem> 
      <Slide 
      src="/HSC-25.webp"
      line="499 bdt per Subject"
      go='/h25'
       />
     
    </CarouselItem>



    <CarouselItem> 
      <Slide 
      src="/ict26.webp"
      line="Enroll for 299"
      go='/h26'
       />
     
    </CarouselItem>

    <CarouselItem> 
      <Slide 
      src="/makemoo.webp"
      line="Make money with us"
      go='/make-money'
       />
     
    </CarouselItem>

    </CarouselContent>
</Carousel> 

</div>
  )
}

export default Caru