"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LazyMotion, domAnimation, m, useMotionValue, useSpring } from "framer-motion";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function MagneticButton({ className, children, variant = "primary", ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18 });
  const springY = useSpring(y, { stiffness: 240, damping: 18 });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        style={{ x: springX, y: springY }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
          y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <Link
          className={cn(
            "group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition duration-500",
            "before:absolute before:inset-0 before:translate-x-[-110%] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition before:duration-700 hover:before:translate-x-[110%]",
            variant === "primary"
              ? "border border-[#f4d79d]/40 bg-[#f5f1e8] text-[#070707] shadow-[0_18px_55px_rgba(0,0,0,0.28)] hover:bg-[#d5ad6f]"
              : "border border-[#d5ad6f]/45 bg-black/25 text-white backdrop-blur-md hover:bg-[#d5ad6f]/12",
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <ArrowUpRight size={16} className="relative z-10 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </m.div>
    </LazyMotion>
  );
}
