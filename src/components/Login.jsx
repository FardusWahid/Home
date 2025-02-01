import { one, space } from "@/lib/fonts";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { LogIn } from "lucide-react";
import clsx from "clsx";

export default function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={clsx(
            one.className,
            "buy-button w-[150px] sm:w-1/3"
          )}
        >
        <span className="flex flex-shrink-0 justify-center items-center button_top gap-1 ">LOG-IN<LogIn className="w-5 h-5" /></span>
        </button>
      </DialogTrigger>
      <DialogContent
        className={clsx(space.className, "py-5 border-b-0 border-t-0")}
      >
        <DialogHeader>
          <DialogTitle
            className="text-center text-lg pt-2 font-bold font-sans
           capitalize lg:text-[19px]"
          >
            Login to our main webapp
          </DialogTitle>
        </DialogHeader>
        <DialogDescription asChild className="text-black dark:text-white">
          <div className="select-text selection:bg-yellow-400 selection:text-black">
            <span className="font-bold text-[16px] lg:text-[17px]">
              Things To Remember:
            </span>
            <ol className="list-disc space-y-2 pt-1 pl-5 font-bold tracking-tighter lg:text-[16px]">
              <li>You Cannot login with Facebook Browser.</li>
              <li>
                Feel free to use Chrome, Firefox, Brave, Edge, Safari or any
                other actual browser.
              </li>
              <li>
                Use any of the server below to Access your purchased course.
              </li>
            </ol>
            <div className="flex justify-around dark:text-gray-100 text-[16px] font-bold tracking-tighter px-3 pt-5 gap-7 pb-2">
              <a
                href="https://ipremium.vercel.app"
                className="px-8 lg:px-9 lg:py-3 py-[10px] flex justify-center bn bg-pink-300 rounded-lg dark:bg-nine"
              >
                Server 1
              </a>
              <a
                href="https://ipremium.vercel.app"
                className="px-8 py-[10px] lg:px-9 lg:py-3 flex bg-pink-300 justify-center bn rounded-lg dark:bg-nine"
              >
                Server 2
              </a>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
