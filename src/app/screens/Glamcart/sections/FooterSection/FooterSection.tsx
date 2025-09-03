import { ArrowRightIcon, MailIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const exploreLinks = [
  { label: "Resources", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Documents", href: "#" },
];

const menuLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#242427] py-[120px] px-[50px] relative mt-[50px]">
      <div className="max-w-[1216px] mx-auto ">
        <Card className="bg-[#8b0000] border-none rounded-[29px] mb-[50px] ">
          <CardContent className="p-0">
            <div className="flex items-start justify-between p-[79px] pb-[59px]">
              <div className="flex-1 max-w-[589px]">
                <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[50px] tracking-[0] leading-[62.5px] mb-[49px]">
                  WHERE BEAUTY MEETS ARTISTRY
                </h2>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[28.5px] mb-[69px] max-w-[531px]">
                  Unlock your inner artist with our curated selection of
                  professional-grade palettes and beauty essentials. From
                  everyday elegance to bold creativity, we&apos;ve got
                  everything you need to express your unique style.
                </p>

                <div className="flex gap-[31px]">
                  <Button className="bg-white text-[#8b0000] hover:bg-white/90 [font-family:'Poppins',Helvetica] font-medium text-base h-[49px] px-6 py-3 rounded-[9px] gap-2.5">
                    Shop Now
                    <ShoppingCartIcon className="w-[19px] h-[19px]" />
                  </Button>

                  <Button className="bg-white text-[#8b0000] hover:bg-white/90 [font-family:'Poppins',Helvetica] font-medium text-base h-[49px] px-6 py-3 rounded-[9px] gap-2.5">
                    See Detail
                    <ArrowRightIcon className="w-[19px] h-[19px]" />
                  </Button>
                </div>
              </div>

              <div className="ml-[75px]">
                <img
                  className="w-[500px] h-[369px] object-cover"
                  alt="Image"
                  src="/image-11.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>

       <div className="grid grid-cols-4 gap-8">
  {/* Left Logo */}
  <div className="flex items-start justify-center">
    <div className="w-[200px] h-[200px]">
      <img
        className="w-full h-full object-contain"
        alt="Logo"
        src="/image-12.svg"
      />
    </div>
  </div>

  {/* Explore */}
  <nav className="flex flex-col items-start">
    <h3 className="font-semibold text-white text-[23px] mb-6">Explore</h3>
    <div className="flex flex-col gap-4">
      {exploreLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="font-normal text-[#ffffffcc] text-base hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <img className="h-[55px] w-auto" alt="Social" src="/social.png" />
    </div>
  </nav>

  {/* Menu */}
  <nav className="flex flex-col items-start">
    <h3 className="font-semibold text-white text-[23px] mb-6">Menu</h3>
    <div className="flex flex-col gap-4">
      {menuLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="font-normal text-[#ffffffcc] text-base hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  </nav>

  {/* Office + Newsletter */}
  <div className="flex flex-col">
    <div className="mb-8">
      <h3 className="font-semibold text-white text-[22px] mb-4">Office Location</h3>
      <p className="text-[#ffffffcc] text-base">New York, USA</p>
    </div>

    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-semibold text-white text-[22px] mb-3">Newsletter</h3>
        <div className="flex items-center border-b border-[#ffffff33] pb-2">
          <Input
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none text-[#ffffffcc] placeholder:text-[#ffffffcc] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <MailIcon className="w-6 h-6 text-[#ffffffcc] cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    </footer>
  );
};
