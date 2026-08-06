import { formatCurrency } from "@/lib/utils";
import type { CartItem } from "@/contexts/CartContext";

interface CartSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
}

export function CartSummary({ items, subtotal, shipping, tax, discount }: CartSummaryProps) {
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#121110] p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">Order summary</p>
          <p className="mt-2 text-2xl font-semibold text-[#F9F8F6]">Secure checkout</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
          {items.length} items
        </span>
      </div>

      <div className="space-y-4 text-sm text-white/70">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{formatCurrency(shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated tax</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between text-[#CFCBC5]">
          <span>Coupon discount</span>
          <span>-{formatCurrency(discount)}</span>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between text-lg font-semibold text-[#F9F8F6]">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#CFCBC5]">
          Includes estimated shipping and taxes. Review before confirming your order.
        </p>
      </div>
    </div>
  );
}
