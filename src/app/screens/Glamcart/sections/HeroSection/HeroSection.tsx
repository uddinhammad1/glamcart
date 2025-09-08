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
  },
  {
    subtitle: "NEW STYLES, SPECIAL PRICES!",
    title: "NEW ARRIVALS ARE HERE!",
    description:
      "Be the first to explore our latest collection! Fresh styles, trending shades, and must-have essentials just dropped — don't miss out.",
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[linear-gradient(0deg,rgba(139,0,0,0.85)_0%,rgba(139,0,0,0.85)_100%),linear-gradient(0deg,rgba(196,196,196,1)_0%,rgba(196,196,196,1)_100%)] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {heroCards.map((card, index) => (
          <Card
            key={index}
            className="rounded-2xl border border-white/40 bg-transparent h-full"
          >
            <CardContent className="p-6 md:p-10 flex flex-col h-full justify-center">
              <div className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-3">
                {card.subtitle}
              </div>

              <div className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-4">
                {card.title}
              </div>

              <div className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                {card.description}
              </div>

              <Button
                variant="outline"
                className="w-fit px-6 py-3 rounded-lg border border-white text-black hover:bg-white hover:text-black transition"
              >
                Show More
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
