"use client";

import Link from "next/link";
import { ShoppingBag, User, Heart } from "lucide-react";
import { mainNavigation, siteName } from "@/constants/site";
import { useCart } from "@/contexts/CartContext";

export default function SiteHeader() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f0d0d]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-xl font-semibold text-white">
            M
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">{siteName}</p>
            <p className="text-sm text-white/70">Wear Your Escape.</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10 hover:text-white md:inline-flex">
            <Heart className="h-4 w-4" />
          </button>
          <Link
            href="/cart"
            className="relative inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Cart
            {cartCount > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#1F3A2D] px-2 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/profile"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <User className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
