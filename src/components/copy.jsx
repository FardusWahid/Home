"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CopyDialog({ links, buttonName, ButtonIcon, mode }) {
  const [copiedStates, setCopiedStates] = useState(
    Object.fromEntries(links.map((link) => [link.id, false]))
  );

  const copyToClipboard = async (id, url) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedStates((prev) => ({ ...prev, [id]: true }));

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        variant={mode? `${mode}` : 'ghost'}
        className="gap-2 h-8 md:h-9">
         
          {ButtonIcon ? (
            <ButtonIcon className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          {buttonName}
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-white dark:bg-gray-950">
        <DialogHeader>
          <DialogTitle>Share links</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          {links.map((link) => (
            <div key={link.id} className="flex items-center gap-2">
              <code className="flex-1 rounded max-w-full px-3 py-2 text-[14px] sm:text-[15px] whitespace-nowrap ">
                {link.url}
              </code>
              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard(link.id, link.url)}
              >
                {copiedStates[link.id] ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
