import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Freelance graphic design services for brand identity, social media, website design, UI UX, and motion graphics."
};

export default function ServicesPage() {
  return (
    <main className="px-4 pb-[clamp(4rem,8svh,6rem)] pt-[clamp(7rem,14svh,8rem)] md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="A compact creative studio for premium brand execution."
          text="Choose a focused design sprint or combine services into a full launch system."
        />
        <div className="mt-[clamp(2rem,5svh,3rem)] grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article id={service.slug} key={service.slug} className="glass glow-border scroll-mt-28 rounded-[1.25rem] p-[clamp(1.25rem,3vw,1.75rem)]">
                <Icon className="text-[#d5ad6f]" size={28} aria-hidden="true" />
                <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,1.875rem)] font-semibold">{service.title}</h2>
                <p className="mt-4 text-[clamp(0.95rem,2vw,1rem)] leading-8 text-neutral-300">{service.summary}</p>
                <ul className="mt-6 grid gap-3 text-sm text-neutral-200">
                  {service.deliverables.map((item) => (
                    <li key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
