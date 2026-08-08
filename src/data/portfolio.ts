import type { PortfolioProject } from "@/types";
import { facebookAdsPortfolioProjects } from "@/data/facebookAdsCaseStudies";

export const portfolioProjects: PortfolioProject[] = [
  ...facebookAdsPortfolioProjects,
  {
    slug: "alfis-ltd-website",
    title: "Alfis Ltd Website",
    client: "Alfis Ltd",
    category: "website",
    tags: ["Web Development", "Business Website", "Responsive Design"],
    summary:
      "A responsive business website built to present Alfis Ltd's services and establish a clear, professional online presence.",
    coverImage: "/website design development portfolio/alfisltd.png",
    gallery: ["/website design development portfolio/alfisltd.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "Alfis Ltd needed a polished website that could communicate its business clearly and give visitors an easy way to explore the company online.",
    solution:
      "Created a clean, responsive website with organized content, clear navigation, and a professional visual presentation across desktop and mobile.",
    results: [],
    liveUrl: "https://alfisltd.vercel.app/",
    featured: true,
    relatedProjects: ["bd-for-palestine-website", "muhsin-mashkur-website"],
    metaTitle: "Alfis Ltd Website Project",
    metaDescription:
      "A responsive business website project for Alfis Ltd with clear content structure, professional presentation, and modern UX.",
  },
  {
    slug: "bd-for-palestine-website",
    title: "BD for Palestine Website",
    client: "BD for Palestine",
    category: "website",
    tags: ["Web Development", "Nonprofit Website", "Responsive Design"],
    summary:
      "A purpose-driven website designed to present BD for Palestine's mission, information, and initiatives through an accessible digital experience.",
    coverImage: "/website design development portfolio/bd pro palestine.png",
    gallery: ["/website design development portfolio/bd pro palestine.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The organization needed a clear online platform to communicate its purpose, share important information, and guide visitors toward meaningful action.",
    solution:
      "Built a responsive, information-focused website with a clear content hierarchy, accessible navigation, and prominent paths to learn more and get involved.",
    results: [],
    liveUrl: "https://bdforpalestine.org/",
    featured: true,
    relatedProjects: ["alfis-ltd-website", "muhsin-mashkur-website"],
    metaTitle: "BD for Palestine Website Project",
    metaDescription:
      "A responsive nonprofit website project for BD for Palestine with accessible information architecture and purpose-led UX.",
  },
  {
    slug: "muhsin-mashkur-website",
    title: "Muhsin Mashkur Website",
    client: "Muhsin Mashkur",
    category: "website",
    tags: ["Personal Website", "Web Development", "Responsive Design"],
    summary:
      "A modern personal website created to present Muhsin Mashkur's profile, work, and online presence through a focused responsive experience.",
    coverImage: "/website design development portfolio/Muhsinmashkur.png",
    gallery: ["/website design development portfolio/Muhsinmashkur.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The website needed to establish a polished personal presence while keeping professional information clear and easy to explore.",
    solution:
      "Designed a focused responsive experience with strong visual hierarchy, clear navigation, and an accessible presentation of the personal brand.",
    results: [],
    liveUrl: "https://www.muhsinmashkur.com/",
    featured: true,
    relatedProjects: ["alfis-ltd-website", "bd-for-palestine-website"],
    metaTitle: "Muhsin Mashkur Website Project",
    metaDescription:
      "A modern responsive personal website project for Muhsin Mashkur with focused content structure and polished UX.",
  },
  {
    slug: "stitchbd-ecommerce-website",
    title: "StitchBD E-commerce Website",
    client: "StitchBD",
    category: "website",
    tags: ["E-commerce", "Web Development", "UX Design"],
    summary:
      "A fashion e-commerce website designed to present traditional Punjabi and Burka collections through a clean, responsive, conversion-focused shopping experience.",
    coverImage: "/website design development portfolio/Stitch.png",
    gallery: ["/website design development portfolio/Stitch.png"],
    technologies: ["E-commerce", "Responsive Design", "UI/UX"],
    timeline: "Project delivery",
    challenge:
      "The brand needed a polished online storefront that could communicate its fashion identity, organize product discovery, and make the shopping journey easier on desktop and mobile.",
    solution:
      "Created a visually led e-commerce experience with clear navigation, editorial product presentation, responsive layouts, and prominent paths to browse the collection, contact the brand, and complete a purchase.",
    results: [],
    liveUrl: "https://stitchbd.net",
    featured: true,
    relatedProjects: ["phone-fashion-fix-local-seo"],
    metaTitle: "StitchBD E-commerce Website Project",
    metaDescription:
      "A responsive fashion e-commerce website for StitchBD with focused product discovery, modern UX, and a polished online shopping experience.",
  },
  {
    slug: "phone-fashion-fix-local-seo",
    title: "Phone Fashion Fix Local SEO",
    client: "Phone Fashion Fix",
    category: "seo",
    tags: ["Local SEO", "Technical SEO", "Content Strategy"],
    summary:
      "A local SEO campaign that built a 34-page service architecture and expanded organic search visibility for a device repair business in Ocala, Florida.",
    coverImage: "/case-studies/phone-fashion-fix/image-4.png",
    gallery: [
      "/case-studies/phone-fashion-fix/image-1.png",
      "/case-studies/phone-fashion-fix/image-2.png",
      "/case-studies/phone-fashion-fix/image-3.png",
      "/case-studies/phone-fashion-fix/image-4.png",
    ],
    technologies: ["Google Search Console", "Local SEO", "Content Architecture", "Internal Linking"],
    timeline: "Phased campaign, 2026",
    challenge:
      "The repair business needed to compete with national chains and established local shops without relying on one generic services page or a shallow local search presence.",
    solution:
      "Built a hub-and-spoke local SEO structure across iPhone, iPad, Android, tablet, and common repair issue silos, supported by service pages, semantic content, internal linking, and local search signals.",
    results: [
      { label: "Service architecture", value: "34 pages" },
      { label: "Search Console impressions", value: "263 to 6,980" },
      { label: "Search Console clicks", value: "12 to 196" },
    ],
    featured: true,
    relatedProjects: ["stitchbd-ecommerce-website"],
    metaTitle: "Phone Fashion Fix Local SEO Project",
    metaDescription:
      "A 34-page local SEO architecture for Phone Fashion Fix that expanded Ocala search visibility through technical SEO, content, and internal linking.",
  },
  {
    slug: "pixc-retouch-global-seo",
    title: "PixC Retouch Global SEO",
    client: "PixC Retouch",
    category: "seo",
    tags: ["Global SEO", "Content Strategy", "Technical SEO"],
    summary:
      "A global SEO campaign for a professional photo editing and retouching brand competing across e-commerce, fashion, real estate, and portrait search categories.",
    coverImage: "/case-studies/pixc-retouch/image-1.png",
    gallery: [
      "/case-studies/pixc-retouch/image-1.png",
      "/case-studies/pixc-retouch/image-2.png",
      "/case-studies/pixc-retouch/image-3.png",
    ],
    technologies: ["Google Search Console", "GA4", "Semrush", "Content Architecture"],
    timeline: "8 months, August 2025 to March 2026",
    challenge:
      "The site was competing globally against established photo editing brands, offshore production agencies, and marketplace freelancers across a highly saturated search category.",
    solution:
      "Built service verticals, supporting semantic content, geo-layered real estate pages, authority-building campaigns, and ongoing on-page refreshes for commercial service pages.",
    results: [
      { label: "Tracked keywords in top 10", value: "29 of 32" },
      { label: "GSC click growth", value: "+203%" },
      { label: "GA4 active user growth", value: "+148% YoY" },
    ],
    liveUrl: "https://pixcretouch.com",
    featured: true,
    relatedProjects: ["stitchbd-ecommerce-website", "phone-fashion-fix-local-seo"],
    metaTitle: "PixC Retouch Global SEO Project",
    metaDescription:
      "A global SEO project for PixC Retouch combining service architecture, semantic content, geo expansion, and authority building.",
  },
  {
    slug: "rihawebtech-website",
    title: "Riha WebTech Website",
    client: "Riha WebTech",
    category: "website",
    tags: ["Web Development", "Responsive Design", "Digital Agency"],
    summary:
      "A modern agency website designed to present Riha WebTech services, project capabilities, and digital solutions through a clear responsive experience.",
    coverImage: "/website design development portfolio/rihawebtech.png",
    gallery: ["/website design development portfolio/rihawebtech.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The website needed to communicate a broad digital service offering clearly while making it easy for potential clients to understand the agency and take the next step.",
    solution:
      "Created a structured, responsive web experience with clear service presentation, focused navigation, strong visual hierarchy, and conversion-oriented calls to action.",
    results: [],
    liveUrl: "https://rihawebtech.vercel.app/",
    featured: true,
    relatedProjects: ["stitchbd-ecommerce-website", "dr-shafiul-islam-kawsar-website"],
    metaTitle: "Riha WebTech Website Project",
    metaDescription:
      "A responsive website project for Riha WebTech with clear service positioning, modern UX, and conversion-focused structure.",
  },
  {
    slug: "dr-shafiul-islam-kawsar-website",
    title: "Dr. Shafiul Islam Kawsar Website",
    client: "Dr. Shafiul Islam Kawsar",
    category: "website",
    tags: ["Personal Website", "Web Development", "Responsive Design"],
    summary:
      "A professional personal website designed to present Dr. Shafiul Islam Kawsar's profile, information, and online presence in a clear and accessible format.",
    coverImage: "/website design development portfolio/dr shafiul islam kawsar.png",
    gallery: ["/website design development portfolio/dr shafiul islam kawsar.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The project needed a trustworthy, easy-to-navigate online presence that could organize professional information and work well across mobile and desktop devices.",
    solution:
      "Designed a clean personal website with accessible content structure, responsive layouts, clear information hierarchy, and a focused user journey.",
    results: [],
    liveUrl: "https://drshafiulahmedkawsar.vercel.app/",
    featured: false,
    relatedProjects: ["rihawebtech-website", "dont-validate-labels-store"],
    metaTitle: "Dr. Shafiul Islam Kawsar Website Project",
    metaDescription:
      "A professional responsive personal website for Dr. Shafiul Islam Kawsar with clear information architecture and accessible UX.",
  },
  {
    slug: "dont-validate-labels-store",
    title: "Dont Validate Labels Store",
    client: "Dont Validate Labels",
    category: "website",
    tags: ["E-commerce", "Web Development", "Online Store"],
    summary:
      "An online store experience designed to present products with a bold visual identity, clear browsing paths, and a straightforward shopping journey.",
    coverImage: "/website design development portfolio/dontvalidatelabels.png",
    gallery: ["/website design development portfolio/dontvalidatelabels.png"],
    technologies: ["E-commerce", "Responsive Design", "UI/UX"],
    timeline: "Project delivery",
    challenge:
      "The store needed a distinctive digital presence that could express the brand personality while keeping product discovery and purchase navigation simple.",
    solution:
      "Built a responsive storefront with a strong visual presentation, clear product browsing structure, mobile-friendly layouts, and direct paths toward shopping and contact actions.",
    results: [],
    liveUrl: "https://dontvalidatelabels.store/",
    featured: false,
    relatedProjects: ["stitchbd-ecommerce-website", "rihawebtech-website"],
    metaTitle: "Dont Validate Labels Store Website Project",
    metaDescription:
      "A responsive online store project for Dont Validate Labels with bold visual direction, product discovery, and user-focused e-commerce UX.",
  },
  {
    slug: "pharmacity-website",
    title: "Pharmacity Website",
    client: "Pharmacity",
    category: "website",
    tags: ["Website Development", "Healthcare", "Responsive Design"],
    summary:
      "A responsive healthcare website designed to make Pharmacity information easier to browse across desktop and mobile devices.",
    coverImage: "/website design development portfolio/pharmacity.png",
    gallery: ["/website design development portfolio/pharmacity.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The website needed a clear structure and accessible presentation for a healthcare-focused audience using different screen sizes and browsing contexts.",
    solution:
      "Created a responsive website experience with focused navigation, clear content hierarchy, and a practical layout for discovering pharmacy and health information.",
    results: [],
    liveUrl: "https://pharmacity.com.bd/",
    featured: false,
    relatedProjects: ["plan-abroad-website", "businessclub-website"],
    metaTitle: "Pharmacity Website Project",
    metaDescription:
      "A responsive healthcare website project for Pharmacity with accessible navigation, clear content structure, and mobile-friendly UX.",
  },
  {
    slug: "plan-abroad-website",
    title: "Plan Abroad Website",
    client: "Plan Abroad",
    category: "website",
    tags: ["Website Development", "Education", "Responsive Design"],
    summary:
      "A responsive education and study-abroad website designed to present international planning information through a clear, user-focused experience.",
    coverImage: "/website design development portfolio/plan abroad.png",
    gallery: ["/website design development portfolio/plan abroad.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The project needed to organize study-abroad information clearly and guide visitors toward the right next step without overwhelming them.",
    solution:
      "Built a structured responsive experience with clear sections, focused calls to action, and an accessible information hierarchy for prospective students.",
    results: [],
    liveUrl: "https://planabroad.org/",
    featured: false,
    relatedProjects: ["pharmacity-website", "rihawebtech-website"],
    metaTitle: "Plan Abroad Website Project",
    metaDescription:
      "A responsive study-abroad website project for Plan Abroad with clear information architecture and user-focused navigation.",
  },
  {
    slug: "nazmulhoq-website",
    title: "Nazmulhoq Website",
    client: "Nazmulhoq",
    category: "website",
    tags: ["Personal Website", "Web Development", "Responsive Design"],
    summary:
      "A professional personal website designed to present Nazmulhoq's online identity, information, and services through a focused digital presence.",
    coverImage: "/website design development portfolio/Nazmulhoq.png",
    gallery: ["/website design development portfolio/Nazmulhoq.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The website needed a polished structure that could communicate a personal brand clearly and make important information easy to find.",
    solution:
      "Designed a responsive personal website with strong visual hierarchy, clear navigation, and a concise user journey across mobile and desktop.",
    results: [],
    liveUrl: "https://nazmulhoq.com/",
    featured: false,
    relatedProjects: ["dr-shafiul-islam-kawsar-website", "rihawebtech-website"],
    metaTitle: "Nazmulhoq Website Project",
    metaDescription:
      "A professional responsive personal website for Nazmulhoq with clear navigation, focused content, and modern UX.",
  },
  {
    slug: "businessclub-website",
    title: "Business Club Website",
    client: "Business Club",
    category: "website",
    tags: ["Website Development", "Business Website", "Responsive Design"],
    summary:
      "A business-focused website designed to present the organization, its information, and its online presence through a structured responsive layout.",
    coverImage: "/website design development portfolio/businessclub.png",
    gallery: ["/website design development portfolio/businessclub.png"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The website needed to communicate the organization clearly while giving visitors a simple way to understand its purpose and navigate its content.",
    solution:
      "Created a professional responsive experience with organized content sections, clear navigation, and a presentation designed for trust and usability.",
    results: [],
    liveUrl: "https://businessclub.com.bd/",
    featured: false,
    relatedProjects: ["pharmacity-website", "plan-abroad-website"],
    metaTitle: "Business Club Website Project",
    metaDescription:
      "A responsive business website project with organized content, clear navigation, and a professional user experience.",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((p) => p.category === category);
}
