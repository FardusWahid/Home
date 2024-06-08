import { GrDocumentPdf } from "react-icons/gr";
import { FaPenToSquare } from "react-icons/fa6";


import { GrNext } from "react-icons/gr";
export default function Ict(){
    return(
<div>
        
            <div>
<h2 className="text-center my-3 font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-sky-200 to-blue-900 text-[33px] md:text-5xl">Final Revision 2024 </h2>


<section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#000102a8] to-[#230442a5] shadow-inner shadow-gray-700 ring-1 hover:ring-yellow-400 hover:tracking-wider rounded-lg transition-all ease-in duration-150">
         <a className="flex gap-4  hover:text-yellow-200 "
          href="/freecourses/frb/math"><h1 className="font-mono font-extrabold">Mathematics 1st</h1> <GrNext size={25} /></a>
       </section>


       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#2b28586e] to-[#040001] shadow-inner shadow-blue-800 ring-1 hover:ring-yellow-400 hover:tracking-wider rounded-lg transition-all ease-in duration-150">
         <a className="flex gap-4 text-gray-200 hover:text-yellow-200 "
          href="/freecourses/frb/math2"><h1 className="font-mono font-extrabold ">Mathematics 2nd</h1> <GrNext size={25} /></a>
       </section>


       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#420505]  to-[#1f0404] ring-1 hover:ring-yellow-400 hover:tracking-wider rounded-lg shadow-inner shadow-red-900 transition-all ease-in duration-150">
         <a className="flex gap-6 text-gray-200 hover:text-yellow-200 "
          href="/freecourses/frb/phy/1st"><h1 className="font-mono font-extrabold ">Physics 1st</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#06670b00]  to-[#5d062982] ring-1 hover:ring-yellow-400 hover:tracking-wider shadow-green-900 rounded-lg shadow-inner transition-all ease-in duration-150">
         <a className="flex gap-5 text-gray-200 hover:text-yellow-200 "
          href="/freecourses/frb/phy/2nd"><h1 className="font-mono font-extrabold ">Physics 2nd</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#44beff00]  to-[#31080565] ring-1 hover:ring-yellow-400 hover:tracking-wider rounded-lg shadow-inner shadow-blue-700 transition-all ease-in duration-150">
         <a className="flex gap-5 text-gray-200 hover:text-yellow-200 "
          href="/freecourses/frb/chem/1st"><h1 className="font-mono font-extrabold ">Chemistry 1st</h1> <GrNext size={25} /></a>
       </section>
       
       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#060123]  to-[#060b07] ring-1 hover:ring-yellow-400 hover:tracking-wider rounded-lg shadow-inner shadow-gray-700 transition-all ease-in duration-150">
         <a className="flex gap-4 text-gray-200 hover:text-yellow-200 "
          href="/freecourses/frb/chem/2nd"><h1 className="font-mono font-extrabold ">Chemistry 2nd</h1> <GrNext size={25} /></a>
       </section>



       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#62ff0007] to-[#18072d] ring-1 hover:ring-yellow-400 tracking-tighter hover:tracking-wide rounded-lg shadow-lg shadow-blue-950 transition-all ease-in duration-150">
         <a className="flex gap-2 text-gray-200 hover:text-yellow-200 "
          href="/freecourses/frb/bio"><h1 className="font-mono font-extrabold">The Forbidden Chapter</h1> <GrNext size={25} /></a>
       </section>

            </div>
            <section className="w-5/6 m-auto md:w-1/4 mt-2 p-2">
 <p> <a className="text-[15px] flex justify-center tracking-wide font-extrabold gap-2 shadow-md shadow-lime-950 md:px-17 md:text-[16px] ring-1 ring-pink-900 py-2 rounded-md text-yellow-100 bg-gradient-to-r from-black via-gray-900 to-red-950 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-lime-300 " href="https://tinyurl.com/frb244" target="_blank"> Lecture & Practice sheets <GrDocumentPdf size={22} color="yellow"/>
 </a></p> 
 </section>

            <section className="w-5/6 mt-4 m-auto flex md:w-1/4 p-2 justify-center
bg-gradient-to-r from-[#5f300baf] to-[#49012a] ring-1 hover:ring-yellow-400 hover:tracking-wider rounded-lg shadow-lg shadow-blue-950 transition-all ease-in duration-150">
         <a className="flex gap-5 text-gray-200 hover:text-yellow-200 "
          href="/freecourses/frb/final-exam"><h1 className="font-sans tracking-wider font-extrabold ">Practice Exams</h1> <FaPenToSquare size={24}  /></a>
       </section>




       
       
       <br />

        </div>
    )
}