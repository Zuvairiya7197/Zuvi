"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";

function mod(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const index = projects.findIndex((project) => project.slug === "zarrar-palekar");
    return index >= 0 ? index : 0;
  });
  const activeProject = projects[activeIndex];
  const previousProject = projects[mod(activeIndex - 1, projects.length)];
  const nextProject = projects[mod(activeIndex + 1, projects.length)];
  const projectLabel = useMemo(() => activeProject.industry.split(" ")[0] ?? "Branding", [activeProject.industry]);

  const goToPrevious = () => setActiveIndex((index) => mod(index - 1, projects.length));
  const goToNext = () => setActiveIndex((index) => mod(index + 1, projects.length));
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 80) goToPrevious();
    if (info.offset.x < -80) goToNext();
  };

  return (
    <section id="projects" className="projects-stage section-line relative overflow-hidden px-4 py-[clamp(3rem,7svh,5rem)] md:px-8">
      <div className="relative z-10 mx-auto min-h-[clamp(44rem,92svh,58rem)] max-w-[1760px] pb-[clamp(12rem,22svh,17rem)]">
        <div className="group/drag relative mx-auto mt-[clamp(2.5rem,7svh,5rem)] h-[clamp(20rem,48svh,30rem)] max-w-[min(94vw,1500px)]">
          <button
            type="button"
            aria-label={`Show ${previousProject.title}`}
            onClick={goToPrevious}
            className="group absolute left-[1%] top-[16%] hidden h-[clamp(12rem,31svh,20rem)] w-[clamp(22rem,31vw,34rem)] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] opacity-60 blur-[1px] transition duration-500 hover:opacity-80 hover:blur-0 lg:block"
          >
            <Image src={previousProject.image} alt="" fill sizes="34vw" className="object-cover opacity-55 saturate-75 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/62 backdrop-blur-[2px]" />
            <p className="absolute bottom-7 left-8 text-lg font-medium text-white/45">{previousProject.title}</p>
          </button>

          <button
            type="button"
            aria-label={`Show ${nextProject.title}`}
            onClick={goToNext}
            className="group absolute right-[1%] top-[16%] hidden h-[clamp(12rem,31svh,20rem)] w-[clamp(22rem,31vw,34rem)] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] opacity-60 blur-[1px] transition duration-500 hover:opacity-80 hover:blur-0 lg:block"
          >
            <Image src={nextProject.image} alt="" fill sizes="34vw" className="object-cover opacity-55 saturate-75 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/62 backdrop-blur-[2px]" />
            <p className="absolute bottom-7 left-8 text-lg font-medium text-white/45">{nextProject.title}</p>
          </button>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.slug}
              className="absolute left-1/2 top-0 z-20 w-[min(92vw,760px)] -translate-x-1/2 cursor-grab overflow-hidden rounded-[1.7rem] border-[10px] border-[#1f1d1a] bg-[#080807] shadow-[0_34px_120px_rgba(0,0,0,0.72)] active:cursor-grabbing md:border-[12px] xl:w-[min(54vw,880px)]"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={handleDragEnd}
              data-drag-cursor
              initial={{ opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, scale: 0.98, filter: "blur(8px)" }}
              transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[1.8] min-h-[clamp(17rem,38svh,26rem)]">
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} featured design project`}
                  fill
                  priority
                  sizes="(min-width: 1280px) 54vw, 92vw"
                  className="object-cover opacity-82 saturate-75"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,transparent,rgba(0,0,0,0.34)_46%,rgba(0,0,0,0.9)_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/44 to-black/12" />

                <div className="absolute bottom-[clamp(1.3rem,4svh,3.2rem)] left-[clamp(1.3rem,4vw,3.2rem)] right-[clamp(1.3rem,4vw,3.2rem)] max-w-[28rem]">
                  <p className="mb-2 text-[clamp(0.72rem,1vw,0.85rem)] font-semibold uppercase tracking-[0.22em] text-[#d6b36a]">
                    {projectLabel}
                  </p>
                  <h2 className="font-sans text-[clamp(2.5rem,5vw,4.6rem)] font-medium leading-none tracking-[-0.04em] text-white">
                    {activeProject.title}
                  </h2>
                  <p className="mt-3 line-clamp-2 max-w-sm text-[clamp(0.9rem,1.3vw,1.1rem)] leading-7 text-white/68">
                    {activeProject.solution}
                  </p>
                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="mt-[clamp(1rem,2.5svh,1.5rem)] inline-flex items-center gap-3 rounded-full bg-[#8c4f36]/70 py-2 pl-2 pr-6 text-sm font-medium text-[#f5f1e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition hover:bg-[#d6b36a] hover:text-black md:text-base"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#f7d79a] to-[#a67235] text-black">
                      <ArrowRight size={19} />
                    </span>
                    View Project
                  </Link>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

        </div>

        <div className="absolute inset-x-0 bottom-[clamp(5rem,12svh,8rem)] z-30 mx-auto max-w-[960px] px-2 text-center">
          <h2 className="font-sans text-[clamp(3rem,5vw,5.2rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#f5f1e8] drop-shadow-[0_12px_32px_rgba(0,0,0,0.72)]">
            Designs That Connect,
            <span className="block bg-gradient-to-b from-[#f4d79d] via-[#d6b36a] to-[#8c6a3b] bg-clip-text text-transparent">Stories That Last.</span>
          </h2>
          <div className="mt-6 flex justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                aria-label={`Show ${project.title}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#d6b36a]" : "w-2 bg-white/22 hover:bg-white/45"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
