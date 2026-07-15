import Image from "next/image";
import Link from "next/link";
import { FeaturedPortfolio } from "@/components/featured-portfolio";
import { PortfolioHero } from "@/components/portfolio-hero";
import { getAllProjects } from "@/lib/projects";

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/portfolio-modern.png"
          alt="Our Portfolio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4">
          <PortfolioHero />
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <FeaturedPortfolio projects={projects} />
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Let us bring your vision to life with our expert design team. We are ready to turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-accent transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto inline-flex justify-center items-center border border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary/5 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
