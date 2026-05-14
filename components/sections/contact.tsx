"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type SocialIconProps = {
  className?: string;
};

function WhatsAppLogo({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.05 4.91A9.81 9.81 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.27-1.38a9.9 9.9 0 0 0 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7Zm-7.01 15.24h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.42 5.82c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

function InstagramLogo({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailLogo({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function LinkedInLogo({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 8.98H3.65V19.5h3.29V8.98ZM5.29 7.54a1.9 1.9 0 1 0 0-3.79 1.9 1.9 0 0 0 0 3.79ZM20.35 19.5v-5.78c0-3.1-1.65-4.54-3.85-4.54a3.32 3.32 0 0 0-3 1.65h-.05V8.98h-3.15V19.5h3.29v-5.21c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79v5.12h3.1Z" />
    </svg>
  );
}

const footerSocials = [
  { label: "WhatsApp", href: "https://wa.me/19092765351", icon: WhatsAppLogo },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: InstagramLogo,
  },
  { label: "Email", href: "mailto:hello@zuvi.studio", icon: MailLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedInLogo },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-stage section-line relative overflow-hidden px-5 py-[clamp(2rem,5svh,3.5rem)] md:px-8"
    >
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
            className="absolute right-[clamp(7rem,9vw,10rem)] top-[48%] hidden h-[clamp(5.4rem,8vw,6.8rem)] w-[clamp(5.4rem,8vw,6.8rem)] flex-col items-center justify-center rounded-full border border-[#d6b36a] bg-black/35 text-[#d6b36a] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-[#d6b36a] hover:text-black xl:flex 2xl:right-[clamp(8rem,8vw,11rem)] 2xl:h-[clamp(6rem,9vw,8rem)] 2xl:w-[clamp(6rem,9vw,8rem)]"
            initial={{ opacity: 0, scale: 0.82 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.04 }}
          >
            <ArrowUpRight
              className="size-[clamp(1.65rem,2.5vw,2.3rem)]"
              strokeWidth={1.2}
            />
            <span className="mt-3 text-[0.55rem] font-semibold uppercase tracking-[0.34em]">
              Explore
            </span>
          </motion.a>
        </div>

        <div className="relative z-10 flex flex-col gap-4 pb-[clamp(1rem,2svh,1.4rem)] text-xs leading-6 text-neutral-400 sm:text-sm md:flex-row md:items-center md:justify-between">
          <p>
            <span className="text-[#d6b36a]">(c)</span> Zuvairiya Maryam. All
            rights reserved 2026
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
                  rel={
                    social.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#d6b36a] transition hover:border-[#d6b36a]/50 hover:bg-[#d6b36a] hover:text-black"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
