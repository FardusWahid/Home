import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Courses - Academic & Admission",
  description: "HSC Free & Premium Courses Bangladesh",
  keywords: "Apple courses, Apple course, Apple HSC, Apple admission, Bangladesh, Apple HSC 2025, Apple BD, BD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google-site-verification" content="pzjPH8_CD-6eaqtuSfa0LLyheyNR-_h681efe85itDc" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <title>{metadata.title}</title>
    </head>
     
    
    <body className={inter.className}>
      <Navbar/><br/><br/><br/> <br className="max-sm:hidden"/>
     <div className="select-none">
      {children}
      </div> 
      </body>
  
    </html>
  );
}
