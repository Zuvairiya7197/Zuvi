"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { graphicWorkCategories, projects } from "@/lib/data";

type Project = (typeof projects)[number];
type WorkMode = "website" | "graphic";

function GraphicGalleryTile({ project }: { project: Project }) {
  return (
    <figure className="mb-0 break-inside-avoid overflow-hidden border border-[#11100d] bg-[#f8f4ea]">
      <img
        src={project.image}
        alt={`${project.title} ${project.category}`}
        loading="lazy"
        className="h-auto w-full"
      />
    </figure>
  );
}

function TabButton({
  active,
  children,
  count,
  onClick
}: {
  active: boolean;
  children: React.ReactNode;
  count?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${
        active
          ? "border-[#d5ad6f]/60 bg-[#d5ad6f] text-black shadow-[0_0_34px_rgba(213,173,111,0.22)]"
          : "border-white/10 bg-white/[0.035] text-neutral-300 hover:border-[#d5ad6f]/35 hover:text-[#f5f1e8]"
      }`}
    >
      {children}
      {typeof count === "number" ? <span className="ml-2 opacity-70">{count}</span> : null}
    </button>
  );
}

function CategoryButton({
  active,
  label,
  count,
  onClick
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition duration-300 ${
        active
          ? "border-[#d5ad6f]/55 bg-[#d5ad6f]/16 text-[#f5d89d]"
          : "border-white/10 bg-black/20 text-neutral-500 hover:border-[#d5ad6f]/30 hover:text-neutral-200"
      }`}
    >
      {label}
      <span className="ml-2 opacity-60">{count}</span>
    </button>
  );
}

export function WorkPageContent({
  initialMode,
  initialCategory
}: {
  initialMode?: WorkMode;
  initialCategory?: string;
}) {
  const graphicProjects = projects.filter((project) => project.industry === "Graphic Design");
  const websiteProjects = projects.filter((project) => project.industry !== "Graphic Design");
  const websiteCategories = useMemo(
    () => Array.from(new Set(websiteProjects.map((project) => project.category))),
    [websiteProjects]
  );
  const visibleGraphicCategories = graphicWorkCategories.filter((category) =>
    graphicProjects.some((project) => project.category === category)
  );

  const requestedMode = initialMode === "graphic" ? "graphic" : "website";
  const requestedWebsiteCategory =
    initialCategory && websiteCategories.includes(initialCategory)
      ? initialCategory
      : websiteCategories[0] ?? "Website Design";
  const requestedGraphicCategory =
    initialCategory && visibleGraphicCategories.includes(initialCategory)
      ? initialCategory
      : visibleGraphicCategories[0] ?? "Logo Design";

  const [activeMode, setActiveMode] = useState<WorkMode>(requestedMode);
  const [activeWebsiteCategory, setActiveWebsiteCategory] = useState(requestedWebsiteCategory);
  const [activeGraphicCategory, setActiveGraphicCategory] = useState(requestedGraphicCategory);

  const activeWebsiteProjects = websiteProjects.filter((project) => project.category === activeWebsiteCategory);
  const activeGraphicProjects = graphicProjects.filter((project) => project.category === activeGraphicCategory);

  return (
    <main className="relative overflow-hidden px-4 pb-[clamp(4rem,8svh,6rem)] pt-[clamp(7rem,14svh,8rem)] md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_8%,rgba(213,173,111,0.12),transparent_30%),radial-gradient(circle_at_80%_16%,rgba(245,241,232,0.045),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(245,241,232,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(245,241,232,0.75)_1px,transparent_1px)] [background-size:84px_84px]" />

      <div className="relative mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0a08]/62 px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2rem,6svh,4rem)] shadow-[0_30px_110px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#d5ad6f]/70 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d5ad6f]">Selected Work</p>
              <h1 className="mt-4 font-sans text-[clamp(2rem,3.2vw,2.85rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#f5f1e8]">
                Zuvairiya Maryam&apos;s
                <span className="block bg-gradient-to-b from-[#f5f1e8] to-[#d6b36a] bg-clip-text text-transparent">
                  portfolio.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-[clamp(1rem,2vw,1.18rem)] leading-8 text-neutral-300">
                A curated gallery of graphic design work under MZ Designs and website projects under We Build Your
                Brands, shaped with clear positioning, polished visuals, and practical business purpose.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setActiveMode("graphic")}
                className="rounded-[1.1rem] border border-[#d5ad6f]/20 bg-[#d5ad6f]/8 p-5 text-left transition hover:-translate-y-1 hover:border-[#d5ad6f]/35 hover:bg-[#d5ad6f]/12"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5ad6f]">MZ Designs</p>
                <p className="mt-4 font-display text-4xl font-semibold text-[#f5f1e8]">{graphicProjects.length}</p>
                <p className="mt-1 text-sm text-neutral-400">graphic design projects</p>
              </button>
              <Link
                href="https://www.webuildyourbrands.com/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.1rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#d5ad6f]/30 hover:bg-white/[0.055]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5ad6f]">WBYB</p>
                <p className="mt-4 font-display text-4xl font-semibold text-[#f5f1e8]">{websiteProjects.length}</p>
                <p className="mt-1 text-sm text-neutral-400 transition group-hover:text-neutral-200">website projects</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-[clamp(3rem,7svh,5rem)]">
          <div className="mb-7 flex flex-col gap-5 border-b border-white/10 pb-6">
            <div className="flex flex-wrap gap-3">
              <TabButton active={activeMode === "website"} count={websiteProjects.length} onClick={() => setActiveMode("website")}>
                Website Design Work
              </TabButton>
              <TabButton active={activeMode === "graphic"} count={graphicProjects.length} onClick={() => setActiveMode("graphic")}>
                Graphic Design Work
              </TabButton>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeMode === "website"
                ? websiteCategories.map((category) => {
                    const count = websiteProjects.filter((project) => project.category === category).length;
                    return (
                      <CategoryButton
                        key={category}
                        active={activeWebsiteCategory === category}
                        label={category}
                        count={count}
                        onClick={() => setActiveWebsiteCategory(category)}
                      />
                    );
                  })
                : visibleGraphicCategories.map((category) => {
                    const count = graphicProjects.filter((project) => project.category === category).length;
                    return (
                      <CategoryButton
                        key={category}
                        active={activeGraphicCategory === category}
                        label={category}
                        count={count}
                        onClick={() => setActiveGraphicCategory(category)}
                      />
                    );
                  })}
            </div>
          </div>

          {activeMode === "website" ? (
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d5ad6f]">We Build Your Brands</p>
                  <h2 className="mt-2 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-none text-[#f5f1e8]">
                    {activeWebsiteCategory}
                  </h2>
                </div>
                <p className="text-sm text-neutral-500">{activeWebsiteProjects.length} projects</p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {activeWebsiteProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} openLiveUrl />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d5ad6f]">MZ Designs</p>
                  <h2 className="mt-2 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-none text-[#f5f1e8]">
                    {activeGraphicCategory}
                  </h2>
                </div>
                <p className="text-sm text-neutral-500">
                  {activeGraphicProjects.length} project{activeGraphicProjects.length === 1 ? "" : "s"}
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.2rem] border border-[#1f1a12] bg-[#11100d] px-[clamp(1rem,4vw,3rem)] py-[clamp(1rem,3vw,2.25rem)] shadow-[0_30px_90px_rgba(0,0,0,0.38)] [column-gap:1rem] [column-count:2] sm:[column-count:3] lg:[column-count:4] xl:[column-count:5]">
                {activeGraphicProjects.map((project) => (
                  <GraphicGalleryTile key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
