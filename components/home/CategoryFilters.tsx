"use client";

import { useState } from "react";
import { productFilters } from "@/constants/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function CategoryFilters() {
  const [active, setActive] = useState("All");

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
      <SectionHeading
        eyebrow="Collections"
        title="Shop by category, mood, and style."
        description="Refine the edit with purposeful filters designed for every oversized tee and aesthetic." 
      />
      <div className="mt-8 flex flex-wrap gap-3">
        {productFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-5 py-3 text-sm uppercase tracking-[0.2em] transition",
              active === filter
                ? "bg-[#1F3A2D] text-[#F9F8F6]"
                : "border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10"
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
