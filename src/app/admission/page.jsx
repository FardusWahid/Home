import Outlet from '@/components/course'
export default function  Name(props){
    return(
        <div>
         

          <h1 className="font-extrabold text-3xl tracking-wider text-cyan-300 text-center mt-4 md:mt-0 md:text-3xl">Admission.. </h1>

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
     title="ACS varsity admission 2023 [Free with 2024 varsity]"
     classamount="140"
     price="499"
     alt="23" 
     link="https://www.facebook.com/apple.courses.netlify.app.3.0/"         
     />
   <Outlet    
     image="/eng23.jpg"
     title="ACS Engineering 2023 [FREE with 24 Engineering]"
     classamount="120"
     price="499"
     alt="23"
     link="/payment24"
          
     />
     </section>
        </div>
    )
}