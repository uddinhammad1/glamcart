"use client";
import React, { useState } from "react";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import { supabase } from "../lib/supabaseClient";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setErrorMsg("");

    // Trim input values
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setLoading(false);
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      const { data, error } = await supabase.from("contacts").insert([
        {
          full_name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        },
      ]);

      if (error) {
        console.error("Supabase Insert Error:", error);
        setErrorMsg("Oops! Something went wrong. Please try again later.");
      } else {
        setSuccess("Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
      setErrorMsg("Unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f9fdee] w-full flex flex-col">
      {/* Header */}
      <div className="w-full relative pb-10 md:pb-20">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <HeaderSectionInner />
          <img
            className="absolute w-20 sm:w-24 md:w-28 lg:w-[100px] h-auto top-4 sm:top-6 md:top-8 lg:top-[35px] left-4 sm:left-6 md:left-10 lg:left-[80px] object-contain"
            alt="Logo"
            src="/logo-1.png"
          />
        </div>
      </div>

      {/* Contact Section */}
      <section className="w-full px-4 sm:px-8 py-10 sm:py-16 bg-[#f9fdee]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#242427] mb-6">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-[#6c6c6e] mb-10">
            Have questions or need help? Fill out the form below and our team
            will get back to you as soon as possible.
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 gap-6 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-[#242427] mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#242427] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#242427] mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 bg-[#8b0000] text-white font-semibold rounded-lg shadow-md hover:bg-[#6b0000] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Success / Error messages */}
            {success && <p className="text-green-600 mt-2">{success}</p>}
            {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full relative bg-[#242427] mt-10">
        <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
