"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const shimmer = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function HeroSection() {
  /* ---- parallax scroll state ---- */
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Parallax values derived from scroll position */
  const parallaxScale = 1 + scrollY * 0.0003;
  const parallaxY = scrollY * 0.35;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ---- Background image with parallax ---- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: parallaxScale,
          translateY: parallaxY,
        }}
      >
        <Image
          src="/images/hero.png"
          alt="Luxurious interior space designed by V Decor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* ---- Gradient overlay ---- */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/30"
        aria-hidden="true"
      />

      {/* ---- Content ---- */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge / label */}
        <motion.span
          variants={shimmer}
          className={cn(
            "inline-flex items-center gap-2 mb-6 md:mb-8",
            "px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md",
            "text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-white/90",
            "relative overflow-hidden"
          )}
        >
          {/* Shimmer sweep */}
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer-sweep_3s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            }}
            aria-hidden="true"
          />
          <span className="relative z-10">Premium Interior Design</span>
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-heading font-bold text-white leading-[1.08] tracking-tight"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl">
            Crafting Spaces
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl mt-1 md:mt-2">
            That{" "}
            <span className="text-primary italic">Inspire</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/75 font-sans"
        >
          We transform ordinary spaces into extraordinary experiences.
          <br className="hidden sm:block" /> Bespoke design solutions for modern
          living.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
        >
          <Link
            href="/portfolio"
            className={cn(
              "group relative inline-flex items-center justify-center",
              "rounded-full border border-white/40 px-8 py-3.5",
              "text-sm md:text-base font-medium tracking-wide text-white",
              "backdrop-blur-sm bg-white/5",
              "transition-all duration-300",
              "hover:bg-white/15 hover:border-white/60 hover:scale-[1.03]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            )}
          >
            Explore Our Work
          </Link>

          <Link
            href="/contact"
            className={cn(
              "group relative inline-flex items-center justify-center",
              "rounded-full bg-primary px-8 py-3.5",
              "text-sm md:text-base font-semibold tracking-wide text-white",
              "transition-all duration-300",
              "hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/30",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            )}
          >
            Book Consultation
          </Link>
        </motion.div>
      </motion.div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-5 w-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
