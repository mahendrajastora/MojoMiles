"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/types";

interface WishlistContextValue {
  items: Product[];
  count: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleItem: (product: Product) => void;
  clearWishlist: () => void;
  isWished: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const count = useMemo(() => items.length, [items]);

  const addItem = (product: Product) => {
    setItems((current) => {
      if (current.some((item) => item.id === product.id)) {
        return current;
      }
      return [...current, product];
    });
  };

  const removeItem = (productId: string) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  };

  const toggleItem = (product: Product) => {
    if (items.some((item) => item.id === product.id)) {
      removeItem(product.id);
      return;
    }
    addItem(product);
  };

  const clearWishlist = () => setItems([]);

  const isWished = (productId: string) => items.some((item) => item.id === productId);

  return (
    <WishlistContext.Provider value={{ items, count, addItem, removeItem, toggleItem, clearWishlist, isWished }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
