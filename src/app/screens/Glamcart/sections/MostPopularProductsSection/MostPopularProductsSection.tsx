import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MostPopularProductsSection : React.FC = () =>  {
  const products = [
    {
      id: 1,
      name: "FIRE DRIP",
      price: "$38",
      image: "/shop-list-img-039-1.png",
      buttonIcon: "/button-5.svg",
    },
    {
      id: 2,
      name: "KISSABLE",
      price: "$28",
      image: "/image-1.png",
      buttonIcon: "/button-7.svg",
    },
    {
      id: 3,
      name: "TRIPLE FUN",
      price: "$28",
      image: "/image-2.png",
      buttonIcon: "/button-2.svg",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1 max-w-[390px]">
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-[45px] tracking-[0] leading-[56.2px] mb-8">
            MOST POPULAR PRODUCT
          </h2>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-[15px] tracking-[0] leading-[28.5px] mb-8">
            Our bestsellers are loved by thousands for their quality, style, and
            lasting finish. From bold lips to flawless blends, these picks never
            go out of trend.
          </p>

          <Button className="h-auto bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] px-6 py-3 gap-2.5">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Learn More
            </span>
            <img
              className="w-[19px] h-[19px]"
              alt="Arrow circle right"
              src="/arrow-circle-right-1.png"
            />
          </Button>
        </div>

        <div className="flex flex-1 gap-6 overflow-x-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="min-w-[234px] w-[234px] h-[279px] bg-white rounded-[11px] shadow-[0px_4px_39.3px_#2424270a] flex-shrink-0"
            >
              <CardContent className="p-0 relative h-full">
                <img
                  className="absolute w-[210px] h-[135px] top-[29px] left-2.5 object-cover"
                  alt={product.name}
                  src={product.image}
                />

                <div className="absolute w-44 top-[195px] left-5 [font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-[13px] tracking-[0] leading-[normal]">
                  {product.name}
                </div>

                <div className="w-[83px] top-[229px] left-5 text-[#242427] text-base absolute [font-family:'Montserrat',Helvetica] font-semibold tracking-[0] leading-[normal]">
                  {product.price}
                </div>

                <button className="absolute top-[228px] left-[179px]">
                  <img
                    className="w-[27px] h-[23px]"
                    alt="Add to cart"
                    src={product.buttonIcon}
                  />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
