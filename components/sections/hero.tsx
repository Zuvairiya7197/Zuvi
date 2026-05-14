"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";

const traits = ["Strategic", "Creative", "Impactful"];

export function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 22, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 22, mass: 0.6 });
  const headlineX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const headlineY = useTransform(smoothY, [-0.5, 0.5], [-7, 7]);

  return (
    <section
      id="top"
      className="story-hero relative min-h-[100svh] overflow-hidden px-4 pb-5 pt-[clamp(6.25rem,13svh,7.5rem)] md:px-6 xl:px-8 2xl:pt-32"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[43%] h-[30rem] w-[68rem] -translate-x-1/2 rounded-full bg-[#d6b36a]/8 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto min-h-[calc(100svh-6.75rem)] max-w-[1680px] max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-between 2xl:min-h-[calc(100svh-9rem)] 2xl:max-w-[1820px]">
        <motion.div
          style={{ x: headlineX, y: headlineY }}
          className="mx-auto max-w-[760px] text-center 2xl:max-w-[940px]"
          initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mx-auto flex max-w-[92vw] items-center justify-center gap-3 text-[0.62rem] font-black uppercase tracking-[0.26em] text-[#d6b36a] md:text-xs md:tracking-[0.44em] 2xl:text-sm">
            Design is thinking made visual. <Sparkle size={18} />
          </p>
          <h1 className="mt-4 font-sans text-[clamp(3rem,14vw,8rem)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#f5f1e8] md:text-[clamp(4rem,9vw,8rem)] xl:text-[clamp(3.2rem,5.7vw,6.8rem)] 2xl:mt-6 2xl:text-[clamp(4rem,6.9vw,8.4rem)] 2xl:leading-[0.96]">
            Designs that
            <span className="block">
              tell <span className="bg-gradient-to-b from-[#f8ddb0] to-[#9a6a30] bg-clip-text text-transparent">stories.</span>
            </span>
          </h1>
          <Link
            href="/contact"
            className="mx-auto mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#f7d79a] to-[#a67235] px-5 py-3 text-sm font-bold text-black shadow-[0_18px_55px_rgba(214,179,106,0.22)] xl:hidden"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="absolute bottom-0 left-0 z-40 hidden max-w-[24rem] items-end gap-6 xl:flex 2xl:max-w-[28rem]">
          <div className="grid w-28 shrink-0 gap-2.5 2xl:w-32 2xl:gap-3">
            {traits.map((trait, index) => (
              <motion.span
                key={trait}
                className="rounded-full border border-[#d6b36a]/35 bg-black/18 px-4 py-2 text-center text-sm text-[#f5f1e8] backdrop-blur-sm 2xl:px-6 2xl:py-2.5 2xl:text-base"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.55 + index * 0.08 }}
              >
                {trait}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="max-w-[15rem] pb-1 2xl:max-w-[19rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.9 }}
          >
            <h2 className="text-[clamp(1.5rem,2vw,2rem)] font-bold leading-tight text-[#f5f1e8]">From Concept to Connection.</h2>
            <p className="mt-3 text-sm leading-6 text-[#f5f1e8]/50 2xl:mt-4 2xl:text-lg 2xl:leading-8">
              I create visual experiences that inspire, engage & elevate brands.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 right-0 z-40 hidden xl:block"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <Link
            href="/contact"
            className="inline-flex min-w-[12.5rem] items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-[#f7d79a] to-[#a67235] px-6 py-4 text-base font-bold text-black shadow-[0_22px_70px_rgba(214,179,106,0.22)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(214,179,106,0.34)] 2xl:min-w-[15rem] 2xl:gap-5 2xl:px-8 2xl:py-5 2xl:text-lg"
          >
            <ArrowUpRight size={30} />
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
