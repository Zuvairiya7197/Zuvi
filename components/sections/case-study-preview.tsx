"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const featured = projects[0];

export function CaseStudyPreview() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const cameraShift = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [-7, 4]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [8, -5]);
  const spread = useTransform(scrollYProgress, [0, 0.55, 1], [0, 48, 86]);
  const reverseSpread = useTransform(spread, (value) => -value * 0.72);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.34, 0.82], [0, 1, 0.22]);
  const floatingPanelY = useTransform(scrollYProgress, [0, 1], [34, -26]);

  return (
    <section ref={ref} className="section-line relative overflow-hidden px-5 py-[clamp(3rem,8svh,6rem)] md:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-[clamp(2rem,5vw,3rem)] lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d6b36a]">Interactive case study</p>
          <motion.h2
            style={{ opacity: titleOpacity }}
            className="mt-5 font-display text-[clamp(2.75rem,10vw,4.5rem)] font-bold uppercase leading-[0.86] text-[#f5f1e8] md:leading-[0.82]"
          >
            Systems unfold like architecture.
          </motion.h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-300">
            Scroll through a premium project narrative where identity, UI, motion, and launch assets open layer by layer.
          </p>
          <a
            href={`/work/${featured.slug}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d6b36a]/35 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black"
          >
            Open full story <ArrowUpRight size={15} />
          </a>
        </div>

        <motion.div style={{ y: cameraShift }} className="relative min-h-[clamp(24rem,58svh,35rem)] max-sm:overflow-hidden">
          <motion.div
            style={{ rotate: rotateA, x: spread }}
            className="absolute right-0 top-8 w-[70%] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#f5f1e8] p-2 shadow-[0_36px_110px_rgba(0,0,0,0.42)] md:right-2 md:top-12 md:rounded-[2rem] md:p-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem]">
              <Image src={featured.image} alt="Aurelia Labs premium identity case study preview" fill sizes="(min-width: 1024px) 42vw, 92vw" className="object-cover" />
            </div>
          </motion.div>
          <motion.div
            style={{ rotate: rotateB, x: reverseSpread }}
            className="absolute left-0 top-24 w-[62%] overflow-hidden rounded-[1.25rem] border border-[#d6b36a]/20 bg-[#111] p-4 shadow-[0_36px_110px_rgba(0,0,0,0.5)] md:left-2 md:top-28 md:rounded-[2rem]"
          >
            <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#d6b36a]">Result</p>
            <p className="mt-3 font-display text-[clamp(2.25rem,9vw,3rem)] font-bold leading-none text-[#f5f1e8]">2.8x</p>
            <p className="mt-3 text-xs leading-6 text-neutral-300 md:text-sm md:leading-7">{featured.results}</p>
          </motion.div>
          <motion.div
            style={{ y: floatingPanelY }}
            className="absolute bottom-6 left-[7%] right-[4%] rounded-[1.25rem] border border-white/10 bg-black/70 p-4 backdrop-blur-xl md:bottom-8 md:left-[18%] md:right-[8%] md:rounded-[2rem] md:p-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6b36a]">{featured.industry}</p>
            <h3 className="mt-3 font-display text-[clamp(1.8rem,6vw,2.25rem)] font-bold text-[#f5f1e8]">{featured.title}</h3>
            <p className="mt-3 line-clamp-3 text-xs leading-6 text-neutral-300 md:text-sm md:leading-7">{featured.solution}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
