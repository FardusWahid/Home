import FilterSelectors from "@/components/FIlter";
import Slider from "@/components/Slider";
import Text from "@/components/text";

// Structured data for rich results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "mainEntity": {
    "@type": "Course",
    "provider": {
      "@type": "Organization",
      "name": "Apple Courses"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "http://schema.org/InStock"
    }
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <div className="w-full lg:flex min-[850px]:flex-row-reverse min-[850px]:justify-between 2xl:justify-around py-2">
          <section aria-label="Featured courses">
            <Slider />
          </section>
          <aside className="mt-3 sm:mt-4 md:mt-0" aria-label="Course information">
            <Text />
          </aside>
        </div>

        <section className="mt-7" aria-label="Course filters">
          <FilterSelectors />
        </section>
      </main>
    </>
  );
}