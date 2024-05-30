import Outlet from "@/components/course"
export default function Free(){

    return(
<div>
   
    <h1 className=" text-2xl text-center from-yellow-200 mt-2 md:mt-0  to-blue-700 bg-gradient-to-r anton bg-clip-text text-transparent md:text-3xl">FREE COURSES</h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">

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