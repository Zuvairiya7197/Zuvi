import { AboutPreview } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/projects";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <ServicesPreview />
      <FeaturedProjects />
      <AboutPreview />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
