"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { AlignLeft, Menu, Share2 } from "lucide-react";
import { ModeToggle } from "./mode";
import Link from "next/link";
import CopyDialog from "./copy";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const prevs = [
    {
      name: "All Free Courses",
      link: "/free",
    },
    {
      name: "Facebook Page",
      link: "https://www.facebook.com/applecourses.netlify.app5",
    },
    {
      name: "Facebook Private Group",
      link: "https://www.facebook.com/groups/applecourses",
    },
    {
      name: "Facebook Public Group (new)",
      link: "https://www.facebook.com/groups/applecourses.vercel.appp",
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
      <section className="flex flex-shrink-0 mx-2 md:mx-5">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="z-30"
        >
          <div className="transition-transform duration-100 ease-in-out">
            {isOpen ? (
              <AlignLeft
                strokeWidth={2.5}
                className="!size-[32px]"
                aria-label="Menu"
              />
            ) : (
              <Menu
                strokeWidth={2.5}
                className="!size-[27px]"
                aria-label="Menu"
              />
            )}
          </div>
        </Button>
      </section>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-20 transition-all duration-200 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-screen w-72 bg-white dark:bg-nine z-20
          shadow-lg shadow-zinc-100/20 dark:shadow-gray-800/20
          transform transition-transform duration-100 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className="py-4 px-4 mt-12 overflow-y-auto transition-none scroll-auto max-h-[calc(100vh-3rem)]"
          style={{ scrollbarWidth: "none" }}
        >
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
                  Premium Course Login
                </Button>
              </a>
              <a href="https://ipremium.vercel.app" target="_blank">
                <Button
                  variant="ghost"
                  className="text-[15px] flex items-center font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  Premium App Login
                </Button>
              </a>
            </div>
          </section>

          <section className="border-t border-zinc-100 dark:border-gray-800 py-2">
            <p className="text-[16px] font-bold tracking-tight">Useful Links</p>
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
            <CopyDialog
              links={[{ id: "app", url: "https://applecourses.vercel.app" }]}
              buttonName="Copy Sharable link"
            />
          </section>

          <section className="border-t px-2 border-zinc-100 dark:border-zinc-800 dark:border-opacity-50">
            <div className="flex items-center font-semibold tracking-tight text-[16px] gap-0 justify-start">
              Switch theme to <ModeToggle />
            </div>
          </section>
          <section className="mt-2 p-0"></section>
        </div>
      </aside>
    </div>
  );
}
