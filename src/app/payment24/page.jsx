import Link from "next/link"
import { FaSquareFacebook } from "react-icons/fa6";
import { Inbox } from "@/components/inbox";
import Image from "next/image";




export default function Pam() {


  






  return (
<div>


   <div>
    <h1 className="flex justify-end mx-5 gap-2 md:gap-4 md:mx-12 mb-2 text-[17px]  mt-5 font-sans  md:mt-0 font-bold">Paid already? <Link className="bg-gray-900 text-white px-4 py-[3px] log rounded-[2px] hover:bg-white text-[16px]  hover:scale-110 hover:rounded-md  tracking-widest transition-all ease-in duration-200 hover:text-black font-sans font-extrabold" href="https://apple2024.netlify.app/">Login</Link></h1>
    </div>                

<div>
  <h1 className="text-3xl font-extrabold italic text-cyan-200 text-center pt-1 lg:pt-0 ">Payment Getway 2024</h1>
</div>
 




<section className="flex flex-wrap md:justify-center lg:flex-row-reverse lg:m-10  lg:justify-between">












<div className="flex justify-center mt-5 lg:w-1/2 xl:w-2/5 lg:mt-0 p-1 md:ring-[.2px] md:mx-10 lg:mx-0 md:ring-gray-600 rounded-lg  bg-gray-950">
  <main className=" checkout rounded-md bg-gray-950 lg:bg-gray-950 px-0 py-1 lg:p-0 w-11/12 justify-center ">

<section className="p-1 w-full flex justify-center ">
  <Image src="/wallpaper.webp" width={700} height={700} priority={true} alt="billing"
   className="rounded-md "/>

</section>


<p className="text-start pl-2 lg:pl-0 font-bold font-sans text-sm md:text-[15px] italic mt-4 md:mt-5 md:px-4">If you are well funded and can afford to pay the full price then please buy it from the Original owner, OR else</p>
<div className="flex justify-center mt-7 mb-9">

<Inbox />

</div>
</main>
</div>


<div className="mt-10 m-3 w-11/12 lg:w-5/12 xl:w-1/2 lg:mt-5">

  <ol className="pl-4 font-extrabold font-mono tracking-[-1.1px] space-y-[3px] text-cyan-200 list-decimal">
 <span className="font-sans font-bold tracking-tight text-xl text-cyan-400"><span className="font-serif text-[22px]">I</span>nfromation about this course:</span> 
  <li>Live Class করতে পারবে না।</li>
  <li>Course এর Exams গুলো দিতে পারবে না but, exam এর Solution PDF গুলো পাবে।</li>
  <li>এছাড়া বাকি সব exactly Original Course এর মতোই থাকবে।</li>
  <li>Exam এর জন্য alternate website provide করা হবে।</li>
  <li>Class গুলো download করতে পারবে।</li>
  <li>Pay করার 3mins এর মধ্যে access.</li>
  <li>24/7 support on Facebook messenger.</li>
  <li>সকল Course Content Webapp এ থাকবে So, social media তে সময় নষ্ট হওয়ার Chance নেই।</li>


  </ol>
 <br />

 
 <p className=" font-extrabold font-mono tracking-tighter text-pink-300"><span>This course provides all the Classes, Lecture Sheets,  Practice Sheets & other Study Materials from the Original Course.</span><br /><br />
 সাথে পাবে 2023 এর Archive, Compact classes & Darpan Academy Oneshots 2024 Course সম্পূর্ণ FREE<br /><br /> 
  <span>This course comes with a dedicated Facebook Support Group where u can post all the potential problems you might have. <br />
  </span> </p>
 
 </div>

 

</section>
<br /> <br />
<p className="wdd m-auto text-end text-lg mb-3 font-sans italic font-semibold">Apple Courses webapp Demo</p>
<div className=" wd md:wdd border-4 rounded-md border-yellow-500 m-auto h-auto">
  <div className="relative overflow-hidden pb-[56.25%]"> {/* 16:9 aspect ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/Ltk8D_W_FB4?si=8cB03exnnx_xJk-l&rel=0&controls=0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>



   <br /><br />
    <p>Follow us on:</p><br />  
    <div className="flex"> 
    <a className="mx-5 flex  w-[60px]" href="https://www.facebook.com/applecourses.pro" target="_blank"><FaSquareFacebook size={50} color="blue"/></a>

    
      
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <footer className= " bottom-0 w-full  text-white p-4 flex justify-center">
      <p className="text-gray-300 text-center text-[10px] tracking-tighter font-extralight italic" >
        <br />&copy;2024</p>
    
    </footer> 
     

</div>
  )
}