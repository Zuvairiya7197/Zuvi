"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FileText, Globe2, Lightbulb, Monitor, Play, Smartphone } from "lucide-react";

const leftServices = [
  {
    title: "Brand Identity",
    text: "Memorable brand systems",
    icon: Lightbulb,
    className: "left-[12%] top-[22%]"
  },
  {
    title: "UI/UX Design",
    text: "Interfaces that feel clear",
    icon: Smartphone,
    className: "left-[6%] top-[42%]"
  },
  {
    title: "Web Design",
    text: "Responsive sites that convert",
    icon: Monitor,
    className: "left-[11%] top-[62%]"
  }
];

const rightServices = [
  {
    title: "Social Media",
    text: "Campaign visuals with rhythm",
    icon: Globe2,
    className: "right-[12%] top-[22%]"
  },
  {
    title: "Motion Graphics",
    text: "Launch motion and reveals",
    icon: Play,
    className: "right-[6%] top-[42%]"
  },
  {
    title: "Print Design",
    text: "Tactile editorial systems",
    icon: FileText,
    className: "right-[11%] top-[62%]"
  }
];

function ServiceChip({ item, index }: { item: (typeof leftServices)[number]; index: number }) {
  const Icon = item.icon;
  const isRight = item.className.includes("right");

  return (
    <motion.article
      className={`absolute z-30 hidden w-[clamp(11rem,15vw,14rem)] items-center gap-3 rounded-[1.05rem] bg-white/[0.095] p-2.5 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md xl:flex ${item.className}`}
      initial={{ opacity: 0, y: 20, x: isRight ? 18 : -18 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.68, delay: 0.14 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.13)" }}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.8rem] bg-white/10 text-[#d6b36a]">
        <Icon size={20} strokeWidth={1.7} />
      </span>
      <span className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-[#f5f1e8]">{item.title}</h3>
        <p className="mt-0.5 truncate text-xs text-[#f5f1e8]/42">{item.text}</p>
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
      <div className="absolute inset-0 overflow-hidden rounded-full border border-[#d6b36a]/28 bg-[#070706] shadow-[inset_0_4px_0_rgba(255,255,255,0.1),inset_0_-34px_80px_rgba(0,0,0,0.82),0_34px_110px_rgba(0,0,0,0.68),0_0_70px_rgba(214,179,106,0.12)]">
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
      <div className="absolute inset-[-12%] -z-10 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(214,179,106,0.22),rgba(214,179,106,0.07)_42%,transparent_70%)] blur-2xl" />
      <div className="absolute inset-x-[18%] bottom-[-8%] h-10 rounded-[50%] bg-[#d6b36a]/14 blur-2xl" />
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
          <div className="absolute left-1/2 top-[52%] h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-t-full border border-white/10 border-b-transparent" />
          <div className="absolute left-1/2 top-[55%] h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-t-full border border-[#d6b36a]/16 border-b-transparent" />
          <motion.div
            className="absolute left-1/2 top-[58%] z-10 h-[clamp(18rem,43svh,28rem)] w-[clamp(18rem,43svh,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6b36a]/28 shadow-[0_0_70px_rgba(214,179,106,0.08),inset_0_0_42px_rgba(214,179,106,0.045)]"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute left-1/2 top-[58%] z-10 h-[clamp(14rem,34svh,22rem)] w-[clamp(14rem,34svh,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-[58%] z-10 h-[clamp(21rem,50svh,32rem)] w-[clamp(21rem,50svh,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

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
