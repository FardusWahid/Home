import Outlet from '@/components/course'
export default function  Name(props){
    return(
        <div>
         

          <h1 className="mt-3 md:mt-0 mx-7 font-mono bg-gray-900 w-fit px-3 py-[3px] rounded-md ring-[0.5px] text-sm shadow-inner shadow-black ring-blue-800">Admission 2024</h1>

<section className="flex flex-wrap gap-4 mx-1 md:mx-7 justify-between">



<Outlet     
image="/eng24.webp"
title="ACS Engineering Private Batch 2024 & archive"
classamount="140"
price="499"
alt="eng24"
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
     price="599"
     alt="var24"
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

<Outlet    
     image="/td.webp"
     title="BP Target DU 3.0 [2023]"
     classamount="180"
     price="350"
     alt="du3"
     link="/payment24"         
     />

     </section>
        </div>
    )
}