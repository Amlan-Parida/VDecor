"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "How long does a full home interior project take?",
    answer:
      "Typically 8-12 weeks depending on the scope. We provide a detailed timeline during consultation.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer transparent, project-based pricing. After an initial consultation, you receive a detailed quote covering design, materials, and execution.",
  },
  {
    question: "Do you offer 3D visualization?",
    answer:
      "Yes! Every project includes photorealistic 3D renders so you can see your space before we begin construction.",
  },
  {
    question: "Can I choose my own materials?",
    answer:
      "Absolutely. We curate premium options for you, but you have full control over final material selections.",
  },
  {
    question: "Do you work on commercial spaces?",
    answer:
      "Yes, we design offices, restaurants, retail spaces, and hospitality interiors with the same attention to detail.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve major metropolitan areas but take on select projects nationwide. Contact us to discuss your location.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-border">
            {/* Question row */}
            <button
              type="button"
              onClick={() => toggle(index)}
              className={cn(
                "flex w-full items-center justify-between gap-4 py-5 text-left",
                "cursor-pointer transition-colors duration-200",
                "hover:text-primary"
              )}
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-medium">
                {item.question}
              </span>

              <span
                className={cn(
                  "shrink-0 text-muted-foreground transition-transform duration-300",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              >
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>

            {/* Answer panel */}
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
