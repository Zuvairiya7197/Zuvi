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
    slug: "organise-with-kopal",
    title: "Organise With Kopal",
    industry: "Service Brand",
    problem: "The brand was being built from scratch with no existing structure or system to explain the offer clearly.",
    solution:
      "Created a calm service website with clearer messaging, trust-led structure, premium first impression, and an easy next step.",
    results: "A clean, premium website with strong first impression, clear brand positioning, and faster trust around the offer.",
    image: "/project-organise-with-kopal.webp",
    accent: "from-[#d6b36a] to-[#8c6a3b]"
  },
  {
    slug: "sm-classes",
    title: "SM Classes",
    industry: "Education",
    problem: "The old structure made parents search around to understand programs, details, and the right next step.",
    solution:
      "Structured the education website so parents and students can find key information without confusion.",
    results: "Clear layout, easier navigation, improved program clarity, and smoother inquiry decisions.",
    image: "/project-sm-classes.webp",
    accent: "from-[#d6b36a] to-[#111111]"
  },
  {
    slug: "little-ilmies",
    title: "Little Ilmies",
    industry: "Learning Platform",
    problem: "The platform needed a clear structure and guided learning flow for families exploring the experience.",
    solution:
      "Designed a friendly learning platform with simple pathways that make exploring and understanding easy for users.",
    results: "Clearer learner pathways and a smoother first experience that keeps families moving forward.",
    image: "/project-little-ilmies.webp",
    accent: "from-[#7c3cff] to-[#16d8ff]"
  },
  {
    slug: "zarrar-palekar",
    title: "Zarrar Palekar",
    industry: "Portfolio",
    problem: "Work was scattered and hard to present professionally, which made the portfolio harder to trust quickly.",
    solution:
      "Built a focused portfolio to present work clearly, create credibility, and make projects easier to understand.",
    results: "Structured portfolio presentation, sharper positioning, stronger trust, and instant credibility around the work.",
    image: "/project-zarrar-palekar.webp",
    accent: "from-[#16d8ff] to-[#7c3cff]"
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
