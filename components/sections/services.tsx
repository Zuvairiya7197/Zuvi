"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FileText, Globe2, Lightbulb, Monitor, Play, Smartphone } from "lucide-react";

const leftServices = [
  {
    title: "Brand Identity",
    text: "Memorable brand systems",
    icon: Lightbulb,
    className: "left-[23%] top-[15%]"
  },
  {
    title: "UI/UX Design",
    text: "Interfaces that feel clear",
    icon: Smartphone,
    className: "left-[16%] top-[39%]"
  },
  {
    title: "Web Design",
    text: "Responsive sites that convert",
    icon: Monitor,
    className: "left-[11%] top-[63%]"
  }
];

const rightServices = [
  {
    title: "Social Media",
    text: "Campaign visuals with rhythm",
    icon: Globe2,
    className: "right-[23%] top-[15%]"
  },
  {
    title: "Motion Graphics",
    text: "Launch motion and reveals",
    icon: Play,
    className: "right-[16%] top-[39%]"
  },
  {
    title: "Print Design",
    text: "Tactile editorial systems",
    icon: FileText,
    className: "right-[11%] top-[63%]"
  }
];

function ServiceChip({ item, index }: { item: (typeof leftServices)[number]; index: number }) {
  const Icon = item.icon;
  const isRight = item.className.includes("right");

  return (
    <motion.article
      className={`absolute z-30 hidden h-14 w-[clamp(9.5rem,12vw,11.5rem)] items-center gap-3 rounded-[0.95rem] border border-white/10 bg-[#1d1c1a]/92 p-2 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_56px_rgba(0,0,0,0.34)] backdrop-blur-xl xl:flex ${item.className}`}
      initial={{ opacity: 0, y: 20, x: isRight ? 18 : -18 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.68, delay: 0.14 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, backgroundColor: "rgba(38,36,32,0.96)" }}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.75rem] bg-white/[0.08] text-[#d6b36a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <Icon size={18} strokeWidth={1.7} />
      </span>
      <span className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-[#f5f1e8]">{item.title}</h3>
      </span>
    </motion.article>
  );
}

function DesignImageFrame({
  x,
  y
}: {
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
}) {
  const orbX = useTransform(x, [-0.5, 0.5], [-16, 16]);
  const orbY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      style={{ x: orbX, y: orbY }}
      className="absolute left-1/2 top-[58%] z-20 h-[clamp(16rem,38svh,25rem)] w-[clamp(16rem,38svh,25rem)] -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-full bg-[#070706] shadow-[inset_0_-34px_80px_rgba(0,0,0,0.82),0_34px_110px_rgba(0,0,0,0.68)]">
        <Image
          src="/project-organise-with-kopal.webp"
          alt="Premium graphic design work preview"
          fill
          sizes="(min-width: 1024px) 25rem, 16rem"
          className="object-cover opacity-80 saturate-75"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,transparent,rgba(0,0,0,0.34)_44%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </motion.div>
  );
}

export function ServicesPreview() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.7 });
  const headlineY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  return (
    <section
      id="services"
      className="services-orbit-section section-line relative overflow-hidden px-4 py-[clamp(2.5rem,6svh,4rem)] md:px-8 lg:min-h-[92svh]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="relative z-10 mx-auto min-h-[clamp(40rem,84svh,48rem)] max-w-[1540px]">
        <motion.div
          className="mx-auto flex w-fit items-center rounded-full border border-white/28 bg-black/20 px-6 py-3 text-sm text-[#f5f1e8] backdrop-blur-md"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Designing Brands That Connect
        </motion.div>

        <motion.div
          style={{ y: headlineY }}
          className="mx-auto mt-[clamp(2rem,5svh,3.2rem)] max-w-[780px] text-center"
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.86, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-sans text-[clamp(3rem,5vw,5.2rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#f5f1e8]">
            Strategic Design For
            <span className="block">Brands That Move</span>
            <span className="block bg-gradient-to-b from-[#f4d59b] to-[#a87435] bg-clip-text text-transparent">
              With Purpose
            </span>
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-[clamp(1.5rem,3svh,2rem)] h-[clamp(25rem,54svh,35rem)] max-w-[min(94vw,1280px)]">
          {[...leftServices, ...rightServices].map((item, index) => (
            <ServiceChip key={item.title} item={item} index={index} />
          ))}

          <DesignImageFrame x={smoothX} y={smoothY} />

        </div>

        <div className="mt-8 grid gap-3 lg:hidden">
          {[...leftServices, ...rightServices].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="flex items-center gap-4 rounded-2xl bg-white/[0.075] p-4 backdrop-blur-md">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d6b36a]">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span>
                  <h3 className="text-sm font-semibold text-[#f5f1e8]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#f5f1e8]/48">{item.text}</p>
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
