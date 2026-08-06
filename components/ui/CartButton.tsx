import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartButtonProps {
  count: number;
  onClick?: () => void;
}

export function CartButton({ count, onClick }: CartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex w-full items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
      )}
    >
      <ShoppingBag className="h-4 w-4" />
      Cart
      {count > 0 ? (
        <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[#1F3A2D] px-2 text-xs font-semibold text-white">
          {count}
        </span>
      ) : null}
    </button>
  );
}
