"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/lib/data";

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
  const initialIndex = useMemo(() => {
    const index = projects.findIndex((project) => project.slug === "zarrar-palekar");
    return index >= 0 ? index : 0;
  }, []);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);
  const imageShellRef = useRef<HTMLAnchorElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const lightRef = useRef<HTMLDivElement | null>(null);
  const progressRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const wheelLockRef = useRef(false);
  const activeProject = projects[activeIndex];
  const nextProject = projects[mod(activeIndex + 1, projects.length)];
  const titleLines = splitTitle(activeProject.title);
  const activeProjectHref =
    activeProject.industry === "Graphic Design"
      ? `/work?mode=graphic&category=${encodeURIComponent(activeProject.category)}`
      : activeProject.liveUrl;
  const activeProjectTarget = activeProject.industry === "Graphic Design" ? undefined : "_blank";
  const activeProjectRel = activeProject.industry === "Graphic Design" ? undefined : "noopener noreferrer";

  const changeSlide = useCallback((nextIndex: number) => {
    setActiveIndex((current) => {
      const normalized = mod(nextIndex, projects.length);
      if (normalized === current) return current;
      const forwardDistance = mod(normalized - current, projects.length);
      const backwardDistance = mod(current - normalized, projects.length);
      setDirection(forwardDistance <= backwardDistance ? 1 : -1);
      return normalized;
    });
  }, []);

  const goToNext = useCallback(() => changeSlide(activeIndex + 1), [activeIndex, changeSlide]);
  const goToPrevious = useCallback(() => changeSlide(activeIndex - 1), [activeIndex, changeSlide]);

  useEffect(() => {
    const interval = window.setInterval(goToNext, AUTOPLAY_DELAY);
    return () => window.clearInterval(interval);
  }, [goToNext]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  useEffect(() => {
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
  }, [activeIndex, direction]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -70) goToNext();
    if (info.offset.x > 70) goToPrevious();
  };

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
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
      className="section-line relative min-h-[116svh] overflow-hidden bg-[#111111] px-[clamp(1.5rem,4vw,4rem)] py-[clamp(3rem,6vw,5rem)] text-[#f5f1e8]"
      onWheel={handleWheel}
    >
      <div ref={lightRef} className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(214,179,106,0.11),transparent_30%),radial-gradient(circle_at_78%_64%,rgba(140,106,59,0.13),transparent_36%),linear-gradient(135deg,#151418_0%,#111111_42%,#070707_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute -left-[18vw] top-0 h-[140vh] w-[70vw] rotate-[-42deg] bg-black/18" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(116svh-10rem)] max-w-[1700px] flex-col">
        <motion.div
          className="relative flex flex-1 cursor-grab items-center active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
          data-drag-cursor
        >
          <div
            ref={numberRef}
            className="pointer-events-none absolute left-[8vw] top-[2svh] z-0 font-sans text-[clamp(8rem,18vw,19rem)] font-black leading-none tracking-[-0.09em] text-[#f5f1e8]/[0.075]"
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-[1360px] items-center gap-8 lg:grid-cols-[1fr_minmax(28rem,48rem)_0.52fr]">
            <div className="relative z-30 min-h-[12rem] lg:-mr-[11rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p data-project-meta className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-[#d6b36a]">
                    {activeProject.industry}
                  </p>
                  <h2 ref={titleRef} className="max-w-[44rem] font-sans text-[clamp(3.6rem,8vw,7.9rem)] font-black leading-[0.88] tracking-[-0.075em] text-white drop-shadow-[0_14px_24px_rgba(0,0,0,0.55)]">
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
                    className="group mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#f5f1e8]"
                  >
                    View Project
                    <span className="relative h-px w-20 overflow-hidden bg-white/28">
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
              className="relative z-20 block"
            >
              <div className={`relative aspect-[1.55] overflow-hidden border border-white/10 bg-black shadow-[0_38px_120px_rgba(0,0,0,0.58)] transition duration-700 ${isAnimating ? "blur-[1px]" : "blur-0"}`}>
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
                      priority
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

        <div className="pb-2">
          <div className="flex items-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                aria-label={`Show ${project.title}`}
                onClick={() => changeSlide(index)}
                className="group h-6 w-14 py-2"
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
