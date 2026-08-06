"use client";

import { useWishlist } from "@/contexts/WishlistContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WishlistItemCard } from "@/components/shop/wishlist/WishlistItemCard";

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();

  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
        <SectionHeading
          eyebrow="Favorites"
          title="Your saved pieces are ready when you are."
          description="Keep the tees you love in one place and move them to checkout with confidence."
        />
      </section>

      <div className="grid gap-6">
        {items.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/70">
            No saved tees yet. Add favorites from the shop to start your collection.
          </div>
        ) : (
          items.map((product) => (
            <WishlistItemCard key={product.id} product={product} onRemove={() => removeItem(product.id)} />
          ))
        )}
      </div>
    </div>
  );
}
