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
            "px-6 md:text-lg py-1 flex justify-center items-center gap-1 font-extrabold tracking-tight bn rounded-sm bg-[#f0fafa] dark:bg-nine"
          )}
        >
          LOG-IN <LogIn className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className={clsx(space.className, "py-5 border-b-0 border-t-0")}>
        <DialogHeader>
          <DialogTitle className="text-center text-lg pt-2 font-bold tracking-tighter capitalize lg:text-[19px]">
            SignIn Only if you are Enrolled
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
            <div className="flex justify-start dark:text-gray-100 text-[16px] font-bold tracking-tighter px-3 pt-5 gap-7 pb-2">
              <a
                href="/"
                className="px-7 lg:px-9 lg:py-3 py-2 flex justify-center bn rounded-sm dark:bg-nine"
              >
                Server 1
              </a>
              <a
                href="/"
                className="px-7 py-2 lg:px-9 lg:py-3 flex justify-center bn rounded-sm dark:bg-nine"
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
