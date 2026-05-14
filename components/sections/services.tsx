"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FileText, Globe2, Lightbulb, Monitor, Play, Smartphone } from "lucide-react";

const serviceGoals = [
  {
    title: "Brand Identity",
    pill: "Premium Systems",
    icon: Lightbulb,
    detail: "Logo suites, visual language, and brand rules built for consistency.",
    muted: true
  },
  {
    title: "Website Design",
    pill: "Built to Convert",
    icon: Monitor,
    detail: "Landing pages and portfolio sites with clear journeys and premium polish.",
    muted: true
  }
];

const featuredService = {
  title: "UI/UX Design",
  pill: "Clear Experiences",
  icon: Smartphone,
  metric: "92%",
  current: "Strategy",
  ideal: "Design",
  meals: [
    ["Branding", "Identity Systems"],
    ["Web", "Responsive Website Design"],
    ["Motion", "Launch Visuals & Reels"]
  ],
  images: ["/project-zarrar-palekar.webp", "/project-little-ilmies.webp"]
};

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
  const FeaturedIcon = featuredService.icon;

  return (
    <section
      id="services"
      className="section-line relative overflow-hidden bg-[#030303] px-5 py-[clamp(3.5rem,7svh,5.5rem)] md:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,241,232,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.09) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "linear-gradient(90deg, transparent, black 18%, black 82%, transparent)"
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(214,179,106,0.1),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.98),transparent_40%,rgba(0,0,0,0.9))]" aria-hidden="true" />

      <div className="relative z-10 mx-auto min-h-[clamp(45rem,92svh,58rem)] max-w-[1680px]">
        <motion.div
          className="max-w-[23rem] pt-2 lg:absolute lg:bottom-8 lg:left-0"
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#d6b36a]">Services</p>
          <h2 className="font-sans text-[clamp(2.6rem,5.4vw,4.1rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#f5f1e8]">
            Whatever Your
            <span className="block bg-gradient-to-b from-[#f5f1e8] to-[#d6b36a] bg-clip-text text-transparent">Design Goal</span>
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#f5f1e8]/44">
            Premium visual systems for brands that need clarity, presence, and momentum.
          </p>
        </motion.div>

        <div className="relative mx-auto flex w-full max-w-[760px] flex-col gap-5 pt-[clamp(2rem,6svh,3.5rem)] lg:pt-4">
          {serviceGoals.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="group relative ml-auto min-h-[4.55rem] w-[min(100%,46rem)] overflow-hidden rounded-[2rem] border border-white/7 bg-[#1b1a18]/88 px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#d6b36a]/28 hover:bg-[#211f1b]/94 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_86px_rgba(0,0,0,0.46),0_0_28px_rgba(214,179,106,0.08)]"
                initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.72, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(105,58,37,0.42),rgba(214,179,106,0.09))] opacity-75 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.06] text-[#d6b36a]/70 transition duration-500 group-hover:bg-[#d6b36a]/16 group-hover:text-[#f3d694]">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <h3 className="text-base font-medium text-[#f5f1e8] md:text-lg">{item.title}</h3>
                  </div>
                  <span className="hidden rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-[#f5f1e8] transition duration-500 group-hover:border-[#d6b36a]/38 group-hover:bg-[#d6b36a]/8 sm:inline-flex">
                    • {item.pill}
                  </span>
                </div>
                <p className="relative max-h-0 max-w-md overflow-hidden pl-[3.25rem] text-sm leading-6 text-[#f5f1e8]/0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-3 group-hover:max-h-16 group-hover:text-[#f5f1e8]/52">
                  {item.detail}
                </p>
              </motion.article>
            );
          })}

          <motion.article
            className="group relative mt-1 overflow-hidden rounded-[2rem] border-[9px] border-[#171615] bg-[radial-gradient(circle_at_54%_12%,rgba(248,214,151,0.5),transparent_31%),linear-gradient(135deg,#813821,#c8964a_48%,#321815)] p-[clamp(1.35rem,3.4vw,2.25rem)] shadow-[0_34px_100px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.12)]"
            initial={{ opacity: 0, y: 42, scale: 0.97, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.86, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.012 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_26%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(180deg,transparent,rgba(0,0,0,0.46))]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative grid gap-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f3c56f] text-black/72 shadow-[0_0_20px_rgba(214,179,106,0.2)]">
                    <FeaturedIcon size={18} strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-medium text-white">{featuredService.title}</h3>
                </div>
                <div className="absolute left-1/2 top-5 hidden h-20 w-20 -translate-x-1/2 place-items-center rounded-full border-[5px] border-white/35 text-base font-semibold text-white transition duration-500 group-hover:border-white/55 group-hover:shadow-[0_0_26px_rgba(255,255,255,0.15)] md:grid">
                  {featuredService.metric}
                </div>
                <span className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white">
                  • {featuredService.pill}
                </span>
              </div>

              <div className="grid gap-5 pt-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-white/48">Core focus</p>
                  <p className="mt-1 text-[clamp(2.2rem,5vw,3rem)] font-light leading-none tracking-[-0.04em] text-white">
                    {featuredService.current}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="text-sm text-white/48">Outcome</p>
                  <p className="mt-1 text-[clamp(2.2rem,5vw,3rem)] font-light leading-none tracking-[-0.04em] text-white">
                    {featuredService.ideal}
                  </p>
                </div>
              </div>

              <div className="relative h-8 rounded-full bg-black/14">
                <div className="absolute inset-y-0 left-0 w-[68%] rounded-full bg-gradient-to-r from-[#9c4f2b] via-[#d6b36a] to-[#f5ddb1]" />
                <div className="absolute left-[66%] top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border-[7px] border-[#f2d694] bg-[#fff2d2] shadow-[0_0_32px_rgba(214,179,106,0.5)]" />
              </div>

              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div className="border-l-4 border-[#d6b36a] pl-6">
                  {featuredService.meals.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[5rem_1fr] gap-4 py-1.5 text-sm md:text-base">
                      <span className="text-white/48">{label}</span>
                      <span className="text-white/86">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  {featuredService.images.map((src) => (
                    <div key={src} className="relative h-24 w-24 overflow-hidden rounded-2xl md:h-28 md:w-28">
                      <Image src={src} alt="" fill sizes="112px" className="object-cover saturate-75" />
                      <div className="absolute inset-0 bg-black/12" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="max-h-0 overflow-hidden text-sm leading-6 text-white/0 transition-all duration-500 group-hover:max-h-16 group-hover:text-white/58">
                Hovered service cards reveal the thinking behind each offer: strategy first, then visuals that feel refined across every touchpoint.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export function AboutServicesOrbit() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.7 });
  const headlineY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  return (
    <section
      id="about-services"
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
