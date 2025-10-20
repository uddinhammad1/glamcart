"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { MiniCart } from "../minicart/minicart";
import { supabase } from "../../../../lib/supabaseClient"; // ✅ Ensure your client path is correct

const navigationItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Shop", href: "/shop", hasDropdown: false },
  { label: "Faq", href: "/faq", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

export const HeaderSectionInner: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    getUser();

    // Optional: listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = "/"; // redirect to home after logout
  };

  return (
    <header className="relative h-auto bg-transparent">
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row relative">
          {/* Left Section */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1"></div>

          {/* Right Section */}
          <div className="w-full lg:w-[55%] relative order-1 lg:order-2 flex flex-col items-center lg:block">
            <nav
              className="
                flex items-center relative z-90 
                pt-[40px] sm:pt-[50px] lg:pt-[60px] 
                pb-6 sm:pb-8 
                lg:translate-x-[-350px] lg:gap-[320px] 
                justify-between lg:justify-start w-full
              "
            >
              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-[30px]">
                {navigationItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link href={item.href}>
                      <span className="font-medium text-[#242427] text-base font-poppins cursor-pointer hover:text-[#8b0000]">
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
                {/* Mobile Menu */}
                <button
                  className="lg:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <XIcon className="w-7 h-7 text-[#8b0000]" />
                  ) : (
                    <MenuIcon className="w-7 h-7 text-[#8b0000]" />
                  )}
                </button>

                {/* Mini Cart */}
                <div className="hidden lg:block">
                  <MiniCart />
                </div>

                {/* Search */}
                <SearchIcon className="hidden lg:block w-7 h-7 text-[#8b0000]" />

                {/* ✅ Auth / User Dropdown */}
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-[9px] hover:bg-white/90 border border-gray-200"
                    >
                      <UserIcon className="w-5 h-5 text-[#8b0000]" />
                      <span className="text-[#8b0000] font-medium text-base font-poppins">
                        {user.email.split("@")[0]}
                      </span>
                      <ChevronDownIcon className="w-5 h-5 text-[#8b0000]" />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md p-2 z-50">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 text-left px-3 py-2 text-[#8b0000] hover:bg-gray-100 rounded-md"
                        >
                          <LogOutIcon className="w-4 h-4" /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link href="/login">
                      <Button className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90">
                        <span className="text-[#8b0000] font-medium text-base font-poppins">
                          Login
                        </span>
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90">
                        <span className="text-[#8b0000] font-medium text-base font-poppins">
                          Sign Up
                        </span>
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Dropdown */}
              {menuOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 lg:hidden">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Link href={item.href}>
                        <span className="font-medium text-[#242427] text-base font-poppins">
                          {item.label}
                        </span>
                        {item.hasDropdown && (
                          <ChevronDownIcon className="w-5 h-5 text-[#242427]" />
                        )}
                      </Link>
                    </div>
                  ))}

                  <div className="flex items-center gap-4 border-t pt-4">
                    <Link href="/cart" className="relative">
                      <MiniCart />
                    </Link>
                    <SearchIcon className="w-6 h-6 text-[#242427]" />

                    {user ? (
                      <button
                        onClick={handleLogout}
                        className="flex-1 bg-[#8b0000] text-white rounded-md py-2"
                      >
                        Logout
                      </button>
                    ) : (
                      <>
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
                      </>
                    )}
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
