"use client";
import React, { useEffect, useState } from "react";
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
import { useCart } from "../../../../contexts/CartContext";
import { supabase } from "../../../../lib/supabaseClient";

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
  const [user, setUser] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart } = useCart();

  // ✅ Load user session
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();

    // Real-time auth change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowDropdown(false);
  };

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

            <nav className="flex items-center relative z-90 pt-[40px] sm:pt-[50px] lg:pt-[60px] pb-6 sm:pb-8 lg:translate-x-[-350px] lg:gap-[320px] justify-between lg:justify-start w-full">
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

              {/* Right Side (Cart + Auth) */}
              <div className="flex items-center gap-4 ml-auto pr-[20px] relative">
                {/* Mobile Menu Button */}
                <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <XIcon className="w-7 h-7 text-[#8b0000]" /> : <MenuIcon className="w-7 h-7 text-[#8b0000]" />}
                </button>

                {/* Cart */}
                <div className="relative hidden lg:block">
                  <button onClick={() => setShowMiniCart(!showMiniCart)} className="relative">
                    <ShoppingCartIcon className="w-7 h-7 text-white" />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#8b0000] text-white text-xs rounded-full px-2 py-0.5">
                        {cart.length}
                      </span>
                    )}
                  </button>
                </div>

                <SearchIcon className="hidden lg:block w-7 h-7 text-white" />

                {/* ✅ Show user or login/signup */}
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90"
                    >
                      <span className="text-[#8b0000] font-medium text-base font-poppins">
                        {user.email}
                      </span>
                      <ChevronDownIcon className="w-4 h-4 text-[#8b0000]" />
                    </button>

                    {showDropdown && (
                      <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40 py-2 z-50">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-[#8b0000] hover:bg-gray-100 text-sm"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
