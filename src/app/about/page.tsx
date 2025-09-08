"use client";
import React from "react";
import { FooterSection } from "../screens/Glamcart/sections/FooterSection/FooterSection";
import { HeaderSectionInner } from "../screens/Glamcart/sections/HeaderSectionInner/HeaderSectionInner";
import { MainContentSectionAbout } from "../screens/Glamcart/sections/MainContentSectionAbout/MainContentSectionAbout";


export default function AboutPage() {
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

            <div className="w-full relative pb-30">
                <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
                    <MainContentSectionAbout />
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
