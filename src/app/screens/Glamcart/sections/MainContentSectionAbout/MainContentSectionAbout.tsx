import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSectionAbout: React.FC = () => {
  const features = [
    {
      icon: "/offline-pin.png",
      text: "Fashionable",
    },
    {
      icon: "/offline-pin-1.png",
      text: "Modern",
    },
  ];

  return (
    <section className="w-full relative py-12 md:py-20">
      <div className="w-full max-w-[1212px] mx-auto px-4 space-y-24">
        {/* First Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            className="w-full max-w-sm md:max-w-md rounded-2xl object-cover mx-auto"
            alt="Image"
            src="/image-9.png"
          />

          <div className="flex flex-col space-y-6">
            <h6 className="font-semibold text-[#8b0000] text-lg md:text-lg leading-snug">
              About Us
            </h6>
            <h2 className="font-semibold text-[#242427] text-3xl md:text-5xl leading-snug">
              ELEVATE YOUR EVERYDAY GLAM
            </h2>
            <p className="text-[#6c6c6e] text-base md:text-lg leading-relaxed">
              Turn your daily routine into a beauty ritual. Our versatile
              collection is designed to add a touch of elegance and modern style
              to every look—whether you're going natural or going bold.
            </p>
            <p className="text-[#6c6c6e] text-base md:text-lg leading-relaxed">
              Discover the perfect mix of trend and timelessness with our curated
              picks—made for the confident, stylish you.
            </p>

            <div className="flex gap-8 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img className="w-6 h-6" alt={feature.text} src={feature.icon} />
                  <span className="font-medium text-[#242427] text-lg">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="font-semibold text-[#242427] text-3xl md:text-5xl leading-snug">
              WEEKLY SPECIAL DEALS
            </h2>
            <p className="font-medium text-[#242427] text-lg leading-snug">
              Enjoy up to 50% off selected items! Don't miss your chance to look
              cool at a hot price.
            </p>
            <p className="text-[#6c6c6e] text-base md:text-lg leading-relaxed">
              Style meets savings—upgrade your beauty routine without breaking the
              bank.
            </p>
            <Button className="bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-lg px-6 py-3 text-white w-fit flex items-center gap-2">
              Learn More
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>

          {/* Middle Image */}
          <img
            className="w-full max-w-sm md:max-w-md rounded-2xl object-cover mx-auto"
            alt="Image"
            src="/image-10.png"
          />

          {/* Card Side */}
          <Card className="rounded-2xl overflow-hidden border-0 h-full">
            <CardContent className="relative w-full h-full p-8 bg-[url(/bg.png)] bg-cover bg-center flex flex-col items-center justify-center text-center space-y-6">
              <h3 className="font-semibold text-black text-xl md:text-2xl">
                MINIMAL PRICE
              </h3>
              <h4 className="font-semibold text-black text-3xl md:text-5xl leading-snug">
                STARTING FROM $12.99
              </h4>
              <p className="text-black text-base md:text-lg leading-relaxed max-w-sm">
                Affordable beauty that doesn't compromise on quality. From silky lip
                colors to glowing highlighters, shop premium picks at minimal prices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
