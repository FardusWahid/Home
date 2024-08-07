'use client'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

import Slide from "./slide"
  

function Caru(props) {

    

  return (
    <div className="w-11/12  md:w-full bg-black lg:w-[550px] rounded-md  gap-2  m-auto mt-0 mx-5">
        <Carousel 
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}>
    <CarouselContent>

    <CarouselItem> 
      <Slide 
      src="/ict26.webp"
      line="Enroll for FREE"
      go='https://apple26.netlify.app/'
       />
     
    </CarouselItem>

    <CarouselItem> 
      <Slide 
      src="/cc1.webp"
      line="250 Per Cycle"
      go='/h26'
       />
     
    </CarouselItem>


    
    <CarouselItem> 
      <Slide 
      src="/eng24.webp"
      line="Enroll For 499" 
      go="/h24"
      />
      
    </CarouselItem>


    <CarouselItem> 
      <Slide 
      src="/HSC-25.webp"
      line="499 per Subject"
      go='/h25'
       />
     
    </CarouselItem>


    <CarouselItem> 
      <Slide 
      src="/frb.webp"
      line="FREE FRB 2024"
      go='/freecourses/frb'
       />
     
    </CarouselItem>


    <CarouselItem> 
      <Slide 
      src="/copy.webp"
      line="Read Copyright"
      go='/copyright'
       />
     
    </CarouselItem>

    </CarouselContent>
</Carousel> 

</div>
  )
}

export default Caru