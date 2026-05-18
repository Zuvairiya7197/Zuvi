import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";

const ServicesPreview = dynamic(() => import("@/components/sections/services").then((mod) => mod.ServicesPreview));
const FeaturedProjects = dynamic(() => import("@/components/sections/projects").then((mod) => mod.FeaturedProjects));
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then((mod) => mod.Testimonials));
const ContactSection = dynamic(() => import("@/components/sections/contact").then((mod) => mod.ContactSection));

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
