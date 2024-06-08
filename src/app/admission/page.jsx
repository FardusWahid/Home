import Outlet from '@/components/course'
export default function  Name(props){
    return(
        <div>
         

          <h1 className="font-extrabold text-2xl text-center from-yellow-200 mt-2 md:mt-0 md:text-3xl">Admission </h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">



<Outlet     
image="/eng24.webp"
title="ACS Engineering Private Batch 2024"
classamount="140"
price="499"
alt="eng24"
link="/payment24"
    />


<Outlet    
     image="/DU.jpg"
     title="ACS varsity admission 2023"
     classamount="140"
     price="299"
     alt="23" 
     link="https://www.facebook.com/free.courses.vercel/"         
     />
   <Outlet    
     image="/eng23.jpg"
     title="ACS Engineering 2023"
     classamount="120"
     price="199"
     alt="23"
     link="/payment24"
          
     />
     </section>
        </div>
    )
}