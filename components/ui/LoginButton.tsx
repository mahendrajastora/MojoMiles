import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginButtonProps {
  href?: string;
  className?: string;
}

export function LoginButton({ href = "/profile", className }: LoginButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10 hover:text-white",
        className
      )}
    >
      <User className="h-4 w-4" />
      Login
    </Link>
  );
}
