import Link from "next/link";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[#d5ad6f]/12 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-4xl font-bold tracking-[0.08em] text-[#d5ad6f]">ZUVI.</p>
        </div>
        <nav className="flex flex-wrap gap-8 text-xs uppercase tracking-[0.12em] text-neutral-300" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#d5ad6f]">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-neutral-500">© 2024 Zuvi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
