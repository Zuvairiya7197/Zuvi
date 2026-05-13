import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Freelance graphic design services for brand identity, social media, website design, UI UX, and motion graphics."
};

export default function ServicesPage() {
  return (
    <main className="px-6 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="A compact creative studio for premium brand execution."
          text="Choose a focused design sprint or combine services into a full launch system."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.slug} className="glass glow-border rounded-[1.5rem] p-7">
                <Icon className="text-cyan-200" size={28} aria-hidden="true" />
                <h2 className="mt-6 font-display text-3xl font-semibold">{service.title}</h2>
                <p className="mt-4 leading-8 text-neutral-300">{service.summary}</p>
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
