import Image from 'next/image'
import { FaVideo } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";




export default function Custom(props){
    return(
        <div className='w-full lg:w-[400px] flex justify-center mt-5'>
            <card className=" flex justify-center items-center flex-col shadow-lg shadow-red-900  rounded-xl ring-1 w-11/12">
              <Image src={props.image} alt={props.alt} width={780} height={350} loading='lazy'
                 className="p-1 rounded-xl" />

        <h1 className="anton text-white text-shadow text-[18px] text-center my-2">{props.title}</h1>
            <span className="flex space-x-3 beca text-sm "><p className="tag flex gap-1"><FaVideo size={20} color='black' />{props.one}+</p><p className="tag3 flex">🌐{props.two}</p></span>
              <span className=" flex beca space-x-2 mt-2 text-sm  "><p className="tag4 flex gap-1"><MdOutlineWatchLater  size={19} color='white' />{props.three}</p><p className="tag2 flex ">Study Materials<MdPictureAsPdf size={20} color='black' /></p></span>
                 <h1 className="text-xl my-1 text-white">price:  <span className="font-sans font-extrabold tracking-wide text-2xl text-shadow" > {props.price}</span>BDT </h1>
           

    <div className="relative inline-flex  group mb-3">
    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
    </div>
        <a href={props.link} title="Purchase now"
          className="relative inline-flex items-center ring-1 ring-gray-700 justify-center px-5 py-2 text-lg font-bold text-white transition-all duration-150 bg-gray-900 rounded-xl  focus:ring-purple-950 "
            role="button">Buy now </a>
</div>
</card>
</div>)}
    
    Custom.defaultProps={
        image: "/wallpaper.webp",
        alt: "ai image",
        title: "AI IS GONNA TAKE OVER THE WORLD",
        classamount: "null",
        price: "NULL"
    
    }