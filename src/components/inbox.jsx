import { Button } from "@/components/ui/button"
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
        <Button variant="default" className='bg-[#C8F560] w-[200px] md:w-[250px] shadow-inner shadow-yellow-600 hover:bg-[#95c12f] text-black anton text-[16px] my-3'>Inbox Now</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 md:w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-black">Payment details:</DialogTitle>
          <DialogDescription className='text-black anton text-start'>
           <p className="my-2"> 1. We only accept payment through Bkash.</p> 
           <p className="my-2"> 2. This link will take you to our Facebook page.</p> 
            <p className="mt-2">3. Once you are done paying you will be redirect to the Course Webapp!</p> 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
        </div>
        <DialogFooter>
          <Link className="bg-black anton py-[6px] text-center m-auto rounded-sm w-[200px]" href="https://www.facebook.com/free.courses.vercel">Go to Facebook</Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}