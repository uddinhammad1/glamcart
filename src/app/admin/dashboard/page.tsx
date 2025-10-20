"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { FooterSection } from "../../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import AddProductForm from "../../screens/Glamcart/sections/AddProductForm/AddProductForm";
import ProductList from "../../screens/Glamcart/sections/ProductList/ProductList";
import ContactList from "../../screens/Glamcart/sections/ContactList/ContactList";
import type { Product } from "../../types/Product";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeTab, setActiveTab] = useState<"products" | "contacts">("products");
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user: supabaseUser },
      } = await supabase.auth.getUser();

      if (!supabaseUser) {
        router.push("/login");
      } else {
        setUser(supabaseUser);
      }
    };
    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-[#f9fdee] w-full flex flex-col min-h-screen">
      {/* Header */}
      <div className="w-full relative pb-10">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <HeaderSectionInner />
          <img
            className="absolute w-24 md:w-[100px] h-auto top-6 left-[80px] object-contain"
            alt="Logo"
            src="/logo-1.png"
          />
        </div>
      </div>

      {/* Dashboard Main */}
      <div className="flex-grow p-8 m-auto bg-white rounded-lg shadow-md text-center w-full max-w-5xl">
        <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
        <button
          onClick={handleLogout}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-6 border-b pb-2">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 font-semibold rounded-t-lg ${
              activeTab === "products"
                ? "bg-[#8b0000] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            🛍 Products
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-6 py-2 font-semibold rounded-t-lg ${
              activeTab === "contacts"
                ? "bg-[#8b0000] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            💬 Contact Messages
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "products" ? (
            <>
              {/* Add/Edit Product Form */}
              <AddProductForm
                editProduct={editProduct}
                onFinish={() => {
                  setEditProduct(null);
                  setRefreshKey((prev) => prev + 1);
                }}
              />

              {/* Product List */}
              <div className="mt-10">
                <ProductList
                  key={refreshKey}
                  onEdit={(product) => setEditProduct(product)}
                />
              </div>
            </>
          ) : (
            <>
              {/* Contact Messages Section */}
              <ContactList />
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-[#242427] mt-10">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
