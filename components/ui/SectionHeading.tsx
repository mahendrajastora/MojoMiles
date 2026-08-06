import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, children, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5]/80">{eyebrow}</p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#F9F8F6] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-[#CFCBC5] sm:text-lg">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
