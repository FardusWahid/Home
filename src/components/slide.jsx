import Image from "next/image";
import Link from "next/link";

const Slide = (props) => {
  return (
    <div className="rounded-[4px] overflow-hidden">
      <Link href={props.go} passHref>
       
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <Image 
              src={props.src} 
              alt={props.line} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-[3px]" 
              loading={props.loading}
              priority={props.priority} 
            />
          </div>
          <h1 className="text-center bg-gradient-to-r shad from-gray-950 via-gray-900 to-gray-950 text-white py-[8px] font-extrabold font-sans text-lg rounded-[4px]">
            {props.line}
          </h1>
       
      </Link>
    </div>
  );
};

export default Slide;
