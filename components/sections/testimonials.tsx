"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "@/lib/data";

const avatarPositions = [
  "left-[20%] top-[18%] size-[4.15rem] md:size-[4.85rem]",
  "left-[34%] top-[59%] size-[4.85rem] md:size-[5.55rem]",
  "left-1/2 top-[30%] size-[5.55rem] -translate-x-1/2 md:size-[6.15rem]",
  "right-[21%] top-[18%] size-[4.85rem] md:size-[5.55rem]"
];

const dotPositions = [
  "left-[24%] top-[57%]",
  "left-[36.7%] top-[33%]",
  "left-[56%] top-[39%]",
  "right-[30.8%] top-[72%]",
  "right-[21.2%] top-[20%]",
  "right-[7.9%] top-[46%]"
];

export function Testimonials() {
  const [activeAvatarIndex, setActiveAvatarIndex] = useState(2);
  const activeIndex = activeAvatarIndex % testimonials.length;
  const featured = testimonials[activeIndex];
  const nextTestimonial = () => setActiveAvatarIndex((index) => (index + 1) % testimonials.length);
  const previousTestimonial = () => setActiveAvatarIndex((index) => (index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-line testimonial-luxe-stage relative overflow-hidden px-[clamp(1rem,5vw,4.5rem)] py-[clamp(3rem,7svh,5rem)] text-[#f7efe0]">
      <div className="relative z-10 mx-auto min-h-[clamp(39rem,82svh,47rem)] max-w-[1500px] px-[clamp(1.25rem,4vw,4rem)] py-[clamp(4.75rem,8svh,7rem)]">
        <motion.div
          className="relative mx-auto max-w-[620px] text-center"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-[clamp(2.3rem,4.4vw,3.9rem)] font-medium leading-none text-[#fbf2df] drop-shadow-[0_0_30px_rgba(244,215,157,0.12)]">
            What Clients Experience
          </h2>
          <p className="mx-auto mt-5 max-w-[31rem] text-sm leading-6 text-[#f8edd7]/54 md:text-base">
            Refined brand systems, precise execution, and digital moments that feel unmistakably considered.
          </p>
          <motion.a
            href="#contact"
            className="group relative mt-6 inline-flex overflow-hidden rounded-full border border-[#f8dca5]/40 bg-gradient-to-br from-[#f8dca5] via-[#d6b36a] to-[#8b6534] px-6 py-2.5 text-sm font-semibold text-[#070604] shadow-[0_12px_34px_rgba(214,179,106,0.24)]"
            whileHover={{ y: -3, scale: 1.035 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.58),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative">Book Now</span>
          </motion.a>
        </motion.div>

        <div className="relative -mx-[clamp(1.25rem,4vw,4rem)] mt-[clamp(3.25rem,7svh,4.75rem)] h-[clamp(17.5rem,31svh,20.5rem)]">
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
              className={`absolute z-20 size-2.5 rounded-full bg-[#f4d79d] shadow-[0_0_12px_rgba(244,215,157,0.56),0_0_22px_rgba(214,179,106,0.24)] md:size-3.5 ${position}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.12, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + index * 0.08, duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {testimonials.map((testimonial, index) => {
            const position = avatarPositions[index];
            const isActive = index === activeAvatarIndex;

            return (
            <motion.button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              className={`absolute z-30 overflow-hidden rounded-full border bg-[#060503] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f8dca5]/80 ${isActive ? "border-[#f8dca5]/80 ring-2 ring-[#f8dca5]/70 ring-offset-[3px] ring-offset-[#080604] shadow-[0_18px_48px_rgba(0,0,0,0.5),0_0_28px_rgba(244,215,157,0.2)]" : "border-[#f4d79d]/42 shadow-[0_14px_34px_rgba(0,0,0,0.42),0_0_16px_rgba(214,179,106,0.1)]"} ${position}`}
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
              <Image
                src={testimonial.image}
                alt=""
                fill
                sizes="128px"
                className="object-cover saturate-[0.82] contrast-[1.08]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,0.24))]" />
            </motion.button>
            );
          })}
        </div>

        <motion.div
          className="relative mx-auto mt-[clamp(2rem,4svh,3rem)] grid max-w-[820px] grid-cols-[auto_1fr_auto] items-center gap-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, delay: 0.28 }}
        >
          <motion.button
            aria-label="Previous testimonial"
            className="grid size-12 place-items-center rounded-full border border-[#f4d79d]/22 bg-black/20 text-[#f8dca5] shadow-[0_10px_30px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-colors hover:border-[#f8dca5]/55 hover:bg-[#f4d79d]/8"
            onClick={previousTestimonial}
            whileHover={{ x: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.p
            key={featured.quote}
            className="mx-auto max-w-[46rem] text-sm leading-6 text-[#f8edd7]/64 md:text-[1.05rem] md:leading-7"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            "{featured.quote}"
          </motion.p>
          <motion.button
            aria-label="Next testimonial"
            className="grid size-12 place-items-center rounded-full border border-[#f4d79d]/22 bg-black/20 text-[#f8dca5] shadow-[0_10px_30px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-colors hover:border-[#f8dca5]/55 hover:bg-[#f4d79d]/8"
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
