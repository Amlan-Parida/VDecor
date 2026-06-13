"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ── Scroll listener ──────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // sync on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Dark mode ────────────────────────────────────────────────────
  useEffect(() => {
    const prefersDark = document.documentElement.classList.contains("dark");
    setIsDark(prefersDark);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }, []);

  // ── Lock body scroll when mobile menu is open ────────────────────
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ── Close mobile menu on route change ────────────────────────────
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "glass border-b border-border/50 py-3 shadow-sm text-foreground"
            : "bg-transparent py-5 text-white"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <span className="font-heading font-bold text-xl text-primary-foreground leading-none">
                V
              </span>
              {/* Subtle shimmer accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="font-heading font-semibold text-xl tracking-tight">
              Decor
            </span>
          </Link>

          {/* ── Desktop Navigation ───────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "animated-underline text-sm font-medium tracking-wide uppercase transition-colors duration-300",
                        isActive
                          ? "text-primary"
                          : "opacity-70 hover:opacity-100"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative w-9 h-9 flex items-center justify-center rounded-full border border-current/30 opacity-70 hover:opacity-100 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.25 }}
                      className="absolute"
                    >
                      <Sun size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.25 }}
                      className="absolute"
                    >
                      <Moon size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-2 group/cta"
                >
                  Free Consultation
                  <ArrowRight
                    size={14}
                    className="group-hover/cta:translate-x-0.5 transition-transform duration-300"
                  />
                </motion.button>
              </Link>
            </div>
          </nav>

          {/* ── Mobile Controls ──────────────────────────────────── */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-current/30 opacity-70 hover:opacity-100 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="relative w-10 h-10 flex items-center justify-center opacity-90 hover:opacity-100"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen Mobile Menu Overlay ───────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

            {/* Content */}
            <nav className="relative z-10 flex flex-col items-center justify-center h-full px-8">
              {/* Nav links */}
              <ul className="flex flex-col items-center gap-2 w-full max-w-sm">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.35,
                        delay: i * 0.06,
                        ease: "easeOut",
                      }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block text-center text-2xl font-heading font-semibold tracking-wide py-4 rounded-2xl transition-all duration-300",
                          isActive
                            ? "text-primary bg-primary/8"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"
              />

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.35 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold tracking-wide shadow-lg">
                    Free Consultation
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>

              {/* Decorative bottom text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-10 text-xs text-muted-foreground tracking-widest uppercase"
              >
                Crafting Spaces That Inspire
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
