"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { productFilters } from "@/constants/site";

interface ShopFiltersProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function ShopFilters({ selectedFilter, setSelectedFilter, searchQuery, setSearchQuery }: ShopFiltersProps) {
  const filterButtons = useMemo(
    () =>
      productFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`rounded-full px-4 py-2 text-sm uppercase tracking-[0.2em] transition ${
            selectedFilter === filter
              ? "bg-[#1F3A2D] text-[#F9F8F6]"
              : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
          }`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      )),
    [selectedFilter]
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xl">
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search tees, categories, tags..."
            className="w-full rounded-full border border-white/10 bg-[#121110] px-5 py-4 text-sm text-white outline-none transition focus:border-[#1F3A2D]"
          />
        </div>
        <Button variant="secondary">Sort</Button>
      </div>
      <div className="flex flex-wrap gap-3">{filterButtons}</div>
    </div>
  );
}
