import type { Metadata } from "next";
import { AboutServicesOrbit } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Zuvairiya Maryam, founder behind MZ Designs and co-founder at We Build Your Brands."
};

export default function AboutPage() {
  return (
    <main className="pb-[clamp(4rem,8svh,6rem)] pt-[clamp(5.5rem,12svh,7rem)]">
      <AboutServicesOrbit />
    </main>
  );
}
