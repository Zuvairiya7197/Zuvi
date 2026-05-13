"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown, Send, Users } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";

const HeroScene = dynamic(() => import("@/components/three/hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[2rem] bg-white/[0.03]" />
});

const words = ["Crafting", "Visual", "Experiences", "That", "Leave", "a", "Mark."];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden px-6 pb-6 pt-24 md:px-8 md:pt-24">
      <aside className="absolute left-8 top-32 hidden h-[320px] flex-col items-center justify-between border-l border-[#d5ad6f]/18 pl-6 text-neutral-300 xl:flex">
        <div className="grid gap-5 text-sm font-semibold">
          <a href="https://www.behance.net" aria-label="Behance" className="transition hover:text-[#d5ad6f]">Bē</a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="transition hover:text-[#d5ad6f]"><Send size={16} /></a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="transition hover:text-[#d5ad6f]"><Users size={16} /></a>
        </div>
        <a href="#trust" className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.18em]">
          Scroll
          <ChevronDown size={18} className="rounded-full border border-white/40 p-0.5" />
        </a>
      </aside>
      <div className="mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-7xl items-center gap-6 lg:grid-cols-[0.84fr_1.16fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d5ad6f]"
          >
            Graphic Designer
          </motion.p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.94] text-white md:text-6xl xl:text-[clamp(4.5rem,6vw,5.45rem)]">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className={word === "Mark." ? "mr-3 inline-block text-[#d5ad6f]" : "mr-3 inline-block"}
                initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.72, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="mt-5 max-w-lg text-base leading-7 text-neutral-300"
          >
            I help brands tell their story through impactful design and digital experiences that connect, engage and
            inspire.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
            className="mt-7 flex flex-wrap gap-4"
          >
            <MagneticButton href="/work">View my work</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              Book a call
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[340px] min-h-[300px] md:h-[420px] lg:h-[min(58svh,560px)]"
        >
          <div className="absolute inset-x-10 bottom-12 h-40 rounded-full bg-[#d5ad6f]/12 blur-3xl" />
          <HeroScene />
        </motion.div>
      </div>
      <a
        href="#trust"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.28em] text-neutral-400"
      >
        Scroll
        <ChevronDown size={16} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
