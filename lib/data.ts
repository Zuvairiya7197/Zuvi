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

const minimalProjects = Array.from({ length: 54 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  const extension = index + 1 <= 25 ? "jpg" : "avif";

  return {
    slug: `minimal-design-${number}`,
    title: `Minimal Design ${number}`,
    industry: "Graphic Design",
    problem: "The visual needed a clean, minimal design treatment with strong spacing and quiet brand presence.",
    solution: "Created a minimal graphic composition using restrained layout, clear hierarchy, and polished editorial balance.",
    results: "A refined design asset that feels modern, focused, and easy to use across digital presentation.",
    image: `/mz-minimal-${number}.${extension}`,
    category: "Minimals",
    accent: index % 2 === 0 ? "from-[#d6b36a] to-[#111111]" : "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/minimal"
  };
});

const logoProjectImages = [
  "/mz-logo-01.png",
  "/mz-logo-02.png",
  "/mz-logo-03.jpg",
  "/mz-logo-04.jpg",
  "/mz-logo-05.jpg",
  "/mz-logo-06.jpg",
  "/mz-logo-07.jpg",
  "/mz-logo-08.jpg",
  "/mz-logo-09.jpg",
  "/mz-logo-10.jpg",
  "/mz-logo-11.jpg",
  "/mz-logo-12.jpg",
  "/mz-logo-03.png",
  "/mz-logo-04.png"
];

const logoProjects = logoProjectImages.map((image, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    slug: `logo-design-${number}`,
    title: `Logo Design ${number}`,
    industry: "Graphic Design",
    problem: "The brand needed a memorable logo direction that could feel clear, distinct, and easy to recognize.",
    solution: "Designed a logo concept with focused visual identity, balanced form, and clean brand presentation.",
    results: "A polished logo asset that strengthens recognition and gives the brand a more professional visual anchor.",
    image,
    category: "Logo Design",
    accent: index % 2 === 0 ? "from-[#d6b36a] to-[#111111]" : "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/logodesign"
  };
});

const customisedPrintProjectImages = [
  ...Array.from({ length: 25 }, (_, index) => `/mz-customised-print-${String(index + 1).padStart(2, "0")}.jpg`),
  ...Array.from({ length: 17 }, (_, index) => `/mz-customised-print-${String(index + 26).padStart(2, "0")}.avif`),
  ...Array.from({ length: 5 }, (_, index) => `/mz-customised-print-${String(index + 48).padStart(2, "0")}.avif`)
];

const customisedPrintProjects = customisedPrintProjectImages.map((image, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    slug: `costumised-print-design-${number}`,
    title: `Costumised Print Design ${number}`,
    industry: "Graphic Design",
    problem: "The print piece needed a personalised visual treatment that could feel clear, decorative, and gift-ready.",
    solution: "Designed a customised print composition with polished layout, expressive details, and balanced presentation.",
    results: "A ready-to-show print design asset with stronger visual appeal and a more personal finish.",
    image,
    category: "Costumised Print Design",
    accent: index % 2 === 0 ? "from-[#d6b36a] to-[#111111]" : "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/customisedprints"
  };
});

export const projects = [
  {
    slug: "graphic-sm-classes-11th",
    title: "SM Classes",
    industry: "Graphic Design",
    problem: "The class promotion needed a clear academic visual that could communicate the offer quickly.",
    solution: "Designed an education-focused poster for SM Classes with direct messaging, structured hierarchy, and a polished academic tone.",
    results: "A focused promotional graphic built for fast recognition and easy sharing across digital channels.",
    image: "/mz-flyer-sm-classes-11th.png",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  ...logoProjects,
  ...customisedPrintProjects,
  {
    slug: "educational-flyer",
    title: "Educational Flyer",
    industry: "Graphic Design",
    problem: "A home tutor needed a flyer that felt professional while keeping the message simple and approachable.",
    solution: "Created a clean educational flyer with strong contrast, readable details, and a confident visual structure.",
    results: "A practical promotional flyer designed to help parents and students understand the tutoring offer quickly.",
    image: "/project-graphic-educational-flyer.png",
    category: "Flyer Design",
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
    image: "/mz-social-cover-smm.png",
    category: "Social Media Cover",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/fbcoverdesign"
  },
  {
    slug: "social-cover-contact",
    title: "Contact Social Cover",
    industry: "Graphic Design",
    problem: "The brand needed a contact-focused social cover that could make inquiry details easy to find.",
    solution: "Designed a clean social cover layout with clear contact hierarchy, soft visual styling, and direct information flow.",
    results: "A practical social media cover that presents contact details with a more polished brand impression.",
    image: "/mz-social-cover-contact.png",
    category: "Social Media Cover",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/fbcoverdesign"
  },
  {
    slug: "sm-classes-poster",
    title: "SM Classes Poster",
    industry: "Graphic Design",
    problem: "The professor needed a poster that could make class information easy to notice and trust.",
    solution: "Designed a structured academic poster for SM Classes with a clear offer, readable hierarchy, and strong recall.",
    results: "A clean class-promotion visual that supports inquiries and presents the education brand professionally.",
    image: "/mz-flyer-sm-classes-4.png",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "real-estate-flyer",
    title: "Real Estate Flyer",
    industry: "Graphic Design",
    problem: "The property listing needed a clear sales graphic with quick details and a visible call-to-action.",
    solution: "Designed a real estate promotional flyer with bold listing information, image-led layout, and clear contact emphasis.",
    results: "A share-ready property flyer that makes the offer easier to scan and promote.",
    image: "/mz-flyer-real-estate.png",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "organise-with-kopal-graphic",
    title: "Organise with Kopal",
    industry: "Graphic Design",
    problem: "The home organizer brand needed a visual that felt calm, helpful, and aligned with professional organization.",
    solution: "Designed a square brand graphic with soft structure, neat composition, and an approachable service-led feel.",
    results: "A clean visual asset that supports the brand's organized, trustworthy, and friendly positioning.",
    image: "/project-graphic-organise-with-kopal.png",
    category: "Brand Graphic",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/graphic-designs"
  },
  {
    slug: "business-card-design-01",
    title: "Business Card Design 01",
    industry: "Graphic Design",
    problem: "The brand needed a compact identity piece that felt professional, clear, and memorable at first glance.",
    solution: "Designed a business card layout with refined spacing, clean type hierarchy, and a polished brand-first composition.",
    results: "A print-ready identity asset that presents the brand with more confidence and visual clarity.",
    image: "/mz-business-card-01.jpg",
    category: "Business Card Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/businesscarddesign"
  },
  {
    slug: "business-card-design-02",
    title: "Business Card Design 02",
    industry: "Graphic Design",
    problem: "The design needed to organize contact and brand details into a cleaner, more premium card format.",
    solution: "Created a balanced business card composition with strong contrast, readable details, and a refined visual finish.",
    results: "A polished card design that supports professional introductions and stronger brand recall.",
    image: "/mz-business-card-02.png",
    category: "Business Card Design",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/businesscarddesign"
  },
  {
    slug: "home-tuition-flyer",
    title: "Home Tuition",
    industry: "Graphic Design",
    problem: "The tutor needed a promotional design that made the offer visible and easy to understand.",
    solution: "Created a home tuition flyer with clear academic messaging, direct information flow, and strong visual contrast.",
    results: "A straightforward flyer that makes the tutoring service easier to promote and remember.",
    image: "/mz-flyer-home-tuition.png",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "mhj-flyer",
    title: "MHJ Flyer",
    industry: "Graphic Design",
    problem: "The promotion needed a focused flyer layout that could communicate the message quickly.",
    solution: "Designed a vertical promotional flyer with clear hierarchy, strong visual balance, and a polished digital-ready finish.",
    results: "A share-ready flyer that supports fast recognition and a more professional first impression.",
    image: "/mz-flyer-mhj.jpeg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "jewellery-making-workshop",
    title: "Jewellery Making Workshop",
    industry: "Graphic Design",
    problem: "The workshop needed an inviting flyer that could highlight the offer while keeping details readable.",
    solution: "Created a refined event flyer with decorative styling, balanced spacing, and a clear workshop callout.",
    results: "A polished workshop creative built for social sharing and audience interest.",
    image: "/mz-flyer-jewellery-workshop.png",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "promotional-flyer-01",
    title: "Promotional Flyer 01",
    industry: "Graphic Design",
    problem: "The campaign needed a graphic that could hold attention and present the offer with clarity.",
    solution: "Designed a compact promotional flyer with bold composition, readable sections, and social-first formatting.",
    results: "A digital flyer prepared for stronger visibility across social channels.",
    image: "/mz-flyer-instagram-01.jpg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "promotional-flyer-02",
    title: "Promotional Flyer 02",
    industry: "Graphic Design",
    problem: "The visual needed to make a service message feel structured and easy to scan.",
    solution: "Built a flyer layout with focused typography, clean contrast, and direct information flow.",
    results: "A promotional creative that makes the message easier to notice, understand, and save.",
    image: "/mz-flyer-instagram-02.jpg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "promotional-flyer-03",
    title: "Promotional Flyer 03",
    industry: "Graphic Design",
    problem: "The offer needed a more professional flyer format for quick digital promotion.",
    solution: "Created a structured flyer design with strong visual framing and a clear promotional rhythm.",
    results: "A campaign-ready flyer that improves presentation quality and shareability.",
    image: "/mz-flyer-instagram-03.jpg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "promotional-flyer-04",
    title: "Promotional Flyer 04",
    industry: "Graphic Design",
    problem: "The campaign needed a flyer that could communicate details without feeling visually crowded.",
    solution: "Designed a clean promotional composition with controlled spacing, strong contrast, and clear information zones.",
    results: "A balanced flyer asset suitable for social promotion and quick audience understanding.",
    image: "/mz-flyer-instagram-04.jpg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "promotional-flyer-05",
    title: "Promotional Flyer 05",
    industry: "Graphic Design",
    problem: "The message needed stronger visual hierarchy for a more premium promotional appearance.",
    solution: "Created a flyer design with sharper content grouping, confident contrast, and a polished finish.",
    results: "A professional promotional graphic that feels clearer and more intentional.",
    image: "/mz-flyer-instagram-05.jpg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "promotional-flyer-06",
    title: "Promotional Flyer 06",
    industry: "Graphic Design",
    problem: "The flyer needed to present promotional details in a more memorable visual format.",
    solution: "Designed a social-ready flyer with layered composition, crisp type structure, and clear emphasis.",
    results: "A stronger flyer asset for digital posting, saving, and forwarding.",
    image: "/mz-flyer-instagram-06.jpg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  {
    slug: "promotional-flyer-07",
    title: "Promotional Flyer 07",
    industry: "Graphic Design",
    problem: "The final promotional creative needed a clear, polished structure for social distribution.",
    solution: "Created a flyer layout with purposeful spacing, strong readability, and campaign-focused presentation.",
    results: "A refined promotional flyer that rounds out the graphic design showcase with another share-ready asset.",
    image: "/mz-flyer-instagram-07.jpg",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
  },
  ...minimalProjects,
  {
    slug: "organise-with-kopal",
    title: "Organise With Kopal",
    industry: "Service Brand",
    problem: "The brand was being built from scratch with no existing structure or system to explain the offer clearly.",
    solution:
      "Created a calm service website with clearer messaging, trust-led structure, premium first impression, and an easy next step.",
    results: "A clean, premium website with strong first impression, clear brand positioning, and faster trust around the offer.",
    image: "/project-organise-with-kopal.webp",
    category: "Website Design",
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
    category: "Website Design",
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
    category: "Website Design",
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
    category: "Website Design",
    accent: "from-[#16d8ff] to-[#7c3cff]",
    liveUrl: "https://zarrarpalekar.vercel.app/"
  }
];

export const graphicWorkCategories = [
  "Logo Design",
  "Poster Design",
  "Flyer Design",
  "Business Card Design",
  "Costumised Print Design",
  "Minimals",
  "Social Media Cover",
  "Brand Graphic"
];

export const testimonials = [
  {
    title: "Our coaching website finally had everything parents needed.",
    quote:
      "WBYB (we build your brands) develop our classes website (smclasses.in) which exceeds our expectations.. Website covers all informative content which were basically required for growth of any coaching classes..the best part is whenever modifications required they do immediately and with lots of ideas.. We recommend WBYB for anyone who like to build best website for their business..",
    name: "Saquib Dalvi",
    role: "Education Brand",
    image: "/wbyb-sm-classes-founder.webp"
  },
  {
    title: "My work now feels easier to share and explain.",
    quote:
      "The portfolio website gave my work a sharper, more polished presence online. It became much easier to share my projects, explain what I do, and make a strong first impression with clients.",
    name: "Zarrar Palekar",
    role: "Portfolio Website Client",
    image: "/wbyb-zarrar-photo.webp"
  },
  {
    title: "My website was live in two days, without the stress.",
    quote:
      "Hi, I'm Kopal and I run my business called Organise with Kopal. I needed a website for my business and I already knew that Zuvairiya would be the right call. She delivered the website within 2 days - at an affordable price. All edits were done within minutes.",
    name: "Kopal Dhir",
    role: "Founder at Organise With Kopal",
    image: "/project-organise-with-kopal.webp"
  },
  {
    title: "She understood my brand and made it look polished fast.",
    quote:
      "I own an appointment setting agency and get a lot of my leads from Facebook and LinkedIn, so I had an urgent requirement for professional covers. Zuvairiya delivered exceptionally beautiful and professional designs in no time, making sure everything matched my brand palette perfectly. Her turnaround time, quick edits, and patience were amazing. I can't recommend her enough - she's my go-to for all things graphic design.",
    name: "Shreya Batra",
    role: "Co-Founder @ Organic Appointments Agency",
    image: "/project-graphic-smm-marketing-agency.png"
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
