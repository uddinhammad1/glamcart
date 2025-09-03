import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const productCards = [
  {
    title: "LIPSTICKS",
    description:
      "UNLEASH BOLD BEAUTY WITH OUR PREMIUM LIPSTICKS. DESIGNED TO LAST ALL DAY, OUR RICHLY PIGMENTED FORMULAS KEEP YOUR LIPS VIBRANT AND MOISTURIZED.",
    bgOpacity: "rgba(139,0,0,1)",
    titleTop: "top-24",
    titleLeft: "left-[185px]",
    titleWidth: "w-[347px]",
    descTop: "top-[158px]",
    descLeft: "left-[52px]",
    descWidth: "w-[485px]",
    descWhitespace: "",
  },
  {
    title: "EYELASHES",
    description:
      "ELEVATE YOUR LOOK WITH OUR LUXURIOUS LASHES. LIGHTWEIGHT, REUSABLE, AND EASY TO APPLY — FOR EYES THAT CAPTIVATE IN EVERY BLINK.",
    bgOpacity: "rgba(139,0,0,0.85)",
    titleTop: "top-[102px]",
    titleLeft: "left-[122px]",
    titleWidth: "w-[419px]",
    descTop: "top-[158px]",
    descLeft: "left-14",
    descWidth: "w-[485px]",
    descWhitespace: "",
  },
];

export const ProductCollectionSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1212px] mx-auto relative">
      <div className="grid grid-cols-1 gap-[43px]">
        <Card className="w-full h-[387px] rounded-[19px] border-0 overflow-hidden">
          <CardContent className="relative w-full h-full p-0 bg-[linear-gradient(0deg,rgba(139,0,0,0.85)_0%,rgba(139,0,0,0.85)_100%),linear-gradient(0deg,rgba(196,196,196,1)_0%,rgba(196,196,196,1)_100%)]">
            <div className="absolute w-[979px] top-[140px] left-20 [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] tracking-[0] leading-[56.2px] whitespace-nowrap">
              UNLEASH YOUR INNER GLOW
            </div>

            <div className="absolute w-[731px] top-[98px] left-20 [font-family:'Montserrat',Helvetica] font-semibold text-white text-base tracking-[0] leading-5 ">
              BROWSE ALL PRODUCTS, WITH FILTERS BY CATEGORY, SIZE, COLOR, BRAND.
            </div>

            <div className="absolute w-[933px] top-[233px] left-20 [font-family:'Poppins',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[28.5px]">
              Find the perfect shade, texture, and finish to match your unique
              style. Shop confidently with trusted brands and exclusive GlamCart
              selections.
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-[42px]">
          {productCards.map((product, index) => (
            <Card
              key={index}
              className="w-full h-[387px] rounded-[19px] border-0 overflow-hidden"
            >
              <CardContent
                className="relative w-full h-full p-0"
                style={{
                  background: `
    linear-gradient(0deg, rgba(139,0,0,0.85) 0%, rgba(139,0,0,0.85) 100%),
    linear-gradient(0deg, rgba(196,196,196,1) 0%, rgba(196,196,196,1) 100%)
  `,
                }}
              >
                <div
                  className={`absolute ${product.titleWidth} ${product.titleTop} ${product.titleLeft} [font-family:'Montserrat',Helvetica] font-semibold text-white text-[35px] text-right tracking-[0] leading-[43.8px]`}
                >
                  {product.title}
                </div>

                <div
                  className={`absolute ${product.descWidth} ${product.descTop} ${product.descLeft} [font-family:'Poppins',Helvetica] font-normal text-white text-[15px] text-right tracking-[0] leading-[28.5px] ${product.descWhitespace}`}
                >
                  {product.description}
                </div>

                <Button
                  variant="outline"
                  className="absolute top-[276px] left-[364px] w-[177px] h-[57px] bg-transparent border-white text-white hover:bg-white hover:text-black rounded-[9px] gap-2.5 px-6 py-3 h-auto"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                    Learn More
                  </span>
                  <ArrowRightIcon className="w-[19px] h-[19px]" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
