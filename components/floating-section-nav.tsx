"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

function NavItem({
  href,
  label,
  active
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className="group grid grid-cols-[4.4rem_2rem] items-center gap-2 outline-none"
    >
      <span
        className={`text-right text-[0.66rem] leading-none tracking-normal transition-colors duration-300 ${
          active ? "text-[#d6b36a]" : "text-[#f5f1e8]/28 group-hover:text-[#f5f1e8]/68"
        }`}
      >
        {label}
      </span>
      <span className="flex h-4 items-center">
        <span
          className={`block h-px transition-all duration-300 ${
            active ? "w-8 bg-[#d6b36a]" : "w-5 bg-white/18 group-hover:w-7 group-hover:bg-white/38"
          }`}
        />
      </span>
    </Link>
  );
}

export function FloatingSectionNav() {
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        aria-label="Floating section navigation"
        className="fixed right-2 top-1/2 z-50 hidden -translate-y-1/2 xl:block 2xl:right-4"
        initial={{ opacity: 0, x: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid gap-3">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              active={item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)}
            />
          ))}
        </div>
      </m.nav>
    </LazyMotion>
  );
}
