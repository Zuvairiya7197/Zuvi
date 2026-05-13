import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected branding, UI UX, web design, and campaign design case studies by Zuvi Studio."
};

export default function WorkPage() {
  return (
    <main className="px-6 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Work"
          title="Premium design work built around business movement."
          text="Explore case studies across beauty technology, fintech, interiors, and SaaS."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </div>
    </main>
  );
}
