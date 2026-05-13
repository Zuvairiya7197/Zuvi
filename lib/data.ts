import { ArrowUpRight, BadgeCheck, Brush, Clapperboard, Gem, Globe2, Layout, PenTool, Sparkles } from "lucide-react";

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Brand Identity",
    slug: "brand-identity",
    icon: Gem,
    summary: "Premium visual systems with logos, typography, color, and launch-ready guidelines.",
    deliverables: ["Logo systems", "Brand guidelines", "Launch assets"]
  },
  {
    title: "Social Media Design",
    slug: "social-media-design",
    icon: Brush,
    summary: "Scroll-stopping campaign visuals built as repeatable templates for fast teams.",
    deliverables: ["Campaign kits", "Content systems", "Ad creatives"]
  },
  {
    title: "Website Design",
    slug: "website-design",
    icon: Globe2,
    summary: "Cinematic web experiences with clear conversion paths and responsive polish.",
    deliverables: ["Landing pages", "Web art direction", "Design systems"]
  },
  {
    title: "UI UX Design",
    slug: "ui-ux-design",
    icon: Layout,
    summary: "Sharp product interfaces that reduce friction and make complex actions feel simple.",
    deliverables: ["Wireframes", "Product UI", "Prototype flows"]
  },
  {
    title: "Motion Graphics",
    slug: "motion-graphics",
    icon: Clapperboard,
    summary: "Elegant motion assets for launches, social stories, product reveals, and brand films.",
    deliverables: ["Logo motion", "Launch reels", "Microinteractions"]
  }
];

export const projects = [
  {
    slug: "aurelia-labs",
    title: "Aurelia Labs",
    industry: "Beauty Technology",
    problem: "A premium skincare startup needed to look clinical, desirable, and trustworthy before retail launch.",
    solution:
      "Built a luminous identity system, product page direction, and a flexible social launch kit with motion cues.",
    results: "2.8x increase in waitlist conversion and a retail buyer deck approved in the first round.",
    image: "/work-aurelia.svg",
    accent: "from-cyan-300 to-violet-400"
  },
  {
    slug: "northline-capital",
    title: "Northline Capital",
    industry: "Fintech",
    problem: "The fund’s old identity felt generic and lacked the confidence required for institutional clients.",
    solution:
      "Designed a restrained identity, editorial website, investor presentation system, and data-led visual language.",
    results: "Raised perceived credibility, shortened pitch prep time by 46%, and improved partner recall.",
    image: "/work-northline.svg",
    accent: "from-blue-300 to-cyan-200"
  },
  {
    slug: "velora-studio",
    title: "Velora Studio",
    industry: "Interior Design",
    problem: "A boutique interiors team needed a portfolio that matched the value of their luxury residential work.",
    solution:
      "Created a tactile brand refresh, immersive case study templates, and art-directed image treatments.",
    results: "Booked three high-ticket consultations within two weeks of launch.",
    image: "/work-velora.svg",
    accent: "from-violet-300 to-fuchsia-300"
  },
  {
    slug: "motive-grid",
    title: "Motive Grid",
    industry: "SaaS",
    problem: "A B2B platform had powerful features, but the interface and marketing visuals felt dense and cold.",
    solution:
      "Rebuilt the UI hierarchy, crafted product storytelling visuals, and designed a scalable component language.",
    results: "Reduced demo drop-off by 31% and lifted trial signups by 64%.",
    image: "/work-motive.svg",
    accent: "from-cyan-200 to-blue-500"
  }
];

export const testimonials = [
  {
    quote:
      "The final system felt expensive without feeling loud. Our deck, website, and social presence finally speak the same language.",
    name: "Mira Chen",
    role: "Founder, Aurelia Labs"
  },
  {
    quote:
      "Zuvi translated a complex service into visuals people understood immediately. The work changed how prospects perceived us.",
    name: "Arman Reid",
    role: "Partner, Northline Capital"
  },
  {
    quote:
      "Every interaction felt considered. The design is beautiful, but the strategy behind it is what made it convert.",
    name: "Leah Morgan",
    role: "Creative Director, Velora Studio"
  }
];

export const stats = [
  { value: "48", suffix: "+", label: "brand systems launched" },
  { value: "7", suffix: "yrs", label: "design leadership" },
  { value: "92", suffix: "%", label: "repeat client rate" }
];

export const blogPosts = [
  {
    slug: "premium-brand-identity-system",
    title: "How to Build a Premium Brand Identity System",
    category: "Branding",
    excerpt: "A practical framework for making a brand feel elevated, consistent, and commercially useful.",
    date: "2026-04-18",
    readTime: "6 min read"
  },
  {
    slug: "ui-ux-portfolio-conversions",
    title: "UI UX Details That Make Portfolio Sites Convert",
    category: "UI UX",
    excerpt: "The interaction, hierarchy, and proof points that turn visual admiration into qualified inquiries.",
    date: "2026-03-22",
    readTime: "5 min read"
  },
  {
    slug: "social-media-design-systems",
    title: "Why Social Media Design Needs Systems, Not One-Off Posts",
    category: "Social Media Marketing",
    excerpt: "How repeatable visual systems protect quality while keeping content production fast.",
    date: "2026-02-14",
    readTime: "4 min read"
  }
];

export const trustLogos = ["NOVA", "MONO", "AURELIA", "NORTHLINE", "VELORA", "MOTIVE", "KIN"];

export const processSteps = [
  { title: "Discover", text: "Audit the market, audience, offer, and visual gaps before design begins.", icon: PenTool },
  { title: "Design", text: "Create a polished direction system with enough range for real campaigns.", icon: Sparkles },
  { title: "Deploy", text: "Package assets, guidelines, and high-converting touchpoints for launch.", icon: BadgeCheck },
  { title: "Scale", text: "Extend the system into web, social, motion, and future product needs.", icon: ArrowUpRight }
];
