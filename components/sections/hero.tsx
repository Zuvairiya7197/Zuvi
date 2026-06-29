"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkle } from "lucide-react";
import { useCallback } from "react";
import { SocialFlipButton } from "@/components/ui/social-flip-button";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const traits = ["Strategic", "Creative", "Impactful"];

const contactItems = [
  { letter: "C", icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/919987448073" },
  { letter: "O", icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/_zuvi___/" },
  { letter: "N", icon: <FaEnvelope />, label: "Email", href: "mailto:zuvairiyamaryam@gmail.com" },
  { letter: "T", icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/zuvairiya-maryam/" },
  { letter: "A", icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/919987448073" },
  { letter: "C", icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/_zuvi___/" },
  { letter: "T", icon: <FaEnvelope />, label: "Email", href: "mailto:zuvairiyamaryam@gmail.com" },
];
const metrics = [
  { value: "42+", label: "visual launches" },
  { value: "8", label: "active categories" },
  { value: "360", label: "brand thinking" },
];

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
  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }, [pointerX, pointerY]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="top"
        className="story-hero relative min-h-[100svh] overflow-hidden px-4 pb-5 pt-[clamp(4.75rem,9svh,5.8rem)] md:px-6 md:pt-[clamp(5rem,9svh,6.2rem)] xl:px-8 2xl:pt-24"
        onPointerMove={handlePointerMove}
      >
      <div className="hero-kinetic-grid pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="hero-sweep pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <m.div
        className="pointer-events-none absolute left-[6vw] top-[18svh] z-0 hidden h-28 w-px bg-gradient-to-b from-transparent via-[#f7d79a]/40 to-transparent xl:block"
        aria-hidden="true"
        animate={{ y: [0, 42, 0], opacity: [0.22, 0.72, 0.22] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="pointer-events-none absolute right-[8vw] top-[24svh] z-0 hidden h-36 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent xl:block"
        aria-hidden="true"
        animate={{ y: [28, -18, 28], opacity: [0.18, 0.58, 0.18] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-[1672/941] w-[min(178vw,38rem)] -translate-x-1/2 md:w-[min(175vw,76rem)] xl:w-[min(160vw,58rem)]"
        animate={{ y: [0, -12, 0], scale: [1, 1.012, 1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hero-image-aura absolute inset-x-[8%] bottom-[2%] h-[34%]" aria-hidden="true" />
        <Image
          src="/hero-image.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 1280px) 58rem, (min-width: 768px) 76rem, 160vw"
          className="object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.75)]"
          aria-hidden="true"
        />
      </m.div>
      <div className="relative z-10 mx-auto min-h-[calc(100svh-5.25rem)] max-w-[1680px] max-xl:flex max-xl:flex-col max-xl:items-center md:min-h-[calc(100svh-5.75rem)] 2xl:min-h-[calc(100svh-7rem)] 2xl:max-w-[1820px]">
        <m.div
          style={{ x: headlineX, y: headlineY }}
          className="mx-auto max-w-[min(100%,38rem)] pt-0 text-center md:max-w-[760px] xl:pt-0 2xl:max-w-[940px]"
          initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mx-auto flex max-w-[92vw] items-center justify-center gap-2 text-[0.56rem] font-black uppercase tracking-[0.16em] text-[#d6b36a] sm:gap-3 sm:text-[0.66rem] sm:tracking-[0.24em] md:text-xs md:tracking-[0.34em] 2xl:text-sm">
            Design is thinking made visual. <Sparkle size={18} />
          </p>
          <h1 className="mt-4 font-sans text-[clamp(2.48rem,10.6vw,3.45rem)] font-black uppercase leading-[0.9] tracking-normal text-[#f5f1e8] sm:text-[clamp(3rem,10vw,4.25rem)] md:text-[clamp(4.35rem,8vw,6.15rem)] xl:text-[clamp(3.2rem,5.7vw,6.8rem)] 2xl:mt-6 2xl:text-[clamp(4rem,6.9vw,8.4rem)] 2xl:leading-[0.96]">
            <span className="block whitespace-nowrap">Designs that</span>
            <span className="block whitespace-nowrap">
              Tell{" "}
              <span className="bg-gradient-to-b from-[#f8ddb0] to-[#9a6a30] bg-clip-text text-transparent">
                stories.
              </span>
            </span>
          </h1>
          <div className="mt-5 xl:hidden">
            <SocialFlipButton items={contactItems} />
          </div>
        </m.div>

        <div className="absolute bottom-[clamp(1.75rem,5svh,3.5rem)] left-0 z-40 hidden max-w-[18rem] flex-col items-start xl:flex 2xl:max-w-[20rem]">
          <div className="mb-5 flex max-w-[15rem] flex-wrap gap-2.5">
            {traits.map((trait, index) => (
              <m.span
                key={trait}
                className="rounded-full border border-white/16 bg-black px-4 py-2 text-center text-sm font-medium leading-none text-[#f5f1e8] backdrop-blur-sm"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.55 + index * 0.08 }}
              >
                {trait}
              </m.span>
            ))}
          </div>
          <m.div
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
          </m.div>
        </div>

        <div className="absolute bottom-[clamp(1.75rem,5svh,3.5rem)] left-1/2 z-40 hidden -translate-x-1/2 gap-3 xl:flex">
          {metrics.map((metric, index) => (
            <m.div
              key={metric.label}
              className="min-w-[8.25rem] rounded-2xl border border-white/12 bg-black/44 px-4 py-3 text-center shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.82 + index * 0.1 }}
            >
              <div className="text-2xl font-black leading-none text-[#f5f1e8]">{metric.value}</div>
              <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#d6b36a]/80">{metric.label}</div>
            </m.div>
          ))}
        </div>

        <m.div
          className="absolute bottom-0 right-0 z-40 hidden xl:block"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <SocialFlipButton items={contactItems} />
        </m.div>
      </div>
      </section>
    </LazyMotion>
  );
}
