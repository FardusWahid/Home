import Outlet from "@/components/course"
export default function Free(){

    return(
<div>
   
<h1 className="mt-3 md:mt-0 mx-7 font-mono bg-gray-900 w-fit px-3 py-[3px] rounded-md ring-[0.5px] text-sm shadow-inner shadow-black ring-blue-800 font-bold italic">All Free Courses</h1>

<section className="flex flex-wrap gap-4 mx-1 md:mx-7 justify-between">


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
     title="ICT DE-CODER 2025"
     classamount="60"
     price="FREE "
     alt="ict"
     link="/freecourses/ict25"          
     />

<Outlet     
image="/ict26.webp"
title="ICT DE-CODER HSC - 2026"
classamount="140"
price="FREE "
alt="ict26"
link="https://tinyurl.com/apple2026"
    />
     </section>
</div>
    )
}