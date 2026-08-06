// ============================================================================
// CORE DOMAIN TYPES
// Single source of truth for all content shapes across the site.
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceContentSection {
  heading: string;
  paragraphs: string[];
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  overview: string;
  image?: string;
  icon: string;
  category: "development" | "seo" | "ads" | "strategy";
  benefits: { title: string; description: string; icon: string }[];
  features: { title: string; description: string; icon: string }[];
  process: ServiceProcessStep[];
  deliverables: ServiceDeliverable[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
  contentSections?: ServiceContentSection[];
  relatedServices: string[]; // slugs
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Portfolio
// ---------------------------------------------------------------------------

export type PortfolioCategory = "website" | "seo" | "paid-ads" | "branding";

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  tags: string[];
  summary: string;
  coverImage: string;
  gallery: string[];
  technologies: string[];
  timeline: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  liveUrl?: string;
  featured: boolean;
  relatedProjects: string[]; // slugs
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Case Studies
// ---------------------------------------------------------------------------

export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  change: string;
}

export interface CaseStudySnapshotItem {
  label: string;
  value: string;
}

export interface CaseStudySilo {
  name: string;
  hierarchy: string;
  pages: string;
}

export interface CaseStudyPerformanceRow {
  date: string;
  range: string;
  clicks: string;
  impressions: string;
  ctr: string;
  position: string;
}

export interface CaseStudyRankingRow {
  target: string;
  position: string;
  url?: string;
}

export interface CaseStudyRankingGroup {
  title: string;
  rows: CaseStudyRankingRow[];
  note?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: PortfolioCategory;
  summary: string;
  coverImage: string;
  timeline: string;
  tools: string[];
  problem: string;
  research: string;
  planning: string;
  strategy: string;
  execution: string;
  screenshots: string[];
  metrics: CaseStudyMetric[];
  lessonsLearned: string[];
  snapshot?: CaseStudySnapshotItem[];
  silos?: CaseStudySilo[];
  timelineSteps?: string[];
  performanceRows?: CaseStudyPerformanceRow[];
  scopePages?: string[];
  whyItWorked?: string[];
  resultReadout?: string[];
  screenshotCaptions?: string[];
  fullContent?: string;
  rankingGroups?: CaseStudyRankingGroup[];
  additionalResults?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  relatedCaseStudies: string[]; // slugs
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // markdown or rich text
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  readingTime: number; // minutes
  featured: boolean;
  relatedPosts: string[]; // slugs
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Testimonials / FAQ / Skills / Stats
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  avatar: string;
  quote: string;
  rating: number; // 1-5
  featured: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Skill {
  name: string;
  category: "development" | "seo" | "ads" | "tools" | "strategy";
  proficiency: number; // 0-100
  icon?: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: string;
}

// ---------------------------------------------------------------------------
// SEO / Structured Data helpers
// ---------------------------------------------------------------------------

export interface PageSEO {
  title: string;
  description: string;
  path: string; // e.g. "/services/seo"
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------

export interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
}
