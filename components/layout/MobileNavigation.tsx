"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Search, Heart, X } from "lucide-react";
import { mainNavigation } from "@/constants/site";
import { CartButton } from "@/components/ui/CartButton";
import { IconButton } from "@/components/ui/IconButton";
import { SearchInput } from "@/components/ui/SearchInput";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  cartCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function MobileNavigation({
  open,
  onClose,
  cartCount,
  searchQuery,
  setSearchQuery,
}: MobileNavigationProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 z-50 h-full w-[88vw] max-w-sm overflow-hidden rounded-l-[2rem] border-l border-white/10 bg-[#121110] shadow-elevated"
            initial={{ x: 320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 320, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="text-lg font-semibold text-white">Menu</div>
              <IconButton onClick={onClose} label="Close menu">
                <X className="h-4 w-4" />
              </IconButton>
            </div>
            <div className="space-y-6 px-6 py-6">
              <SearchInput
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search tees, categories..."
              />
              <div className="space-y-4">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-base uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="grid gap-3">
                <Link
                  href="/wishlist"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                >
                  <Heart className="h-4 w-4" />
                  Wishlist
                </Link>
                <CartButton count={cartCount} onClick={onClose} />
                <Link
                  href="/profile"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                >
                  Login
                </Link>
              </div>
              <div className="pt-4 border-t border-white/10">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
