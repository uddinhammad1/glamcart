import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const productCards = [
  {
    title: "LIPSTICKS",
    description:
      "UNLEASH BOLD BEAUTY WITH OUR PREMIUM LIPSTICKS. DESIGNED TO LAST ALL DAY, OUR RICHLY PIGMENTED FORMULAS KEEP YOUR LIPS VIBRANT AND MOISTURIZED.",
  },
  {
    title: "EYELASHES",
    description:
      "ELEVATE YOUR LOOK WITH OUR LUXURIOUS LASHES. LIGHTWEIGHT, REUSABLE, AND EASY TO APPLY — FOR EYES THAT CAPTIVATE IN EVERY BLINK.",
  },
];

export const ProductCollectionSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1212px] mx-auto relative px-4 md:px-6">
      <div className="grid grid-cols-1 gap-8">
        {/* Hero Card */}
        <Card className="w-full rounded-[19px] border-0 overflow-hidden">
          <CardContent className="relative w-full h-full p-10 md:p-16 bg-[linear-gradient(0deg,rgba(139,0,0,0.85)_0%,rgba(139,0,0,0.85)_100%)]">
            <div className="flex flex-col gap-4 max-w-4xl text-white">
              <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl leading-snug font-[Montserrat]">
                UNLEASH YOUR INNER GLOW
              </h2>
              <p className="font-semibold text-sm md:text-base font-[Montserrat]">
                BROWSE ALL PRODUCTS, WITH FILTERS BY CATEGORY, SIZE, COLOR,
                BRAND.
              </p>
              <p className="text-sm md:text-base font-[Poppins] leading-relaxed">
                Find the perfect shade, texture, and finish to match your unique
                style. Shop confidently with trusted brands and exclusive
                GlamCart selections.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCards.map((product, index) => (
            <Card
              key={index}
              className="w-full rounded-[19px] border-0 overflow-hidden"
            >
              <CardContent className="relative w-full h-full p-10 md:p-12 bg-[linear-gradient(0deg,rgba(139,0,0,0.85)_0%,rgba(139,0,0,0.85)_100%)]">
                <div className="flex flex-col items-start md:items-end gap-6 text-white h-full justify-between">
                  <div className="text-left md:text-right">
                    <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl font-[Montserrat]">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-sm md:text-base font-[Poppins] leading-relaxed max-w-md">
                      {product.description}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-[150px] md:w-[177px] h-[50px] md:h-[57px] bg-transparent border-white text-white hover:bg-white hover:text-black rounded-[9px] gap-2 px-6 py-3"
                  >
                    <span className="font-medium text-sm md:text-base text-center font-[Poppins]">
                      Learn More
                    </span>
                    <ArrowRightIcon className="w-[18px] h-[18px]" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
