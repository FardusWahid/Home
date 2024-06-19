import Caru from "@/components/Car";
import Outlet from "@/components/course";
import Custom from "@/components/custom";
import Topic from "@/components/topic";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IoChevronForwardCircleSharp } from "react-icons/io5";



export default function Home(props) {
  return (
    <div className="select-none">

<div className="md:flex md:flex-row-reverse justify-between  w-full">

<div className="w-full bg-black mt-4  text-white flex md:w-1/2 lg:w-[600px]  justify-center">

<Caru/>
</div>


<h1 className="text-center md:hidden font-serif font-extralight mt-5 text-white italic text-[17px] "> Select Category</h1>
    <div className="w-11/12 m-auto  md:w-1/2 lg:w-[550px] md:mx-3 flex flex-wrap justify-between mt-1">
    <Topic link="/add2.webp"
          title="ADMISSION"
          route="/admission"/>

<Topic link="https://rootsedulive.com/static/media/backpack.ce6cf69a.svg"
          title="HSC- 2026"
          route="/h26"
          />

<Topic link="/books.png"
          title="HSC- 2025"
          route="/h25" />


    <Topic link="https://rootsedulive.com/static/media/school.9ce23c5d.svg"
          title="HSC- 2024"
          route="/h24"/>

 
    <Topic link="/skill.png"
          title="Skill Dev.."
          route="/skill" />

<Topic link="/pdf.png"
          title="E-books"
          route="/ebook" />
  </div>
</div>


<div className="mt-7 flex justify-center ">
  <Link className="shadow-inner shadow-white flex mb-1 w-[320px]  justify-center rounded-lg bg-blue-200 hover:bg-blue-300 hover:tracking-wide transition-all ease-in duration-150  text-xl font-extrabold font-sans px-6  py-2 md:hidden text-black" href="/freecourses">Free Courses &nbsp;<IoChevronForwardCircleSharp size={31} />

</Link>    
  </div>

<br/><br/>
 
<p className="bg-pink-900 shadow-inner shadow-pink-500 w-[120px] mx-4 md:mx-10 py-1 px-2 rounded-xl flex justify-center">Latest add<GoDotFill size={23} color="red" /></p>
     <section className="flex flex-wrap gap-4 m-1 mt-0 md:m-10 justify-between">






     <Custom     
image="/bio.webp"
title="APPLE Biomission 26 Cycle 1"
one="Classes 60"
two="Webapp recorded"
three="2025 archive"
price="299"
alt="bio1"
link="/payment26"
    />


     <Outlet     
image="/dar.jpg"
title="Darpan Academy OneShots 2024"
classamount="97"
price="299 "
alt="dar"
link="/payment24"
    />

     <Outlet     
image="/ict26.webp"
title="APPLE ICT DeCoder 2026"
classamount="140"
price="299"
alt="ict26"
link="/payment26"
    />

<Outlet     
image="/c1.jpg"
title="APPLE 2026 Math Cycle 1"
classamount="60"
price="250"
alt="math1"
link="/payment26"
    />

<Outlet     
image="/pc1.jpg"
title="APPLE 2026 Physics Cycle 1"
classamount="55"
price="250"
alt="phy1"
link="/payment26"
    />



<Outlet     
image="/cc1.webp"
title="APPLE 2026 Chemistry Cycle 1"
classamount="57"
price="250"
alt="phy1"
link="/payment26"
    />


<Outlet
image="/chee1.jpg"
title="APPLE 2025 Chemistry All Cycles "
classamount="120"
price="499"
alt="che"
link="/payment25"
/>

     <Outlet     
image="/frb.webp"
title="HSC Final Revision 2024"
classamount="150"
price="FREE "
alt="frb"
link="freecourses/frb"
    />

    
     <Outlet     
image="/eng24.webp"
title="APPLE Engineering Private Batch 2024"
classamount="140"
price="499"
alt="eng24"
link="/payment24"
    />


<Outlet    
     image="/ict.jpg"
     title="ICT DE-CODER 2025"
     classamount="60"
     price="FREE"
     alt="ict" 
     link="/freecourses/ict25"         
     />


<Outlet
image="/HSC-25.webp"
title="APPLE 2025 Physics ALL Cycles "
classamount="80"
price="499"
alt="physics"
link="/payment25"
/>





<Outlet    
     image="/DU.jpg"
     title="APPLE varsity admission 2023"
     classamount="140"
     price="299"
     alt="23" 
     link="https://www.facebook.com/free.courses.vercel/"         
     />
   <Outlet    
     image="/eng23.jpg"
     title="APPLE Engineering 2023"
     classamount="120"
     price="199"
     alt="23"
     link="/payment24"         
          
     />





     </section>
     
     <section>
     <p className="text-center text-white mt-16 text-[15px] tracking-wider underline font-bold"> <a href="/copyright">Read &copy;Copyright</a> </p>

      <p className="text-center text-white font-extrabold italic mt-1 mb-1">Apple developer 2024</p>

     </section>

    </div>
  );
}
