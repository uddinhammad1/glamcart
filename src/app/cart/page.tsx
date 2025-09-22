"use client";
import React from "react";
import { useCart } from "../contexts/CartContext";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";

export default function CartPage() {
    const { cart, addToCart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="bg-[#f9fdee] w-full flex flex-col min-h-screen">
            {/* Header */}
            <div className="w-full relative pb-10">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <HeaderSectionInner />
                    <img
                        className="absolute w-20 sm:w-24 md:w-28 lg:w-[100px] h-auto 
                       top-4 sm:top-6 md:top-8 lg:top-[35px] 
                       left-4 sm:left-6 md:left-10 lg:left-[80px] object-contain"
                        alt="Logo"
                        src="/logo-1.png"
                    />
                </div>
            </div>

            {/* Cart Section */}
            <section className="flex-1 w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
                <h1 className="text-2xl font-bold mb-6">🛒 Your Shopping Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty</p>
                ) : (
                    <div className="bg-white shadow rounded-lg p-6">
                        <ul className="divide-y divide-gray-200">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between py-4"
                                >
                                    <div className="flex items-center gap-4">
                                        
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-sm text-gray-500">
                                                ${item.price} × {item.quantity}
                                            </p>
                                            <p className="font-bold">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id.toString())
                                            }
                                            className="text-red-500 hover:underline text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Total */}
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-xl font-bold">
                                Total: ${total.toFixed(2)}
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={clearCart}
                                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                                >
                                    Clear Cart
                                </button>
                                <button className="bg-[#8b0000] text-white px-6 py-2 rounded hover:bg-red-700">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Footer */}
            <div className="w-full relative bg-[#242427] mt-auto">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <FooterSection />
                </div>
            </div>
        </div>
    );
}
