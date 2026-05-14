"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [dragCursor, setDragCursor] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 38 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 38 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setVisible(event.pointerType === "mouse");
      setDragCursor(Boolean((event.target as Element | null)?.closest("[data-drag-cursor]")));
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-[70] hidden items-center justify-center rounded-full border border-[#d5ad6f]/85 text-[#f5f1e8] shadow-[0_0_26px_rgba(213,173,111,0.34)] md:flex ${
        dragCursor
          ? "h-12 w-12 bg-black/42 text-[0.5rem] font-semibold uppercase tracking-[0.16em] mix-blend-normal shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_42px_rgba(0,0,0,0.34),0_0_22px_rgba(213,173,111,0.16)] backdrop-blur-md"
          : "h-5 w-5 mix-blend-difference"
      }`}
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    >
      {dragCursor ? (
        <span className="flex items-center gap-0.5">
          <ArrowLeft size={10} strokeWidth={1.5} className="text-[#d6b36a]" />
          <span className="sr-only">Drag</span>
          <ArrowRight size={10} strokeWidth={1.5} className="text-[#d6b36a]" />
        </span>
      ) : null}
    </motion.div>
  );
}
