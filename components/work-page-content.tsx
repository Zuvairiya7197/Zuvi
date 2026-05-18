"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Laptop, Maximize2, Palette, X } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { graphicWorkCategories, projects } from "@/lib/data";

type Project = (typeof projects)[number];
type WorkMode = "website" | "graphic";

function GraphicGalleryTile({
  project,
  index,
  onOpen
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group mb-8 block w-full break-inside-avoid text-left focus:outline-none"
      aria-label={`Preview ${project.title}`}
    >
      <figure className="relative overflow-hidden transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-[#d5ad6f]/55">
        <img
          src={project.image}
          alt={`${project.title} ${project.category}`}
          loading={index < 6 ? "eager" : "lazy"}
          className="h-auto w-full object-contain transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.58))] opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex translate-y-3 items-center justify-between gap-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#f5d89d]">
              {project.category}
            </p>
            <p className="mt-1 line-clamp-1 text-sm font-medium text-white">
              {project.title}
            </p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/18 bg-black/48 text-[#f5d89d] backdrop-blur-md">
            <Maximize2 size={15} aria-hidden="true" />
          </span>
        </div>
      </figure>
    </button>
  );
}

function GraphicPreviewLightbox({
  project,
  currentIndex,
  total,
  onClose,
  onPrevious,
  onNext
}: {
  project: Project;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/88 px-4 py-6 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
    >
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-[#f5f1e8] transition hover:border-[#d5ad6f]/45 hover:bg-[#d5ad6f] hover:text-black"
      >
        <X size={18} />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={onPrevious}
        className="absolute left-5 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-[#f5f1e8] transition hover:border-[#d5ad6f]/45 hover:bg-[#d5ad6f] hover:text-black md:grid"
      >
        <ChevronLeft size={21} />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={onNext}
        className="absolute right-5 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-[#f5f1e8] transition hover:border-[#d5ad6f]/45 hover:bg-[#d5ad6f] hover:text-black md:grid"
      >
        <ChevronRight size={21} />
      </button>

      <div className="grid max-h-[90svh] w-full max-w-6xl gap-4">
        <div className="min-h-0 overflow-hidden rounded-[1.5rem] bg-[#f6f2e8] p-[clamp(0.75rem,2vw,1.25rem)] shadow-[0_32px_120px_rgba(0,0,0,0.62)]">
          <img
            src={project.image}
            alt={`${project.title} ${project.category}`}
            className="mx-auto max-h-[74svh] w-auto max-w-full object-contain"
          />
        </div>
        <div className="flex items-center justify-between gap-4 px-1">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#d5ad6f]">
              {project.category}
            </p>
            <p className="mt-1 text-sm text-[#f5f1e8]/78">{project.title}</p>
          </div>
          <p className="text-xs text-neutral-500">
            {currentIndex + 1} / {total}
          </p>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  active,
  children,
  icon,
  onClick
}: {
  active: boolean;
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex h-11 items-center justify-center overflow-hidden rounded-full border text-xs font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-12 sm:text-[0.82rem] ${
        active
          ? "min-w-0 flex-[1_1_0] border-[#d5ad6f]/45 bg-[#d5ad6f] px-4 text-black shadow-[0_14px_42px_rgba(213,173,111,0.18)] sm:px-5"
          : "flex-[0_0_3rem] border-white/10 bg-white/[0.025] px-0 text-neutral-300 hover:border-[#d5ad6f]/30 hover:bg-white/[0.045] hover:text-[#f5f1e8] md:flex-[0_0_3.75rem]"
      }`}
    >
      <span className={`whitespace-nowrap transition-all duration-500 ${active ? "max-w-[18rem] opacity-100" : "max-w-0 opacity-0"}`}>
        {children}
      </span>
      <span className={`${active ? "ml-3 opacity-80" : "ml-0 opacity-90"} transition-all duration-500`}>
        {icon}
      </span>
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
      className={`rounded-full border px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.12em] transition duration-300 sm:px-3.5 sm:text-[0.62rem] ${
        active
          ? "border-[#d5ad6f]/50 bg-[#d5ad6f]/12 text-[#f5d89d]"
          : "border-white/10 bg-black/10 text-neutral-500 hover:border-[#d5ad6f]/25 hover:bg-white/[0.025] hover:text-neutral-200"
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
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const activeWebsiteProjects = websiteProjects.filter((project) => project.category === activeWebsiteCategory);
  const activeGraphicProjects = graphicProjects.filter((project) => project.category === activeGraphicCategory);
  const previewIndex = previewProject
    ? activeGraphicProjects.findIndex((project) => project.slug === previewProject.slug)
    : -1;

  const openGraphicPreview = (project: Project) => setPreviewProject(project);
  const closeGraphicPreview = () => setPreviewProject(null);
  const showPreviousGraphic = () => {
    if (previewIndex < 0) return;
    const previousIndex = (previewIndex - 1 + activeGraphicProjects.length) % activeGraphicProjects.length;
    setPreviewProject(activeGraphicProjects[previousIndex]);
  };
  const showNextGraphic = () => {
    if (previewIndex < 0) return;
    const nextIndex = (previewIndex + 1) % activeGraphicProjects.length;
    setPreviewProject(activeGraphicProjects[nextIndex]);
  };

  return (
    <main className="relative overflow-hidden bg-black px-4 pb-[clamp(4rem,8svh,6rem)] pt-[clamp(7rem,14svh,8rem)] md:px-8">

      <div className="relative mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[1.25rem] border border-white/[0.07] bg-black/34 px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(2.25rem,6svh,4.5rem)] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-x-[6%] top-0 h-px bg-gradient-to-r from-transparent via-[#d5ad6f]/45 to-transparent" />
          <div className="grid gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d5ad6f]">Selected Work</p>
              <h1 className="mt-5 font-sans text-[clamp(2.35rem,4.4vw,4.6rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#f5f1e8]">
                Zuvairiya Maryam&apos;s
                <span className="block bg-gradient-to-b from-[#f5f1e8] to-[#d6b36a] bg-clip-text text-transparent">
                  portfolio.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-[clamp(0.98rem,1.4vw,1.08rem)] leading-8 text-neutral-300/86">
                A curated gallery of graphic design work under MZ Designs and website projects under We Build Your
                Brands, shaped with clear positioning, polished visuals, and practical business purpose.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setActiveMode("graphic")}
                className="rounded-[1rem] border border-[#d5ad6f]/22 bg-[#d5ad6f]/[0.055] p-6 text-left transition hover:-translate-y-1 hover:border-[#d5ad6f]/34 hover:bg-[#d5ad6f]/10"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d5ad6f]">MZ Designs</p>
                <p className="mt-7 font-display text-[clamp(2.25rem,4vw,3rem)] font-semibold leading-none text-[#f5f1e8]">{graphicProjects.length}</p>
                <p className="mt-1 text-sm text-neutral-400">graphic design projects</p>
              </button>
              <Link
                href="https://www.webuildyourbrands.com/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1rem] border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[#d5ad6f]/25 hover:bg-white/[0.045]"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d5ad6f]">WBYB</p>
                <p className="mt-7 font-display text-[clamp(2.25rem,4vw,3rem)] font-semibold leading-none text-[#f5f1e8]">{websiteProjects.length}</p>
                <p className="mt-1 text-sm text-neutral-400 transition group-hover:text-neutral-200">website projects</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-[clamp(3rem,7svh,5rem)]">
          <div className="mb-8 flex flex-col items-center gap-4 border-y border-white/[0.08] py-5">
            <div className="flex w-full max-w-[36rem] justify-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] p-1.5">
              <TabButton active={activeMode === "website"} icon={<Laptop size={18} strokeWidth={1.8} />} onClick={() => setActiveMode("website")}>
                Website Design Work
              </TabButton>
              <TabButton active={activeMode === "graphic"} icon={<Palette size={18} strokeWidth={1.8} />} onClick={() => setActiveMode("graphic")}>
                Graphic Design Work
              </TabButton>
            </div>

            <div className="flex max-w-5xl flex-wrap justify-center gap-2">
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
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#d5ad6f]">We Build Your Brands</p>
                  <h2 className="mt-2 font-display text-[clamp(1.55rem,4vw,2.55rem)] font-semibold leading-none text-[#f5f1e8]">
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
            <div className="mx-auto max-w-[1180px]">
              <div className="mx-auto px-[clamp(1.25rem,4vw,4rem)] py-[clamp(1.5rem,4vw,3rem)] [column-gap:2rem] [column-count:1] sm:[column-count:2] lg:[column-count:3]">
                {activeGraphicProjects.map((project, index) => (
                  <GraphicGalleryTile
                    key={project.slug}
                    project={project}
                    index={index}
                    onOpen={openGraphicPreview}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
      {previewProject && previewIndex >= 0 ? (
        <GraphicPreviewLightbox
          project={previewProject}
          currentIndex={previewIndex}
          total={activeGraphicProjects.length}
          onClose={closeGraphicPreview}
          onPrevious={showPreviousGraphic}
          onNext={showNextGraphic}
        />
      ) : null}
    </main>
  );
}
