import { trustLogos } from "@/lib/data";

export function Trust() {
  const logos = [...trustLogos, ...trustLogos];

  return (
    <section id="trust" className="section-line overflow-hidden border-b border-[#d5ad6f]/12 bg-[#f5f1e8] py-[clamp(1.25rem,3svh,2rem)] text-[#10100e]">
      <div className="mx-auto mb-[clamp(1rem,2svh,1.5rem)] flex max-w-7xl items-center gap-6 px-5 text-center md:px-8">
        <span className="h-px flex-1 bg-black/12" />
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#8c6a3b]">Design systems, visual experiences</p>
        <span className="h-px flex-1 bg-black/12" />
      </div>
      <div className="marquee flex w-max gap-16">
        {logos.map((logo, index) => (
          <span
            key={`${logo}-${index}`}
            className="font-display text-[clamp(2rem,4.4vw,3.75rem)] font-bold tracking-[-0.04em] text-black/60 transition hover:text-[#8c6a3b]"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
