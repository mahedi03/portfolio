import type { Service } from "@/types";

/**
 * All service offerings. Add a new object here and a page is automatically
 * generated at /services/[slug] via generateStaticParams in
 * src/app/services/[slug]/page.tsx.
 */
export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Web Development",
    tagline: "Fast, modern websites built to convert",
    overview:
      "Custom-built, high-performance websites using Next.js and modern frameworks — engineered for speed, accessibility, and search visibility from day one.",
    icon: "Code2",
    category: "development",
    benefits: [
      {
        title: "Built for speed",
        description: "Sub-2-second load times with optimized Core Web Vitals.",
        icon: "Zap",
      },
      {
        title: "SEO-ready foundation",
        description: "Semantic HTML, structured data, and metadata baked in.",
        icon: "Search",
      },
      {
        title: "Scales with your business",
        description: "Component-driven architecture that grows without rework.",
        icon: "TrendingUp",
      },
    ],
    features: [
      { title: "Responsive design", description: "Mobile-first across every breakpoint.", icon: "Smartphone" },
      { title: "CMS integration", description: "Headless CMS or custom admin, your choice.", icon: "Database" },
      { title: "Performance tuning", description: "Image, font, and script optimization.", icon: "Gauge" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understand goals, audience, and technical requirements." },
      { step: 2, title: "Design", description: "Wireframes and high-fidelity UI design in Figma." },
      { step: 3, title: "Development", description: "Build in Next.js with clean, typed, tested code." },
      { step: 4, title: "Launch", description: "QA, performance audit, and deployment to production." },
    ],
    deliverables: [
      { title: "Production codebase", description: "Fully documented, version-controlled repository." },
      { title: "Performance report", description: "Lighthouse scores and Core Web Vitals baseline." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    faqs: [
      {
        question: "How long does a website build take?",
        answer: "Typical projects take 4 to 8 weeks depending on scope, from discovery through launch.",
      },
      {
        question: "Do you build on WordPress or custom code?",
        answer: "Both, depending on your needs — custom Next.js for performance-critical sites, WordPress for content-heavy sites needing a familiar CMS.",
      },
    ],
    relatedServices: ["seo", "technical-seo", "cro"],
    metaTitle: "Website Development Services",
    metaDescription:
      "Custom Next.js website development focused on speed, SEO, and conversions. Built for businesses that need a fast, scalable web presence.",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    tagline: "Sustainable organic growth through search",
    overview:
      "Comprehensive SEO strategy combining technical foundations, content, and authority building to grow qualified organic traffic over time.",
    icon: "Search",
    category: "seo",
    benefits: [
      { title: "Compounding traffic", description: "Organic visibility that grows month over month.", icon: "TrendingUp" },
      { title: "Higher-quality leads", description: "Capture intent-driven search traffic.", icon: "Users" },
      { title: "Lower acquisition cost", description: "Reduce long-term reliance on paid channels.", icon: "PiggyBank" },
    ],
    features: [
      { title: "Keyword research", description: "Data-driven targeting of high-value search terms.", icon: "Search" },
      { title: "On-page optimization", description: "Titles, content, internal linking, and schema.", icon: "FileText" },
      { title: "Content strategy", description: "Topical authority maps and content clusters.", icon: "Layers" },
    ],
    process: [
      { step: 1, title: "Audit", description: "Full technical and content audit of the current site." },
      { step: 2, title: "Strategy", description: "Keyword clustering and topical authority mapping." },
      { step: 3, title: "Execution", description: "On-page, technical, and content implementation." },
      { step: 4, title: "Reporting", description: "Monthly ranking, traffic, and conversion reports." },
    ],
    deliverables: [
      { title: "SEO audit report", description: "Prioritized list of technical and content opportunities." },
      { title: "Monthly performance reports", description: "Rankings, traffic, and conversions tracked over time." },
    ],
    technologies: ["Google Search Console", "Ahrefs", "Semrush", "GA4"],
    faqs: [
      {
        question: "How long until I see SEO results?",
        answer: "Most sites see meaningful movement within 3 to 6 months, with compounding gains after that.",
      },
    ],
    relatedServices: ["technical-seo", "local-seo", "content-marketing"],
    metaTitle: "SEO Services",
    metaDescription:
      "Data-driven SEO services to grow organic traffic sustainably — keyword strategy, on-page optimization, and content clusters that rank.",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical SEO",
    tagline: "A crawlable, indexable, fast foundation",
    overview:
      "Deep technical audits and fixes covering crawlability, indexation, site speed, and structured data so search engines can find and rank your content.",
    icon: "Settings2",
    category: "seo",
    benefits: [
      { title: "Better crawl efficiency", description: "Search engines find and index your best pages faster.", icon: "Bot" },
      { title: "Fewer indexation issues", description: "Eliminate duplicate content and crawl traps.", icon: "ShieldCheck" },
      { title: "Faster pages", description: "Core Web Vitals improvements that support rankings.", icon: "Gauge" },
    ],
    features: [
      { title: "Crawl audits", description: "Full site crawl to identify technical blockers.", icon: "Bug" },
      { title: "Site speed optimization", description: "LCP, CLS, and INP improvements.", icon: "Zap" },
      { title: "Structured data", description: "Schema markup implementation across page types.", icon: "Code" },
    ],
    process: [
      { step: 1, title: "Crawl & audit", description: "Full-site technical crawl using enterprise tools." },
      { step: 2, title: "Prioritize", description: "Rank issues by SEO impact and implementation effort." },
      { step: 3, title: "Fix", description: "Implement fixes directly or guide your dev team." },
      { step: 4, title: "Monitor", description: "Ongoing monitoring for regressions." },
    ],
    deliverables: [
      { title: "Technical audit report", description: "Prioritized issues with clear remediation steps." },
    ],
    technologies: ["Screaming Frog", "Google Search Console", "PageSpeed Insights"],
    faqs: [
      {
        question: "What's the difference between SEO and technical SEO?",
        answer: "Technical SEO focuses on the infrastructure — crawlability, speed, indexation — that allows broader SEO and content efforts to work.",
      },
    ],
    relatedServices: ["seo", "website-development"],
    metaTitle: "Technical SEO Services",
    metaDescription:
      "Technical SEO audits and fixes for crawlability, indexation, and Core Web Vitals — the foundation your rankings depend on.",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    tagline: "Win the map pack and local search",
    overview:
      "Google Business Profile optimization, local citations, and location-based content strategy to help multi-location and local businesses rank nearby.",
    icon: "MapPin",
    category: "seo",
    benefits: [
      { title: "Map pack visibility", description: "Rank in the local 3-pack for high-intent searches.", icon: "MapPin" },
      { title: "More foot traffic", description: "Convert local searches into store visits and calls.", icon: "Footprints" },
      { title: "Multi-location scale", description: "Consistent optimization across every location.", icon: "Building2" },
    ],
    features: [
      { title: "Google Business Profile", description: "Full optimization and ongoing management.", icon: "MapPin" },
      { title: "Citation building", description: "Consistent NAP across relevant directories.", icon: "ListChecks" },
      { title: "Local schema markup", description: "LocalBusiness structured data implementation.", icon: "Code" },
    ],
    process: [
      { step: 1, title: "Local audit", description: "Review current local presence and competitor gaps." },
      { step: 2, title: "Profile optimization", description: "GBP, citations, and on-site local signals." },
      { step: 3, title: "Content & links", description: "Location pages and local link building." },
      { step: 4, title: "Track & report", description: "Local rank tracking and call/visit reporting." },
    ],
    deliverables: [
      { title: "Local SEO audit", description: "Full review of GBP, citations, and local rankings." },
    ],
    technologies: ["Google Business Profile", "BrightLocal", "Google Maps API"],
    faqs: [
      {
        question: "Do you support multi-location businesses?",
        answer: "Yes — local SEO for multi-location brands is one of our core specialties, with per-location optimization and reporting.",
      },
    ],
    relatedServices: ["seo", "technical-seo"],
    metaTitle: "Local SEO Services",
    metaDescription:
      "Local SEO services for businesses that need to rank in local search and the Google Maps pack — GBP optimization, citations, and more.",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortTitle: "Google Ads",
    tagline: "High-intent traffic, measurable ROI",
    overview:
      "Search, Display, Shopping, and Performance Max campaigns built around clear ROAS targets and continuous optimization.",
    icon: "Target",
    category: "ads",
    benefits: [
      { title: "High purchase intent", description: "Capture users actively searching for your offer.", icon: "Target" },
      { title: "Full funnel coverage", description: "Search, Display, Shopping, and PMax working together.", icon: "Layers" },
      { title: "Transparent reporting", description: "Clear ROAS and CPA tracking, no black boxes.", icon: "BarChart3" },
    ],
    features: [
      { title: "Campaign structure", description: "Built for Quality Score and long-term efficiency.", icon: "Layout" },
      { title: "Conversion tracking", description: "Accurate GA4 and Google Ads conversion setup.", icon: "CheckCircle2" },
      { title: "Ongoing optimization", description: "Weekly bid, budget, and creative refinement.", icon: "RefreshCw" },
    ],
    process: [
      { step: 1, title: "Account audit", description: "Review existing account or plan from scratch." },
      { step: 2, title: "Build", description: "Campaign, ad group, and conversion tracking setup." },
      { step: 3, title: "Launch", description: "Controlled launch with close monitoring." },
      { step: 4, title: "Scale", description: "Data-driven scaling of what performs." },
    ],
    deliverables: [
      { title: "Campaign plan", description: "Structure, budget allocation, and targeting strategy." },
    ],
    technologies: ["Google Ads", "Google Tag Manager", "GA4"],
    faqs: [
      {
        question: "What budget do I need to start?",
        answer: "This varies by industry and competition — we'll recommend a starting budget after an account and market audit.",
      },
    ],
    relatedServices: ["analytics-tracking", "cro"],
    metaTitle: "Google Ads Management Services",
    metaDescription:
      "Google Ads management focused on measurable ROAS — Search, Shopping, Display, and Performance Max campaigns built and optimized for growth.",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    tagline: "Facebook & Instagram campaigns that scale",
    overview:
      "Full-funnel Meta advertising — creative strategy, audience targeting, and continuous testing across Facebook and Instagram.",
    icon: "Megaphone",
    category: "ads",
    benefits: [
      { title: "Precise targeting", description: "Reach the exact audience most likely to convert.", icon: "Crosshair" },
      { title: "Creative-led performance", description: "Ad creative built to stop the scroll and convert.", icon: "Palette" },
      { title: "Full-funnel strategy", description: "Prospecting, retargeting, and retention working together.", icon: "Filter" },
    ],
    features: [
      { title: "Audience research", description: "Custom and lookalike audience development.", icon: "Users" },
      { title: "Creative testing", description: "Systematic testing of angles, hooks, and formats.", icon: "TestTube2" },
      { title: "Pixel & CAPI setup", description: "Accurate tracking despite iOS/browser restrictions.", icon: "Shield" },
    ],
    process: [
      { step: 1, title: "Audit", description: "Review pixel, past performance, and account structure." },
      { step: 2, title: "Strategy", description: "Audience, offer, and creative strategy." },
      { step: 3, title: "Launch & test", description: "Structured testing across creative and audiences." },
      { step: 4, title: "Scale", description: "Scale winning combinations while controlling CPA." },
    ],
    deliverables: [
      { title: "Creative brief templates", description: "Frameworks for producing high-performing ad creative." },
    ],
    technologies: ["Meta Ads Manager", "Meta Pixel", "Conversions API"],
    faqs: [
      {
        question: "Do you handle ad creative production too?",
        answer: "Yes — creative strategy and direction are part of the service, with production handled in-house or via trusted partners.",
      },
    ],
    relatedServices: ["cro", "content-marketing"],
    metaTitle: "Meta Ads Management Services",
    metaDescription:
      "Facebook and Instagram ad management with creative-led strategy, precise targeting, and full-funnel campaign structure.",
  },
  {
    slug: "tiktok-ads",
    title: "TikTok Ads",
    shortTitle: "TikTok Ads",
    tagline: "Native short-form video that performs",
    overview:
      "TikTok Ads strategy and management built around native, high-performing short-form video creative and precise audience targeting.",
    icon: "Video",
    category: "ads",
    benefits: [
      { title: "Younger audience reach", description: "Access high-engagement Gen Z and Millennial audiences.", icon: "Users" },
      { title: "Native creative", description: "Ads that feel like content, not interruptions.", icon: "Video" },
      { title: "Lower CPMs (often)", description: "Efficient reach in a less saturated ad platform.", icon: "TrendingDown" },
    ],
    features: [
      { title: "Hook-first scripting", description: "Scripts built to retain attention in the first 3 seconds.", icon: "MessageSquare" },
      { title: "Spark Ads setup", description: "Boost organic-performing content as paid ads.", icon: "Sparkles" },
      { title: "Pixel & Events API", description: "Accurate conversion tracking setup.", icon: "Shield" },
    ],
    process: [
      { step: 1, title: "Strategy", description: "Define offer, audience, and creative direction." },
      { step: 2, title: "Production", description: "Script and produce native-feeling video ads." },
      { step: 3, title: "Launch", description: "Structured campaign launch and monitoring." },
      { step: 4, title: "Optimize", description: "Iterate on creative and targeting based on data." },
    ],
    deliverables: [
      { title: "Creative scripts", description: "Ready-to-shoot scripts optimized for retention." },
    ],
    technologies: ["TikTok Ads Manager", "TikTok Pixel", "Events API"],
    faqs: [
      {
        question: "Is TikTok Ads right for every business?",
        answer: "It works best for brands with visual products or services and an audience that skews younger — we'll assess fit during strategy.",
      },
    ],
    relatedServices: ["meta-ads", "content-marketing"],
    metaTitle: "TikTok Ads Management Services",
    metaDescription:
      "TikTok advertising strategy and management with native, hook-first video creative built to perform in a fast-scrolling feed.",
  },
  {
    slug: "pinterest-ads",
    title: "Pinterest Ads",
    shortTitle: "Pinterest Ads",
    tagline: "Visual discovery that drives purchase intent",
    overview:
      "Pinterest advertising for visually-driven brands — Idea Pins, Shopping Ads, and standard Promoted Pins tailored to high-intent discovery behavior.",
    icon: "Image",
    category: "ads",
    benefits: [
      { title: "High purchase intent", description: "Pinterest users actively plan purchases.", icon: "ShoppingBag" },
      { title: "Long content lifespan", description: "Pins continue driving traffic long after posting.", icon: "Clock" },
      { title: "Less competitive space", description: "Often lower CPCs than more saturated platforms.", icon: "TrendingDown" },
    ],
    features: [
      { title: "Shopping catalog setup", description: "Product catalog sync for Shopping Ads.", icon: "ShoppingCart" },
      { title: "Idea Pin strategy", description: "Multi-page visual storytelling formats.", icon: "Layers" },
      { title: "Keyword-driven targeting", description: "Search-like targeting based on Pinterest keywords.", icon: "Search" },
    ],
    process: [
      { step: 1, title: "Audit", description: "Review catalog, account, and past performance." },
      { step: 2, title: "Strategy", description: "Format, keyword, and audience planning." },
      { step: 3, title: "Launch", description: "Campaign build and launch." },
      { step: 4, title: "Optimize", description: "Ongoing bid and creative optimization." },
    ],
    deliverables: [
      { title: "Catalog audit", description: "Review of product feed quality and completeness." },
    ],
    technologies: ["Pinterest Ads Manager", "Pinterest Tag", "Catalogs"],
    faqs: [
      {
        question: "What kinds of brands do best on Pinterest?",
        answer: "E-commerce, home, fashion, wellness, and lifestyle brands typically see the strongest performance on Pinterest.",
      },
    ],
    relatedServices: ["meta-ads", "cro"],
    metaTitle: "Pinterest Ads Management Services",
    metaDescription:
      "Pinterest advertising for visually-driven brands — Shopping Ads, Idea Pins, and Promoted Pins built around high-intent discovery.",
  },
  {
    slug: "cro",
    title: "Conversion Rate Optimization",
    shortTitle: "CRO",
    tagline: "Turn more visitors into customers",
    overview:
      "Systematic testing and UX improvements across your site to increase conversion rate without increasing traffic spend.",
    icon: "TrendingUp",
    category: "strategy",
    benefits: [
      { title: "More revenue, same traffic", description: "Extract more value from existing visitors.", icon: "DollarSign" },
      { title: "Data-driven decisions", description: "Test hypotheses instead of guessing.", icon: "FlaskConical" },
      { title: "Better user experience", description: "CRO improvements often improve usability broadly.", icon: "Smile" },
    ],
    features: [
      { title: "Heatmap & session analysis", description: "Understand real user behavior on your site.", icon: "Activity" },
      { title: "A/B testing", description: "Structured testing of key conversion points.", icon: "TestTube2" },
      { title: "Funnel analysis", description: "Identify and fix drop-off points in the funnel.", icon: "Filter" },
    ],
    process: [
      { step: 1, title: "Analyze", description: "Review analytics, heatmaps, and session recordings." },
      { step: 2, title: "Hypothesize", description: "Prioritize test ideas by expected impact." },
      { step: 3, title: "Test", description: "Run structured A/B or multivariate tests." },
      { step: 4, title: "Implement", description: "Roll out winning variations permanently." },
    ],
    deliverables: [
      { title: "CRO audit", description: "Prioritized list of conversion opportunities." },
    ],
    technologies: ["Hotjar", "Google Optimize alternatives", "GA4"],
    faqs: [
      {
        question: "How much traffic do I need for CRO testing?",
        answer: "Meaningful A/B testing generally needs a few thousand monthly visitors to reach statistical significance in reasonable time.",
      },
    ],
    relatedServices: ["website-development", "google-ads"],
    metaTitle: "Conversion Rate Optimization Services",
    metaDescription:
      "CRO services combining heatmaps, session recordings, and structured A/B testing to increase conversions without more ad spend.",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content Marketing",
    tagline: "Content that ranks and builds authority",
    overview:
      "Strategic content production — blog articles, pillar pages, and topic clusters — designed to build topical authority and rank in search.",
    icon: "PenTool",
    category: "strategy",
    benefits: [
      { title: "Builds topical authority", description: "Comprehensive coverage signals expertise to search engines.", icon: "BookOpen" },
      { title: "Compounding asset", description: "Content keeps driving traffic long after publishing.", icon: "TrendingUp" },
      { title: "Supports every channel", description: "Fuels SEO, social, and email simultaneously.", icon: "Share2" },
    ],
    features: [
      { title: "Topical maps", description: "Pillar and cluster architecture for full topic coverage.", icon: "Map" },
      { title: "SEO-optimized writing", description: "Content built around real search intent and keywords.", icon: "FileText" },
      { title: "Editorial calendar", description: "Consistent publishing cadence and planning.", icon: "Calendar" },
    ],
    process: [
      { step: 1, title: "Research", description: "Keyword research and competitive content gap analysis." },
      { step: 2, title: "Map", description: "Build the pillar and cluster topical map." },
      { step: 3, title: "Produce", description: "Write, edit, and publish on schedule." },
      { step: 4, title: "Measure", description: "Track rankings, traffic, and engagement." },
    ],
    deliverables: [
      { title: "Topical authority map", description: "Full pillar/cluster content plan for your niche." },
    ],
    technologies: ["Ahrefs", "Semrush", "Google Search Console"],
    faqs: [
      {
        question: "How often should we publish?",
        answer: "Consistency matters more than volume — a sustainable weekly or biweekly cadence typically outperforms sporadic bursts.",
      },
    ],
    relatedServices: ["seo", "marketing-strategy"],
    metaTitle: "Content Marketing Services",
    metaDescription:
      "Strategic content marketing built on pillar-and-cluster architecture — content that builds topical authority and ranks in search.",
  },
  {
    slug: "marketing-strategy",
    title: "Marketing Strategy",
    shortTitle: "Marketing Strategy",
    tagline: "Full-funnel growth planning",
    overview:
      "Holistic marketing strategy connecting SEO, paid ads, content, and CRO into a single growth plan aligned with business goals.",
    icon: "Compass",
    category: "strategy",
    benefits: [
      { title: "Aligned channels", description: "Every channel working toward the same goals.", icon: "Layers" },
      { title: "Clear priorities", description: "Know exactly where to invest time and budget.", icon: "ListOrdered" },
      { title: "Measurable roadmap", description: "A plan with milestones, not just tactics.", icon: "Map" },
    ],
    features: [
      { title: "Market & competitor analysis", description: "Understand the landscape before planning.", icon: "Search" },
      { title: "Channel strategy", description: "Right-fit mix of SEO, paid, content, and email.", icon: "GitBranch" },
      { title: "Goal setting & KPIs", description: "Clear, measurable targets tied to business outcomes.", icon: "Target" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understand business goals and current state." },
      { step: 2, title: "Analysis", description: "Market, competitor, and channel analysis." },
      { step: 3, title: "Plan", description: "Build the full-funnel strategy and roadmap." },
      { step: 4, title: "Execute & iterate", description: "Implement and refine based on results." },
    ],
    deliverables: [
      { title: "Strategy document", description: "Full growth plan with channels, priorities, and KPIs." },
    ],
    technologies: ["GA4", "Semrush", "Notion"],
    faqs: [
      {
        question: "Do you also execute the strategy, or just plan it?",
        answer: "Both — strategy engagements typically transition into ongoing execution across the recommended channels.",
      },
    ],
    relatedServices: ["seo", "google-ads", "content-marketing"],
    metaTitle: "Marketing Strategy Services",
    metaDescription:
      "Full-funnel marketing strategy connecting SEO, paid ads, content, and CRO into one aligned growth roadmap.",
  },
  {
    slug: "analytics-tracking",
    title: "Analytics & Tracking",
    shortTitle: "Analytics & Tracking",
    tagline: "Accurate data you can actually trust",
    overview:
      "GA4, Google Tag Manager, and server-side tracking implementation so every marketing decision is backed by accurate data.",
    icon: "BarChart3",
    category: "strategy",
    benefits: [
      { title: "Accurate attribution", description: "Know which channels actually drive results.", icon: "GitCommit" },
      { title: "Privacy-resilient tracking", description: "Server-side setups that survive browser restrictions.", icon: "Shield" },
      { title: "Actionable dashboards", description: "Reports built around decisions, not vanity metrics.", icon: "LayoutDashboard" },
    ],
    features: [
      { title: "GA4 implementation", description: "Full event and conversion tracking setup.", icon: "BarChart3" },
      { title: "Tag Manager architecture", description: "Clean, maintainable GTM container structure.", icon: "Tags" },
      { title: "Custom dashboards", description: "Looker Studio dashboards tailored to your KPIs.", icon: "LayoutDashboard" },
    ],
    process: [
      { step: 1, title: "Audit", description: "Review current tracking setup for gaps and errors." },
      { step: 2, title: "Implement", description: "Build GA4, GTM, and server-side tracking." },
      { step: 3, title: "Validate", description: "QA every event and conversion path." },
      { step: 4, title: "Report", description: "Ongoing dashboards and data QA." },
    ],
    deliverables: [
      { title: "Tracking audit", description: "Full review of current analytics implementation." },
    ],
    technologies: ["GA4", "Google Tag Manager", "Looker Studio", "Server-side GTM"],
    faqs: [
      {
        question: "Can you fix broken tracking on an existing site?",
        answer: "Yes — tracking audits and remediation for existing GA4/GTM setups are a common starting point.",
      },
    ],
    relatedServices: ["google-ads", "cro"],
    metaTitle: "Analytics & Tracking Services",
    metaDescription:
      "GA4, Google Tag Manager, and server-side tracking implementation for accurate, privacy-resilient marketing data.",
  },
  {
    slug: "chatgpt-ads",
    title: "ChatGPT Ads Strategy & Campaign Management",
    shortTitle: "ChatGPT Ads",
    tagline: "Prepare for the next search and discovery channel",
    overview:
      "Eligibility-first ChatGPT Ads readiness, GEO/AEO alignment, creative strategy, and campaign management for Bangladesh and global brands.",
    icon: "Bot",
    category: "ads",
    benefits: [
      { title: "Eligibility-first planning", description: "Know where your business stands before committing budget.", icon: "ShieldCheck" },
      { title: "Context-led targeting", description: "Plan for the questions and situations that bring people to ChatGPT.", icon: "MessageSquare" },
      { title: "Paid and organic alignment", description: "Connect sponsored readiness with GEO and AEO visibility.", icon: "GitBranch" },
    ],
    features: [
      { title: "Eligibility assessment", description: "Review market, business, and category readiness before launch.", icon: "ClipboardCheck" },
      { title: "Context-hint strategy", description: "Translate customer needs into useful conversation contexts.", icon: "MessagesSquare" },
      { title: "Creative and tracking", description: "Prepare offers, creative, conversion paths, and measurement.", icon: "BarChart3" },
    ],
    process: [
      { step: 1, title: "Check", description: "Confirm current eligibility and channel fit." },
      { step: 2, title: "Prepare", description: "Build context, creative, offer, and GEO/AEO direction." },
      { step: 3, title: "Launch", description: "Set up the campaign when access and market conditions allow." },
      { step: 4, title: "Learn", description: "Optimise carefully as platform measurement matures." },
    ],
    deliverables: [
      { title: "Readiness strategy", description: "A practical plan for access, creative, context, and conversion." },
      { title: "GEO/AEO action map", description: "Organic AI visibility recommendations that support paid preparation." },
    ],
    technologies: ["OpenAI Ads Manager", "GEO", "AEO", "Conversion tracking"],
    faqs: [
      { question: "Can you launch ChatGPT Ads from Bangladesh?", answer: "We check current eligibility first. If direct access is not available, we build a readiness and GEO/AEO plan so you are prepared when access expands." },
      { question: "Do you guarantee ChatGPT Ads results?", answer: "No. The channel is still developing, so we provide honest eligibility guidance, careful measurement, and documented optimisation rather than invented benchmarks." },
    ],
    relatedServices: ["seo", "content-marketing", "analytics-tracking"],
    metaTitle: "ChatGPT Ads Agency | Strategy & Campaign Management",
    metaDescription: "Eligibility-first ChatGPT Ads strategy, creative, GEO/AEO readiness, and campaign management for Bangladesh and global brands.",
  },
  {
    slug: "media-buying",
    title: "Media Buying Services",
    shortTitle: "Media Buying",
    tagline: "Turn media budget into measurable demand",
    overview:
      "Cross-channel media buying strategy and management that connects audience, placement, creative, budget, and conversion quality.",
    icon: "BarChart3",
    category: "ads",
    benefits: [
      { title: "Smarter allocation", description: "Put budget behind the channels and audiences that can learn and perform.", icon: "PieChart" },
      { title: "Full-funnel coverage", description: "Coordinate demand capture, demand creation, and remarketing.", icon: "Filter" },
      { title: "Decision-ready reporting", description: "Understand what each channel contributes to the business.", icon: "LineChart" },
    ],
    features: [
      { title: "Channel planning", description: "Choose the right platform mix for your offer and buying cycle.", icon: "GitBranch" },
      { title: "Budget management", description: "Set learning, stop, and scale rules before spend accelerates.", icon: "WalletCards" },
      { title: "Creative testing", description: "Match messages and formats to the audience and funnel stage.", icon: "TestTube2" },
    ],
    process: [
      { step: 1, title: "Diagnose", description: "Review offer, audience, market, assets, and existing data." },
      { step: 2, title: "Plan", description: "Build the channel, budget, creative, and measurement framework." },
      { step: 3, title: "Activate", description: "Launch with controlled tests and clear quality checks." },
      { step: 4, title: "Optimise", description: "Reallocate budget based on qualified performance." },
    ],
    deliverables: [
      { title: "Media plan", description: "Channel roles, audience, placements, budget, and learning agenda." },
      { title: "Performance dashboard", description: "A clear view of spend, funnel movement, and business outcomes." },
    ],
    technologies: ["Google Ads", "Meta Ads", "TikTok Ads", "GA4", "Looker Studio"],
    faqs: [
      { question: "Which platforms do you buy media on?", answer: "The mix depends on the business. We commonly work across Google, Meta, TikTok, Pinterest, YouTube, and remarketing environments." },
      { question: "Is media buying the same as ad management?", answer: "Media buying is broader. It includes channel and budget planning, placement decisions, creative testing, optimisation, and reporting across the whole paid media system." },
    ],
    relatedServices: ["google-ads", "meta-ads", "analytics-tracking"],
    metaTitle: "Media Buying Services | Cross-Channel Paid Media",
    metaDescription: "Cross-channel media buying strategy and management for measurable demand, smarter budget allocation, and better campaign decisions.",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management Services",
    shortTitle: "Social Media",
    tagline: "A consistent, useful brand presence across social",
    overview:
      "Platform-specific social media strategy, content planning, publishing, community management, and reporting for growing brands.",
    icon: "Share2",
    category: "strategy",
    benefits: [
      { title: "Consistent publishing", description: "A reliable rhythm that keeps the brand visible and recognisable.", icon: "Calendar" },
      { title: "Platform-fit content", description: "Messages shaped for Facebook, Instagram, Pinterest, LinkedIn, and more.", icon: "Layers" },
      { title: "Stronger community trust", description: "Helpful responses and content that turns attention into relationships.", icon: "HeartHandshake" },
    ],
    features: [
      { title: "Content calendar", description: "Pillars, themes, campaigns, formats, and publishing cadence.", icon: "CalendarDays" },
      { title: "Community management", description: "Response workflows, moderation, and escalation guidance.", icon: "MessagesSquare" },
      { title: "Monthly insights", description: "Performance review focused on quality engagement and action.", icon: "BarChart3" },
    ],
    process: [
      { step: 1, title: "Discover", description: "Understand brand voice, audience, competitors, and goals." },
      { step: 2, title: "Plan", description: "Build channel roles, content pillars, and the monthly calendar." },
      { step: 3, title: "Publish", description: "Create, schedule, moderate, and keep the brand responsive." },
      { step: 4, title: "Improve", description: "Use insights to refine content and the next month’s plan." },
    ],
    deliverables: [
      { title: "Monthly content plan", description: "Themes, captions, creative direction, and publishing schedule." },
      { title: "Community playbook", description: "Practical guidance for responses, moderation, and brand tone." },
    ],
    technologies: ["Meta Business Suite", "Instagram", "Pinterest", "LinkedIn", "Canva"],
    faqs: [
      { question: "Which social platforms do you manage?", answer: "We can support Facebook, Instagram, Pinterest, LinkedIn, and other channels when there is a clear audience and business role for them." },
      { question: "Do you create the graphics and captions?", answer: "Yes. Content direction, captions, basic creative production, scheduling, and reporting can be included according to the agreed scope." },
    ],
    relatedServices: ["creative-content", "meta-ads", "content-marketing"],
    metaTitle: "Social Media Management Services | Strategy & Content",
    metaDescription: "Platform-specific social media management with content planning, publishing, community care, and performance reporting.",
  },
  {
    slug: "website-marketing",
    title: "Website Marketing Services in Bangladesh",
    shortTitle: "Website Marketing",
    tagline: "Make your website a stronger growth asset",
    overview:
      "Integrated website marketing across SEO, paid traffic, content, analytics, email, and conversion optimisation for Bangladesh-based businesses.",
    icon: "Globe2",
    category: "strategy",
    benefits: [
      { title: "One connected roadmap", description: "Align traffic, content, conversion, and measurement around the same goal.", icon: "Map" },
      { title: "Better value from traffic", description: "Improve the page experience before simply buying more visitors.", icon: "TrendingUp" },
      { title: "Bangladesh-first insight", description: "Plan for local language, mobile behaviour, and market context.", icon: "MapPin" },
    ],
    features: [
      { title: "Growth channel strategy", description: "Choose the right mix of SEO, paid, content, email, and social.", icon: "GitBranch" },
      { title: "Website conversion review", description: "Find messaging, UX, speed, trust, and form friction.", icon: "MousePointerClick" },
      { title: "Measurement plan", description: "Connect marketing actions with useful business outcomes.", icon: "ChartNoAxesCombined" },
    ],
    process: [
      { step: 1, title: "Assess", description: "Review website, audience, offer, competitors, and current channels." },
      { step: 2, title: "Prioritise", description: "Create a practical roadmap based on impact and effort." },
      { step: 3, title: "Execute", description: "Improve the website and activate the right distribution channels." },
      { step: 4, title: "Iterate", description: "Measure results, learn, and refine the growth system." },
    ],
    deliverables: [
      { title: "Website marketing roadmap", description: "Prioritised channel, content, conversion, and measurement plan." },
      { title: "Quarterly growth review", description: "A structured review of progress, constraints, and next opportunities." },
    ],
    technologies: ["GA4", "Google Search Console", "Google Ads", "Meta Ads", "Looker Studio"],
    faqs: [
      { question: "Do you only work on websites you built?", answer: "No. We can audit and market an existing website, then recommend development or conversion work only where it supports the marketing goal." },
      { question: "Is website marketing the same as SEO?", answer: "No. SEO is one part of website marketing. The wider service connects organic search with paid traffic, content, social, email, analytics, and conversion improvement." },
    ],
    relatedServices: ["seo", "google-ads", "cro"],
    metaTitle: "Website Marketing Services in Bangladesh",
    metaDescription: "Integrated website marketing services in Bangladesh across SEO, paid traffic, content, analytics, email, and conversion optimisation.",
  },
  {
    slug: "creative-content",
    title: "Creative Content Services",
    shortTitle: "Creative Content",
    tagline: "Clear, useful content for every customer touchpoint",
    overview:
      "Research-led content writing for websites, blogs, products, email, press releases, reviews, and social media that sounds human and supports growth.",
    icon: "PenTool",
    category: "strategy",
    benefits: [
      { title: "Content with a job", description: "Every piece is planned to inform, persuade, rank, or move the reader forward.", icon: "Target" },
      { title: "Consistent brand voice", description: "A clear editorial style across web, search, email, product, and social content.", icon: "Languages" },
      { title: "Search and conversion aware", description: "Write for the audience first while supporting discoverability and action.", icon: "FileSearch" },
    ],
    features: [
      { title: "Website and SEO content", description: "Service pages, landing pages, articles, blogs, and content clusters.", icon: "FileText" },
      { title: "Product and commercial copy", description: "Product descriptions, reviews, email newsletters, and campaign messaging.", icon: "ShoppingBag" },
      { title: "Social and PR writing", description: "Social captions, press releases, announcements, and editorial support.", icon: "Megaphone" },
    ],
    process: [
      { step: 1, title: "Brief", description: "Clarify audience, intent, offer, voice, evidence, and desired action." },
      { step: 2, title: "Research", description: "Review customer language, competitors, sources, and search context." },
      { step: 3, title: "Write", description: "Draft structured, useful content for its final channel and format." },
      { step: 4, title: "Refine", description: "Edit for clarity, accuracy, originality, readability, and fit." },
    ],
    deliverables: [
      { title: "Editorial content", description: "Polished content delivered in the agreed format and voice." },
      { title: "Content calendar or brief bank", description: "A repeatable system for planning the next pieces of content." },
    ],
    technologies: ["Google Docs", "Search Console", "Ahrefs", "Notion", "WordPress"],
    faqs: [
      { question: "What types of content can you write?", answer: "We write website pages, articles, blogs, product descriptions, marketing copy, press releases, email newsletters, product reviews, web content, and social media content." },
      { question: "Can you match an existing brand voice?", answer: "Yes. We review existing examples, customer language, preferred vocabulary, and editorial boundaries before drafting." },
    ],
    relatedServices: ["content-marketing", "seo", "social-media-management"],
    metaTitle: "Creative Content Services | Writing for Web, SEO & Social",
    metaDescription: "Research-led creative content services for websites, blogs, products, email, PR, reviews, and social media.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
