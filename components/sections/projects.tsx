import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="section-line px-6 py-8 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.62fr_2.38fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5ad6f]">Featured work</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] text-white md:text-5xl">
            Selected Projects
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300">
            Here are some of my recent projects. Each one tells a unique story.
          </p>
          <Link href="/work" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#d5ad6f]">
            View all projects <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
