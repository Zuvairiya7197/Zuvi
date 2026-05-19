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
  "/mz-logo-01.webp",
  "/mz-logo-02.webp",
  "/mz-logo-03.jpg",
  "/mz-logo-04.jpg",
  "/mz-logo-05.jpg",
  "/mz-logo-05.webp",
  "/mz-logo-06.jpg",
  "/mz-logo-07.jpg",
  "/mz-logo-08.jpg",
  "/mz-logo-09.jpg",
  "/mz-logo-10.jpg",
  "/mz-logo-11.jpg",
  "/mz-logo-12.jpg",
  "/mz-logo-03.webp",
  "/mz-logo-04.webp"
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

const socialMediaDesignProjects = [
  {
    slug: "wbyb-social-media-cover",
    title: "WBYB Social Media Cover",
    image: "/WBYB Social media cover.webp"
  },
  {
    slug: "sm-classes-social-post",
    title: "SM Classes Social Post",
    image: "/sm classes post.webp"
  },
  {
    slug: "sm-classes-score-card-post-01",
    title: "SM Classes Score Card Post 01",
    image: "/SM Classes Score card flyer 1.webp"
  },
  {
    slug: "sm-classes-score-card-post-02",
    title: "SM Classes Score Card Post 02",
    image: "/SM Classes Score card flyer 2.webp"
  },
  {
    slug: "sm-classes-score-card-post-03",
    title: "SM Classes Score Card Post 03",
    image: "/SM Classes Score card flyer 3.webp"
  },
  {
    slug: "sm-classes-score-card-post-04",
    title: "SM Classes Score Card Post 04",
    image: "/SM Classes Score card flyer 4.webp"
  },
  {
    slug: "social-media-post-06",
    title: "Social Media Post 06",
    image: "/6th post.webp"
  },
  {
    slug: "social-media-post-08",
    title: "Social Media Post 08",
    image: "/post 8.webp"
  },
  {
    slug: "social-media-post-09",
    title: "Social Media Post 09",
    image: "/post 9.webp"
  },
  {
    slug: "social-media-post-11",
    title: "Social Media Post 11",
    image: "/post 11.webp"
  },
  {
    slug: "social-media-post-12",
    title: "Social Media Post 12",
    image: "/post 12.webp"
  },
  {
    slug: "social-media-post-13",
    title: "Social Media Post 13",
    image: "/post 13.webp"
  },
  {
    slug: "social-media-post-14",
    title: "Social Media Post 14",
    image: "/post 14.webp"
  },
  {
    slug: "social-media-post-15",
    title: "Social Media Post 15",
    image: "/post 15.webp"
  }
].map((project, index) => ({
  ...project,
  industry: "Graphic Design",
  problem: project.slug.includes("score-card")
    ? "The score card creative needed a clear academic promotional layout that could present results and details quickly."
    : "The social creative needed a clear, scroll-ready visual that could communicate quickly in-feed.",
  solution: project.slug.includes("score-card")
    ? "Designed a score card flyer with structured information, bold class branding, and share-ready visual hierarchy."
    : "Designed a social media graphic with focused hierarchy, platform-friendly sizing, and polished visual balance.",
  results: project.slug.includes("score-card")
    ? "A polished score card flyer built for quick recognition and easy digital circulation."
    : "A ready-to-post social asset that improves campaign visibility and brand presentation.",
  category: project.slug.includes("score-card") ? "Flyer Design" : "Social Media Designs",
  accent: index % 2 === 0 ? "from-[#d6b36a] to-[#111111]" : "from-[#d6b36a] to-[#8c6a3b]",
  liveUrl: project.slug.includes("score-card")
    ? "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
    : "https://zuvairiyamaryam.wixsite.com/my-site/fbcoverdesign"
}));

export const projects = [
  {
    slug: "graphic-sm-classes-11th",
    title: "SM Classes",
    industry: "Graphic Design",
    problem: "The class promotion needed a clear academic visual that could communicate the offer quickly.",
    solution: "Designed an education-focused poster for SM Classes with direct messaging, structured hierarchy, and a polished academic tone.",
    results: "A focused promotional graphic built for fast recognition and easy sharing across digital channels.",
    image: "/mz-flyer-sm-classes-11th.webp",
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
    image: "/project-graphic-educational-flyer.webp",
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
    image: "/mz-social-cover-smm.webp",
    category: "Social Media Designs",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/fbcoverdesign"
  },
  ...socialMediaDesignProjects,
  {
    slug: "sm-classes-poster",
    title: "SM Classes Poster",
    industry: "Graphic Design",
    problem: "The professor needed a poster that could make class information easy to notice and trust.",
    solution: "Designed a structured academic poster for SM Classes with a clear offer, readable hierarchy, and strong recall.",
    results: "A clean class-promotion visual that supports inquiries and presents the education brand professionally.",
    image: "/mz-flyer-sm-classes-4.webp",
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
    image: "/mz-flyer-real-estate.webp",
    category: "Flyer Design",
    accent: "from-[#d6b36a] to-[#111111]",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/poster-flyerdesign"
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
    image: "/mz-business-card-02.webp",
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
    image: "/mz-flyer-home-tuition.webp",
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
    image: "/mz-flyer-jewellery-workshop.webp",
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
    slug: "we-build-your-brands",
    title: "We Build Your Brands",
    industry: "Website Agency",
    problem: "The agency needed a high-converting website presence that could explain the offer quickly and push visitors toward booking a call.",
    solution:
      "Built a dark, conversion-focused website with strong positioning, service pathways, project proof, and clear inquiry actions.",
    results: "A sharper WBYB presence with a premium first impression, clearer lead-generation message, and direct booking flow.",
    image: "/WBYB website.webp",
    category: "Website Design",
    accent: "from-[#4c078e] to-[#00ff5a]",
    liveUrl: "https://www.webuildyourbrands.com/"
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    industry: "Home Service",
    problem: "The plumbing business needed a service website that could explain repairs, emergency support, and booking options quickly.",
    solution:
      "Created a clean service website with direct service sections, trust-focused messaging, and a simple inquiry path for local customers.",
    results: "A practical service website that makes plumbing help easier to understand, trust, and request.",
    image: "/PlumbingServices.webp",
    category: "Website Design",
    accent: "from-[#16d8ff] to-[#0f766e]",
    liveUrl: "https://plumbing-services-wbyb.vercel.app/"
  },
  {
    slug: "emlak-real-estate",
    title: "Emlak",
    industry: "Real Estate",
    problem: "The real estate brand needed a premium website presence to present properties and build buyer confidence.",
    solution:
      "Built a real estate website experience with strong visual hierarchy, property-focused presentation, and polished browsing flow.",
    results: "A sharper property website that supports trust, discovery, and stronger real estate inquiries.",
    image: "/Emlak.webp",
    category: "Website Design",
    accent: "from-[#d6b36a] to-[#8c6a3b]",
    liveUrl: "https://emlakrealestatellc.vercel.app/"
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
  "Social Media Designs"
];
