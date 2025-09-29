"use client";
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
import { useCart } from "../../../../contexts/CartContext"; // ✅ import context

const statistics = [
  { value: "12K+", label: "PRODUCTS SOLD" },
  { value: "213+", label: "BRANDS AVAILABLE" },
  { value: "8,5K+", label: "HAPPY CUSTOMERS" },
];

const starRatings = [
  { src: "/Star-2.svg", alt: "Star" },
  { src: "/Star-2.svg", alt: "Star" },
  { src: "/Star-2.svg", alt: "Star" },
  { src: "/Star-2.svg", alt: "Star" },
  { src: "/Star-5.svg", alt: "Star" },
];

const navigationItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Shop", href: "/shop", hasDropdown: false },
  { label: "Faq", href: "/faq", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

export const HeaderSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const { cart } = useCart(); // ✅ get cart from context

  return (
    <header className="relative h-auto bg-transparent">
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row relative">
          {/* Left Section */}
          <div className="w-full lg:w-[45%] lg:pr-8 order-2 lg:order-1">
            <div className="pt-16 md:pt-24 lg:pt-[235px] pb-8 px-4 sm:px-6 lg:px-0">
              <div className="mb-4 font-montserrat font-semibold text-[#242427cc] text-xl sm:text-2xl md:text-[28px] leading-7 sm:leading-8">
                GLOW NATURALLY, SHINE BOLDLY
              </div>

              <div className="mb-8 font-montserrat font-bold italic text-[#242427] text-3xl sm:text-4xl md:text-[42px] lg:text-[66px] leading-[38px] sm:leading-[46px] md:leading-[54px] lg:leading-[82.5px]">
                MAKEUP THAT MOVES WITH YOU
              </div>

              <div className="mb-12 max-w-[540px] font-poppins font-normal text-[#6c6c6e] text-sm sm:text-base leading-6 sm:leading-7 md:leading-[28.5px]">
                Discover beauty products that enhance your natural glow and keep up with your lifestyle.
              </div>

              <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-11 mb-12">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex flex-col items-start">
                    <div className="mb-1 sm:mb-2 font-montserrat font-semibold text-[#242427] text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="font-montserrat font-medium text-[#242427] text-xs sm:text-sm whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-12">
                <Link href="/shop">
                  <Button className="h-auto flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#8b0000] rounded-[9px] hover:bg-[#8b0000]/90 w-full sm:w-auto">
                    <span className="text-white font-poppins font-medium text-sm sm:text-base">
                      Shop Now
                    </span>
                    <img className="w-4 h-4 sm:w-[19px] sm:h-[19px]" alt="cart" src="/remove-shopping-cart-1.png" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="h-auto flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-white rounded-[9px] border-0 w-full sm:w-auto"
                  >
                    <span className="font-poppins font-medium text-[#8b0000] text-sm sm:text-base">
                      See Detail
                    </span>
                    <img className="w-4 h-4 sm:w-[19px] sm:h-[19px]" alt="arrow" src="/arrow-circle-right.png" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[55%] relative order-1 lg:order-2 flex flex-col items-center lg:block">
            <div className="hidden lg:block absolute w-[250px] sm:w-[400px] lg:w-[520px] h-[400px] sm:h-[600px] lg:h-[796px] top-0 right-0 bg-[#8b0000] rounded-bl-[38px] left-[40%]" />

            {/* Navigation */}
            <nav className="flex items-center relative z-90 pt-[40px] sm:pt-[50px] lg:pt-[60px] pb-6 sm:pb-8 lg:translate-x-[-350px] lg:gap-[320px] justify-between lg:justify-start w-full">
              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-[30px]">
                {navigationItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link href={item.href}>
                      <span className="font-medium text-[#242427] text-base font-poppins cursor-pointer hover:text-[#8b0000]">
                        {item.label}
                      </span>
                    </Link>
                    {item.hasDropdown && <ChevronDownIcon className="w-5 h-5 text-[#242427]" />}
                  </div>
                ))}
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-4 ml-auto pr-[20px] relative">
                {/* Mobile Menu */}
                <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <XIcon className="w-7 h-7 text-[#8b0000]" /> : <MenuIcon className="w-7 h-7 text-[#8b0000]" />}
                </button>

                {/* ✅ Cart Icon with dropdown */}
                <div className="relative hidden lg:block">
                  <button onClick={() => setShowMiniCart(!showMiniCart)} className="relative">
                    <ShoppingCartIcon className="w-7 h-7 text-white" />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#8b0000] text-white text-xs rounded-full px-2 py-0.5">
                        {cart.length}
                      </span>
                    )}
                  </button>

                  {showMiniCart && (
                    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                      {cart.length === 0 ? (
                        <p className="text-gray-600 text-sm">No items in cart</p>
                      ) : (
                        <ul className="space-y-3 max-h-60 overflow-y-auto">
                          {cart.map((item) => (
                            <li key={item.id} className="flex items-center gap-3 border-b pb-2">

                              <div className="flex-1">
                                <p className="font-semibold text-sm">{item.name}</p>
                                <p className="text-xs text-gray-500">
                                  {item.quantity} × ${item.price}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                      {cart.length > 0 && (
                        <div className="mt-3">
                          <div className="font-bold text-sm">
                            Total: $
                            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Link
                              href="/cart"
                              className="flex-1"
                            >

                              <button className="w-full bg-gray-200 text-black py-1 rounded-md">
                                View Cart
                              </button>

                            </Link>
                            <Link href="/checkout" className="flex-1">
                              <button className="w-full bg-[#8b0000] text-white py-1 rounded-md">
                                Checkout
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <SearchIcon className="hidden lg:block w-7 h-7 text-white" />

                <Link href="/login">
                  <Button className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90">
                    <span className="text-[#8b0000] font-medium text-base font-poppins">Login</span>
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90">
                    <span className="text-[#8b0000] font-medium text-base font-poppins">Sign Up</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Dropdown */}
              {menuOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 lg:hidden">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Link href={item.href}>
                        <span className="font-medium text-[#242427] text-base font-poppins">{item.label}</span>
                        {item.hasDropdown && <ChevronDownIcon className="w-5 h-5 text-[#242427]" />}
                      </Link>
                    </div>
                  ))}

                  <div className="flex items-center gap-4 border-t pt-4">
                    <Link href="/cart" className="relative">
                      <ShoppingCartIcon className="w-6 h-6 text-[#242427]" />
                      {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#8b0000] text-white text-xs rounded-full px-2 py-0.5">
                          {cart.length}
                        </span>
                      )}
                    </Link>
                    <SearchIcon className="w-6 h-6 text-[#242427]" />
                    <Link href="/login">
                      <Button className="flex-1 bg-[#8b0000] text-white rounded-md py-2">Login</Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="flex-1 bg-[#8b0000] text-white rounded-md py-2">Sign Up</Button>
                    </Link>
                  </div>
                </div>
              )}
            </nav>

            {/* IMAGE */}
            <img
              className="w-full max-w-[300px] sm:max-w-[540px] lg:w-[570px] h-auto mx-auto lg:mx-0 relative lg:absolute top-0 lg:top-[287px] left-0 lg:left-[150px] object-cover z-20"
              alt="Drop down img"
              src="/drop-down-img-1-1.png"
            />

            {/* CARD 1 */}
            <Card className="hidden sm:block w-full max-w-[220px] lg:w-[255px] h-auto mx-auto mt-6 lg:mt-0 relative lg:absolute lg:top-56 lg:left-[180px] bg-white rounded-[14px] shadow-[0px_4px_39.3px_#2424270a] border-0 z-10">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  {starRatings.map((star, index) => (
                    <img key={index} className="w-[15px] h-[15px]" alt={star.alt} src={star.src} />
                  ))}
                </div>
                <div className="mb-4 sm:mb-6 font-semibold text-[#130339] text-sm sm:text-[15px] leading-[24px] sm:leading-[34px] [font-family:'Montserrat',Helvetica]">
                  10,000+ CLIENT HAPPY
                </div>
                <div className="font-normal text-[#6c6c6e] text-xs leading-[20px] sm:leading-[22.8px] [font-family:'Poppins',Helvetica]">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
              </CardContent>
            </Card>

            {/* CARD 2 */}
            <Card className="hidden sm:block w-full max-w-[140px] lg:w-28 h-auto mx-auto mt-6 lg:mt-0 relative lg:absolute lg:top-[542px] lg:left-[110px] bg-white rounded-[11px] shadow-[0px_4px_39.3px_#2424270a] border-0 z-30">
              <CardContent className="p-4 flex items-center justify-center h-full">
                <div className="font-semibold text-[#242427] text-sm sm:text-base text-center [font-family:'Montserrat',Helvetica]">
                  DISC UP TO 50%
                </div>
              </CardContent>
            </Card>

            {/* CARD 3 */}
            <Card className="w-full max-w-[320px] lg:w-80 h-auto mx-auto mt-6 lg:mt-0 relative lg:absolute lg:top-[733px] lg:left-[320px] bg-white rounded-[11px] shadow-[0px_4px_39.3px_#2424270a] border-0 z-10">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="mb-4 sm:mb-6 font-semibold text-[#242427] text-base sm:text-[19px] [font-family:'Montserrat',Helvetica]">
                  LIGHTWEIGHT & BREATHABLE MATERIAL
                </div>
                <div className="font-normal text-[#6c6c6e] text-xs leading-[20px] sm:leading-[22.8px] [font-family:'Poppins',Helvetica]">
                  Our products are crafted with skin-friendly formulas that keep you comfortable and confident all day long.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </header>
  );
};
