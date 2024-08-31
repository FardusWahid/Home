import Link from "next/link"
import { FaSquareFacebook } from "react-icons/fa6";
import { Inbox } from "@/components/inbox";
import Image from "next/image";




export default function Pam() {


  






  return (
<div>


<div>
    <h1 className="flex justify-end mx-5 mb-2 text-[17px] gap-2 md:gap-4 md:mx-12 mt-5 font-sans  md:mt-0 font-bold">Paid already? <Link className="bg-gray-900 text-white ring-[.5px] ring-cyan-200 px-4 py-[3px] rounded-[2px] hover:bg-white text-[16px] hover:rounded-sm  tracking-widest transition-all ease-in duration-200 hover:text-black font-sans font-extrabold" href="https://apple26.netlify.app">Login</Link></h1>
    </div>                
                

<div>
  <h1 className="text-3xl font-extrabold italic text-center pt-1 lg:pt-0 ">Payment Getway 2026</h1>
</div>
 




<section className="flex flex-wrap md:flex-row-reverse lg:m-10 md:justify-between">












<div className="flex justify-center mt-5 lg:w-1/2 xl:w-2/5 lg:mt-0 p-1 md:ring-[.2px] md:mx-10 lg:mx-0 md:ring-white rounded-lg  bg-gray-950">
  <main className=" checkout  w-11/12 justify-center ">

<section className="p-1 w-full flex justify-center ">
  <Image src="/h6.webp" width={700} height={700} alt="billing"
   className="rounded-md "/>

</section>


<p className="text-start font-bold font-sans text-sm md:text-[15px] italic mt-4 md:mt-5 md:px-4"> If you are well funded and can afford to pay the full price then please buy it from the Original owner, OR else</p>
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
 
 <p className="font-bold text-pink-400 font-sans text-[19px]">&nbsp;&nbsp;Details infromation about this course</p>  
 <ol className="font-extrabold font-sans  select-text selection:bg-yellow-300 selection:text-black text-blue-200 ex">
 <li>&nbsp;&nbsp;&nbsp;1. Live Class করতে পারবে না।</li>
  <li>&nbsp;&nbsp;&nbsp;2. ACS এর Exams গুলো দিতে পারবে না</li>
  <li className="text-[14px] font-mono mb-1 tracking-tighter">&nbsp;&nbsp;&nbsp;এছাড়া বাকি সব 100% ACS এর মতো থাকবে।</li>
  <li>&nbsp;&nbsp;&nbsp;3. Class Download করতে পারবে।</li>
  <li>&nbsp;&nbsp;&nbsp;4. Pay করার 3mins এর মধ্যে access.</li>
  <li>&nbsp;&nbsp;&nbsp;5. 24/7 support on Facebook messenger.</li>
  <li className="mt-1 text-[17px] tracking-tight">&nbsp;&nbsp;&nbsp;6. সকল Course Content Webapp এ থাকবে So, social media তে সময় নষ্ট হওয়ার Chance নেই।</li>
 </ol><br /><br />
 
 <p className=" font-extrabold font-mono tracking-tighter"><span>This course contains all the Classes, Lecture Sheets,  Practice Sheets & other Study Materials from the Original Course.</span><br /><br />
 সাথে পাবে 2025 এর Archive সম্পূর্ণ FREE.<br /><br /> YES, you can Download classes & Sheets and watch it Offline! <br /><br />
  <span>This course comes with a dedicated Facebook Support Group where u can post all the potential problems you might have. <br />
  </span> </p>
 
 </div>

 

</section>
<br /> 




   <br /><br /><br /> <br /><br /><br />
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