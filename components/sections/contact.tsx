"use client";

import { ArrowUpRight, Mail, MessageCircle, Send, Users } from "lucide-react";
import { motion } from "framer-motion";

const footerSocials = [
  { label: "WhatsApp", href: "https://wa.me/19092765351", icon: MessageCircle },
  { label: "Instagram", href: "https://www.instagram.com", icon: Send },
  { label: "Email", href: "mailto:hello@zuvi.studio", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Users }
];

export function ContactSection() {
  return (
    <section id="contact" className="contact-stage section-line relative overflow-hidden px-5 py-[clamp(2rem,5svh,3.5rem)] md:px-8">
      <div className="relative z-10 mx-auto flex min-h-[clamp(36rem,82svh,48rem)] max-w-[min(94vw,1660px)] flex-col 2xl:max-w-[min(94vw,1760px)]">
        <div className="relative mt-auto flex flex-1 items-end justify-center pb-[clamp(2.75rem,6svh,4.5rem)] pt-[clamp(2.25rem,6svh,4rem)]">
          <motion.h2
            className="relative z-10 max-w-[min(92vw,1120px)] text-center text-[clamp(3.3rem,13vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] sm:text-[clamp(4rem,9.2vw,10rem)] 2xl:max-w-[min(92vw,1340px)] 2xl:text-[clamp(4.5rem,10.5vw,12.5rem)]"
            initial={{ opacity: 0, y: 52, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-16%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[#f5f1e8]">ZUVAIRIYA</span>
            <span className="block bg-gradient-to-b from-[#f4d79d] via-[#d6b36a] to-[#8c6a3b] bg-clip-text text-transparent">
              MARYAM
            </span>
          </motion.h2>

          <motion.a
            href="/work"
            aria-label="Explore portfolio"
            className="absolute right-[1%] top-[43%] hidden h-[clamp(5.8rem,9vw,7.5rem)] w-[clamp(5.8rem,9vw,7.5rem)] flex-col items-center justify-center rounded-full border border-[#d6b36a] bg-black/35 text-[#d6b36a] shadow-[0_28px_90px_rgba(214,179,106,0.14)] backdrop-blur-md transition hover:bg-[#d6b36a] hover:text-black xl:flex 2xl:h-[clamp(7rem,11vw,9rem)] 2xl:w-[clamp(7rem,11vw,9rem)]"
            initial={{ opacity: 0, scale: 0.82 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.04 }}
          >
            <ArrowUpRight className="size-[clamp(1.9rem,3vw,2.8rem)]" strokeWidth={1.2} />
            <span className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.4em]">Explore</span>
          </motion.a>
        </div>

        <div className="relative z-10 flex flex-col gap-4 pb-[clamp(1rem,2svh,1.4rem)] text-xs leading-6 text-neutral-400 sm:text-sm md:flex-row md:items-center md:justify-between">
          <p>
            <span className="text-[#d6b36a]">(c)</span> ZUVI STUDIO. All rights reserved 2026
          </p>
          <div className="flex items-center gap-3">
            {footerSocials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#d6b36a] transition hover:border-[#d6b36a]/50 hover:bg-[#d6b36a] hover:text-black"
                >
                  <Icon size={16} strokeWidth={1.7} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
