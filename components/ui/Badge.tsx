import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
}

export function Badge({ label, variant = "outline" }: BadgeProps) {
  const styles = {
    primary: "rounded-full bg-[#1F3A2D] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#F9F8F6]",
    secondary: "rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white",
    outline: "rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80",
  };

  return <span className={cn(styles[variant])}>{label}</span>;
}
