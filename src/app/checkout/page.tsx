"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import { supabase } from "../lib/supabaseClient";

// ✅ Safe Image Component (Optional)
function SafeImage({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const valid = src && src.trim() !== "" ? src : "/placeholder.png";
  return <img src={valid} alt={alt} className={className} />;
}

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal_code: "",
    country: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleCheckout = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  // Check if user is logged in
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user ? user.id : null,
        ...form,
        items: cart, // ✅ Pass cart items
      }),
    });

    const result = await res.json();

    if (result.url) {
      // ✅ Redirect to Stripe Payment Page
      clearCart();
      window.location.href = result.url;
      return;
    }

    if (result.success) {
      // ✅ Fallback (no payment)
      clearCart();
      window.location.href = "/thank-you";
      return;
    }

    alert("❌ Failed to place order.");
  } catch (err) {
    console.error(err);
    alert("Something went wrong while placing your order.");
  } finally {
    setLoading(false);
  }
};


  // 🚫 Empty cart UI
  if (cart.length === 0) {
    return (
      <section className="bg-[#f9fdee] min-h-screen flex flex-col">
        <div className="w-full relative pb-10">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto">
            <HeaderSectionInner />
            <img
              src="/logo-1.png"
              alt="Logo"
              className="absolute w-20 top-4 left-4 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-10">
          <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
          <Link href="/" className="text-[#8b0000] underline hover:opacity-80 transition">
            Continue Shopping
          </Link>
        </div>

        <div className="w-full mt-auto bg-[#242427]">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto">
            <FooterSection />
          </div>
        </div>
      </section>
    );
  }

  // ✅ Checkout Form UI
  return (
    <section className="bg-[#f9fdee] min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full relative pb-10">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto">
          <HeaderSectionInner />
          <img
            src="/logo-1.png"
            alt="Logo"
            className="absolute w-20 top-4 left-4 object-contain"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 flex-1">
        {/* 📝 Shipping Form */}
        <form onSubmit={handleCheckout} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

          {Object.keys(form).map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={field.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              value={(form as any)[field]}
              onChange={handleChange}
              required={["full_name", "email", "address", "city", "country"].includes(field)}
              className="w-full border rounded px-4 py-2 focus:ring focus:ring-[#8b0000]/30"
            />
          ))}

          <Button disabled={loading} type="submit" className="bg-[#8b0000] hover:bg-[#8b0000]/90 w-full text-white py-3">
            {loading ? "Processing..." : "Place Order"}
          </Button>
        </form>

        {/* 🛒 Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price} × {item.quantity}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 border rounded-lg bg-white">
            <div className="flex justify-between mb-2"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
            <div className="flex justify-between mb-2"><span>Shipping</span><span>$0.00</span></div>
            <div className="flex justify-between text-lg font-bold mt-4"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>

          <Button variant="outline" onClick={clearCart} className="mt-4 w-full">Clear Cart</Button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#242427]">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto">
          <FooterSection />
        </div>
      </div>
    </section>
  );
}
