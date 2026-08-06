import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Heading({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F9F8F6] sm:text-5xl lg:text-6xl", className)}>
      {children}
    </h1>
  );
}

export function Subheading({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-3xl font-semibold tracking-[-0.03em] text-[#F9F8F6] sm:text-4xl", className)}>
      {children}
    </h2>
  );
}

export function Lead({ children, className }: TypographyProps) {
  return <p className={cn("max-w-3xl text-lg leading-8 text-[#CFCBC5] sm:text-xl", className)}>{children}</p>;
}

export function Text({ children, className }: TypographyProps) {
  return <p className={cn("text-base leading-7 text-[#F9F8F6]", className)}>{children}</p>;
}

export function Caption({ children, className }: TypographyProps) {
  return <p className={cn("text-sm uppercase tracking-[0.28em] text-[#D8C3A5]/80", className)}>{children}</p>;
}
