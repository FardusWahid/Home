"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { AlignLeft, Menu } from "lucide-react";
import { ModeToggle } from "./mode";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const prevs = [
    {
      name: "Facebook Page",
      link: "https://www.facebook.com/applecourses.netlify.app5",
    },
    {
      name: "Facebook Group",
      link: "https://www.facebook.com/groups/applecourses",
    },
    {
      name: "Apple Shop 01",
      link: "https://applecourses.netlify.app",
    },
    {
      name: "Apple Shop 02",
      link: "https://applecourses.vercel.app",
    },
  ];

  return (
    <div>
      <section className="flex flex-shrink-0 mx-5">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="z-20"
        >
          {isSidebarOpen ? (
            <AlignLeft
              strokeWidth={2.5}
              className="!size-[27px]"
              aria-label="Menu"
            />
          ) : (
            <Menu
              strokeWidth={2.5}
              className="!size-[27px]"
              aria-label="Menu"
            />
          )}
        </Button>
      </section>

      {isSidebarOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={toggleSidebar}></div>

          <aside
            className={cn(
              "fixed right-0 top-0 h-fit z-10",
              "w-[190px] md:w-[200px]",
              "bg-white dark:bg-nine",
              "shadow-xl shadow-zinc-100 dark:shadow-gray-800",
              "transform transition-transform duration-200",

              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="py-4 pl-[10px] font-sans mt-12">
              <section className="border-t border-zinc-100  dark:border-gray-800 py-2">
                <div className="flex flex-col py-1">
                  <p className="text-[16px] tracking-tighter font-bold">
                    Testifications
                  </p>
                  <Link href="/landscape">
                    <Button
                      variant="ghost"
                      className="text-[15px] flex items-center font-medium"
                    >
                      Desktop View Demo
                    </Button>
                  </Link>
                  <Link href="/phone">
                    <Button
                      variant="ghost"
                      className="text-[15px] flex items-center font-medium"
                    >
                      Mobile View Demo
                    </Button>
                  </Link>
                </div>
              </section>
              <section className="border-t border-zinc-100  dark:border-gray-800 py-2">
                <p className="text-[16px] tracking-tighter font-bold">
                  New premium site
                </p>
                <div className="flex flex-col  py-1">
                  <a href="https://ipremium.vercel.app" target="_blank">
                    <Button
                      variant="ghost"
                      className="text-[15px] flex items-center font-medium"
                    >
                      All latest Courses
                    </Button>
                  </a>
                  <a href="https://ipremium.vercel.app" target="_blank">
                    <Button
                      variant="ghost"
                      className="text-[15px] flex items-center font-medium"
                    >
                      All Free Courses
                    </Button>
                  </a>
                </div>
              </section>

              <section className="border-t border-zinc-100  dark:border-gray-800 py-2">
                <p className="text-[16px] font-bold tracking-tight">
                  Previous sites
                </p>
                <div className="flex flex-col  py-1">
                  {prevs.map((prev, index) => (
                    <a href={prev.link} key={index} target="_blank">
                      <Button
                        variant="ghost"
                        className="text-[15px] flex items-center font-medium capitalize"
                      >
                        {prev.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </section>

             

              <section className="border-t p-2 border-zinc-100 dark:border-zinc-800">
                <p className="flex items-center font-sans font-bold text-[17px] gap-0 justify-start">
                  Switch theme <ModeToggle />
                </p>
              </section>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
