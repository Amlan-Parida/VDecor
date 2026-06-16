"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Lightbulb, Users, Shield } from "lucide-react";
import { StatsCounter } from "@/components/stats-counter";
import { ProcessTimeline } from "@/components/process-timeline";

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 12, suffix: "+", label: "Years" },
  { value: 35, suffix: "", label: "Team Members" },
  { value: 15, suffix: "+", label: "Awards" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/portfolio-classic.png"
          alt="About V Decor"
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
              <span className="text-white">About</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              About V Decor
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Where passion meets precision in every design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden premium-shadow"
            >
              <Image
                src="/images/hero.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-divider mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2014, V Decor began with a simple yet profound belief: that the spaces we inhabit shape the lives we lead. What started as a boutique studio has grown into an award-winning design firm renowned for its dedication to luxury, functionality, and timeless aesthetics.
                </p>
                <p>
                  Our approach to interior design is deeply collaborative. We don't just decorate rooms; we curate experiences tailored to your lifestyle. By blending architectural principles with bespoke furnishings and premium materials, we create cohesive environments that are uniquely yours.
                </p>
                <p>
                  Today, our team of over 35 passionate designers, architects, and craftsmen continue to push the boundaries of modern interior design, ensuring every project is delivered with unmatched precision and care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="text-primary" size={32} />,
                title: "Excellence",
                desc: "We pursue perfection in every detail, from concept sketches to final installation."
              },
              {
                icon: <Lightbulb className="text-primary" size={32} />,
                title: "Innovation",
                desc: "We blend timeless design principles with cutting-edge trends and technology."
              },
              {
                icon: <Users className="text-primary" size={32} />,
                title: "Collaboration",
                desc: "Your vision is our blueprint. We design WITH you, not just FOR you."
              },
              {
                icon: <Shield className="text-primary" size={32} />,
                title: "Integrity",
                desc: "Transparent pricing, honest timelines, and genuine care for every project."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl soft-shadow border border-border/50 text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="py-12 md:py-20 bg-background">
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
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven five-step process ensures every project is delivered
              with precision, transparency, and exceptional quality.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The creative minds and technical experts behind our award-winning designs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Victoria Reyes", role: "Principal Designer", bio: "With 15 years in luxury residential design, Victoria leads the creative vision for all V Decor projects." },
              { name: "Julian Thorne", role: "Design Director", bio: "Julian specializes in blending contemporary aesthetics with classic architectural elements." },
              { name: "Amira Patel", role: "Senior Interior Architect", bio: "Amira ensures every design is as structurally sound and functional as it is beautiful." },
              { name: "Marcus Chen", role: "Project Manager", bio: "Marcus coordinates our craftsmen and suppliers to ensure flawless, on-time execution." },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl soft-shadow text-center border border-border/50"
              >
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-6 overflow-hidden flex items-center justify-center">
                  <span className="text-muted-foreground font-heading text-3xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
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
            Book a free consultation and let us bring your vision to life.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-accent hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
