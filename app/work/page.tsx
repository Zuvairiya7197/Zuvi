import type { Metadata } from "next";
import { WorkPageContent } from "@/components/work-page-content";

export const metadata: Metadata = {
  title: "Work",
  description: "Graphic design work by MZ Designs and website projects by We Build Your Brands."
};

type WorkPageProps = {
  searchParams: Promise<{
    mode?: string;
    category?: string;
  }>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;

  return (
    <WorkPageContent
      initialMode={params.mode === "graphic" ? "graphic" : "website"}
      initialCategory={params.category}
    />
  );
}
