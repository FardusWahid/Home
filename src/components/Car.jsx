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
  

function Caru() {

    

  return (
    <div className="w-11/12   md:w-full  lg:w-[550px]  gap-2  m-auto mt-0 mx-5">
        <Carousel 
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
    <CarouselContent>
      <CarouselItem><Link href="/h24">
        <Image src="/eng24.webp" width={1280} height={700} className="w-full  rounded-t-md object-cover" />
        <h1 className='text-center bg-lime-400 text-black rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 499</h1>
    </Link></CarouselItem>

      <CarouselItem>

      <Link href="/h26">
        <Image src="/cc1.webp" width={1280} height={700} className="w-full  rounded-t-md object-cover" />
        <h1 className='text-center bg-purple-950 rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 250</h1>
    </Link>

      </CarouselItem>
      <CarouselItem>
      <Link href="/h24">
        <Image src="/med.webp" width={1280} height={700} className="w-full   rounded-t-md" />
        <h1 className='text-center bg-orange-500 text-black rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 499</h1>
    </Link>

      </CarouselItem>




      <CarouselItem>
      <Link href="/h25">
        <Image src="/HSC-25.webp" width={1280} height={700} className="w-full  rounded-t-md" />
        <h1 className='text-center bg-purple-900 rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 499</h1>
    </Link>

      </CarouselItem>


      <CarouselItem>
      <Link href="/make-money">
        <Image src="/makemoo.webp" width={1280} height={700} className="w-full  rounded-t-md" />
        <h1 className='text-center bg-gray-900-950 rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Make money with us</h1>
    </Link>

      </CarouselItem>
    </CarouselContent>


  
  </Carousel></div>
  )
}

export default Caru