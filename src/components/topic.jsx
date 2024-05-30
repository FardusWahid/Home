import Image from "next/image";
import Link from "next/link";

export default function Topic(props){

    return(
        <div className="w-[130px] h-[120px] m-2 rounded-lg bg-gray-950  p-2   active:tracking-tight hover:border-2 border-yellow-600  transition-all ease-in duration-100 ">
          <Link href={props.route}>  <Image src={props.link} width={130} height={70} className="h-[78px] "/>
            <h1 className="text-[19px] text-center text-cyan-100  active:tracking-tight font-sans  font-extrabold active:text-yellow-500 ">{props.title}</h1></Link>

        </div>
    )
}