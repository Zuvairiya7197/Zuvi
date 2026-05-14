"use client";

import { ArrowRight, ChevronLeft, ChevronRight, PenTool, Quote, Sparkle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

const premiumEase = [0.22, 1, 0.36, 1] as const;

const cardMotion = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.22 + index * 0.1, duration: 0.75, ease: premiumEase }
  })
};

function FloatingArtifact({
  className,
  children,
  delay = 0
}: {
  className: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute hidden lg:block ${className}`}
      initial={{ opacity: 0, y: 28, rotate: -6 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ delay, duration: 0.9, ease: premiumEase }}
      animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
    >
      {children}
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="testimonial-stage section-line relative overflow-hidden px-5 py-[clamp(3rem,7svh,5rem)] md:px-8">
      <div className="relative z-10 mx-auto flex min-h-[clamp(43rem,90svh,54rem)] max-w-[min(94vw,1760px)] flex-col justify-between">
        <div className="relative flex flex-1 items-center justify-center pt-[clamp(4.5rem,10svh,7rem)]">
          <FloatingArtifact className="left-[3%] top-[20%] h-[clamp(12rem,26svh,18rem)] w-[clamp(4rem,7vw,6rem)] -rotate-[28deg]" delay={0.1}>
            <div className="h-full w-full rounded-full border border-white/10 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
              <div className="mx-auto mt-4 h-[82%] w-4 rounded-full bg-gradient-to-b from-[#1d1c1a] via-[#050505] to-[#d6b36a]" />
            </div>
          </FloatingArtifact>

          <FloatingArtifact className="left-[13%] top-[16%] h-[clamp(5rem,10svh,7.5rem)] w-[clamp(5rem,10svh,7.5rem)] rotate-[-12deg]" delay={0.18}>
            <div className="grid h-full w-full place-items-center border border-[#d6b36a]/45 bg-black/35 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold text-[#d6b36a] shadow-[0_20px_70px_rgba(214,179,106,0.14)] backdrop-blur-md">
              T
            </div>
          </FloatingArtifact>

          <FloatingArtifact className="right-[4%] top-[16%] h-[clamp(12rem,25svh,17rem)] w-[clamp(11rem,17vw,15rem)] rotate-[13deg]" delay={0.14}>
            <div className="relative h-full rounded-[1.15rem] border border-white/10 bg-gradient-to-br from-[#181715] to-[#040404] shadow-[0_28px_100px_rgba(0,0,0,0.7)]">
              <div className="absolute left-4 top-0 h-full w-6 rounded-full border-l border-[#d6b36a]/55" />
              <PenTool className="absolute right-7 top-8 size-12 rotate-[-28deg] text-[#d6b36a]" strokeWidth={1.4} />
            </div>
          </FloatingArtifact>

          <FloatingArtifact className="left-[5%] bottom-[14%] h-[clamp(3.5rem,8svh,5.5rem)] w-[clamp(14rem,20vw,20rem)] rotate-[12deg]" delay={0.24}>
            <div className="flex h-full items-center gap-3 rounded-[0.9rem] border border-white/10 bg-black/55 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.65)] backdrop-blur-md">
              {["#f5f1e8", "#837763", "#3f3320", "#d6b36a", "#111111"].map((color) => (
                <span key={color} className="h-full flex-1 rounded-[0.35rem]" style={{ backgroundColor: color }} />
              ))}
            </div>
          </FloatingArtifact>

          <FloatingArtifact className="right-[17%] bottom-[20%] h-[clamp(5.5rem,11svh,7rem)] w-[clamp(5.5rem,11svh,7rem)] rotate-[12deg]" delay={0.28}>
            <div className="grid h-full w-full place-items-center border border-[#d6b36a]/35 bg-black/35 text-[clamp(2.4rem,4.5vw,4rem)] font-serif text-white/45 shadow-[0_20px_70px_rgba(214,179,106,0.13)] backdrop-blur-md">
              Aa
            </div>
          </FloatingArtifact>

          <motion.div
            className="relative mx-auto max-w-[min(92vw,930px)] text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
          >
            <motion.div
              className="mx-auto inline-flex items-center gap-4 rounded-full border border-[#d6b36a]/35 bg-black/35 px-[clamp(1rem,2vw,1.55rem)] py-3 text-[clamp(0.68rem,0.85vw,0.86rem)] font-semibold uppercase tracking-[0.32em] text-[#d6b36a] backdrop-blur-md"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65 } }
              }}
            >
              Design that connects
              <Sparkle className="size-4" strokeWidth={1.5} />
            </motion.div>

            <motion.h2
              className="mt-[clamp(1.2rem,3svh,2rem)] text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-[#f5f1e8]"
              variants={{
                hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: premiumEase } }
              }}
            >
              Ready To Elevate
              <span className="block bg-gradient-to-b from-[#f4d79d] via-[#d6b36a] to-[#8c6a3b] bg-clip-text text-transparent">
                Your Brand?
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-[clamp(1rem,2.4svh,1.6rem)] max-w-[min(88vw,610px)] text-[clamp(1rem,1.45vw,1.35rem)] leading-[1.55] text-neutral-300"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { delay: 0.12, duration: 0.7 } }
              }}
            >
              Thoughtful design solutions that tell your story, engage your audience and drive real impact.
            </motion.p>

            <motion.a
              href="#contact"
              className="group mx-auto mt-[clamp(1.4rem,3.2svh,2.2rem)] inline-flex items-center gap-4 rounded-full border border-[#d6b36a]/45 bg-black/35 px-5 py-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-semibold text-[#f5f1e8] shadow-[0_20px_70px_rgba(214,179,106,0.12)] backdrop-blur-md"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { delay: 0.22, duration: 0.7 } }
              }}
            >
              <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-[#f4d79d] to-[#d6b36a] text-black transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-5" />
              </span>
              Start a Project
            </motion.a>
          </motion.div>
        </div>

        <div className="grid gap-5 pb-[clamp(0.25rem,1svh,1rem)] lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              custom={index}
              variants={cardMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              whileHover={{ y: -8, rotateX: 2 }}
              className="relative min-h-[clamp(14rem,26svh,17rem)] rounded-[1.15rem] border border-[#d6b36a]/35 bg-black/52 p-[clamp(1.25rem,2vw,1.75rem)] shadow-[0_22px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_18%_0%,rgba(214,179,106,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.055),transparent_42%)]" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid size-[clamp(3.6rem,6vw,4.8rem)] place-items-center rounded-full border border-[#d6b36a]/45 bg-gradient-to-br from-[#282018] to-[#050505] text-lg font-semibold text-[#f4d79d]">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-[clamp(1rem,1.2vw,1.25rem)] font-semibold text-white">{testimonial.name}</h3>
                    <p className="mt-1 text-[clamp(0.78rem,0.95vw,0.92rem)] text-[#d6b36a]">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="size-5 text-[#8c6a3b]" />
              </div>

              <div className="relative mt-[clamp(1.1rem,2svh,1.6rem)] flex gap-1 text-[#d6b36a]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-current" strokeWidth={1.4} />
                ))}
              </div>

              <p className="relative mt-[clamp(1rem,2svh,1.5rem)] text-[clamp(0.95rem,1.1vw,1.1rem)] leading-[1.55] text-neutral-300">
                “{testimonial.quote}”
              </p>
              <span className="relative mt-[clamp(1rem,2svh,1.5rem)] block h-px w-9 bg-[#d6b36a]" />
            </motion.article>
          ))}
        </div>

        <div className="relative z-10 mt-[clamp(1rem,2svh,1.5rem)] flex items-center justify-center gap-6">
          <span className="h-2 w-8 rounded-full bg-[#d6b36a]" />
          <span className="h-2 w-4 rounded-full bg-white/25" />
          <span className="h-2 w-4 rounded-full bg-white/25" />
          <button aria-label="Previous testimonials" className="grid size-9 place-items-center rounded-full text-[#d6b36a] transition-colors hover:bg-white/10">
            <ChevronLeft className="size-5" />
          </button>
          <button aria-label="Next testimonials" className="grid size-9 place-items-center rounded-full text-[#d6b36a] transition-colors hover:bg-white/10">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
