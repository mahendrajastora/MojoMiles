"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/layout/Logo";
import DesktopNavigation from "@/components/layout/DesktopNavigation";
import MobileNavigation from "@/components/layout/MobileNavigation";
import HeaderActions from "@/components/layout/HeaderActions";
import { useCart } from "@/contexts/CartContext";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LayoutShellProps {
  children: ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
          <Logo />
          <DesktopNavigation />
          <div className="flex items-center gap-3">
            <HeaderActions onOpenMenu={() => setMenuOpen(true)} />
          </div>
        </div>
      </header>
      <MobileNavigation
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <motion.main
        className={cn("min-h-[calc(100vh-128px)] bg-[var(--background)] pb-16 pt-8")}>
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">{children}</div>
      </motion.main>
    </div>
  );
}
