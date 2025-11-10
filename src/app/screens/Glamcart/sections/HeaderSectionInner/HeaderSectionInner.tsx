"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
  LogOutIcon,
  UserIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { MiniCart } from "../minicart/minicart";
import { useCart } from "../../../../contexts/CartContext";
import { supabase } from "../../../../lib/supabaseClient";

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
  const [showMiniCart, setShowMiniCart] = useState(false);

  // Mini cart ref for outside click
  const miniCartRef = useRef<HTMLDivElement>(null);

  // Cart Context
  const { cart } = useCart();

  // Search States
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Get user from Supabase
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    getUser();

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
    window.location.href = "/";
  };

  // 🔍 Search logic
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike("name", `%${searchQuery}%`);

    if (error) console.error(error);
    else setResults(data || []);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) handleSearch();
      else setResults([]);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // 🧠 Close MiniCart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (miniCartRef.current && !miniCartRef.current.contains(e.target as Node)) {
        setShowMiniCart(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="relative h-auto bg-transparent">
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row relative">
          <div className="w-full lg:w-[45%] order-2 lg:order-1"></div>

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
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-[30px]">
                {navigationItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link href={item.href}>
                      <span className="font-medium text-[#242427] text-base font-poppins cursor-pointer hover:text-[#8b0000]">
                        {item.label}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-4 ml-auto pr-[20px] relative">
                {/* Mobile Menu */}
                <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? (
                    <XIcon className="w-7 h-7 text-[#8b0000]" />
                  ) : (
                    <MenuIcon className="w-7 h-7 text-[#8b0000]" />
                  )}
                </button>

                {/* 🛒 Mini Cart */}
                <div className="relative hidden lg:block" ref={miniCartRef}>
                  <button
                    className="relative flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMiniCart((prev) => !prev);
                    }}
                  >
                    <ShoppingCartIcon
                      className={`w-7 h-7 transition-colors duration-200 ${showMiniCart ? "text-[#8b0000]" : "text-[#8b0000]"
                        }`}
                    />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#8b0000] text-white text-xs font-semibold rounded-full px-[6px] py-[1px] leading-none">
                        {cart.length}
                      </span>
                    )}
                  </button>

                  {showMiniCart && (
                    <div
                      className="absolute right-0 top-10 z-[200]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MiniCart />
                    </div>
                  )}
                </div>

                {/* 🔍 Search Icon */}
                <button onClick={() => setSearchOpen(!searchOpen)}>
                  {searchOpen ? (
                    <XIcon className="w-7 h-7 text-[#8b0000]" />
                  ) : (
                    <SearchIcon className="hidden lg:block w-7 h-7 text-[#8b0000]" />
                  )}
                </button>

                {/* Search Box */}
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-72 z-50">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {loading ? (
                      <p className="text-sm text-gray-500">Searching...</p>
                    ) : results.length > 0 ? (
                      <ul className="mt-2 max-h-60 overflow-y-auto border-t pt-2">
                        {results.map((p) => (
                          <li
                            key={p.id}
                            className="py-2 border-b text-left text-sm hover:text-[#8b0000] cursor-pointer"
                          >
                            <Link href={`/product/${p.id}`}>{p.name}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      searchQuery && (
                        <p className="text-sm text-gray-500 mt-2">
                          No products found.
                        </p>
                      )
                    )}
                  </div>
                )}

                {/* 👤 Auth / User Dropdown */}
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        // When clicking username → Go to respective dashboard
                        if (user?.email === "admin@example.com") {
                          window.location.href = "/admin/dashboard";
                        } else {
                          window.location.href = "/customer/dashboard";
                        }
                      }}
                      className="hidden lg:flex h-auto items-center gap-2.5 px-6 py-3 bg-white rounded-[9px] hover:bg-white/90"
                    >
                      <UserIcon className="w-5 h-5 text-[#8b0000]" />
                      <span className="text-[#8b0000] font-medium text-base font-poppins mr-3">
                        {user.email.split("@")[0]}
                      </span>
                    </button>

                    {/* Dropdown for Logout */}
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="absolute top-0 right-0 mt-[10px] mr-[5px] hidden lg:block"
                    >
                      <ChevronDownIcon className="w-5 h-5 text-[#8b0000] " />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute right-0 mt-5 w-40 bg-white border rounded-lg shadow-md p-2 z-50">
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
            </nav>

              {menuOpen && (
              <div className=" relative top-full left-0 w-full bg-white shadow-lg z-[999] py-4 px-6 lg:hidden">
                {navigationItems.map((item, index) => (
                  <Link key={index} href={item.href} onClick={() => setMenuOpen(false)}>
                    <div className="py-3 border-b border-gray-200 text-[#242427] font-medium">
                      {item.label}
                    </div>
                  </Link>
                ))}

                {/* Cart button for mobile */}
                <div className="flex items-center justify-between mt-4">
                  <Link href="/cart" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                    <ShoppingCartIcon className="w-6 h-6 text-[#8b0000]" />
                    <span className="font-medium text-[#8b0000]">Cart ({cart.length})</span>
                  </Link>
                </div>

                {/* Login / User */}
                <div className="mt-4">
                  {user ? (
                    <>
                      <Link href="/customer/dashboard" onClick={() => setMenuOpen(false)}>
                        <div className="py-3 text-[#8b0000] font-medium">Dashboard</div>
                      </Link>
                      <button
                        onClick={() => { handleLogout(); setMenuOpen(false); }}
                        className="py-3 text-left w-full text-[#8b0000] font-medium"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setMenuOpen(false)}>
                        <div className="py-3 text-[#8b0000] font-medium">Login</div>
                      </Link>
                      <Link href="/signup" onClick={() => setMenuOpen(false)}>
                        <div className="py-3 text-[#8b0000] font-medium">Sign Up</div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
