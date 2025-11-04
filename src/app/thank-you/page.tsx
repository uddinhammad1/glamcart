"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <section className="min-h-screen bg-[#f9fdee] flex flex-col items-center justify-center text-center p-6">
      <img
        src="/logo-1.png"
        alt="Logo"
        className="w-24 mb-6 opacity-80"
      />

      <h1 className="text-3xl font-bold mb-3 text-[#8b0000]">
        🎉 Thank You For Your Order!
      </h1>

      <p className="text-gray-700 max-w-md mb-6">
        Your order has been successfully placed.
        {orderId && (
          <>
            <br />
            <span className="font-semibold">Order ID:</span> #{orderId}
          </>
        )}
      </p>

      <Link
        href="/"
        className="bg-[#8b0000] text-white px-6 py-3 rounded-md hover:bg-[#8b0000]/90 transition"
      >
        Continue Shopping
      </Link>
    </section>
  );
}
