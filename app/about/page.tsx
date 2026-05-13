import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/about";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Zuvi Studio's design philosophy, process, and approach to premium graphic design systems."
};

export default function AboutPage() {
  return (
    <main className="pb-24 pt-24">
      <AboutPreview />
      <section className="px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="A calm process for high-stakes visuals."
            text="The workflow keeps strategy visible, design decisions accountable, and final assets ready for the channels where they need to perform."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="glass rounded-[1.5rem] p-6">
                  <Icon size={24} className="text-cyan-200" aria-hidden="true" />
                  <h2 className="mt-5 font-display text-2xl font-semibold">{step.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
