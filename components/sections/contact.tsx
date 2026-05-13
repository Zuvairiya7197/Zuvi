"use client";

import dynamic from "next/dynamic";
import { CircleDot, Mail, MapPin, MessageCircle, Send, Users } from "lucide-react";

const ContactOrb = dynamic(() => import("@/components/three/contact-orb").then((mod) => mod.ContactOrb), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[2rem] bg-white/[0.03]" />
});

export function ContactSection() {
  return (
    <section className="section-line px-6 py-8 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_1.2fr_0.95fr_0.55fr] lg:items-center">
        <div>
          <h2 className="font-display text-4xl font-semibold uppercase leading-[0.9] text-[#d5ad6f] md:text-5xl">
            Let’s work together
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300">
            Have a project in mind? Let’s create something amazing together.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-neutral-300">
            <a className="flex items-center gap-3 transition hover:text-[#d5ad6f]" href="mailto:hello@zuvi.design">
              <Mail size={16} className="text-[#d5ad6f]" /> hello@zuvi.design
            </a>
            <a className="flex items-center gap-3 transition hover:text-[#d5ad6f]" href="tel:+919876543210">
              <MessageCircle size={16} className="text-[#d5ad6f]" /> +91 98765 43210
            </a>
            <span className="flex items-center gap-3">
              <MapPin size={16} className="text-[#d5ad6f]" /> India
            </span>
          </div>
        </div>
        <div>
          <form className="grid gap-4" action="mailto:hello@zuvi.design">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded border border-[#d5ad6f]/14 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition focus:border-[#d5ad6f]" name="name" placeholder="Your Name" required />
              <input className="rounded border border-[#d5ad6f]/14 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition focus:border-[#d5ad6f]" name="email" placeholder="Your Email" type="email" required />
            </div>
            <textarea className="min-h-28 rounded border border-[#d5ad6f]/14 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition focus:border-[#d5ad6f]" name="brief" placeholder="Your Message" required />
            <button className="w-fit rounded bg-gradient-to-br from-[#f4d79d] to-[#9b7040] px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:brightness-110" type="submit">
              Send message
            </button>
          </form>
        </div>
        <div className="relative h-56 overflow-hidden rounded-lg md:h-64">
            <ContactOrb />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d5ad6f]">Connect with me</p>
          <div className="mt-6 grid gap-4 text-sm text-neutral-300">
            <a className="flex items-center gap-3 transition hover:text-[#d5ad6f]" href="https://www.behance.net">Bē Behance</a>
            <a className="flex items-center gap-3 transition hover:text-[#d5ad6f]" href="https://dribbble.com"><CircleDot size={16} className="text-[#d5ad6f]" /> Dribbble</a>
            <a className="flex items-center gap-3 transition hover:text-[#d5ad6f]" href="https://www.instagram.com"><Send size={16} className="text-[#d5ad6f]" /> Instagram</a>
            <a className="flex items-center gap-3 transition hover:text-[#d5ad6f]" href="https://www.linkedin.com"><Users size={16} className="text-[#d5ad6f]" /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
