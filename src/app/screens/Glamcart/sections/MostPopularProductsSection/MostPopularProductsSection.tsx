"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Link from "next/link";
import { supabase } from "../../../../lib/supabaseClient";
import { useCart } from "../../../../contexts/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

export const MostPopularProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url")
        .limit(3);

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data || []);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="w-full relative px-4 sm:px-6 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Left Text Section */}
        <div className="flex-1 max-w-full lg:max-w-[390px]">
          <h2 className="font-montserrat font-semibold text-[#242427] 
                         text-2xl sm:text-3xl md:text-4xl lg:text-[45px] 
                         leading-snug mb-6">
            MOST POPULAR PRODUCT
          </h2>

          <p className="font-poppins font-normal text-[#6c6c6e] 
                        text-sm sm:text-base md:text-[15px] 
                        leading-relaxed mb-6">
            Our bestsellers are loved by thousands for their quality, style, and
            lasting finish. From bold lips to flawless blends, these picks never
            go out of trend.
          </p>
          <Link href="/about">
            <Button className="h-auto bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] 
                             px-5 sm:px-6 py-2.5 sm:py-3 gap-2.5">
              <span className="font-poppins font-medium text-white text-sm sm:text-base">
                Learn More
              </span>
              <img
                className="w-4 h-4 sm:w-[19px] sm:h-[19px]"
                alt="Arrow circle right"
                src="/arrow-circle-right-1.png"
              />
            </Button>
          </Link>
        </div>

        {/* Right Products Section */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 
                          overflow-x-auto lg:overflow-visible pb-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-full min-w-[220px] sm:min-w-0 bg-white rounded-[11px] 
                           shadow-[0px_4px_39.3px_#2424270a] flex-shrink-0"
              >
                <CardContent className="p-4 flex flex-col h-full">
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      className="w-[180px] h-[120px] object-contain"
                      alt={product.name}
                      src={product.image_url}
                    />
                  </div>

                  {/* Product Name */}
                  <div className="font-montserrat font-semibold text-[#242427] 
                                  text-sm sm:text-base mb-2">
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </div>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#242427] font-montserrat font-semibold 
                                      text-sm sm:text-base">
                      ${product.price}
                    </span>
                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image_url,
                        })
                      }
                    >
                      <img
                        className="w-6 h-6 sm:w-[27px] sm:h-[23px]"
                        alt="Add to cart"
                        src="/button-5.svg"
                      />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
