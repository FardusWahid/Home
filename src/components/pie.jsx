"use client";
import { Files } from "@/app/[view]/file";
import { useState, useEffect, Suspense } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./Card";

const CourseCategoryPills = () => {
  const categories = [
    { label: "All", value: "all" },
    { label: "Free", value: "free" },
    { label: "HSC 2024", value: "2024" },
    { label: "HSC 2025", value: "2025" },
    { label: "HSC 2026", value: "2026" },
    { label: "Admission", value: "admission" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredFiles, setFilteredFiles] = useState(Files);

  useEffect(() => {
    let filtered = Files;

    switch (selectedCategory) {
      case "free":
        filtered = Files.filter((file) => file.price === "free");
        break;
      case "2024":
        filtered = Files.filter((file) => file.year === 2024);
        break;
      case "2025":
        filtered = Files.filter((file) => file.year === 2025);
        break;
      case "2026":
        filtered = Files.filter((file) => file.year === 2026);
        break;
      case "admission":
        filtered = Files.filter(
          (file) => file.type === "admission" || file.type === "Admission"
        );
        break;
      default:
        filtered = Files;
    }

    setFilteredFiles(filtered);
  }, [selectedCategory]);

  return (
    <div className="py-3">
      <div
        className="flex ml-1 lg:ml-2 xl:ml-6 gap-3 mb-6 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
        }}
      >
        {categories.map((category) => (
          <Button
            key={category.label}
            variant={
              selectedCategory === category.value ? "default" : "secondary"
            }
            onClick={() => setSelectedCategory(category.value)}
            className={cn("rounded-md font-semibold h-9")}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <div className="mt-4 animate-in fade-in-0 duration-300 w-[99.5%] mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-x-3 xl:gap-x-8 min-[1600px]:grid-cols-4 gap-0 gap-y-10 md:gap-y-10 ">
        {filteredFiles.length <= 0 && (
          <p>NO Courses avalable for this filter </p>
        )}
        <Suspense>
          {filteredFiles.map((file) => (
            <Card key={file.slug} file={file} />
          ))}
        </Suspense>
      </div>

      {filteredFiles.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No courses found for the selected category.
        </div>
      )}
    </div>
  );
};

export default CourseCategoryPills;
