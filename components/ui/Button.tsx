import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition focus:outline-none focus:ring-2 focus:ring-[#1F3A2D]/30";
  const variants = {
    primary:
      "bg-gradient-to-r from-accent-coral via-accent-melon to-accent-ocean text-[#1F9F8F6] shadow-sm shadow-[#4EA5FF]/20 hover:brightness-105",
    secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    ghost: "bg-transparent text-white/80 hover:text-white",
  };

  return <button className={cn(base, variants[variant], className)} {...props} />;
}
