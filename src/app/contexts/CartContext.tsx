"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// ✅ Step 1: Product aur CartItem types
export type Product = {
  id: string | number;
  name: string;
  price: number;
  image?: string;
};

export type CartItem = Product & {
  quantity: number;
};

// ✅ Step 2: Context type
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;   // <-- sirf Product accept karega
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
};

// ✅ Step 3: Context create
const CartContext = createContext<CartContextType | undefined>(undefined);

// ✅ Step 4: Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add to cart
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Clear cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Step 5: Hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
