"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

const stats = [
  { value: "42+", label: "visual launches" },
  { value: "8",   label: "active categories" },
  { value: "360", label: "brand thinking" },
];

export function StatsStrip() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="section-line relative overflow-hidden bg-black px-5 py-[clamp(2.5rem,6svh,5rem)] md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {stats.map((stat, index) => (
              <m.div
                key={stat.label}
                className="flex flex-col items-center gap-2 px-2 text-center first:pl-0 last:pr-0 sm:px-4 md:px-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display text-[clamp(2rem,8vw,4.5rem)] font-bold leading-none tracking-[-0.04em] text-[#d6b36a]">
                  {stat.value}
                </span>
                <span className="text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-[#f5f1e8]/40 sm:text-[0.65rem] sm:tracking-[0.18em]">
                  {stat.label}
                </span>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
