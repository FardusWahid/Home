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
      name: "Apple 2024",
      link: "https://apple2024.netlify.app",
    },
    {
      name: "Apple 2025",
      link: "https://apple25.netlify.app",
    },
    {
      name: "Apple 2026",
      link: "https://apple26.netlify.app",
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
                  <p className="text-[16px] tracking-tighter font-semibold">
                    Testifications
                  </p>
                  <Link href="/showcase">
                    <Button
                      variant="ghost"
                      className="text-[15px] flex items-center font-medium"
                    >
                      View ScreenShots
                    </Button>
                  </Link>
                </div>
              </section>
              <section className="border-t border-zinc-100  dark:border-gray-800 py-2">
                <p className="text-[16px] tracking-tighter font-semibold">
                  New premium site(v2)
                </p>
                <div className="flex flex-col  py-1">
                  <a href="https://applepremium.netlify.app" target="_blank">
                    <Button
                      variant="ghost"
                      className="text-[15px] flex items-center font-medium"
                    >
                      All latest Courses
                    </Button>
                  </a>
                </div>
              </section>

              <section className="border-t border-zinc-100  dark:border-gray-800 py-2">
                <p className="text-[16px] font-semibold tracking-tight">
                  Previous sites (v1)
                </p>
                <div className="flex flex-col  py-1">
                  {prevs.map((prev, index) => (
                    <a href={prev.link} key={index} target="_blank">
                      <Button
                        variant="ghost"
                        className="text-[15px] flex items-center font-medium lowercase"
                      >
                        {prev.name} old site
                      </Button>
                    </a>
                  ))}
                </div>
              </section>

              <section className="border-t border-zinc-100  dark:border-gray-800 py-2">
                <p className="text-[16px] font-semibold tracking-tight">
                  Important links
                </p>
                <div className="flex flex-col py-1">
                  <a
                    href="https://www.facebook.com/applecourses.netlify.app5"
                    target="_blank"
                  >
                    <Button variant="ghost" className="text-[15px] font-medium">
                      Facebook page
                    </Button>
                  </a>

                  <a
                    href="https://www.facebook.com/groups/applecourses"
                    target="_blank"
                  >
                    <Button variant="ghost" className="text-[15px] font-medium">
                      Facebook group
                    </Button>
                  </a>
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
