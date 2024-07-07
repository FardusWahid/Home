import Image from "next/image"
import Link from "next/link"

const Slide = (props) => {
  return (
    <div>
<Link href={props.go}>
        <Image src={props.src} width={700} height={500} className="w-full rounded-[3px] object-cover" />
        <h1 className='text-center bg-gray-950 text-white py-[8px] font-extrabold font-sans tracking-wider text-lg mt-[0.5px] shadow-inner shadow-purple-950 rounded-[4px]'>{props.line}</h1>
    </Link>
    </div>
  )
}

export default Slide