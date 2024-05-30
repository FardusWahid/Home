import { EExam } from "@/components/data"
import Navbar from "@/components/header"
import { FaPenToSquare } from "react-icons/fa6";

export default function Exam(){
    return(
        <div>
            <Navbar/>
            <h1 className="text-center mb-3 font-sans italic text-2xl md:text-4xl font-extrabold">FINAL EXAM</h1>

            <div className="grid items-center justify-center">
      {Object.entries(EExam).map(([subject, chapters]) => (
        <div key={subject}>
          <h2 className=" text-center bg-[#C8F560] text-black font-extrabold font-serif py-1 rounded-md shadow-inner shadow-yellow-700 m-2">{subject}</h2>
          {chapters.map(({ title, link }) => (
            <p key={link}>
              <a className="font-mono m-5 md:text-xl md:tracking-wide ring-1 ring-yellow-900 rounded-md bg-gray-800 px-2 tracking-tighter flex justify-center gap-2" href={`https://${link}`}>{title} <FaPenToSquare size={20} />
</a>
            </p>
          ))}
        </div>
      ))}
    </div>  <br /><br />
    <p className="text-center font-mono font-medium">&copy;2024</p>         
            
       
        </div>
    )
}