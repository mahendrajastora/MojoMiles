"use client";

import Link from "next/link";
import { Heart, Menu, User } from "lucide-react";
import { CartIconButton } from "@/components/ui/CartIconButton";
import { IconButton } from "@/components/ui/IconButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WishlistButton } from "@/components/ui/WishlistButton";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

interface HeaderActionsProps {
  onOpenMenu: () => void;
}

export default function HeaderActions({ onOpenMenu }: HeaderActionsProps) {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center gap-3">
      <IconButton label="Open menu" onClick={onOpenMenu} className="md:hidden">
        <Menu className="h-4 w-4" />
      </IconButton>
      <div className="hidden items-center gap-3 md:flex">
        <WishlistButton />
        <CartIconButton count={cartCount} />
        {user ? (
          <>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              <User className="h-4 w-4" />
              {user.name.split(" ")[0]}
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
          >
            <User className="h-4 w-4" />
            Login
          </Link>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
