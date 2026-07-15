"use client";

import { HeroSection } from "@/components/hero-section";
import { TextReveal } from "@/components/text-reveal";
import { ServiceCard } from "@/components/service-card";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactForm } from "@/components/contact-form";
import { HouseWalkthrough } from "@/components/house-walkthrough";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/lib/projects";
import {
  Sofa,
  CookingPot,
  BedDouble,
  Bath,
  Briefcase,
  TreePine,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const services = [
  {
    title: "Living Room Design",
    description: "Elegant spaces for comfort and conversation",
    image: "/images/hero.png",
    href: "/services",
    icon: <Sofa className="text-white" size={24} />,
  },
  {
    title: "Kitchen & Dining",
    description: "Where culinary art meets design excellence",
    image: "/images/kitchen.png",
    href: "/services",
    icon: <CookingPot className="text-white" size={24} />,
  },
  {
    title: "Bedroom Suites",
    description: "Sanctuaries of rest and personal expression",
    image: "/images/bedroom.png",
    href: "/services",
    icon: <BedDouble className="text-white" size={24} />,
  },
  {
    title: "Bathroom & Spa",
    description: "Luxurious retreats within your home",
    image: "/images/bathroom.png",
    href: "/services",
    icon: <Bath className="text-white" size={24} />,
  },
  {
    title: "Office & Study",
    description: "Productive spaces that inspire greatness",
    image: "/images/office.png",
    href: "/services",
    icon: <Briefcase className="text-white" size={24} />,
  },
  {
    title: "Outdoor & Terrace",
    description: "Extending luxury beyond four walls",
    image: "/images/portfolio-modern.png",
    href: "/services",
    icon: <TreePine className="text-white" size={24} />,
  },
];

export function HomeClient({ projects }: { projects: ProjectData[] }) {
  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== ABOUT / TEXT REVEAL ===== */}
      <TextReveal text="We craft interiors that speak to your soul, blending timeless elegance with modern refinement to create spaces that truly feel like home." />

      {/* ===== 3D HOUSE WALKTHROUGH ===== */}
      <HouseWalkthrough />

      {/* ===== SERVICES ===== */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to completion, we design every room with meticulous
              attention to detail and an unwavering commitment to quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <PortfolioGrid projects={projects} />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the families and
              businesses we&apos;ve had the pleasure to work with.
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about working with V Decor.
            </p>
          </motion.div>

          <FaqAccordion />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Project
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your space? Tell us about your vision and
              we&apos;ll craft a design plan tailored just for you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <ContactForm />

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col h-full"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">
                Get In Touch
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Visit Our Studio</p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      Karnataka & Odisha
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      +91 96111 05592
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      info@thevdecor.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Image */}
              <div className="relative flex-1 min-h-[200px] rounded-2xl overflow-hidden mt-6">
                <Image
                  src="/images/portfolio-modern.png"
                  alt="V Decor Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
