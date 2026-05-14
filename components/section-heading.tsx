import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  className
}: {
  eyebrow: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5ad6f]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[clamp(2.25rem,8vw,3.75rem)] font-semibold leading-[0.98] text-white">{title}</h2>
      {text ? <p className="mt-5 text-[clamp(0.95rem,2vw,1.125rem)] leading-8 text-neutral-300">{text}</p> : null}
    </div>
  );
}
