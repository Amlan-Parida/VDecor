"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function PortfolioHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-white/70 mb-4 text-sm font-medium tracking-widest uppercase">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-white">Portfolio</span>
      </div>
      <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
        Our Portfolio
      </h1>
      <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
        Showcasing our finest interior design projects, where creativity meets craftsmanship.
      </p>
    </motion.div>
  );
}
