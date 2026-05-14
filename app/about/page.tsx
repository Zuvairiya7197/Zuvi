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
    <main className="pb-[clamp(4rem,8svh,6rem)] pt-[clamp(5.5rem,12svh,7rem)]">
      <AboutPreview />
      <section id="process" className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="A calm process for high-stakes visuals."
            text="The workflow keeps strategy visible, design decisions accountable, and final assets ready for the channels where they need to perform."
          />
          <div className="mt-[clamp(2rem,5svh,3rem)] grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="glass rounded-[1.25rem] p-[clamp(1.25rem,3vw,1.5rem)]">
                  <Icon size={24} className="text-[#d5ad6f]" aria-hidden="true" />
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
