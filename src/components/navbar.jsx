import Image from "next/image";
import Link from "next/link";
import { oswald } from "../lib/fonts";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-2 w-full bg-white shadow-md shadow-zinc-50 dark:shadow-nine dark:bg-eight">
      <Link
        href="/"
        className={cn(oswald.className, "flex gap-1 active:scale-95 transition-transform duration-150 items-center px-2")}
      >
        <Image
          src="/appleh.png"
          alt="logo"
          width={33}
          height={33}
          priority={true}
          loading="eager"
          className="dark:invert object-cover flex-shrink-0"
        />

        <span className="text-[29px] tracking-tight relative top-[5px]">
          Premium
        </span>
      </Link>

      <section>
        <Sidebar />
      </section>
    </div>
  );
}
