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
          <div className="transition-all duration-200 ease-in-out">
            {isSidebarOpen ? (
              <AlignLeft
                strokeWidth={2.5}
                className="size-[30px] transition-transform"
                aria-label="Close menu"
              />
            ) : (
              <Menu
                strokeWidth={2.5}
                className="size-[27px] transition-transform"
                aria-label="Open menu"
              />
            )}
          </div>
        </Button>
      </section>

      {/* Backdrop with fade animation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-10",
          "animate-in fade-in duration-100",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out",
          !isSidebarOpen && "hidden"
        )}
        onClick={toggleSidebar}
        data-state={isSidebarOpen ? "open" : "closed"}
      />

      {/* Sidebar with slide animation */}
      <aside
        className={cn(
          "fixed right-0 top-0 h-screen z-10",
          "w-fit md:pl-5",
          "bg-white dark:bg-nine",
          "shadow-lg shadow-zinc-100/20 dark:shadow-gray-800/20",
          "animate-in fade-in duration-0 ease-in",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right",
          !isSidebarOpen && "hidden"
        )}
        data-state={isSidebarOpen ? "open" : "closed"}
      >
        <div className="py-4 pl-[10px] font-sans mt-12 overflow-y-auto max-h-[calc(100vh-3rem)]">
          <section className="border-t border-zinc-100 dark:border-gray-800 py-2">
            <div className="flex flex-col py-1">
              <p className="text-[16px] tracking-tighter font-bold">
                Testifications
              </p>
              <Link href="/landscape">
                <Button
                  variant="ghost"
                  className="text-[15px] flex items-center font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  Desktop View Demo
                </Button>
              </Link>
              <Link href="/phone">
                <Button
                  variant="ghost"
                  className="text-[15px] flex items-center font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  Mobile View Demo
                </Button>
              </Link>
            </div>
          </section>

          <section className="border-t border-zinc-100 dark:border-gray-800 py-2">
            <p className="text-[16px] tracking-tighter font-bold">
              New premium site
            </p>
            <div className="flex flex-col py-1">
              <a href="https://ipremium.vercel.app" target="_blank">
                <Button
                  variant="ghost"
                  className="text-[15px] flex items-center font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  All latest Courses
                </Button>
              </a>
              <a href="https://ipremium.vercel.app" target="_blank">
                <Button
                  variant="ghost"
                  className="text-[15px] flex items-center font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  All Free Courses
                </Button>
              </a>
            </div>
          </section>

          <section className="border-t border-zinc-100 dark:border-gray-800 py-2">
            <p className="text-[16px] font-bold tracking-tight">
              Previous sites
            </p>
            <div className="flex flex-col py-1">
              {prevs.map((prev, index) => (
                <a href={prev.link} key={index} target="_blank">
                  <Button
                    variant="ghost"
                    className="text-[15px] flex items-center font-medium capitalize hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
    </div>
  );
}
