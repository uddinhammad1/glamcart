"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import AddProductForm from "../screens/Glamcart/sections/AddProductForm/AddProductForm";
import ProductList from "../screens/Glamcart/sections/ProductList/ProductList";

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
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

    if (!user) return <p>Loading...</p>;

    return (
        <div className="bg-[#f9fdee] w-full flex flex-col">
            <div className="w-full relative pb-10">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <HeaderSectionInner />
                    <img
                        className="
            absolute 
            w-20 sm:w-24 md:w-28 lg:w-[100px] 
            h-auto 
            top-4 sm:top-6 md:top-8 lg:top-[35px] 
            left-4 sm:left-6 md:left-10 lg:left-[80px] 
            object-contain
          "
                        alt="Logo"
                        src="/logo-1.png"
                    />
                </div>
            </div>
            <div className="p-8 m-auto bg-white rounded-lg shadow-md  text-center">
                <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
                <button
                    onClick={handleLogout}
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
                >
                    Logout
                </button>

                 <AddProductForm />

                  <ProductList />
            </div>
            <div className="w-full relative bg-[#242427]">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <FooterSection />
                </div>
            </div>
        </div>


    );
}
