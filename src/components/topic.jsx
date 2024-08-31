import Image from "next/image";
import Link from "next/link";

export default function Topic(props){

    return(
        <div className="group w-[100px] lg:w-[130px] h-[100px] lg:h-[120px] mx-2 my-3 lg:my-2 rounded-md lg:rounded-lg bg-black ring-[.2px] ring-gray-400 shadow-gray-200 shadow-md hover:ring-white hover:ring-[.5px] py-1 hover:tracking-tighter hover:shadow-none transition-all ease-in duration-100">
          <Link href={props.route}>
            <Image src={props.link}
             width={100}
              height={100}
               priority={true}
            className="h-[72px] hover:opacity-90 rounded-full group-hover:scale-90 transition-all ease-in-out duration-100 bg-black lg:w-full lg:h-[85px]"/>
            <h1 className="text-[14px] lg:text-[18px] text-center text-cyan-100 group-hover:ex group-hover:scale-125  font-sans   font-extrabold transition-all ease-in-out duration-300">{props.title}</h1></Link>

        </div>
    )
}