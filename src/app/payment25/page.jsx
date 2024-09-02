import Link from "next/link"
import { FaSquareFacebook } from "react-icons/fa6";
import { Inbox } from "@/components/inbox";




export default function Pam() {


  






  return (
<div>


 <br />

   <div className="flex justify-end mx-7 md:mx-12">
    <h1 className="font-sans my-3 md:mt-0 md:mb-3 font-bold">Paid already? <Link className="bg-yellow-300 px-3 py-1 rounded-sm tracking-wide  hover:bg-gray-900 hover:text-white hover:ring-1 hover:ring-cyan-300 text-black font-sans font-extrabold " href="https://apple25.netlify.app/">Login</Link></h1>
    </div>                

<div>
  <h1 className="text-3xl font-extrabold italic text-center pt-1 lg:pt-0 ">Payment Getway 2025</h1>
</div>
 




<section className="flex flex-wrap md:flex-row-reverse lg:m-10 md:justify-between">












<div className="flex justify-center mt-5 lg:mt-0 p-1 md:ring-[.2px] md:ring-white rounded-lg  bg-gray-950">
  <main className=" checkout  w-11/12 justify-center md:w-[550px]">

<section className="p-2 w-full ">
  <img src="./HSC-25.webp" alt="billing"
   className="rounded-md "/>

</section>


<p className="text-start font-bold font-sans text-sm md:text-[15px] italic mt-4 md:mt-5 md:px-4">If you are well funded and can afford to pay the full price then please buy it from the Original owner, OR else</p>
<div className="flex justify-center mt-5">

<Inbox className="bg-[#c8f560] shadow-inner shadow-yellow-700 anton  py-2 mt-4 w-2/3 text-black rounded-lg flex justify-center font-extrabold text-xl mb-14" />

</div>
</main>
</div>

<div className="mt-16 m-3 w-11/12 lg:w-5/12 xl:w-1/2 lg:mt-5">
<a href="https://www.youtube.com/playlist?list=PLjo9h8F7l8RCANxDhnisxvsUd4tSG8v0B" 
   className="text-[17px] font-sans font-extrabold tracking-tight">
  Watch Demo on 
  <span className="relative font-sans ml-2 px-3 py-1 tracking-normal hover:bg-pink-950">
    YouTube
    <span className="absolute inset-0 border-2 rounded-sm border-solid border-animation"></span>
  </span>
</a>

  <h1 className="text-[24px] text-lime-300 font-bold font-sans ex">Description:</h1>
 
  <p className="font-bold text-pink-400 text-[19px] tracking-tight">Infromation about this course</p>  
  <ol className="font-extrabold font-sans select-text selection:bg-yellow-300 selection:text-black text-blue-200 ex">
 <li>1. Live Class করতে পারবে না।</li>
  <li>2. Course এর Exams গুলো দিতে পারবে না</li>
  <li className="text-[13px] font-mono mb-1 tracking-tighter">এছাড়া বাকি সব 100% Original Course এর মতো থাকবে।</li>
  <li>3. Class Download করতে পারবে।</li>
  <li>4. Pay করার 3mins এর মধ্যে access.</li>
  <li>5. 24/7 support on Facebook messenger.</li>
  <li className="mt-1 text-[17px] tracking-tight">6. সকল Course Content Webapp এ থাকবে So, social media তে সময় নষ্ট হওয়ার Chance নেই।</li>
 </ol><br />
 <p className=" font-extrabold font-mono tracking-tighter text-pink-500"><span>This course contains all the Classes and Study Materials from the Original Course.</span><br /><br />
We have dedicated webapp support to all of our courses.<br /><br /> YES, you can Download classes & Sheets and watch it Offline! <br /><br />
  <span>This course comes with a dedicated Facebook Support Group where u can post all the potential problems you might have. <br />
  </span> </p>
 
 </div>

 

</section>
<br /> 




   <br /><br /><br />
    <p>Follow us on:</p><br />  
    <div className="flex"> 
    <a className="mx-5 flex  w-[60px]" href="https://www.facebook.com/apple.courses.netlify.app.3.0/" target="_blank"><FaSquareFacebook size={50} color="blue"/></a>


    
      
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <footer className= " bottom-0 w-full  text-white p-4 flex justify-center">
      <p className="text-gray-300 text-center text-[10px] tracking-tighter font-extralight italic" >
        <br />&copy;2024</p>
    
    </footer> 

           
</div>
  )
}