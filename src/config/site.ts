// ============================================================================
// SITE CONFIGURATION
// Central source of truth for brand identity, URLs, and contact details.
// Update this file once; every page, schema block, and metadata call
// reads from here.
// ============================================================================

export const siteConfig = {
  name: "Mahedi Hasan",
  shortName: "MH",
  title: "Mahedi Hasan — Digital Marketing Specialist & Web Developer",
  description:
    "Digital Marketing Specialist and Full-Stack Developer helping businesses grow through high-performance websites, SEO, and paid advertising.",
  url: "https://www.yourdomain.com", // TODO: replace with production domain
  ogImage: "/og/og-default.jpg",
  locale: "en_US",
  language: "en",

  author: {
    name: "Mahedi Hasan",
    jobTitle: "Digital Marketing Specialist",
    email: "pervesmahedi@gmail.com",
    phone: "+880-1636407711",
    whatsapp: "https://wa.me/+8801636407711",
    location: {
      city: "Your City",
      country: "Your Country",
    },
  },

  social: {
    twitter: "https://x.com/mahedi_perves",
    linkedin: "https://www.linkedin.com/in/mahedi-hasan003/",
    github: "https://github.com/mahedi03",
    instagram: "https://www.instagram.com/*.mahedi*",
    facebook: "https://www.facebook.com/mahedihasan.perves/",
  },

  // Feature flags — toggle sections without deleting code
  features: {
    blog: true,
    caseStudies: true,
    newsletter: true,
    darkMode: true,
    whatsappFloatingButton: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
