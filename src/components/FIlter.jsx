"use client";
import { Files } from "@/app/[view]/file";
import React, { Suspense, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "./Card";

export default function FilterSelectors() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const filteredFiles = Files.filter((file) => {
    const yearMatch =
      selectedYear === "all" || file.year === parseInt(selectedYear);
    const typeMatch = selectedType === "all" || file.type.toLowerCase() === selectedType;
    return typeMatch && yearMatch;
  });

  return (
    <div>
      <div className="">
        <div className="p-2">
          <div className="flex gap-4 mb-6">
            <div>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger
                  className="w-[130px] md:w-[200px]"
                  aria-label="Year"
                >
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="z-20 bg-white dark:bg-black">
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">HSC 2024</SelectItem>
                  <SelectItem value="2025">HSC 2025</SelectItem>
                  <SelectItem value="2026">HSC 2026</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger
                  className="w-[125px] md:w-[200px]"
                  aria-label="Type"
                >
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent className="z-20 bg-white dark:bg-black">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="admission">Admission</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 w-[99.5%] mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-x-3 xl:gap-x-8 min-[1600px]:grid-cols-4 gap-0 gap-y-10 md:gap-y-10 ">
            {filteredFiles.length <= 0 && (
              <p>NO Courses avalable for this filter </p>
            )}
            <Suspense fallback={<CardsLoading />}>
              {filteredFiles.map((file) => (
                <Card key={file.slug} file={file} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CardsLoading = () => {
  return (
    <div>
      <p className="text-lg">Loading...</p>
    </div>
  );
};
