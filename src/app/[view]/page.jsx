import Count from "@/components/count";
import { Folder } from "@/lib/image";
import Link from "next/link";
export default async function Showcase({ params }) {
  const { view } = await params;
  const images = await Folder(view);
  const user = await fetch(
    "https://gist.githubusercontent.com/FardusWahid/fcf3bf322ea6a886ec4d910cc17fdf08/raw/386f6495019f01d3de0fbce7b09f43fbe466b871/db.json"
  );
  const data = await user.json();
  return (
    <div>
      <div className="pt-2 lg:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Link
            href={image.src}
            key={index}
            target="_blank"
            className="flex justify-center items-center overflow-hidden shadow-[5px_-6px_8px_1px,_-5px_-6px_8px_1px] shadow-zinc-100 dark:shadow-zinc-800 rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full h-auto object-contain p-2 active:scale-95 transition-transform duration-150 ease-in-out rounded-[12px]"
            />
          </Link>
        ))}
      </div>
      < Count />
    </div>
  );
}
