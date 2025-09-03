import { ChevronDownIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const navigationItems = [
  { label: "Home", hasDropdown: false },
  { label: "About Us", hasDropdown: false },
  { label: "Shop", hasDropdown: true },
  { label: "Page", hasDropdown: true },
  { label: "Contact", hasDropdown: false },
];

const statistics = [
  { value: "12K+", label: "PRODUCTS SOLD" },
  { value: "213+", label: "BRANDS AVAILABLE" },
  { value: "8,5K+", label: "HAPPY CUSTOMERS" },
];

const starRatings = [
  { src: "/star-2.svg", alt: "Star" },
  { src: "/star-2.svg", alt: "Star" },
  { src: "/star-2.svg", alt: "Star" },
  { src: "/star-2.svg", alt: "Star" },
  { src: "/star-5.svg", alt: "Star" },
];

export const HeaderSection: React.FC = () => {
  return (
    <header className="relative  h-auto bg-transparent">
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row relative">
          <div className="w-full lg:w-[45%] lg:pr-8 order-2 lg:order-1">
            <div className="pt-[235px] pb-8">
              <div className="mb-4 [font-family:'Montserrat',Helvetica] font-semibold text-[#242427cc] text-[28px] tracking-[0] leading-[35px]">
                GLOW NATURALLY, SHINE BOLDLY
              </div>

              <div className="mb-8 [font-family:'Montserrat',Helvetica] font-bold italic text-[#242427] text-[66px] tracking-[0] leading-[82.5px]">
                MAKEUP THAT MOVES WITH YOU
              </div>

              <div className="mb-16 max-w-[540px] [font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-[15px] tracking-[0] leading-[28.5px]">
                Discover beauty products that enhance your natural glow and keep
                up with your lifestyle. From bold looks to everyday essentials,
                GlamCart brings you premium makeup that feels as good as it
                looks.
              </div>

              <div className="flex flex-wrap gap-11 mb-16">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="mb-2 [font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="[font-family:'Montserrat',Helvetica] font-medium text-[#242427] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-8">
                <Button className="h-auto flex items-center justify-center gap-2.5 px-6 py-3 bg-[#8b0000] rounded-[9px] hover:bg-[#8b0000]/90">
                  <span className="text-white [font-family:'Poppins',Helvetica] font-medium text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                    Shop Now
                  </span>
                  <img
                    className="w-[19px] h-[19px]"
                    alt="Remove shopping cart"
                    src="/remove-shopping-cart-1.png"
                  />
                </Button>

                <Button
                  variant="outline"
                  className="h-auto flex items-center justify-center gap-2.5 px-6 py-3 bg-white rounded-[9px] border-0"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#8b0000] text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                    See Detail
                  </span>
                  <img
                    className="w-[19px] h-[19px]"
                    alt="Arrow circle right"
                    src="/arrow-circle-right.png"
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] relative order-1 lg:order-2">
            <div className="absolute w-[520px] h-[796px] top-0 right-0 bg-[#8b0000] rounded-bl-[38px] left-[38%]" />

            <nav className="flex  items-center justify-start pt-[60px] pb-8 relative z-10 translate-x-[-350px] gap-[320px]">
              {/* Left Nav Items */}
              <div className="flex items-center gap-[30px]">
                {navigationItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="font-medium text-[#242427] text-center leading-4 whitespace-nowrap [font-family:'Poppins',Helvetica] text-base tracking-[0]">
                      {item.label}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-6 h-6 text-[#242427]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Right Icons & Buttons */}
              <div className="flex items-center gap-4">
                <ShoppingCartIcon className="w-7 h-7 text-[#fff]" />
                <SearchIcon className="w-[29px] h-[29px] text-[#fff]" />
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                  Sign Up
                </span>
                <Button className="h-auto flex items-center justify-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#8b0000] text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                    Sign Up
                  </span>
                </Button>
              </div>
            </nav>


            <Card className="absolute w-[255px] h-[241px] top-56 left-[180px] bg-white rounded-[14px] shadow-[0px_4px_39.3px_#2424270a] border-0">
              <CardContent className="p-10">
                <div className="flex items-center gap-2 mb-4">
                  {starRatings.map((star, index) => (
                    <img
                      key={index}
                      className="w-[15.6px] h-[14.93px]"
                      alt={star.alt}
                      src={star.src}
                    />
                  ))}
                </div>

                <div className="mb-6 [font-family:'Montserrat',Helvetica] font-semibold text-[#130339] text-[15px] tracking-[0] leading-[34px] whitespace-nowrap">
                  10,000+ CLIENT HAPPY
                </div>

                <div className="mb-4">
                 
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-xs tracking-[0] leading-[22.8px]">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
              </CardContent>
            </Card>

            <img
              className="absolute w-[570px] h-[426px] top-[287px] left-[150px] object-cover"
              alt="Drop down img"
              src="/drop-down-img-1-1.png"
            />

            <Card className="absolute w-28 h-[78px] top-[542px] left-[110px] bg-white rounded-[11px] shadow-[0px_4px_39.3px_#2424270a] border-0">
              <CardContent className="p-4 flex items-center justify-center h-full">
                <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-base text-center tracking-[0] leading-[normal]">
                  DISC UP TO 50%
                </div>
              </CardContent>
            </Card>

            <Card className="absolute w-[329px] h-50 top-[733px] left-[320px] bg-white rounded-[11px] shadow-[0px_4px_39.3px_#2424270a] border-0">
              <CardContent className="p-10">
                <div className="mb-6 [font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-[19px] tracking-[0] leading-[normal]">
                  LIGHTWEIGHT &amp; BREATHABLE MATERIAL
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-xs tracking-[0] leading-[22.8px]">
                  Our products are crafted with skin-friendly formulas that keep
                  you comfortable and confident all day long.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </header>
  );
};
