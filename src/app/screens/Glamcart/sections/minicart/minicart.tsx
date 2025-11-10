"use client";
import { useCart } from "../../../../contexts/CartContext";
import Link from "next/link";

export const MiniCart = () => {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="relative w-72 bg-white border rounded-lg shadow-lg p-4 z-[9999]">
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
  );
};
