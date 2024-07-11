import Outlet from "@/components/course"
export default function Free(){

    return(
<div>
   
    <h1 className=" text-3xl text-center  mt-3 md:mt-0  font-extrabold tracking-tighter text-cyan-200 italic md:text-3xl">FREE COURSES</h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">
<Outlet     
image="/ict26.webp"
title="ICT DE-CODER HSC - 2026"
classamount="140"
price="FREE "
alt="ict26"
link="https://tinyurl.com/apple2026"
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
     title="ICT DE-CODER 2025"
     classamount="60"
     price="FREE "
     alt="ict"
     link="/freecourses/ict25"          
     />
     </section>
</div>
    )
}