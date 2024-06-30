import { Button } from "@/components/ui/button"
import { PiMessengerLogoBold } from "react-icons/pi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

 
export function Inbox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className='bg-[#C8F560] w-[200px] md:w-[250px] shadow-inner rounded-md shadow-yellow-200 hover:bg-[#aade57] text-black anton text-[16px] my-3'>Inbox Now</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 md:w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-black my-2 text-xl font-extrabold font-serif italic">Payment Process</DialogTitle>
          <DialogDescription className='text-black text-[16px] font-extrabold tracking-wide text-start'>
           <p className="my-3"> We only accept payment through Bkash.</p> 
           <p className="my-3">This link will take you to our Facebook page.</p> 
            <p className="mt-3">Once you are done paying, 5mins এর মধ্যে তোমাকে access সহ webapp mail করে পাঠিয়ে দেয়া হবে।</p> 
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Link className="bg-black w-[200px] px-2 anton py-[12px] text-center m-auto rounded-md text-lg hover:text-[20px] mt-4 flex gap-1 justify-center transition-all ease-in-out duration-100" href="https://www.facebook.com/apple.courses.netlify.app.3.0/"><PiMessengerLogoBold color="white" size={28}/>Facebook</Link>
   
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}