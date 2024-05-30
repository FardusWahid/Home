import Caru from "@/components/Car";
import Topic from "@/components/topic";
import Image from "next/image";

export default function Home(props) {
  return (
    <div>

<div className="md:flex md:flex-row-reverse justify-between  w-full ">

<div className="w-full bg-black mt-4  text-white flex md:w-1/2 lg:w-[600px]  justify-center">

<Caru/>
</div>


<h1 className="text-center md:hidden  mt-5 text-yellow-300 text-lg md:text-[22px] font-[fantasy] tracking-wider  font-extrabold"> Select Category</h1>
    <div className="w-11/12 m-auto  md:w-1/2 lg:w-[550px] md:mx-3 flex flex-wrap justify-between mt-0  ">
    <Topic link="/add2.webp"
          title="ADMISSION"
          route="/admission"/>

<Topic link="https://rootsedulive.com/static/media/backpack.ce6cf69a.svg"
          title="HSC- 2026"
          route="/h26"
          />

<Topic link="/books.png"
          title="HSC- 2025"
          route="/h25" />


    <Topic link="https://rootsedulive.com/static/media/school.9ce23c5d.svg"
          title="HSC- 2024"
          route="/h24"/>

 
    <Topic link="/skill.png"
          title="Skill Dev.."
          route="/skill" />

<Topic link="/mone.jpg"
          title="Earn"
          route="/make-money" />
  </div>
</div>

    </div>
  );
}
