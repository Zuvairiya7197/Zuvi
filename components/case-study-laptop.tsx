"use client";

import dynamic from "next/dynamic";

const LaptopScene = dynamic(() => import("@/components/three/laptop-scene").then((mod) => mod.LaptopScene), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[2rem] bg-white/[0.03]" />
});

export function CaseStudyLaptop({ title }: { title: string }) {
  return <LaptopScene title={title} />;
}
