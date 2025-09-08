"use client";
import React from "react";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import { AccordionItem } from "../components/ui/Accordion";


export default function faq() {
    const faqData = [
        {
            question: "What makes GlamCart products unique?",
            answer:
                "Our products are crafted with premium, skin-friendly formulas designed to enhance your natural beauty while being lightweight and breathable.",
        },
        {
            question: "Do you test on animals?",
            answer:
                "No, all GlamCart products are 100% cruelty-free. We are committed to ethical beauty practices.",
        },
        {
            question: "Are your products suitable for sensitive skin?",
            answer:
                "Yes, our products are dermatologically tested and safe for sensitive skin. Always do a patch test if you’re unsure.",
        },
        {
            question: "How long does delivery take?",
            answer:
                "Delivery usually takes 3-5 business days within the US and 7-14 days for international orders.",
        },
        {
            question: "Do you ship internationally?",
            answer:
                "Yes, we ship to most countries worldwide. Shipping costs will be calculated at checkout.",
        },
        {
            question: "Can I return or exchange a product?",
            answer:
                "Yes, we accept returns and exchanges within 14 days of purchase, provided the product is unused and unopened.",
        },
        {
            question: "Do you offer discounts or promotions?",
            answer:
                "Yes, we frequently run seasonal promotions and offer special discounts. Sign up for our newsletter to stay updated.",
        },
        {
            question: "How can I contact customer support?",
            answer:
                "You can reach our support team via the Contact page or email us at support@glamcart.com.",
        },
    ];
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

            <div className="max-w-[800px] mx-auto px-6 py-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#242427] mb-8">
                    Frequently Asked Questions
                </h1>

                <div className="divide-y divide-gray-200">
                    {faqData.map((faq, idx) => (
                        <AccordionItem
                            key={idx}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>



            <div className="w-full relative bg-[#242427]">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <FooterSection />
                </div>
            </div>
        </div>
    );
}
