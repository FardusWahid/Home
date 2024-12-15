import Image from "next/image";
import Link from "next/link";
import { oswald } from "../lib/fonts";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import clsx from "clsx";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-2 w-full bg-white shadow-md shadow-zinc-50 dark:shadow-nine dark:bg-eight">
     <Link
        href="/"
        className={clsx(oswald.className, "flex gap-0 group items-center md:ml-2 cool")}
      >
        <Image
          src="/applesv.svg"
          alt="logo"
          width={46}
          height={46}
          priority={true}
          loading="eager"
          className="dark:invert object-cover flex-shrink-0"
        />
        <span className="text-[29px] tracking-tight ml-[-2px] relative top-[4.5px]">
          Premium
        </span>
      </Link>


      <section>
        <Sidebar />
      </section>
    </div>
  );
}
