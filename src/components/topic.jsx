import Image from "next/image";
import Link from "next/link";

export default function Topic(props){

    return(
        <div className="w-[100px] lg:w-[130px] h-[100px] lg:h-[120px] mx-2 my-3 lg:my-2 rounded-md lg:rounded-lg bg-black shadow-md ring-[.2px] ring-white shadow-gray-500 hover:ring-[1.3px] hover:shadow-none  p-1 hover:tracking-tighter    transition-all ease-in duration-100 ">
          <Link href={props.route}>  <Image src={props.link} width={150} height={100} objectFit="cover" className="h-[72px] bg-black lg:w-full lg:h-[85px] "/>
            <h1 className="text-sm lg:text-lg italic text-center text-cyan-100  font-sans  font-extrabold ">{props.title}</h1></Link>

        </div>
    )
}