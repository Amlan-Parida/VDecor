"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: ReactNode;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ServiceCard({
  title,
  description,
  image,
  href,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Link
        href={href}
        className={cn(
          "group relative block h-[350px] md:h-[400px] rounded-2xl overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        aria-label={`Learn more about ${title}`}
      >
        {/* ---- Background image ---- */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-500 ease-out",
              "group-hover:scale-105"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
        </div>

        {/* ---- Default gradient overlay ---- */}
        <div
          className={cn(
            "absolute inset-0 z-[1]",
            "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
            "transition-opacity duration-500",
            "group-hover:opacity-0"
          )}
          aria-hidden="true"
        />

        {/* ---- Red-tinted hover gradient overlay ---- */}
        <div
          className={cn(
            "absolute inset-0 z-[1]",
            "bg-gradient-to-t from-primary/90 via-primary/40 to-black/20",
            "opacity-0 transition-opacity duration-500",
            "group-hover:opacity-100"
          )}
          aria-hidden="true"
        />

        {/* ---- Content ---- */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
          {/* Icon */}
          <div
            className={cn(
              "mb-3 flex h-11 w-11 items-center justify-center",
              "rounded-xl bg-white/10 backdrop-blur-sm border border-white/15",
              "text-white transition-colors duration-500",
              "group-hover:bg-white/20 group-hover:border-white/25"
            )}
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl font-semibold text-white leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-2">
            {description}
          </p>

          {/* Learn More — fades in on hover */}
          <span
            className={cn(
              "mt-4 inline-flex items-center gap-1.5",
              "text-sm font-medium tracking-wide text-white",
              "opacity-0 translate-y-2",
              "transition-all duration-500 ease-out",
              "group-hover:opacity-100 group-hover:translate-y-0"
            )}
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
