import type { PortfolioProject } from "@/types";
import { facebookAdsPortfolioProjects } from "@/data/facebookAdsCaseStudies";

export const portfolioProjects: PortfolioProject[] = [
  ...facebookAdsPortfolioProjects,
  {
    slug: "border-locksmiths-local-seo",
    title: "Border Locksmiths Local SEO",
    client: "Border Locksmiths",
    category: "seo",
    tags: ["Local SEO", "On-Page SEO", "Technical SEO", "Content Strategy"],
    summary: "A five-month SEO campaign for an Australian locksmith business that grew search visibility to 2.1M impressions and 12.2K clicks across the tracked period.",
    coverImage: "/case-studies/border-locksmiths/border-locksmiths-1.webp",
    gallery: [
      "/case-studies/border-locksmiths/border-locksmiths-1.webp",
      "/case-studies/border-locksmiths/border-locksmiths-2.webp",
      "/case-studies/border-locksmiths/border-locksmiths-3.webp",
      "/case-studies/border-locksmiths/border-locksmiths-4.webp",
      "/case-studies/border-locksmiths/border-locksmiths-5.webp",
      "/case-studies/border-locksmiths/border-locksmiths-6.webp",
      "/case-studies/border-locksmiths/border-locksmiths-7.webp",
      "/case-studies/border-locksmiths/border-locksmiths-8.webp",
    ],
    technologies: ["Google Search Console", "Semrush", "Technical SEO", "On-page SEO"],
    timeline: "5 months active campaign",
    challenge: "Border Locksmiths came in with almost no organic search presence, thin content, no structured keyword targeting, and no technical SEO foundation.",
    solution: "Built the site's topical and technical foundation through keyword research, service and location content, on-page optimisation, technical SEO, and early link building.",
    results: [
      { label: "Google Search impressions", value: "2.1M" },
      { label: "Google Search clicks", value: "12.2K" },
      { label: "Organic position", value: "5" },
    ],
    featured: true,
    relatedProjects: ["phone-fashion-fix-local-seo", "pixc-retouch-global-seo"],
    metaTitle: "Border Locksmiths Local SEO Project",
    metaDescription: "A local SEO project for Border Locksmiths combining on-page, technical, content, keyword, and off-page SEO.",
  },
  {
    slug: "alfis-ltd-website",
    title: "Alfis Ltd Website",
    client: "Alfis Ltd",
    category: "website",
    tags: ["Web Development", "Business Website", "Responsive Design"],
    summary:
      "A responsive business website built to present Alfis Ltd's services and establish a clear, professional online presence.",
    coverImage: "/website design development portfolio/alfisltd.webp",
    gallery: ["/website design development portfolio/alfisltd.webp"],
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
    coverImage: "/website design development portfolio/bd pro palestine.webp",
    gallery: ["/website design development portfolio/bd pro palestine.webp"],
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
    coverImage: "/website design development portfolio/Muhsinmashkur.webp",
    gallery: ["/website design development portfolio/Muhsinmashkur.webp"],
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
    coverImage: "/website design development portfolio/Stitch.webp",
    gallery: ["/website design development portfolio/Stitch.webp"],
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
      "A local SEO campaign that built a 34-page service architecture and grew organic visibility for a device repair business in Ocala, Florida, reaching 226 clicks and 20.5K impressions in the latest six-month Search Console view.",
    coverImage: "/case-studies/phone-fashion-fix/image-10.png",
    gallery: [
      "/case-studies/phone-fashion-fix/image-1.webp",
      "/case-studies/phone-fashion-fix/image-2.webp",
      "/case-studies/phone-fashion-fix/image-3.webp",
      "/case-studies/phone-fashion-fix/image-4.webp",
      "/case-studies/phone-fashion-fix/image-5.webp",
      "/case-studies/phone-fashion-fix/image-6.webp",
      "/case-studies/phone-fashion-fix/image-7.webp",
      "/case-studies/phone-fashion-fix/image-8.webp",
      "/case-studies/phone-fashion-fix/image-9.webp",
      "/case-studies/phone-fashion-fix/image-10.png",
    ],
    technologies: ["Google Search Console", "Local SEO", "Content Architecture", "Internal Linking"],
    timeline: "Phased campaign, 2026",
    challenge:
      "The repair business needed to compete with national chains and established local shops without relying on one generic services page or a shallow local search presence.",
    solution:
      "Built a hub-and-spoke local SEO structure across iPhone, iPad, Android, tablet, and common repair issue silos, supported by service pages, semantic content, internal linking, and local search signals.",
    results: [
      { label: "Service architecture", value: "34 pages" },
      { label: "Six-month impressions", value: "20.5K" },
      { label: "Six-month clicks", value: "226" },
      { label: "Topical silos built", value: "5" },
    ],
    featured: true,
    relatedProjects: ["stitchbd-ecommerce-website", "jarixo-website"],
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
    coverImage: "/case-studies/pixc-retouch/image-1.webp",
    gallery: [
      "/case-studies/pixc-retouch/image-1.webp",
      "/case-studies/pixc-retouch/image-2.webp",
      "/case-studies/pixc-retouch/image-3.webp",
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
    coverImage: "/website design development portfolio/rihawebtech.webp",
    gallery: ["/website design development portfolio/rihawebtech.webp"],
    technologies: ["Responsive Design", "UI/UX", "Web Development"],
    timeline: "Project delivery",
    challenge:
      "The website needed to communicate a broad digital service offering clearly while making it easy for potential clients to understand the agency and take the next step.",
    solution:
      "Created a structured, responsive web experience with clear service presentation, focused navigation, strong visual hierarchy, and conversion-oriented calls to action.",
    results: [],
    liveUrl: "https://rihawebtech.com",
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
    coverImage: "/website design development portfolio/dr shafiul islam kawsar.webp",
    gallery: ["/website design development portfolio/dr shafiul islam kawsar.webp"],
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
    coverImage: "/website design development portfolio/dontvalidatelabels.webp",
    gallery: ["/website design development portfolio/dontvalidatelabels.webp"],
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
    coverImage: "/website design development portfolio/pharmacity.webp",
    gallery: ["/website design development portfolio/pharmacity.webp"],
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
    coverImage: "/website design development portfolio/plan abroad.webp",
    gallery: ["/website design development portfolio/plan abroad.webp"],
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
    coverImage: "/website design development portfolio/Nazmulhoq.webp",
    gallery: ["/website design development portfolio/Nazmulhoq.webp"],
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
    coverImage: "/website design development portfolio/businessclub.webp",
    gallery: ["/website design development portfolio/businessclub.webp"],
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
  {
    slug: "jarixo-website",
    title: "Jarixo Wellness Store",
    client: "Jarixo",
    category: "website",
    tags: ["E-commerce", "Shopify", "Wellness Store", "Web Development"],
    summary:
      "A premium wellness storefront built around calm visual storytelling, product discovery, and a smoother path to purchase for an 11-SKU device-based relief catalog.",
    coverImage: "/website design development portfolio/jarixo.webp",
    gallery: ["/website design development portfolio/jarixo.webp", "/case-studies/Jarixo/Jarixo Website.webp"],
    technologies: ["Shopify", "E-commerce", "Product Discovery", "UX Design"],
    timeline: "Shopify store build",
    challenge:
      "Jarixo needed a wellness storefront that could present an 11-product at-home relief catalog clearly and guide visitors from body-area problems to the right device.",
    solution:
      "Built a Shopify storefront around calm visual storytelling, organized product discovery, and collection pages that connect each product to a clear purchase path.",
    results: [
      { label: "Products live", value: "11 SKUs" },
      { label: "Collection pages", value: "Device and use-case categories" },
    ],
    liveUrl: "https://jarixo.com/",
    featured: true,
    relatedProjects: ["jarixo-topical-map-seo-visibility", "derma-ghor-website", "stitchbd-ecommerce-website"],
    metaTitle: "Jarixo Wellness Store Project",
    metaDescription:
      "A Shopify wellness e-commerce storefront for Jarixo built around product discovery, visual storytelling, and conversion-focused UX.",
  },
  {
    slug: "jarixo-topical-map-seo-visibility",
    title: "Jarixo Topical Map SEO",
    client: "Jarixo",
    category: "seo",
    tags: ["Topical Authority", "Content Strategy", "Internal Linking", "Shopify SEO"],
    summary:
      "A 10-pillar topical-authority framework that turned an 11-SKU wellness catalog into a structured content and internal-linking system built for organic search growth.",
    coverImage: "/case-studies/Jarixo/Jarixo Website.webp",
    gallery: ["/case-studies/Jarixo/Jarixo Website.webp"],
    technologies: ["Topical Authority Framework", "Semrush", "Ahrefs", "Shopify"],
    timeline: "Topical map and content strategy project",
    challenge:
      "Jarixo had 11 live products and Shopify collection pages, but no blog, internal linking system, or defined search intent connecting the product catalog to content.",
    solution:
      "Mapped the catalog into 10 topical pillars and three content layers, separated commercial collection intent from informational hub intent, and produced roughly 100 content opportunities with a built-in internal-link structure.",
    results: [
      { label: "Topical pillars", value: "10" },
      { label: "Content layers", value: "3" },
      { label: "Content opportunities mapped", value: "100+" },
    ],
    liveUrl: "https://jarixo.com/",
    featured: false,
    relatedProjects: ["jarixo-website", "pixc-retouch-global-seo", "phone-fashion-fix-local-seo"],
    metaTitle: "Jarixo Topical Map SEO Project",
    metaDescription:
      "A 10-pillar topical authority framework that structured Jarixo's 11-SKU wellness catalog for organic search growth.",
  },
  {
    slug: "ferdoush-saleheen-website",
    title: "Dr. Ferdoush Saleheen Website",
    client: "Dr. Ferdoush Saleheen",
    category: "website",
    tags: ["Personal Website", "Next.js", "Web Development"],
    summary:
      "A bilingual personal platform presenting an academic and supply-chain leader's profile, books, audiobooks, podcasts, research, and public thought leadership.",
    coverImage: "/website design development portfolio/ferdoush-saleheen.webp",
    gallery: ["/website design development portfolio/ferdoush-saleheen.webp"],
    technologies: ["React / Next.js", "Responsive Design", "Content Architecture"],
    timeline: "Personal brand website build",
    challenge:
      "An academic leader entering personal branding needed a credible bilingual platform to consolidate his profile, publications, and media presence in one place.",
    solution:
      "Built a Next.js personal platform with a clear structure for profile, books, audiobooks, podcasts, and research, designed to grow alongside his content and media work.",
    results: [
      { label: "Content sections", value: "Profile, books, audiobooks, podcasts, research" },
    ],
    liveUrl: "https://ferdoushsaleheen.com/",
    featured: true,
    relatedProjects: ["dr-ferdoush-saleheen-personal-brand", "dr-shafiul-islam-kawsar-website", "muhsin-mashkur-website"],
    metaTitle: "Dr. Ferdoush Saleheen Website Project",
    metaDescription:
      "A bilingual personal brand platform for Dr. Ferdoush Saleheen built with Next.js and structured for profile, media, and research content.",
  },
  {
    slug: "dr-ferdoush-saleheen-personal-brand",
    title: "Dr. Ferdoush Saleheen Personal Brand Launch",
    client: "Dr. Ferdoush Saleheen",
    category: "branding",
    tags: ["Personal Branding", "Content Strategy", "Video Production", "Short-Form Video"],
    summary:
      "A personal brand launch that shaped academic and supply-chain expertise into short-form video. The very first YouTube Short earned 350K+ views and his content scaled to over 7.2 million views on Facebook.",
    coverImage: "/case-studies/ferdoush-saleheen/proof-1m-views.webp",
    gallery: [
      "/case-studies/ferdoush-saleheen/proof-1m-views.webp",
      "/case-studies/ferdoush-saleheen/proof-447k-views.webp",
      "/case-studies/ferdoush-saleheen/proof-390k-views.webp",
    ],
    technologies: ["Content Strategy", "Video Shooting", "High-Retention Editing", "YouTube Shorts", "Facebook Reels"],
    timeline: "April to May 2026",
    challenge:
      "Dr. Ferdoush Saleheen had strong professional credibility and industry knowledge but had never published personal brand content, starting from zero previous presence and a 5-subscriber channel.",
    solution:
      "Built a content direction around his professional identity, converted academic depth into accessible short-form concepts, and handled concept planning, shooting, retention-focused editing, and simultaneous distribution across YouTube Shorts and Facebook Reels.",
    results: [
      { label: "Facebook views", value: "7.2M+" },
      { label: "First YouTube Short views", value: "350K+" },
      { label: "Breakout reels", value: "1M+ views each" },
    ],
    liveUrl: "https://ferdoushsaleheen.com/",
    featured: true,
    relatedProjects: ["ferdoush-saleheen-website", "facebook-instagram-ads-portfolio"],
    metaTitle: "Dr. Ferdoush Saleheen Personal Brand Project",
    metaDescription:
      "Personal brand content strategy and short-form video production that scaled Dr. Ferdoush Saleheen from 5 subscribers to 7.2M+ Facebook views.",
  },
  {
    slug: "hotel-ashrafee-website",
    title: "Hotel Ashrafee Website",
    client: "Hotel Ashrafee",
    category: "website",
    tags: ["Hospitality", "Web Development", "Next.js", "Responsive Design"],
    summary:
      "A hospitality website presentation for rooms, location, and direct guest trust, built to turn browsing visitors into booking inquiries.",
    coverImage: "/website design development portfolio/hotel-ashrafee.webp",
    gallery: ["/website design development portfolio/hotel-ashrafee.webp"],
    technologies: ["React / Next.js", "Responsive Design", "Hospitality UX"],
    timeline: "Project delivery",
    challenge:
      "The hotel needed a website that presented rooms and location clearly while building enough direct trust for guests to inquire without going through third-party platforms.",
    solution:
      "Created a responsive hotel website with a clear room and facilities presentation, location context, and booking-oriented calls to action for direct guest contact.",
    results: [],
    liveUrl: "https://www.hotelashrafee.com/",
    featured: false,
    relatedProjects: ["pharmacity-website", "plan-abroad-website", "alfis-ltd-website"],
    metaTitle: "Hotel Ashrafee Website Project",
    metaDescription:
      "A hospitality website for Hotel Ashrafee presenting rooms, location, and direct booking trust across devices.",
  },
  {
    slug: "derma-ghor-website",
    title: "Derma Ghor Website",
    client: "Derma Ghor",
    category: "website",
    tags: ["E-commerce", "Next.js", "Skincare", "Web Development"],
    summary:
      "A Next.js skincare e-commerce platform for authentic imported products from France, Korea, USA, UK, and Japan, with guided product discovery and nationwide delivery.",
    coverImage: "/website design development portfolio/derma-ghor.webp",
    gallery: ["/website design development portfolio/derma-ghor.webp"],
    technologies: ["React / Next.js", "E-commerce", "Product Discovery", "Conversion UX"],
    timeline: "Project delivery",
    challenge:
      "An imported skincare store needed to communicate product authenticity and origin while organizing a growing catalog and keeping mobile shopping friction low.",
    solution:
      "Built a Next.js storefront with guided product discovery, clear country-of-origin presentation, category navigation, and a direct checkout or order path with nationwide delivery messaging.",
    results: [],
    liveUrl: "https://dermaghor.com/",
    featured: true,
    relatedProjects: ["jarixo-website", "dont-validate-labels-store", "stitchbd-ecommerce-website"],
    metaTitle: "Derma Ghor Website Project",
    metaDescription:
      "A Next.js skincare e-commerce platform for Derma Ghor with guided product discovery, authenticity presentation, and nationwide delivery.",
  },
  {
    slug: "thrive-clothing-website",
    title: "Thrive Clothing Website",
    client: "Thrive Clothing",
    category: "website",
    tags: ["E-commerce", "WordPress", "Fashion Store"],
    summary:
      "A WordPress fashion storefront for apparel collections, built around clean product browsing, category discovery, and a straightforward path to checkout.",
    coverImage: "/website design development portfolio/thrive-clothing.webp",
    gallery: ["/website design development portfolio/thrive-clothing.webp"],
    technologies: ["WordPress", "E-commerce", "WooCommerce", "Responsive Design"],
    timeline: "Project delivery",
    challenge:
      "The fashion brand needed to move its apparel collections online with a storefront that made browsing simple and checkout straightforward.",
    solution:
      "Built a WordPress fashion storefront with clean category structure, product browsing, and a direct path from collection discovery to checkout.",
    results: [],
    liveUrl: "https://thriveclothing.online/",
    featured: false,
    relatedProjects: ["stitchbd-ecommerce-website", "dont-validate-labels-store"],
    metaTitle: "Thrive Clothing Website Project",
    metaDescription:
      "A WooCommerce-powered WordPress fashion storefront for Thrive Clothing with clean product browsing and simple checkout.",
  },
  {
    slug: "business-byte-website",
    title: "Business Byte Website",
    client: "Business Byte",
    category: "website",
    tags: ["Web Product", "Next.js", "Web Development"],
    summary:
      "A digital business resource presented as a lightweight, fast web experience for readers and researchers.",
    coverImage: "/website design development portfolio/business-byte.webp",
    gallery: ["/website design development portfolio/business-byte.webp"],
    technologies: ["React / Next.js", "Responsive Design", "Content Presentation"],
    timeline: "Project delivery",
    challenge:
      "The project needed a lightweight web presence that could present business information clearly without heavy page weight.",
    solution:
      "Built a fast, responsive web experience with focused content structure and clean reading paths.",
    results: [],
    liveUrl: "https://businessbyte-rakin.vercel.app/",
    featured: false,
    relatedProjects: ["businessclub-website", "alfis-ltd-website"],
    metaTitle: "Business Byte Website Project",
    metaDescription:
      "A lightweight Next.js web experience for Business Byte with focused structure and clean reading paths.",
  },
  {
    slug: "real-estate-platform-demo",
    title: "Real Estate Platform Demo",
    client: "Frame Cipher Demo",
    category: "website",
    tags: ["Real Estate", "Platform Demo", "Next.js", "Property Portal"],
    summary:
      "A premium real estate platform demo designed for high-value property showcases, virtual walkthroughs, neighborhood insights, and direct buyer inquiry capture.",
    coverImage: "/website design development portfolio/real-estate-demo.webp",
    gallery: ["/website design development portfolio/real-estate-demo.webp"],
    technologies: ["React / Next.js", "Property Search UX", "Lead Capture", "Responsive Design"],
    timeline: "Product demo build",
    challenge:
      "High-value property buyers expect listing depth, walkthrough media, neighborhood context, and fast inquiry paths in one platform.",
    solution:
      "Designed a premium demo platform combining property showcases, virtual walkthrough sections, neighborhood insight modules, and direct buyer inquiry capture.",
    results: [],
    liveUrl: "https://realestate.framecipher.info/",
    featured: false,
    relatedProjects: ["ecommerce-store-demo", "mahedi-hasan-portfolio"],
    metaTitle: "Real Estate Platform Demo Project",
    metaDescription:
      "A premium real estate platform demo with property showcases, virtual walkthroughs, neighborhood insights, and buyer inquiry capture.",
  },
  {
    slug: "ecommerce-store-demo",
    title: "E-Commerce Store Demo",
    client: "Frame Cipher Demo",
    category: "website",
    tags: ["E-commerce", "Storefront Demo", "Next.js"],
    summary:
      "A modern lifestyle and beauty e-commerce storefront engineered for seamless mobile browsing, dynamic product catalogs, and high-conversion checkouts.",
    coverImage: "/website design development portfolio/ecommerce-demo.webp",
    gallery: ["/website design development portfolio/ecommerce-demo.webp"],
    technologies: ["React / Next.js", "E-commerce", "Product Catalog UX", "Conversion UX"],
    timeline: "Product demo build",
    challenge:
      "The demo needed to show how a small beauty or lifestyle brand could run a storefront with mobile-first browsing and clean conversion paths.",
    solution:
      "Built a demo storefront with dynamic product catalogs, mobile-first browsing, and a streamlined high-conversion checkout experience.",
    results: [],
    liveUrl: "https://ecommerce.framecipher.info/",
    featured: false,
    relatedProjects: ["real-estate-platform-demo", "jarixo-website"],
    metaTitle: "E-Commerce Store Demo Project",
    metaDescription:
      "A modern e-commerce storefront demo for a beauty brand with dynamic catalogs and high-conversion checkout flows.",
  },
  {
    slug: "mahedi-hasan-portfolio",
    title: "Mahedi Hasan Portfolio Website",
    client: "Mahedi Hasan",
    category: "website",
    tags: ["Personal Portfolio", "Next.js", "Web Development"],
    summary:
      "Personal portfolio showcasing technical SEO campaigns, full-stack web platforms, performance marketing systems, and agency growth engineering.",
    coverImage: "/website design development portfolio/mahedi-hasan-portfolio.webp",
    gallery: ["/website design development portfolio/mahedi-hasan-portfolio.webp"],
    technologies: ["React / Next.js", "SEO", "Content Architecture", "Responsive Design"],
    timeline: "Project delivery",
    challenge:
      "The portfolio needed to present campaigns, platforms, and results in a structure engineers and clients could scan quickly.",
    solution:
      "Built a personal portfolio site organizing SEO campaigns, web platforms, and performance-marketing work into clear, navigable sections.",
    results: [],
    liveUrl: "https://mahedi.framecipher.info/",
    featured: false,
    relatedProjects: ["real-estate-platform-demo", "business-byte-website"],
    metaTitle: "Mahedi Hasan Portfolio Website Project",
    metaDescription:
      "A personal portfolio website showcasing technical SEO campaigns, web platforms, and performance marketing systems.",
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
