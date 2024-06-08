import { EExam } from "@/components/data"
import { FaPenToSquare } from "react-icons/fa6";

export default function Exam(){
    return(
        <div>
        
            <h1 className="text-center mb-3 mt-3 md:mt-0 font-serif md:tracking-wider italic text-2xl md:text-4xl font-extrabold">PRACTICE EXAM</h1>

            <div className="grid items-center justify-center">
      {Object.entries(EExam).map(([subject, chapters]) => (
        <div key={subject}>
          <h2 className=" text-center bg-[#C8F560] text-black py-1 rounded-md font-sans font-extrabold text-lg m-2">{subject}</h2>
          {chapters.map(({ title, link }) => (
            <p key={link}>
              <a className="font-sans font-thin  m-5 md:text-xl md:tracking-wide ring-1 ring-yellow-900 rounded-md bg-gray-800 shadow-inner shadow-gray-900 px-3 hover:px-2 py-2 hover:font-semibold flex justify-center gap-2 transition-all ease-in-out duration-150 " href={`https://${link}`}>{title} <FaPenToSquare size={25} />
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