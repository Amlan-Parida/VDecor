"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectLightbox, ProjectData } from "@/components/project-lightbox";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

type Project = ProjectData & {
  wide?: boolean; // spans 2 cols on lg
};

const categories = ["All", "Modern", "Classic", "Minimalist"] as const;

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: -16,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-12 md:py-16 bg-background" aria-label="Portfolio">
      <div className="container mx-auto px-4 md:px-6">
        {/* ---- Section heading ---- */}
        <motion.div
          className="text-center mb-12 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block mb-4 text-xs font-medium tracking-[0.25em] uppercase text-primary">
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured{" "}
            <span className="italic text-primary">Projects</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
            A curated selection of spaces we&apos;ve brought to life — each one
            a testament to craft, vision, and uncompromising quality.
          </p>
        </motion.div>

        {/* ---- Filter tabs ---- */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ---- Masonry grid ---- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className={cn(
                  "group relative rounded-2xl overflow-hidden cursor-pointer",
                  project.wide ? "lg:col-span-2" : ""
                )}
              >
                {/* Image container with overlay */}
                <div
                  className={cn(
                    "image-overlay relative w-full",
                    project.wide ? "h-72 md:h-96" : "h-72 md:h-80"
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out",
                      "group-hover:scale-110"
                    )}
                    sizes={
                      project.wide
                        ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                  />
                </div>

                {/* Text overlay – always visible at bottom, enhanced on hover */}
                <div
                  className={cn(
                    "absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-7",
                    "pointer-events-none"
                  )}
                >
                  {/* Category badge */}
                  <span
                    className={cn(
                      "self-start mb-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase",
                      "bg-primary/90 text-white backdrop-blur-sm",
                      "opacity-0 translate-y-3 transition-all duration-300",
                      "group-hover:opacity-100 group-hover:translate-y-0"
                    )}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3
                    className={cn(
                      "font-heading text-xl md:text-2xl font-bold text-white leading-tight",
                      "translate-y-2 transition-transform duration-300",
                      "group-hover:translate-y-0"
                    )}
                  >
                    {project.title}
                  </h3>

                  {/* Description – revealed on hover */}
                  <p
                    className={cn(
                      "mt-1.5 text-sm text-white/70 leading-relaxed line-clamp-2",
                      "opacity-0 translate-y-3 transition-all duration-300 delay-75",
                      "group-hover:opacity-100 group-hover:translate-y-0"
                    )}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectLightbox
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
