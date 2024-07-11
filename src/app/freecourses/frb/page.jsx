"use client"
import { GrDocumentPdf } from "react-icons/gr";
import { FaPenToSquare } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import Link from "next/link";


function Page({name, route}){

   return(
      <div>
      <section className="w-9/12 mt-4 hover:text-lg text-cyan-100  ring-1 hover:ring-yellow-300 hover:ring-[.5px]  hover:text-purple-200 m-auto md:w-1/4 p-[10px] 
  rounded-lg transition-all ease-in duration-100">

         <Link className="flex justify-center gap-4 font-semibold w-full"
          href={route}>{name} <GrNext size={27} /></Link>
       </section>

      </div>
   )
}


export default function Ict(){



    return(
<div>
        
            <div>
<h2 className="text-center my-3 md:mt-0 font-sans font-extrabold text-cyan-400 text-[33px] md:text-5xl">Final Revision 2024 </h2>

<Page name="Mathematics 1st paper" route="/freecourses/frb/math" />
<Page name="Mathematics 2nd " route="/freecourses/frb/math2" />
<Page name="Physics 1st paper" route="/freecourses/frb/phy/1st" />
<Page name="Physics 2nd paper" route="/freecourses/frb/phy/2nd" />
<Page name="Chemistry 1st paper" route="/freecourses/frb/chem/1st" />
<Page name="Chemistry 2nd paper" route="/freecourses/frb/chem/2nd" />
<Page name="BP English winner 2.0" route="/freecourses/frb/bio"/>


 
 <section className="w-9/12 mt-4 text-lg hover:text-xl text-cyan-100 italic ring-1 hover:ring-yellow-300 hover:ring-[.5px]  hover:text-purple-200 m-auto md:w-1/4 p-[10px] 
  rounded-lg transition-all ease-in duration-100">
         <Link className="flex gap-5 justify-center"
          href="/freecourses/frb/final-exam"><h1 className="font-sans tracking-wider font-extrabold ">Practice Exams</h1> <FaPenToSquare size={24}  /></Link>
       </section>
 <section className="w-9/12 mt-4 font-extrabold hover:text-[17px] text-cyan-100 italic ring-1 hover:ring-yellow-300 hover:ring-[.5px]  hover:text-purple-200 m-auto md:w-1/4 p-[10px] 
  rounded-lg transition-all ease-in duration-100">
  <Link className="w-full flex justify-center gap-1" href="https://tinyurl.com/frb244"> Lecture & Practice sheets <GrDocumentPdf size={25} color="white"/>
 </Link> 
 </section>



 <Page name="ICT Decoder 2025" route="/freecourses/ict25"/>
 <Page name="ICT Decoder 2026" route="https://tinyurl.com/apple2026"/>



            </div>





       

   
       <br />

        </div>
    )
}