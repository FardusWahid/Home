import Caru from "@/components/Car";
import Outlet from "@/components/course";
import Custom from "@/components/custom";
import Topic from "@/components/topic";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IoChevronForwardCircleSharp } from "react-icons/io5";



export default function Home(props) {
  return (
    <div className="select-none">

<div className="md:flex md:flex-row-reverse justify-between  w-full ">

<div className="w-full bg-black mt-4  text-white flex md:w-1/2 lg:w-[600px]  justify-center xl:mx-4">

<Caru/>
</div>


<h1 className="text-center md:hidden font-serif font-thin tracking-widest mt-5 text-white italic text-[16px]"> Select Category</h1>
    <div className="wd m-auto bg-black  md:w-1/2 lg:w-[550px] md:mx-3 flex flex-wrap justify-between mt-1 xl: xl:mx-12 xl:mt-5">
    <Topic link="/adastra.png"
          title="ADMISSION"
          route="/admission"/>

<Topic link="/kid.png"
          title="HSC- 2026"
          route="/h26"
          />

<Topic link="/wing.png"
          title="HSC- 2025"
          route="/h25"/>


 
    <Topic link="/hack.png"
          title="Skill Dev.."
          route="/skill" />

<Topic link="/pdf.png"
          title="E-books"
          route="/ebook" />

<Topic link="/face.png"
          title="Facebook"
          route="https://www.facebook.com/apple.courses.netlify.app.3.0"/>
  </div>
</div>


<div className="mt-6 flex justify-center ">
  <Link className="shadow-inner shadow-white flex mb-1 w-[320px]  justify-center rounded-lg bg-blue-200 hover:bg-blue-300 hover:tracking-wide transition-all ease-in duration-150  text-xl font-extrabold font-sans px-6  py-2 md:hidden text-black" href="/freecourses">Free Courses &nbsp;<IoChevronForwardCircleSharp size={31} />
</Link>    
  </div>

<br className="md:hidden"/>
 
<p className="bg-[#C8F560] text-black font-sans font-extrabold italic mt-1 shadow-inner shadow-white w-[145px] mx-4 md:mx-10 py-1 px-2 rounded-lg flex justify-center">latest add<GoDotFill size={25} color="black" /></p>
     <section className="flex flex-wrap gap-4 m-1 mt-0 md:m-5 justify-between">



     <Outlet     
image="/ict26.webp"
title="ACS ICT DeCoder 2026"
classamount="140"
price="FREE "
alt="ict26"
link="https://tinyurl.com/apple2026"
    />

<Outlet     
image="/c1.jpg"
title="ACS 2026 Math Cycle -01"
classamount="60"
price="250"
alt="math1"
link="/payment26"
    />

<Outlet     
image="/pc1.jpg"
title="ACS 2026 Physics Cycle -01"
classamount="55"
price="250"
alt="phy1"
link="/payment26"
    />

<Outlet     
image="/eng24.webp"
title="Engineering Private Batch 2024 & archive"
classamount="140"
price="499"
alt="eng24"
link="/payment24"
    />

<Outlet
image="/HSC-25.webp"
title="ACS 2025 Physics All Cycles [Full subject]"
classamount="130"
price="499"
alt="physics"
link="/payment25"
/>

<Outlet
image="/chee1.jpg"
title="ACS 2025 Chemistry All Cycles [Full subject] "
classamount="120"
price="499"
alt="che"
link="/payment25"
/>


     <Outlet     
image="/dar.jpg"
title="Darpan Academy OneShots 2024"
classamount="97"
price="299"
alt="dar"
link="/payment24"
    />





<Custom     
image="/bio.webp"
title="ACS 2026 Biomission Cycle -01"
one="Classes 60"
two="Webapp recorded"
three="2025 archive"
price="450"
alt="bio1"
link="/payment26"
    />





<Outlet     
image="/cc1.webp"
title="ACS 2026 Chemistry Cycle -01"
classamount="57"
price="250"
alt="phy1"
link="/payment26"
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
     image="/ict.jpg"
     title="ACS ICT DeCoder 2025"
     classamount="60"
     price="FREE"
     alt="ict" 
     link="/freecourses/ict25"         
     />







<Outlet    
     image="/DU.jpg"
     title="ACS varsity admission 23 [Free with varsity 24]"
     classamount="140"
     price="499"
     alt="23" 
     link="https://www.facebook.com/apple.courses.netlify.app.3.0/"         
     />
   <Outlet    
     image="/eng23.jpg"
     title="ACS Engineering 23 [Free with Engineering 2024]"
     classamount="120"
     price="499"
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
