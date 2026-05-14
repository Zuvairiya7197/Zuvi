import { ContactSection } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/projects";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <ServicesPreview />
      <FeaturedProjects />
      <ContactSection />
    </main>
  );
}
