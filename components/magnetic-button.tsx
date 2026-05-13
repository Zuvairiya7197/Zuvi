"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
    <motion.div
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
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
          variant === "primary"
            ? "rounded bg-gradient-to-br from-[#f4d79d] to-[#9b7040] text-black hover:brightness-110"
            : "rounded border border-[#d5ad6f]/45 bg-transparent text-white hover:bg-[#d5ad6f]/10",
          className
        )}
        {...props}
      >
        {children}
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
