"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectLightbox, ProjectData } from "@/components/project-lightbox";

export function FeaturedPortfolio({ projects }: { projects: ProjectData[] }) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Define layout classes for the alternating asymmetrical grid
  const getLayoutClasses = (index: number) => {
    switch (index) {
      case 0:
        return "md:col-span-2 lg:col-span-8 md:row-span-2"; // Big Left
      case 1:
        return "md:col-span-1 lg:col-span-4 md:row-span-1"; // Small Right Top
      case 2:
        return "md:col-span-1 lg:col-span-4 md:row-span-1"; // Small Right Bottom
      case 3:
        return "md:col-span-1 lg:col-span-4 md:row-span-1"; // Small Left Top
      case 4:
        return "md:col-span-2 lg:col-span-8 md:row-span-2"; // Big Right
      case 5:
        return "md:col-span-1 lg:col-span-4 md:row-span-1"; // Small Left Bottom
      case 6:
        return "md:col-span-2 lg:col-span-12 md:row-span-2"; // Massive Bottom
      default:
        return "md:col-span-1 lg:col-span-4 md:row-span-1";
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[300px] gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
            className={cn(
              "relative rounded-3xl overflow-hidden group cursor-pointer w-full h-full",
              getLayoutClasses(index)
            )}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Default Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hover Overlay Reveal */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 translate-y-8 group-hover:translate-y-0">
              <span className="text-white/80 font-medium tracking-widest uppercase text-xs md:text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.category}
              </span>
              <div className="flex justify-between items-end gap-4">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {project.title}
                </h3>
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectLightbox
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
