import CourseCategoryPills from "@/components/pie";
import { Suspense } from "react";

export const metadata = {
  title: "All ACS & Other Courses | Apple Courses Bangladesh | ACS Shop",
  description:
    "ACS Courses from ACS Shop and and Other HSC and Admission Courses FREE and Premium All in One",
  keywords:
    "HSC courses Bangladesh, HSC preparation 2024, HSC preparation 2025, university admission preparation, online education Bangladesh",
  alternates: {
    canonical: "https://your-domain.com/courses",
  },
};

// Structured data for course listing page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Course",
      name: "HSC Preparation Courses",
      description:
        "Comprehensive HSC preparation courses for 2024-2026 batches",
      provider: {
        "@type": "Organization",
        name: "ACS Courses",
      },
      educationalLevel: "HSC and Admission Bangladesh",
    },
    {
      "@type": "Course",
      name: "ACS Apple SHOP",
      description:
        "HSC Academic and Admission preparation courses ACS Apars classroom",
      provider: {
        "@type": "Organization",
        name: "ACS Courses",
      },
      educationalLevel: "HSC & Admission",
    },
  ],
};

export default async function Courses() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <h1 className="sr-only">HSC and Admission Courses - ACS Shop BD</h1>
        <Suspense fallback={<div className="flex h-[calc(100vh-80px)] lg:h-[calc(100vh-65px)] justify-center items-center">please wait...</div>}>
          <CourseCategoryPills />
        </Suspense>
      </main>
    </>
  );
}
