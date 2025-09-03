"use client";

import React from "react";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection/FeaturedProductsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { MostPopularProductsSection } from "./sections/MostPopularProductsSection/MostPopularProductsSection";
import { ProductCollectionSection } from "./sections/ProductCollectionSection/ProductCollectionSection";

export const Glamcart: React.FC = () => {
  return (
    
      <div className="bg-[#f9fdee] w-full flex flex-col">
        <div className="w-full relative pb-40">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <HeaderSection />
          <img
            className="absolute w-[100px] h-20 top-[35px] left-[80px] object-cover"
            alt="Logo"
            src="/logo-1.png"
          />
          </div>
        </div>

        <div className="w-full relative pb-60">
           <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <MostPopularProductsSection />
          </div>
        </div>

        <div className="w-full relative pb-30">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <ProductCollectionSection />
          </div>
        </div>

        <div className="w-full relative pb-30 bg-[#fff]">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <FeaturedProductsSection />
          </div>
        </div>

        <div className="w-full relative bg-[linear-gradient(0deg,rgba(139,0,0,0.85)_0%,rgba(139,0,0,0.85)_100%),linear-gradient(0deg,rgba(196,196,196,1)_0%,rgba(196,196,196,1)_100%)] mb-30 ">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <HeroSection />
          </div>
        </div>

        <div className="w-full relative pb-30">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <MainContentSection />
          </div>
        </div>

        <div className="w-full relative bg-[#242427]">
          <div className="bg-[#f9fdee] max-w-[1250px] mx-auto w-full">
          <FooterSection />
          </div>
        </div>
      </div>
  );
};
