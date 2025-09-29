"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Link from "next/link";
import { supabase } from "../../../../lib/supabaseClient";
import { useCart } from "../../../../contexts/CartContext";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  created_at: string;
};

export const FeaturedProductsSection = (): React.ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  // ✅ Fetch last 7 products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, description, price, image_url, created_at")
        .order("created_at", { ascending: false })
        .limit(7);

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-12 text-center">
        <p className="text-gray-600">Loading products...</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-10 md:py-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10 md:mb-16">
          <div className="max-w-2xl">
            <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-3xl md:text-5xl lg:text-[64px] leading-snug md:leading-[70px] lg:leading-[80px] mb-4">
              ALL OUR PRODUCT
            </h1>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-sm md:text-base leading-relaxed mb-6">
              Discover the complete range of our beauty essentials — from
              stunning lip colors to voluminous lashes and everything in
              between. Crafted with care, made to empower.
            </p>
          </div>
          <Link href="/shop">
            <Button className="bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] px-6 py-3 h-auto text-sm md:text-base">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white">
                Learn More
              </span>
              <img
                className="w-4 h-4 md:w-5 md:h-5 ml-2"
                alt="Arrow circle right"
                src="/arrow-circle-right-4.png"
              />
            </Button>
          </Link>
        </div>

        {/* ✅ Featured & Small Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`rounded-[11px] border border-[#24242730] ${
                index === 0 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center lg:text-left">
                <img
                  className="w-32 h-36 md:w-40 md:h-44 object-contain mb-4"
                  alt={product.name}
                  src={product.image_url || "/placeholder.png"}
                />
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-lg md:text-xl mb-2">
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[#8b0000] text-lg md:text-xl font-semibold">
                    ${product.price}
                  </span>
                </div>
                <Button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image_url,
                    })
                  }
                  className="flex items-center gap-2 bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] px-5 py-2 text-sm md:text-base"
                >
                  <span className="[font-family:'Poppins',Helvetica] text-white">
                    Add to Cart
                  </span>
                  <img
                    className="w-4 h-4 md:w-5 md:h-5"
                    alt="Cart"
                    src="/remove-shopping-cart-2.png"
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
