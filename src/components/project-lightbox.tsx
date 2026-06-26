"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectData = {
  id: string | number;
  title: string;
  category: string;
  image: string; // The hero image
  description?: string;
  gallery: string[]; // All detail images including hero
};

interface ProjectLightboxProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectLightbox({ project, isOpen, onClose }: ProjectLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [project, isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, project]);

  if (!project || !isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 md:p-6 text-white absolute top-0 w-full z-10">
            <div>
              <p className="text-white/60 text-xs md:text-sm tracking-widest uppercase mb-1">
                {project.category}
              </p>
              <h2 className="font-heading text-xl md:text-2xl font-bold">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Image Viewer */}
          <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
            {/* Arrows */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 z-10 p-3 bg-black/50 hover:bg-white hover:text-black rounded-full text-white transition-all backdrop-blur-md"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 z-10 p-3 bg-black/50 hover:bg-white hover:text-black rounded-full text-white transition-all backdrop-blur-md"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-6xl h-full max-h-[70vh] md:max-h-[80vh]"
              >
                <Image
                  src={project.gallery[currentIndex]}
                  alt={`${project.title} - Image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails Strip */}
          {project.gallery.length > 1 && (
            <div className="h-24 md:h-32 bg-black/50 backdrop-blur-md border-t border-white/10 w-full flex items-center justify-center px-4 overflow-x-auto gap-3 py-4">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "relative h-full aspect-video rounded-lg overflow-hidden flex-shrink-0 transition-all border-2",
                    currentIndex === idx
                      ? "border-primary scale-105"
                      : "border-transparent opacity-50 hover:opacity-100"
                  )}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
