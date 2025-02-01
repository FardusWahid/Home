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
import { MessageCircleMore } from "lucide-react";

export function Inbox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={clsx(
            one.className,
            "uppercase buy-button w-[180px] tracking-tighter sm:w-1/2"
          )}
        >
         <span className="button_top"> I am ready to buy</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={clsx(space.className, "text-center text-[23px] py-2")}
          >
            Payment Process
          </DialogTitle>
          {/* Replace DialogDescription's default element */}
          <DialogDescription
            asChild
            className="select-text selection:bg-yellow-400 selection:text-black text-start w-full"
          >
            <div>
              <ol className="list-decimal pl-5 font-mono space-y-3 text-black dark:text-white tracking-tight font-extrabold text-[16px] md:text-lg">
                <li>Facebook message e likho course name.</li>
                <li>tumar gmail address dao.</li>
                <li>
                  Bkash number e send-money/cash-in করে likho 'Done Paying'
                </li>
                <li>
                  then just ekhane othoba Facebook deya link e Login koro.
                </li>
                <li>That&apos;s it. You&apos;re all set.</li>
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
