"use client";

import Image from "next/image";
import { AnimatePresence, LazyMotion, domAnimation, m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import {
  CreditCard,
  FileText,
  Globe2,
  Lightbulb,
  Megaphone,
  Monitor,
  PenTool,
  Play,
  ScrollText,
  Smartphone,
  Tags,
} from "lucide-react";

const serviceCards = [
  {
    title: "Logo Design",
    pill: "Brand Marks",
    icon: PenTool,
    metric: "94%",
    current: "Concept",
    ideal: "Logo",
    detail:
      "Distinct logo systems built for recall, clarity, and premium brand presence.",
    meals: [
      ["Sketch", "Logo Concepts"],
      ["Refine", "Color & Type"],
      ["Deliver", "Final Logo Files"],
    ],
    images: [
      "/ZP-Logo.webp",
      "/wbyblogo.webp",
    ],
    muted: true,
  },
  {
    title: "Poster/Flyer Design",
    pill: "Promotional Layouts",
    icon: ScrollText,
    metric: "89%",
    current: "Message",
    ideal: "Flyer",
    detail:
      "Posters and flyers with clear hierarchy, strong contrast, and quick communication.",
    meals: [
      ["Plan", "Offer Structure"],
      ["Design", "Poster/Flyer Visual"],
      ["Export", "Print & Digital File"],
    ],
    images: [
      "/project-graphic-educational-flyer.webp",
      "/project-graphic-home-tuition.webp",
    ],
    muted: true,
  },
  {
    title: "Social Media Post Design",
    pill: "Content Visuals",
    icon: Smartphone,
    metric: "92%",
    current: "Content",
    ideal: "Post",
    detail:
      "Scroll-ready social designs for announcements, promotions, and brand campaigns.",
    meals: [
      ["Theme", "Campaign Direction"],
      ["Design", "Post & Story Visual"],
      ["Share", "Platform-Ready Files"],
    ],
    images: [
      "/sm classes post.webp",
      "/6th post.webp",
    ],
    muted: true,
  },
  {
    title: "Business Card Design",
    pill: "Print Identity",
    icon: CreditCard,
    metric: "88%",
    current: "Identity",
    ideal: "Card",
    detail:
      "Elegant business cards with clear hierarchy, premium spacing, and print-ready finish.",
    meals: [
      ["Info", "Contact Hierarchy"],
      ["Style", "Front & Back Layout"],
      ["Export", "Print-Ready Artwork"],
    ],
    images: [
      "/mz-business-card-01.jpg",
      "/mz-business-card-02.webp",
    ],
    muted: true,
  },
  {
    title: "Advertisement Design",
    pill: "Campaign Creatives",
    icon: Megaphone,
    metric: "90%",
    current: "Offer",
    ideal: "Ad",
    detail:
      "Focused ad creatives with direct messaging, premium layout, and strong visual pull.",
    meals: [
      ["Hook", "Ad Message"],
      ["Visual", "Campaign Creative"],
      ["Adapt", "Digital Variants"],
    ],
    images: [
      "/project-graphic-sm-classes-11th.webp",
      "/project-graphic-smm-marketing-agency.webp",
    ],
    muted: true,
  },
  {
    title: "Product Label Design",
    pill: "Packaging Detail",
    icon: Tags,
    metric: "86%",
    current: "Product",
    ideal: "Label",
    detail:
      "Premium label designs with careful typography, shelf appeal, and brand consistency.",
    meals: [
      ["Read", "Product Details"],
      ["Design", "Label Layout"],
      ["Finish", "Print Artwork"],
    ],
    images: [
      "/mz-customised-print-01.jpg",
      "/mz-customised-print-02.jpg",
    ],
    muted: true,
  },
  {
    title: "Website Design",
    pill: "Digital Presence",
    icon: Monitor,
    metric: "91%",
    current: "Structure",
    ideal: "Website",
    detail:
      "Premium website layouts with clear sections, responsive thinking, and conversion-focused flow.",
    meals: [
      ["Map", "Page Structure"],
      ["Design", "Website Layout"],
      ["Adapt", "Responsive Direction"],
    ],
    images: [
      "/project-organise-with-kopal.webp",
      "/project-zarrar-palekar.webp",
    ],
    muted: true,
  },
];

const aboutLeftItems = [
  {
    title: "Graphic Designer",
    text: "Brand visuals and layouts",
    icon: Lightbulb,
    className: "left-[23%] top-[15%]",
  },
  {
    title: "Website Designer",
    text: "Polished digital presence",
    icon: Smartphone,
    className: "left-[16%] top-[39%]",
  },
  {
    title: "Brand Identity",
    text: "Logos, cards, and systems",
    icon: Monitor,
    className: "left-[11%] top-[63%]",
  },
];

const aboutRightItems = [
  {
    title: "Social Media Design",
    text: "Posts, covers, and campaigns",
    icon: Globe2,
    className: "right-[23%] top-[15%]",
  },
  {
    title: "7 Years Experience",
    text: "Design and web projects",
    icon: Play,
    className: "right-[16%] top-[39%]",
  },
  {
    title: "Co-Founder at WBYB",
    text: "Websites that convert",
    icon: FileText,
    className: "right-[11%] top-[63%]",
  },
];

function ServiceChip({
  item,
  index,
}: {
  item: (typeof aboutLeftItems)[number];
  index: number;
}) {
  const Icon = item.icon;
  const isRight = item.className.includes("right");

  return (
    <m.article
      className={`absolute z-30 hidden min-h-14 w-[clamp(13.5rem,17vw,17rem)] items-center gap-2.5 rounded-[0.95rem] border border-white/10 bg-[#1d1c1a]/92 p-2 pr-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_56px_rgba(0,0,0,0.34)] backdrop-blur-xl xl:flex ${item.className}`}
      initial={{ opacity: 0, y: 20, x: isRight ? 18 : -18 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.68,
        delay: 0.14 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4, backgroundColor: "rgba(38,36,32,0.96)" }}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.75rem] bg-white/[0.08] text-[#d6b36a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <Icon size={16} strokeWidth={1.7} />
      </span>
      <span className="min-w-0">
        <h3 className="text-[0.78rem] font-semibold leading-4 text-[#f5f1e8]">
          {item.title}
        </h3>
        <p className="mt-0.5 text-[0.62rem] leading-3 text-[#f5f1e8]/50">
          {item.text}
        </p>
      </span>
    </m.article>
  );
}

function DesignImageFrame({
  x,
  y,
}: {
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
}) {
  const orbX = useTransform(x, [-0.5, 0.5], [-16, 16]);
  const orbY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  return (
    <m.div
      style={{ x: orbX, y: orbY }}
      className="absolute left-1/2 top-[58%] z-20 aspect-[3/2] w-[clamp(30rem,60svh,50rem)] -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/About Image.webp"
          alt="Premium graphic design work preview"
          fill
          sizes="(min-width: 1024px) clamp(30rem, 60svh, 50rem), 90vw"
          className="object-cover opacity-86 saturate-75"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,transparent,rgba(0,0,0,0.18)_54%,rgba(0,0,0,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </m.div>
  );
}

export function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="services"
        className="section-line relative bg-black px-5 py-[clamp(3rem,7svh,5rem)] md:px-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,241,232,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.09) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "linear-gradient(90deg, transparent, black 18%, black 82%, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <m.div
            className="mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#d6b36a]">
              Services
            </p>
            <h2 className="font-sans text-[clamp(2rem,3.2vw,2.85rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#f5f1e8]">
              Whatever Your
              <span className="block bg-linear-to-b from-[#f5f1e8] to-[#d6b36a] bg-clip-text text-transparent">
                Design Goal
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-5 text-[#f5f1e8]/42">
              Premium visual systems for brands that need clarity, presence, and momentum.
            </p>
          </m.div>

          <m.ul
            className="relative overflow-visible rounded-2xl border border-white/8 bg-white/[0.03] p-2 backdrop-blur-sm"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {serviceCards.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;
              const previewImage = item.images[0];

              return (
                <li key={item.title} className="relative">
                  <m.div
                    className="group flex cursor-default items-center gap-4 rounded-xl px-4 py-4 transition-colors duration-200 hover:bg-white/[0.06]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Floating preview image */}
                    <AnimatePresence>
                      {isHovered && (
                        <m.div
                          className="pointer-events-none absolute -left-30 top-1/2 z-50 h-26 w-20 overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.6)] ring-1 ring-[#d6b36a]/20"
                          initial={{ opacity: 0, y: "-50%", x: 12, scale: 0.88 }}
                          animate={{ opacity: 1, y: "-50%", x: 0, scale: 1 }}
                          exit={{ opacity: 0, y: "-50%", x: 8, scale: 0.9 }}
                          transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                          <img
                            src={previewImage}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </m.div>
                      )}
                    </AnimatePresence>

                    {/* Number */}
                    <span className="w-6 shrink-0 text-[0.72rem] font-medium text-[#f5f1e8]/28 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[#d6b36a]/60 transition-colors duration-200 group-hover:bg-[#d6b36a]/14 group-hover:text-[#d6b36a]">
                      <Icon size={15} strokeWidth={1.7} />
                    </span>

                    {/* Title */}
                    <span className="flex-1 text-[0.95rem] font-medium text-[#f5f1e8]/80 transition-colors duration-200 group-hover:text-[#f5f1e8]">
                      {item.title}
                    </span>

                    {/* Pill */}
                    <span className="hidden shrink-0 rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-medium text-[#f5f1e8]/38 transition-colors duration-200 group-hover:border-[#d6b36a]/28 group-hover:text-[#d6b36a]/70 sm:inline-flex">
                      {item.pill}
                    </span>
                  </m.div>

                  {/* Divider (skip last) */}
                  {index < serviceCards.length - 1 && (
                    <div className="mx-4 h-px bg-white/[0.05]" />
                  )}
                </li>
              );
            })}
          </m.ul>
        </div>
      </section>
    </LazyMotion>
  );
}

export function AboutServicesOrbit() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, {
    stiffness: 80,
    damping: 24,
    mass: 0.7,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 80,
    damping: 24,
    mass: 0.7,
  });
  const headlineY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about-services"
        className="services-orbit-section section-line relative overflow-hidden px-4 py-[clamp(2rem,5svh,3rem)] md:px-8 lg:min-h-[92svh] lg:py-[clamp(2.5rem,6svh,4rem)]"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
          pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
        }}
      >
      <div className="relative z-10 mx-auto min-h-0 max-w-[1540px] lg:min-h-[clamp(40rem,84svh,48rem)]">
        <m.div
          className="mx-auto flex w-fit items-center rounded-full border border-white/28 bg-black/20 px-6 py-3 text-sm text-[#f5f1e8] backdrop-blur-md"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Zuvairiya Maryam
        </m.div>

        <m.div
          style={{ y: headlineY }}
          className="mx-auto mt-[clamp(2rem,5svh,3.2rem)] max-w-[780px] text-center"
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.86, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-sans text-[clamp(3rem,5vw,5.2rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#f5f1e8]">
            Design Thinking With
            <span className="block">
              Visual{" "}
              <span className="bg-gradient-to-b from-[#f4d59b] to-[#a87435] bg-clip-text text-transparent">
                Purpose
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[42rem] text-sm leading-7 text-[#f5f1e8]/56 md:text-base md:leading-8">
            Zuvairiya Maryam is a graphic and web designer, and the founder
            behind MZ Designs and Co founder at{" "}
            <a
              href="https://www.webuildyourbrands.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#f4d59b] underline decoration-[#d6b36a]/45 underline-offset-4 transition hover:text-[#fff1c8]"
            >
              We Build Your Brands
            </a>
            . Her work helps businesses shape a clear identity, present their
            services, and build polished digital spaces that feel purposeful
            from the first impression.
          </p>
          <p className="mx-auto mt-3 max-w-[38rem] text-xs leading-6 text-[#f5f1e8]/40 md:text-sm">
            From logo design, business cards, flyers, and social media posts to
            websites and online stores, the process is built around quality
            work, thoughtful revisions, and designs clients can feel fully
            satisfied with.
          </p>
        </m.div>

        <div className="relative mx-auto mt-[clamp(1.5rem,3svh,2rem)] h-[clamp(25rem,54svh,35rem)] max-w-[min(94vw,1280px)]">
          {[...aboutLeftItems, ...aboutRightItems].map((item, index) => (
            <ServiceChip key={item.title} item={item} index={index} />
          ))}

          <DesignImageFrame x={smoothX} y={smoothY} />
        </div>

        <div className="mt-8 grid gap-3 lg:hidden">
          {[...aboutLeftItems, ...aboutRightItems].map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex items-center gap-4 rounded-2xl bg-white/[0.075] p-4 backdrop-blur-md"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d6b36a]">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span>
                  <h3 className="text-sm font-semibold text-[#f5f1e8]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#f5f1e8]/48">
                    {item.text}
                  </p>
                </span>
              </article>
            );
          })}
        </div>
      </div>
      </section>
    </LazyMotion>
  );
}
