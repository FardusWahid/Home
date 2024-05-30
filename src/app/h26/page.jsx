import Outlet from '@/components/course'
export default function  Name(props){
    return(
        <div>
       

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

<Outlet     
image="/c1.jpg"
title="ACS Math Cycle 1"
classamount="60"
price="299"
alt="math1"
link="/payment26"
    />

<Outlet     
image="/pc1.jpg"
title="ACS Physics Cycle 1"
classamount="55"
price="299"
alt="phy1"
link="/payment26"
    />



<Outlet     
image="/cc1.webp"
title="ACS Chemistry Cycle 1"
classamount="57"
price="299"
alt="phy1"
link="/payment26"
    />
    
     </section>
        </div>
    )
}