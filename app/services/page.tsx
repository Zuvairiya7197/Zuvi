import type { Metadata } from "next";
import { ServicesPreview } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Freelance graphic design services for logo design, business cards, posters, flyers, social media posts, advertisements, product labels, and website design."
};

export default function ServicesPage() {
  return (
    <main className="bg-black pt-[clamp(5.5rem,10svh,7rem)]">
      <ServicesPreview />
    </main>
  );
}
