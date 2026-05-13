import { trustLogos } from "@/lib/data";

export function Trust() {
  const logos = [...trustLogos, ...trustLogos];

  return (
    <section id="trust" className="section-line overflow-hidden border-b border-[#d5ad6f]/12 py-7">
      <div className="mx-auto mb-5 flex max-w-7xl items-center gap-6 px-6 text-center md:px-8">
        <span className="h-px flex-1 bg-[#d5ad6f]/18" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d5ad6f]">Trusted by amazing brands</p>
        <span className="h-px flex-1 bg-[#d5ad6f]/18" />
      </div>
      <div className="marquee flex w-max gap-16">
        {logos.map((logo, index) => (
          <span
            key={`${logo}-${index}`}
            className="text-xl font-semibold tracking-[-0.04em] text-white/56 transition hover:text-[#d5ad6f]"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
