'use client'
import Link from "next/link"
import { useState } from 'react';
import { FaSquareFacebook } from "react-icons/fa6";

import { FaCopy } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { IoLogInOutline } from "react-icons/io5";
import MediaQuery from 'react-responsive';
import { Inbox } from "@/components/inbox";




export default function Pam() {


  






  return (
<div>


 <br />

   <div className="flex justify-end mx-7 md:mx-12">
    <h1 className="font-sans my-3 md:mt-0 md:mb-3 font-bold">Paid already? <Link className="bg-yellow-500 px-2 py-1 rounded-md text-black font-sans font-extrabold shadow-inner shadow-yellow-300 active:tracking-tight" href="https://apple25.vercel.app/">Login</Link></h1>
    </div>                

<div>
  <h1 className="text-3xl font-extrabold italic text-center pt-1 lg:pt-0 ">Payment Getway 2025</h1>
</div>
 




<section className="flex flex-wrap md:flex-row-reverse lg:m-10 md:justify-between">












<div className="flex justify-center mt-5 lg:mt-0">
  <main className=" checkout  w-11/12 justify-center md:w-[550px]">

<section className="p-2 w-full ">
  <img src="./HSC-25.webp" alt="billing"
   className="rounded-md "/>

</section>


<p className="text-center beca text-sm mt-2"> Before you proceed further, Make sure your account has enough balance to purchase this course!</p>
<div className="flex justify-center">

<Inbox className="bg-[#c8f560] shadow-inner shadow-yellow-700 anton  py-2 mt-4 w-2/3 text-black rounded-lg flex justify-center font-extrabold text-xl mb-14" />

</div>
</main>
</div>


<div className="mt-16 m-3 w-11/12 md:w-[590px] lg:mt-5">
  <h1 className="text-[24px] font-bold font-sans">Description:</h1>
 
 <p className="font-bold text-[#a3fda1]">&nbsp;&nbsp;To Continue this course</p>  
 <ol className="font-extrabold font-sans text-[#c8f560]">
  <li>&nbsp;&nbsp;&nbsp;1. Click on copy</li>
  <li>&nbsp;&nbsp;&nbsp;2. Go to inbox now</li>
  <li>&nbsp;&nbsp;&nbsp;3. Send the message you copied</li>
  <li>&nbsp;&nbsp;&nbsp;4. Pay with bkash</li>
  <li>&nbsp;&nbsp;&nbsp;5. Get login password with Life time access</li>

 </ol><br /><br />
 
 <p className=" font-extrabold font-mono tracking-tighter"><span>This course contains all the Classes and Study Materials from the Original Course.</span><br /><br />
We have dedicated webapp support to all of our courses.<br /><br /> YES, you can Download classes & Sheets and watch it Offline! <br /><br />
  <span>This course comes with a dedicated Facebook Support Group where u can post all the potential problems you might have. <br />
  </span> </p>
 
 </div>

 

</section>
<br /> 




   <br /><br /><br /> <br /><br /><br />
    <p>Follow us on:</p><br />  
    <div className="flex"> 
    <a className="mx-5 flex  w-[60px]" href="https://www.facebook.com/free.courses.vercel/" target="_blank"><FaSquareFacebook size={50} color="blue"/></a>


<a className="mx-5 flex  w-[60px]" href="https://www.youtube.com/channel/UCtAJJtWtY3Lsd3pVAgVxsfw" target="_blank"><ImYoutube2 size={70} color="red" />  </a>            
    
      
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <footer className= " bottom-0 w-full  text-white p-4 flex justify-center">
      <p className="text-gray-300 text-center text-[10px] tracking-tighter font-extralight italic" >
        <br />&copy;2024</p>
    
    </footer> 

           
</div>
  )
}