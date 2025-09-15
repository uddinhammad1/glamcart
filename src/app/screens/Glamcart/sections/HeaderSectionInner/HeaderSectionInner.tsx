import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";


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
const navigationItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Shop", href: "#", hasDropdown: false },
  { label: "Faq", href: "/faq", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

export const HeaderSectionInner: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative h-auto bg-transparent">
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row relative">
          {/* Left Section */}
          <div className="w-full lg:w-[45%] lg:pr-8 order-2 lg:order-1">

          </div>



          {/* Right Section */}
          <div className="w-full lg:w-[55%] relative order-1 lg:order-2 flex flex-col items-center lg:block">

            {/* Navigation */}
            <nav
              className="
      flex items-center relative z-90 
      pt-[40px] sm:pt-[50px] lg:pt-[60px] pb-6 sm:pb-8
      lg:translate-x-[-350px] lg:gap-[320px] 
      justify-between lg:justify-start w-full
    "
            >
              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-[30px]">
                {navigationItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link href={item.href}>
                      <span className="font-medium text-[#242427] text-base [font-family:'Poppins',Helvetica] cursor-pointer hover:text-[#8b0000]">
                        {item.label}
                      </span>
                    </Link>
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-5 h-5 text-[#242427]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-4 ml-auto pr-[20px]">
                {/* Hamburger Menu (Mobile Only) */}
                <button
                  className="lg:hidden text-white"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <XIcon className="w-7 h-7 text-[#8b0000]" />
                  ) : (
                    <MenuIcon className="w-7 h-7 text-[#8b0000]" />
                  )}
                </button>

                <ShoppingCartIcon className="hidden lg:block w-7 h-7 text-[#8b0000]" />
                <SearchIcon className="hidden lg:block w-7 h-7 text-[#8b0000]" />
                <Link href="/login">
                  <Button className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90">
                    <span className="text-[#8b0000] font-medium text-base [font-family:'Poppins',Helvetica]">
                      Login
                    </span>
                  </Button>
                </Link>
                <Button className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90">
                  <span className="text-[#8b0000] font-medium text-base [font-family:'Poppins',Helvetica]">
                    Sign Up
                  </span>
                </Button>
              </div>

              {/* Mobile Dropdown */}
              {menuOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 lg:hidden">
                  {navigationItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <Link href={item.href}>
                        <span className="font-medium text-[#242427] text-base [font-family:'Poppins',Helvetica]">
                          {item.label}
                        </span>

                        {item.hasDropdown && (
                          <ChevronDownIcon className="w-5 h-5 text-[#242427]" />
                        )}
                      </Link>
                    </div>
                  ))}
                  
                  <div className="flex items-center gap-4 border-t pt-4">
                    <ShoppingCartIcon className="w-6 h-6 text-[#242427]" />

                    <SearchIcon className="w-6 h-6 text-[#242427]" />
                    <Link href="/login">
                    <Button className="flex-1 bg-[#8b0000] text-white rounded-md py-2">

                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="flex-1 bg-[#8b0000] text-white rounded-md py-2">
                      Sign Up
                    </Button>
                    </Link>
                  </div>
                </div>
              )}
            </nav>


          </div>

        </div>
      </div>
    </header>
  );
};
