"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previousScrollBehavior;
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
