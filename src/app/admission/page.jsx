import Outlet from '@/components/course'
export default function  Name(props){
    return(
        <div>
         

          <h1 className="font-extrabold text-3xl tracking-wider text-cyan-300 text-center mt-4 md:mt-0 md:text-3xl">Admission.. </h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">



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
     price="699"
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