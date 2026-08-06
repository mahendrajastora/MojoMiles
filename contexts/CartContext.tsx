"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product, ProductSize } from "@/types";

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: ProductSize;
  selectedColor: string;
}

interface CartContextValue {
  items: CartItem[];
  cartCount: number;
  cartTotal: number;
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const cartTotal = useMemo(
    () =>
      items.reduce((total, item) => total + item.quantity * item.product.price, 0),
    [items]
  );

  const addItem = (payload: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => {
    const itemId = `${payload.product.id}-${payload.selectedColor}-${payload.selectedSize}`;
    setItems((current) => {
      const existingItem = current.find((item) => item.id === itemId);
      if (existingItem) {
        return current.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + (payload.quantity ?? 1) }
            : item
        );
      }

      return [
        ...current,
        {
          id: itemId,
          product: payload.product,
          quantity: payload.quantity ?? 1,
          selectedColor: payload.selectedColor,
          selectedSize: payload.selectedSize,
        },
      ];
    });
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ items, cartCount, cartTotal, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
