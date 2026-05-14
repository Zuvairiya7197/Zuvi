"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const heroNavItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Projects" },
  { href: "/about#process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 xl:px-8 xl:pt-5">
      <div className="mx-auto grid max-w-[1820px] grid-cols-[1fr_auto] items-start gap-4 xl:grid-cols-[0.62fr_auto_0.86fr]">
        <Link href="/" className="flex items-start gap-3 leading-none" aria-label="Zuvi Studio home">
          <span>
            <span className="block font-display text-[clamp(2rem,8vw,2.65rem)] font-bold tracking-[0.04em] text-[#d6b36a] 2xl:text-[3.2rem]">
              ZUVI.
            </span>
            <span className="mt-1 block text-xs font-medium tracking-[0.04em] text-[#f5f1e8]/45 2xl:text-sm">
              Graphic Designer
            </span>
          </span>
        </Link>

        <div className="hidden items-start justify-center xl:flex">
          <button
            type="button"
            className="mt-4 inline-flex h-9 w-12 items-center justify-center text-[#f5f1e8]"
            aria-label="Open navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={25} /> : <Menu size={30} strokeWidth={1.5} />}
          </button>
        </div>

        <div className="hidden items-start justify-end gap-4 xl:flex 2xl:gap-7">
          <span className="mt-4 max-w-[7rem] text-base font-medium leading-tight text-[#f5f1e8]/55 2xl:max-w-none 2xl:text-lg">Available for Work?</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-[#d6b36a]/35 bg-black/20 py-1.5 pl-1.5 pr-5 text-base font-medium text-[#d6b36a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-[#d6b36a]/70 hover:bg-[#d6b36a]/10 2xl:gap-4 2xl:pr-7 2xl:text-lg"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#ffd08a] to-[#f18932] text-black 2xl:h-12 2xl:w-12">
              <ArrowRight size={21} />
            </span>
            Let&apos;s Connect
          </Link>
        </div>

        <button
          type="button"
          className="mt-2 inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-white/15 xl:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="glass mx-auto mt-5 grid max-w-[min(92vw,32rem)] gap-2 rounded-3xl p-4">
          {heroNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-neutral-200 transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-2xl bg-[#d6b36a] px-4 py-3 font-semibold text-black"
          >
            Let&apos;s Connect
          </Link>
        </div>
      ) : null}
    </header>
  );
}
