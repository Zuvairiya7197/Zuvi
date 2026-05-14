"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { stats, testimonials } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="section-line relative overflow-hidden px-5 py-[clamp(3rem,8svh,6rem)] md:px-8">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#d6b36a]/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-[clamp(2rem,5vw,3rem)] lg:grid-cols-[0.78fr_1.45fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d5ad6f]">About the studio</p>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,10vw,4.5rem)] font-bold leading-[0.88] text-white md:leading-[0.84]">
            A quiet room for loud ideas.
          </h2>
          <p className="mt-6 text-sm leading-7 text-neutral-300">
            Zuvi Studio blends editorial taste, brand strategy, UI systems and motion direction into visual worlds
            that feel considered, elevated and commercially useful.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#d5ad6f]">
            More about me <ArrowRight size={15} />
          </Link>
        </div>
        <div className="relative min-h-[clamp(22rem,52svh,32rem)]">
          <motion.div
            className="absolute left-0 top-0 h-full w-[72%] overflow-hidden rounded-[1.8rem] border border-[#d5ad6f]/28 md:w-[68%] md:rounded-[2.6rem]"
            whileHover={{ y: -10, rotate: -1.5 }}
          >
            <Image
              src="/project-zarrar-palekar.webp"
              alt="Graphic designer portrait in dark studio"
              fill
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </motion.div>
          <motion.div
            className="glass absolute bottom-0 left-0 w-[clamp(7.5rem,32vw,9rem)] rounded-[1.5rem] p-4 text-center md:rounded-[2rem] md:p-6"
            whileHover={{ y: -10, rotate: 1.5 }}
          >
            <p className="font-display text-[clamp(2.4rem,9vw,3rem)] font-semibold text-[#d5ad6f]">
              {stats[1].value}
              <span className="text-3xl">+</span>
            </p>
            <p className="mt-2 text-xs font-semibold md:text-sm">Years of Experience</p>
          </motion.div>
          <div className="absolute right-0 top-0 grid w-[32%] gap-3 md:w-[30%] md:gap-4">
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] border border-[#d5ad6f]/18">
              <Image
                src="/AC Repair.png"
                alt="Designer workspace with monitor"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] border border-[#d5ad6f]/18">
              <Image
                src="/Plumbing sevices.png"
                alt="Brand sketch and design process"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d5ad6f]">Studio metrics</p>
          <div className="mt-5 grid gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-[clamp(2.6rem,4vw,3rem)] font-bold text-[#d5ad6f]">
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <article className="glass mt-5 rounded-[2rem] p-7">
            <Quote className="text-[#d5ad6f]" size={34} />
            <p className="mt-5 text-base leading-8 text-neutral-300">{testimonials[0].quote}</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/project-little-ilmies.webp"
                  alt="Client headshot"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{testimonials[0].name}</p>
                <p className="text-xs text-neutral-400">{testimonials[0].role}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
