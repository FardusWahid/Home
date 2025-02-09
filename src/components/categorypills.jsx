"use client";
import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Copy } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useMyContext } from "./context/context";
import { cn } from "@/lib/utils";
import ScrollContainer from "react-indiana-drag-scroll";
import CopyDialog from "./copy";

export const Category = ({ names }) => {
  const { select, setSelect } = useMyContext();
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const container = scrollRef.current.getElement(); // Get the underlying DOM element
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current.getElement();
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current.getElement();
      container.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current?.getElement();
    if (container) {
      checkScrollPosition(); // Check on initial render
      container.addEventListener("scroll", checkScrollPosition);

      // Clean up event listener on component unmount
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <div className="flex overflow-x-auto relative z-50">
      {showLeft && (
        <div className="absolute max-md:hidden left-0 z-10 flex items-center bg-gradient-to-r from-white dark:from-gray-900 from-50% to-transparent w-14 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-9"
            onClick={scrollLeft}
          >
            <ChevronLeft className="!size-[30px]" />
          </Button>
        </div>
      )}
      <ScrollContainer
        className="flex overflow-x-auto scroll-smooth space-x-[6px] md:space-x-3 ml-[3px]"
        style={{
          scrollbarWidth: "none",
        }}
        ref={scrollRef}
      >
        {names &&
          names.map((name) => (
            <Button
              variant={select === name.base64audit ? "default" : "secondary"}
              key={name.systemfile}
              className={cn(
                "rounded-md font-semibold h-8 md:h-9 transition-none"
              )}
              onClick={() => setSelect(name.base64audit)}
            >
              {name.systemfile}
            </Button>
          ))}
          <CopyDialog links={[{id:"website", url: "https://applecourses.vercel.app"}]} key="copy" buttonName="Copy & Share" ButtonIcon={Copy} mode="secondary" />
      </ScrollContainer>
      {showRight && (
        <div className="absolute max-md:hidden right-0 z-10 flex items-center justify-end bg-gradient-to-l from-white dark:from-gray-900 from-50% to-transparent w-14 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-9"
            onClick={scrollRight}
          >
            <ChevronRight className="!size-[30px]" />
          </Button>
        </div>
      )}
    </div>
  );
};
