import type { Metadata } from "next";
import { WorkPageContent } from "@/components/work-page-content";

export const metadata: Metadata = {
  title: "Work",
  description: "Graphic design work by MZ Designs and website projects by We Build Your Brands."
};

export default function WorkPage() {
  return <WorkPageContent />;
}
