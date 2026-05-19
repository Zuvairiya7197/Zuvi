import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  priority = false,
  openLiveUrl = false
}: {
  project: Project;
  priority?: boolean;
  openLiveUrl?: boolean;
}) {
  const href = openLiveUrl ? project.liveUrl : `/work/${project.slug}`;

  return (
    <Link
      href={href}
      target={openLiveUrl ? "_blank" : undefined}
      rel={openLiveUrl ? "noreferrer" : undefined}
      className="group block focus:outline-none"
    >
      <article className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#050505] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.34)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/[0.16] hover:bg-[#080808] hover:shadow-[0_34px_95px_rgba(0,0,0,0.52)] group-focus-visible:border-[#d5ad6f]/55">
        <div className="relative aspect-[1.18/1] overflow-hidden rounded-[1.25rem] bg-[#111] md:aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${project.title} ${project.industry} design case study`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover saturate-[0.92] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:saturate-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.54))]" />
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f5f1e8]/72 backdrop-blur-md">
            {project.industry === "Graphic Design" ? "MZ Designs" : "WBYB"}
          </div>
        </div>
        <div className="relative px-2 pb-2 pt-5 md:px-3 md:pb-3 md:pt-6">
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#d5ad6f]/78">
                {project.category}
              </p>
              <h3 className="mt-2 text-[clamp(1.45rem,3vw,2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#f5f1e8]">
                {project.title}
              </h3>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-[#d5ad6f] transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#d5ad6f]/38 group-hover:bg-[#d5ad6f] group-hover:text-black">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </div>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-neutral-400">
            <p className="sm:line-clamp-2">{project.solution}</p>
            <p className="border-t border-white/[0.07] pt-4 text-neutral-500">
              <span className="text-[#d5ad6f]/82">Result</span>
              <span className="mx-2 text-white/18">/</span>
              {project.results}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
