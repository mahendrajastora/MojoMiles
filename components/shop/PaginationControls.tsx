import type { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

interface PaginationControlsProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function PaginationControls({ page, pageCount, onPageChange }: PaginationControlsProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[#121110] px-5 py-4 text-sm text-white/70">
      <div className="flex flex-wrap gap-2">
        {pages.map((pageNumber) => (
          <button
            type="button"
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={cn(
              "min-w-[2.5rem] rounded-full px-3 py-2 transition",
              pageNumber === page
                ? "bg-[#1F3A2D] text-[#F9F8F6]"
                : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
            )}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <div className="text-xs uppercase tracking-[0.25em] text-white/50">Page {page} of {pageCount}</div>
    </div>
  );
}
