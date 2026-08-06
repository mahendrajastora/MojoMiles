import type { ChangeEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: Option[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
}

export function Select({ label, value, options, onChange, className }: SelectProps) {
  return (
    <label className={cn("block text-sm text-[#F9F8F6]", className)}>
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#CFCBC5]">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-[1.5rem] border border-white/10 bg-[#121110] px-4 py-3 pr-10 text-sm text-[#F9F8F6] outline-none transition focus:border-[#1F3A2D]"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-[#121110] text-white">
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 top-0 flex items-center text-white/40">
          ▼
        </div>
      </div>
    </label>
  );
}
