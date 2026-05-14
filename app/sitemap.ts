import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const baseUrl = "https://zuvi.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/about", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const work = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...pages, ...work];
}
