import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CaseStudyLaptop } from "@/components/case-study-laptop";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

type CaseStudyProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: `${project.title} ${project.industry} case study covering problem, solution, and results.`,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.results,
      images: [{ url: project.image, alt: `${project.title} case study visual` }]
    }
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const story = [
    { label: "Problem", text: project.problem },
    { label: "Solution", text: project.solution },
    { label: "Results", text: project.results }
  ];

  return (
    <main>
      <section className="min-h-[100svh] px-4 pb-[clamp(3rem,7svh,4rem)] pt-[clamp(7rem,14svh,8rem)] md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d5ad6f]">{project.industry}</p>
            <h1 className="mt-5 font-display text-[clamp(3rem,10vw,4.5rem)] font-semibold leading-tight">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-[clamp(1rem,2vw,1.125rem)] leading-8 text-neutral-300">{project.solution}</p>
          </div>
          <div className="h-[clamp(22rem,58svh,38.75rem)]">
            <CaseStudyLaptop title={project.title} />
          </div>
        </div>
      </section>
      <section className="px-4 py-[clamp(4rem,8svh,6rem)] md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {story.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <article className="glass h-full rounded-[1.25rem] p-[clamp(1.25rem,3vw,1.75rem)]">
                <p className="text-sm uppercase tracking-[0.28em] text-[#d5ad6f]">{item.label}</p>
                <p className="mt-6 text-[clamp(1rem,2vw,1.125rem)] leading-8 text-neutral-200">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="px-4 py-[clamp(4rem,8svh,6rem)] md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={project.image}
                  alt={`${project.title} brand design before direction`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="scale-105 object-cover saturate-50"
                />
                <div className="absolute inset-0 bg-black/35" />
                <p className="absolute bottom-6 left-6 rounded-full bg-black/60 px-4 py-2 text-sm">Before</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={project.image}
                  alt={`${project.title} premium design after direction`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 mix-blend-screen`} />
                <p className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                  After
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
