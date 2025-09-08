import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedProductsSection = (): React.ReactElement => {
  const mainProducts = [
    {
      id: 1,
      image: "/image-3.png",
      title: "FIERY LIP",
      description:
        "Turn up the heat with our Fiery Lip gloss — ultra-pigmented, silky-smooth, and built to last. Perfect for bold looks that command attention.",
      price: "$27",
      originalPrice: "$50",
      cartIcon: "/remove-shopping-cart-2.png",
      showSeeDetail: true,
    },
    {
      id: 2,
      image: "/image-4.png",
      title: "LONG LASTING",
      description:
        "Flawless coverage that lasts all day. Our Long Lasting foundation blends effortlessly for a natural matte finish with breathable wear.",
      price: "$46",
      originalPrice: "$80",
      cartIcon: "/remove-shopping-cart-3.png",
      showSeeDetail: false,
    },
    {
      id: 3,
      image: "/image-5.png",
      title: "SPARKLE MORE",
      description:
        "Highlight your glow with Sparkle More — a radiant powder that enhances your skin with a shimmering, soft-focus finish.",
      price: "$29",
      originalPrice: "$50",
      cartIcon: "/remove-shopping-cart-4.png",
      showSeeDetail: false,
    },
  ];

  const smallProducts = [
    {
      id: 1,
      image: "/image-7.png",
      title: "SEDUCTIVE",
      price: "$29",
      buttonIcon: "/button-1.svg",
    },
    {
      id: 2,
      image: "/image-6.png",
      title: "SAMPLES",
      price: "$30",
      buttonIcon: "/button-4.svg",
    },
    {
      id: 3,
      image: "/image.png",
      title: "EASY DRY",
      price: "$22",
      buttonIcon: "/button.svg",
    },
    {
      id: 4,
      image: "/image-8.png",
      title: "PASTEL LIP",
      price: "$22",
      buttonIcon: "/button-3.svg",
    },
  ];

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
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Big Product */}
          <Card className="lg:col-span-2 rounded-[11px] border border-[#24242730]">
            <CardContent className="p-6 md:p-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <img
                className="w-32 h-36 md:w-40 md:h-44 object-contain mb-6"
                alt={mainProducts[0].title}
                src={mainProducts[0].image}
              />
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-lg md:text-xl mb-2">
                {mainProducts[0].title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] text-[#6c6c6e] text-sm md:text-base leading-6 mb-4">
                {mainProducts[0].description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[#8b0000] text-lg md:text-xl font-semibold [font-family:'Montserrat',Helvetica]">
                  PRICE: {mainProducts[0].price}
                </span>
                <span className="text-[#2424276e] text-sm md:text-lg line-through [font-family:'Montserrat',Helvetica]">
                  {mainProducts[0].originalPrice}
                </span>
              </div>
              <Button className="flex items-center gap-2 bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] px-5 py-2 text-sm md:text-base">
                <span className="[font-family:'Poppins',Helvetica] text-white">
                  Shop Now
                </span>
                <img
                  className="w-4 h-4 md:w-5 md:h-5"
                  alt="Cart"
                  src={mainProducts[0].cartIcon}
                />
              </Button>
            </CardContent>
          </Card>

          {/* Two Side Products */}
          {mainProducts.slice(1, 3).map((product) => (
            <Card
              key={product.id}
              className="lg:col-span-1 rounded-[11px] border border-[#24242730]"
            >
              <CardContent className="p-4 md:p-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <img
                  className="w-full h-40 md:h-44 object-contain mb-4"
                  alt={product.title}
                  src={product.image}
                />
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-base md:text-lg mb-2">
                  {product.title}
                </h3>
                <p className="[font-family:'Poppins',Helvetica] text-[#6c6c6e] text-sm leading-6 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[#8b0000] text-base md:text-lg font-semibold">
                    {product.price}
                  </span>
                  <span className="text-[#2424276e] text-sm md:text-base line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <Button className="flex items-center gap-2 bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] px-4 py-2 text-sm md:text-base">
                  <span className="[font-family:'Poppins',Helvetica] text-white">
                    Shop Now
                  </span>
                  <img
                    className="w-4 h-4 md:w-5 md:h-5"
                    alt="Cart"
                    src={product.cartIcon}
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Small Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {smallProducts.map((product) => (
            <Card
              key={product.id}
              className="rounded-[11px] border border-[#24242730] overflow-hidden"
            >
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="mt-3 text-center font-semibold text-[#242427] text-xs md:text-sm [font-family:'Montserrat',Helvetica]">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-[#242427] text-sm md:text-base font-semibold">
                    {product.price}
                  </span>
                  <img
                    className="w-8 h-6 md:w-10 md:h-8 object-contain"
                    alt="Button"
                    src={product.buttonIcon}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
