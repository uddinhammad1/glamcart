import { ArrowRightIcon } from "lucide-react";
import * as React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const heroCards = [
  {
    subtitle: "NEW STYLES, SPECIAL PRICES!",
    title: "UP TO 50% OFF!",
    description:
      "Snag your beauty favorites at unbeatable prices! For a limited time only, enjoy up to 50% off select items — while supplies last.",
    width: "w-[40%]",
    contentWidth: "w-[449px]",
    titleWidth: "w-[347px]",
    descWidth: "w-[349px]",
    left: "left-[150px]",
  },
  {
    subtitle: "NEW STYLES, SPECIAL PRICES!",
    title: "NEW ARRIVALS ARE HERE!",
    description:
      "Be the first to explore our latest collection! Fresh styles, trending shades, and must-have essentials just dropped — don't miss out.",
    width: "w-[60%]",
    contentWidth: "w-[722px]",
    titleWidth: "w-[573px]",
    descWidth: "w-[573px]",
    left: "left-[640px]",
  },
];

export const HeroSection : React.FC = () => {
  return (
    <section className="w-full h-[659px] bg-[linear-gradient(0deg,rgba(139,0,0,0.85)_0%,rgba(139,0,0,0.85)_100%),linear-gradient(0deg,rgba(196,196,196,1)_0%,rgba(196,196,196,1)_100%)] relative">
      <div className="flex gap-[35px] pt-[136px] pl-[20px] pr-[20px]">
        {heroCards.map((card, index) => (
          <div key={index} className={`${card.width} h-[387px]`}>
            <Card
              className={`${card.contentWidth} h-[387px] rounded-[19px] border border-solid border-[#ffffff6b] bg-transparent`}
            >
              <CardContent className="p-0 relative h-full">
                <div className="absolute w-[313px] top-[57px] left-[41px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[19px] tracking-[0] leading-[23.8px] whitespace-nowrap">
                  {card.subtitle}
                </div>

                <div
                  className={`absolute ${card.titleWidth} top-[104px] ${index === 0 ? "left-[41px]" : "left-[62px]"} [font-family:'Montserrat',Helvetica] font-semibold text-white text-[41px] tracking-[0] leading-[51.2px] whitespace-nowrap`}
                >
                  {card.title}
                </div>

                <div
                  className={`absolute ${card.descWidth} top-[166px] ${index === 0 ? "left-[41px]" : "left-[62px]"} [font-family:'Poppins',Helvetica] font-normal text-[#ffffffb2] text-[15px] tracking-[0] leading-[28.5px]`}
                >
                  {card.description}
                </div>

                <Button
                  variant="outline"
                  className={`absolute top-[272px] ${index === 0 ? "left-[41px]" : "left-[62px]"} w-[177px] h-[57px] rounded-[9px] border border-solid border-white bg-transparent hover:bg-white/10 text-white hover:text-white [font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-4`}
                >
                  Show More
                  <ArrowRightIcon className="w-[19px] h-[19px] ml-2.5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
