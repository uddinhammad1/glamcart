"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.address) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      // 🔥 Call API route for checkout
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer: form, cart }),
      });

      if (!res.ok) throw new Error("Failed to create checkout session");

      const data = await res.json();

      if (data.url) {
        // redirect to payment page (Stripe/PayPal)
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Checkout failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🚫 Empty cart view
  if (cart.length === 0) {
    return (
      <section className="bg-[#f9fdee] min-h-screen flex flex-col">
        <div className="w-full relative pb-10 md:pb-20">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto">
            <HeaderSectionInner />
            <img
              src="/logo-1.png"
              alt="Logo"
              className="absolute w-20 sm:w-24 md:w-28 lg:w-[100px] h-auto 
              top-4 sm:top-6 md:top-8 lg:top-[35px] left-4 sm:left-6 
              md:left-10 lg:left-[80px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-10">
          <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
          <Link
            href="/"
            className="text-[#8b0000] underline hover:opacity-80 transition"
          >
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

  // ✅ Checkout with cart
  return (
    <section className="bg-[#f9fdee] min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full relative pb-10 md:pb-20">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto">
          <HeaderSectionInner />
          <img
            src="/logo-1.png"
            alt="Logo"
            className="absolute w-20 sm:w-24 md:w-28 lg:w-[100px] h-auto 
            top-4 sm:top-6 md:top-8 lg:top-[35px] left-4 sm:left-6 
            md:left-10 lg:left-[80px] object-contain"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 flex-1">
        {/* 📝 Checkout Form */}
        <form
          onSubmit={handleCheckout}
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

          {["fullName", "email", "phone", "address", "city", "postalCode", "country"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={field.replace(/([A-Z])/g, " $1")}
              value={(form as any)[field]}
              onChange={handleChange}
              required={["fullName", "email", "address"].includes(field)}
              className="w-full border rounded px-4 py-2 focus:ring focus:ring-[#8b0000]/30"
            />
          ))}

          <Button
            type="submit"
            disabled={loading}
            className="bg-[#8b0000] hover:bg-[#8b0000]/90 w-full text-white py-3"
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </Button>
        </form>

        {/* 🛒 Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 border rounded-lg shadow-sm bg-white">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={clearCart}
            className="mt-4 w-full"
          >
            Clear Cart
          </Button>
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
