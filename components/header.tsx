"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-1">
        <Link href="/" className="font-display text-3xl font-bold tracking-[0.08em] text-[#d5ad6f] md:text-4xl" aria-label="Zuvi Studio home">
          ZUVI.
        </Link>
        <nav className="hidden items-center gap-5 lg:gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-2 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-200 transition hover:text-[#d5ad6f]",
                pathname === item.href &&
                  "text-[#d5ad6f] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#d5ad6f]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded border border-[#d5ad6f]/55 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#d5ad6f] hover:text-black md:inline-flex"
        >
          Let’s work together
          <ArrowUpRight size={14} />
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="glass mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl p-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-neutral-200 transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
