import type { Service } from "@/types";

/**
 * All service offerings. Add a new object here and a page is automatically
 * generated at /services/[slug] via generateStaticParams in
 * src/app/services/[slug]/page.tsx.
 */
export const services: Service[] = [
  {
    "slug": "website-development",
    "title": "Website Development",
    "shortTitle": "Web Development",
    "tagline": "Fast, modern websites built to convert",
    "overview": "Custom-built, high-performance websites using Next.js and modern frameworks — engineered for speed, accessibility, and search visibility from day one.",
    "icon": "Code2",
    "category": "development",
    "benefits": [
      {
        "title": "Built for speed",
        "description": "Sub-2-second load times with optimized Core Web Vitals.",
        "icon": "Zap"
      },
      {
        "title": "SEO-ready foundation",
        "description": "Semantic HTML, structured data, and metadata baked in.",
        "icon": "Search"
      },
      {
        "title": "Scales with your business",
        "description": "Component-driven architecture that grows without rework.",
        "icon": "TrendingUp"
      }
    ],
    "features": [
      {
        "title": "Responsive design",
        "description": "Mobile-first across every breakpoint.",
        "icon": "Smartphone"
      },
      {
        "title": "CMS integration",
        "description": "Headless CMS or custom admin, your choice.",
        "icon": "Database"
      },
      {
        "title": "Performance tuning",
        "description": "Image, font, and script optimization.",
        "icon": "Gauge"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Discovery",
        "description": "Understand goals, audience, and technical requirements."
      },
      {
        "step": 2,
        "title": "Design",
        "description": "Wireframes and high-fidelity UI design in Figma."
      },
      {
        "step": 3,
        "title": "Development",
        "description": "Build in Next.js with clean, typed, tested code."
      },
      {
        "step": 4,
        "title": "Launch",
        "description": "QA, performance audit, and deployment to production."
      }
    ],
    "deliverables": [
      {
        "title": "Production codebase",
        "description": "Fully documented, version-controlled repository."
      },
      {
        "title": "Performance report",
        "description": "Lighthouse scores and Core Web Vitals baseline."
      }
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    "faqs": [
      {
        "question": "How long does a website build take?",
        "answer": "Typical projects take 4 to 8 weeks depending on scope, from discovery through launch."
      },
      {
        "question": "Do you build on WordPress or custom code?",
        "answer": "Both, depending on your needs — custom Next.js for performance-critical sites, WordPress for content-heavy sites needing a familiar CMS."
      }
    ],
    "relatedServices": [
      "seo",
      "technical-seo",
      "cro",
      "website-marketing"
    ],
    "metaTitle": "Website Development Services",
    "metaDescription": "Custom Next.js website development focused on speed, SEO, and conversions. Built for businesses that need a fast, scalable web presence."
  },
  {
    "slug": "seo",
    "title": "SEO Services That Drive Sustainable Business Growth",
    "shortTitle": "SEO Services",
    "tagline": "Search visibility built around your business goals",
    "overview": "Data-driven SEO services combining technical foundations, search intent, content, internal linking, local visibility, and authority building to grow qualified organic traffic and leads over time.",
    "icon": "Search",
    "category": "seo",
    "benefits": [
      {
        "title": "Compounding traffic",
        "description": "Organic visibility that grows month over month.",
        "icon": "TrendingUp"
      },
      {
        "title": "Higher-quality leads",
        "description": "Capture intent-driven search traffic.",
        "icon": "Users"
      },
      {
        "title": "Lower acquisition cost",
        "description": "Reduce long-term reliance on paid channels.",
        "icon": "PiggyBank"
      }
    ],
    "features": [
      {
        "title": "Keyword research",
        "description": "Data-driven targeting of high-value search terms.",
        "icon": "Search"
      },
      {
        "title": "On-page optimization",
        "description": "Titles, content, internal linking, and schema.",
        "icon": "FileText"
      },
      {
        "title": "Content strategy",
        "description": "Topical authority maps and content clusters.",
        "icon": "Layers"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Audit",
        "description": "Full technical and content audit of the current site."
      },
      {
        "step": 2,
        "title": "Strategy",
        "description": "Keyword clustering and topical authority mapping."
      },
      {
        "step": 3,
        "title": "Execution",
        "description": "On-page, technical, and content implementation."
      },
      {
        "step": 4,
        "title": "Reporting",
        "description": "Monthly ranking, traffic, and conversion reports."
      }
    ],
    "deliverables": [
      {
        "title": "SEO audit report",
        "description": "Prioritized list of technical and content opportunities."
      },
      {
        "title": "Monthly performance reports",
        "description": "Rankings, traffic, and conversions tracked over time."
      }
    ],
    "technologies": [
      "Google Search Console",
      "Ahrefs",
      "Semrush",
      "GA4"
    ],
    "faqs": [
      {
        "question": "How long does SEO take to produce results?",
        "answer": "SEO timing depends on competition, website authority, technical condition, content quality, and implementation speed. Many businesses need several months of consistent work before meaningful growth becomes visible."
      },
      {
        "question": "What does your SEO process include?",
        "answer": "The process can include technical audits, keyword research, competitor analysis, content strategy, on-page optimization, internal linking, authority building, and performance monitoring."
      },
      {
        "question": "Do you provide local SEO services?",
        "answer": "Yes. Local SEO can include Google Business Profile optimization, local keyword research, location pages, citations, reviews, and local authority building."
      },
      {
        "question": "Can SEO help increase leads and sales?",
        "answer": "Yes, when search visibility is connected to useful landing pages, clear offers, trustworthy content, conversion tracking, and a sales process that can follow up with qualified demand."
      },
      {
        "question": "How much do SEO services cost?",
        "answer": "SEO pricing depends on the market, site size, competition, technical condition, content requirements, and execution scope. A tailored scope is more useful than a generic package price."
      }
    ],
    "relatedServices": [
      "technical-seo",
      "local-seo",
      "off-page-seo",
      "seo-content-writing",
      "content-marketing"
    ],
    "metaTitle": "SEO Services for Business Growth",
    "metaDescription": "Grow organic traffic and qualified leads with data-driven SEO services built for sustainable search visibility and business growth."
  },
  {
    "slug": "technical-seo",
    "title": "Technical SEO",
    "shortTitle": "Technical SEO",
    "tagline": "A crawlable, indexable, fast foundation",
    "overview": "Deep technical audits and fixes covering crawlability, indexation, site speed, and structured data so search engines can find and rank your content.",
    "icon": "Settings2",
    "category": "seo",
    "benefits": [
      {
        "title": "Better crawl efficiency",
        "description": "Search engines find and index your best pages faster.",
        "icon": "Bot"
      },
      {
        "title": "Fewer indexation issues",
        "description": "Eliminate duplicate content and crawl traps.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Faster pages",
        "description": "Core Web Vitals improvements that support rankings.",
        "icon": "Gauge"
      }
    ],
    "features": [
      {
        "title": "Crawl audits",
        "description": "Full site crawl to identify technical blockers.",
        "icon": "Bug"
      },
      {
        "title": "Site speed optimization",
        "description": "LCP, CLS, and INP improvements.",
        "icon": "Zap"
      },
      {
        "title": "Structured data",
        "description": "Schema markup implementation across page types.",
        "icon": "Code"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Crawl & audit",
        "description": "Full-site technical crawl using enterprise tools."
      },
      {
        "step": 2,
        "title": "Prioritize",
        "description": "Rank issues by SEO impact and implementation effort."
      },
      {
        "step": 3,
        "title": "Fix",
        "description": "Implement fixes directly or guide your dev team."
      },
      {
        "step": 4,
        "title": "Monitor",
        "description": "Ongoing monitoring for regressions."
      }
    ],
    "deliverables": [
      {
        "title": "Technical audit report",
        "description": "Prioritized issues with clear remediation steps."
      }
    ],
    "technologies": [
      "Screaming Frog",
      "Google Search Console",
      "PageSpeed Insights"
    ],
    "faqs": [
      {
        "question": "What's the difference between SEO and technical SEO?",
        "answer": "Technical SEO focuses on the infrastructure — crawlability, speed, indexation — that allows broader SEO and content efforts to work."
      }
    ],
    "relatedServices": [
      "seo",
      "website-development"
    ],
    "metaTitle": "Technical SEO Services",
    "metaDescription": "Technical SEO audits and fixes for crawlability, indexation, and Core Web Vitals — the foundation your rankings depend on."
  },
  {
    "slug": "off-page-seo",
    "title": "Off-Page SEO Services",
    "shortTitle": "Off-Page SEO",
    "tagline": "Build the authority and trust your rankings need",
    "overview": "A sustainable off-page SEO programme focused on digital PR, relevant link acquisition, citations, brand mentions, and authority signals that support long-term organic visibility.",
    "icon": "Link2",
    "category": "seo",
    "benefits": [
      {
        "title": "Relevant authority",
        "description": "Earn references from websites and communities that make sense for your market.",
        "icon": "BadgeCheck"
      },
      {
        "title": "Safer link growth",
        "description": "Build a diversified backlink profile without relying on spammy shortcuts.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Stronger brand discovery",
        "description": "Increase the number of places where customers and search engines encounter your brand.",
        "icon": "Globe2"
      }
    ],
    "features": [
      {
        "title": "Link opportunity research",
        "description": "Find relevant publishers, directories, partners, and editorial opportunities.",
        "icon": "Search"
      },
      {
        "title": "Digital PR and outreach",
        "description": "Create useful angles and outreach campaigns that can earn genuine mentions.",
        "icon": "Send"
      },
      {
        "title": "Citation and profile cleanup",
        "description": "Improve consistency across business profiles, directories, and branded properties.",
        "icon": "ClipboardCheck"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Audit",
        "description": "Review backlink quality, referring domains, competitors, brand mentions, and risks."
      },
      {
        "step": 2,
        "title": "Map opportunities",
        "description": "Prioritise link, PR, partnership, citation, and content-led authority opportunities."
      },
      {
        "step": 3,
        "title": "Build",
        "description": "Run targeted outreach and publish assets designed to earn relevant attention."
      },
      {
        "step": 4,
        "title": "Monitor",
        "description": "Track new links, lost links, brand mentions, referral quality, and ranking movement."
      }
    ],
    "deliverables": [
      {
        "title": "Off-page SEO audit",
        "description": "Backlink, competitor, citation, mention, and risk analysis with priorities."
      },
      {
        "title": "Authority building roadmap",
        "description": "A channel-by-channel plan for outreach, digital PR, partnerships, and citations."
      }
    ],
    "technologies": [
      "Ahrefs",
      "Semrush",
      "Google Search Console",
      "Google Business Profile",
      "Digital PR"
    ],
    "faqs": [
      {
        "question": "Do you buy backlinks?",
        "answer": "The focus is on relevant, earned, and editorially defensible authority signals. I do not recommend bulk link packages or manipulative schemes that can put a site at risk."
      },
      {
        "question": "How long does off-page SEO take?",
        "answer": "Authority building is cumulative. Early improvements may appear within a few months, while stronger competitive gains usually require consistent work over a longer period."
      }
    ],
    "relatedServices": [
      "seo",
      "content-marketing",
      "seo-content-writing",
      "local-seo"
    ],
    "metaTitle": "Off-Page SEO Services | Link Building & Digital PR",
    "metaDescription": "Sustainable off-page SEO services covering relevant link building, digital PR, citations, brand mentions, and authority growth."
  },
  {
    "slug": "seo-content-writing",
    "title": "SEO Content Writing Services",
    "shortTitle": "SEO Content Writing",
    "tagline": "Content that earns visibility and moves readers to act",
    "overview": "Research-led SEO content writing for service pages, landing pages, blog articles, topical clusters, product content, and local pages that connect search intent with business goals.",
    "icon": "FilePenLine",
    "category": "seo",
    "benefits": [
      {
        "title": "Intent-led content",
        "description": "Match each page to the question, problem, or decision behind the search.",
        "icon": "Target"
      },
      {
        "title": "Topical authority",
        "description": "Build connected content clusters instead of isolated articles with no strategic role.",
        "icon": "Network"
      },
      {
        "title": "Useful and persuasive copy",
        "description": "Make content easy to understand while giving qualified readers a clear next step.",
        "icon": "PenLine"
      }
    ],
    "features": [
      {
        "title": "Service and landing pages",
        "description": "Commercial pages structured around relevance, trust, differentiation, and conversion.",
        "icon": "LayoutTemplate"
      },
      {
        "title": "SEO blog articles",
        "description": "Helpful, well-researched articles built for long-tail visibility and internal linking.",
        "icon": "Newspaper"
      },
      {
        "title": "Topical authority maps",
        "description": "Pillar, cluster, entity, and internal-link plans that create a coherent search footprint.",
        "icon": "Network"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Understand",
        "description": "Clarify the audience, offer, competitors, search intent, and desired action."
      },
      {
        "step": 2,
        "title": "Research",
        "description": "Map keywords, entities, customer language, evidence, and content gaps."
      },
      {
        "step": 3,
        "title": "Write",
        "description": "Draft structured, original content with natural keyword coverage and clear information hierarchy."
      },
      {
        "step": 4,
        "title": "Optimise",
        "description": "Refine headings, metadata, internal links, readability, calls to action, and on-page trust signals."
      }
    ],
    "deliverables": [
      {
        "title": "SEO content brief",
        "description": "Intent, audience, outline, entities, internal links, evidence, and conversion guidance."
      },
      {
        "title": "Publication-ready content",
        "description": "Original copy formatted for the final page type and brand voice."
      }
    ],
    "technologies": [
      "Google Search Console",
      "Ahrefs",
      "Semrush",
      "Google Docs",
      "Internal Linking"
    ],
    "faqs": [
      {
        "question": "What kind of SEO content do you write?",
        "answer": "Service pages, landing pages, blog articles, topical clusters, local SEO pages, product content, and supporting website copy."
      },
      {
        "question": "Do you use AI to write content?",
        "answer": "Research, judgment, accuracy, originality, and usefulness come first. Any tools are treated as assistants, not substitutes for subject understanding and editorial review."
      }
    ],
    "relatedServices": [
      "seo",
      "content-marketing",
      "off-page-seo",
      "creative-content"
    ],
    "metaTitle": "SEO Content Writing Services | Pages, Blogs & Topic Clusters",
    "metaDescription": "Research-led SEO content writing for service pages, blogs, topical authority clusters, local pages, and conversion-focused website content."
  },
  {
    "slug": "local-seo",
    "title": "Local SEO Services in Bangladesh & Regional Markets",
    "shortTitle": "Local SEO",
    "tagline": "Dominate Google Maps, the Local Pack, and neighborhood search queries",
    "overview": "Local SEO services ensure your business stands out when nearby customers search on Google Maps and 'near me' queries. I optimize Google Business Profiles, establish NAP citation consistency across Bangladeshi and international directories, and build location-specific on-page signals that turn local searchers into phone calls and store visits.",
    "icon": "MapPin",
    "category": "seo",
    "benefits": [
      {
        "title": "Google Local Pack dominance",
        "description": "Position your business in the top 3 map results where nearly half of local mobile clicks occur.",
        "icon": "Award"
      },
      {
        "title": "Action-oriented local conversions",
        "description": "Turn search impressions into direct phone calls, WhatsApp inquiries, and physical foot traffic.",
        "icon": "PhoneCall"
      },
      {
        "title": "Technical implementation included",
        "description": "On-page schema markup, location pages, and website fixes are built and deployed directly.",
        "icon": "Code"
      }
    ],
    "features": [
      {
        "title": "Google Business Profile optimization",
        "description": "Category selection, service menus, geotagged photos, weekly posts, and Q&A management.",
        "icon": "Building2"
      },
      {
        "title": "NAP citation cleanup & building",
        "description": "Eliminate conflicting name, address, and phone details across high-authority directories.",
        "icon": "CheckSquare"
      },
      {
        "title": "Local schema & landing pages",
        "description": "Implement LocalBusiness structured data and area-specific landing pages with clear driving landmarks.",
        "icon": "FileCode2"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Local Presence & GBP Audit",
        "description": "Inspect existing map listings, duplicate profiles, citation discrepancies, and competitor local authority."
      },
      {
        "step": 2,
        "title": "Geo-Keyword & Area Mapping",
        "description": "Identify exact neighborhood, landmark, and city-level phrases prospective customers use."
      },
      {
        "step": 3,
        "title": "Profile & On-Site Optimization",
        "description": "Tune GBP attributes, descriptions, and categories while implementing local schema on your website."
      },
      {
        "step": 4,
        "title": "Citation Building & Consistency",
        "description": "Build verified directory listings across Bangladeshi platforms, Facebook Business, and global data aggregators."
      },
      {
        "step": 5,
        "title": "Review Generation & Reputation",
        "description": "Deploy a structured process to collect authentic reviews and craft prompt, keyword-conscious responses."
      },
      {
        "step": 6,
        "title": "Monthly Rank & Visibility Tracking",
        "description": "Monitor local grid rankings, call volume, direction requests, and photo views to guide ongoing improvements."
      }
    ],
    "deliverables": [
      {
        "title": "Fully Optimized Google Business Profile",
        "description": "Verified, category-accurate listing with rich descriptions, product/service listings, and photos."
      },
      {
        "title": "NAP Consistency Directory Audit",
        "description": "Corrected listings across top directories ensuring uniform business data across the web."
      },
      {
        "title": "Local SEO Landing Page & Schema",
        "description": "Dedicated area-specific page code with LocalBusiness JSON-LD markup and geo-coordinates."
      },
      {
        "title": "Monthly Local Visibility Report",
        "description": "Local Pack rank tracking, call logs, map direction requests, and review growth metrics."
      }
    ],
    "technologies": [
      "Google Business Profile",
      "Google Maps",
      "BrightLocal",
      "Schema.org",
      "Google Search Console"
    ],
    "faqs": [
      {
        "question": "Is having an active Facebook Business Page sufficient for local visibility in Bangladesh?",
        "answer": "No. Facebook and Google Maps operate on completely independent ranking algorithms. While Facebook supports social validation and direct messaging, Google's Local Pack evaluates Google Business Profile completeness, on-site location content, local backlink authority, and citation consistency. Both are valuable, but Facebook will not substitute for a verified Google Maps presence."
      },
      {
        "question": "Do I need a website to rank on Google Maps?",
        "answer": "A Google Business Profile can technically appear in local map results without a website, but having a fast website with structured LocalBusiness schema and area-specific landing pages dramatically strengthens your ranking signals and provides customers a trustworthy conversion point."
      },
      {
        "question": "What are your pricing packages for Local SEO in Bangladesh?",
        "answer": "Local SEO packages are structured as follows: Starter Local SEO (৳20,000–৳25,000/month or ~$165–$205/month) for single-location clinics or shops; Growth Local SEO (৳35,000–৳50,000/month or ~$290–$415/month) for competitive service categories; and Multi-Location/Enterprise (from ৳70,000/month) for branch networks across Dhaka, Chittagong, and Sylhet. A one-time GBP Audit & Setup is also available for ৳15,000."
      },
      {
        "question": "How long does it take to achieve rankings in the Google Local Pack?",
        "answer": "Most local businesses see measurable movement in map visibility and call volume within 60 to 90 days. Solidifying a top-3 position in competitive metropolitan areas like Gulshan, Banani, or Dhanmondi typically requires 4 to 6 months of disciplined citation cleanup, review acquisition, and content optimization."
      },
      {
        "question": "How do you manage multi-location businesses with branches in different cities?",
        "answer": "Each physical branch requires an independent, verified Google Business Profile, unique local phone number, and a dedicated location page on your website with unique neighborhood descriptions and directions. I structure multi-location accounts so individual branches do not cannibalize each other's search signals."
      },
      {
        "question": "What activities take place in the first month of local SEO?",
        "answer": "Month one focuses heavily on foundational cleanup: reclaiming or verifying your GBP, conducting a deep NAP audit to fix contradictory phone numbers and addresses across directories, updating primary and secondary categories, and implementing localized JSON-LD schema on your website."
      }
    ],
    "relatedServices": [
      "seo",
      "technical-seo",
      "website-marketing",
      "cro"
    ],
    "metaTitle": "Local SEO Services in Bangladesh | Mahedi Hasan",
    "metaDescription": "Rank higher on Google Maps and local search across Dhaka, Chittagong, and Bangladesh. Google Business Profile optimization, citations, and reviews."
  },
  {
    "slug": "google-ads",
    "title": "Google Ads Management Services in Bangladesh & Global",
    "shortTitle": "Google Ads",
    "tagline": "Conversion-first Search, Shopping, and Performance Max management",
    "overview": "Google Ads management connects your business with buyers at the precise second they search for your solution. I manage Search, Shopping, Display, YouTube, and Performance Max campaigns with strict conversion tracking, bilingual Bangla-English keyword targeting, and negative keyword sculpting to eliminate wasted ad spend.",
    "icon": "Target",
    "category": "ads",
    "benefits": [
      {
        "title": "Conversion-first architecture",
        "description": "Confirm what counts as a qualified lead or sale before allocating spend to prevent empty traffic.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Bilingual keyword coverage",
        "description": "Target how customers actually search in Bangladesh and regional markets by blending Bangla and English queries.",
        "icon": "Languages"
      },
      {
        "title": "Account transparency & ownership",
        "description": "You retain 100% direct ownership of your ad account, historical data, and billing profiles.",
        "icon": "UserCheck"
      }
    ],
    "features": [
      {
        "title": "Search & Shopping campaigns",
        "description": "Capture high-intent queries and catalog purchases with tightly structured ad groups and negative lists.",
        "icon": "Search"
      },
      {
        "title": "Performance Max optimization",
        "description": "Asset group testing, audience signals, and search theme controls to prevent low-quality inventory waste.",
        "icon": "Cpu"
      },
      {
        "title": "Conversion tracking & CAPI",
        "description": "Accurate event configuration across GA4, Google Ads tags, and phone call tracking before launch.",
        "icon": "BarChart3"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Account & Tracking Audit",
        "description": "Review historical search terms, wasted spend patterns, Quality Scores, and conversion setup."
      },
      {
        "step": 2,
        "title": "Keyword & Competitor Research",
        "description": "Uncover actual search queries across Bangla and English, analyzing competitor auction insights."
      },
      {
        "step": 3,
        "title": "Campaign Architecture & Build",
        "description": "Structure campaigns by intent level, draft compelling ad copy, and implement negative keyword lists."
      },
      {
        "step": 4,
        "title": "Launch & Algorithmic Learning",
        "description": "Closely monitor early bid performance and search query reports during the 2–4 week learning window."
      },
      {
        "step": 5,
        "title": "Iterative Optimization & Reporting",
        "description": "Refine bids, pause non-converting keywords, test ad variations, and provide monthly outcome reports."
      }
    ],
    "deliverables": [
      {
        "title": "Audited Account Architecture",
        "description": "Cleanly segmented campaigns, intent-based ad groups, and comprehensive negative keyword lists."
      },
      {
        "title": "Verified Conversion Tracking",
        "description": "Configured GA4 events, Google Ads tags, and offline conversion imports."
      },
      {
        "title": "Ad Copy & Asset Matrix",
        "description": "High-CTR headlines, descriptions, callouts, and structured snippets aligned with landing page messaging."
      },
      {
        "title": "Monthly Performance Intelligence",
        "description": "Transparent reporting detailing CPA, ROAS, search impression share, and actionable next steps."
      }
    ],
    "technologies": [
      "Google Ads Manager",
      "Google Tag Manager",
      "Google Analytics 4",
      "Looker Studio",
      "Google Merchant Center"
    ],
    "faqs": [
      {
        "question": "Do I need a fully operational website before running Google Ads?",
        "answer": "Yes, in virtually all instances. You require a fast, mobile-optimized destination to convert clicks—whether an e-commerce catalog, service page, or dedicated landing page. Sending paid traffic to an unfinished or slow site dissipates ad spend immediately."
      },
      {
        "question": "How is Google Ads spend separated from your management fee?",
        "answer": "You pay ad spend directly to Google via your registered payment method (credit card or international card). My management fee is billed separately for strategic planning, continuous bid adjustments, negative keyword mining, A/B ad testing, and analytics reporting."
      },
      {
        "question": "How do you eliminate wasted spend in Google Ads accounts?",
        "answer": "Most wasted budget stems from broad match keywords paired with no negative keyword list, or launching campaigns without conversion tracking. I sculpt aggressive negative keyword lists, structure tightly themed ad groups, and verify event tracking before spending a single taka."
      },
      {
        "question": "How does Google Ads compare to Facebook Ads?",
        "answer": "Google Ads targets people actively searching for a direct solution right now (high commercial intent). Facebook Ads interrupts people while scrolling based on interests and demographic data (demand generation). Both work best when connected: Google captures active buyers, while Meta builds familiarity and retargets non-converters."
      },
      {
        "question": "How long does it take for a new Google Ads campaign to stabilize?",
        "answer": "Campaigns typically launch within 3 to 5 business days after tracking verification. Google's Smart Bidding algorithm requires 2 to 4 weeks to complete its initial learning phase. Predictable cost-per-acquisition (CPA) metrics usually establish firmly by month two or three of continuous optimization."
      },
      {
        "question": "Do you enforce long-term lock-in agency contracts?",
        "answer": "No. Engagements operate on transparent monthly retainers with clear milestones. You retain complete ownership of your Google Ads account, campaign history, and tracking assets at all times."
      }
    ],
    "relatedServices": [
      "website-marketing",
      "cro",
      "analytics-tracking",
      "media-buying"
    ],
    "metaTitle": "Google Ads Management Services in Bangladesh | Mahedi Hasan",
    "metaDescription": "Conversion-first Google Ads management for businesses in Bangladesh and globally: Search, Shopping, Performance Max, and GA4 tracking."
  },
  {
    "slug": "meta-ads",
    "title": "Meta Ads Management for Facebook & Instagram",
    "shortTitle": "Meta Ads",
    "tagline": "Audit-first setup, weekly creative testing, and Conversions API tracking",
    "overview": "Meta Ads management delivers profitable, structured customer acquisition across Facebook and Instagram. I build high-performing campaign architectures using the Meta Conversions API (CAPI), structured prospecting and retargeting splits, and a disciplined weekly creative testing cycle that beats ad fatigue.",
    "icon": "Megaphone",
    "category": "ads",
    "benefits": [
      {
        "title": "Conversions API tracking resilience",
        "description": "Bypass browser cookie loss and iOS privacy barriers with server-side event tracking.",
        "icon": "ShieldAlert"
      },
      {
        "title": "Weekly creative testing pipeline",
        "description": "Combat ad fatigue by continuously testing fresh hooks, visual formats, and customer angles.",
        "icon": "RefreshCw"
      },
      {
        "title": "Regional demographic precision",
        "description": "Tailor campaigns to specific platform nuances, such as Bangladesh's 72M Facebook users and Messenger-driven commerce.",
        "icon": "Users"
      }
    ],
    "features": [
      {
        "title": "Advantage+ & custom campaign design",
        "description": "Deploy modern automated Advantage+ catalog feeds alongside controlled manual prospecting groups.",
        "icon": "Sliders"
      },
      {
        "title": "Full-funnel segmentation",
        "description": "Clear structural separation between cold interest/lookalike audiences and warm website/video retargeting.",
        "icon": "Filter"
      },
      {
        "title": "Messenger & lead capture integration",
        "description": "Set up direct-to-chat flows and instant lead forms optimized for mobile conversion.",
        "icon": "MessageCircle"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Account & Tracking Audit",
        "description": "Inspect Pixel health, CAPI event deduplication, historical creative metrics, and account structure."
      },
      {
        "step": 2,
        "title": "Audience Mapping & Persona Planning",
        "description": "Construct cold prospecting, custom lookalikes, and customer retargeting lists from real business data."
      },
      {
        "step": 3,
        "title": "Campaign Architecture & Setup",
        "description": "Build organized campaigns with distinct budget controls, bidding caps, and placement rules."
      },
      {
        "step": 4,
        "title": "Creative Production & Hook Testing",
        "description": "Draft compelling copy angles, test video and carousel formats, and align CTAs with the landing page."
      },
      {
        "step": 5,
        "title": "Daily Monitoring & Algorithmic Learning",
        "description": "Protect the 1–2 week learning phase, monitoring cost-per-result and frequency before adjusting budgets."
      },
      {
        "step": 6,
        "title": "Optimization & Scaling",
        "description": "Scale winning ad sets through horizontal and vertical budget expansion while cycling fatigued creatives."
      }
    ],
    "deliverables": [
      {
        "title": "Production Meta Ad Account",
        "description": "Structured prospecting, retargeting, and catalog campaigns with verified Conversion API tracking."
      },
      {
        "title": "Weekly Creative Testing Matrix",
        "description": "Documented logs of tested hooks, headline variants, ad copy, and corresponding ROAS metrics."
      },
      {
        "title": "Audience & Pixel Configuration Report",
        "description": "Verified event match quality, custom conversions, and segmented audience definitions."
      },
      {
        "title": "Transparent Monthly Analytics",
        "description": "In-depth reporting covering cost per acquisition, return on ad spend, and conversion quality."
      }
    ],
    "technologies": [
      "Meta Ads Manager",
      "Meta Pixel",
      "Conversions API (CAPI)",
      "Meta Business Suite",
      "Looker Studio"
    ],
    "faqs": [
      {
        "question": "How does your pricing work for Meta Ads management?",
        "answer": "I offer two transparent options: Option 1 is a Service Charge on Ad Spend scaling down as spend increases (20% for spend up to $500, 15% for $501–$1,000, and 10% for $1,000+). Option 2 is a Fixed Monthly Management Fee: Basic (৳5,000/month for up to 3 campaigns), Pro (৳10,000/month for up to 7 campaigns), and Premium (৳15,000/month for full-funnel scaling up to 12 campaigns). Ad spend is always paid directly to Meta."
      },
      {
        "question": "Why is the Meta Conversions API (CAPI) mandatory for your campaigns?",
        "answer": "Standard browser-based Pixel tracking misses between 15% and 30% of conversion events due to iOS privacy settings, ad blockers, and cookie expiration. CAPI sends conversion events directly from the web server to Meta, restoring data fidelity and feeding Meta's delivery algorithm accurate signals to lower your customer acquisition costs."
      },
      {
        "question": "How do you tailor Meta Ads for the Bangladesh market specifically?",
        "answer": "Bangladesh has over 72 million Facebook users (heavily mobile-first) and roughly 10 million Instagram users. Furthermore, Facebook ad audiences in Bangladesh skew 63% male, with the 18–24 demographic representing the largest segment. Local consumer purchasing often happens through Messenger conversations rather than immediate web checkout. I build mobile-first creatives and Messenger chat flows matching these exact local behavioral realities."
      },
      {
        "question": "How does your weekly creative testing process work?",
        "answer": "Ad fatigue happens rapidly on social feeds. Rather than letting one creative run for months, I introduce and test fresh visual hooks, video variations, headline angles, and call-to-action variants weekly. Winning creatives receive budget allocation, while decaying ads are phased out before they inflate your CPA."
      },
      {
        "question": "What minimum daily ad budget is recommended to start?",
        "answer": "Meta's delivery algorithm requires approximately 50 conversion events per ad set within a 7-day window to exit the learning phase. The necessary budget depends on your target cost per acquisition. We calculate your ideal budget baseline during the initial free account review."
      },
      {
        "question": "Do you require long-term lock-in agency contracts?",
        "answer": "No. Engagements operate with a minimum one-month commitment. You retain full administrative ownership of your Business Manager and ad accounts at all times."
      }
    ],
    "relatedServices": [
      "media-buying",
      "tiktok-ads",
      "creative-content",
      "analytics-tracking"
    ],
    "metaTitle": "Meta Ads Management for Facebook & Instagram | Mahedi Hasan",
    "metaDescription": "Structured Meta Ads management for Facebook and Instagram. Conversions API setup, weekly creative testing, and transparent performance reporting."
  },
  {
    "slug": "tiktok-ads",
    "title": "TikTok Ads Management Services for E-Commerce & Lead Generation",
    "shortTitle": "TikTok Ads",
    "tagline": "Native creative direction, Spark Ads, and Events API tracking for high-converting video campaigns",
    "overview": "TikTok Ads management plans, launches, and optimizes high-converting video ad campaigns that feel native to the For You Page. I manage the strategy, creative direction, Spark Ads, and TikTok Events API tracking so your business turns short-form video attention into measurable leads and e-commerce revenue.",
    "icon": "Video",
    "category": "ads",
    "benefits": [
      {
        "title": "Native-first creative direction",
        "description": "Produce fast-paced vertical video ads that blend into the feed without looking like intrusive corporate commercials.",
        "icon": "Smartphone"
      },
      {
        "title": "Resilient Events API tracking",
        "description": "Capture accurate server-side conversion signals to help TikTok's bidding algorithm optimize effectively.",
        "icon": "ShieldAlert"
      },
      {
        "title": "Flexible pricing options",
        "description": "Choose between ad spend percentage tiers or flat monthly management packages tailored to your budget.",
        "icon": "BadgeCheck"
      }
    ],
    "features": [
      {
        "title": "Spark Ads & creator integration",
        "description": "Boost high-performing organic videos and creator collaborations to drive genuine social proof.",
        "icon": "Flame"
      },
      {
        "title": "TikTok Pixel & Events API setup",
        "description": "Install web and server-side tracking for purchase, lead, and add-to-cart events with high match rates.",
        "icon": "Code"
      },
      {
        "title": "In-Feed & TikTok Shop campaigns",
        "description": "Structure campaigns across standard in-feed placements, lead generation forms, and TikTok Shop catalogs.",
        "icon": "ShoppingBag"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Account & Landing Page Audit",
        "description": "Review historical ad metrics, target audience fit, and landing page mobile checkout speed."
      },
      {
        "step": 2,
        "title": "Creative Concepting & Strategy",
        "description": "Define primary campaign goals, target audience segments, and native short-form video hooks."
      },
      {
        "step": 3,
        "title": "Tracking Setup & Pixel Validation",
        "description": "Implement TikTok Pixel and server-side Events API with complete event parameter mapping."
      },
      {
        "step": 4,
        "title": "Video Creative Production",
        "description": "Direct or adapt vertical 9:16 video creative with strong 2-second hooks, subtitles, and audio trends."
      },
      {
        "step": 5,
        "title": "Campaign Launch & Learning Phase",
        "description": "Deploy structured ad groups with consistent daily budgets to support algorithmic data collection."
      },
      {
        "step": 6,
        "title": "Continuous Bid & Creative Optimization",
        "description": "Analyze thumb-stop rates, video completion percentages, and ROAS to scale top ads and rotate fresh creative."
      }
    ],
    "deliverables": [
      {
        "title": "Configured TikTok Ads Manager",
        "description": "Organized campaigns segmented by funnel stage with custom interest and lookalike audiences."
      },
      {
        "title": "Verified Events API Tracking",
        "description": "Fully operational server-side tracking setup with verified event match quality scores."
      },
      {
        "title": "Video Creative Briefs & Hook Scripts",
        "description": "Structured outlines detailing 2-second visual hooks, pacing, body demonstrations, and call-to-actions."
      },
      {
        "title": "Monthly Performance & ROAS Reports",
        "description": "Clear reporting detailing cost per lead, customer acquisition cost, view-through rate, and ad spend efficiency."
      }
    ],
    "technologies": [
      "TikTok Ads Manager",
      "TikTok Pixel",
      "TikTok Events API",
      "CapCut",
      "Looker Studio"
    ],
    "faqs": [
      {
        "question": "Why do traditional corporate ads fail on TikTok?",
        "answer": "TikTok users swipe past obvious, polished corporate commercials within the first two seconds. The platform's For You Page algorithm prioritizes content that feels creator-native: shot vertically, fast-paced, unpolished, problem-focused, and culturally attuned. I guide video creative to blend naturally into the feed while establishing a strong hook in the first three seconds."
      },
      {
        "question": "How is TikTok conversion tracking configured after iOS privacy changes?",
        "answer": "A browser-only TikTok Pixel misses substantial conversion data due to cookie blocking. I install both the TikTok Pixel and server-side TikTok Events API (using Google Tag Manager or direct webhooks). This guarantees deduplicated server-side event transmission, preserving high event match quality for accurate bidding."
      },
      {
        "question": "What pricing packages do you offer for TikTok Ads management?",
        "answer": "I offer two transparent models: Option 1 is a Service Charge on Ad Spend (20% for spend under $500, 15% for $501–$1,000, and 10% for $1,000+). Option 2 is a Fixed Monthly Management Fee: Basic (৳5,000/month for testing up to 3 campaigns), Pro (৳10,000/month for scaling up to 7 campaigns with creative A/B testing), and Premium (৳15,000/month for full-funnel scaling up to 12 campaigns). Ad spend is paid directly to TikTok."
      },
      {
        "question": "Do I need an in-house studio or video production team to run TikTok Ads?",
        "answer": "No. High-performing TikTok ads often perform better with authentic smartphone footage, customer unboxing clips, and creator testimonials than expensive studio sets. I provide detailed scripts, visual hook concepts, and editing support to assemble high-converting video assets from existing footage or creator partnerships."
      },
      {
        "question": "What is the difference between boosting a post and running campaigns in TikTok Ads Manager?",
        "answer": "Promoting or boosting a post simply increases view counts with minimal targeting or conversion tracking. TikTok Ads Manager provides dedicated objective-based optimization (purchases, lead forms, catalog sales), custom lookalike audiences, A/B creative testing, and server-side attribution."
      },
      {
        "question": "How long does the TikTok Ads learning phase require to stabilize?",
        "answer": "TikTok ad groups typically require 50 complete conversion actions within a short window to exit the algorithmic learning phase. Most campaigns reach reliable cost-per-acquisition performance within 2 to 4 weeks of continuous, disciplined testing."
      }
    ],
    "relatedServices": [
      "meta-ads",
      "media-buying",
      "creative-content",
      "analytics-tracking"
    ],
    "metaTitle": "TikTok Ads Management Services | Mahedi Hasan",
    "metaDescription": "High-converting TikTok Ads management for e-commerce and lead generation. Native creative direction, Spark Ads, and TikTok Events API tracking."
  },
  {
    "slug": "pinterest-ads",
    "title": "Pinterest Ads Management Services for E-Commerce & DTC Brands",
    "shortTitle": "Pinterest Ads",
    "tagline": "Reach high-intent shoppers while they plan future purchases",
    "overview": "Pinterest Ads management connects your brand with an audience actively planning home decor, fashion, lifestyle, and gift purchases. I manage Standard Pins, Shopping Catalog feeds, and Video Pins with full Pinterest Tag conversion tracking, turning Pinterest's visual search engine into a compounding sales channel.",
    "icon": "Image",
    "category": "ads",
    "benefits": [
      {
        "title": "Planning-stage intent capture",
        "description": "Engage shoppers weeks before they finalize a purchase while they collect ideas and organize boards.",
        "icon": "BookmarkCheck"
      },
      {
        "title": "Long-tail pin traffic",
        "description": "Pins continue generating referral traffic and organic saves long after the paid campaign budget completes.",
        "icon": "Repeat"
      },
      {
        "title": "Transparent published pricing",
        "description": "Choose between clear ad spend tiers or flat monthly management packages with zero hidden fees.",
        "icon": "ShieldCheck"
      }
    ],
    "features": [
      {
        "title": "Shopping & Catalog Ads",
        "description": "Connect your e-commerce product feed to automatically generate automated, shoppable product pins.",
        "icon": "ShoppingBag"
      },
      {
        "title": "Keyword & visual search targeting",
        "description": "Target specific visual search terms, categories, and interest groups that mirror search behavior.",
        "icon": "Search"
      },
      {
        "title": "Pinterest Tag & conversion setup",
        "description": "Configure checkout, add-to-cart, page-visit, and signup event tracking with enhanced match.",
        "icon": "Code"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Account & Store Readiness Audit",
        "description": "Evaluate your Pinterest profile, product catalog feed, website speed, and visual assets."
      },
      {
        "step": 2,
        "title": "Audience & Keyword Mapping",
        "description": "Research seasonal trends, high-volume pin searches, and affinity interests relevant to your products."
      },
      {
        "step": 3,
        "title": "Campaign Architecture & Tag Setup",
        "description": "Install the Pinterest Tag, configure catalog data sources, and build targeted pin groups."
      },
      {
        "step": 4,
        "title": "Creative Direction & Launch",
        "description": "Deploy vertical 2:3 creative pins with clear text overlays, compelling titles, and direct destination links."
      },
      {
        "step": 5,
        "title": "Data Collection & Optimization",
        "description": "Gather 2–4 weeks of baseline delivery data, pruning low-performing pins and expanding winning search themes."
      },
      {
        "step": 6,
        "title": "Monthly Reporting & Scale",
        "description": "Analyze cost per outbound click, save rate, checkout conversions, and multi-touch attribution value."
      }
    ],
    "deliverables": [
      {
        "title": "Configured Pinterest Ads Manager",
        "description": "Organized campaigns, ad groups, and keyword lists mapped to commercial catalog categories."
      },
      {
        "title": "Pinterest Tag Implementation",
        "description": "Verified tracking events across the entire purchase funnel with enhanced match data."
      },
      {
        "title": "Pin Creative Specifications Brief",
        "description": "Design specifications, headline overlays, and copy formulas tailored for visual search."
      },
      {
        "title": "Monthly Analytics & Trend Report",
        "description": "Detailed metrics on outbound clicks, saves, return on ad spend, and upcoming seasonal search spikes."
      }
    ],
    "technologies": [
      "Pinterest Ads Manager",
      "Pinterest Tag",
      "Pinterest Business Hub",
      "Shopify Catalog Sync",
      "Looker Studio"
    ],
    "faqs": [
      {
        "question": "Which businesses benefit most from Pinterest Ads?",
        "answer": "Pinterest Ads performs exceptionally well for e-commerce and DTC brands in visually driven categories such as home decor, fashion, beauty, wellness, consumer tech accessories, and wedding planning. It also drives strong organic traffic for content publishers and bloggers whose audiences save reference ideas."
      },
      {
        "question": "How does Pinterest differ from Facebook and Instagram Ads?",
        "answer": "Pinterest functions as a visual discovery and search engine rather than a social network. Users visit Pinterest to plan future purchases and projects rather than browse friend updates. Ads require vertical 2:3 imagery with clear text overlays and keyword-rich descriptions, and winning pins continue generating organic traffic and saves weeks after campaign spend concludes."
      },
      {
        "question": "What pricing options do you offer for Pinterest Ads management?",
        "answer": "I offer two transparent models: Option 1 is a Service Charge on Ad Spend (20% for spend up to $500, 15% for $501–$1,000, and 10% for $1,000+). Option 2 is a Fixed Monthly Management Fee: Basic (৳5,000/month for testing up to 3 campaigns), Pro (৳10,000/month for up to 7 campaigns with A/B testing), and Premium (৳15,000/month for full-funnel catalog scaling up to 12 campaigns). Ad spend is billed directly by Pinterest."
      },
      {
        "question": "How long does it take for Pinterest Ads to demonstrate reliable results?",
        "answer": "Initial setup and tracking configuration require 3 to 7 business days. Because Pinterest users research decisions in advance, the delivery algorithm typically requires 2 to 4 weeks of consistent data before optimization trends stabilize. Evaluation should account for assisted conversions and board saves alongside direct clicks."
      },
      {
        "question": "Do you design the creative pins or only manage the technical campaigns?",
        "answer": "Pin creative direction, copy specifications, and headline briefs are included in all packages. Complete graphic design and video pin production can be added as a bundled service through my creative content production workflow."
      },
      {
        "question": "Can you manage Pinterest Ads for international markets from Bangladesh?",
        "answer": "Yes. Pinterest Ads Manager operates globally with identical tooling, tag architecture, and reporting across North America, Europe, Australia, and regional territories. Working with a remote practitioner provides global-standard strategic execution with cost-efficient management retainers."
      }
    ],
    "relatedServices": [
      "media-buying",
      "creative-content",
      "social-media-management",
      "meta-ads"
    ],
    "metaTitle": "Pinterest Ads Management Services | Mahedi Hasan",
    "metaDescription": "Grow e-commerce and DTC sales with expert Pinterest Ads management: Shopping campaigns, Promoted Pins, Pinterest Tag setup, and transparent pricing."
  },
  {
    "slug": "cro",
    "title": "Conversion Rate Optimization",
    "shortTitle": "CRO",
    "tagline": "Turn more visitors into customers",
    "overview": "Systematic testing and UX improvements across your site to increase conversion rate without increasing traffic spend.",
    "icon": "TrendingUp",
    "category": "strategy",
    "benefits": [
      {
        "title": "More revenue, same traffic",
        "description": "Extract more value from existing visitors.",
        "icon": "DollarSign"
      },
      {
        "title": "Data-driven decisions",
        "description": "Test hypotheses instead of guessing.",
        "icon": "FlaskConical"
      },
      {
        "title": "Better user experience",
        "description": "CRO improvements often improve usability broadly.",
        "icon": "Smile"
      }
    ],
    "features": [
      {
        "title": "Heatmap & session analysis",
        "description": "Understand real user behavior on your site.",
        "icon": "Activity"
      },
      {
        "title": "A/B testing",
        "description": "Structured testing of key conversion points.",
        "icon": "TestTube2"
      },
      {
        "title": "Funnel analysis",
        "description": "Identify and fix drop-off points in the funnel.",
        "icon": "Filter"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Analyze",
        "description": "Review analytics, heatmaps, and session recordings."
      },
      {
        "step": 2,
        "title": "Hypothesize",
        "description": "Prioritize test ideas by expected impact."
      },
      {
        "step": 3,
        "title": "Test",
        "description": "Run structured A/B or multivariate tests."
      },
      {
        "step": 4,
        "title": "Implement",
        "description": "Roll out winning variations permanently."
      }
    ],
    "deliverables": [
      {
        "title": "CRO audit",
        "description": "Prioritized list of conversion opportunities."
      }
    ],
    "technologies": [
      "Hotjar",
      "Google Optimize alternatives",
      "GA4"
    ],
    "faqs": [
      {
        "question": "How much traffic do I need for CRO testing?",
        "answer": "Meaningful A/B testing generally needs a few thousand monthly visitors to reach statistical significance in reasonable time."
      }
    ],
    "relatedServices": [
      "website-development",
      "google-ads",
      "meta-ads",
      "analytics-tracking"
    ],
    "metaTitle": "Conversion Rate Optimization Services",
    "metaDescription": "CRO services combining heatmaps, session recordings, and structured A/B testing to increase conversions without more ad spend."
  },
  {
    "slug": "content-marketing",
    "title": "Content Marketing",
    "shortTitle": "Content Marketing",
    "tagline": "Content that ranks and builds authority",
    "overview": "Strategic content production — blog articles, pillar pages, and topic clusters — designed to build topical authority and rank in search.",
    "icon": "PenTool",
    "category": "strategy",
    "benefits": [
      {
        "title": "Builds topical authority",
        "description": "Comprehensive coverage signals expertise to search engines.",
        "icon": "BookOpen"
      },
      {
        "title": "Compounding asset",
        "description": "Content keeps driving traffic long after publishing.",
        "icon": "TrendingUp"
      },
      {
        "title": "Supports every channel",
        "description": "Fuels SEO, social, and email simultaneously.",
        "icon": "Share2"
      }
    ],
    "features": [
      {
        "title": "Topical maps",
        "description": "Pillar and cluster architecture for full topic coverage.",
        "icon": "Map"
      },
      {
        "title": "SEO-optimized writing",
        "description": "Content built around real search intent and keywords.",
        "icon": "FileText"
      },
      {
        "title": "Editorial calendar",
        "description": "Consistent publishing cadence and planning.",
        "icon": "Calendar"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Research",
        "description": "Keyword research and competitive content gap analysis."
      },
      {
        "step": 2,
        "title": "Map",
        "description": "Build the pillar and cluster topical map."
      },
      {
        "step": 3,
        "title": "Produce",
        "description": "Write, edit, and publish on schedule."
      },
      {
        "step": 4,
        "title": "Measure",
        "description": "Track rankings, traffic, and engagement."
      }
    ],
    "deliverables": [
      {
        "title": "Topical authority map",
        "description": "Full pillar/cluster content plan for your niche."
      }
    ],
    "technologies": [
      "Ahrefs",
      "Semrush",
      "Google Search Console"
    ],
    "faqs": [
      {
        "question": "How often should we publish?",
        "answer": "Consistency matters more than volume — a sustainable weekly or biweekly cadence typically outperforms sporadic bursts."
      }
    ],
    "relatedServices": [
      "seo",
      "seo-content-writing",
      "creative-content",
      "marketing-strategy"
    ],
    "metaTitle": "Content Marketing",
    "metaDescription": "Strategic content marketing built on pillar-and-cluster architecture — content that builds topical authority and ranks in search."
  },
  {
    "slug": "marketing-strategy",
    "title": "Marketing Strategy",
    "shortTitle": "Marketing Strategy",
    "tagline": "Full-funnel growth planning",
    "overview": "Holistic marketing strategy connecting SEO, paid ads, content, and CRO into a single growth plan aligned with business goals.",
    "icon": "Compass",
    "category": "strategy",
    "benefits": [
      {
        "title": "Aligned channels",
        "description": "Every channel working toward the same goals.",
        "icon": "Layers"
      },
      {
        "title": "Clear priorities",
        "description": "Know exactly where to invest time and budget.",
        "icon": "ListOrdered"
      },
      {
        "title": "Measurable roadmap",
        "description": "A plan with milestones, not just tactics.",
        "icon": "Map"
      }
    ],
    "features": [
      {
        "title": "Market & competitor analysis",
        "description": "Understand market positioning before planning.",
        "icon": "Search"
      },
      {
        "title": "Channel strategy",
        "description": "Right-fit mix of SEO, paid, content, and email.",
        "icon": "GitBranch"
      },
      {
        "title": "Goal setting & KPIs",
        "description": "Clear, measurable targets tied to business outcomes.",
        "icon": "Target"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Discovery",
        "description": "Understand business goals and current state."
      },
      {
        "step": 2,
        "title": "Analysis",
        "description": "Market, competitor, and channel analysis."
      },
      {
        "step": 3,
        "title": "Plan",
        "description": "Build the full-funnel strategy and roadmap."
      },
      {
        "step": 4,
        "title": "Execute & iterate",
        "description": "Implement and refine based on results."
      }
    ],
    "deliverables": [
      {
        "title": "Strategy document",
        "description": "Full growth plan with channels, priorities, and KPIs."
      }
    ],
    "technologies": [
      "GA4",
      "Semrush",
      "Notion"
    ],
    "faqs": [
      {
        "question": "Do you also execute the strategy, or just plan it?",
        "answer": "Both — strategy engagements typically transition into ongoing execution across the recommended channels."
      }
    ],
    "relatedServices": [
      "seo",
      "google-ads",
      "content-marketing",
      "analytics-tracking"
    ],
    "metaTitle": "Marketing Strategy",
    "metaDescription": "Full-funnel marketing strategy connecting SEO, paid ads, content, and CRO into one aligned growth roadmap."
  },
  {
    "slug": "analytics-tracking",
    "title": "Analytics & Tracking",
    "shortTitle": "Analytics & Tracking",
    "tagline": "Accurate data you can actually trust",
    "overview": "GA4, Google Tag Manager, and server-side tracking implementation so every marketing decision is backed by accurate data.",
    "icon": "BarChart3",
    "category": "strategy",
    "benefits": [
      {
        "title": "Accurate attribution",
        "description": "Know which channels actually drive results.",
        "icon": "GitCommit"
      },
      {
        "title": "Privacy-resilient tracking",
        "description": "Server-side setups that survive browser restrictions.",
        "icon": "Shield"
      },
      {
        "title": "Actionable dashboards",
        "description": "Reports built around decisions, not vanity metrics.",
        "icon": "LayoutDashboard"
      }
    ],
    "features": [
      {
        "title": "GA4 implementation",
        "description": "Full event and conversion tracking setup.",
        "icon": "BarChart3"
      },
      {
        "title": "Tag Manager architecture",
        "description": "Clean, maintainable GTM container structure.",
        "icon": "Tags"
      },
      {
        "title": "Custom dashboards",
        "description": "Looker Studio dashboards tailored to your KPIs.",
        "icon": "LayoutDashboard"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Audit",
        "description": "Review current tracking setup for gaps and errors."
      },
      {
        "step": 2,
        "title": "Implement",
        "description": "Build GA4, GTM, and server-side tracking."
      },
      {
        "step": 3,
        "title": "Validate",
        "description": "QA every event and conversion path."
      },
      {
        "step": 4,
        "title": "Report",
        "description": "Ongoing dashboards and data QA."
      }
    ],
    "deliverables": [
      {
        "title": "Tracking audit",
        "description": "Full review of current analytics implementation."
      }
    ],
    "technologies": [
      "GA4",
      "Google Tag Manager",
      "Looker Studio",
      "Server-side GTM"
    ],
    "faqs": [
      {
        "question": "Can you fix broken tracking on an existing site?",
        "answer": "Yes — tracking audits and remediation for existing GA4/GTM setups are a common starting point."
      }
    ],
    "relatedServices": [
      "google-ads",
      "cro",
      "media-buying"
    ],
    "metaTitle": "Analytics & Tracking",
    "metaDescription": "GA4, Google Tag Manager, and server-side tracking implementation for accurate, privacy-resilient marketing data."
  },
  {
    "slug": "chatgpt-ads",
    "title": "ChatGPT Ads Strategy & Campaign Management",
    "shortTitle": "ChatGPT Ads",
    "tagline": "Honest eligibility guidance, context-hint targeting, and AI readiness",
    "overview": "ChatGPT Ads are sponsored links appearing beneath OpenAI answers for Free and Go tier users. I help businesses prepare for and manage ChatGPT Ads through a dual-track framework: immediate campaign execution for eligible international entities, and context-hint strategy with GEO alignment for Bangladesh-based brands.",
    "icon": "Bot",
    "category": "ads",
    "benefits": [
      {
        "title": "Eligibility-first validation",
        "description": "Confirm your account, country, and category eligibility before allocating a single dollar of budget.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Context-hint architecture",
        "description": "Map real conversational prompts and user intents instead of outdated exact-match search keyword lists.",
        "icon": "MessageSquare"
      },
      {
        "title": "GEO & organic AI synergy",
        "description": "Align your brand entity with Generative Engine Optimization so you appear in organic AI answers as well as sponsored placements.",
        "icon": "GitBranch"
      }
    ],
    "features": [
      {
        "title": "Context-hint mapping",
        "description": "Define the specific prompts, problem questions, and scenarios where your product solves user queries.",
        "icon": "MessagesSquare"
      },
      {
        "title": "Conversions API & tracking",
        "description": "Set up server-side conversion tracking and privacy-safe attribution tailored for OpenAI's ad system.",
        "icon": "BarChart3"
      },
      {
        "title": "Readiness roadmap",
        "description": "Build ad copy, visual assets, and landing page angles ready to launch the moment regional access opens.",
        "icon": "Compass"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Eligibility & Category Audit",
        "description": "Review business registration, industry restrictions, digital footprint, and market eligibility."
      },
      {
        "step": 2,
        "title": "Context-Hint & Prompt Strategy",
        "description": "Map conversational themes, user queries, and intent-driven messaging angles."
      },
      {
        "step": 3,
        "title": "Setup & Readiness Roadmap",
        "description": "Configure Ads Manager structure and tracking, or construct a complete launch-ready asset vault."
      },
      {
        "step": 4,
        "title": "Continuous Optimization",
        "description": "Refine bids ($3–$5 CPC, $25–$60 CPM benchmarks), test creative angles, and monitor OpenAI eligibility updates."
      }
    ],
    "deliverables": [
      {
        "title": "Context-Hint Strategy Matrix",
        "description": "Comprehensive mapping of customer prompts, problem triggers, and conversational ad hooks."
      },
      {
        "title": "AI Ads Tracking Infrastructure",
        "description": "Configured Conversions API, pixel endpoints, and attribution parameters."
      },
      {
        "title": "GEO & AEO Alignment Blueprint",
        "description": "On-page entity and citation structure to capture organic answers across ChatGPT, Claude, and Perplexity."
      },
      {
        "title": "Eligibility & Rollout Tracker",
        "description": "Direct monitoring of OpenAI advertiser access updates with immediate notification upon market availability."
      }
    ],
    "technologies": [
      "OpenAI Ads Manager",
      "Generative Engine Optimization",
      "Answer Engine Optimization",
      "Conversions API",
      "Looker Studio"
    ],
    "faqs": [
      {
        "question": "Is ChatGPT Ads available for businesses registered in Bangladesh?",
        "answer": "Not yet for direct advertiser billing through OpenAI's Ads Manager as of 2026. OpenAI opened access to a phased set of countries (starting with the US and UK) and continues expanding. For Bangladesh-based businesses, I build a comprehensive readiness strategy and GEO alignment so you capture organic AI citations immediately and are prepared to launch paid ads the day access opens. If you operate an eligible entity abroad, I can run live campaigns today."
      },
      {
        "question": "How do ChatGPT Ads differ from traditional Google Ads?",
        "answer": "Google Ads relies on keyword bidding in search result pages. ChatGPT Ads uses context hints—the themes, questions, and problem scenarios users express during a chat. Furthermore, sponsored links appear exclusively to logged-in Free and Go tier users; paid Plus and Pro subscribers never see ads. Placements are clearly labeled and do not alter the organic response text generated by the model."
      },
      {
        "question": "What are the standard pricing and bidding benchmarks for ChatGPT Ads?",
        "answer": "OpenAI has not instituted a mandatory minimum spend. Typical auction bids range between $3.00 and $5.00 per click, or roughly $25.00 to $60.00 per thousand impressions (CPM), depending on commercial intent and industry competition. My consulting fees are structured separately based on whether you need a readiness strategy or active monthly campaign management."
      },
      {
        "question": "Do ChatGPT Ads alter what the AI recommends in its organic answers?",
        "answer": "No. OpenAI maintains strict architectural boundaries between organic model generation and sponsored links. Advertising does not buy positive sentiment or preferential model answers. Organic visibility requires Generative Engine Optimization (GEO) and entity authority, which is why my strategy integrates both paid readiness and organic citation engineering."
      },
      {
        "question": "What does the ChatGPT Ads readiness package include?",
        "answer": "The readiness package provides a complete context-hint strategy, conversion-focused creative assets, landing page alignment reviews, Conversions API infrastructure specifications, and a full GEO/AEO audit so your business establishes authoritative citations in conversational search engines ahead of competitors."
      },
      {
        "question": "How do we get started with an eligibility assessment?",
        "answer": "Reach out through the contact form or schedule a direct consultation. I will evaluate your corporate registration, industry category, and international target audience to give you an honest appraisal of whether live management or a readiness sprint is right for your business."
      }
    ],
    "relatedServices": [
      "seo",
      "content-marketing",
      "analytics-tracking",
      "google-ads"
    ],
    "metaTitle": "ChatGPT Ads Strategy & Campaign Management | Mahedi Hasan",
    "metaDescription": "Eligibility-first ChatGPT Ads readiness, context-hint targeting, GEO alignment, and paid campaign management for Bangladesh and global brands."
  },
  {
    "slug": "media-buying",
    "title": "Full-Stack Media Buying Services Across Six Core Platforms",
    "shortTitle": "Media Buying",
    "tagline": "Cross-platform ad budget orchestration that turns spend into predictable revenue",
    "overview": "Media buying is the discipline of planning, negotiating, and executing paid advertising across Meta, Google, TikTok, LinkedIn, Pinterest, and ChatGPT Ads as one unified system. I orchestrate your ad spend so channels reinforce each other rather than bidding against your own brand or duplicating audience exposure.",
    "icon": "BarChart3",
    "category": "ads",
    "benefits": [
      {
        "title": "Unified multi-channel orchestration",
        "description": "Manage ad spend across up to six platforms from one strategic vantage point, eliminating cannibalization.",
        "icon": "PieChart"
      },
      {
        "title": "Auction-aware bidding",
        "description": "Tailor bidding strategies to how each platform's auction works—Quality Score, Meta auction, or TikTok delivery.",
        "icon": "Scale"
      },
      {
        "title": "Direct account & data ownership",
        "description": "Full, unhindered access to all ad accounts, tracking pixels, and performance dashboards.",
        "icon": "UserCheck"
      }
    ],
    "features": [
      {
        "title": "Full-funnel budget allocation",
        "description": "Distribute funds strategically across top-of-funnel discovery, mid-funnel education, and bottom-funnel retargeting.",
        "icon": "Filter"
      },
      {
        "title": "Conversion API & tag architecture",
        "description": "Install server-side tracking, offline conversion imports, and deduplicated event pipelines.",
        "icon": "Workflow"
      },
      {
        "title": "Continuous performance reallocation",
        "description": "Shift spend toward top-performing placements and creative angles using real-time revenue data.",
        "icon": "LineChart"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Discovery & Paid Media Audit",
        "description": "Inspect existing account configurations, historical CPAs, wasted audience overlap, and tracking health."
      },
      {
        "step": 2,
        "title": "Platform & Audience Assessment",
        "description": "Identify which of the six advertising channels match your buyer persona and sales cycle today."
      },
      {
        "step": 3,
        "title": "Media Plan & Budget Allocation",
        "description": "Develop a data-backed budget distribution model structured around your customer acquisition funnel."
      },
      {
        "step": 4,
        "title": "Technical Setup & Launch",
        "description": "Deploy pixels, Conversions APIs, UTM standards, and initial creative testing frameworks across active channels."
      },
      {
        "step": 5,
        "title": "Algorithmic Monitoring & Scaling",
        "description": "Adjust bids and budget allocations based on verified CPA and ROAS, scaling winners and cutting fatigue."
      },
      {
        "step": 6,
        "title": "Recurring Reporting & Strategic Review",
        "description": "Review cross-channel attribution, assisted conversions, and quarterly growth opportunities."
      }
    ],
    "deliverables": [
      {
        "title": "Comprehensive Media Allocation Plan",
        "description": "Clear breakdown of channel budgets, target audiences, bidding rules, and expected returns."
      },
      {
        "title": "Unified Tracking & Attribution Setup",
        "description": "Server-side pixels, Google Tag Manager containers, and verified Conversion API setups."
      },
      {
        "title": "Creative Testing Framework",
        "description": "Documented testing roadmap specifying hook variations, visual formats, and messaging angles."
      },
      {
        "title": "Executive Performance Dashboard",
        "description": "Consolidated Looker Studio dashboard tracking spend, blended CAC, ROAS, and channel contribution."
      }
    ],
    "technologies": [
      "Meta Ads Manager",
      "Google Ads",
      "TikTok Ads Manager",
      "LinkedIn Campaign Manager",
      "Pinterest Ads",
      "OpenAI Ads Manager",
      "Looker Studio"
    ],
    "faqs": [
      {
        "question": "What is the distinction between media planning and media buying?",
        "answer": "Media planning is the strategic phase—determining which platforms, audience segments, and budget allocations align with your business goals. Media buying is the operational execution—setting up campaigns, managing live bidding auctions, monitoring delivery pacing, and optimizing placements. I execute both disciplines as an integrated workflow so strategy and execution never drift apart."
      },
      {
        "question": "Must my business advertise on all six platforms immediately?",
        "answer": "No. In most cases, spreading budget across six platforms simultaneously dilutes ad spend and delays algorithmic learning. I typically recommend starting with one or two primary platforms that match your current customer behavior (e.g. Google for intent, Meta for social proof), then expanding once unit economics are stable."
      },
      {
        "question": "How is media buying priced for Bangladesh and international clients?",
        "answer": "For Bangladesh-based brands, Meta ad management typically runs ৳10,000–৳20,000/month (or 10–20% of ad spend). Full-service paid media packages covering multi-channel setups typically range from ৳25,000 to ৳100,000+/month. For international clients, management retainers range from $500 to $3,000/month depending on campaign volume and ad spend scale."
      },
      {
        "question": "Can you audit and take over an existing underperforming ad account?",
        "answer": "Yes. The engagement begins with a comprehensive audit of past campaign configurations, audience overlap, wasted search queries, and pixel setup. I identify what is leaking budget, restructure underperforming ad sets, and implement proper conversion tracking before scaling spend."
      },
      {
        "question": "Do I retain access to my advertising accounts and data?",
        "answer": "Always. All ad accounts, pixels, Google Tag Manager containers, and analytics properties remain owned by you. I manage campaigns through partner permissions. You have 24/7 access to live data and can inspect every dollar spent at any time."
      },
      {
        "question": "How do you prevent campaigns on different platforms from bidding against each other?",
        "answer": "I map each platform to a specific funnel role with distinct exclusions. For example, cold social prospecting introduces the brand with custom exclusions for past purchasers, Google Ads captures high-intent brand and product queries, and remarketing lists are coordinated to prevent redundant ad impressions."
      }
    ],
    "relatedServices": [
      "google-ads",
      "meta-ads",
      "tiktok-ads",
      "analytics-tracking"
    ],
    "metaTitle": "Full-Stack Media Buying Services | Mahedi Hasan",
    "metaDescription": "Cross-channel media buying across Meta, Google, TikTok, LinkedIn, Pinterest, and ChatGPT Ads. Coordinated ad spend and conversion tracking."
  },
  {
    "slug": "social-media-management",
    "title": "Platform-Specific Social Media Management Services",
    "shortTitle": "Social Media",
    "tagline": "Active, consistent, and responsive presence across Facebook, Instagram, LinkedIn & Pinterest",
    "overview": "Social media management keeps your brand active, consistent, and responsive on the platforms that actually matter to your customers. I manage Facebook, Instagram, LinkedIn, and Pinterest as distinct channels with dedicated content calendars, platform-native formats, and prompt community response workflows.",
    "icon": "Share2",
    "category": "strategy",
    "benefits": [
      {
        "title": "Platform-native execution",
        "description": "Tailor content formats, tone, and visual styles to each platform's distinct user behavior.",
        "icon": "Layers"
      },
      {
        "title": "Responsive community care",
        "description": "Monitor and respond to comments and direct messages in Bangla and English before inquiries turn cold.",
        "icon": "MessageSquare"
      },
      {
        "title": "Clean organic and paid separation",
        "description": "Keep organic brand-building and paid advertising distinct while ensuring messaging stays aligned.",
        "icon": "GitBranch"
      }
    ],
    "features": [
      {
        "title": "Channel-specific content calendars",
        "description": "Planned monthly calendars covering Reels, carousels, thought leadership, and infographics.",
        "icon": "CalendarDays"
      },
      {
        "title": "Bilingual community management",
        "description": "Active monitoring of comments, Messenger chats, and direct messages in Bangla and English.",
        "icon": "Languages"
      },
      {
        "title": "Performance insights & growth tracking",
        "description": "Monthly evaluation of reach quality, profile actions, engagement rates, and inquiry volume.",
        "icon": "BarChart3"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Social Audit & Platform Selection",
        "description": "Evaluate historical post performance, audience demographics, and competitor engagement."
      },
      {
        "step": 2,
        "title": "Channel Strategy & Content Pillars",
        "description": "Define distinct roles for each platform (e.g. LinkedIn for B2B authority, Instagram for visual proof)."
      },
      {
        "step": 3,
        "title": "Editorial Calendar Development",
        "description": "Build a structured monthly calendar specifying post themes, formats, captions, and publishing cadence."
      },
      {
        "step": 4,
        "title": "Publishing & Community Management",
        "description": "Publish scheduled posts and actively monitor comments, reviews, and private inquiries."
      },
      {
        "step": 5,
        "title": "Monthly Review & Creative Refinement",
        "description": "Analyze engagement patterns, optimize posting schedules, and refine content pillars."
      }
    ],
    "deliverables": [
      {
        "title": "Monthly Editorial Content Calendar",
        "description": "Approved schedule with custom captions, hashtags, visual creative briefs, and release dates."
      },
      {
        "title": "Community Management Playbook",
        "description": "Documented response guidelines, FAQs, and escalation protocols for customer inquiries."
      },
      {
        "title": "Platform Profile Optimization",
        "description": "Updated bios, highlight covers, contact buttons, and verified page configurations."
      },
      {
        "title": "Monthly Engagement & Audience Report",
        "description": "Analysis of reach, follower growth quality, interaction rates, and top-performing formats."
      }
    ],
    "technologies": [
      "Meta Business Suite",
      "Buffer",
      "Canva",
      "LinkedIn Pages",
      "Instagram Creator Studio"
    ],
    "faqs": [
      {
        "question": "What is the difference between social media management and social media marketing?",
        "answer": "Social media management is the ongoing organic work of establishing a content calendar, publishing regular posts, and engaging with comments and direct messages to maintain an active, credible brand presence. Social media marketing involves investing paid ad spend into targeted campaigns (e.g. Meta Ads or TikTok Ads) to drive direct customer acquisition. I manage both, but scope them separately so you know exactly what each delivers."
      },
      {
        "question": "How do you decide which social media channels a business should focus on?",
        "answer": "Channel selection depends on your buyer persona and commercial model. B2B firms and service consultancies gain the highest return on LinkedIn and thought-leadership content. Consumer brands and restaurants succeed on Instagram Reels and Facebook. E-commerce visual brands find high planning intent on Pinterest. We select only the channels that realistically produce sales opportunities."
      },
      {
        "question": "Can you handle customer inquiries in both Bangla and English?",
        "answer": "Yes. Inquiries in Bangladesh frequently arrive in Bangla, English, or Banglish (phonetic Bangla). I manage community moderation, comments, and Messenger conversations with fluent bilingual responses that represent your brand with warmth and professionalism."
      },
      {
        "question": "Do you produce the graphics and video assets as well as the captions?",
        "answer": "Yes. Post captions, graphic design templates, carousel visuals, and short-form video clip editing are integrated directly into the monthly content calendar. Custom photography or specialized on-site video shoots can be coordinated separately if required."
      },
      {
        "question": "How does organic social management interact with paid ad campaigns?",
        "answer": "An active, professional organic social presence provides critical social proof when prospective buyers click through from a paid ad to inspect your profile. Coordinating organic content themes with active paid ad promotions ensures consistent brand messaging across the entire customer journey."
      },
      {
        "question": "Do you guarantee specific follower growth or viral post engagement?",
        "answer": "No. Follower counts and viral spikes depend on platform algorithm shifts and changing user trends. What I guarantee is disciplined publishing consistency, platform-native creative standards, prompt comment and message responses, and transparent monthly performance reporting."
      }
    ],
    "relatedServices": [
      "creative-content",
      "meta-ads",
      "tiktok-ads",
      "content-marketing"
    ],
    "metaTitle": "Social Media Management Services | Mahedi Hasan",
    "metaDescription": "Platform-specific social media management for Facebook, Instagram, LinkedIn, and Pinterest. Content calendars, bilingual community care, and monthly analytics."
  },
  {
    "slug": "website-marketing",
    "title": "Website Marketing Services in Bangladesh",
    "shortTitle": "Website Marketing",
    "tagline": "Integrated SEO, AEO, Local Pack, and Conversion Optimisation built to drive revenue",
    "overview": "A website is an active growth asset only when the right customers find it and can easily convert. I provide full-funnel website marketing services for SMEs, online stores, and service businesses in Bangladesh—uniting Search Engine Optimization, Answer Engine Optimization (AEO), Google Business Profile management, e-commerce optimization, and conversion tuning under one accountable practitioner.",
    "icon": "Globe2",
    "category": "strategy",
    "benefits": [
      {
        "title": "Unified full-funnel growth",
        "description": "Connect technical SEO, local visibility, content strategy, and conversion optimization into one cohesive system.",
        "icon": "Workflow"
      },
      {
        "title": "AI search & citation readiness (AEO/GEO)",
        "description": "Structure on-page content with standalone answer blocks to earn citations across ChatGPT, Gemini, and Claude.",
        "icon": "Bot"
      },
      {
        "title": "Bangladesh-specific commercial insight",
        "description": "Optimize for local search behaviors, bilingual Bangla-English queries, and mobile checkout flows like bKash and Nagad.",
        "icon": "MapPin"
      }
    ],
    "features": [
      {
        "title": "Search & Answer Engine Optimization",
        "description": "Technical site fixes, intent-driven keyword clustering, and schema markup for Google SERPs and AI models.",
        "icon": "Search"
      },
      {
        "title": "Google Business Profile & Local Pack",
        "description": "Complete profile management, citation cleanup, and review response systems to capture map searchers.",
        "icon": "Building2"
      },
      {
        "title": "E-commerce SEO & catalog structure",
        "description": "Product schema, category optimization, and crawlability improvements across large online inventory catalogs.",
        "icon": "ShoppingBag"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Website & Market Audit",
        "description": "Inspect site speed, technical health, on-page content gaps, backlink authority, and competitor positioning."
      },
      {
        "step": 2,
        "title": "Strategy & Keyword Entity Mapping",
        "description": "Formulate a realistic keyword roadmap balancing ranking difficulty, search volume, and commercial intent."
      },
      {
        "step": 3,
        "title": "Technical & On-Page Execution",
        "description": "Implement speed fixes, metadata updates, structured data, and content optimizations with prior client review."
      },
      {
        "step": 4,
        "title": "Local Pack & Authority Building",
        "description": "Optimize Google Business Profile, build local citations, and earn relevant contextual editorial mentions."
      },
      {
        "step": 5,
        "title": "Conversion Rate & Funnel Tuning",
        "description": "Review page navigation, forms, mobile usability, and trust signals to turn visitors into inquiries."
      },
      {
        "step": 6,
        "title": "Reporting & Continuous Improvement",
        "description": "Deliver regular transparent reports on ranking progress, organic traffic growth, and conversion outcomes."
      }
    ],
    "deliverables": [
      {
        "title": "Comprehensive Website Marketing Roadmap",
        "description": "Prioritized technical, content, local, and conversion recommendations organized by impact."
      },
      {
        "title": "Technical SEO & Schema Implementation",
        "description": "Corrected crawl errors, Core Web Vitals optimizations, and Organization/Article/LocalBusiness JSON-LD."
      },
      {
        "title": "Keyword & Content Entity Map",
        "description": "Documented target search queries, intent classifications, and content cluster architecture."
      },
      {
        "title": "Monthly Organic Growth & Revenue Report",
        "description": "Detailed rankings tracking, organic visitor metrics, conversion counts, and strategic milestones."
      }
    ],
    "technologies": [
      "Google Search Console",
      "Google Analytics 4",
      "Screaming Frog",
      "Ahrefs",
      "Google Business Profile",
      "Looker Studio"
    ],
    "faqs": [
      {
        "question": "How does website marketing differ from traditional standalone SEO?",
        "answer": "SEO is one component of website marketing. While SEO focuses on driving organic search engine visitors, full-funnel website marketing connects that traffic to conversion rate optimization, local map visibility (Google Business Profile), conversational AI search citation (AEO/GEO), email nurturing, and technical web performance. Traffic is only valuable when the underlying website can convert visitors into paying clients."
      },
      {
        "question": "Can you assist with Google AdSense site approval?",
        "answer": "Yes. I review rejected or newly developed websites against Google AdSense policy standards, addressing thin content issues, required legal pages (Privacy Policy, Terms, Contact), navigational hierarchy, and original editorial depth. While final approval rests exclusively with Google, I ensure your site fulfills every compliance standard."
      },
      {
        "question": "How long does it take for website marketing to yield measurable business results?",
        "answer": "A comprehensive technical and content audit is delivered within 2 to 5 business days. Technical speed and crawlability fixes take effect in the first few weeks. Local SEO and Google Business Profile optimizations typically produce increased calls within 4 to 8 weeks. Compounding organic keyword ranking growth usually establishes over 3 to 6 months."
      },
      {
        "question": "Do you guarantee #1 rankings on Google search results?",
        "answer": "No. Any agency or consultant promising guaranteed #1 rankings on Google is violating Google's Webmaster Guidelines. Search rankings depend on ongoing algorithmic adjustments, competitor actions, and site quality. What I guarantee is strict adherence to white-hat guidelines, complete transparency in implementation, and proven growth methodologies."
      },
      {
        "question": "Do you only market websites that you personally developed?",
        "answer": "No. I audit and market existing websites built on WordPress, Shopify, Next.js, or custom frameworks. If technical development improvements or page speed fixes are needed, I can implement them directly or collaborate with your internal developers."
      },
      {
        "question": "How are website marketing campaigns priced in Bangladesh?",
        "answer": "Pricing is tailored based on your website size, technical condition, industry competition, and service mix (SEO, local pack, e-commerce optimization, link acquisition). Every project begins with a free initial website audit and consultation to determine the exact scope before any agreement."
      }
    ],
    "relatedServices": [
      "seo",
      "google-ads",
      "cro",
      "website-development"
    ],
    "metaTitle": "Website Marketing Services in Bangladesh | Mahedi Hasan",
    "metaDescription": "Integrated website marketing in Bangladesh: SEO, Local SEO, Google Business Profile, eCommerce optimization, and Answer Engine Optimization (AEO)."
  },
  {
    "slug": "creative-content",
    "title": "Creative Content Services That Rank, Read Well, and Convert",
    "shortTitle": "Creative Content",
    "tagline": "Entity-rich, conversion-focused writing across ten distinct formats",
    "overview": "Creative content writing services transform your core expertise into words that both prospective buyers and search algorithms trust. I write across ten specialized formats—from topical pillar articles and e-commerce product copy to PR and email newsletters—structured for retrieval by Google AI Overviews and modern answer engines.",
    "icon": "PenTool",
    "category": "strategy",
    "benefits": [
      {
        "title": "Format-specific architecture",
        "description": "Each format follows its own structure and checklist rather than a generic template stretched across every page.",
        "icon": "Target"
      },
      {
        "title": "Search & AI Overview ready",
        "description": "Direct-answer openings, semantic chunking, and entity depth ensure visibility in both classic SERPs and AI answers.",
        "icon": "FileSearch"
      },
      {
        "title": "Connected to full-funnel strategy",
        "description": "Copy is built directly alongside web development, conversion optimization, and paid ad funnels.",
        "icon": "Layers"
      }
    ],
    "features": [
      {
        "title": "Topical authority articles",
        "description": "In-depth, 1,000 to 2,500-word research-backed pieces designed to own competitive search terms.",
        "icon": "FileText"
      },
      {
        "title": "E-commerce product descriptions",
        "description": "50 to 300-word specification-to-benefit descriptions resolving buyer hesitation on durability, sizing, and use case.",
        "icon": "ShoppingBag"
      },
      {
        "title": "Marketing & launch copy",
        "description": "Ad copy, email sequences, and high-converting landing pages built around measurable performance benchmarks.",
        "icon": "Megaphone"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Discovery & Briefing",
        "description": "Clarify brand tone, audience hesitation, focal entities, and target search intent."
      },
      {
        "step": 2,
        "title": "Keyword & Entity Mapping",
        "description": "Map semantic entities, co-occurring topics, and question clusters for comprehensive topical coverage."
      },
      {
        "step": 3,
        "title": "Drafting with Direct Answers",
        "description": "Write structured copy leading with 30–60 word answer blocks before expanding into practical details."
      },
      {
        "step": 4,
        "title": "SEO & AI Retrieval Review",
        "description": "Check drafts against search intent, entity presence, readability formulas, and AI Overview citation standards."
      },
      {
        "step": 5,
        "title": "Delivery & Refinement",
        "description": "Collaborate on revisions to align nuance, tone, and technical accuracy with your business goals."
      },
      {
        "step": 6,
        "title": "Publishing System & Cadence",
        "description": "Establish an editorial calendar and distribution system across web, email, and social."
      }
    ],
    "deliverables": [
      {
        "title": "Production-Ready Content Assets",
        "description": "Fully formatted markdown or CMS-ready copy with meta titles, descriptions, and header hierarchy."
      },
      {
        "title": "Entity & Keyword Alignment Map",
        "description": "Documentation of primary entities, related topics, and target intent served."
      },
      {
        "title": "AI Overview Retrieval Blocks",
        "description": "Standalone 30–60 word definition passages ready for automated search engine extraction."
      },
      {
        "title": "Content Repurposing Framework",
        "description": "Structured breakdown to convert long-form articles into social snippets and email newsletters."
      }
    ],
    "technologies": [
      "Google Docs",
      "Ahrefs",
      "Google Search Console",
      "WordPress",
      "Next.js MDX",
      "Notion"
    ],
    "faqs": [
      {
        "question": "What is the practical difference between content writing and copywriting?",
        "answer": "Content writing focuses on educating, answering questions, and building long-term topical authority through articles, guides, and website pages. Copywriting focuses on driving immediate, measurable action through headlines, ad creative, product landing pages, and email sequences. My creative content services integrate both disciplines, tailoring the approach to where the copy lives in your customer journey."
      },
      {
        "question": "Do you write content in both Bangla and English?",
        "answer": "Yes. I provide content in English, Bangla, or a bilingual mix tailored to Bangladeshi businesses serving domestic buyers while maintaining global professional standards for international clientele across 20+ countries."
      },
      {
        "question": "How do you integrate AI tools into your content production process?",
        "answer": "I use AI tools exclusively for rapid topic research, query intent mapping, and structural verification. All drafts, strategic narratives, brand positioning, and editorial reviews are crafted by human hands to ensure originality, factual precision, and conversational warmth."
      },
      {
        "question": "Which content service is recommended for an e-commerce website?",
        "answer": "Most e-commerce stores require a combination of high-intent product description writing (to answer unspoken buyer objections on durability and sizing) paired with topical blog or review articles to capture organic search queries and featured snippets."
      },
      {
        "question": "Can you adapt to an established corporate brand voice?",
        "answer": "Yes. The discovery phase includes reviewing your existing style guides, top-performing historical articles, and brand vocabulary to guarantee that all new copy feels completely native to your brand identity."
      },
      {
        "question": "How is pricing structured for creative content projects?",
        "answer": "Pricing is scoped by project scope, research depth, word count, and delivery speed. Modular formats such as social captions or product descriptions are priced per unit, while long-form pillar articles and full website rewrites are priced per milestone. A free content audit is conducted first to confirm exact requirements."
      }
    ],
    "relatedServices": [
      "content-marketing",
      "seo-content-writing",
      "social-media-management",
      "seo"
    ],
    "metaTitle": "Creative Content Services That Rank & Convert | Mahedi Hasan",
    "metaDescription": "Research-led creative content writing across ten specialized formats: articles, product descriptions, website copy, PR, and email newsletters."
  },
  {
    "slug": "guest-post-services",
    "title": "Guest Post & High DA Backlink Services",
    "shortTitle": "Guest Post Services",
    "tagline": "Real links on vetted editorial websites with genuine traffic",
    "overview": "Hand-vetted guest post placements on authoritative domains with verified Domain Authority (DA 50–90+), high organic traffic, and permanent dofollow editorial backlinks.",
    "icon": "Link",
    "category": "seo",
    "benefits": [
      {
        "title": "High DA/DR authority",
        "description": "Placements on established publications such as AP News, Street Insider, and Digital Journal.",
        "icon": "ShieldCheck"
      },
      {
        "title": "100% manual outreach",
        "description": "No PBNs or link farms. Real sites with real organic traffic.",
        "icon": "CheckCircle2"
      },
      {
        "title": "Fast turnaround time",
        "description": "Transparent turnaround times (typically 5 to 7 days) with live link verification.",
        "icon": "Clock"
      }
    ],
    "features": [
      {
        "title": "Editorial content writing",
        "description": "Original, high-quality articles written specifically for the target publication.",
        "icon": "FileText"
      },
      {
        "title": "Niche-relevant sites",
        "description": "Catalog of 120+ vetted sites across Tech, Business, Finance, Lifestyle, and General news.",
        "icon": "Database"
      },
      {
        "title": "Permanent dofollow links",
        "description": "Clean anchor text placement providing lasting ranking power.",
        "icon": "Link2"
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Site Selection",
        "description": "Select publications based on DA/DR, organic traffic, and niche fit."
      },
      {
        "step": 2,
        "title": "Content Creation",
        "description": "Write editorial-grade articles incorporating your target URL and anchor text."
      },
      {
        "step": 3,
        "title": "Publishing",
        "description": "Submit to publication editors and verify live dofollow link."
      },
      {
        "step": 4,
        "title": "Indexing & Report",
        "description": "Ensure search engine indexing and provide complete proof-of-placement report."
      }
    ],
    "deliverables": [
      {
        "title": "Live URL verification report",
        "description": "Details of published article, target link, DA, and index status."
      }
    ],
    "technologies": [
      "Ahrefs",
      "Moz",
      "Semrush",
      "Google Search Console"
    ],
    "faqs": [
      {
        "question": "Are these dofollow backlinks?",
        "answer": "Yes, all verified guest post placements include permanent dofollow links within relevant editorial content."
      },
      {
        "question": "How long does a guest post take to publish?",
        "answer": "Typical turnaround is 5 to 7 business days from brief submission to live publication."
      }
    ],
    "relatedServices": [
      "off-page-seo",
      "seo",
      "seo-content-writing"
    ],
    "metaTitle": "Guest Post Services | High DA Dofollow Backlinks",
    "metaDescription": "Buy high-authority guest posts on vetted sites with real traffic, high DA/DR, and permanent dofollow backlinks. Transparent pricing and fast delivery."
  }
];

export const adSpendPricingTiers = [
  {
    tier: "Basic",
    range: "$0 to $500",
    fee: "20%",
    rate: "162 BDT/USD",
    example: "e.g., $250 ad spend + $50 management fee",
    features: [
      "Campaign strategy & audience mapping",
      "Meta Pixel & CAPI setup",
      "A/B creative testing",
      "Weekly budget monitoring",
      "Monthly performance reporting",
    ],
    popular: false,
  },
  {
    tier: "Pro",
    range: "$501 to $1,000",
    fee: "15%",
    rate: "155 BDT/USD",
    example: "e.g., $750 ad spend + $112.50 management fee",
    features: [
      "Full-funnel prospecting & retargeting",
      "Advantage+ & catalog product ads",
      "Custom hook-first copy & creative direction",
      "Conversion API & server-side tracking",
      "Bi-weekly strategy call & daily monitoring",
    ],
    popular: true,
  },
  {
    tier: "Premium",
    range: "$1,000+",
    fee: "10%",
    rate: "148 BDT/USD",
    example: "e.g., $2,000 ad spend + $200 management fee",
    features: [
      "Enterprise scaling & ROAS optimization",
      "Omnichannel sync (Meta + Google + TikTok)",
      "High-velocity creative testing pipeline",
      "Dedicated account manager & direct Slack access",
      "Real-time Looker Studio dashboard",
    ],
    popular: false,
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
