"use client";
import React, { useEffect, useState } from "react";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import { Card, CardContent } from "../components/ui/card";
import { supabase } from "../lib/supabaseClient";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";

export default function Shop() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const [message, setMessage] = useState("");   // ✅ SUCCESS MESSAGE STATE

  useEffect(() => {
    const fetchProducts = async () => {
      let { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url");

      if (error) console.error("Error fetching products:", error.message);
      else setProducts(data || []);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-[#f9fdee] w-full flex flex-col">
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

      {/* Products */}
      <section className="w-full relative px-4 sm:px-6 lg:px-12 py-12">

        {/* ✅ SUCCESS MESSAGE */}
        {message && (
          <div className="mb-6 p-3 bg-green-600 text-white text-center rounded-lg">
            {message}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          {/* Product grid */}
          <div className="flex-1 w-full">
            {loading ? (
              <p className="text-center text-gray-600">Loading products...</p>
            ) : products.length === 0 ? (
              <p className="text-center text-gray-600">No products found</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {products.map((product) => (
                  <Card key={product.id} className="bg-white rounded-lg shadow">
                    <CardContent className="p-4 flex flex-col h-full">

                      <div className="flex justify-center mb-4">
                        <img
                          className="w-[180px] h-[120px] object-contain"
                          alt={product.name}
                          src={
                            product.image_url
                              ? product.image_url.startsWith("http")
                                ? product.image_url
                                : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product-images/${product.image_url}`
                              : "/placeholder.png"
                          }
                        />
                      </div>

                      <div className="font-semibold text-[#242427] mb-2">
                        <Link href={`/product/${product.id}`}>{product.name}</Link>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-[#242427] font-semibold">
                          ${product.price}
                        </span>

                        {/* ✅ ADD TO CART + MESSAGE */}
                        <button
                          onClick={() => {
                            addToCart(product);

                            setMessage(`${product.name} added to cart!`);
                            setTimeout(() => setMessage(""), 2000);
                          }}
                          className="bg-[#242427] text-white px-3 py-1 rounded hover:bg-black"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              </div>
            )}
          </div>

          {/* Cart sidebar */}
          <div className="w-full lg:w-1/3 bg-white p-4 shadow rounded-lg">
            <h2 className="font-bold text-lg mb-4">🛒 Your Cart</h2>

            {cart.length === 0 ? (
              <p className="text-gray-600">No items in cart</p>
            ) : (
              <ul className="space-y-3">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ${item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {cart.length > 0 && (
              <>
                <div className="mt-4 font-bold">
                  Total: $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </div>
                <Link href="/checkout">
                  <button className="mt-4 w-full bg-[#8b0000] text-white py-2 rounded hover:bg-red-700">
                    Checkout
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full relative bg-[#242427]">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
