import Outlet from '@/components/course'
import Custom from '@/components/custom'
export default function  Name(props){
    return(
        <div className='select-none'>
       

          <h1 className="font-extrabold text-2xl text-center mt-2 md:mt-0 md:text-3xl">HSC -2026 </h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">



<Outlet     
image="/ict26.webp"
title="ACS ICT DeCoder 2026"
classamount="140"
price="299"
alt="ict26"
link="/payment26"
    />

<Custom     
image="/c1.jpg"
title="ACS Math Cycle 1"
one="Classes 57"
two="Webapp recorded"
three="2025 archive"
price="250"
alt="math1"
link="/payment26"
    />

<Custom     
image="/pc1.jpg"
title="ACS Physics Cycle 1"
one="Classes 57"
two="Webapp recorded"
three="2025 archive"
price="250"
alt="phy1"
link="/payment26"
    />

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

<Custom     
image="/cc1.webp"
title="ACS Chemistry Cycle 1"
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