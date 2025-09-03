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
      arrowIcon: "/arrow-circle-right-5.png",
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
      buttonIcon: "/button-6.svg",
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
      buttonIcon: "/button-8.svg",
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
      <div className="max-w-[100%] mx-auto px-4 py-16">
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-[695px]">
            <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-[64px] tracking-[0] leading-[80px] mb-6">
              ALL OUR PRODUCT
            </h1>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-[15px] tracking-[0] leading-[28.5px] mb-8">
              Discover the complete range of our beauty essentials — from
              stunning lip colors to voluminous lashes and everything in
              between. Crafted with care, made to empower.
            </p>
          </div>

          <Button className="bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] h-auto px-6 py-3 gap-2.5">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4">
              Learn More
            </span>
            <img
              className="w-[19px] h-[19px]"
              alt="Arrow circle right"
              src="/arrow-circle-right-4.png"
            />
          </Button>
        </div>

        {/* Featured Products Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Big Card - Left */}
          <Card className="lg:col-span-2 xl:col-span-2 rounded-[11px] border border-solid border-[#24242730]">
            <CardContent className="p-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <img
                className="w-[150px] h-[160px] object-cover mb-6 rounded-lg mx-auto"
                alt={mainProducts[0].title}
                src={mainProducts[0].image}
              />
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl mb-2">
                {mainProducts[0].title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] text-[#6c6c6e] text-base leading-6 mb-4">
                {mainProducts[0].description}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#8b0000] text-xl font-semibold [font-family:'Montserrat',Helvetica]">
                  PRICE: {mainProducts[0].price}
                </span>
                <span className="text-[#2424276e] text-lg line-through [font-family:'Montserrat',Helvetica]">
                  {mainProducts[0].originalPrice}
                </span>
              </div>
              <Button className="flex items-center gap-2 bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] h-10 px-6">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm">
                  Shop Now
                </span>

                <img className="w-[19px] h-[19px]" alt="Cart" src={mainProducts[0].cartIcon} />

              </Button>


            </CardContent>
          </Card>

          {/* Two Small Cards - Right (side by side) */}
          {mainProducts.slice(1, 3).map((product) => (
            <Card
              key={product.id}
              className="lg:col-span-1 rounded-[11px] border border-solid border-[#24242730]"
            >
              <CardContent className="p-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <img
                  className="w-full h-[160px] object-cover mb-4 rounded-lg"
                  alt={product.title}
                  src={product.image}
                />
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-base mb-2">
                  {product.title}
                </h3>
                <p className="[font-family:'Poppins',Helvetica] text-[#6c6c6e] text-sm leading-6 mb-4 pr-[30px]">
                  {product.description}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#8b0000] text-lg font-semibold [font-family:'Montserrat',Helvetica]">
                    {product.price}
                  </span>
                  <span className="text-[#2424276e] text-sm line-through [font-family:'Montserrat',Helvetica]">
                    {product.originalPrice}
                  </span>
                </div>
                <Button className="flex items-center gap-2 bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] h-8 px-6">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm">
                    Shop Now
                  </span>
                  <img className="w-[16px] h-[16px]" alt="Cart" src={product.cartIcon} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {smallProducts.map((product) => (
            <Card
              key={product.id}
              className="rounded-[11px] border border-solid border-[#24242730] overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center p-4">

                  {/* Fixed size Image Wrapper */}
                  <div className="w-[160px] h-[160px] flex items-center justify-center overflow-hidden">
                    {product.image && (
                      <img
                        src={product.image}
                        alt="Product"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-center [font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-[13px] leading-normal">
                    {product.title}
                  </h3>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-[#242427] text-base font-semibold [font-family:'Montserrat',Helvetica]">
                      {product.price}
                    </span>
                    <img
                      className="w-[42px] h-[30px] object-contain"
                      alt="Button"
                      src={product.buttonIcon}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>






      </div>
    </section>
  );
};
