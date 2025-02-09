import { roboto } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { free } from "./file2";
import Card2 from "@/components/nav-card";

export default async function Free() {
  return (
    <aside className={cn(roboto.className, "p-5")}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1670px]:grid-cols-4 gap-5 lg:gap-y-10">
        {free.map((item) => (
          <Card2 key={item.title} {...item} />
        ))}
      </div>
    </aside>
  );
}
