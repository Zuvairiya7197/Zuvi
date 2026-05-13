"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { stats, testimonials } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="section-line px-6 py-8 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.55fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5ad6f]">About me</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] text-white md:text-5xl">
            Design is not just what I do, it’s <span className="text-[#d5ad6f]">who I am.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300">
            I’m a passionate graphic designer with over 7 years of experience creating visual solutions that help
            brands stand out. I believe in minimal design, strategic thinking and attention to detail.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#d5ad6f]">
            More about me <ArrowRight size={15} />
          </Link>
        </div>
        <div className="relative min-h-[420px]">
          <motion.div
            className="absolute left-0 top-0 h-full w-[68%] overflow-hidden rounded-lg border border-[#d5ad6f]/28"
            whileHover={{ y: -10, rotate: -1.5 }}
          >
            <Image
              src="/about-portrait.svg"
              alt="Graphic designer portrait in dark studio"
              fill
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </motion.div>
          <motion.div
            className="glass absolute bottom-0 left-0 w-32 rounded-lg p-6 text-center"
            whileHover={{ y: -10, rotate: 1.5 }}
          >
            <p className="font-display text-5xl font-semibold text-[#d5ad6f]">
              {stats[1].value}
              <span className="text-3xl">+</span>
            </p>
            <p className="mt-2 text-sm font-semibold">Years of Experience</p>
          </motion.div>
          <div className="absolute right-0 top-0 grid w-[30%] gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-[#d5ad6f]/18">
              <Image
                src="/about-desk.svg"
                alt="Designer workspace with monitor"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-[#d5ad6f]/18">
              <Image
                src="/about-sketch.svg"
                alt="Brand sketch and design process"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5ad6f]">What clients say</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] text-white md:text-5xl">
            Trusted by <span className="text-[#d5ad6f]">Clients</span>
          </h2>
          <article className="glass mt-6 rounded-lg p-7">
            <Quote className="text-[#d5ad6f]" size={34} />
            <p className="mt-5 text-base leading-8 text-neutral-300">{testimonials[0].quote}</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/client-avatar.svg"
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
