"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface ProductQuickViewProps {
  product: Product;
}

export default function ProductQuickView({ product }: ProductQuickViewProps) {
  const [open, setOpen] = useState(false);
  const { addItem } = useCart();

  const defaultColor = product.colors[0]?.name ?? "Forest";
  const defaultSize = product.sizes[0] ?? "M";

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title={product.name}
      description={product.description}
      trigger={
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Quick view
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] bg-[#0f0d0d] p-5">
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-white/5">
            <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="h-10 w-10 rounded-full border border-white/10"
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <Badge label={product.badge} variant="primary" />
            <span className="text-lg font-semibold text-[#F9F8F6]">{formatCurrency(product.price)}</span>
          </div>
          <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-[#121110] p-4">
            {product.details.map((detail) => (
              <p key={detail} className="text-sm text-[#CFCBC5]">
                • {detail}
              </p>
            ))}
          </div>
          <div className="grid gap-3 text-sm text-[#CFCBC5]">
            <p>
              Category: <span className="text-white">{product.category}</span>
            </p>
            <p>
              Collection: <span className="text-white">{product.collection}</span>
            </p>
          </div>
          <Button className="w-full" onClick={() => addItem({ product, selectedColor: defaultColor, selectedSize: defaultSize })}>
            Add to cart
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
