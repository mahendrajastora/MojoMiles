"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { CartItemRow } from "@/components/shop/cart/CartItemRow";
import { CartSummary } from "@/components/shop/cart/CartSummary";
import { CouponInput } from "@/components/shop/cart/CouponInput";
import ShippingAddressForm from "@/components/shop/cart/ShippingAddressForm";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CartItem } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const { items, cartTotal, updateQuantity, removeItem, clearCart } = useCart();
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState("");

  const shipping = useMemo(() => (cartTotal > 0 ? 8 : 0), [cartTotal]);
  const tax = useMemo(() => Math.round(cartTotal * 0.08), [cartTotal]);

  const onApplyCoupon = (code: string) => {
    if (code.toUpperCase() === "MOJO15") {
      setDiscount(Math.round(cartTotal * 0.15));
      setCouponApplied(code.toUpperCase());
      return;
    }
    setDiscount(0);
    setCouponApplied("");
  };

  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
        <SectionHeading
          eyebrow="Checkout"
          title="Complete your order with premium delivery and tax details."
          description="Manage your cart, apply discounts, and review shipping before you place your order."
        />
      </section>

      <div className="grid gap-10 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-[#121110] p-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">Cart items</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#F9F8F6]">Your bag</h2>
              </div>
              <Button variant="secondary" onClick={clearCart}>
                Clear cart
              </Button>
            </div>
            <div className="space-y-4">
              {items.length === 0 ? (
                <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-white/70">
                  Your cart is empty. Add a premium tee to continue.
                </div>
              ) : (
                items.map((item: CartItem) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onIncrement={() => updateQuantity(item.id, item.quantity + 1)}
                    onDecrement={() => updateQuantity(item.id, item.quantity - 1)}
                    onRemove={() => removeItem(item.id)}
                  />
                ))
              )}
            </div>
          </div>

          <CouponInput onApply={onApplyCoupon} />
          <ShippingAddressForm />
        </div>

        <div className="space-y-6">
          <CartSummary items={items} subtotal={cartTotal} shipping={shipping} tax={tax} discount={discount} />

          <div className="rounded-[2rem] border border-white/10 bg-[#121110] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">Payment</p>
                <h3 className="mt-2 text-lg font-semibold text-[#F9F8F6]">Order summary</h3>
              </div>
              <Badge label={couponApplied ? "Coupon applied" : "No coupon"} variant={couponApplied ? "primary" : "outline"} />
            </div>
            <div className="mt-6 space-y-3 text-sm text-[#CFCBC5]">
              <p>Free support for returns and exchanges.</p>
              <p>Secure checkout with encrypted payment flow.</p>
              <p>Order confirmation sent to your email.</p>
            </div>
            <Button type="button" className="mt-6 w-full">
              Place order securely
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
