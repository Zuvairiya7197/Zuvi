"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const heroNavItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Projects" },
  { href: "/about#process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 xl:px-8 xl:pt-5">
      <div className="mx-auto grid max-w-[1820px] grid-cols-[1fr_auto] items-start gap-4 xl:grid-cols-[auto_1fr_auto]">
        <div className="hidden items-start gap-5 xl:flex">
          <button
            type="button"
            className="group mt-2 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 text-[#f5f1e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_38px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-500 ease-out hover:-translate-y-0.5 hover:border-[#d6b36a]/55 hover:bg-white/[0.045] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_22px_48px_rgba(0,0,0,0.32)]"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative h-7 w-7" aria-hidden="true">
              <span className="absolute inset-0 rounded-full border border-[#d6b36a]/0 transition duration-500 ease-out group-hover:scale-110 group-hover:border-[#d6b36a]/25" />
              <span
                className={`absolute left-[5px] top-[7px] h-px rounded-full bg-[#f5f1e8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#d6b36a] ${
                  open ? "w-[18px] translate-y-[6px] rotate-45" : "w-[18px] group-hover:w-[21px]"
                }`}
              />
              <span
                className={`absolute left-[5px] top-1/2 h-px -translate-y-1/2 rounded-full bg-[#f5f1e8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#d6b36a] ${
                  open ? "w-0 translate-x-2 opacity-0" : "w-[12px] group-hover:w-[18px]"
                }`}
              />
              <span
                className={`absolute bottom-[7px] right-[5px] h-px rounded-full bg-[#f5f1e8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#d6b36a] ${
                  open ? "w-[18px] -translate-y-[6px] -rotate-45" : "w-[18px] group-hover:w-[21px]"
                }`}
              />
              <span
                className={`absolute right-[3px] top-[3px] h-1.5 w-1.5 rounded-full border border-[#d6b36a]/80 bg-black transition-all duration-500 ease-out group-hover:scale-125 group-hover:bg-[#d6b36a] ${
                  open ? "scale-0 opacity-0" : "opacity-80"
                }`}
              />
            </span>
          </button>
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
        </div>

        <Link href="/" className="flex items-start gap-3 leading-none xl:hidden" aria-label="Zuvi Studio home">
          <span>
            <span className="block font-display text-[clamp(2rem,8vw,2.65rem)] font-bold tracking-[0.04em] text-[#d6b36a] 2xl:text-[3.2rem]">
              ZUVI.
            </span>
            <span className="mt-1 block text-xs font-medium tracking-[0.04em] text-[#f5f1e8]/45 2xl:text-sm">
              Graphic Designer
            </span>
          </span>
        </Link>

        <div className="hidden items-start justify-end gap-3 xl:col-start-3 xl:flex 2xl:gap-4">
          <span className="mt-3 whitespace-nowrap text-sm font-medium leading-tight text-[#f5f1e8]/52 2xl:text-[0.95rem]">Available for Work?</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/35 bg-black/20 py-1 pl-1 pr-4 text-sm font-medium text-[#d6b36a] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-[#d6b36a]/70 hover:bg-[#d6b36a]/10 2xl:gap-3 2xl:pr-5 2xl:text-[0.95rem]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#ffd08a] to-[#f18932] text-black 2xl:h-10 2xl:w-10">
              <ArrowRight size={18} />
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
