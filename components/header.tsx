"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const heroNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <header ref={headerRef} className="fixed left-0 right-0 top-0 z-50 border-b border-[#d6b36a]/12 bg-black/78 px-4 pb-3 pt-3 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-6 md:pb-4 md:pt-4 xl:px-8 xl:pb-4 xl:pt-5">
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
          <Link href="/" className="flex items-start gap-3 leading-none" aria-label="Zuvairiya Maryam portfolio home">
            <span>
              <span className="block font-display text-[clamp(2rem,8vw,2.65rem)] font-bold tracking-[0.04em] text-[#d6b36a] 2xl:text-[3.2rem]">
                ZUVI.
              </span>
              <span className="mt-1 block text-xs font-medium tracking-[0.04em] text-[#f5f1e8]/45 2xl:text-sm">
                Zuvairiya Maryam
              </span>
            </span>
          </Link>
        </div>

        <Link href="/" className="flex items-start gap-3 leading-none xl:hidden" aria-label="Zuvairiya Maryam portfolio home">
          <span>
            <span className="block font-display text-[clamp(1.8rem,7vw,2.65rem)] font-bold tracking-[0.04em] text-[#d6b36a] 2xl:text-[3.2rem]">
              ZUVI.
            </span>
            <span className="mt-0.5 block text-[0.68rem] font-medium tracking-[0.04em] text-[#f5f1e8]/45 sm:mt-1 sm:text-xs 2xl:text-sm">
              Zuvairiya Maryam
            </span>
          </span>
        </Link>

        <div className="hidden items-start justify-end gap-3 xl:col-start-3 xl:flex 2xl:gap-4">
          <Link
            href="https://www.webuildyourbrands.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-1 inline-flex h-12 items-center overflow-hidden rounded-full border border-[#d6b36a]/18 bg-black/28 px-4 text-sm font-medium leading-none text-[#d6b36a]/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:inset-[-1px] before:rounded-full before:bg-[linear-gradient(115deg,rgba(214,179,106,0.34),rgba(22,216,255,0),rgba(124,60,255,0),rgba(214,179,106,0.28))] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-transparent hover:bg-[#0b0b0b]/86 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_48px_rgba(0,0,0,0.38),0_0_30px_rgba(214,179,106,0.16)] hover:before:opacity-100 2xl:text-[0.95rem]"
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(214,179,106,0.16),transparent_36%),radial-gradient(circle_at_82%_15%,rgba(124,60,255,0),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100 group-hover:bg-[radial-gradient(circle_at_20%_50%,rgba(214,179,106,0.2),transparent_36%),radial-gradient(circle_at_82%_15%,rgba(124,60,255,0.16),transparent_38%)]" />
            <span className="pointer-events-none absolute inset-y-0 -left-14 w-12 rotate-12 bg-white/18 blur-md transition-transform duration-700 ease-out group-hover:translate-x-44" />
            <span className="relative whitespace-nowrap transition duration-500 group-hover:text-white">Need a Website?</span>
            <span className="relative ml-0 grid h-7 w-0 place-items-center overflow-hidden rounded-full border border-white/0 bg-white/[0.04] opacity-0 shadow-[0_0_18px_rgba(214,179,106,0.14)] transition-all duration-500 group-hover:ml-2 group-hover:w-12 group-hover:translate-x-0.5 group-hover:border-white/12 group-hover:opacity-100 group-hover:shadow-[0_0_22px_rgba(214,179,106,0.22)]">
              <Image
                src="/wbyblogo.webp"
                alt="WBYB"
                fill
                sizes="48px"
                className="object-contain px-1.5 opacity-0 saturate-125 transition duration-500 group-hover:opacity-100"
              />
            </span>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#242424] py-1 pl-1 pr-5 text-sm font-medium text-[#f5f1e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_38px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2c2c2c] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_46px_rgba(0,0,0,0.36)] 2xl:pr-6 2xl:text-[0.95rem]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#f2d27e] via-[#d6b36a] to-[#b68035] text-black shadow-[0_0_18px_rgba(214,179,106,0.24)] transition duration-300 group-hover:scale-105 2xl:h-10 2xl:w-10">
              <ArrowRight size={18} />
            </span>
            Let&apos;s Connect
          </Link>
        </div>

        <button
          type="button"
          className="mt-1 inline-flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-white/15 bg-black/25 backdrop-blur-md xl:hidden"
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
              className="rounded-2xl px-4 py-3.5 text-neutral-200 transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-2xl bg-[#d6b36a] px-4 py-3.5 font-semibold text-black"
          >
            Let&apos;s Connect
          </Link>
        </div>
      ) : null}
    </header>
  );
}
