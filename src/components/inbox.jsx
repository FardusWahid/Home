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
        <Button variant="default" className='bg-gray-950 w-[190px] md:w-[210px] ring-1 ring-gray-800 shadow-md rounded-[4px] shadow-pink-600  text-purple-200 hover:shadow-none anton text-[16px] my-3'>Inbox Now</Button>
      </DialogTrigger>
      <DialogContent className="wdd md:w-[450px] rounded-[4px] selection:bg-yellow-400 selection:text-black">
        <DialogHeader>
          <DialogTitle className="text-black my-2 text-[22px] text-center font-extrabold tut">Payment Process</DialogTitle>
          <DialogDescription className='text-start'>
            <ol className="list-decimal pl-5 font-mono  space-y-3 text-black tracking-tight font-extrabold text-[16px] md:text-lg">
            
              <li>Facebook message'e likho kon Course e enroll korbe.</li>
              <li>tumar gmail address dao.</li>
              <li>Bkash number e send-money/cash-in করে screenshot, or just 'Done' likho.</li>
              <li>er por 5mins er মধ্যে tumar Gmail e Access soho Login link পাঠিয়ে দেয়া হবে।</li>

            </ol>
      
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-5">
          <Link 
          className="bg-gray-900 w-[150px] px-1  py-[9px] text-center m-auto rounded-[4px] shadow-lg shadow-gray-800 text-lg hover:text-[20px] mt-3 flex gap-1 justify-center italic font-serif transition-all ease-in-out duration-100" 
          href="https://www.facebook.com/applecourses.pro"><PiMessengerLogoBold color="white" size={27}/>Facebook</Link>
   
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}