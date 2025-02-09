import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { one, space } from "@/lib/fonts";
import clsx from "clsx";
import { MessageCircleMore, ShoppingCart } from "lucide-react";

export function Inbox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={clsx(
            one.className,
            "buy-button w-[75%]  font-extrabold text-lg",          )}
        >
          <span className="button_top">I am ready to buy <ShoppingCart /></span>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-50 dark:bg-gray-950 border-none">
        <DialogHeader>
          <DialogTitle
            className={clsx(space.className, "uppercase text-center text-[23px] py-2")}
          >
            Payment Process
          </DialogTitle>
          {/* Replace DialogDescription's default element */}
          <DialogDescription
            asChild
            className="select-text selection:bg-yellow-400 selection:text-black text-start w-full"
          >
            <div>
              <ol className="list-decimal pl-2 sm:pl-5 uppercase font-mono space-y-3 text-black dark:text-white tracking-tight font-extrabold text-[16px] md:text-lg">
                <li>Facebook message&apos;e course name likho.</li>
                <li>tumar Gmail address dao.</li>
                <li>
                  Bkash number&apos;e send-money/cash-in koro.
                </li>
                <li>
                  then oi Gmail die Premium Webapp&apos;e Login koro.
                </li>
                <li>That&apos;s it. Done in a minute!</li>
              </ol>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-5">
          <a
            className={clsx(
              space.className,
              " bn w-[190px] px-1  py-[9px] text-center m-auto rounded-[5px] text-lg flex gap-2 justify-center items-center font-bold"
            )}
            href="https://www.facebook.com/applecourses.netlify.app5"
            target="_blank"
          >
            Inbox Now <MessageCircleMore />
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
