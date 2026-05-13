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
      <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-neutral-300 md:text-lg">{text}</p> : null}
    </div>
  );
}
