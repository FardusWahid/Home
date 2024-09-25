import Outlet from '@/components/course'
import Custom from '@/components/custom'
export default function  Name(props){
    return(
        <div className='select-none'>
          

          <h1 className="mt-3 md:mt-0 mx-7 font-mono bg-gray-900 w-fit px-3 py-[3px] rounded-md ring-[0.5px] text-sm shadow-inner shadow-black ring-pink-600">HSC 2025</h1>

<section className="flex flex-wrap gap-4 mx-1 md:mx-7 justify-between">

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