import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Zuvi Studio for premium freelance graphic design, branding, UI UX, website design, and motion design."
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
