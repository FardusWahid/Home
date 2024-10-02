import Image from 'next/image'
import Link from 'next/link';
import { FaVideo } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";

export default function Outlet(props){
    return(
        <div className='w-full lg:w-[400px] flex justify-center mt-5'>
          <card className=" flex justify-center items-center flex-col bg-slate-950 rounded-xl ring-1 shadow-[0px_0px_25px] shadow-pink-800 ring-gray-950 wdd">
             <Image src={props.image} alt={props.alt} width={700} height={400} loading='lazy'
               className="p-1 rounded-xl" />
              <h1 className="font-sans font-extrabold italic text-cyan-100 capitalize text-[18px] text-center my-2">{props.title}</h1>
             
             
  
   <section className="flex space-x-2 md:space-x-3  text-sm">
    <p className="tag flex gap-1"><FaVideo size={20} color='black' />Classes {props.classamount}+</p>
    <p className="tag2 flex">🌐Webapp recorded</p>
    </section>

    <section className="flex  space-x-2 md:space-x-3 mt-2 text-sm">
        <p className="tag3 flex gap-1"><MdOutlineWatchLater  size={20} color='pink' />Exam website</p>
        <p className="tag4 flex ">Study Materials<MdPictureAsPdf size={20} color='black' /></p>
        </section>



    <h1 className="text-xl my-1 tut font-extrabold text-white">Price:  <span className="font-sans font-extrabold tracking-wide text-2xl text-cyan-50 italic" > {props.price}</span>BDT </h1>
           




    <div className="relative inline-flex  group mb-3">
    <div className="absolute transitiona-all duration-150 opacity-50 -inset-px  bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-150 animate-tilt">
    </div>
        <Link href={props.link} 
          className="relative hover:scale-110 inline-flex items-center ring-1 ring-gray-800 justify-center px-5 py-2 text-lg font-bold text-white transition-all ease-in duration-150 bg-gray-900 rounded-xl  focus:ring-purple-950 "
            >Buy now </Link>
</div>






    </card>
            
        </div>
     
    )
    }
    
    Outlet.defaultProps={
        image: "/var.webp",
        alt: "ai image",
        title: "AI IS GONNA TAKE OVER THE WORLD",
        classamount: "null",
        price: "NULL"
    
    }