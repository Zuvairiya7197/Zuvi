import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  className
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5ad6f]">{eyebrow}</p>
      <h2 className="mt-3 font-sans text-[clamp(2rem,3.2vw,2.85rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#f5f1e8]">{title}</h2>
      {text ? <p className="mt-5 text-[clamp(0.95rem,2vw,1.125rem)] leading-8 text-neutral-300">{text}</p> : null}
    </div>
  );
}
