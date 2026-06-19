"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Richards",
    role: "Homeowner",
    project: "Living Room Redesign",
    rating: 5,
    quote: "V Decor transformed our outdated living area into a breathtaking, modern space. Their attention to detail and premium material selection exceeded our expectations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eleanor&backgroundColor=f0efea"
  },
  {
    id: 2,
    name: "James Sterling",
    role: "Villa Owner",
    project: "Full Home Interior",
    rating: 5,
    quote: "The team's ability to blend classic elegance with modern functionality is unmatched. Every room feels cohesive, luxurious, and perfectly tailored to our lifestyle.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=f0efea"
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Restaurateur",
    project: "Commercial Space",
    rating: 5,
    quote: "Working with V Decor for our new restaurant was a phenomenal experience. They understood our brand vision and executed it flawlessly on time and within budget.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia&backgroundColor=f0efea"
  },
  {
    id: 4,
    name: "Marcus & Olivia Vance",
    role: "Homeowners",
    project: "Kitchen & Dining",
    rating: 5,
    quote: "Our kitchen is now the stunning centerpiece of our home. The craftsmanship and innovative layout they proposed have completely changed how we entertain.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=f0efea"
  },
  {
    id: 5,
    name: "David Harrison",
    role: "CEO",
    project: "Executive Office Suite",
    rating: 5,
    quote: "Professional, creative, and highly responsive. The V Decor team delivered a sophisticated office environment that perfectly represents our corporate identity.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=f0efea"
  },
  {
    id: 6,
    name: "Elena Rostova",
    role: "Apartment Owner",
    project: "Luxury Penthouse",
    rating: 5,
    quote: "I wanted a minimalist yet warm aesthetic for my penthouse, and they absolutely nailed it. The 3D visualizations matched the final result perfectly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=f0efea"
  },
];

// Duplicate the array to create a seamless infinite marquee
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-4 group">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-6 px-4 animate-marquee group-hover:[animation-play-state:paused]">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="w-[320px] md:w-[420px] bg-card soft-shadow rounded-2xl p-8 flex flex-col border border-border/50 shrink-0 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={cn(
                    "fill-current",
                    i < testimonial.rating ? "text-primary" : "text-muted"
                  )}
                />
              ))}
            </div>
            
            <p className="font-heading text-lg md:text-xl italic leading-relaxed mb-8 flex-1 text-foreground">
              "{testimonial.quote}"
            </p>
            
            <div className="mt-auto flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border border-border/50 bg-muted shrink-0 object-cover"
              />
              <div>
                <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {testimonial.role} • {testimonial.project}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CSS Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
