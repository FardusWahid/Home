import Image from "next/image"
import Link from "next/link"

const Slide = (props) => {
  return (
    <div>
<Link href={props.go}>
        <Image src={props.src} width={780} loading="lazy" height={350} className="w-full rounded-[3px] object-cover" />
        <h1 className='text-center bg-gray-950 text-white py-[8px] font-extrabold font-sans text-lg mt-[0.5px] rounded-[4px]'>{props.line}</h1>
    </Link>
    </div>
  )
}

export default Slide