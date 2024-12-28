import FilterSelectors from "@/components/FIlter";
import Slider from "@/components/Slider";
import Text from "@/components/text";
export default function Home() {
  return (
    <div>
      <div className="w-full lg:flex min-[850px]:flex-row-reverse min-[850px]:justify-between 2xl:justify-around py-2">
        <section>
          <Slider />
        </section>
        <aside className="mt-3 sm:mt-4 md:mt-0">
          <Text />
        </aside>
      </div>

      <div className="mt-7">
      <FilterSelectors/>
      </div>

    </div>
  );
}
