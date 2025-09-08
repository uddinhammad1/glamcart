"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3 sm:py-4">
      {/* Question Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-base sm:text-lg font-semibold text-[#242427]">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 sm:w-5 sm:h-5 text-[#8b0000] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer with Animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm sm:text-base text-[#6c6c6e] leading-5 sm:leading-6 pr-2">
          {answer}
        </p>
      </div>
    </div>
  );
};
