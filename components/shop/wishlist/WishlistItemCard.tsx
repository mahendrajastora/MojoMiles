import Link from "next/link";
import { Star, ShoppingBag, Trash2 } from "lucide-react";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

interface WishlistItemCardProps {
  product: Product;
  onRemove: () => void;
}

export function WishlistItemCard({ product, onRemove }: WishlistItemCardProps) {
  return (
    <article className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#121110] p-6 md:grid-cols-[1fr_auto]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge label={product.badge} variant="outline" />
          <span className="flex items-center gap-1 text-sm uppercase tracking-[0.2em] text-white/70">
            <Star className="h-4 w-4 text-[#D8C3A5]" />
            {product.rating.toFixed(1)}
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-[#F9F8F6]">{product.name}</h3>
        <p className="text-sm leading-7 text-[#CFCBC5]">{product.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          <span>Category: {product.category}</span>
          <span>Collection: {product.collection}</span>
        </div>
      </div>
      <div className="grid gap-3 self-start rounded-[1.75rem] border border-white/10 bg-[#1c1b1a] p-5 text-sm text-white/70">
        <p className="text-lg font-semibold text-[#F9F8F6]">{formatCurrency(product.price)}</p>
        <Link
          href={`/product/${product.slug}`}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          View product
        </Link>
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#1F3A2D] px-4 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#253f34]"
        >
          <Trash2 className="h-4 w-4" />
          Remove
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          <ShoppingBag className="h-4 w-4" />
          Move to cart
        </button>
      </div>
    </article>
  );
}
