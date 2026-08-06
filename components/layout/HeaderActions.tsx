"use client";

import { Heart, Menu } from "lucide-react";
import { CartIconButton } from "@/components/ui/CartIconButton";
import { IconButton } from "@/components/ui/IconButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WishlistButton } from "@/components/ui/WishlistButton";
import { LoginButton } from "@/components/ui/LoginButton";
import { useCart } from "@/contexts/CartContext";

interface HeaderActionsProps {
  onOpenMenu: () => void;
}

export default function HeaderActions({ onOpenMenu }: HeaderActionsProps) {
  const { cartCount } = useCart();

  return (
    <div className="flex items-center gap-3">
      <IconButton label="Open menu" onClick={onOpenMenu} className="md:hidden">
        <Menu className="h-4 w-4" />
      </IconButton>
      <div className="hidden items-center gap-3 md:flex">
        <WishlistButton />
        <CartIconButton count={cartCount} />
        <LoginButton />
        <ThemeToggle />
      </div>
    </div>
  );
}
