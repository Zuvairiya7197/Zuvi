"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CylinderCarousel } from "@/components/ui/cylinder-carousel";

const featuredItems = [
  { src: "/project-zarrar-palekar.webp",             title: "Zarrar Palekar",           category: "Website Design" },
  { src: "/project-sm-classes.webp",                 title: "SM Classes",               category: "Website Design" },
  { src: "/project-little-ilmies.webp",              title: "Little Ilmies",            category: "Website Design" },
  { src: "/project-organise-with-kopal.webp",        title: "Organise With Kopal",      category: "Website Design" },
  { src: "/WBYB website.webp",                       title: "WBYB",                     category: "Website Design" },
  { src: "/mz-logo-06.jpg",                          title: "Logo Design",              category: "Logo Design" },
  { src: "/SM Classes Score card flyer 4.webp",      title: "SM Classes Score Card",    category: "Flyer Design" },
  { src: "/mz-flyer-real-estate.webp",               title: "Real Estate Flyer",        category: "Flyer Design" },
  { src: "/mz-flyer-mhj.jpeg",                       title: "MHJ Flyer",                category: "Flyer Design" },
  { src: "/mz-flyer-sm-classes-4.webp",              title: "SM Classes Poster",        category: "Flyer Design" },
  { src: "/mz-business-card-02.webp",                title: "Business Card",            category: "Print Identity" },
  { src: "/mz-customised-print-01.jpg",              title: "Custom Print",             category: "Print Design" },
  { src: "/mz-customised-print-03.jpg",              title: "Custom Print",             category: "Print Design" },
  { src: "/mz-customised-print-17.jpg",              title: "Custom Print",             category: "Print Design" },
  { src: "/mz-customised-print-19.jpg",              title: "Custom Print",             category: "Print Design" },
  { src: "/mz-customised-print-22.jpg",              title: "Custom Print",             category: "Print Design" },
  { src: "/mz-customised-print-24.jpg",              title: "Custom Print",             category: "Print Design" },
];

const AUTO_ROTATE_INTERVAL = 2600;
const RESUME_DELAY = 4000;

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectSlide = useCallback((next: number) => {
    setActiveIndex(((next % featuredItems.length) + featuredItems.length) % featuredItems.length);
  }, []);

  const pauseThenResume = useCallback(() => {
    setPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  }, []);

  const handleSelectSlide = useCallback((next: number) => {
    selectSlide(next);
    pauseThenResume();
  }, [selectSlide, pauseThenResume]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((index) => (index + 1) % featuredItems.length);
    }, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section
      id="projects"
      className="section-line relative overflow-hidden bg-black py-[clamp(2.5rem,6svh,5rem)] text-[#f5f1e8]"
    >
      {/* subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,241,232,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      {/* Header — in normal flow, tight bottom margin */}
      <div className="relative z-20 flex flex-col items-center pb-4 text-center">
        <p className="mb-1 hidden text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#d6b36a] sm:block">
          Featured Work
        </p>
        <h2 className="font-sans text-[clamp(1.4rem,5vw,2.5rem)] font-medium leading-none tracking-[-0.045em] text-[#f5f1e8]">
          Selected
          <span className="ml-2 bg-linear-to-b from-[#f5f1e8] to-[#d6b36a] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* 3D cylinder carousel */}
      <div
        className="relative w-full"
        role="region"
        aria-label="Projects carousel"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); handleSelectSlide(activeIndex - 1); }
          if (e.key === "ArrowRight") { e.preventDefault(); handleSelectSlide(activeIndex + 1); }
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={pauseThenResume}
      >
        <CylinderCarousel
          images={featuredItems.map((item) => ({ src: item.src, alt: item.title }))}
          activeIndex={activeIndex}
          onActiveIndexChange={handleSelectSlide}
          cardWidth={220}
          className="min-h-[20rem] sm:min-h-[26rem]"
        />
        <p className="pointer-events-none mt-2 text-center text-sm font-semibold tracking-[-0.02em] text-[#f5f1e8]">
          {featuredItems[activeIndex]?.title}
        </p>
      </div>

      {/* Controls — outside carousel so dots never overlap the image; hidden on mobile in favor of swipe */}
      <div className="hidden items-center justify-center gap-3 pb-2 pt-4 sm:flex">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => handleSelectSlide(activeIndex - 1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-black/50 text-[#f5f1e8] backdrop-blur-sm transition hover:border-[#d6b36a]/40 hover:bg-[#d6b36a]/12"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => handleSelectSlide(index)}
              className={`h-1.5 rounded-full bg-[#d6b36a] transition-all duration-300 ${
                activeIndex === index ? "w-6 opacity-100" : "w-1.5 opacity-25"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => handleSelectSlide(activeIndex + 1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-black/50 text-[#f5f1e8] backdrop-blur-sm transition hover:border-[#d6b36a]/40 hover:bg-[#d6b36a]/12"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* View all — below carousel */}
      <div className="flex justify-center pt-3">
        <Link
          href="/work"
          className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#d6b36a]/70 transition hover:text-[#d6b36a]"
        >
          View all <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
