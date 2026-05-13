import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group glow-border block rounded-lg">
      <article className="glass overflow-hidden rounded-lg">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} ${project.industry} design case study`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/12 to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{project.industry}</p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d5ad6f]/35 bg-[#d5ad6f]/10 text-[#d5ad6f] transition group-hover:bg-[#d5ad6f] group-hover:text-black">
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
          <div className="sr-only mt-6 grid gap-4 text-sm leading-6 text-neutral-300">
            <p>
              <span className="text-white">Problem:</span> {project.problem}
            </p>
            <p>
              <span className="text-white">Solution:</span> {project.solution}
            </p>
            <p>
              <span className="text-white">Results:</span> {project.results}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
