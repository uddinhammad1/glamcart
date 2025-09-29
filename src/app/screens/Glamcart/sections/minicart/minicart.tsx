"use client";
import { useState } from "react";
import { useCart } from "../../../../contexts/CartContext";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export const MiniCart = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="relative">
      {/* Cart Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative cursor-pointer"
      >
        <ShoppingCartIcon className="w-7 h-7 text-[#8b0000]" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#8b0000] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white border rounded-lg shadow-lg p-4 z-50">
          <h3 className="font-bold text-lg mb-2">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Cart is empty</p>
          ) : (
            <>
              <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between py-2 text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <p className="font-semibold">Total: ${cartTotal.toFixed(2)}</p>
                <div className="flex gap-2 mt-2">
                  <Link href="/cart" className="flex-1">
                    <button className="w-full bg-gray-200 text-black py-1 rounded-md">
                      View Cart
                    </button>
                  </Link>
                  <Link href="/checkout" className="flex-1">
                    <button className="w-full bg-[#8b0000] text-white py-1 rounded-md">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
