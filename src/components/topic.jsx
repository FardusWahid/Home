import Link from "next/link";

export default function NeonTextTopic(props) {
  return (
    <div className="w-[100px] h-[100px] hover:scale-110 hover:rotate-2 lg:hover:rotate-1 transition-transform  lg:w-[150px] lg:h-[140px] tracking-tighter  mx-1 my-3 lg:my-2 flex items-center justify-center rounded-lg group shadow-[0_0_15px_0_rgba(58,172,245,0.9)]  duration-150 ease-in">
      <Link href={props.route}>
      <span className="text-center shad flex justify-center text-3xl lg:text-5xl font-serif font-extrabold lg:font-normal italic  lg:font-[fantasy]">
  {props.title}
</span>


      </Link>
    </div>
  );
}
