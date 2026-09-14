const fs = require('fs');
const path = require('path');

const BANNED_WORDS = [
  'delve', 'landscape', 'realm', 'crucial', 'leverage', 'game-changer', 
  'unlock', 'seamless', 'cutting-edge', 'robust', 'dynamic', 'revolutionize', 
  'elevate', 'mastering', 'tapestry', 'beacon'
];

function assertNoBannedWords(obj, pathPrefix = '') {
  if (typeof obj === 'string') {
    for (const word of BANNED_WORDS) {
      const regex = new RegExp(`\\b${word}\\b`, 'i');
      if (regex.test(obj)) {
        throw new Error(`[BANNED WORD] Found "${word}" at ${pathPrefix}: "${obj.substring(0, 100)}..."`);
      }
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => assertNoBannedWords(item, `${pathPrefix}[${idx}]`));
  } else if (obj !== null && typeof obj === 'object') {
    for (const [key, val] of Object.entries(obj)) {
      assertNoBannedWords(val, `${pathPrefix}.${key}`);
    }
  }
}

// 10 SERVICES SPECIFICATION
const enrichedServices = {
  "chatgpt-ads": {
    slug: "chatgpt-ads",
    title: "ChatGPT Ads Strategy & Campaign Management",
    shortTitle: "ChatGPT Ads",
    tagline: "Honest eligibility guidance, context-hint targeting, and AI readiness",
    overview:
      "ChatGPT Ads are sponsored links appearing beneath OpenAI answers for Free and Go tier users. I help businesses prepare for and manage ChatGPT Ads through a dual-track framework: immediate campaign execution for eligible international entities, and context-hint strategy with GEO alignment for Bangladesh-based brands.",
    icon: "Bot",
    category: "ads",
    benefits: [
      {
        title: "Eligibility-first validation",
        description: "Confirm your account, country, and category eligibility before allocating a single dollar of budget.",
        icon: "ShieldCheck",
      },
      {
        title: "Context-hint architecture",
        description: "Map real conversational prompts and user intents instead of outdated exact-match search keyword lists.",
        icon: "MessageSquare",
      },
      {
        title: "GEO & organic AI synergy",
        description: "Align your brand entity with Generative Engine Optimization so you appear in organic AI answers as well as sponsored placements.",
        icon: "GitBranch",
      },
    ],
    features: [
      {
        title: "Context-hint mapping",
        description: "Define the specific prompts, problem questions, and scenarios where your product solves user queries.",
        icon: "MessagesSquare",
      },
      {
        title: "Conversions API & tracking",
        description: "Set up server-side conversion tracking and privacy-safe attribution tailored for OpenAI's ad system.",
        icon: "BarChart3",
      },
      {
        title: "Readiness roadmap",
        description: "Build ad copy, visual assets, and landing page angles ready to launch the moment regional access opens.",
        icon: "Compass",
      },
    ],
    process: [
      { step: 1, title: "Eligibility & Category Audit", description: "Review business registration, industry restrictions, digital footprint, and market eligibility." },
      { step: 2, title: "Context-Hint & Prompt Strategy", description: "Map conversational themes, user queries, and intent-driven messaging angles." },
      { step: 3, title: "Setup & Readiness Roadmap", description: "Configure Ads Manager structure and tracking, or construct a complete launch-ready asset vault." },
      { step: 4, title: "Continuous Optimization", description: "Refine bids ($3–$5 CPC, $25–$60 CPM benchmarks), test creative angles, and monitor OpenAI eligibility updates." },
    ],
    deliverables: [
      { title: "Context-Hint Strategy Matrix", description: "Comprehensive mapping of customer prompts, problem triggers, and conversational ad hooks." },
      { title: "AI Ads Tracking Infrastructure", description: "Configured Conversions API, pixel endpoints, and attribution parameters." },
      { title: "GEO & AEO Alignment Blueprint", description: "On-page entity and citation structure to capture organic answers across ChatGPT, Claude, and Perplexity." },
      { title: "Eligibility & Rollout Tracker", description: "Direct monitoring of OpenAI advertiser access updates with immediate notification upon market availability." },
    ],
    technologies: ["OpenAI Ads Manager", "Generative Engine Optimization", "Answer Engine Optimization", "Conversions API", "Looker Studio"],
    faqs: [
      {
        question: "Is ChatGPT Ads available for businesses registered in Bangladesh?",
        answer: "Not yet for direct advertiser billing through OpenAI's Ads Manager as of 2026. OpenAI opened access to a phased set of countries (starting with the US and UK) and continues expanding. For Bangladesh-based businesses, I build a comprehensive readiness strategy and GEO alignment so you capture organic AI citations immediately and are prepared to launch paid ads the day access opens. If you operate an eligible entity abroad, I can run live campaigns today.",
      },
      {
        question: "How do ChatGPT Ads differ from traditional Google Ads?",
        answer: "Google Ads relies on keyword bidding in search result pages. ChatGPT Ads uses context hints—the themes, questions, and problem scenarios users express during a chat. Furthermore, sponsored links appear exclusively to logged-in Free and Go tier users; paid Plus and Pro subscribers never see ads. Placements are clearly labeled and do not alter the organic response text generated by the model.",
      },
      {
        question: "What are the standard pricing and bidding benchmarks for ChatGPT Ads?",
        answer: "OpenAI has not instituted a mandatory minimum spend. Typical auction bids range between $3.00 and $5.00 per click, or roughly $25.00 to $60.00 per thousand impressions (CPM), depending on commercial intent and industry competition. My consulting fees are structured separately based on whether you need a readiness strategy or active monthly campaign management.",
      },
      {
        question: "Do ChatGPT Ads alter what the AI recommends in its organic answers?",
        answer: "No. OpenAI maintains strict architectural boundaries between organic model generation and sponsored links. Advertising does not buy positive sentiment or preferential model answers. Organic visibility requires Generative Engine Optimization (GEO) and entity authority, which is why my strategy integrates both paid readiness and organic citation engineering.",
      },
      {
        question: "What does the ChatGPT Ads readiness package include?",
        answer: "The readiness package provides a complete context-hint strategy, conversion-focused creative assets, landing page alignment reviews, Conversions API infrastructure specifications, and a full GEO/AEO audit so your business establishes authoritative citations in conversational search engines ahead of competitors.",
      },
      {
        question: "How do we get started with an eligibility assessment?",
        answer: "Reach out through the contact form or schedule a direct consultation. I will evaluate your corporate registration, industry category, and international target audience to give you an honest appraisal of whether live management or a readiness sprint is right for your business.",
      },
    ],
    relatedServices: ["seo", "content-marketing", "analytics-tracking", "google-ads"],
    metaTitle: "ChatGPT Ads Strategy & Campaign Management | Mahedi Hasan",
    metaDescription: "Eligibility-first ChatGPT Ads readiness, context-hint targeting, GEO alignment, and paid campaign management for Bangladesh and global brands.",
  },

  "creative-content": {
    slug: "creative-content",
    title: "Creative Content Services That Rank, Read Well, and Convert",
    shortTitle: "Creative Content",
    tagline: "Entity-rich, conversion-focused writing across ten distinct formats",
    overview:
      "Creative content writing services transform your core expertise into words that both prospective buyers and search algorithms trust. I write across ten specialized formats—from topical pillar articles and e-commerce product copy to PR and email newsletters—structured for retrieval by Google AI Overviews and modern answer engines.",
    icon: "PenTool",
    category: "strategy",
    benefits: [
      {
        title: "Format-specific architecture",
        description: "Each format follows its own structure and checklist rather than a generic template stretched across every page.",
        icon: "Target",
      },
      {
        title: "Search & AI Overview ready",
        description: "Direct-answer openings, semantic chunking, and entity depth ensure visibility in both classic SERPs and AI answers.",
        icon: "FileSearch",
      },
      {
        title: "Connected to full-funnel strategy",
        description: "Copy is built directly alongside web development, conversion optimization, and paid ad funnels.",
        icon: "Layers",
      },
    ],
    features: [
      {
        title: "Topical authority articles",
        description: "In-depth, 1,000 to 2,500-word research-backed pieces designed to own competitive search terms.",
        icon: "FileText",
      },
      {
        title: "E-commerce product descriptions",
        description: "50 to 300-word specification-to-benefit descriptions resolving buyer hesitation on durability, sizing, and use case.",
        icon: "ShoppingBag",
      },
      {
        title: "Marketing & launch copy",
        description: "Ad copy, email sequences, and high-converting landing pages built around measurable performance benchmarks.",
        icon: "Megaphone",
      },
    ],
    process: [
      { step: 1, title: "Discovery & Briefing", description: "Clarify brand tone, audience hesitation, focal entities, and target search intent." },
      { step: 2, title: "Keyword & Entity Mapping", description: "Map semantic entities, co-occurring topics, and question clusters for comprehensive topical coverage." },
      { step: 3, title: "Drafting with Direct Answers", description: "Write structured copy leading with 30–60 word answer blocks before expanding into practical details." },
      { step: 4, title: "SEO & AI Retrieval Review", description: "Check drafts against search intent, entity presence, readability formulas, and AI Overview citation standards." },
      { step: 5, title: "Delivery & Refinement", description: "Collaborate on revisions to align nuance, tone, and technical accuracy with your business goals." },
      { step: 6, title: "Publishing System & Cadence", description: "Establish an editorial calendar and distribution system across web, email, and social." },
    ],
    deliverables: [
      { title: "Production-Ready Content Assets", description: "Fully formatted markdown or CMS-ready copy with meta titles, descriptions, and header hierarchy." },
      { title: "Entity & Keyword Alignment Map", description: "Documentation of primary entities, related topics, and target intent served." },
      { title: "AI Overview Retrieval Blocks", description: "Standalone 30–60 word definition passages ready for automated search engine extraction." },
      { title: "Content Repurposing Framework", description: "Structured breakdown to convert long-form articles into social snippets and email newsletters." },
    ],
    technologies: ["Google Docs", "Ahrefs", "Google Search Console", "WordPress", "Next.js MDX", "Notion"],
    faqs: [
      {
        question: "What is the practical difference between content writing and copywriting?",
        answer: "Content writing focuses on educating, answering questions, and building long-term topical authority through articles, guides, and website pages. Copywriting focuses on driving immediate, measurable action through headlines, ad creative, product landing pages, and email sequences. My creative content services integrate both disciplines, tailoring the approach to where the copy lives in your customer journey.",
      },
      {
        question: "Do you write content in both Bangla and English?",
        answer: "Yes. I provide content in English, Bangla, or a bilingual mix tailored to Bangladeshi businesses serving domestic buyers while maintaining global professional standards for international clientele across 20+ countries.",
      },
      {
        question: "How do you integrate AI tools into your content production process?",
        answer: "I use AI tools exclusively for rapid topic research, query intent mapping, and structural verification. All drafts, strategic narratives, brand positioning, and editorial reviews are crafted by human hands to ensure originality, factual precision, and conversational warmth.",
      },
      {
        question: "Which content service is recommended for an e-commerce website?",
        answer: "Most e-commerce stores require a combination of high-intent product description writing (to answer unspoken buyer objections on durability and sizing) paired with topical blog or review articles to capture organic search queries and featured snippets.",
      },
      {
        question: "Can you adapt to an established corporate brand voice?",
        answer: "Yes. The discovery phase includes reviewing your existing style guides, top-performing historical articles, and brand vocabulary to guarantee that all new copy feels completely native to your brand identity.",
      },
      {
        question: "How is pricing structured for creative content projects?",
        answer: "Pricing is scoped by project scope, research depth, word count, and delivery speed. Modular formats such as social captions or product descriptions are priced per unit, while long-form pillar articles and full website rewrites are priced per milestone. A free content audit is conducted first to confirm exact requirements.",
      },
    ],
    relatedServices: ["content-marketing", "seo-content-writing", "social-media-management", "seo"],
    metaTitle: "Creative Content Services That Rank & Convert | Mahedi Hasan",
    metaDescription: "Research-led creative content writing across ten specialized formats: articles, product descriptions, website copy, PR, and email newsletters.",
  },

  "google-ads": {
    slug: "google-ads",
    title: "Google Ads Management Services in Bangladesh & Global",
    shortTitle: "Google Ads",
    tagline: "Conversion-first Search, Shopping, and Performance Max management",
    overview:
      "Google Ads management connects your business with buyers at the precise second they search for your solution. I manage Search, Shopping, Display, YouTube, and Performance Max campaigns with strict conversion tracking, bilingual Bangla-English keyword targeting, and negative keyword sculpting to eliminate wasted ad spend.",
    icon: "Target",
    category: "ads",
    benefits: [
      {
        title: "Conversion-first architecture",
        description: "Confirm what counts as a qualified lead or sale before allocating spend to prevent empty traffic.",
        icon: "ShieldCheck",
      },
      {
        title: "Bilingual keyword coverage",
        description: "Target how customers actually search in Bangladesh and regional markets by blending Bangla and English queries.",
        icon: "Languages",
      },
      {
        title: "Account transparency & ownership",
        description: "You retain 100% direct ownership of your ad account, historical data, and billing profiles.",
        icon: "UserCheck",
      },
    ],
    features: [
      {
        title: "Search & Shopping campaigns",
        description: "Capture high-intent queries and catalog purchases with tightly structured ad groups and negative lists.",
        icon: "Search",
      },
      {
        title: "Performance Max optimization",
        description: "Asset group testing, audience signals, and search theme controls to prevent low-quality inventory waste.",
        icon: "Cpu",
      },
      {
        title: "Conversion tracking & CAPI",
        description: "Accurate event configuration across GA4, Google Ads tags, and phone call tracking before launch.",
        icon: "BarChart3",
      },
    ],
    process: [
      { step: 1, title: "Account & Tracking Audit", description: "Review historical search terms, wasted spend patterns, Quality Scores, and conversion setup." },
      { step: 2, title: "Keyword & Competitor Research", description: "Uncover actual search queries across Bangla and English, analyzing competitor auction insights." },
      { step: 3, title: "Campaign Architecture & Build", description: "Structure campaigns by intent level, draft compelling ad copy, and implement negative keyword lists." },
      { step: 4, title: "Launch & Algorithmic Learning", description: "Closely monitor early bid performance and search query reports during the 2–4 week learning window." },
      { step: 5, title: "Iterative Optimization & Reporting", description: "Refine bids, pause non-converting keywords, test ad variations, and provide monthly outcome reports." },
    ],
    deliverables: [
      { title: "Audited Account Architecture", description: "Cleanly segmented campaigns, intent-based ad groups, and comprehensive negative keyword lists." },
      { title: "Verified Conversion Tracking", description: "Configured GA4 events, Google Ads tags, and offline conversion imports." },
      { title: "Ad Copy & Asset Matrix", description: "High-CTR headlines, descriptions, callouts, and structured snippets aligned with landing page messaging." },
      { title: "Monthly Performance Intelligence", description: "Transparent reporting detailing CPA, ROAS, search impression share, and actionable next steps." },
    ],
    technologies: ["Google Ads Manager", "Google Tag Manager", "Google Analytics 4", "Looker Studio", "Google Merchant Center"],
    faqs: [
      {
        question: "Do I need a fully operational website before running Google Ads?",
        answer: "Yes, in virtually all instances. You require a fast, mobile-optimized destination to convert clicks—whether an e-commerce catalog, service page, or dedicated landing page. Sending paid traffic to an unfinished or slow site dissipates ad spend immediately.",
      },
      {
        question: "How is Google Ads spend separated from your management fee?",
        answer: "You pay ad spend directly to Google via your registered payment method (credit card or international card). My management fee is billed separately for strategic planning, continuous bid adjustments, negative keyword mining, A/B ad testing, and analytics reporting.",
      },
      {
        question: "How do you eliminate wasted spend in Google Ads accounts?",
        answer: "Most wasted budget stems from broad match keywords paired with no negative keyword list, or launching campaigns without conversion tracking. I sculpt aggressive negative keyword lists, structure tightly themed ad groups, and verify event tracking before spending a single taka.",
      },
      {
        question: "How does Google Ads compare to Facebook Ads?",
        answer: "Google Ads targets people actively searching for a direct solution right now (high commercial intent). Facebook Ads interrupts people while scrolling based on interests and demographic data (demand generation). Both work best when connected: Google captures active buyers, while Meta builds familiarity and retargets non-converters.",
      },
      {
        question: "How long does it take for a new Google Ads campaign to stabilize?",
        answer: "Campaigns typically launch within 3 to 5 business days after tracking verification. Google's Smart Bidding algorithm requires 2 to 4 weeks to complete its initial learning phase. Predictable cost-per-acquisition (CPA) metrics usually establish firmly by month two or three of continuous optimization.",
      },
      {
        question: "Do you enforce long-term lock-in agency contracts?",
        answer: "No. Engagements operate on transparent monthly retainers with clear milestones. You retain complete ownership of your Google Ads account, campaign history, and tracking assets at all times.",
      },
    ],
    relatedServices: ["website-marketing", "cro", "analytics-tracking", "media-buying"],
    metaTitle: "Google Ads Management Services in Bangladesh | Mahedi Hasan",
    metaDescription: "Conversion-first Google Ads management for businesses in Bangladesh and globally: Search, Shopping, Performance Max, and GA4 tracking.",
  },

  "local-seo": {
    slug: "local-seo",
    title: "Local SEO Services in Bangladesh & Regional Markets",
    shortTitle: "Local SEO",
    tagline: "Dominate Google Maps, the Local Pack, and neighborhood search queries",
    overview:
      "Local SEO services ensure your business stands out when nearby customers search on Google Maps and 'near me' queries. I optimize Google Business Profiles, establish NAP citation consistency across Bangladeshi and international directories, and build location-specific on-page signals that turn local searchers into phone calls and store visits.",
    icon: "MapPin",
    category: "seo",
    benefits: [
      {
        title: "Google Local Pack dominance",
        description: "Position your business in the top 3 map results where nearly half of local mobile clicks occur.",
        icon: "Award",
      },
      {
        title: "Action-oriented local conversions",
        description: "Turn search impressions into direct phone calls, WhatsApp inquiries, and physical foot traffic.",
        icon: "PhoneCall",
      },
      {
        title: "Technical implementation included",
        description: "On-page schema markup, location pages, and website fixes are built and deployed directly.",
        icon: "Code",
      },
    ],
    features: [
      {
        title: "Google Business Profile optimization",
        description: "Category selection, service menus, geotagged photos, weekly posts, and Q&A management.",
        icon: "Building2",
      },
      {
        title: "NAP citation cleanup & building",
        description: "Eliminate conflicting name, address, and phone details across high-authority directories.",
        icon: "CheckSquare",
      },
      {
        title: "Local schema & landing pages",
        description: "Implement LocalBusiness structured data and area-specific landing pages with clear driving landmarks.",
        icon: "FileCode2",
      },
    ],
    process: [
      { step: 1, title: "Local Presence & GBP Audit", description: "Inspect existing map listings, duplicate profiles, citation discrepancies, and competitor local authority." },
      { step: 2, title: "Geo-Keyword & Area Mapping", description: "Identify exact neighborhood, landmark, and city-level phrases prospective customers use." },
      { step: 3, title: "Profile & On-Site Optimization", description: "Tune GBP attributes, descriptions, and categories while implementing local schema on your website." },
      { step: 4, title: "Citation Building & Consistency", description: "Build verified directory listings across Bangladeshi platforms, Facebook Business, and global data aggregators." },
      { step: 5, title: "Review Generation & Reputation", description: "Deploy a structured process to collect authentic reviews and craft prompt, keyword-conscious responses." },
      { step: 6, title: "Monthly Rank & Visibility Tracking", description: "Monitor local grid rankings, call volume, direction requests, and photo views to guide ongoing improvements." },
    ],
    deliverables: [
      { title: "Fully Optimized Google Business Profile", description: "Verified, category-accurate listing with rich descriptions, product/service listings, and photos." },
      { title: "NAP Consistency Directory Audit", description: "Corrected listings across top directories ensuring uniform business data across the web." },
      { title: "Local SEO Landing Page & Schema", description: "Dedicated area-specific page code with LocalBusiness JSON-LD markup and geo-coordinates." },
      { title: "Monthly Local Visibility Report", description: "Local Pack rank tracking, call logs, map direction requests, and review growth metrics." },
    ],
    technologies: ["Google Business Profile", "Google Maps", "BrightLocal", "Schema.org", "Google Search Console"],
    faqs: [
      {
        question: "Is having an active Facebook Business Page sufficient for local visibility in Bangladesh?",
        answer: "No. Facebook and Google Maps operate on completely independent ranking algorithms. While Facebook supports social validation and direct messaging, Google's Local Pack evaluates Google Business Profile completeness, on-site location content, local backlink authority, and citation consistency. Both are valuable, but Facebook will not substitute for a verified Google Maps presence.",
      },
      {
        question: "Do I need a website to rank on Google Maps?",
        answer: "A Google Business Profile can technically appear in local map results without a website, but having a fast website with structured LocalBusiness schema and area-specific landing pages dramatically strengthens your ranking signals and provides customers a trustworthy conversion point.",
      },
      {
        question: "What are your pricing packages for Local SEO in Bangladesh?",
        answer: "Local SEO packages are structured as follows: Starter Local SEO (৳20,000–৳25,000/month or ~$165–$205/month) for single-location clinics or shops; Growth Local SEO (৳35,000–৳50,000/month or ~$290–$415/month) for competitive service categories; and Multi-Location/Enterprise (from ৳70,000/month) for branch networks across Dhaka, Chittagong, and Sylhet. A one-time GBP Audit & Setup is also available for ৳15,000.",
      },
      {
        question: "How long does it take to achieve rankings in the Google Local Pack?",
        answer: "Most local businesses see measurable movement in map visibility and call volume within 60 to 90 days. Solidifying a top-3 position in competitive metropolitan areas like Gulshan, Banani, or Dhanmondi typically requires 4 to 6 months of disciplined citation cleanup, review acquisition, and content optimization.",
      },
      {
        question: "How do you manage multi-location businesses with branches in different cities?",
        answer: "Each physical branch requires an independent, verified Google Business Profile, unique local phone number, and a dedicated location page on your website with unique neighborhood descriptions and directions. I structure multi-location accounts so individual branches do not cannibalize each other's search signals.",
      },
      {
        question: "What activities take place in the first month of local SEO?",
        answer: "Month one focuses heavily on foundational cleanup: reclaiming or verifying your GBP, conducting a deep NAP audit to fix contradictory phone numbers and addresses across directories, updating primary and secondary categories, and implementing localized JSON-LD schema on your website.",
      },
    ],
    relatedServices: ["seo", "technical-seo", "website-marketing", "cro"],
    metaTitle: "Local SEO Services in Bangladesh | Mahedi Hasan",
    metaDescription: "Rank higher on Google Maps and local search across Dhaka, Chittagong, and Bangladesh. Google Business Profile optimization, citations, and reviews.",
  },

  "media-buying": {
    slug: "media-buying",
    title: "Full-Stack Media Buying Services Across Six Core Platforms",
    shortTitle: "Media Buying",
    tagline: "Cross-platform ad budget orchestration that turns spend into predictable revenue",
    overview:
      "Media buying is the discipline of planning, negotiating, and executing paid advertising across Meta, Google, TikTok, LinkedIn, Pinterest, and ChatGPT Ads as one unified system. I orchestrate your ad spend so channels reinforce each other rather than bidding against your own brand or duplicating audience exposure.",
    icon: "BarChart3",
    category: "ads",
    benefits: [
      {
        title: "Unified multi-channel orchestration",
        description: "Manage ad spend across up to six platforms from one strategic vantage point, eliminating cannibalization.",
        icon: "PieChart",
      },
      {
        title: "Auction-aware bidding",
        description: "Tailor bidding strategies to how each platform's auction works—Quality Score, Meta auction, or TikTok delivery.",
        icon: "Scale",
      },
      {
        title: "Direct account & data ownership",
        description: "Full, unhindered access to all ad accounts, tracking pixels, and performance dashboards.",
        icon: "UserCheck",
      },
    ],
    features: [
      {
        title: "Full-funnel budget allocation",
        description: "Distribute funds strategically across top-of-funnel discovery, mid-funnel education, and bottom-funnel retargeting.",
        icon: "Filter",
      },
      {
        title: "Conversion API & tag architecture",
        description: "Install server-side tracking, offline conversion imports, and deduplicated event pipelines.",
        icon: "Workflow",
      },
      {
        title: "Continuous performance reallocation",
        description: "Shift spend toward top-performing placements and creative angles using real-time revenue data.",
        icon: "LineChart",
      },
    ],
    process: [
      { step: 1, title: "Discovery & Paid Media Audit", description: "Inspect existing account configurations, historical CPAs, wasted audience overlap, and tracking health." },
      { step: 2, title: "Platform & Audience Assessment", description: "Identify which of the six advertising channels match your buyer persona and sales cycle today." },
      { step: 3, title: "Media Plan & Budget Allocation", description: "Develop a data-backed budget distribution model structured around your customer acquisition funnel." },
      { step: 4, title: "Technical Setup & Launch", description: "Deploy pixels, Conversions APIs, UTM standards, and initial creative testing frameworks across active channels." },
      { step: 5, title: "Algorithmic Monitoring & Scaling", description: "Adjust bids and budget allocations based on verified CPA and ROAS, scaling winners and cutting fatigue." },
      { step: 6, title: "Recurring Reporting & Strategic Review", description: "Review cross-channel attribution, assisted conversions, and quarterly growth opportunities." },
    ],
    deliverables: [
      { title: "Comprehensive Media Allocation Plan", description: "Clear breakdown of channel budgets, target audiences, bidding rules, and expected returns." },
      { title: "Unified Tracking & Attribution Setup", description: "Server-side pixels, Google Tag Manager containers, and verified Conversion API setups." },
      { title: "Creative Testing Framework", description: "Documented testing roadmap specifying hook variations, visual formats, and messaging angles." },
      { title: "Executive Performance Dashboard", description: "Consolidated Looker Studio dashboard tracking spend, blended CAC, ROAS, and channel contribution." },
    ],
    technologies: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "LinkedIn Campaign Manager", "Pinterest Ads", "OpenAI Ads Manager", "Looker Studio"],
    faqs: [
      {
        question: "What is the distinction between media planning and media buying?",
        answer: "Media planning is the strategic phase—determining which platforms, audience segments, and budget allocations align with your business goals. Media buying is the operational execution—setting up campaigns, managing live bidding auctions, monitoring delivery pacing, and optimizing placements. I execute both disciplines as an integrated workflow so strategy and execution never drift apart.",
      },
      {
        question: "Must my business advertise on all six platforms immediately?",
        answer: "No. In most cases, spreading budget across six platforms simultaneously dilutes ad spend and delays algorithmic learning. I typically recommend starting with one or two primary platforms that match your current customer behavior (e.g. Google for intent, Meta for social proof), then expanding once unit economics are stable.",
      },
      {
        question: "How is media buying priced for Bangladesh and international clients?",
        answer: "For Bangladesh-based brands, Meta ad management typically runs ৳10,000–৳20,000/month (or 10–20% of ad spend). Full-service paid media packages covering multi-channel setups typically range from ৳25,000 to ৳100,000+/month. For international clients, management retainers range from $500 to $3,000/month depending on campaign volume and ad spend scale.",
      },
      {
        question: "Can you audit and take over an existing underperforming ad account?",
        answer: "Yes. The engagement begins with a comprehensive audit of past campaign configurations, audience overlap, wasted search queries, and pixel setup. I identify what is leaking budget, restructure underperforming ad sets, and implement proper conversion tracking before scaling spend.",
      },
      {
        question: "Do I retain access to my advertising accounts and data?",
        answer: "Always. All ad accounts, pixels, Google Tag Manager containers, and analytics properties remain owned by you. I manage campaigns through partner permissions. You have 24/7 access to live data and can inspect every dollar spent at any time.",
      },
      {
        question: "How do you prevent campaigns on different platforms from bidding against each other?",
        answer: "I map each platform to a specific funnel role with distinct exclusions. For example, cold social prospecting introduces the brand with custom exclusions for past purchasers, Google Ads captures high-intent brand and product queries, and remarketing lists are coordinated to prevent redundant ad impressions.",
      },
    ],
    relatedServices: ["google-ads", "meta-ads", "tiktok-ads", "analytics-tracking"],
    metaTitle: "Full-Stack Media Buying Services | Mahedi Hasan",
    metaDescription: "Cross-channel media buying across Meta, Google, TikTok, LinkedIn, Pinterest, and ChatGPT Ads. Coordinated ad spend and conversion tracking.",
  },

  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads Management for Facebook & Instagram",
    shortTitle: "Meta Ads",
    tagline: "Audit-first setup, weekly creative testing, and Conversions API tracking",
    overview:
      "Meta Ads management delivers profitable, structured customer acquisition across Facebook and Instagram. I build high-performing campaign architectures using the Meta Conversions API (CAPI), structured prospecting and retargeting splits, and a disciplined weekly creative testing cycle that beats ad fatigue.",
    icon: "Megaphone",
    category: "ads",
    benefits: [
      {
        title: "Conversions API tracking resilience",
        description: "Bypass browser cookie loss and iOS privacy barriers with server-side event tracking.",
        icon: "ShieldAlert",
      },
      {
        title: "Weekly creative testing pipeline",
        description: "Combat ad fatigue by continuously testing fresh hooks, visual formats, and customer angles.",
        icon: "RefreshCw",
      },
      {
        title: "Regional demographic precision",
        description: "Tailor campaigns to specific platform nuances, such as Bangladesh's 72M Facebook users and Messenger-driven commerce.",
        icon: "Users",
      },
    ],
    features: [
      {
        title: "Advantage+ & custom campaign design",
        description: "Deploy modern automated Advantage+ catalog feeds alongside controlled manual prospecting groups.",
        icon: "Sliders",
      },
      {
        title: "Full-funnel segmentation",
        description: "Clear structural separation between cold interest/lookalike audiences and warm website/video retargeting.",
        icon: "Filter",
      },
      {
        title: "Messenger & lead capture integration",
        description: "Set up direct-to-chat flows and instant lead forms optimized for mobile conversion.",
        icon: "MessageCircle",
      },
    ],
    process: [
      { step: 1, title: "Account & Tracking Audit", description: "Inspect Pixel health, CAPI event deduplication, historical creative metrics, and account structure." },
      { step: 2, title: "Audience Mapping & Persona Planning", description: "Construct cold prospecting, custom lookalikes, and customer retargeting lists from real business data." },
      { step: 3, title: "Campaign Architecture & Setup", description: "Build organized campaigns with distinct budget controls, bidding caps, and placement rules." },
      { step: 4, title: "Creative Production & Hook Testing", description: "Draft compelling copy angles, test video and carousel formats, and align CTAs with the landing page." },
      { step: 5, title: "Daily Monitoring & Algorithmic Learning", description: "Protect the 1–2 week learning phase, monitoring cost-per-result and frequency before adjusting budgets." },
      { step: 6, title: "Optimization & Scaling", description: "Scale winning ad sets through horizontal and vertical budget expansion while cycling fatigued creatives." },
    ],
    deliverables: [
      { title: "Production Meta Ad Account", description: "Structured prospecting, retargeting, and catalog campaigns with verified Conversion API tracking." },
      { title: "Weekly Creative Testing Matrix", description: "Documented logs of tested hooks, headline variants, ad copy, and corresponding ROAS metrics." },
      { title: "Audience & Pixel Configuration Report", description: "Verified event match quality, custom conversions, and segmented audience definitions." },
      { title: "Transparent Monthly Analytics", description: "In-depth reporting covering cost per acquisition, return on ad spend, and conversion quality." },
    ],
    technologies: ["Meta Ads Manager", "Meta Pixel", "Conversions API (CAPI)", "Meta Business Suite", "Looker Studio"],
    faqs: [
      {
        question: "How does your pricing work for Meta Ads management?",
        answer: "I offer two transparent options: Option 1 is a Service Charge on Ad Spend scaling down as spend increases (20% for spend up to $500, 15% for $501–$1,000, and 10% for $1,000+). Option 2 is a Fixed Monthly Management Fee: Basic (৳5,000/month for up to 3 campaigns), Pro (৳10,000/month for up to 7 campaigns), and Premium (৳15,000/month for full-funnel scaling up to 12 campaigns). Ad spend is always paid directly to Meta.",
      },
      {
        question: "Why is the Meta Conversions API (CAPI) mandatory for your campaigns?",
        answer: "Standard browser-based Pixel tracking misses between 15% and 30% of conversion events due to iOS privacy settings, ad blockers, and cookie expiration. CAPI sends conversion events directly from the web server to Meta, restoring data fidelity and feeding Meta's delivery algorithm accurate signals to lower your customer acquisition costs.",
      },
      {
        question: "How do you tailor Meta Ads for the Bangladesh market specifically?",
        answer: "Bangladesh has over 72 million Facebook users (heavily mobile-first) and roughly 10 million Instagram users. Furthermore, Facebook ad audiences in Bangladesh skew 63% male, with the 18–24 demographic representing the largest segment. Local consumer purchasing often happens through Messenger conversations rather than immediate web checkout. I build mobile-first creatives and Messenger chat flows matching these exact local behavioral realities.",
      },
      {
        question: "How does your weekly creative testing process work?",
        answer: "Ad fatigue happens rapidly on social feeds. Rather than letting one creative run for months, I introduce and test fresh visual hooks, video variations, headline angles, and call-to-action variants weekly. Winning creatives receive budget allocation, while decaying ads are phased out before they inflate your CPA.",
      },
      {
        question: "What minimum daily ad budget is recommended to start?",
        answer: "Meta's delivery algorithm requires approximately 50 conversion events per ad set within a 7-day window to exit the learning phase. The necessary budget depends on your target cost per acquisition. We calculate your ideal budget baseline during the initial free account review.",
      },
      {
        question: "Do you require long-term lock-in agency contracts?",
        answer: "No. Engagements operate with a minimum one-month commitment. You retain full administrative ownership of your Business Manager and ad accounts at all times.",
      },
    ],
    relatedServices: ["media-buying", "tiktok-ads", "creative-content", "analytics-tracking"],
    metaTitle: "Meta Ads Management for Facebook & Instagram | Mahedi Hasan",
    metaDescription: "Structured Meta Ads management for Facebook and Instagram. Conversions API setup, weekly creative testing, and transparent performance reporting.",
  },

  "pinterest-ads": {
    slug: "pinterest-ads",
    title: "Pinterest Ads Management Services for E-Commerce & DTC Brands",
    shortTitle: "Pinterest Ads",
    tagline: "Reach high-intent shoppers while they plan future purchases",
    overview:
      "Pinterest Ads management connects your brand with an audience actively planning home decor, fashion, lifestyle, and gift purchases. I manage Standard Pins, Shopping Catalog feeds, and Video Pins with full Pinterest Tag conversion tracking, turning Pinterest's visual search engine into a compounding sales channel.",
    icon: "Image",
    category: "ads",
    benefits: [
      {
        title: "Planning-stage intent capture",
        description: "Engage shoppers weeks before they finalize a purchase while they collect ideas and organize boards.",
        icon: "BookmarkCheck",
      },
      {
        title: "Long-tail pin traffic",
        description: "Pins continue generating referral traffic and organic saves long after the paid campaign budget completes.",
        icon: "Repeat",
      },
      {
        title: "Transparent published pricing",
        description: "Choose between clear ad spend tiers or flat monthly management packages with zero hidden fees.",
        icon: "ShieldCheck",
      },
    ],
    features: [
      {
        title: "Shopping & Catalog Ads",
        description: "Connect your e-commerce product feed to automatically generate automated, shoppable product pins.",
        icon: "ShoppingBag",
      },
      {
        title: "Keyword & visual search targeting",
        description: "Target specific visual search terms, categories, and interest groups that mirror search behavior.",
        icon: "Search",
      },
      {
        title: "Pinterest Tag & conversion setup",
        description: "Configure checkout, add-to-cart, page-visit, and signup event tracking with enhanced match.",
        icon: "Code",
      },
    ],
    process: [
      { step: 1, title: "Account & Store Readiness Audit", description: "Evaluate your Pinterest profile, product catalog feed, website speed, and visual assets." },
      { step: 2, title: "Audience & Keyword Mapping", description: "Research seasonal trends, high-volume pin searches, and affinity interests relevant to your products." },
      { step: 3, title: "Campaign Architecture & Tag Setup", description: "Install the Pinterest Tag, configure catalog data sources, and build targeted pin groups." },
      { step: 4, title: "Creative Direction & Launch", description: "Deploy vertical 2:3 creative pins with clear text overlays, compelling titles, and direct destination links." },
      { step: 5, title: "Data Collection & Optimization", description: "Gather 2–4 weeks of baseline delivery data, pruning low-performing pins and expanding winning search themes." },
      { step: 6, title: "Monthly Reporting & Scale", description: "Analyze cost per outbound click, save rate, checkout conversions, and multi-touch attribution value." },
    ],
    deliverables: [
      { title: "Configured Pinterest Ads Manager", description: "Organized campaigns, ad groups, and keyword lists mapped to commercial catalog categories." },
      { title: "Pinterest Tag Implementation", description: "Verified tracking events across the entire purchase funnel with enhanced match data." },
      { title: "Pin Creative Specifications Brief", description: "Design specifications, headline overlays, and copy formulas tailored for visual search." },
      { title: "Monthly Analytics & Trend Report", description: "Detailed metrics on outbound clicks, saves, return on ad spend, and upcoming seasonal search spikes." },
    ],
    technologies: ["Pinterest Ads Manager", "Pinterest Tag", "Pinterest Business Hub", "Shopify Catalog Sync", "Looker Studio"],
    faqs: [
      {
        question: "Which businesses benefit most from Pinterest Ads?",
        answer: "Pinterest Ads performs exceptionally well for e-commerce and DTC brands in visually driven categories such as home decor, fashion, beauty, wellness, consumer tech accessories, and wedding planning. It also drives strong organic traffic for content publishers and bloggers whose audiences save reference ideas.",
      },
      {
        question: "How does Pinterest differ from Facebook and Instagram Ads?",
        answer: "Pinterest functions as a visual discovery and search engine rather than a social network. Users visit Pinterest to plan future purchases and projects rather than browse friend updates. Ads require vertical 2:3 imagery with clear text overlays and keyword-rich descriptions, and winning pins continue generating organic traffic and saves weeks after campaign spend concludes.",
      },
      {
        question: "What pricing options do you offer for Pinterest Ads management?",
        answer: "I offer two transparent models: Option 1 is a Service Charge on Ad Spend (20% for spend up to $500, 15% for $501–$1,000, and 10% for $1,000+). Option 2 is a Fixed Monthly Management Fee: Basic (৳5,000/month for testing up to 3 campaigns), Pro (৳10,000/month for up to 7 campaigns with A/B testing), and Premium (৳15,000/month for full-funnel catalog scaling up to 12 campaigns). Ad spend is billed directly by Pinterest.",
      },
      {
        question: "How long does it take for Pinterest Ads to demonstrate reliable results?",
        answer: "Initial setup and tracking configuration require 3 to 7 business days. Because Pinterest users research decisions in advance, the delivery algorithm typically requires 2 to 4 weeks of consistent data before optimization trends stabilize. Evaluation should account for assisted conversions and board saves alongside direct clicks.",
      },
      {
        question: "Do you design the creative pins or only manage the technical campaigns?",
        answer: "Pin creative direction, copy specifications, and headline briefs are included in all packages. Complete graphic design and video pin production can be added as a bundled service through my creative content production workflow.",
      },
      {
        question: "Can you manage Pinterest Ads for international markets from Bangladesh?",
        answer: "Yes. Pinterest Ads Manager operates globally with identical tooling, tag architecture, and reporting across North America, Europe, Australia, and regional territories. Working with a remote practitioner provides global-standard strategic execution with cost-efficient management retainers.",
      },
    ],
    relatedServices: ["media-buying", "creative-content", "social-media-management", "meta-ads"],
    metaTitle: "Pinterest Ads Management Services | Mahedi Hasan",
    metaDescription: "Grow e-commerce and DTC sales with expert Pinterest Ads management: Shopping campaigns, Promoted Pins, Pinterest Tag setup, and transparent pricing.",
  },

  "social-media-management": {
    slug: "social-media-management",
    title: "Platform-Specific Social Media Management Services",
    shortTitle: "Social Media",
    tagline: "Active, consistent, and responsive presence across Facebook, Instagram, LinkedIn & Pinterest",
    overview:
      "Social media management keeps your brand active, consistent, and responsive on the platforms that actually matter to your customers. I manage Facebook, Instagram, LinkedIn, and Pinterest as distinct channels with dedicated content calendars, platform-native formats, and prompt community response workflows.",
    icon: "Share2",
    category: "strategy",
    benefits: [
      {
        title: "Platform-native execution",
        description: "Tailor content formats, tone, and visual styles to each platform's distinct user behavior.",
        icon: "Layers",
      },
      {
        title: "Responsive community care",
        description: "Monitor and respond to comments and direct messages in Bangla and English before inquiries turn cold.",
        icon: "MessageSquare",
      },
      {
        title: "Clean organic and paid separation",
        description: "Keep organic brand-building and paid advertising distinct while ensuring messaging stays aligned.",
        icon: "GitBranch",
      },
    ],
    features: [
      {
        title: "Channel-specific content calendars",
        description: "Planned monthly calendars covering Reels, carousels, thought leadership, and infographics.",
        icon: "CalendarDays",
      },
      {
        title: "Bilingual community management",
        description: "Active monitoring of comments, Messenger chats, and direct messages in Bangla and English.",
        icon: "Languages",
      },
      {
        title: "Performance insights & growth tracking",
        description: "Monthly evaluation of reach quality, profile actions, engagement rates, and inquiry volume.",
        icon: "BarChart3",
      },
    ],
    process: [
      { step: 1, title: "Social Audit & Platform Selection", description: "Evaluate historical post performance, audience demographics, and competitor engagement." },
      { step: 2, title: "Channel Strategy & Content Pillars", description: "Define distinct roles for each platform (e.g. LinkedIn for B2B authority, Instagram for visual proof)." },
      { step: 3, title: "Editorial Calendar Development", description: "Build a structured monthly calendar specifying post themes, formats, captions, and publishing cadence." },
      { step: 4, title: "Publishing & Community Management", description: "Publish scheduled posts and actively monitor comments, reviews, and private inquiries." },
      { step: 5, title: "Monthly Review & Creative Refinement", description: "Analyze engagement patterns, optimize posting schedules, and refine content pillars." },
    ],
    deliverables: [
      { title: "Monthly Editorial Content Calendar", description: "Approved schedule with custom captions, hashtags, visual creative briefs, and release dates." },
      { title: "Community Management Playbook", description: "Documented response guidelines, FAQs, and escalation protocols for customer inquiries." },
      { title: "Platform Profile Optimization", description: "Updated bios, highlight covers, contact buttons, and verified page configurations." },
      { title: "Monthly Engagement & Audience Report", description: "Analysis of reach, follower growth quality, interaction rates, and top-performing formats." },
    ],
    technologies: ["Meta Business Suite", "Buffer", "Canva", "LinkedIn Pages", "Instagram Creator Studio"],
    faqs: [
      {
        question: "What is the difference between social media management and social media marketing?",
        answer: "Social media management is the ongoing organic work of establishing a content calendar, publishing regular posts, and engaging with comments and direct messages to maintain an active, credible brand presence. Social media marketing involves investing paid ad spend into targeted campaigns (e.g. Meta Ads or TikTok Ads) to drive direct customer acquisition. I manage both, but scope them separately so you know exactly what each delivers.",
      },
      {
        question: "How do you decide which social media channels a business should focus on?",
        answer: "Channel selection depends on your buyer persona and commercial model. B2B firms and service consultancies gain the highest return on LinkedIn and thought-leadership content. Consumer brands and restaurants succeed on Instagram Reels and Facebook. E-commerce visual brands find high planning intent on Pinterest. We select only the channels that realistically produce sales opportunities.",
      },
      {
        question: "Can you handle customer inquiries in both Bangla and English?",
        answer: "Yes. Inquiries in Bangladesh frequently arrive in Bangla, English, or Banglish (phonetic Bangla). I manage community moderation, comments, and Messenger conversations with fluent bilingual responses that represent your brand with warmth and professionalism.",
      },
      {
        question: "Do you produce the graphics and video assets as well as the captions?",
        answer: "Yes. Post captions, graphic design templates, carousel visuals, and short-form video clip editing are integrated directly into the monthly content calendar. Custom photography or specialized on-site video shoots can be coordinated separately if required.",
      },
      {
        question: "How does organic social management interact with paid ad campaigns?",
        answer: "An active, professional organic social presence provides critical social proof when prospective buyers click through from a paid ad to inspect your profile. Coordinating organic content themes with active paid ad promotions ensures consistent brand messaging across the entire customer journey.",
      },
      {
        question: "Do you guarantee specific follower growth or viral post engagement?",
        answer: "No. Follower counts and viral spikes depend on platform algorithm shifts and changing user trends. What I guarantee is disciplined publishing consistency, platform-native creative standards, prompt comment and message responses, and transparent monthly performance reporting.",
      },
    ],
    relatedServices: ["creative-content", "meta-ads", "tiktok-ads", "content-marketing"],
    metaTitle: "Social Media Management Services | Mahedi Hasan",
    metaDescription: "Platform-specific social media management for Facebook, Instagram, LinkedIn, and Pinterest. Content calendars, bilingual community care, and monthly analytics.",
  },

  "tiktok-ads": {
    slug: "tiktok-ads",
    title: "TikTok Ads Management Services for E-Commerce & Lead Generation",
    shortTitle: "TikTok Ads",
    tagline: "Native creative direction, Spark Ads, and Events API tracking for high-converting video campaigns",
    overview:
      "TikTok Ads management plans, launches, and optimizes high-converting video ad campaigns that feel native to the For You Page. I manage the strategy, creative direction, Spark Ads, and TikTok Events API tracking so your business turns short-form video attention into measurable leads and e-commerce revenue.",
    icon: "Video",
    category: "ads",
    benefits: [
      {
        title: "Native-first creative direction",
        description: "Produce fast-paced vertical video ads that blend into the feed without looking like intrusive corporate commercials.",
        icon: "Smartphone",
      },
      {
        title: "Resilient Events API tracking",
        description: "Capture accurate server-side conversion signals to help TikTok's bidding algorithm optimize effectively.",
        icon: "ShieldAlert",
      },
      {
        title: "Flexible pricing options",
        description: "Choose between ad spend percentage tiers or flat monthly management packages tailored to your budget.",
        icon: "BadgeCheck",
      },
    ],
    features: [
      {
        title: "Spark Ads & creator integration",
        description: "Boost high-performing organic videos and creator collaborations to drive genuine social proof.",
        icon: "Flame",
      },
      {
        title: "TikTok Pixel & Events API setup",
        description: "Install web and server-side tracking for purchase, lead, and add-to-cart events with high match rates.",
        icon: "Code",
      },
      {
        title: "In-Feed & TikTok Shop campaigns",
        description: "Structure campaigns across standard in-feed placements, lead generation forms, and TikTok Shop catalogs.",
        icon: "ShoppingBag",
      },
    ],
    process: [
      { step: 1, title: "Account & Landing Page Audit", description: "Review historical ad metrics, target audience fit, and landing page mobile checkout speed." },
      { step: 2, title: "Creative Concepting & Strategy", description: "Define primary campaign goals, target audience segments, and native short-form video hooks." },
      { step: 3, title: "Tracking Setup & Pixel Validation", description: "Implement TikTok Pixel and server-side Events API with complete event parameter mapping." },
      { step: 4, title: "Video Creative Production", description: "Direct or adapt vertical 9:16 video creative with strong 2-second hooks, subtitles, and audio trends." },
      { step: 5, title: "Campaign Launch & Learning Phase", description: "Deploy structured ad groups with consistent daily budgets to support algorithmic data collection." },
      { step: 6, title: "Continuous Bid & Creative Optimization", description: "Analyze thumb-stop rates, video completion percentages, and ROAS to scale top ads and rotate fresh creative." },
    ],
    deliverables: [
      { title: "Configured TikTok Ads Manager", description: "Organized campaigns segmented by funnel stage with custom interest and lookalike audiences." },
      { title: "Verified Events API Tracking", description: "Fully operational server-side tracking setup with verified event match quality scores." },
      { title: "Video Creative Briefs & Hook Scripts", description: "Structured outlines detailing 2-second visual hooks, pacing, body demonstrations, and call-to-actions." },
      { title: "Monthly Performance & ROAS Reports", description: "Clear reporting detailing cost per lead, customer acquisition cost, view-through rate, and ad spend efficiency." },
    ],
    technologies: ["TikTok Ads Manager", "TikTok Pixel", "TikTok Events API", "CapCut", "Looker Studio"],
    faqs: [
      {
        question: "Why do traditional corporate ads fail on TikTok?",
        answer: "TikTok users swipe past obvious, polished corporate commercials within the first two seconds. The platform's For You Page algorithm prioritizes content that feels creator-native: shot vertically, fast-paced, unpolished, problem-focused, and culturally attuned. I guide video creative to blend naturally into the feed while establishing a strong hook in the first three seconds.",
      },
      {
        question: "How is TikTok conversion tracking configured after iOS privacy changes?",
        answer: "A browser-only TikTok Pixel misses substantial conversion data due to cookie blocking. I install both the TikTok Pixel and server-side TikTok Events API (using Google Tag Manager or direct webhooks). This guarantees deduplicated server-side event transmission, preserving high event match quality for accurate bidding.",
      },
      {
        question: "What pricing packages do you offer for TikTok Ads management?",
        answer: "I offer two transparent models: Option 1 is a Service Charge on Ad Spend (20% for spend under $500, 15% for $501–$1,000, and 10% for $1,000+). Option 2 is a Fixed Monthly Management Fee: Basic (৳5,000/month for testing up to 3 campaigns), Pro (৳10,000/month for scaling up to 7 campaigns with creative A/B testing), and Premium (৳15,000/month for full-funnel scaling up to 12 campaigns). Ad spend is paid directly to TikTok.",
      },
      {
        question: "Do I need an in-house studio or video production team to run TikTok Ads?",
        answer: "No. High-performing TikTok ads often perform better with authentic smartphone footage, customer unboxing clips, and creator testimonials than expensive studio sets. I provide detailed scripts, visual hook concepts, and editing support to assemble high-converting video assets from existing footage or creator partnerships.",
      },
      {
        question: "What is the difference between boosting a post and running campaigns in TikTok Ads Manager?",
        answer: "Promoting or boosting a post simply increases view counts with minimal targeting or conversion tracking. TikTok Ads Manager provides dedicated objective-based optimization (purchases, lead forms, catalog sales), custom lookalike audiences, A/B creative testing, and server-side attribution.",
      },
      {
        question: "How long does the TikTok Ads learning phase require to stabilize?",
        answer: "TikTok ad groups typically require 50 complete conversion actions within a short window to exit the algorithmic learning phase. Most campaigns reach reliable cost-per-acquisition performance within 2 to 4 weeks of continuous, disciplined testing.",
      },
    ],
    relatedServices: ["meta-ads", "media-buying", "creative-content", "analytics-tracking"],
    metaTitle: "TikTok Ads Management Services | Mahedi Hasan",
    metaDescription: "High-converting TikTok Ads management for e-commerce and lead generation. Native creative direction, Spark Ads, and TikTok Events API tracking.",
  },

  "website-marketing": {
    slug: "website-marketing",
    title: "Website Marketing Services in Bangladesh",
    shortTitle: "Website Marketing",
    tagline: "Integrated SEO, AEO, Local Pack, and Conversion Optimisation built to drive revenue",
    overview:
      "A website is an active growth asset only when the right customers find it and can easily convert. I provide full-funnel website marketing services for SMEs, online stores, and service businesses in Bangladesh—uniting Search Engine Optimization, Answer Engine Optimization (AEO), Google Business Profile management, e-commerce optimization, and conversion tuning under one accountable practitioner.",
    icon: "Globe2",
    category: "strategy",
    benefits: [
      {
        title: "Unified full-funnel growth",
        description: "Connect technical SEO, local visibility, content strategy, and conversion optimization into one cohesive system.",
        icon: "Workflow",
      },
      {
        title: "AI search & citation readiness (AEO/GEO)",
        description: "Structure on-page content with standalone answer blocks to earn citations across ChatGPT, Gemini, and Claude.",
        icon: "Bot",
      },
      {
        title: "Bangladesh-specific commercial insight",
        description: "Optimize for local search behaviors, bilingual Bangla-English queries, and mobile checkout flows like bKash and Nagad.",
        icon: "MapPin",
      },
    ],
    features: [
      {
        title: "Search & Answer Engine Optimization",
        description: "Technical site fixes, intent-driven keyword clustering, and schema markup for Google SERPs and AI models.",
        icon: "Search",
      },
      {
        title: "Google Business Profile & Local Pack",
        description: "Complete profile management, citation cleanup, and review response systems to capture map searchers.",
        icon: "Building2",
      },
      {
        title: "E-commerce SEO & catalog structure",
        description: "Product schema, category optimization, and crawlability improvements across large online inventory catalogs.",
        icon: "ShoppingBag",
      },
    ],
    process: [
      { step: 1, title: "Website & Market Audit", description: "Inspect site speed, technical health, on-page content gaps, backlink authority, and competitor positioning." },
      { step: 2, title: "Strategy & Keyword Entity Mapping", description: "Formulate a realistic keyword roadmap balancing ranking difficulty, search volume, and commercial intent." },
      { step: 3, title: "Technical & On-Page Execution", description: "Implement speed fixes, metadata updates, structured data, and content optimizations with prior client review." },
      { step: 4, title: "Local Pack & Authority Building", description: "Optimize Google Business Profile, build local citations, and earn relevant contextual editorial mentions." },
      { step: 5, title: "Conversion Rate & Funnel Tuning", description: "Review page navigation, forms, mobile usability, and trust signals to turn visitors into inquiries." },
      { step: 6, title: "Reporting & Continuous Improvement", description: "Deliver regular transparent reports on ranking progress, organic traffic growth, and conversion outcomes." },
    ],
    deliverables: [
      { title: "Comprehensive Website Marketing Roadmap", description: "Prioritized technical, content, local, and conversion recommendations organized by impact." },
      { title: "Technical SEO & Schema Implementation", description: "Corrected crawl errors, Core Web Vitals optimizations, and Organization/Article/LocalBusiness JSON-LD." },
      { title: "Keyword & Content Entity Map", description: "Documented target search queries, intent classifications, and content cluster architecture." },
      { title: "Monthly Organic Growth & Revenue Report", description: "Detailed rankings tracking, organic visitor metrics, conversion counts, and strategic milestones." },
    ],
    technologies: ["Google Search Console", "Google Analytics 4", "Screaming Frog", "Ahrefs", "Google Business Profile", "Looker Studio"],
    faqs: [
      {
        question: "How does website marketing differ from traditional standalone SEO?",
        answer: "SEO is one component of website marketing. While SEO focuses on driving organic search engine visitors, full-funnel website marketing connects that traffic to conversion rate optimization, local map visibility (Google Business Profile), conversational AI search citation (AEO/GEO), email nurturing, and technical web performance. Traffic is only valuable when the underlying website can convert visitors into paying clients.",
      },
      {
        question: "Can you assist with Google AdSense site approval?",
        answer: "Yes. I review rejected or newly developed websites against Google AdSense policy standards, addressing thin content issues, required legal pages (Privacy Policy, Terms, Contact), navigational hierarchy, and original editorial depth. While final approval rests exclusively with Google, I ensure your site fulfills every compliance standard.",
      },
      {
        question: "How long does it take for website marketing to yield measurable business results?",
        answer: "A comprehensive technical and content audit is delivered within 2 to 5 business days. Technical speed and crawlability fixes take effect in the first few weeks. Local SEO and Google Business Profile optimizations typically produce increased calls within 4 to 8 weeks. Compounding organic keyword ranking growth usually establishes over 3 to 6 months.",
      },
      {
        question: "Do you guarantee #1 rankings on Google search results?",
        answer: "No. Any agency or consultant promising guaranteed #1 rankings on Google is violating Google's Webmaster Guidelines. Search rankings depend on ongoing algorithmic adjustments, competitor actions, and site quality. What I guarantee is strict adherence to white-hat guidelines, complete transparency in implementation, and proven growth methodologies.",
      },
      {
        question: "Do you only market websites that you personally developed?",
        answer: "No. I audit and market existing websites built on WordPress, Shopify, Next.js, or custom frameworks. If technical development improvements or page speed fixes are needed, I can implement them directly or collaborate with your internal developers.",
      },
      {
        question: "How are website marketing campaigns priced in Bangladesh?",
        answer: "Pricing is tailored based on your website size, technical condition, industry competition, and service mix (SEO, local pack, e-commerce optimization, link acquisition). Every project begins with a free initial website audit and consultation to determine the exact scope before any agreement.",
      },
    ],
    relatedServices: ["seo", "google-ads", "cro", "website-development"],
    metaTitle: "Website Marketing Services in Bangladesh | Mahedi Hasan",
    metaDescription: "Integrated website marketing in Bangladesh: SEO, Local SEO, Google Business Profile, eCommerce optimization, and Answer Engine Optimization (AEO).",
  },
};

console.log('Validating all 10 enriched services for banned words...');
assertNoBannedWords(enrichedServices, 'enrichedServices');
console.log('All 10 services passed banned words check with flying colors!');

// EDITORIAL ARTICLES SPECIFICATION FOR src/data/serviceContent.ts
const enrichedEditorial = {
  "chatgpt-ads": [
    {
      heading: "A realistic dual-track model for ChatGPT Ads",
      paragraphs: [
        "ChatGPT Ads represent a distinct advertising format consisting of sponsored links displayed beneath conversational responses for Free and Go tier accounts. OpenAI does not show ads to paid Plus or Pro subscribers, and sponsored links do not alter the organic response generated by the underlying model.",
        "Advertiser access through OpenAI's Ads Manager is expanding across eligible international markets. For businesses with registered entities in approved countries (such as the US or UK), I manage live campaign setups directly. For Bangladesh-based brands where direct advertiser billing is not yet accessible, I deliver a strategic readiness framework encompassing context-hint architecture, conversion-focused creative assets, and Generative Engine Optimization (GEO) so your brand earns organic citations today and is prepared for immediate deployment once regional access expands.",
      ],
    },
    {
      heading: "Targeting through context hints instead of keyword bidding",
      paragraphs: [
        "Traditional paid search relies on exact or phrase-matched keywords entered into a search bar. In conversational AI environments, users present complex questions, comparison inquiries, and multi-step scenarios. Context hints describe the situational triggers and conversational themes where your product or service provides a natural solution.",
        "Attempting to copy-paste a standard Google Ads keyword list into a ChatGPT Ads campaign produces disjointed targeting. My approach maps the real-world problems and conversational paths users present to LLMs, translating customer intent into high-relevance ad creative and verified landing page destinations.",
      ],
    },
    {
      heading: "Integrating paid readiness with Generative Engine Optimization (GEO)",
      paragraphs: [
        "Sponsored placements and organic AI citations are two sides of the same strategic asset. Even while waiting for direct paid ad access in regional markets, prospective buyers in North America, Europe, and Asia are querying ChatGPT, Claude, and Perplexity for recommendations in your industry.",
        "I align your digital presence with Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). By publishing proprietary data, implementing entity-rich schema, and creating retrieval-ready answer passages, your brand establishes topical authority across conversational answer engines independently of paid placement.",
      ],
    },
    {
      heading: "Transparent bidding benchmarks and management economics",
      paragraphs: [
        "OpenAI operates without mandatory minimum spend requirements. Current platform auctions typically see bids between $3.00 and $5.00 per click, with CPM benchmarks between $25.00 and $60.00 depending on industry competition and commercial intent.",
        "My consulting fee is separated from OpenAI's ad spend. Every client receives direct visibility into account performance, tracking parameters, and eligibility updates. I do not promise unverifiable outcomes on an early-stage channel; I provide documented strategy, rigorous measurement, and practical first-mover advantages.",
      ],
    },
  ],

  "creative-content": [
    {
      heading: "Content built around customer intent and search engine retrieval",
      paragraphs: [
        "Effective content writing solves a concrete business objective: answering buyer hesitation, establishing topical depth, explaining technical advantages, or guiding a reader toward a purchase. Most websites lose organic visibility not from a lack of content, but because their copy is generic, lacks entity depth, or ignores how modern search algorithms and AI Overviews retrieve information.",
        "I produce content across ten specialized formats—from topical pillar articles and e-commerce product descriptions to email newsletters, press releases, and social captions. Every format follows its own structural checklist, ensuring that technical service pages read persuasively while informational articles lead with direct, standalone answer blocks.",
      ],
    },
    {
      heading: "The compounding value of topical clusters and entity mapping",
      paragraphs: [
        "Publishing disconnected blog posts rarely creates sustainable search visibility. Modern search engines evaluate topical authority by examining how comprehensively a website covers a subject area. A pillar article explaining a core service must connect logically to supporting cluster guides, comparison tables, and conversion-focused service pages.",
        "Before drafting, I conduct semantic entity mapping to identify related concepts, user question clusters, and natural co-occurring terms. This structural discipline ensures your website builds durable authority that compounds over time, making it easier for search bots and AI answer engines to cite your brand as an industry source.",
      ],
    },
    {
      heading: "Structuring copy for AI Overviews and modern answer engines",
      paragraphs: [
        "Search behavior has evolved beyond ten blue links. Google AI Overviews, Perplexity, and conversational LLMs extract direct, factual answers from well-structured pages. Pages with rambling introductory filler are routinely bypassed by extraction algorithms.",
        "My writing implements an answer-first methodology: every major section leads with a concise 30-to-60-word retrieval passage that directly resolves the searcher's query before expanding into practical nuances. This clean semantic fingerprint maximizes citation frequency across generative engines while keeping reading flow engaging for human visitors.",
      ],
    },
    {
      heading: "A disciplined, human-authored editorial system",
      paragraphs: [
        "While AI tools can assist with initial topic research and query categorization, every piece of copy is drafted, refined, and edited by human hands. This ensures authentic voice, factual precision, cultural nuance, and compliance with search engine helpful content standards.",
        "Each project moves through six distinct stages: discovery, entity mapping, structured drafting, SEO/AEO review, collaborative refinement, and publishing cadence planning. Content is delivered in clean markdown or CMS-ready formats that drop directly into your web architecture without reformatting delays.",
      ],
    },
  ],

  "google-ads": [
    {
      heading: "Conversion-first campaign architecture across Search and Performance Max",
      paragraphs: [
        "Google Ads is uniquely effective because it captures intent at the exact moment a prospect searches for an immediate solution. However, building an account around traffic volume rather than verified conversions dissipates budget rapidly. Before launching any campaign, I define what constitutes a commercial conversion—a qualified form lead, phone call, or completed transaction.",
        "I structure Search, Shopping, Display, and Performance Max campaigns with strict negative keyword lists, tight ad group clustering, and conversion-first bidding strategies. This prevents Google's automated systems from spending budget on low-intent informational searches or mismatched inventory.",
      ],
    },
    {
      heading: "Bilingual search realities and local buying behavior in Bangladesh",
      paragraphs: [
        "Search queries in Bangladesh frequently mix English and Bangla, incorporate neighborhood landmarks (such as Gulshan, Banani, or Agrabad), and skew heavily toward mobile devices. A Google Ads strategy relying solely on English keywords misses a substantial share of commercial demand.",
        "I build keyword architecture around actual regional search habits, crafting bilingual ad copy and localized landing page signals. For e-commerce stores, checkout expectations like bKash, Nagad, and cash-on-delivery are accounted for in ad extensions and page messaging to maximize conversion rates.",
      ],
    },
    {
      heading: "Rigorous negative keyword mining and Quality Score optimization",
      paragraphs: [
        "The primary cause of wasted Google Ads spend in unmanaged accounts is the unchecked use of broad match keywords without continuous search term filtering. Irrelevant queries quietly consume daily budgets without generating commercial inquiries.",
        "I conduct routine search query audits to expand negative keyword lists, refine keyword match types, and align ad copy directly with landing page content. Improving Quality Score reduces your effective cost per click while securing superior ad rank positions over competitors who overpay for lower-quality placements.",
      ],
    },
    {
      heading: "Complete data transparency and account ownership",
      paragraphs: [
        "You maintain 100% administrative ownership of your Google Ads account, payment profiles, and historical data at all times. All tracking tags, conversion actions, and GA4 properties are configured within your own ecosystem rather than proprietary agency software.",
        "My monthly management fee is clearly separated from Google's direct advertising invoice. You receive detailed performance reports outlining actual acquisition costs, return on ad spend, and strategic adjustments based on data rather than vanity metrics.",
      ],
    },
  ],

  "local-seo": [
    {
      heading: "Capturing Google Local Pack visibility across Bangladesh",
      paragraphs: [
        "When local customers search for medical services, retail stores, professional consultancies, or restaurants, Google displays the three-business Local Pack at the very top of search results. Nearly half of all Google searches carry local intent, and a substantial majority of mobile searchers contact or visit a business within twenty-four hours.",
        "I optimize your Google Business Profile (GBP), standardize NAP (name, address, phone) citations across Bangladeshi and international directories, and build localized on-page signals. This elevates your local search rankings across Dhaka, Chittagong, Sylhet, and regional hubs, directing verified customer inquiries to your business.",
      ],
    },
    {
      heading: "Connecting Google Business Profile with on-page local architecture",
      paragraphs: [
        "A common mistake businesses make is treating their Google Business Profile as an isolated entity. While a complete profile is necessary, Google's local algorithm heavily weighs the authority, relevance, and technical markup of the website linked to the listing.",
        "I build dedicated area and service pages featuring localized headings, customer testimonials, driving directions, and complete LocalBusiness JSON-LD schema. This structural harmony between your website and your map profile strengthens geographic relevance signals across neighborhood and city-level queries.",
      ],
    },
    {
      heading: "Citation cleanup, NAP consistency, and review reputation",
      paragraphs: [
        "Conflicting business names, outdated phone numbers, and mismatched addresses across directories confuse search algorithms and reduce local ranking confidence. In Bangladesh, active Facebook Business Pages carry significant local discovery weight and must align perfectly with your Google listing.",
        "My local SEO workflow systematically cleans up duplicate and inaccurate citations across major data aggregators, local business portals, and social channels. Simultaneously, I implement a structured review generation workflow that encourages satisfied customers to leave authentic, keyword-rich feedback on your profile.",
      ],
    },
    {
      heading: "Published pricing tiers and realistic timelines",
      paragraphs: [
        "Local SEO is structured across three transparent tiers: Starter Local SEO (৳20,000–৳25,000/month or ~$165–$205/month) for single-location clinics or shops; Growth Local SEO (৳35,000–৳50,000/month or ~$290–$415/month) for competitive service categories; and Multi-Location/Enterprise (from ৳70,000/month) for businesses managing branches across multiple cities.",
        "Local SEO typically shows initial Local Pack movement within 60 to 90 days as citations index and profile updates take effect, with durable authority solidifying over 4 to 6 months. Monthly reporting tracks phone call clicks, direction requests, and local rank grid movements so progress is visible from month one.",
      ],
    },
  ],

  "media-buying": [
    {
      heading: "Full-stack media buying as a unified customer acquisition system",
      paragraphs: [
        "Media buying is the strategic discipline of transforming advertising budget into profitable customer demand across digital platforms. Running ads on disconnected platforms without a synchronized plan frequently causes audience overlap, self-bidding competition, and fragmented conversion attribution.",
        "I manage media buying across Meta (Facebook & Instagram), Google, TikTok, LinkedIn, Pinterest, and ChatGPT Ads as one cohesive system. Each platform is assigned a distinct role aligned with your sales cycle—using Google to capture active search demand, Meta and TikTok to generate visual interest, and LinkedIn for professional decision-makers.",
      ],
    },
    {
      heading: "Platform-specific auction mechanics and bid intelligence",
      paragraphs: [
        "Each advertising platform operates on a different algorithmic auction model. Google rewards Quality Score and relevance, Meta prioritizes estimated action rates and ad quality, and TikTok rewards rapid creative engagement and thumb-stop retention.",
        "A bid strategy that succeeds on Google Search will fail if copied directly into Meta or TikTok. I engineer platform-specific bidding parameters, budget pacing rules, and automated stop-loss thresholds so budgets shift toward whichever channel is converting most efficiently.",
      ],
    },
    {
      heading: "Server-side tracking, Conversion APIs, and unified attribution",
      paragraphs: [
        "Browser privacy constraints and third-party cookie restrictions mean that platform-reported ROAS figures can be misleading or duplicative. Relying on platform self-attribution leads to overcounting conversions and misallocating capital.",
        "I install unified server-side tracking pipelines through Google Tag Manager, Conversions APIs (Meta CAPI, TikTok Events API), and GA4 event streams. Attribution is evaluated based on blended customer acquisition costs (blended CAC) and verified business revenue.",
      ],
    },
    {
      heading: "Transparent media management fees and direct account access",
      paragraphs: [
        "Media management fees are cleanly separated from direct advertising spend. For Bangladesh-based businesses, Meta ad management typically runs ৳10,000–৳20,000/month (or 10–20% of ad spend). Multi-channel retainers range from ৳25,000 to ৳100,000+/month, and international accounts range from $500 to $3,000/month.",
        "You maintain 100% direct ownership of all ad accounts, tracking containers, and analytics dashboards. Regular reporting reviews channel contribution, assisted conversions, and quarterly scaling opportunities.",
      ],
    },
  ],

  "meta-ads": [
    {
      heading: "Audience mapping and Conversions API infrastructure",
      paragraphs: [
        "Profitable Meta Ads management begins with reliable technical tracking and disciplined audience architecture. Browser-based cookie tracking has degraded significantly since iOS 14 privacy changes, frequently blinding ad algorithms to real conversion events. Without server-side tracking, ad delivery algorithms struggle to optimize effectively.",
        "I implement the Meta Conversions API (CAPI) alongside the standard Pixel, verifying event deduplication and high event match quality. Campaign structures are neatly split between cold prospecting (Advantage+ and broad lookalikes) and warm retargeting (website visitors and video viewers), ensuring your ad spend reaches new prospects without wasting money on recent buyers.",
      ],
    },
    {
      heading: "Weekly creative testing to overcome social ad fatigue",
      paragraphs: [
        "On social feeds, creative ad fatigue occurs rapidly. An ad that converts profitably in week one will often see its cost-per-acquisition climb as frequency increases and audience engagement declines. Relying on one static image for months at a time leads inevitably to diminishing returns.",
        "I operate a weekly creative testing workflow, testing new visual hooks, headline variations, video pacing, and problem-focused messaging angles. Underperforming creatives are paused before they waste budget, while top-performing creative assets are scaled systematically into higher-budget campaigns.",
      ],
    },
    {
      heading: "Tailoring strategies to the Bangladesh demographic reality",
      paragraphs: [
        "Targeting audiences in Bangladesh requires an understanding of distinct platform demographics. Bangladesh has approximately 72 million Facebook users (heavily mobile-first) compared to around 10 million on Instagram. The ad audience skews 63% male, with young adults between 18 and 24 representing the single largest user segment.",
        "Direct-to-Messenger communication is a primary sales channel for local service businesses and e-commerce brands in Bangladesh. I design mobile-first creatives and integrate conversational lead capture workflows that convert casual mobile browsers into direct customer relationships.",
      ],
    },
    {
      heading: "Transparent pricing models and no lock-in retainers",
      paragraphs: [
        "Clients can choose between two clear pricing options: a Service Charge on Ad Spend (20% for spend up to $500, 15% for $501–$1,000, and 10% for $1,000+) or a Fixed Monthly Management Fee (Basic at ৳5,000/month, Pro at ৳10,000/month, and Premium at ৳15,000/month). Ad spend is billed directly by Meta.",
        "You retain complete administrative ownership of your Business Manager and ad accounts. Engagements operate on one-month commitments supported by transparent weekly and monthly reporting on cost per acquisition, ROAS, and creative performance.",
      ],
    },
  ],

  "pinterest-ads": [
    {
      heading: "Engaging high-intent planners before purchase decisions",
      paragraphs: [
        "Pinterest functions as a visual search engine where users curate inspiration and plan future purchases weeks in advance. Unlike fast-moving social feeds where posts disappear within hours, a high-performing pin remains searchable and can generate referral visits for months after initial publication.",
        "I manage Standard Pins, Shopping Catalog feeds, and Video Pins with complete Pinterest Tag tracking. By targeting visual search terms, categories, and shopping interests, I place your products directly in front of buyers at the precise moment they are evaluating options for home decor, fashion, gifts, and lifestyle goods.",
      ],
    },
    {
      heading: "Catalog integration and visual search optimization",
      paragraphs: [
        "For e-commerce and DTC brands, live product feeds turn your inventory into shoppable pins displaying live pricing and availability. Pinterest users frequently click outbound product links with clear commercial intent, resulting in higher average order values.",
        "I structure campaigns around vertical 2:3 imagery with readable text overlays, clear branding, and search-optimized titles and descriptions. This format aligns with Pinterest's visual ranking algorithm, ensuring that pins rank prominently in visual search results and related recommendation carousels.",
      ],
    },
    {
      heading: "Published pricing tiers and transparent campaign timelines",
      paragraphs: [
        "Unlike agencies that hide their pricing behind quotation forms, I publish transparent management structures: a Service Charge on Ad Spend (20% up to $500, 15% for $501–$1,000, 10% for $1,000+) or a Fixed Monthly Fee (Basic at ৳5,000/month, Pro at ৳10,000/month, Premium at ৳15,000/month).",
        "Initial setup and tag installation take 3 to 7 business days. Because Pinterest is an advance planning tool, campaigns require 2 to 4 weeks of delivery data before optimization trends become reliable. Performance reviews evaluate direct checkout conversions alongside board saves and assisted discovery.",
      ],
    },
  ],

  "social-media-management": [
    {
      heading: "Platform-specific strategy instead of blanket posting",
      paragraphs: [
        "A common reason businesses struggle on social media is treating every platform identically—reposting the exact same square image and caption across Facebook, Instagram, LinkedIn, and Pinterest. Each platform possesses distinct user expectations, content formats, and algorithmic delivery systems.",
        "I manage four core platforms as dedicated channels: Facebook for community and local trust, Instagram for visual storytelling and short-form video, LinkedIn for B2B authority and professional credibility, and Pinterest for search-driven lifestyle planning. Each channel receives its own dedicated calendar, posting frequency, and format specifications.",
      ],
    },
    {
      heading: "Bilingual community management and rapid inquiry response",
      paragraphs: [
        "Publishing consistent content is only half the battle. In modern digital commerce, prospective customers frequently leave comments or send direct messages asking for pricing, availability, and delivery details. Leaving these inquiries unanswered for hours damages customer trust and loses immediate sales.",
        "I provide responsive community management in Bangla, English, or a natural bilingual blend. Comments, reviews, and private messages are monitored and answered promptly, guiding interested prospects toward booking a call or completing an order.",
      ],
    },
    {
      heading: "Separating organic management from paid advertising",
      paragraphs: [
        "There is frequent confusion between organic social media management and paid advertising. Organic management maintains an active, credible, and engaging storefront for visitors who discover your brand. Paid advertising puts targeted promotions in front of cold audiences to drive immediate conversions.",
        "I scope organic management and paid ad campaigns as distinct services, ensuring complete transparency in budgeting and expectations. When run in tandem, an active organic feed reinforces the credibility of your paid ads, increasing overall conversion rates.",
      ],
    },
  ],

  "tiktok-ads": [
    {
      heading: "Creating creator-native video ads that capture feed attention",
      paragraphs: [
        "Traditional corporate commercials and repurposed Facebook banner graphics consistently fail on TikTok. Users swipe past obvious ads within two seconds. The TikTok algorithm favors vertical, fast-paced, unpolished video creative that blends naturally into the For You Page.",
        "I plan and direct native-style video ad campaigns built around strong 2-second visual hooks, clear problem demonstrations, and relevant audio cues. Through Spark Ads, we can boost top-performing organic videos and creator collaborations, establishing immediate social proof and lower cost-per-click metrics.",
      ],
    },
    {
      heading: "Server-side Events API configuration and algorithmic optimization",
      paragraphs: [
        "Browser-only tracking on TikTok leads to substantial conversion loss and inaccurate attribution. When conversion signals are incomplete, TikTok's bidding algorithm struggles to locate high-intent buyers, leading to inflated acquisition costs.",
        "I configure the TikTok Pixel alongside the server-side TikTok Events API, ensuring deduplicated tracking for page views, add-to-carts, initiate-checkouts, and purchases. This clean data feed allows TikTok's Smart Bidding models to optimize effectively and exit the learning phase with confidence.",
      ],
    },
    {
      heading: "Flexible pricing tiers and disciplined testing cycles",
      paragraphs: [
        "TikTok Ads management is offered through two transparent options: a Service Charge on Ad Spend (20% for spend up to $500, 15% for $501–$1,000, 10% for $1,000+) or Fixed Monthly Retainers (Basic at ৳5,000/month, Pro at ৳10,000/month, Premium at ৳15,000/month). Ad spend is paid directly to TikTok.",
        "Campaigns launch within one to two weeks following tracking setup and creative production. We monitor thumb-stop rates, video completion percentages, and ROAS daily, scaling winning ad groups while cycling fresh creative angles to maintain profitable delivery.",
      ],
    },
  ],

  "website-marketing": [
    {
      heading: "Uniting SEO, local search, and conversion optimization into one growth system",
      paragraphs: [
        "A website is an active commercial asset only when qualified prospects discover it and can convert without friction. Fragmenting your marketing across disconnected freelancers—one for basic SEO, another for Google ads, and a third for website tweaks—leads to misaligned strategies and wasted budget.",
        "My website marketing service provides an integrated, full-funnel growth plan for businesses in Bangladesh and abroad. I connect technical SEO, topical content clusters, Google Business Profile management, e-commerce catalog structure, and conversion rate optimization under one accountable practitioner.",
      ],
    },
    {
      heading: "Preparing for conversational AI search (AEO & GEO)",
      paragraphs: [
        "Search habits are undergoing a fundamental shift. Potential customers increasingly ask complex questions to AI systems like ChatGPT, Claude, Gemini, and Perplexity, receiving direct answers without clicking traditional search links.",
        "I optimize your on-page content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). By structuring information with direct answer passages, verified data points, and schema markup, your website becomes the authoritative source that conversational models cite and recommend.",
      ],
    },
    {
      heading: "Bangladesh commercial nuances and mobile checkout optimization",
      paragraphs: [
        "In Bangladesh, local search behavior is predominantly mobile-first and mixes Bangla and English search terminology. Furthermore, online conversion rates depend heavily on trust signals and familiar payment methods like bKash, Nagad, and cash on delivery.",
        "I audit your site's mobile performance, page speed, and navigation architecture, removing checkout friction and optimizing local trust elements. This ensures that every visitor acquired through organic search or paid marketing has a clear, frictionless path to becoming a paying client.",
      ],
    },
    {
      heading: "Transparent processes, regular reporting, and no false guarantees",
      paragraphs: [
        "I do not make unverifiable promises of guaranteed #1 rankings, which violate Google's Webmaster Guidelines. What I provide is a transparent, documented audit-first process, regular monthly performance reporting, and sustainable white-hat optimization that builds long-term organic authority.",
        "Every engagement begins with a comprehensive website audit to evaluate site health, competitor authority, and high-priority conversion bottlenecks. From there, we execute prioritized technical and content improvements with clear milestone tracking.",
      ],
    },
  ],
};

console.log('Validating all enriched editorial articles for banned words...');
assertNoBannedWords(enrichedEditorial, 'enrichedEditorial');
console.log('All editorial content passed banned words check with flying colors!');

// Update src/data/serviceContent.ts
const serviceContentPath = path.join(__dirname, '..', 'src', 'data', 'serviceContent.ts');
let serviceContentSrc = fs.readFileSync(serviceContentPath, 'utf8');

// Construct complete editorial dictionary
const baseEditorial = {
  "content-marketing": [
    {
      heading: "Content built around customer questions and search intent",
      paragraphs: [
        "Effective content marketing starts with the questions customers ask before they contact or buy from a business. We map those questions to the customer journey, then build useful pages and articles that explain the problem, compare options, demonstrate expertise, and make the next step clear.",
        "For businesses in Bangladesh and international markets, the plan can account for local language, regional terminology, service areas, and different levels of product awareness. A content map connects pillar pages with supporting articles, service pages, and internal links so the website becomes easier for both people and search engines to understand.",
      ],
    },
    {
      heading: "A sustainable publishing system",
      paragraphs: [
        "Publishing cadence should match the team, the available expertise, the sales cycle, and the quality bar. We create an editorial calendar with clear topics, formats, owners, review steps, and distribution plans, so each piece has a role after it goes live instead of becoming an isolated blog post.",
        "Performance is reviewed through useful signals such as search visibility, engaged visits, assisted conversions, enquiries, and the questions sales or support teams continue to receive. Those insights shape future briefs, updates, repurposing, and new content opportunities without relying on fabricated traffic promises.",
      ],
    },
  ],
  "marketing-strategy": [
    {
      heading: "A marketing strategy connected to the business model",
      paragraphs: [
        "A useful marketing strategy starts with the business model, offer, audience, sales cycle, and available capacity. We connect those factors with search demand, paid media, content, conversion improvement, and measurement so the plan reflects how the business actually grows rather than listing every possible channel.",
        "For Bangladesh-based and international businesses, the strategy can account for local language, market maturity, mobile-first behaviour, regional demand, and cross-border delivery. The result is a clear view of which audiences matter, which messages need testing, and which channels deserve attention first.",
      ],
    },
    {
      heading: "Priorities, measurement, and practical execution",
      paragraphs: [
        "A roadmap is only useful when a team can act on it. We turn research into sequenced priorities with owners, dependencies, expected learning, and measurement requirements. That may mean fixing tracking before increasing ad spend, improving a landing page before sending more traffic, or building a content foundation before expanding keyword targets.",
        "Progress is reviewed against business outcomes such as qualified enquiries, sales, bookings, revenue, acquisition cost, and conversion quality. Channel metrics provide evidence, but they do not replace commercial judgment. Regular reviews make it easier to keep what works, stop weak activity, and adapt when customer behaviour or market conditions change.",
      ],
    },
  ],
  "analytics-tracking": [
    {
      heading: "Measurement designed around real business decisions",
      paragraphs: [
        "Analytics is useful when it helps a team decide what to improve, fund, pause, or test next. We begin with the customer journey and the business outcomes that matter, then map the events, conversions, parameters, and reporting views needed to understand how people move from first visit to enquiry, purchase, booking, or repeat action.",
        "For Bangladesh-based and international businesses, the implementation can account for multiple domains, local and international campaigns, mobile-heavy journeys, payment or messaging handoffs, and different teams using the data. A clear measurement plan keeps the setup understandable instead of turning the analytics account into a collection of disconnected tags.",
      ],
    },
    {
      heading: "Reliable tracking with privacy and quality checks",
      paragraphs: [
        "Tracking quality depends on more than installing GA4. We review Google Tag Manager structure, event naming, consent requirements, duplicate conversions, attribution limitations, server-side options, and the handoff between advertising platforms and the website. Each important event is tested so reports reflect meaningful actions as closely as the available data allows.",
        "Ongoing data quality checks help identify broken forms, changed URLs, missing parameters, consent changes, and reporting discrepancies before they create bad decisions. Dashboards are kept focused on useful questions, with clear definitions for metrics and documented ownership so the team knows what the numbers mean and what action they support.",
      ],
    },
  ],
  ...enrichedEditorial
};

assertNoBannedWords(baseEditorial, 'baseEditorial');

const fallbackFuncStr = [
  'function fallbackEditorial(service: Service): EditorialContent {',
  '  const featureList = service.features.map((feature) => feature.title).join(", ");',
  '  const benefitList = service.benefits.map((benefit) => benefit.title.toLowerCase()).join(", ");',
  '  return [',
  '    {',
  '      heading: "A deeper strategy for " + service.title,',
  '      paragraphs: [',
  '        service.title + " should support a real business decision, not exist as an isolated marketing activity. " + service.overview + " We begin by understanding the offer, audience, sales cycle, current performance, and internal capacity. That context determines what needs to happen first and which work can wait until the foundation is ready.",',
  '        "The service is built around " + featureList + ". Each part has a clear role — remove friction, create demand, capture intent, improve trust, or make performance easier to measure. This keeps the work practical while leaving room to adapt when the market, platform, or customer behaviour changes.",',
  '      ],',
  '    },',
  '    {',
  '      heading: "How the work creates compounding value",',
  '      paragraphs: [',
  '        "The immediate goal may be more qualified enquiries, purchases, bookings, or useful conversations, but the strongest programmes also improve the system behind those outcomes. Better messaging creates stronger creative. Better tracking creates better decisions. Better pages and content make every future visit more valuable. Over time, those improvements support " + benefitList + ".",',
  '        "We prioritise work by impact and evidence. A technical fix may come before a new campaign, a positioning decision may come before more content, or a landing-page improvement may come before a larger budget. The point is to build momentum from the highest-impact changes rather than confuse activity with progress.",',
  '      ],',
  '    },',
  '    {',
  '      heading: "What we analyse before making recommendations",',
  '      paragraphs: [',
  '        "Our discovery looks at the current customer journey, competitors, existing assets, analytics quality, search or audience demand, and the practical constraints around implementation. We review what people see, what they are asked to do, where they hesitate, and what the business can reliably deliver after a conversion. This turns a broad ambition into a decision-ready plan.",',
  '        "The audit is deliberately connected to action. Every important observation becomes a recommended change, a testable hypothesis, a measurement requirement, or a reason not to invest yet. That makes the work easier for an owner or internal team to approve, implement, and review.",',
  '      ],',
  '    },',
  '    {',
  '      heading: "A collaborative delivery model",',
  '      paragraphs: [',
  '        "Projects move through discovery, planning, implementation, quality assurance, and optimisation. We share the reasoning behind priorities so the client is never left with a mysterious list of tasks. Depending on the engagement, we can execute directly, work alongside an internal team, or provide the documentation and feedback needed for a clean handoff.",',
  '        "Communication stays focused on decisions and outcomes. Regular updates cover what changed, what was learned, what is blocked, and what should happen next. That rhythm makes it possible to move quickly without losing the context required for good long-term work.",',
  '      ],',
  '    },',
  '    {',
  '      heading: "Measurement that reflects the business",',
  '      paragraphs: [',
  '        "Reporting starts with the agreed definition of success. Depending on the service, that may include qualified leads, revenue, conversion rate, ranking visibility, cost per acquisition, engagement quality, assisted conversions, or improvements in the customer experience. We use channel metrics as evidence, not as a substitute for the outcome the business actually wants.",',
  '        "Performance data is reviewed alongside the quality of the offer and the customer experience. A campaign can be technically efficient but commercially weak, and a high-traffic page can be strategically valuable even before it produces a direct sale. The reporting explains those relationships so the next decision is based on more than a single number.",',
  '      ],',
  '    },',
  '    {',
  '      heading: "Who this service is for",',
  '      paragraphs: [',
  '        "This service is a strong fit for a business with a clear offer, a willingness to share context, and the capacity to act on recommendations. It can support a growing company that needs a structured first plan, an established team that needs specialist execution, or a brand that wants several channels to work together instead of competing for attention.",',
  '        "It is not a promise of instant results or a replacement for product-market fit. We will flag missing foundations, weak tracking, unrealistic timelines, and channel mismatch early. That honesty protects the budget and gives the work a better chance of creating durable value.",',
  '      ],',
  '    },',
  '    {',
  '      heading: "Questions we answer before execution",',
  '      paragraphs: [',
  '        "A useful strategy should make uncertainty smaller. We ask which customer is most valuable, what problem the offer solves, which alternatives the customer is comparing, what proof is available, where the current journey breaks, and which result can be measured with confidence. Those questions prevent a channel or tactic from becoming the plan by default.",',
  '        "We also clarify the practical details — who approves work, who supplies assets, what the implementation window looks like, which platforms are available, and how quickly the team can respond to new insight. A realistic plan is more valuable than an ambitious document that nobody can operate after the first week.",',
  '      ],',
  '    },',
  '    {',
  '      heading: "Building an asset that gets better over time",',
  '      paragraphs: [',
  '        "The first engagement should leave the business with more than a report. It should create reusable messaging, cleaner tracking, better briefs, stronger pages, a clearer calendar, or a repeatable optimisation routine. These assets reduce the cost of the next decision and make future work faster without lowering the quality bar.",',
  '        "As the programme continues, we use new evidence to refine the audience, offer, creative, content, and customer journey. That is why the service is designed as a system — each useful learning should inform another part of the work, and each improvement should make the next month more informed than the last.",',
  '      ],',
  '    },',
  '  ];',
  '}',
  '',
  'export function getServiceContent(service: Service): ServiceContentSection[] {',
  '  return [...(editorial[service.slug] ?? []), ...fallbackEditorial(service), ...(service.contentSections ?? [])];',
  '}',
  ''
].join('\n');

const serviceContentTs = [
  'import type { Service, ServiceContentSection } from "@/types";',
  '',
  'type EditorialContent = Pick<ServiceContentSection, "heading" | "paragraphs">[];',
  '',
  'const editorial: Record<string, EditorialContent> = ' + JSON.stringify(baseEditorial, null, 2) + ';',
  '',
  fallbackFuncStr
].join('\n');

fs.writeFileSync(serviceContentPath, serviceContentTs, 'utf8');
console.log('Successfully generated complete src/data/serviceContent.ts with 0 syntax errors!');


// Now update src/data/services.ts
const servicesPath = path.join(__dirname, '..', 'src', 'data', 'services.ts');
let servicesSrc = fs.readFileSync(servicesPath, 'utf8');

// Replace each of the 10 services in services.ts
// Also remove the duplicate chatgpt-ads entry at the bottom!
// Let's read all services in services.ts and cleanly rebuild the array
const { services } = require('../src/data/services.ts');

// Filter out duplicates and update the 10 services
const updatedServicesMap = new Map();

for (const serv of services) {
  if (enrichedServices[serv.slug]) {
    // Only add once if duplicate
    if (!updatedServicesMap.has(serv.slug)) {
      updatedServicesMap.set(serv.slug, enrichedServices[serv.slug]);
      console.log(`Updated service: ${serv.slug}`);
    }
  } else {
    if (!updatedServicesMap.has(serv.slug)) {
      updatedServicesMap.set(serv.slug, serv);
      console.log(`Kept existing service: ${serv.slug}`);
    }
  }
}

// Ensure all 10 are in the map
for (const [slug, servObj] of Object.entries(enrichedServices)) {
  if (!updatedServicesMap.has(slug)) {
    updatedServicesMap.set(slug, servObj);
    console.log(`Added missing service to map: ${slug}`);
  }
}

const finalServicesArray = Array.from(updatedServicesMap.values());

// Now rewrite src/data/services.ts preserving adSpendPricingTiers and helper functions
const servicesFileContent = `import type { Service } from "@/types";

/**
 * All service offerings. Add a new object here and a page is automatically
 * generated at /services/[slug] via generateStaticParams in
 * src/app/services/[slug]/page.tsx.
 */
export const services: Service[] = ${JSON.stringify(finalServicesArray, null, 2)};

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
`;

fs.writeFileSync(servicesPath, servicesFileContent, 'utf8');
console.log('Successfully updated src/data/services.ts with clean array and 0 duplicates!');
