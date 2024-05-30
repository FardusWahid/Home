import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";


const Money = () => {
  return (
    <div>
     
    <div className='flex flex-col items-center justify-center h-[500px] md:h-[550px] '>

      
      <h1 className='text-center font-sans tracking-wide italic font-bold text-xl'>Every successful referral to any of our courses gets you <span className='bg-orange-500 text-black rounded-md font-extrabold px-2 '>50 taka</span> instant cashback.</h1>

      <Link className='flex justify-center gap-1 mx-5 mt-6 text-black font-extrabold font-sans text-[18px]  bg-yellow-500 rounded-md w-[243px] px-2 py-1 shadow-inner shadow-yellow-700 active:bg-yellow-600' href="https://www.facebook.com/free.courses.vercel/"><IoMdArrowRoundBack size={27} />
 TELL ME MORE</Link>

   

    </div></div>
  )
}

export default Money