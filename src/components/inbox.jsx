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
         <p className="text-center mt-2 text-lg italic">**Alert**</p>
         <p className="text-sm tracking-tighter">আমাদের Facebook ৩ দিনের জন্য বন্ধ রাখা হয়েছ। Reply পেতে kindly Telegram এ যোগাযোগ করে করো </p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
        </div>
        <DialogFooter>
          <section className="flex justify-center gap-1">
          <Link className="bg-black anton py-[10px] text-center w-2/5 m-auto rounded-md text-lg md:w-[200px]" href="https://www.facebook.com/free.courses.vercel">Facebook</Link>
          <Link className="bg-black anton py-[10px] text-center w-2/5 m-auto rounded-md text-lg md:w-[200px]" href="https://t.me/applecourses">Telegram</Link>
          </section>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}