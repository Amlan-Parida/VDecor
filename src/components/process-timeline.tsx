"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    description: "Share your vision and requirements with our design experts in an initial discovery session.",
  },
  {
    num: "02",
    title: "Concept Design",
    description: "We present photorealistic 3D renders, mood boards, and tailored material palettes for your approval.",
  },
  {
    num: "03",
    title: "Material Selection",
    description: "Explore and finalize hand-picked premium materials from our network of trusted suppliers.",
  },
  {
    num: "04",
    title: "Execution",
    description: "Our expert craftsmen bring your design to life with precision, managed by a dedicated project leader.",
  },
  {
    num: "05",
    title: "Handover",
    description: "Move into your beautifully transformed dream space, complete with our post-completion guarantee.",
  },
];

export function ProcessTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto py-10">
      {/* Central Line (Desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

      <div className="space-y-12 md:space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot (Desktop) */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center z-10 shadow-lg">
                <span className="text-primary font-bold">{step.num}</span>
              </div>

              {/* Content Area */}
              <div className={`w-full md:w-1/2 ${isEven ? "md:pl-16 lg:pl-24" : "md:pr-16 lg:pr-24"}`}>
                <div className="bg-card p-8 rounded-2xl soft-shadow border border-border/50 relative overflow-hidden hover-lift group">
                  {/* Decorative huge number */}
                  <span className="absolute -right-4 -bottom-6 font-heading text-8xl font-bold text-primary/5 select-none pointer-events-none transition-transform group-hover:scale-110 duration-500">
                    {step.num}
                  </span>
                  
                  {/* Mobile step indicator */}
                  <div className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold mb-4">
                    {step.num}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
