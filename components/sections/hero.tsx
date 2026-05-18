"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";

const traits = ["Strategic", "Creative", "Impactful"];

export function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, {
    stiffness: 80,
    damping: 22,
    mass: 0.6,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 80,
    damping: 22,
    mass: 0.6,
  });
  const headlineX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const headlineY = useTransform(smoothY, [-0.5, 0.5], [-7, 7]);

  return (
    <section
      id="top"
      className="story-hero relative min-h-[100svh] overflow-hidden px-4 pb-5 pt-[clamp(5.9rem,15svh,7.5rem)] md:px-6 md:pt-[clamp(6.25rem,13svh,7.5rem)] xl:px-8 2xl:pt-32"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-[1672/941] w-[min(160vw,34rem)] -translate-x-1/2 md:w-[min(175vw,76rem)] xl:w-[min(160vw,58rem)]">
        <Image
          src="/Hero Image.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 58rem, (min-width: 768px) 76rem, 160vw"
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 mx-auto min-h-[calc(100svh-6.25rem)] max-w-[1680px] max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-between md:min-h-[calc(100svh-6.75rem)] 2xl:min-h-[calc(100svh-9rem)] 2xl:max-w-[1820px]">
        <motion.div
          style={{ x: headlineX, y: headlineY }}
          className="mx-auto max-w-[760px] pt-8 text-center sm:pt-10 md:pt-12 xl:pt-6 2xl:max-w-[940px]"
          initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mx-auto flex max-w-[92vw] items-center justify-center gap-2 text-[0.56rem] font-black uppercase tracking-[0.18em] text-[#d6b36a] sm:gap-3 sm:text-[0.68rem] sm:tracking-[0.28em] md:text-xs md:tracking-[0.34em] 2xl:text-sm">
            Design is thinking made visual. <Sparkle size={18} />
          </p>
          <h1 className="mt-4 font-sans text-[clamp(2.8rem,11.5vw,4.2rem)] font-black uppercase leading-[0.92] tracking-normal text-[#f5f1e8] sm:text-[clamp(3.4rem,10vw,5.25rem)] md:text-[clamp(4.35rem,8vw,6.15rem)] xl:text-[clamp(3.2rem,5.7vw,6.8rem)] 2xl:mt-6 2xl:text-[clamp(4rem,6.9vw,8.4rem)] 2xl:leading-[0.96]">
            Designs that
            <span className="block">
              tell{" "}
              <span className="bg-gradient-to-b from-[#f8ddb0] to-[#9a6a30] bg-clip-text text-transparent">
                stories.
              </span>
            </span>
          </h1>
          <Link
            href="/contact"
            className="mx-auto mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#f7d79a] to-[#a67235] px-6 py-3 text-sm font-bold text-black shadow-[0_18px_55px_rgba(0,0,0,0.32)] sm:px-7 xl:hidden"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="absolute bottom-[clamp(1.75rem,5svh,3.5rem)] left-0 z-40 hidden max-w-[18rem] flex-col items-start xl:flex 2xl:max-w-[20rem]">
          <div className="mb-5 flex max-w-[15rem] flex-wrap gap-2.5">
            {traits.map((trait, index) => (
              <motion.span
                key={trait}
                className="rounded-full border border-white/16 bg-black px-4 py-2 text-center text-sm font-medium leading-none text-[#f5f1e8] backdrop-blur-sm"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.55 + index * 0.08 }}
              >
                {trait}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="max-w-[17rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.9 }}
          >
            <h2 className="text-[clamp(1.45rem,1.9vw,1.9rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#f5f1e8]">
              From Concept to Connection.
            </h2>
            <p className="mt-3 text-sm leading-5 text-[#f5f1e8]/46">
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
            className="inline-flex min-w-[12.5rem] items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-[#f7d79a] to-[#a67235] px-6 py-4 text-base font-bold text-black shadow-[0_22px_70px_rgba(0,0,0,0.32)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,0,0,0.42)] 2xl:min-w-[15rem] 2xl:gap-5 2xl:px-8 2xl:py-5 2xl:text-lg"
          >
            <ArrowUpRight size={30} />
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
