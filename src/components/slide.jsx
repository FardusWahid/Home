import Image from "next/image"
import Link from "next/link"

const Slide = (props) => {
  return (
    <div>
<Link href={props.go}>
        <Image src={props.src} width={1280} height={700} className="w-full rounded-[3px] object-cover" />
        <h1 className='text-center bg-gray-900 text-white py-2 font-extrabold font-sans tracking-wider text-lg mt-1 shadow-inner shadow-gray-700 rounded-[4px]'>{props.line}</h1>
    </Link>
    </div>
  )
}

export default Slide