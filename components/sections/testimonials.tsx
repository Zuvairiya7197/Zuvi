"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

const avatarSlots = [
  "sm:left-1/2 sm:top-[32%] sm:size-[5.2rem] sm:-translate-x-1/2 md:top-[30%] md:size-[5.9rem] lg:top-[31%] lg:size-[6.35rem]",
  "sm:left-[74%] sm:top-[20%] sm:size-[4.55rem] md:left-[82%] md:top-[22%] md:size-[5.25rem] lg:left-[73%] lg:top-[19%] lg:size-[5.1rem]",
  "sm:left-[62%] sm:top-[61%] sm:size-[4.5rem] md:left-[70%] md:top-[62%] md:size-[5.15rem] lg:left-[64%] lg:top-[62%] lg:size-[4.85rem]",
  "sm:left-[22%] sm:top-[60%] sm:size-[4.5rem] md:left-[16%] md:top-[61%] md:size-[5.15rem] lg:left-[28%] lg:top-[60%] lg:size-[4.85rem]"
];

function getAvatarSlot(index: number, activeIndex: number) {
  return avatarSlots[(index - activeIndex + testimonials.length) % testimonials.length];
}

function TestimonialAvatarImage({ src, sizes }: { src?: string; sizes: string }) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgba(248,220,165,0.16),transparent_34%),linear-gradient(145deg,rgba(245,241,232,0.08),rgba(214,179,106,0.08)_42%,rgba(0,0,0,0.34))]"
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={sizes}
      className="object-cover saturate-[0.82] contrast-[1.08]"
      onError={() => setFailed(true)}
    />
  );
}

const dotPositions = [
  "left-[23%] top-[58%] md:left-[18%] md:top-[59%] lg:left-[23%]",
  "left-[37.4%] top-[34%] md:left-[39%] md:top-[35%] lg:left-[37.4%]",
  "left-[56%] top-[41%] md:left-[59%] md:top-[42%] lg:left-[56%]",
  "right-[31%] top-[70%] md:right-[28%] md:top-[70%] lg:right-[31%]",
  "right-[21%] top-[24%] md:right-[18%] md:top-[25%] lg:right-[21%]",
  "right-[7.5%] top-[47%] md:right-[6%] md:top-[48%] lg:right-[7.5%]"
];

export function Testimonials() {
  const [activeAvatarIndex, setActiveAvatarIndex] = useState(0);
  const activeIndex = activeAvatarIndex % testimonials.length;
  const featured = testimonials[activeIndex];
  const nextTestimonial = () => setActiveAvatarIndex((index) => (index + 1) % testimonials.length);
  const previousTestimonial = () => setActiveAvatarIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  const handleAvatarDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -42) nextTestimonial();
    if (info.offset.x > 42) previousTestimonial();
  };

  return (
    <section className="section-line testimonial-luxe-stage relative overflow-hidden px-4 pb-[clamp(3rem,7svh,4.25rem)] pt-[clamp(6.5rem,14svh,7.5rem)] text-[#f7efe0] sm:px-[clamp(1rem,5vw,4.5rem)] md:py-[clamp(2.5rem,6svh,4.25rem)]">
      <div className="relative z-10 mx-auto min-h-[clamp(38rem,78svh,43rem)] max-w-[1500px] px-0 py-0 sm:px-[clamp(1.25rem,4vw,4rem)] sm:py-[clamp(3.5rem,6svh,5.25rem)]">
        <motion.div
          className="relative mx-auto max-w-[620px] text-center"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-sans text-[clamp(2.35rem,11vw,3.4rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#f5f1e8] drop-shadow-[0_0_30px_rgba(244,215,157,0.12)] sm:text-[clamp(2rem,3.2vw,2.85rem)] sm:leading-[1.02] sm:tracking-[-0.045em]">
            What Clients
            <span className="block bg-gradient-to-b from-[#f5f1e8] to-[#d6b36a] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[28rem] text-sm leading-6 text-[#f8edd7]/54 sm:mt-5 sm:max-w-[31rem] md:text-base">
            Refined brand systems, precise execution, and digital moments that feel unmistakably considered.
          </p>
        </motion.div>

        <div className="relative -mx-4 mt-[clamp(2.25rem,4svh,3rem)] h-[17rem] sm:-mx-[clamp(1.25rem,4vw,4rem)] sm:mt-[clamp(2rem,4svh,3rem)] sm:h-[clamp(16rem,28svh,18.75rem)] md:h-[20rem] lg:h-[clamp(16rem,28svh,18.75rem)]">
          <svg
            className="absolute left-1/2 top-[50%] h-full w-[112%] -translate-x-1/2 -translate-y-1/2 overflow-visible drop-shadow-[0_0_10px_rgba(214,179,106,0.18)]"
            viewBox="0 0 1600 360"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M-70 142 C 54 154, 104 101, 188 61 C 271 21, 351 52, 358 155 C 365 257, 433 314, 522 273 C 618 229, 535 79, 648 40 C 745 6, 809 85, 787 178 C 767 264, 842 293, 923 236 C 1002 181, 983 41, 1101 53 C 1231 66, 1190 205, 1191 222 C 1197 316, 1291 303, 1338 242 C 1384 181, 1369 71, 1488 63 C 1598 56, 1570 184, 1668 188"
              stroke="rgba(244,215,157,0.16)"
              strokeWidth="1.15"
              strokeDasharray="2.5 8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              animate={{ y: [0, -2, 0] }}
            />
            <motion.path
              d="M-70 142 C 54 154, 104 101, 188 61 C 271 21, 351 52, 358 155 C 365 257, 433 314, 522 273 C 618 229, 535 79, 648 40 C 745 6, 809 85, 787 178 C 767 264, 842 293, 923 236 C 1002 181, 983 41, 1101 53 C 1231 66, 1190 205, 1191 222 C 1197 316, 1291 303, 1338 242 C 1384 181, 1369 71, 1488 63 C 1598 56, 1570 184, 1668 188"
              stroke="url(#testimonialGoldShimmer)"
              strokeWidth="0.95"
              strokeDasharray="14 260"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.78 }}
              viewport={{ once: true, margin: "-120px" }}
              animate={{ strokeDashoffset: [274, 0], y: [0, -2, 0] }}
              transition={{ strokeDashoffset: { duration: 6.6, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            />
            <defs>
              <linearGradient id="testimonialGoldShimmer" x1="0" x2="1600" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8b6534" stopOpacity="0" />
                <stop offset="0.5" stopColor="#f8dca5" />
                <stop offset="1" stopColor="#8b6534" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {dotPositions.map((position, index) => (
            <motion.span
              key={position}
              className={`absolute z-20 size-3.5 rounded-full bg-[#f4d79d] shadow-[0_0_12px_rgba(244,215,157,0.56),0_0_22px_rgba(214,179,106,0.24)] ${position}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.12, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + index * 0.08, duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 z-40 size-[6.7rem] -translate-x-1/2 -translate-y-1/2 sm:hidden">
            <motion.button
              key={featured.name}
              type="button"
              aria-label={`Current testimonial from ${featured.name}. Swipe to change testimonial.`}
              className="relative size-full overflow-hidden rounded-full border border-[#f8dca5]/80 bg-[#060503] shadow-[0_18px_48px_rgba(0,0,0,0.5),0_0_28px_rgba(244,215,157,0.2)] ring-2 ring-[#f8dca5]/70 ring-offset-[3px] ring-offset-[#080604] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f8dca5]/80"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={handleAvatarDragEnd}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <TestimonialAvatarImage src={featured.image} sizes="108px" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,0.24))]" />
            </motion.button>
          </div>

          {testimonials.map((testimonial, index) => {
            const position = getAvatarSlot(index, activeIndex);
            const isActive = index === activeAvatarIndex;

            return (
            <motion.button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              className={`absolute z-30 hidden overflow-hidden rounded-full border bg-[#060503] transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f8dca5]/80 sm:block ${isActive ? "border-[#f8dca5]/80 ring-2 ring-[#f8dca5]/70 ring-offset-[3px] ring-offset-[#080604] shadow-[0_18px_48px_rgba(0,0,0,0.5),0_0_28px_rgba(244,215,157,0.2)]" : "border-[#f4d79d]/42 shadow-[0_14px_34px_rgba(0,0,0,0.42),0_0_16px_rgba(214,179,106,0.1)]"} ${position}`}
              onClick={() => setActiveAvatarIndex(index)}
              initial={{ opacity: 0, y: 24, scale: 0.88 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: index % 2 === 0 ? [0, -5, 0] : [0, 5, 0], scale: isActive ? 1.04 : 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                opacity: { delay: 0.16 + index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                scale: { delay: 0.16 + index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6.2 + index * 0.35, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ y: -7, scale: isActive ? 1.08 : 1.05 }}
            >
              <TestimonialAvatarImage src={testimonial.image} sizes="128px" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,0.24))]" />
            </motion.button>
            );
          })}
        </div>

        <motion.div
          className="relative mx-auto mt-[clamp(1.25rem,3svh,2.15rem)] grid max-w-[980px] grid-cols-[auto_1fr_auto] items-center gap-3 px-0 py-3 text-center sm:gap-[clamp(1rem,3vw,2rem)] sm:px-[clamp(0.75rem,2vw,1rem)] sm:py-[clamp(0.75rem,2vw,1rem)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, delay: 0.28 }}
        >
          <motion.button
            aria-label="Previous testimonial"
            className="grid size-10 shrink-0 place-items-center rounded-full border border-[#f4d79d]/22 bg-black/25 text-[#f8dca5] shadow-[0_10px_30px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-colors hover:border-[#f8dca5]/55 hover:bg-[#f4d79d]/8 sm:size-11 md:size-12"
            onClick={previousTestimonial}
            whileHover={{ x: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.div
            key={featured.quote}
            className="mx-auto max-w-[52rem]"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm leading-6 text-[#f8edd7]/68 md:text-[1.02rem] md:leading-7">
              "{featured.quote}"
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#f5f1e8]">{featured.name}</p>
              <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#d6b36a]/70">
                {featured.role}
              </p>
            </div>
          </motion.div>
          <motion.button
            aria-label="Next testimonial"
            className="grid size-10 shrink-0 place-items-center rounded-full border border-[#f4d79d]/22 bg-black/25 text-[#f8dca5] shadow-[0_10px_30px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-colors hover:border-[#f8dca5]/55 hover:bg-[#f4d79d]/8 sm:size-11 md:size-12"
            onClick={nextTestimonial}
            whileHover={{ x: 3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
