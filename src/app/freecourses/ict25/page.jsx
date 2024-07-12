import { GrNext } from "react-icons/gr";
import Link from "next/link";

function Page({name, route}){

    return(
       <div>
       <section className="w-9/12 mt-4 italic hover:text-[17px] text-cyan-100 hover:bg-pink-950 ring-[.4px] ring-pink-500  hover:ring-1 hover:ring-pink-950  hover:text-purple-200 m-auto md:w-1/4 p-[10px] 
  rounded-lg transition-all ease-in duration-100">
 
          <Link className="flex justify-center gap-3 md:gap-4 w-full"
           href={route}>{name} <GrNext size={27} /></Link>
        </section>
 
       </div>
    )
 }

export default function Ict(){
    return(
        <div>
        
            <div>
            <h2 className="text-center font-sans mt-2 md:mt-0 font-extrabold text-cyan-400 tracking-tighter md:tracking-normal text-[36px] md:text-5xl">ICT DE-CODER 2025</h2><br className="max-sm:hidden" />

<Page name="Chapter 1 & 2" route="/freecourses/ict25/chap12" />
<Page name="Chapter 3" route="/freecourses/ict25/chap3" />
<Page name="Chapter 4   " route="/freecourses/ict25/chap4" />
<Page name="Chapter 5" route="/freecourses/ict25/chap5" />
<Page name="ICT DeCoder 2026" route="https://tinyurl.com/apple2026" />
<Page name="Physics cycles 25 " route="https://apple25.netlify.app" />
<Page name="Chemistry cycles 25 " route="https://apple25.netlify.app" />
<Page name="Facebook Group" route="https://www.facebook.com/groups/applecourses" />



<br />


            </div>
        </div>
    )
}