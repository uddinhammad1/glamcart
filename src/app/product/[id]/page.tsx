"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { Button } from "../../components/ui/button";
import { useCart } from "../../contexts/CartContext";
import { FooterSection } from "../../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  created_at: string;
};

export default function ProductDetailPage() {
  const { id } = useParams(); // grabs the [id] from URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, description, price, image_url, created_at")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error.message);
      } else {
        setProduct(data);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center py-10 text-red-500">Product not found.</p>;
  }

  return (
    <section className="bg-[#f9fdee] w-full flex flex-col">
         {/* Header */}
              <div className="w-full relative pb-10 md:pb-20">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                  <HeaderSectionInner />
                  <img
                    className="absolute w-20 sm:w-24 md:w-28 lg:w-[100px] h-auto top-4 sm:top-6 md:top-8 lg:top-[35px] left-4 sm:left-6 md:left-10 lg:left-[80px] object-contain"
                    alt="Logo"
                    src="/logo-1.png"
                  />
                </div>
              </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.image_url || "/placeholder.png"}
            alt={product.name}
            className="w-full max-w-md object-contain rounded-lg shadow"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-[#8b0000] mb-6">
            ${product.price}
          </p>

          <Button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image_url,
              })
            }
            className="bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-lg px-6 py-3 text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>

       {/* Footer */}
            <div className="w-full relative bg-[#242427] mt-10">
              <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                <FooterSection />
              </div>
            </div>
    </section>
  );
}
