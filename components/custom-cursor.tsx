"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 38 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 38 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setVisible(event.pointerType === "mouse");
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 rounded-full border border-cyan-200/80 mix-blend-difference md:block"
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    />
  );
}
