import type { NavItem, SocialLink } from "@/types";

export const serviceMegaMenuGroups = [
  {
    label: "Website Marketing",
    href: "/services/website-marketing",
    description: "Turn your website into a stronger growth asset",
    icon: "TrendingUp",
    items: [
      { label: "Website Marketing", href: "/services/website-marketing", description: "Integrated website growth strategy" },
      { label: "Conversion Rate Optimization", href: "/services/cro", description: "Turn more visitors into customers" },
      { label: "Analytics & Tracking", href: "/services/analytics-tracking", description: "GA4, GTM, and measurement infrastructure" },
      { label: "Marketing Strategy", href: "/services/marketing-strategy", description: "Full-funnel growth planning" },
    ],
  },
  {
    label: "SEO",
    href: "/services/seo",
    description: "Build durable organic search visibility",
    icon: "Search",
    items: [
      { label: "SEO", href: "/services/seo", description: "Organic growth through search optimization" },
      { label: "Technical SEO", href: "/services/technical-seo", description: "Crawlability, indexation, and site health" },
      { label: "Local SEO", href: "/services/local-seo", description: "Rank in local maps and searches" },
      { label: "Off-Page SEO", href: "/services/off-page-seo", description: "Relevant links, digital PR, and authority growth" },
      { label: "SEO Content Writing", href: "/services/seo-content-writing", description: "Pages, blogs, and topical authority content" },
      { label: "Content Marketing", href: "/services/content-marketing", description: "Content clusters that rank and convert" },
    ],
  },
  {
    label: "Media Buying",
    href: "/services/media-buying",
    description: "Put budget behind measurable demand",
    icon: "BarChart3",
    items: [
      { label: "Media Buying", href: "/services/media-buying", description: "Cross-channel paid media planning" },
      { label: "Google Ads", href: "/services/google-ads", description: "High-intent paid search campaigns" },
      { label: "Meta Ads", href: "/services/meta-ads", description: "Facebook and Instagram advertising" },
      { label: "TikTok Ads", href: "/services/tiktok-ads", description: "Short-form video ad campaigns" },
      { label: "Pinterest Ads", href: "/services/pinterest-ads", description: "Visual discovery advertising" },
      { label: "ChatGPT Ads", href: "/services/chatgpt-ads", description: "Readiness, GEO alignment, and campaign strategy" },
    ],
  },
  {
    label: "Website",
    href: "/services/website-development",
    description: "Fast, accessible digital experiences",
    icon: "Code2",
    items: [
      { label: "Website Development", href: "/services/website-development", description: "Fast, modern websites built to convert" },
      { label: "Creative Content", href: "/services/creative-content", description: "Writing for web, search, products, and social" },
      { label: "Social Media Management", href: "/services/social-media-management", description: "Platform-specific content and community management" },
    ],
  },
] as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Website Development",
        href: "/services/website-development",
        description: "Fast, modern, conversion-focused websites",
        icon: "Code2",
      },
      {
        label: "SEO",
        href: "/services/seo",
        description: "Organic growth through search optimization",
        icon: "Search",
      },
      {
        label: "Technical SEO",
        href: "/services/technical-seo",
        description: "Crawlability, indexation, and site health",
        icon: "Settings2",
      },
      {
        label: "Local SEO",
        href: "/services/local-seo",
        description: "Rank in local map packs and searches",
        icon: "MapPin",
      },
      {
        label: "Google Ads",
        href: "/services/google-ads",
        description: "High-intent paid search campaigns",
        icon: "Target",
      },
      {
        label: "Meta Ads",
        href: "/services/meta-ads",
        description: "Facebook & Instagram advertising",
        icon: "Megaphone",
      },
      {
        label: "TikTok Ads",
        href: "/services/tiktok-ads",
        description: "Short-form video ad campaigns",
        icon: "Video",
      },
      {
        label: "Pinterest Ads",
        href: "/services/pinterest-ads",
        description: "Visual discovery advertising",
        icon: "Image",
      },
      {
        label: "ChatGPT Ads",
        href: "/services/chatgpt-ads",
        description: "Readiness, GEO alignment, and campaign strategy",
        icon: "Bot",
      },
      {
        label: "Media Buying",
        href: "/services/media-buying",
        description: "Cross-channel paid media planning and optimisation",
        icon: "BarChart3",
      },
      {
        label: "Social Media Management",
        href: "/services/social-media-management",
        description: "Platform-specific content and community management",
        icon: "Share2",
      },
      {
        label: "Website Marketing",
        href: "/services/website-marketing",
        description: "Integrated marketing for your website and funnel",
        icon: "Globe2",
      },
      {
        label: "Creative Content",
        href: "/services/creative-content",
        description: "Writing for websites, search, products, email, and social",
        icon: "PenTool",
      },
      {
        label: "Conversion Rate Optimization",
        href: "/services/cro",
        description: "Turn more visitors into customers",
        icon: "TrendingUp",
      },
      {
        label: "Content Marketing",
        href: "/services/content-marketing",
        description: "Content that ranks and converts",
        icon: "PenTool",
      },
      {
        label: "Marketing Strategy",
        href: "/services/marketing-strategy",
        description: "Full-funnel growth planning",
        icon: "Compass",
      },
      {
        label: "Analytics & Tracking",
        href: "/services/analytics-tracking",
        description: "GA4, GTM, and data infrastructure",
        icon: "BarChart3",
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "SEO", href: "/services/seo" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Media Buying", href: "/services/media-buying" },
      { label: "Creative Content", href: "/services/creative-content" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "Twitter", href: "https://x.com/mahedi_perves", icon: "Twitter" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/mahedi-hasan003/", icon: "Linkedin" },
  { platform: "GitHub", href: "https://github.com/mahedi03", icon: "Github" },
  { platform: "Facebook", href: "https://www.facebook.com/mahedihasan.perves/", icon: "Facebook" },
];
