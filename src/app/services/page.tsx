"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "living-room",
    title: "Living Room Design",
    description: "We design living spaces that balance beauty and comfort. From furniture selection to lighting design, every element is curated to create a cohesive, inviting atmosphere.",
    image: "/images/hero.png",
    features: [
      "Custom furniture curation",
      "Lighting design",
      "Color palette development",
      "Accent wall design",
    ],
  },
  {
    id: "kitchen-dining",
    title: "Kitchen & Dining",
    description: "The heart of your home deserves exceptional design. We create kitchens that are as functional as they are beautiful, with premium materials and smart layouts.",
    image: "/images/kitchen.png",
    features: [
      "Layout optimization",
      "Premium countertops & cabinetry",
      "Appliance integration",
      "Dining area styling",
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom Suites",
    description: "Your bedroom should be a sanctuary. We design restful retreats with luxurious textiles, ambient lighting, and thoughtful storage solutions.",
    image: "/images/bedroom.png",
    features: [
      "Luxury bedding & textile selection",
      "Walk-in closet design",
      "Ambient lighting schemes",
      "Custom headboard design",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom & Spa",
    description: "Transform your bathroom into a spa-like escape. Premium fixtures, natural stone, and thoughtful layouts create a daily luxury experience.",
    image: "/images/bathroom.png",
    features: [
      "Spa-inspired design",
      "Premium fixture selection",
      "Natural stone & tile work",
      "Smart storage solutions",
    ],
  },
  {
    id: "office",
    title: "Office & Study",
    description: "Productive spaces that inspire creativity. We design home offices and studies that boost focus while maintaining aesthetic harmony with your home.",
    image: "/images/office.png",
    features: [
      "Ergonomic workspace design",
      "Built-in shelving & storage",
      "Technology integration",
      "Acoustic optimization",
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor & Terrace",
    description: "Extend your living space outdoors. We create stunning terraces, balconies, and garden areas that seamlessly connect indoor and outdoor living.",
    image: "/images/portfolio-modern.png",
    features: [
      "Weather-resistant furnishing",
      "Landscape integration",
      "Outdoor lighting design",
      "Entertainment area setup",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/kitchen.png"
          alt="Our Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/70 mb-4 text-sm font-medium tracking-widest uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white">Services</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored for every space in your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-20 lg:space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col gap-12 lg:gap-20 items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden premium-shadow group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                  >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-accent transition-colors soft-shadow"
                    >
                      Get a Quote <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary/10 py-16 md:py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Book a free consultation and let us bring your vision to life with expert precision and unparalleled luxury.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-accent hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
