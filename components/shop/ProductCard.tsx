"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import type { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleItem, isWished } = useWishlist();
  const wished = isWished(product.id);
  const defaultColor = product.colors[0]?.name ?? "Forest";
  const defaultSize = product.sizes[0] ?? "M";

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#141312] transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#1c1b1a]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-transparent via-transparent to-black/15" />
        <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
          {product.colors[0]?.name[0] ?? "M"}
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <Badge label={product.badge} variant="outline" />
          <span className="text-sm uppercase tracking-[0.2em] text-white/50">{product.category}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#F9F8F6]">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-white/60">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-lg font-semibold text-[#F9F8F6]">{formatCurrency(product.price)}</span>
          <Link
            href={`/shop/${product.slug}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
          >
            View
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className={cn(
                "h-8 w-8 rounded-full border border-white/10",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              )}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#101010]/80 p-4">
        <div className="flex items-center justify-between text-sm text-white/60">
          <button
            type="button"
            onClick={() => toggleItem(product)}
            className={cn(
              "flex items-center gap-2 rounded-full border px-3 py-2 transition",
              wished
                ? "border-[#1F3A2D] bg-[#1F3A2D]/10 text-[#D8F5D6]"
                : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
            )}
          >
            <Heart className="h-4 w-4" />
            {wished ? "Saved" : "Wishlist"}
          </button>
          <button
            type="button"
            onClick={() =>
              addItem({
                product,
                selectedColor: defaultColor,
                selectedSize: defaultSize,
              })
            }
            className="flex items-center gap-2 rounded-full bg-[#1F3A2D] px-3 py-2 text-white transition hover:bg-[#253f34]"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
