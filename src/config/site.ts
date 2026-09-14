// ============================================================================
// SITE CONFIGURATION
// Central source of truth for brand identity, URLs, and contact details.
// Update this file once; every page, schema block, and metadata call
// reads from here.
// ============================================================================

export const siteConfig = {
  name: "Mahedi Hasan",
  shortName: "MAHEDI",
  title: "Mahedi Hasan — Marketing Strategist & SEO Consultant | Web Developer",
  description:
    "Founder at FrameCipher and former Co-Founder at Riha Web Tech (2022–July 2024). Over 4+ years helping businesses scale through high-performance Next.js websites, data-driven Semantic SEO, and conversion-focused paid advertising.",
  url: "https://mahedihasanperves.vercel.app",
  ogImage: "/og/og-default.jpg",
  locale: "en_US",
  language: "en",

  agency: {
    name: "FrameCipher",
    role: "Founder & Web Architect",
    url: "https://mahedihasanperves.vercel.app",
    established: "2021",
    revenueDriven: "৳15 Lakh+",
    projectsDelivered: "50+",
    clientSatisfaction: "99%",
    yearsExperience: "4+",
    ratings: {
      clutch: "5.0",
      goodfirms: "4.8",
      google: "4.8",
      trustpilot: "4.5",
      shortlist: "4.9",
    },
    office: {
      address: "109, Ibrahimpur, Mirpur - 14",
      city: "Dhaka",
      postalCode: "1206",
      country: "Bangladesh",
      phone: "+880 1763 56221",
      email: "pervesmahedi@gmail.com",
      hours: "Saturday – Thursday: 9:00 AM – 7:00 PM (GMT+6)",
    },
  },

  author: {
    name: "Mahedi Hasan",
    jobTitle: "Founder of FrameCipher | Former Co-Founder, Riha Web Tech | SEO & Growth Strategist",
    company: "FrameCipher (Former Co-Founder, Riha Web Tech)",
    bio: "Founder of FrameCipher and former Co-Founder at Riha Web Tech (2022 – July 2024). Over 4+ years connecting Semantic SEO (Koray Gübür Framework), full-funnel paid advertising, and Next.js web applications into high-converting revenue systems.",
    image: "/Mahedi Hasan-transparent.png",
    email: "pervesmahedi@gmail.com",
    phone: "+880 1636-407711",
    whatsapp: "https://wa.me/8801636407711",
    location: {
      address: "Matikata, Dhaka Cantonment",
      city: "Dhaka",
      postalCode: "1206",
      country: "Bangladesh",
    },
  },

  social: {
    twitter: "https://x.com/mahedi_perves",
    linkedin: "https://www.linkedin.com/in/mahedi-hasan003/",
    github: "https://github.com/mahedi03",
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
