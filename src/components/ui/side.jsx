"use client";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { useMyContext } from "../context/context";
import Link from "next/link";
import { ModeToggle } from "../mode";
import { Slide } from "@/app/[view]/file";
import {
  Superscript,
  Pyramid,
  Atom,
  Omega,
  Radiation,
  Earth,
  Book,
  Archive,
  Music,
  Cat,
  LibraryBig,
  Bolt,
  Pipette,
  Sprout,
  Folder,
  AtSignIcon,
  Binary,
  CodeXml,
  Scale3d,
  ListVideo,
  Zap,
  Flame,
  Braces,
} from "lucide-react";
import { roboto } from "@/lib/fonts";
import clsx from "clsx";
import CopyDialog from "../copy";
const ICON_MAP = {
  Superscript,
  Pyramid,
  Atom,
  Omega,
  Radiation,
  Earth,
  Book,
  Archive,
  Music,
  Cat,
  LibraryBig,
  Bolt,
  Pipette,
  Sprout,
  Binary,
  CodeXml,
  Scale3d,
  Folder,
  AtSignIcon,
  Zap,
  Flame,
  Braces,
};

const Sidebar = ({ chapters, mats }) => {
  const { select, setSelect } = useMyContext();

  return (
    <div
      className={clsx(
        "flex border-r border-zinc-100 dark:border-gray-900 flex-col gap-[9px] py-2 px-1 font-semibold md:max-w-[165px] xl:max-w-[175px] max-h-[calc(100vh-65px)] overflow-y-auto",
        roboto.className
      )}
      style={{ scrollbarWidth: "none" }}
    >
      {chapters.map((chapter) => {
        const Icon = ICON_MAP[chapter.icon];
        return (
          <Button
            key={chapter.systemfile}
            variant={select === chapter.base64audit ? "secondary" : "ghost"}
            onClick={() => setSelect(chapter.base64audit)}
            className={cn(
              "rounded-sm text-[14px] dark:font-medium font-semibold w-full flex justify-start items-center gap-2 py-3 pl-2 transition-all duration-150"
            )}
          >
            <span>
              <Icon size={22} strokeWidth={1.7} />
            </span>
            <span className="overflow-hidden">{chapter.systemfile}</span>
          </Button>
          
        );
      })}


      <section className="border-t border-zinc-50 dark:border-zinc-800 pt-3">
        <p className="pl-1 py-1 text-[16px] font-semibold">Materials</p>
        {mats.map((mat) => {
          return (
            <Link
              key={mat.name}
              href={mat.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="text-sm font-semibold w-full mt-1 pl-0 py-5 flex justify-start items-center gap-2"
              >
                <span>
                  <Folder size={23} />
                </span>
                <span className="truncate">{mat.name}</span>
              </Button>
            </Link>
          );
        })}
      </section>

      <section className="border-t border-zinc-100 dark:border-zinc-700 pt-3">
        <p className="pl-1 py-1 text-[16px] tracking-tight font-semibold">
          Relevant Courses
        </p>
        {Slide.map((s) => {
          return (
            <Link key={s.alt} href={"/courses/" + s.slug}>
              <Button
                title={s.title}
                variant="ghost"
                className="text-sm font-medium w-full tracking-tight mt-1 pl-1 flex justify-start items-center gap-2"
              >
                <span>
                  <ListVideo size={23} />
                </span>
                <span className="overflow-hidden">{s.tag}</span>
              </Button>
            </Link>
          );
        })}
      </section>

      <section className="border-t border-zinc-100 dark:border-zinc-800 pt-1">
        <div className="flex font-semibold items-center justify-start pl-1 text-[15px]">
          Switch theme <ModeToggle />
        </div>
        <div className=" font-bold text-xs pt-3 tracking-tight italic flex flex-wrap gap-2">
          <Link href="https://www.facebook.com/applecourses.netlify.app5">
            Facebook
          </Link>
          <Link href="https://applecourses.vercel.app">Shop 01</Link>
          <Link href="https://applecourses.netlify.app">Shop 02</Link>
        </div>
        <Link
          href="https://ipremium.vercel.app/referal"
          className="italic font-bold  text-xs tracking-tight flex  mt-2"
        >
          Earn 100taka for every referal
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
