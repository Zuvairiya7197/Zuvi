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
    image,
    category: "Costumised Print Design",
    liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/customisedprints"
  };
});

const socialMediaProjects = [
  {
    slug: "smm-marketing-agency",
    title: "SMM Marketing Agency",
    image: "/mz-social-cover-smm.webp"
  },
  {
    slug: "social-cover-contact",
    title: "Contact Social Cover",
    image: "/mz-social-cover-contact.webp"
  },
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
].map((project) => ({
  ...project,
  industry: "Graphic Design",
  category: "Social Media Designs",
  liveUrl: "https://zuvairiyamaryam.wixsite.com/my-site/fbcoverdesign"
}));

export const homeProjects = [
  ...customisedPrintProjects,
  ...socialMediaProjects
];
