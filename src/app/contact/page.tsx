"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/bedroom.png"
          alt="Contact Us"
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
              <span className="text-white">Contact</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Let's start a conversation about your dream space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Send us a message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our design team will get back to you within 24 hours.
                </p>
              </div>
              
              <div className="bg-card p-8 md:p-10 rounded-3xl soft-shadow border border-border/50">
                <ContactForm />
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="section-divider mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Studio Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Our Studio</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Karnataka & Odisha
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      +91 96111 05592
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      info@thevdecor.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mon-Fri: 10AM - 7PM<br />
                      Sat: 10AM - 4PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-muted rounded-3xl h-[300px] flex flex-col items-center justify-center border border-border/50 text-muted-foreground/50">
            <MapPin size={48} className="mb-4 opacity-50" />
            <p className="font-medium text-lg">Interactive map coming soon</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-muted/30 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
