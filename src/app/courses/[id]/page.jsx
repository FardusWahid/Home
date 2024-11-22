import { Inbox } from "@/components/inbox";
import Login from "@/components/Login";
import { Button } from "@/components/ui/button";
import { Files } from "@/app/showcase/file";
import { one, space } from "@/lib/fonts";
import clsx from "clsx";
import { MessageCircleQuestion, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const OS = Files.find((file) => file.id === parseInt(id));
  return {
    title: OS.name,
    description: `Free ${OS.name} with Lecture and Practice sheets`,
    keywords: OS.tags.join(","),
  };
}

export default async function Cool({ params }) {
  const id = (await params).id;
  const OS = Files.find((file) => file.id === parseInt(id));

  return (
    <div>
      <h1
        className={clsx(
          one.className,
          "capitalize text-[26px] md:text-3xl text-center dark:text-cyan-50 mt-2 mb-4 md:mb-6 lg:pt-2"
        )}
      >
        {OS.name}
      </h1>

      <main className="lg:flex lg:flex-row-reverse lg:justify-around  w-full">
        <aside className="w-full lg:w-[42%] xl:p-5 max-w-[700px] mx-auto shadow-inner shadow-zinc-100 dark:shadow-black py-3 px-2 rounded-md overflow-hidden">
          <section className="rounded-md overflow-hidden">
            <Image
              src={OS.image}
              alt={OS.name}
              width={700}
              height={100}
              priority
              loading="eager"
              className="object-cover aspect-video"
            />
          </section>
          <p className="text-start font-sans font-bold tracking-tighter text-[13px] dark:text-cyan-100 pl-1 md:text-[15px] py-3">
            If you are well funded and can afford to pay the full price then
            please buy it from the original owner.
          </p>
          <section className="flex justify-around gap-3 pt-4 pb-5">
            <Inbox />
            <Login />
          </section>
        </aside>

        <aside className="w-full lg:w-[50%] xl:w-[50%] min-[500px]:pl-5 pt-8">
          <div>
            <p className="flex items-center font-semibold">
              Demo ScreenShots & records
              <Button variant="outline" className="h-8 ml-1">
                <Link href={"/showcase"}>view</Link>
              </Button>
            </p>
            <p
              className={clsx(
                space.className,
                " font-bold pb-3 pt-1 capitalize text-2xl flex items-center gap-1 tracking-tighter"
              )}
            >
              <Sparkles /> Course Information:
            </p>
            <ol
              className={clsx(
                space.className,
                "list-disc pl-5 space-y-3 text-sm md:text-base tracking-tighter font-bold dark:text-cyan-100 capitalize"
              )}
            >
              {OS.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <p className=" text-start font-sans font-bold tracking-tight text-[15px] pl-1 md:text-[17px] py-3 flex items-center gap-1">
              <MessageCircleQuestion />
              Caution:
            </p>
            <ol
              className={clsx(
                space.className,
                "list-disc pl-5 space-y-3 text-[15px] md:text-base tracking-tight font-bold dark:text-cyan-100 capitalize"
              )}
            >
              <li>
                This Site completely independent and not affiliated with any Ed
                tech company.
              </li>
              <li>
                Since we&apos;re a third party provider, There&apos;ll be a
                minimum amount of delay updating the course content. we&apos;re
                constantly trying to keep it as minimal as possible
              </li>
            </ol>
          </div>
        </aside>
      </main>

      <section>
                
        <br />
      </section>
    </div>
  );
}