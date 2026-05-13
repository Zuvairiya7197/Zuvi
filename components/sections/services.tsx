"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="section-line px-6 py-8 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_2.3fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5ad6f]">What I do</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] text-white md:text-5xl">
            Design Solutions That Drive <span className="text-[#d5ad6f]">Results</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300">
            From branding to digital experiences, I create designs that not only look stunning but also achieve real
            results.
          </p>
          <Link href="/services" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#d5ad6f]">
            View all services <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="glass glow-border rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#f4d79d] to-[#7e562e] text-black shadow-[0_0_38px_rgba(213,173,111,0.18)]">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-base font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{service.summary}</p>
                <ArrowRight size={15} className="ml-auto mt-6 text-[#d5ad6f]" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
