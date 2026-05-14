import { ArrowUpRight, BadgeCheck, Brush, Box, CreditCard, Globe2, Megaphone, PenTool, ScrollText, Sparkles, Tags } from "lucide-react";

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Logo Design",
    slug: "logo-design",
    icon: PenTool,
    summary: "Distinct logo marks and wordmarks designed for clear recall and premium brand presence.",
    deliverables: ["Logo concepts", "Color versions", "Final logo files"]
  },
  {
    title: "Business Card Design",
    slug: "business-card-design",
    icon: CreditCard,
    summary: "Elegant business cards with clean hierarchy, strong spacing, and print-ready polish.",
    deliverables: ["Front and back design", "Print-ready file", "Brand styling"]
  },
  {
    title: "Poster/Flyer Design",
    slug: "poster-flyer-design",
    icon: ScrollText,
    summary: "Promotional posters and flyers built to communicate offers quickly and beautifully.",
    deliverables: ["Poster layout", "Flyer layout", "Digital sharing file"]
  },
  {
    title: "Social Media Post Design",
    slug: "social-media-post-design",
    icon: Brush,
    summary: "Scroll-ready post designs for announcements, campaigns, promotions, and brand content.",
    deliverables: ["Post creatives", "Story formats", "Campaign visuals"]
  },
  {
    title: "Advertisement Design",
    slug: "advertisement-design",
    icon: Megaphone,
    summary: "Clean ad creatives with focused messaging, strong visual pull, and conversion-minded layout.",
    deliverables: ["Ad layouts", "Campaign variants", "Digital ad files"]
  },
  {
    title: "Product Label Design",
    slug: "product-label-design",
    icon: Tags,
    summary: "Premium product labels with thoughtful typography, shelf appeal, and brand consistency.",
    deliverables: ["Label design", "Packaging direction", "Print-ready artwork"]
  },
  {
    title: "Website Design",
    slug: "website-design",
    icon: Globe2,
    summary: "Polished portfolio, service, and landing page designs with clear structure and premium visual direction.",
    deliverables: ["Landing page design", "Website layout", "Responsive direction"]
  }
];

export const projects = [
  {
    slug: "graphic-sm-classes-11th",
    title: "SM Classes",
    industry: "Graphic Design",
    problem: "The class promotion needed a clear academic visual that could communicate the offer quickly.",
    solution: "Designed an education-focused poster for SM Classes with direct messaging, structured hierarchy, and a polished academic tone.",
    results: "A focused promotional graphic built for fast recognition and easy sharing across digital channels.",
    image: "/project-graphic-sm-classes-11th.png",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/graphic-designs"
  },
  {
    slug: "educational-flyer",
    title: "Educational Flyer",
    industry: "Graphic Design",
    problem: "A home tutor needed a flyer that felt professional while keeping the message simple and approachable.",
    solution: "Created a clean educational flyer with strong contrast, readable details, and a confident visual structure.",
    results: "A practical promotional flyer designed to help parents and students understand the tutoring offer quickly.",
    image: "/project-graphic-educational-flyer.png",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/graphic-designs"
  },
  {
    slug: "smm-marketing-agency",
    title: "SMM Marketing Agency",
    industry: "Graphic Design",
    problem: "The marketing agency owner needed a social cover graphic that presented the brand with more authority.",
    solution: "Designed a bold social media cover with clear positioning, high-impact layout, and campaign-ready visual energy.",
    results: "A stronger profile presence for social platforms with an immediate marketing-focused first impression.",
    image: "/project-graphic-smm-marketing-agency.png",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/graphic-designs"
  },
  {
    slug: "sm-classes-poster",
    title: "SM Classes Poster",
    industry: "Graphic Design",
    problem: "The professor needed a poster that could make class information easy to notice and trust.",
    solution: "Designed a structured academic poster for SM Classes with a clear offer, readable hierarchy, and strong recall.",
    results: "A clean class-promotion visual that supports inquiries and presents the education brand professionally.",
    image: "/project-graphic-sm-classes-poster.png",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/graphic-designs"
  },
  {
    slug: "organise-with-kopal-graphic",
    title: "Organise with Kopal",
    industry: "Graphic Design",
    problem: "The home organizer brand needed a visual that felt calm, helpful, and aligned with professional organization.",
    solution: "Designed a square brand graphic with soft structure, neat composition, and an approachable service-led feel.",
    results: "A clean visual asset that supports the brand's organized, trustworthy, and friendly positioning.",
    image: "/project-graphic-organise-with-kopal.png",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/graphic-designs"
  },
  {
    slug: "home-tuition-flyer",
    title: "Home Tuition",
    industry: "Graphic Design",
    problem: "The tutor needed a promotional design that made the offer visible and easy to understand.",
    solution: "Created a home tuition flyer with clear academic messaging, direct information flow, and strong visual contrast.",
    results: "A straightforward flyer that makes the tutoring service easier to promote and remember.",
    image: "/project-graphic-home-tuition.png",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/graphic-designs"
  },
  {
    slug: "organise-with-kopal",
    title: "Organise With Kopal",
    industry: "Service Brand",
    problem: "The brand was being built from scratch with no existing structure or system to explain the offer clearly.",
    solution:
      "Created a calm service website with clearer messaging, trust-led structure, premium first impression, and an easy next step.",
    results: "A clean, premium website with strong first impression, clear brand positioning, and faster trust around the offer.",
    image: "/project-organise-with-kopal.webp",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://www.organisewithkopal.com/"
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
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://smclasses.in/"
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
    accent: "from-[#7c3cff] to-[#16d8ff]",
    liveUrl: "https://littleilmies.com/"
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
    accent: "from-[#16d8ff] to-[#7c3cff]",
    liveUrl: "https://zarrarpalekar.vercel.app/"
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

export const trustLogos = ["BRANDING", "UI/UX", "MOTION", "EDITORIAL", "PACKAGING", "VISUALS", "IDENTITY", "DIGITAL"];

export const processSteps = [
  { title: "Discover", text: "Audit the market, audience, offer, and visual gaps before design begins.", icon: PenTool },
  { title: "Design", text: "Create a polished direction system with enough range for real campaigns.", icon: Sparkles },
  { title: "Deploy", text: "Package assets, guidelines, and high-converting touchpoints for launch.", icon: BadgeCheck },
  { title: "Scale", text: "Extend the system into web, social, motion, and future product needs.", icon: ArrowUpRight }
];
