import Outlet from '@/components/course'
export default function  Name(props){
    return(
        <div className='select-none'>
          

          <h1 className="font-extrabold text-3xl tracking-wide text-cyan-300 text-center mt-4 md:mt-0 md:text-3xl">HSC -2025 </h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">

<Outlet
image="/HSC-25.webp"
title="ACS 2025 Physics All Cycles "
classamount="84"
price="499"
alt="py"
link="/payment25"
/>



<Outlet
image="/chee1.jpg"
title="ACS 2025 Chemistry All Cycles "
classamount="120"
price="499"
alt="che"
link="/payment25"
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