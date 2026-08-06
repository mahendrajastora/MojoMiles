"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/common/Rating";
import { TextField } from "@/components/ui/Input";
import type { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

const variantOptions = ["S", "M", "L", "XL", "XXL"];

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const { toggleItem, isWished } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<Product["sizes"][number]>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const wished = isWished(product.id);

  const stock = useMemo(() => ({ available: 28, status: "In stock" }), []);

  return (
    <section className="space-y-10 pb-16 pt-10">
      <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#141312] p-6 sm:p-8">
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
              <div className="aspect-[4/3] relative">
                <Image src={selectedImage} alt={product.name} fill className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={
                    selectedImage === image
                      ? "rounded-[1.5rem] border-2 border-accent-ocean p-1"
                      : "rounded-[1.5rem] border border-white/10 p-1"
                  }
                >
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-white/5">
                    <Image src={image} alt={product.name} fill className="object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#121110] p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#CFCBC5]">{product.collection}</span>
                <h1 className="mt-3 text-3xl font-semibold text-[#F9F8F6]">{product.name}</h1>
              </div>
              <Badge label={product.badge} variant="secondary" />
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <Rating rating={product.rating} />
              <span>{stock.status}</span>
            </div>
            <p className="text-lg leading-8 text-white/70">{product.description}</p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[#CFCBC5]">Color</p>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={
                        selectedColor === color.name
                          ? "h-10 w-10 rounded-full border-2 border-accent-ocean"
                          : "h-10 w-10 rounded-full border border-white/10"
                      }
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[#CFCBC5]">Size</p>
                <div className="flex flex-wrap gap-3">
                  {variantOptions.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size as Product["sizes"][number])}
                      className={
                        selectedSize === size
                          ? "rounded-full bg-accent-melon px-4 py-2 text-sm font-semibold text-[#1C1C1C]"
                          : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10"
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-[#1c1b1a] p-6">
              <div className="flex items-center justify-between gap-4 text-2xl font-semibold text-[#F9F8F6]">
                <span>{formatCurrency(product.price)}</span>
                <span className="text-sm uppercase tracking-[0.2em] text-[#CFCBC5]">Free shipping</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  className="min-w-[160px]"
                  onClick={() => addItem({ product, selectedColor, selectedSize })}
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  variant="secondary"
                  className="min-w-[160px]"
                  onClick={() => toggleItem(product)}
                >
                  <Heart className="h-4 w-4" />
                  {wished ? "Saved" : "Wishlist"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-[#121110] p-6">
            <h2 className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">Product details</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
              {product.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#121110] p-6">
            <h2 className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">Shipping & returns</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Standard delivery in 3–5 business days. Free returns within 30 days for store credit.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#121110] p-6">
            <h2 className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">More like this</h2>
            <div className="mt-4 grid gap-4">
              {product.colors.slice(0, 3).map((color) => (
                <div key={color.name} className="rounded-[1.5rem] bg-white/5 p-4 text-sm text-white/70">
                  {color.name} edition
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
