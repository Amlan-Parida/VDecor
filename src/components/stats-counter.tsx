"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Single animated counter                                            */
/* ------------------------------------------------------------------ */

function AnimatedNumber({
  value,
  suffix = "",
  isInView,
}: {
  value: number;
  suffix?: string;
  isInView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (val) => setDisplay(Math.round(val)),
      });
      return controls.stop;
    }
  }, [value, isInView]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function StatsCounter({ stats, className }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          {/* Number */}
          <span className="font-heading text-4xl md:text-5xl font-bold text-primary leading-none">
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              isInView={isInView}
            />
          </span>

          {/* Decorative divider */}
          <span
            className="mt-3 mb-2 block h-px w-8 bg-primary/30"
            aria-hidden="true"
          />

          {/* Label */}
          <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
