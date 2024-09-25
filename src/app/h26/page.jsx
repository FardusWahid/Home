import Outlet from '@/components/course'
import Custom from '@/components/custom'
export default function  Name(props){
    return(
        <div className='select-none'>
       

       <h1 className="mt-3 md:mt-0 mx-7 font-mono bg-gray-900 w-fit px-3 py-[3px] rounded-md ring-[0.5px] text-sm shadow-inner shadow-black ring-blue-800">HSC 2026</h1>

<section className="flex flex-wrap gap-4 mx-1 md:mx-7 justify-between">



<Outlet     
image="/ict26.webp"
title="ACS ICT DeCoder HSC 2026"
classamount="140"
price="FREE "
alt="ict26"
link="https://tinyurl.com/apple2026"
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
     image="/bpc266.webp"
     title="BP Chemistry 1st paper 26"
     classamount="60"
     price="450"
     alt="chem26" 
     link="/payment26"         
     />

<Custom     
image="/c1.jpg"
title="ACS 2026 Math Cycle -01"
one="Classes 57"
two="Webapp recorded"
three="2025 archive"
price="250"
alt="math1"
link="/payment26"
    />

<Custom     
image="/pc1.jpg"
title="ACS 2026 Physics Cycle -01"
one="Classes 57"
two="Webapp recorded"
three="2025 archive"
price="250"
alt="phy1"
link="/payment26"
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

<Custom     
image="/cc1.webp"
title="ACS 2026 Chemistry Cycle -01"
one="Classes 57"
two="Webapp recorded"
three="2025 archive"
price="250"
alt="chem1"
link="/payment26"
    />
    
     </section>
        </div>
    )
}