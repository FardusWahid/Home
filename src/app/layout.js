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
  title: "Apple Courses",
  description: "Apple Academic & Admission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <title>{metadata.title}</title>
    </head>
     
    
    <body className={inter.className}>
      <Navbar/><br/><br/><br/> <br className="max-sm:hidden"/>
      {children}
      </body>
  
    </html>
  );
}