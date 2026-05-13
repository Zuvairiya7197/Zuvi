"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="hidden overflow-hidden px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Testimonials" title="Clear thinking, polished craft, measurable lift." />
      </div>
      <div className="mx-auto mt-12 max-w-7xl overflow-hidden">
        <motion.div
          className="flex w-max gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <article key={`${testimonial.name}-${index}`} className="glass w-[330px] rounded-[1.5rem] p-6 md:w-[420px]">
              <p className="text-lg leading-8 text-neutral-100">“{testimonial.quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-neutral-400">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
