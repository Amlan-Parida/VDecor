"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface RoomStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  range: [number, number, number]; // [start, active, end] scroll progress ranges
}

const roomStages: RoomStage[] = [
  {
    id: "exterior",
    title: "V Decor Luxury Living",
    subtitle: "The Grand Entrance",
    description: "Welcome to V Decor. Scroll down to enter your dream home and experience bespoke interior design room by room.",
    image: "/images/exterior.png",
    features: ["Modern Architectural Style", "Bespoke Landscaping", "Warm Ambient Lighting"],
    range: [0.0, 0.1, 0.22],
  },
  {
    id: "living-room",
    title: "The Lounge Room",
    subtitle: "Elegance & Comfort",
    description: "Step into a spacious living environment designed for conversation, leisure, and sophisticated comfort.",
    image: "/images/hero.png",
    features: ["Custom Velvet Furniture", "Marble Accent Floor", "Architectural Light Panels"],
    range: [0.18, 0.35, 0.48],
  },
  {
    id: "kitchen",
    title: "The Culinary Studio",
    subtitle: "Functional Luxury",
    description: "A chef-inspired modern kitchen featuring state-of-the-art appliance integration and flawless marble countertops.",
    image: "/images/kitchen.png",
    features: ["Integrated Appliances", "Natural Marble Countertops", "Brass Premium Fixtures"],
    range: [0.44, 0.58, 0.7],
  },
  {
    id: "bedroom",
    title: "The Master Retreat",
    subtitle: "Rest & Serenity",
    description: "Your bedroom sanctuary is designed to maximize natural lighting, luxurious fabrics, and soothing neutral tones.",
    image: "/images/bedroom.png",
    features: ["King Size Velvet Headboard", "Warm Concealed Lighting", "Bespoke Dressing Wardrobes"],
    range: [0.66, 0.78, 0.9],
  },
  {
    id: "bathroom",
    title: "The Wellness Spa",
    subtitle: "Daily Rejuvenation",
    description: "Transform daily routines into an escape with freestanding tubs, double vanities, and natural stone textures.",
    image: "/images/bathroom.png",
    features: ["Freestanding Soak Tub", "Natural Granite Stone Walls", "Rain Shower Sanctuary"],
    range: [0.86, 0.95, 1.0],
  },
];

export function HouseWalkthrough() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire walkthrough section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-black">
      {/* Sticky container that keeps the view locked in place as you scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Room Layer */}
        {roomStages.map((room, index) => {
          // Destructure active ranges
          const [start, active, end] = room.range;

          // Define how the image scales on scroll (goes from 0.65x up to 1.x at active, then zooms past to 3.5x at end)
          const scale = useTransform(
            scrollYProgress,
            [start, active, end],
            [0.65, 1.0, 3.5]
          );

          // Define how the image opacity changes on scroll
          const fadeInEnd = start + (active - start) * 0.5;
          const fadeOutStart = active + (end - active) * 0.5;
          const opacity = useTransform(
            scrollYProgress,
            [start, fadeInEnd, active, fadeOutStart, end],
            [0, 1, 1, 1, 0]
          );

          // Give a very subtle blur transition as we go deep into the room
          const blur = useTransform(
            scrollYProgress,
            [start, active, end],
            ["blur(8px)", "blur(0px)", "blur(12px)"]
          );

          return (
            <motion.div
              key={room.id}
              style={{
                scale,
                opacity,
                filter: blur,
                zIndex: index + 10,
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center origin-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                {/* Immersive radial gradient overlay creating a 3D tunnel depth look */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </motion.div>
          );
        })}

        {/* Text Overlay Layer */}
        {roomStages.map((room, index) => {
          const [start, active, end] = room.range;

          // Calculate text card opacity (peak visible when scroll is at room's active stage)
          const textFadeInEnd = start + (active - start) * 0.5;
          const textFadeOutStart = active + (end - active) * 0.5;
          const textOpacity = useTransform(
            scrollYProgress,
            [start, textFadeInEnd, active, textFadeOutStart, end],
            [0, 1, 1, 1, 0]
          );

          // Text slides up on enter, and up/out on exit
          const textY = useTransform(
            scrollYProgress,
            [start, active, end],
            [40, 0, -40]
          );

          return (
            <motion.div
              key={`text-${room.id}`}
              style={{
                opacity: textOpacity,
                y: textY,
                zIndex: index + 20,
              }}
              className="absolute bottom-12 md:bottom-20 left-4 right-4 md:left-12 max-w-lg pointer-events-auto"
            >
              <div className="glass p-6 md:p-8 rounded-3xl soft-shadow border border-white/10 text-white select-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles size={14} className="animate-pulse" />
                  {room.subtitle}
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                  {room.title}
                </h3>
                
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-white/70 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-semibold group cursor-pointer"
                >
                  Request Customized Concept
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}

        {/* Scroll Progress indicator at right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
          {roomStages.map((room, idx) => {
            const [, active] = room.range;
            
            const dotStart = Math.max(0, active - 0.1);
            const dotEnd = Math.min(1, active + 0.1);

            // Highlight dot if scroll is near room's active stage
            const dotOpacity = useTransform(
              scrollYProgress,
              [dotStart, active, dotEnd],
              [0.3, 1.0, 0.3]
            );

            const dotScale = useTransform(
              scrollYProgress,
              [dotStart, active, dotEnd],
              [0.8, 1.3, 0.8]
            );

            return (
              <motion.div
                key={`dot-${room.id}`}
                style={{ opacity: dotOpacity, scale: dotScale }}
                className="w-3.5 h-3.5 rounded-full border border-white bg-primary shadow-lg cursor-pointer"
                onClick={() => {
                  const targetScroll = active * (containerRef.current?.offsetHeight || 0);
                  window.scrollTo({
                    top: (containerRef.current?.offsetTop || 0) + targetScroll,
                    behavior: "smooth",
                  });
                }}
                title={room.title}
              />
            );
          })}
        </div>

        {/* Prompt indicator overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
            }}
            className="text-white/60 text-xs font-semibold tracking-widest uppercase animate-bounce"
          >
            Scroll Down to Enter the Villa
          </motion.div>
        </div>
      </div>
    </div>
  );
}
