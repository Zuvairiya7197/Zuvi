"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "top", label: "Overview" },
  { id: "trust", label: "Branding" },
  { id: "services", label: "UI/UX" },
  { id: "projects", label: "Packaging" },
  { id: "contact", label: "Contact" }
];

function LiquidIndicator() {
  return (
    <span className="relative block h-5 w-11 overflow-visible">
      <motion.span
        className="absolute left-0 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent shadow-[0_0_18px_rgba(214,179,106,0.75)]"
        animate={{ scaleX: [0.72, 1, 0.78], opacity: [0.75, 1, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute left-2 top-1/2 h-3 w-8 -translate-y-1/2 rounded-[50%] border-t border-[#d6b36a]"
        animate={{ rotate: [0, 2, -2, 0], y: [-1, 1, -1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f4d79d] shadow-[0_0_16px_rgba(244,215,157,0.9)]"
        animate={{ x: [-3, 2, -3], scale: [0.8, 1.12, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}

function NavItem({
  id,
  label,
  active
}: {
  id: string;
  label: string;
  active: boolean;
}) {
  const hoverX = useMotionValue(0);
  const springX = useSpring(hoverX, { stiffness: 180, damping: 18, mass: 0.4 });
  const textX = useTransform(springX, [0, 1], [0, -4]);
  const lineX = useTransform(springX, [0, 1], [0, 5]);

  return (
    <motion.a
      href={`#${id}`}
      className="group grid grid-cols-[1fr_3rem] items-center gap-3 outline-none"
      onMouseEnter={() => hoverX.set(1)}
      onMouseLeave={() => hoverX.set(0)}
      whileHover={{ x: -3 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span
        style={{ x: textX }}
        className={`text-right text-[0.68rem] leading-none tracking-[0.02em] transition-colors duration-500 ${
          active ? "text-[#d6b36a]" : "text-[#f5f1e8]/34 group-hover:text-[#f5f1e8]/78"
        }`}
      >
        {label}
      </motion.span>
      <motion.span style={{ x: lineX }} className="relative flex h-5 items-center">
        {active ? (
          <LiquidIndicator />
        ) : (
          <span className="block h-px w-9 bg-gradient-to-r from-white/8 via-white/24 to-transparent transition-all duration-500 group-hover:w-11 group-hover:via-[#d6b36a]/55" />
        )}
      </motion.span>
    </motion.a>
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
      className="fixed right-[clamp(1.1rem,2.5vw,2.6rem)] top-1/2 z-50 hidden -translate-y-1/2 rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-5 shadow-[0_24px_90px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl xl:block"
      initial={{ opacity: 0, x: 24, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b36a]/45 to-transparent" />
      <div className="grid gap-4">
        {navItems.map((item) => (
          <NavItem key={item.id} id={item.id} label={item.label} active={activeId === item.id} />
        ))}
      </div>
    </motion.nav>
  );
}
