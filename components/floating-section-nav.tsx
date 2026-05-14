"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "top", label: "Overview" },
  { id: "trust", label: "Trust" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

function NavItem({
  id,
  label,
  active
}: {
  id: string;
  label: string;
  active: boolean;
}) {
  return (
    <a
      href={`#${id}`}
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
    </a>
  );
}

export function FloatingSectionNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("top");
  const ids = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.08, 0.18, 0.32, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, pathname]);

  if (pathname !== "/") return null;

  return (
    <motion.nav
      aria-label="Floating section navigation"
      className="fixed right-2 top-1/2 z-50 hidden -translate-y-1/2 xl:block 2xl:right-4"
      initial={{ opacity: 0, x: 24, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid gap-3">
        {navItems.map((item) => (
          <NavItem key={item.id} id={item.id} label={item.label} active={activeId === item.id} />
        ))}
      </div>
    </motion.nav>
  );
}
