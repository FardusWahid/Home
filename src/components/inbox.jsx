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
        <Button variant="default" className='bg-[#C8F560] w-[200px] md:w-[210px] shadow-inner rounded-md shadow-yellow-200 hover:bg-[#aade57] text-black anton text-[16px] my-3'>Inbox Now</Button>
      </DialogTrigger>
      <DialogContent className="wd md:w-[450px] selection:bg-yellow-400 selection:text-black">
        <DialogHeader>
          <DialogTitle className="text-black my-2 text-xl text-center tracking-wide font-extrabold font-sans italic">Payment Process</DialogTitle>
          <DialogDescription className='text-black text-[16px] tracking-tight font-extrabold font-sans  text-start'>
           <p className="my-3"> We only accept payment through Bkash.</p> 
           <p className="my-3">This link will take you to our Facebook page.</p> 
           <p className="font-mono  italic">Steps:</p>
           <p>1. Give us your Gmail.</p>
           <p>2. proceed payment with bkash.</p>
           <p>3. Check your Email after 3 to 5mins.</p>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Link className="bg-purple-900 w-[150px] px-1  py-[9px] text-center m-auto rounded-md text-lg hover:text-[20px] mt-3 flex gap-1 justify-center italic font-serif transition-all ease-in-out duration-100" href="https://www.facebook.com/apple.courses.netlify.app.3.0/"><PiMessengerLogoBold color="white" size={27}/>Facebook</Link>
   
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}