import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartIconButtonProps {
  count: number;
  className?: string;
}

export function CartIconButton({ count, className }: CartIconButtonProps) {
  return (
    <Link
      href="/cart"
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white",
        className
      )}
      aria-label="View cart"
    >
      <ShoppingBag className="h-5 w-5" />
      {count > 0 ? (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#1F3A2D] px-1.5 text-[0.6rem] font-semibold text-white">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
