import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { poppins } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import clsx from "clsx";

export const metadata = {
  title: "Apple Courses",
  description: "ACS Free Courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="google-site-verification" content="5A6r0nl48WzkentBg3bhahhCZxhXM90Bl2_eQ6q9vzk" />
      </head>
      <body className={clsx(poppins.className, "select-none")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="sticky top-0 z-20">
            <Navbar />
          </section>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
