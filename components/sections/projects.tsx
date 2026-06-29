"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

const TRANSITION: Transition = {
  type: "spring",
  bounce: 0.14,
  duration: 0.9,
};

const featuredItems = [
  { src: "/mz-logo-01.webp",                        title: "Logo Design",              category: "Logo Design" },
  { src: "/mz-flyer-jewellery-workshop.webp",        title: "Jewellery Workshop Flyer", category: "Flyer Design" },
  { src: "/sm classes post.webp",                    title: "SM Classes Post",          category: "Social Media" },
  { src: "/mz-business-card-01.jpg",                 title: "Business Card",            category: "Print Identity" },
  { src: "/project-graphic-educational-flyer.webp",  title: "Educational Flyer",        category: "Flyer Design" },
  { src: "/6th post.webp",                           title: "Social Post",              category: "Social Media" },
  { src: "/mz-customised-print-01.jpg",              title: "Custom Print",             category: "Print Design" },
  { src: "/mz-logo-04.webp",                         title: "Logo Design",              category: "Logo Design" },
  { src: "/mz-flyer-real-estate.webp",               title: "Real Estate Flyer",        category: "Flyer Design" },
  { src: "/post 12.webp",                            title: "Social Post",              category: "Social Media" },
];

const SLIDE_SIZE = 300;
const ROTATION_STEP = 28;
const VERTICAL_STEP = 140;
const INACTIVE_SCALE = 0.58;

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = featuredItems.length - 1;

  const selectSlide = useCallback((next: number) => {
    setActiveIndex(clamp(next, 0, maxIndex));
  }, [maxIndex]);

  const active = featuredItems[activeIndex];

  return (
    <section
      id="projects"
      className="section-line relative h-svh overflow-hidden bg-black text-[#f5f1e8]"
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

      {/* Header row — absolutely positioned top */}
      <div className="absolute inset-x-0 top-0 z-20 flex flex-col items-center px-5 py-6 text-center md:px-10">
        <p className="mb-1 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#d6b36a]">
          Featured Work
        </p>
        <h2 className="font-sans text-[clamp(1.6rem,2.8vw,2.5rem)] font-medium leading-none tracking-[-0.045em] text-[#f5f1e8]">
          Selected
          <span className="ml-2 bg-linear-to-b from-[#f5f1e8] to-[#d6b36a] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <Link
          href="/work"
          className="mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#d6b36a]/70 transition hover:text-[#d6b36a]"
        >
          View all <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Full-screen carousel */}
      <div
        className="relative h-svh w-full overflow-hidden"
        role="region"
        aria-label="Projects carousel"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); selectSlide(activeIndex - 1); }
          if (e.key === "ArrowRight") { e.preventDefault(); selectSlide(activeIndex + 1); }
        }}
      >
        {/* Slides track */}
        <motion.div
          className="absolute left-1/2 top-[38%] flex w-fit"
          animate={{ x: -(activeIndex * SLIDE_SIZE + SLIDE_SIZE / 2) }}
          transition={TRANSITION}
        >
          {featuredItems.map((item, index) => {
            const isActive = activeIndex === index;
            const distance = index - activeIndex;

            return (
              <motion.div
                key={item.src}
                className="flex shrink-0 flex-col items-center gap-3 will-change-transform"
                style={{ width: SLIDE_SIZE }}
                animate={{
                  rotate: distance * ROTATION_STEP,
                  scale: isActive ? 1 : INACTIVE_SCALE,
                  y: distance * VERTICAL_STEP,
                }}
                transition={TRANSITION}
              >
                {/* Label above */}
                <motion.p
                  className="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#d6b36a]"
                  animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.7 }}
                  transition={{ duration: 0.25 }}
                >
                  {item.category}
                </motion.p>

                <button
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-current={isActive ? "true" : undefined}
                  className="aspect-square w-full cursor-pointer"
                  onClick={() => selectSlide(index)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="h-full w-full select-none rounded-2xl object-cover shadow-[0_32px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
                  />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Active title overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pb-20 pt-16 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={active.title + activeIndex}
              className="text-xl font-semibold tracking-[-0.02em] text-[#f5f1e8]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {active.title}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            disabled={activeIndex === 0}
            onClick={() => selectSlide(activeIndex - 1)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-black/50 text-[#f5f1e8] backdrop-blur-sm transition hover:border-[#d6b36a]/40 hover:bg-[#d6b36a]/12 disabled:cursor-not-allowed disabled:opacity-25"
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
                onClick={() => selectSlide(index)}
                className={`h-1.5 rounded-full bg-[#d6b36a] transition-all duration-300 ${
                  activeIndex === index ? "w-6 opacity-100" : "w-1.5 opacity-25"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next"
            disabled={activeIndex === maxIndex}
            onClick={() => selectSlide(activeIndex + 1)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-black/50 text-[#f5f1e8] backdrop-blur-sm transition hover:border-[#d6b36a]/40 hover:bg-[#d6b36a]/12 disabled:cursor-not-allowed disabled:opacity-25"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
