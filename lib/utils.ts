import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getProject(slug: string) {
  return import("./data").then(({ projects }) => projects.find((project) => project.slug === slug));
}
