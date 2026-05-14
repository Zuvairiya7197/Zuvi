import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected website and brand experience projects by Zuvi Studio."
};

export default function WorkPage() {
  return (
    <main className="px-4 pb-[clamp(4rem,8svh,6rem)] pt-[clamp(7rem,14svh,8rem)] md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Work"
          title="Websites built to earn trust faster."
          text="Explore real projects across service brands, education, learning platforms, and portfolio experiences."
        />
        <div className="mt-[clamp(2rem,5svh,3rem)] grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </div>
    </main>
  );
}
