"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FloatingSectionNav = dynamic(
  () => import("@/components/floating-section-nav").then((mod) => mod.FloatingSectionNav),
  { ssr: false }
);

export function FloatingSectionNavLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const update = () => setEnabled(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return enabled ? <FloatingSectionNav /> : null;
}
