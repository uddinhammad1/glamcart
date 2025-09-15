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
    <footer className="w-full bg-[#242427] py-16 px-6 md:px-12 lg:px-20 relative mt-12">
      <div className="max-w-[1216px] mx-auto">
        {/* Top Banner */}
        <Card className="bg-[#8b0000] border-none rounded-3xl mb-12">
          <CardContent className="p-8 md:p-12 lg:p-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
              {/* Left Content */}
              <div className="flex-1">
                <h2 className="font-semibold text-white text-3xl md:text-4xl lg:text-5xl leading-snug mb-6">
                  WHERE BEAUTY MEETS ARTISTRY
                </h2>

                <p className="text-white text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  Unlock your inner artist with our curated selection of
                  professional-grade palettes and beauty essentials. From
                  everyday elegance to bold creativity, we&apos;ve got everything
                  you need to express your unique style.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-[#8b0000] hover:bg-white/90 font-medium text-base h-12 px-6 rounded-lg flex items-center gap-2">
                    Shop Now
                    <ShoppingCartIcon className="w-5 h-5" />
                  </Button>

                  <Button className="bg-white text-[#8b0000] hover:bg-white/90 font-medium text-base h-12 px-6 rounded-lg flex items-center gap-2">
                    See Detail
                    <ArrowRightIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full max-w-md">
                <img
                  className="w-full h-auto rounded-xl object-contain"
                  alt="Image"
                  src="/image-11.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-40 h-40 object-contain"
              alt="Logo"
              src="/image-12.svg"
            />
          </div>

          {/* Explore */}
          <nav className="flex flex-col items-start">
            <h3 className="font-semibold text-white text-xl mb-4">Explore</h3>
            <div className="flex flex-col gap-3">
              {exploreLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#ffffffcc] hover:text-white transition-colors text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <img className="h-12 w-auto" alt="Social" src="/social.png" />
            </div>
          </nav>

          {/* Menu */}
          <nav className="flex flex-col items-start">
            <h3 className="font-semibold text-white text-xl mb-4">Menu</h3>
            <div className="flex flex-col gap-3">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#ffffffcc] hover:text-white transition-colors text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Office + Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Office Location
              </h3>
              <p className="text-[#ffffffcc] text-base">Orlando Florida, USA</p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Newsletter
              </h3>
              <div className="flex items-center border-b border-[#ffffff33] pb-2">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent border-none text-[#ffffffcc] placeholder:text-[#ffffffcc] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <MailIcon className="w-6 h-6 text-[#ffffffcc] cursor-pointer hover:text-white transition-colors ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
