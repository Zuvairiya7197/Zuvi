"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { homeProjects } from "@/lib/home-projects";

const AUTOPLAY_DELAY = 6200;

function mod(index: number, length: number) {
  return ((index % length) + length) % length;
}

function splitTitle(title: string) {
  const words = title.split(" ");
  if (words.length <= 2) return [title];
  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
}

export function FeaturedProjects() {
  const featuredProjects = homeProjects;
  const initialIndex = useMemo(() => {
    const socialIndex = featuredProjects.findIndex((project) => project.category === "Social Media Designs");
    return socialIndex >= 0 ? socialIndex : 0;
  }, [featuredProjects]);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSectionActive, setIsSectionActive] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);
  const imageShellRef = useRef<HTMLAnchorElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const lightRef = useRef<HTMLDivElement | null>(null);
  const progressRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const wheelLockRef = useRef(false);
  const activeProject = featuredProjects[activeIndex];
  const nextProject = featuredProjects[mod(activeIndex + 1, featuredProjects.length)];
  const titleLines = useMemo(() => splitTitle(activeProject.title), [activeProject.title]);
  const activeProjectHref =
    activeProject.industry === "Graphic Design"
      ? `/work?mode=graphic&category=${encodeURIComponent(activeProject.category)}`
      : activeProject.liveUrl;
  const activeProjectTarget = activeProject.industry === "Graphic Design" ? undefined : "_blank";
  const activeProjectRel = activeProject.industry === "Graphic Design" ? undefined : "noopener noreferrer";

  const changeSlide = useCallback((nextIndex: number) => {
    setActiveIndex((current) => {
      const normalized = mod(nextIndex, featuredProjects.length);
      if (normalized === current) return current;
      const forwardDistance = mod(normalized - current, featuredProjects.length);
      const backwardDistance = mod(current - normalized, featuredProjects.length);
      setDirection(forwardDistance <= backwardDistance ? 1 : -1);
      return normalized;
    });
  }, [featuredProjects.length]);

  const goToNext = useCallback(() => changeSlide(activeIndex + 1), [activeIndex, changeSlide]);
  const goToPrevious = useCallback(() => changeSlide(activeIndex - 1), [activeIndex, changeSlide]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionActive(entry.isIntersecting),
      { rootMargin: "360px 0px 360px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isSectionActive) return;

    const interval = window.setInterval(goToNext, AUTOPLAY_DELAY);
    return () => window.clearInterval(interval);
  }, [goToNext, isSectionActive]);

  useEffect(() => {
    if (!isSectionActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, isSectionActive]);

  useEffect(() => {
    if (!isSectionActive) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false)
      });

      timeline
        .fromTo(
          lightRef.current,
          { xPercent: direction > 0 ? -8 : 8, opacity: 0.45 },
          { xPercent: direction > 0 ? 5 : -5, opacity: 0.78, duration: 1.35 },
          0
        )
        .fromTo(
          numberRef.current,
          { x: direction * 120, opacity: 0, filter: "blur(10px)" },
          { x: 0, opacity: 1, filter: "blur(0px)", duration: 1.05 },
          0.02
        )
        .fromTo(
          imageShellRef.current,
          { x: direction * 150, opacity: 0, scale: 1.08, filter: "blur(12px)" },
          { x: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 },
          0.08
        )
        .fromTo(
          titleRef.current?.querySelectorAll("[data-title-line]") ?? [],
          { y: -92, opacity: 0, filter: "blur(12px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.08, duration: 0.95 },
          0.18
        )
        .fromTo(
          sectionRef.current?.querySelectorAll("[data-project-meta], [data-project-cta]") ?? [],
          { y: 58, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.85 },
          0.36
        )
        .fromTo(
          previewRef.current,
          { x: direction * 70, opacity: 0, filter: "blur(10px)" },
          { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          0.26
        );

      progressRefs.current.forEach((line, index) => {
        if (!line) return;
        timeline.to(
          line,
          {
            scaleX: index === activeIndex ? 1 : 0.24,
            opacity: index === activeIndex ? 1 : 0.42,
            boxShadow: index === activeIndex ? "0 0 20px rgba(214,179,106,0.42)" : "0 0 0 rgba(0,0,0,0)",
            duration: 0.85
          },
          0.1
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex, direction, isSectionActive]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -70) goToNext();
    if (info.offset.x > 70) goToPrevious();
  };

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    if (!isSectionActive) return;
    if (Math.abs(event.deltaY) < 18 || wheelLockRef.current) return;
    wheelLockRef.current = true;
    if (event.deltaY > 0) goToNext();
    if (event.deltaY < 0) goToPrevious();
    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 950);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-line relative overflow-hidden bg-black px-[clamp(1.25rem,4vw,4rem)] py-[clamp(3rem,7svh,4rem)] text-[#f5f1e8] lg:min-h-[116svh] lg:py-[clamp(3rem,6vw,5rem)]"
      onWheel={handleWheel}
    >
      <div ref={lightRef} className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute -left-[18vw] top-0 h-[140vh] w-[70vw] rotate-[-42deg] bg-black/18" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-[1700px] flex-col lg:min-h-[calc(116svh-10rem)]">
        <motion.div
          className="relative flex flex-1 cursor-grab items-center active:cursor-grabbing max-lg:items-start"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
          data-drag-cursor
        >
          <div
            ref={numberRef}
            className="pointer-events-none absolute right-[-0.5rem] top-[-3.5rem] z-10 font-sans text-[clamp(5.75rem,28vw,8rem)] font-black leading-none tracking-[-0.08em] text-[#f5f1e8]/[0.12] md:right-[2vw] md:top-[-4.75rem] md:text-[clamp(8rem,22vw,14rem)] md:text-[#f5f1e8]/[0.1] lg:left-[8vw] lg:right-auto lg:top-[2svh] lg:z-0 lg:text-[clamp(8rem,18vw,19rem)] lg:tracking-[-0.09em] lg:text-[#f5f1e8]/[0.075]"
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-[1360px] items-start gap-8 lg:grid-cols-[1fr_minmax(28rem,48rem)_0.52fr] lg:items-center">
            <div className="relative z-30 min-h-0 lg:-mr-[11rem] lg:min-h-[12rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p data-project-meta className="mb-5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#d6b36a] sm:text-xs">
                    {activeProject.industry}
                  </p>
                  <h2 ref={titleRef} className="max-w-[44rem] font-sans text-[clamp(3rem,15.5vw,4.7rem)] font-black leading-[0.9] tracking-[-0.055em] text-white drop-shadow-[0_14px_24px_rgba(0,0,0,0.55)] md:text-[clamp(3.6rem,8vw,7.9rem)] md:leading-[0.88] md:tracking-[-0.075em]">
                    {titleLines.map((line) => (
                      <span key={line} data-title-line className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                  <Link
                    data-project-cta
                    href={activeProjectHref}
                    target={activeProjectTarget}
                    rel={activeProjectRel}
                    className="group mt-7 inline-flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#f5f1e8] sm:text-xs"
                  >
                    View Project
                    <span className="relative h-px w-14 overflow-hidden bg-white/28 sm:w-20">
                      <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-50 bg-[#d6b36a] transition duration-500 group-hover:scale-x-100" />
                    </span>
                    <ArrowUpRight size={16} className="text-[#d6b36a] transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            <Link
              ref={imageShellRef}
              href={activeProjectHref}
              target={activeProjectTarget}
              rel={activeProjectRel}
              aria-label={`Open ${activeProject.title}`}
              className="relative z-20 block w-full"
            >
              <div className={`relative aspect-[1.55] overflow-hidden border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.52)] transition duration-700 md:shadow-[0_38px_120px_rgba(0,0,0,0.58)] ${isAnimating ? "blur-[1px]" : "blur-0"}`}>
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={activeProject.image}
                    className="absolute inset-0"
                    initial={{ x: direction * 120, opacity: 0, scale: 1.08, filter: "blur(10px)" }}
                    animate={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ x: direction * -80, opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                    transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={activeProject.image}
                      alt={`${activeProject.title} featured project`}
                      fill
                      sizes="(min-width: 1024px) 48rem, 92vw"
                      className="object-cover saturate-[0.82] transition duration-[1400ms] ease-out hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_26%,transparent,rgba(0,0,0,0.24)_45%,rgba(0,0,0,0.76)_100%)]" />
                  </motion.div>
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-x-10 -bottom-8 h-14 rounded-full bg-[#d6b36a]/14 blur-2xl" />
            </Link>

            <div ref={previewRef} className="relative z-10 hidden h-[18rem] overflow-hidden border border-white/8 bg-black/50 shadow-[0_24px_80px_rgba(0,0,0,0.4)] lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={nextProject.slug}
                  className="absolute inset-0"
                  initial={{ x: 80, opacity: 0, filter: "blur(12px)" }}
                  animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ x: -50, opacity: 0, filter: "blur(12px)" }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image src={nextProject.image} alt="" fill sizes="22rem" className="object-cover opacity-58 saturate-50" />
                  <div className="absolute inset-0 bg-black/38" />
                  <p className="absolute bottom-5 left-5 max-w-[12rem] text-sm font-medium text-white/56">{nextProject.title}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="pb-2 pt-5 lg:pt-0">
          <div className="flex items-center justify-center gap-2 sm:justify-start sm:gap-3">
            {featuredProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                aria-label={`Show ${project.title}`}
                onClick={() => changeSlide(index)}
                className="group h-6 w-10 py-2 sm:w-14"
              >
                <span className="block h-px origin-left rounded-full bg-white/22">
                  <span
                    ref={(node) => {
                      progressRefs.current[index] = node;
                    }}
                    className={`block h-px origin-left rounded-full bg-[#d6b36a] ${index === activeIndex ? "scale-x-100" : "scale-x-[0.24]"}`}
                  />
                </span>
              </button>
            ))}
            <Link
              href="/work"
              className="ml-3 hidden text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#f5f1e8]/44 transition hover:text-[#d6b36a] sm:inline-flex"
            >
              View all projects
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
