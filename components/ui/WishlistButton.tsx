import Link from "next/link";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  href?: string;
  className?: string;
}

export function WishlistButton({ href = "/wishlist", className }: WishlistButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white",
        className
      )}
      aria-label="Wishlist"
    >
      <Heart className="h-4 w-4" />
    </Link>
  );
}
