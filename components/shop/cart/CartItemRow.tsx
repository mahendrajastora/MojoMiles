"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CartItem } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/utils";

interface CartItemRowProps {
  item: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export function CartItemRow({ item, onIncrement, onDecrement, onRemove }: CartItemRowProps) {
  return (
    <article className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#141312] p-5 sm:grid-cols-[96px_1fr]">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white/5">
        <div className="aspect-square bg-white/5" />
        <span className="absolute left-3 top-3 rounded-full bg-[#1F3A2D] px-2 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-white">
          {item.selectedSize}
        </span>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[#F9F8F6]">{item.product.name}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#CFCBC5]">{item.selectedColor}</p>
          </div>
          <p className="text-lg font-semibold text-[#F9F8F6]">{formatCurrency(item.product.price)}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
            <Button variant="ghost" className="h-9 min-w-[2.25rem] rounded-full p-0" onClick={onDecrement}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="min-w-[2rem] text-center text-sm text-[#F9F8F6]">{item.quantity}</span>
            <Button variant="ghost" className="h-9 min-w-[2.25rem] rounded-full p-0" onClick={onIncrement}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" className="h-9 rounded-full border border-white/10 px-3 text-sm" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
            Remove
          </Button>
        </div>

        <div className="grid gap-2 rounded-[1.5rem] border border-white/10 bg-[#0f0d0d] p-4 text-sm text-[#CFCBC5]">
          <p>Tag: {item.product.badge}</p>
          <p>Collection: {item.product.collection}</p>
        </div>
      </div>
    </article>
  );
}
