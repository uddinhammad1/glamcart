"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer"); // 👈 default role
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");
        setSuccessMsg("");

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { role }, // 👈 store role in metadata
            },
        });

        setLoading(false);

        if (error) {
            setErrorMsg(error.message);
        } else {
            setSuccessMsg("Signup successful! Please check your email to confirm.");
            setEmail("");
            setPassword("");
            setRole("customer"); // reset
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        }
    };

    return (
        <div className="bg-[#f9fdee] w-full flex flex-col">
            <div className="w-full relative pb-10">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <HeaderSectionInner />
                    <img
                        className="absolute w-20 sm:w-24 md:w-28 lg:w-[100px] 
                                   h-auto top-4 sm:top-6 md:top-8 lg:top-[35px] 
                                   left-4 sm:left-6 md:left-10 lg:left-[80px] 
                                   object-contain"
                        alt="Logo"
                        src="/logo-1.png"
                    />
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md m-auto">
                <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {/* 👇 Role selection */}
                    <select
                        className="w-full px-4 py-2 border rounded-lg"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>

                    {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
                    {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-[#8b0000] text-white rounded-lg hover:bg-[#6b0000] disabled:opacity-50"
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#8b0000] hover:underline">
                        Login
                    </a>
                </p>
            </div>

            <div className="w-full relative bg-[#242427]">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <FooterSection />
                </div>
            </div>
        </div>
    );
}
