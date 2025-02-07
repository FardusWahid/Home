import Image from "next/image";
import Link from "next/link";
import { oswald } from "../lib/fonts";
import Sidebar from "./Sidebar";
import clsx from "clsx";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-2 px-0 md:px-2 w-full bg-white shadow-md shadow-zinc-50 dark:shadow-nine dark:bg-eight">
     <Link
        href="/"
        className={clsx(oswald.className, "flex gap-0 group items-center md:ml-2 lg:scale-110 cool")}
      >
        <Image
          src="/applesv.svg"
          alt="ACS Shop"
          width={47}
          height={46}
          priority={true}
          loading="eager"
          className="dark:invert object-cover flex-shrink-0"
        />
        <span className="text-[29px] dark:text-cyan-50 tracking-tight ml-[-2px] relative top-[4.5px]">
          Premium
        </span>
      </Link>


      <section>
        <Sidebar />
      </section>
    </div>
  );
}
