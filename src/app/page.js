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


<h1 className="text-center md:hidden tut mt-5 text-cyan-200 italic text-[16px]"> Select Category</h1>
    <div className="w-[98%] m-auto bg-black  md:w-1/2 lg:w-[550px] md:mx-3 flex flex-wrap justify-around mt-1 xl: xl:mx-12 xl:mt-5">
    <Topic
          title="HSC- 2024"
          route="/admission"/>

<Topic 
          title="HSC- 2026"
          route="/h26"
          />

<Topic
          title="HSC- 2025"
          route="/h25"/>


 
    <Topic 
          title="Skill Dev.."
          route="/skill" />
<Topic
          title="Earn Cash"
          route="/refer"/>

<Topic
          title="PDFs"
          route="/ebook" />


  </div>
</div>


<div className="mt-6 w-full flex justify-center md:hidden">
<Link href="/freecourses" className="wd" >
  <span className=" font-sans font-extrabold text-xl  text-cyan-300 tracking-wide py-2
   flex rounded-[4px] justify-center ring-1 ring-gray-800 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950
    hover:via-gray-950 hover:ring-2 transition-all ease-in duration-100 hover:scale-90">
  Free Courses &nbsp;<IoChevronForwardCircleSharp size={30}/>
  </span>
</Link>    
  </div>

<br className="md:hidden"/>
 
<p className="bg-gray-900 text-cyan-200 font-sans font-semibold italic mt-1 shadow-inner shadow-pink-950 w-[145px] mx-4 md:mx-10 py-1 px-2 rounded-lg flex justify-center">latest add<GoDotFill size={25} color="pink" /></p>
     <section className="flex flex-wrap gap-4 m-1 mt-0 md:m-5 justify-between">


     <Outlet     
image="/eng24.webp"
title="Engineering Private Batch 2024 & archive"
classamount="140"
price="499"
alt="eng24"
link="/payment24"
    />

     <Outlet    
     image="/var.webp"
     title="ACS varsity admission 2024 & archive"
     classamount="170"
     price="499"
     alt="var24"
     link="/payment24"         
     />



<Outlet     
image="/akan.webp"
title="ব্যাচ আকাঙ্ক্ষা season 2 HSC 2026"
classamount="70"
price="399"
alt="akan"
link="/payment24"
    />



<Outlet    
     image="/med24.webp"
     title="ACS Medical admission 2024"
     classamount="180"
     price="699"
     alt="med24"
     link="/payment24"         
     />

<Outlet    
     image="/td.webp"
     title="BP Target DU 3.0 [2023]"
     classamount="180"
     price="350"
     alt="du3"
     link="/payment24"         
     />

     <Outlet    
     image="/bpc266.webp"
     title="BP Chemistry 1st paper 26"
     classamount="60"
     price="450"
     alt="chem26" 
     link="/payment26"         
     />

<Custom     
image="/e4.webp"
title="BP English Winner 4.0"
one="Classes 60"
two="Webapp recorded"
three="3.0 archive"
price="299"
alt="e4"
link="/payment26"
    />

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
image="/HSC-25.webp"
title="ACS 2025 Physics All Cycles [Full subject]"
classamount="130"
price="499"
alt="physics"
link="/payment25"
/>

<Outlet
image="/chee1.jpg"
title="ACS 2025 Chemistry All Cycles [Full subject]"
classamount="120"
price="499"
alt="che"
link="/payment25"
/>

<Outlet     
image="/doordie.webp"
title="Do or die 2.0 [2025 & 2026]"
classamount="150"
price="450"
alt="dodie"
link="/payment25"
    />
<Outlet     
image="/BPorg2.webp"
title="BP organic Chemistry 2.0"
classamount="150"
price="299"
alt="dodie"
link="/payment25"
    />
    
<Outlet    
     image="/cps.webp"
     title="CPS Engineering Physics 24"
     classamount="120"
     price="399"
     alt="cps"
     link="/payment24"         
     />
     <Outlet    
     image="/BPengChem.webp"
     title="BP Engineering Chemistry 24"
     classamount="110"
     price="399"
     alt="cps"
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
     title="ACS ICT DECoder 2025"
     classamount="60"
     price="FREE"
     alt="ict" 
     link="/freecourses/ict25"         
     />

<Outlet     
image="/dar.jpg"
title="Darpan Academy OneShots 2024"
classamount="97"
price="299"
alt="dar"
link="/payment24"
    />


     </section>
     
     <section>
     <p className="text-center text-white mt-16 text-[15px] tut tracking-wider font-bold"> <a href="/copyright">Read &copy;<span className="underline">Copyright</span></a> </p>

      <p className="text-center text-white tut font-extrabold italic mt-1 mb-1">Apple developer 2024</p>

     </section>

    </div>
  );
}
