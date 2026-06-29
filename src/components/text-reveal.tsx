"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

function Word({
  word,
  index,
  totalWords,
  scrollYProgress,
}: {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / totalWords;
  const end = start + 1 / totalWords;

  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    [
      "var(--color-muted-foreground)",
      "var(--color-foreground)",
    ]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.25em] transition-none"
    >
      {word}
    </motion.span>
  );
}

export function TextReveal({ text, className }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className={cn("py-20 md:py-32 px-4 md:px-6", className)}
    >
      <div className="max-w-4xl mx-auto">
        {/* Red accent divider */}
        <div className="section-divider mb-10 md:mb-14" />

        {/* Reveal text */}
        <p className="font-heading text-3xl md:text-5xl lg:text-6xl leading-snug md:leading-tight lg:leading-tight tracking-tight">
          {words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              index={i}
              totalWords={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
