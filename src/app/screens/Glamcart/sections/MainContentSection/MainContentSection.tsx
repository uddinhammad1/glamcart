import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection : React.FC = () => {
  const features = [
    {
      icon: "/offline-pin.png",
      text: "Fashionable",
      className: "left-[432px]",
    },
    {
      icon: "/offline-pin-1.png",
      text: "Modern",
      className: "left-[693px]",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="w-full max-w-[1212px] mx-auto">
        <div className="relative w-full h-[463px] mb-[144px]">
          <img
            className="w-[378px] h-[463px] rounded-[20px] object-cover"
            alt="Image"
            src="/image-9.png"
          />

          <div className="absolute top-[15px] left-[436px] w-[742px]">
            <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-[50px] tracking-[0] leading-[62.5px]">
              ELEVATE YOUR EVERYDAY GLAM
            </h2>
          </div>

          <div className="absolute top-[199px] left-[436px] w-[756px]">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-[15px] tracking-[0] leading-[28.5px]">
              Turn your daily routine into a beauty ritual. Our versatile
              collection is designed to add a touch of elegance and modern style
              to every look—whether you&apos;re going natural or going bold.
            </p>
          </div>

          <div className="absolute top-[355px] left-[436px] w-[756px]">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-[15px] tracking-[0] leading-[28.5px]">
              Discover the perfect mix of trend and timelessness with our
              curated picks—made for the confident, stylish you.
            </p>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute top-[291px] ${feature.className} w-[242px] h-7`}
            >
              <div className="absolute top-0 left-[31px] w-[209px]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#242427] text-[17px] tracking-[0] leading-[32.3px] whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
              <img
                className="absolute w-6 h-6 top-[3px] left-0"
                alt="Offline pin"
                src={feature.icon}
              />
            </div>
          ))}
        </div>

        <div className="relative w-full h-[463px]">
          <div className="absolute top-[15px] left-0 w-[436px]">
            <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#242427] text-[50px] tracking-[0] leading-[62.5px]">
              WEEKLY SPECIAL DEALS
            </h2>
          </div>

          <div className="absolute top-[184px] left-0 w-[419px]">
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#242427] text-lg tracking-[0] leading-[29.5px]">
              Enjoy up to 50% off selected items! Don&apos;t miss your chance to
              look cool at a hot price.
            </p>
          </div>

          <div className="absolute top-[282px] left-0 w-[419px]">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#6c6c6e] text-[15px] tracking-[0] leading-[28.5px]">
              Style meets savings—upgrade your beauty routine without breaking
              the bank.
            </p>
          </div>

          <Button className="absolute top-[401px] left-0 w-[157px] h-[47px] bg-[#8b0000] hover:bg-[#8b0000]/90 rounded-[9px] px-6 py-3 gap-2.5">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Learn More
            </span>
            <ArrowRightIcon className="w-[19px] h-[19px] text-white" />
          </Button>

          <img
            className="absolute w-[328px] h-[463px] top-0 left-[473px] rounded-[20px] object-cover"
            alt="Image"
            src="/image-10.png"
          />

          <Card className="absolute w-[391px] h-[463px] top-0 left-[827px] rounded-[20px] overflow-hidden border-0">
            <CardContent className="relative w-full h-full p-0 bg-[url(/bg.png)] bg-cover bg-[50%_50%]">
              <div className="absolute top-[82px] left-[91px] w-[212px]">
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[21px] text-center tracking-[0] leading-[26.2px]">
                  MINIMAL PRICE
                </h3>
              </div>

              <div className="absolute top-[126px] left-[39px] w-[316px]">
                <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[43px] text-center tracking-[0] leading-[53.8px]">
                  STARTING FROM $12.99
                </h4>
              </div>

              <div className="absolute top-[269px] left-[42px] w-[309px]">
                <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[28.5px]">
                  Affordable beauty that doesn&apos;t compromise on quality.
                  From silky lip colors to glowing highlighters, shop premium
                  picks at minimal prices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
