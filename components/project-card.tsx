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
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0d0c0a]/72 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.055)] backdrop-blur-xl transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-[#d5ad6f]/35 hover:shadow-[0_34px_110px_rgba(0,0,0,0.48),0_0_42px_rgba(213,173,111,0.1),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-15`} />
        <div className="relative aspect-[1.18/1] overflow-hidden md:aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${project.title} ${project.industry} design case study`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover saturate-[0.88] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:saturate-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.84)),radial-gradient(circle_at_20%_10%,rgba(245,241,232,0.16),transparent_28%)]" />
          <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/38 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#f5f1e8]/74 backdrop-blur-md">
            {project.industry === "Graphic Design" ? "MZ Designs" : "WBYB"}
          </div>
        </div>
        <div className="relative p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight text-[#f5f1e8]">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-neutral-400">
                  {project.industry}
                </span>
                <span className="rounded-full border border-[#d5ad6f]/25 bg-[#d5ad6f]/10 px-3 py-1 text-xs text-[#d5ad6f]">
                  {project.category}
                </span>
              </div>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d5ad6f]/30 bg-[#d5ad6f]/8 text-[#d5ad6f] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 group-hover:rotate-12 group-hover:bg-[#d5ad6f] group-hover:text-black">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </div>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-neutral-300/90">
            <p>{project.solution}</p>
            <p className="border-t border-white/10 pt-4">
              <span className="text-[#d5ad6f]">Result:</span> {project.results}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
