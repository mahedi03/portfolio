import type { Service } from "@/types";

/**
 * All service offerings. Add a new object here and a page is automatically
 * generated at /services/[slug] via generateStaticParams in
 * src/app/services/[slug]/page.tsx.
 */
// Raw CMS draft — pricing tables in this literal still use the raw `rows`
// shape; src/lib/service-page.ts normalizes them before any component sees a
// Service object.
export const services = [
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
      },
      {
        "question": "What's the difference between a website redesign and a new build?",
        "answer": "A redesign keeps your existing domain and often your content and SEO rankings while rebuilding the design and structure. A new build starts from scratch and makes sense when the current site's foundation, platform, structure, or content isn't worth preserving."
      },
      {
        "question": "Which platform is right for my business: WordPress, Shopify, or custom development?",
        "answer": "It depends on your needs: WordPress suits content-heavy sites needing ongoing control, Shopify suits straightforward e-commerce, and custom development suits businesses with specific performance or integration needs a template can't meet. We recommend based on your actual requirements, not a default platform."
      },
      {
        "question": "Do you provide website maintenance after launch?",
        "answer": "Yes, ongoing updates, security monitoring, and technical fixes are available as a separate maintenance service. This doesn't include content or SEO strategy work, which are handled under our marketing services."
      },
      {
        "question": "How much does a website cost in Bangladesh?",
        "answer": "Cost depends on platform, page count, custom functionality, and whether e-commerce or ongoing maintenance is included. A free consultation gives you a specific quote based on your actual requirements rather than a generic package price."
      },
      {
        "question": "Do you build websites for international clients?",
        "answer": "Yes, alongside Bangladeshi businesses, we work with clients in the US, UK, Australia, and Canada, adjusting for different market expectations and platform preferences as needed."
      },
      {
        "question": "What happens if I need changes after the site is delivered?",
        "answer": "Minor revisions during the build are handled through the review and approval process at each stage. Changes requested after launch fall under either a maintenance plan or a separate scope of work, depending on what's needed.\n\nHave a specific platform or budget in mind? Contact us, and we'll give you a straight answer on what fits."
      }
    ],
    "relatedServices": [
      "seo",
      "technical-seo",
      "cro",
      "website-marketing"
    ],
    "metaTitle": "Website Development Services",
    "metaDescription": "Custom Next.js website development focused on speed, SEO, and conversions. Built for businesses that need a fast, scalable web presence.",
    "heroHook": "Website Design & Development Services in Bangladesh\n\nCustom websites that load fast, look professional, and turn visitors into customers built by one in-house team for businesses across Bangladesh and worldwide. Get a free quote and see what we'd build for you.\n\nGet a Free Website Quote → \n\nWebsite Design & Development for Growing Businesses",
    "offerings": [
      {
        "title": "Website design and development covers everything needed to plan, design, build, and launch a functional website for businesses that need a new site, a platform migration, or a full redesign of an underperforming one. It typically includes UI/UX design, front-end and back-end development, platform setup, content integration, and testing, and is best suited for businesses that want one accountable team rather than separate designers, developers, and platform specialists working in isolation.",
        "description": "Business Website Development A structured, conversion-focused website for service businesses, professional firms, and local companies that need to establish credibility and generate inquiries. Includes homepage, service pages, about/contact pages, and a content structure built around what your customers actually search for, not a generic template with your logo swapped in. Ecommerce Website Development A store built to handle product catalogs, payment processing, and order management on Shopify, WooCommerce, Magento, or custom infrastructure, depending on catalog size and growth plans. For Bangladeshi merchants, this includes reviewing bKash and Nagad checkout compatibility as part of the build, not as an afterthought. Landing Page Development A single-purpose, high-conversion page built for a specific campaign, product launch, or ad traffic source. Stripped of navigation distractions and built around one clear action not a scaled-down version of your main site. WordPress Development Custom WordPress builds and theme development for businesses that want ongoing content control without depending on a developer for every update. Including plugin selection and security hardening, WordPress's flexibility is also why poorly configured sites become common attack targets. Wix Development Wix builds for businesses that want a fast, cost-effective launch with straightforward self-editing afterward. Best suited for smaller sites without complex custom functionality requirements. Magento Development Magento builds for larger product catalogs and businesses with complex inventory, multi-currency, or B2B pricing needs. Not recommended for small catalogs. Magento's overhead outweighs its benefits below a certain scale, and we'll tell you that directly rather than sell you infrastructure you don't need. Webflow Development Visually flexible, code-clean builds for design-forward businesses that want more creative control than WordPress templates typically allow, without needing a fully custom framework. Shopify Development Store builds and theme customization on Shopify's infrastructure are a strong fit for merchants who want reliable uptime and simplified backend management over full custom control. Custom / Next.js Development Fully custom-coded websites and web applications for businesses with specific performance, integration, or scalability needs that pre-built platforms can't accommodate. This is the more expensive, longer-timeline option appropriate when a template genuinely can't do what you need, not as a default recommendation. Website Redesign Rebuilding an existing site that's underperforming outdated design, poor mobile experience, slow load times, or a structure that's stopped matching how the business actually operates. Includes a review of what's worth keeping (rankings, content, backlinks) versus what needs to be rebuilt from scratch. Website Maintenance Ongoing updates, security monitoring, backups, and technical fixes after launch. Not included: content strategy or SEO campaign work, which fall under separate marketing services. Maintenance keeps the site running; it doesn't grow its traffic. UI/UX Design Interface and experience design wireframes, user flow mapping, and visual design are done before or alongside development so the site is planned around how real users navigate, not just how it looks in a mockup.",
        "bullets": []
      }
    ],
    "whyMatters": [
      "A slow or confusing website doesn't just look unprofessional; it actively loses visitors before they see your offer, and that gap widens the longer it's left unaddressed, since competitors with better sites keep capturing the traffic and trust is missing. Mobile performance matters more than most businesses assume: a large share of Bangladeshi traffic is mobile-first, and a site that isn't built for that loses customers before they scroll past the homepage.",
      "A common misunderstanding is treating a website as a one-time project rather than infrastructure that needs occasional updates, security patches, and periodic review as your business changes. Skipping maintenance doesn't save money; it usually costs more later, when a small fix becomes an emergency rebuild."
    ],
    "whyChooseUs": [
      "We work across WordPress, Shopify, Webflow, Magento, Wix, and custom Next.js development, so platform recommendations are based on what fits your business, not on which single platform we're limited to building on. We also serve both Bangladeshi businesses and international clients in the US, UK, Australia, and Canada, which means our process accounts for different market expectations and compliance needs, not a single template applied everywhere."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Typical Range"
      ],
      "rows": [
        [
          "",
          "Landing Page"
        ],
        [
          "",
          "৳XX,XXX – ৳XX,XXX"
        ],
        [
          "",
          "Business Website"
        ],
        [
          "",
          "৳XX,XXX – ৳XX,XXX"
        ],
        [
          "",
          "E-commerce Website"
        ],
        [
          "",
          "৳XX,XXX – ৳XXX,XXX"
        ],
        [
          "",
          "Website Redesign"
        ],
        [
          "",
          "৳XX,XXX – ৳XX,XXX"
        ],
        [
          "",
          "Pricing typically depends on size, complexity, platform, integrations, and timeline. A free consultation is available before any paid commitment, so you know the scope and cost before deciding."
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan builds websites for businesses based in Dhaka and across Bangladesh, as well as for clients worldwide, including the UAE, US, UK, Australia, and Canada. We've delivered projects for clients in 20+ countries across the globe, so businesses in Dhaka working with us benefit from local market familiarity, including bKash and Nagad payment integration for e-commerce builds and bilingual Bangla-English content structuring where relevant, alongside experience meeting international market expectations.\n\nGiven how mobile-heavy Bangladeshi internet usage is, every build we deliver is tested for mobile performance and load speed on typical local connection speeds, not just desktop conditions."
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
      },
      {
        "question": "How long does SEO take to show results?",
        "answer": "Most sites see meaningful movement within three to six months, though an audit and initial technical fixes can be delivered within days. Timelines depend on your industry's competitiveness and your site's starting condition."
      },
      {
        "question": "What's the difference between SEO and AI search optimization?",
        "answer": "Traditional SEO targets Google's organic results. AI search optimization structures content so tools like ChatGPT and Perplexity can cite it directly in generated answers, increasingly important as more queries get answered without a click at all."
      },
      {
        "question": "Can you help recover from a Google penalty?",
        "answer": "Yes, penalty recovery starts with diagnosing whether the drop is algorithmic or a manual action, then building a documented path back, which we cover in more depth on our Penalty Recovery page."
      },
      {
        "question": "Do you guarantee a #1 Google ranking?",
        "answer": "No, no agency can honestly guarantee a specific ranking position, since Google's algorithm isn't controlled by any outside provider. We focus on transparent processes and reporting instead of promises we can't actually keep."
      },
      {
        "question": "What's included in an SEO audit?",
        "answer": "A technical review, on-page assessment, content gap analysis, and backlink quality check, delivered as a written report with prioritized recommendations you can act on with or without further work from us."
      },
      {
        "question": "Do you serve businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we work with clients in the US, UK, Australia, Canada, and UAE, using the same audit-first process regardless of location."
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
    "metaDescription": "Grow organic traffic and qualified leads with data-driven SEO services built for sustainable search visibility and business growth.",
    "heroHook": "Short Description (under H1): Rankings that actually convert, built on technical fixes, real content strategy, and visibility across both Google and AI search engines, handled by one in-house team. Get a free audit and see where you actually stand.\n\nA Website Nobody Finds Is a Website That Isn't Working\n\nTraffic doesn't show up because a website exists, it shows up because search engines can find it, trust it, and decide it deserves to rank above the competitor down the street. Mahedi Hasan provides SEO services for SMEs, startups, and ecommerce businesses in Bangladesh, and for international clients across the US, UK, Australia, Canada, and UAE, covering everything from technical fixes to AI search visibility, handled by one in-house team instead of a rotating cast of freelancers. Curious where your site currently stands? A free audit will tell you exactly what's holding it back.",
    "offerings": [
      {
        "title": "Search engine optimization covers the technical, content, and authority work needed to get a website found on Google and increasingly cited by AI search tools, and it typically includes technical fixes, keyword strategy, content and link-building work, and local or international visibility depending on where your customers actually are. It's built for businesses that want sustainable, compounding visibility rather than a short-term traffic spike that disappears the moment work stops.",
        "description": "Technical SEO The infrastructure work behind rankings site speed, crawlability, indexation, mobile performance, and structured data fixed at the source instead of patched around. On-Page SEO Content, headings, metadata, and internal linking optimized around what your customers actually search for, not keyword-stuffed guesswork. Off-Page SEO & Link Building Earning backlinks through outreach and relevance-based placements is the slow, defensible kind of authority-building that doesn't put your site at risk of a future penalty. Local SEO Visibility for businesses that serve a specific city or service area, including Google Business Profile management and the Google Map Pack. Ecommerce SEO Product and category page optimization built around buyer-intent search terms, not just informational traffic that never converts. International SEO Structuring a site to rank across multiple countries or languages, without the technical conflicts that come from doing it carelessly. SEO Audit A full technical, on-page, and backlink review delivered as a prioritized action plan, not a raw data dump you have to interpret yourself. SEO Strategy & Consulting Planning and guidance for businesses that want an expert-built roadmap, whether they're executing it in-house or through us. Keyword Research Identifying the terms your customers actually search, filtered by what your site can realistically compete for right now. AI Search Optimization (AEO/GEO) Structuring content so it gets cited by ChatGPT, Gemini, Perplexity, and other AI tools that are increasingly answering search queries directly. Google AdSense Approval Reviewing and fixing the site issues that most commonly cause AdSense rejection, before or after you've already applied. Penalty Recovery Diagnosing and reversing a Google penalty or algorithmic traffic drop, with a documented path back to where your rankings were.",
        "bullets": []
      }
    ],
    "whyMatters": [
      "Every month a site stays technically broken or invisible to AI search tools, competitors who are already investing in SEO widen the gap, rankings compound the way debt does, just in the other direction, and catching up gets harder the longer it's left unaddressed. The payoff isn't abstract either: organic traffic converts at a meaningfully higher rate than most paid channels, because the person searching already has intent, not just curiosity.",
      "A common misunderstanding treats SEO like a paid ad campaign, flip it on, see results, flip it off, results stop. It doesn't work that way. Organic visibility builds gradually and keeps producing results even in months you're not actively running other marketing, but it needs patience and consistent work, not a one-time setup you forget about."
    ],
    "whyChooseUs": [
      "We work with Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means our process accounts for different search behaviors and competitive landscapes rather than applying one market's playbook everywhere. AI search optimization is treated as a core service here, not an afterthought bolted onto traditional SEO, a growing share of queries now get answered without a click, and most agencies still haven't caught up to that shift."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What's Covered"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Essential"
        ],
        [
          "",
          "৳25,000/month"
        ],
        [
          "",
          "On-page optimization, basic technical fixes, monthly reporting"
        ],
        [
          "",
          "Small businesses, single-location"
        ],
        [
          "",
          "Growth"
        ],
        [
          "",
          "৳45,000/month"
        ],
        [
          "",
          "Full technical SEO, content strategy, link building, local SEO"
        ],
        [
          "",
          "Growing businesses, multi-page sites"
        ],
        [
          "",
          "Ecommerce / Advanced"
        ],
        [
          "",
          "৳75,000/month"
        ],
        [
          "",
          "Product/category optimization, advanced link building, AI search optimization"
        ],
        [
          "",
          "Ecommerce stores, competitive industries"
        ],
        [
          "",
          "Enterprise / International"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Multi-market strategy, dedicated reporting, penalty recovery if needed"
        ],
        [
          "",
          "Large sites, international expansion"
        ],
        [
          "",
          "A free initial audit and consultation is included before any paid commitment, so you know exactly what you're paying for."
        ]
      ],
      "note": ""
    },
    "serviceAreas": [
      "Dhaka",
      "Chittagong",
      "Sylhet",
      "Bangladesh-wide",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "UAE"
    ]
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
      },
      {
        "question": "How is technical SEO different from on-page SEO?",
        "answer": "Technical SEO addresses the infrastructure that lets search engines crawl, index, and understand your site speed, structured data, architecture. On-page SEO addresses the content and metadata on individual pages. Both matter, and technical issues can undermine even strong content work."
      },
      {
        "question": "Do I need a technical SEO audit if my site looks fine to visitors?",
        "answer": "Yes, often, technical issues like poor crawlability or missing structured data are usually invisible to a regular visitor but directly affect how search engines evaluate your site."
      },
      {
        "question": "How much does site speed actually affect rankings?",
        "answer": "Page speed is a measured ranking factor, and it also affects visitor behavior directly, slow pages lose both rankings and conversions, which is why we treat it as a priority rather than a secondary concern."
      },
      {
        "question": "Can you fix technical issues on any platform, or just specific ones?",
        "answer": "We work across WordPress, Shopify, Webflow, and custom-built sites, the specific fixes vary by platform, but the diagnostic process is the same regardless of what your site runs on."
      },
      {
        "question": "Do you provide ongoing technical monitoring, or just a one-time fix?",
        "answer": "Both are available, a one-time audit and fix for sites needing a foundation reset, or ongoing monitoring for sites that want technical health tracked continuously."
      }
    ],
    "relatedServices": [
      "seo",
      "website-development"
    ],
    "metaTitle": "Technical SEO Services",
    "metaDescription": "Technical SEO audits and fixes for crawlability, indexation, and Core Web Vitals — the foundation your rankings depend on.",
    "heroHook": "A technically strong website gives search engines a clearer path to crawl, understand, and index your important pages. Mahedi Hasan provides technical SEO services that identify and fix crawlability, indexation, performance, structured data, rendering, and architecture issues that can limit organic visibility. We work with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.",
    "quote": "Most sites don't have a content problem. They have a foundation problem that content work can't fix, no matter how good the writing is.",
    "offerings": [
      {
        "title": "CRAWLABILITY & INDEXATION",
        "description": "If Google can't find and index your pages properly, nothing else about your SEO strategy matters. A page search engines can't find is a page that doesn't exist as far as rankings are concerned.",
        "bullets": [
          "XML Sitemap Optimization: Making sure your sitemap accurately reflects what should actually be indexed.",
          "Robots.txt Review: Confirming you're not accidentally blocking pages search engines should be crawling.",
          "Crawl Budget Analysis: Identifying wasted crawl activity on low-value pages that pulls attention from ones that matter.",
          "Orphan Page & Broken Link Fixes: Finding pages with no internal links pointing to them, and links that lead nowhere."
        ]
      },
      {
        "title": "SITE SPEED & CORE WEB VITALS",
        "description": "Speed is both a ranking factor and a conversion factor, fixing it serves two goals at once. A three-second delay in load time is enough to send a meaningful share of visitors somewhere else.",
        "bullets": [
          "Page Speed Audits: Identifying exactly what's slowing pages down, not just reporting a generic score.",
          "Image & Asset Optimization: Compression and format fixes that cut load time without visibly hurting quality.",
          "Core Web Vitals Fixes: Addressing loading, interactivity, and visual stability metrics Google actively measures.",
          "Mobile Performance Optimization: Making sure speed holds up on real mobile connections, not just desktop broadband."
        ]
      },
      {
        "title": "STRUCTURED DATA & SCHEMA MARKUP",
        "description": "Helping search engines understand exactly what's on the page, not just that something is there. Structured data doesn't guarantee a rich result, but skipping it guarantees you're not eligible for one.",
        "bullets": [
          "Schema Markup Implementation: Product, review, FAQ, and article schema, matched to what each page actually contains.",
          "Rich Result Eligibility: Structuring data so pages qualify for enhanced search listings where relevant.",
          "Schema Validation & Testing: Confirming markup is implemented correctly, not just present.",
          "Local Business Schema: Structured data that supports local search and Google Business Profile visibility."
        ]
      },
      {
        "title": "SITE ARCHITECTURE & TECHNICAL CLEANUP",
        "description": "The underlying structure that determines whether search engines understand how your site fits together. Search engines reward sites that are easy to understand, technical clutter works against that even when the content itself is strong.",
        "bullets": [
          "URL Structure Review: Clean, logical URLs that reflect site hierarchy instead of generated strings.",
          "Duplicate Content Resolution: Canonical tags and redirects fixed where the same content is competing against itself.",
          "HTTPS & Security Configuration: Confirming certificates and security setup meet current standards.",
          "Mobile-Friendliness & Responsive Fixes: Addressing layout or functionality issues specific to mobile crawling and indexing."
        ]
      },
      {
        "title": "ONGOING TECHNICAL MONITORING",
        "description": "Technical health isn't a one-time fix, sites drift out of good shape as content and code accumulate. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing technical monitoring fits into a broader retainer.",
        "bullets": [
          "Regular Crawl Health Checks: Catching new indexation issues before they compound.",
          "Core Web Vitals Monitoring: Tracking performance metrics over time, not just at a single audit snapshot.",
          "Search Console Error Tracking: Monitoring for crawl errors, security issues, and manual actions as they appear.",
          "Technical Regression Prevention: Flagging when a site update accidentally reintroduces a fixed issue."
        ]
      }
    ],
    "whyMatters": [
      "Content and link building work harder and produce better results faster once the technical foundation underneath them is solid.",
      "Rankings Can't Outrun a Broken Foundation",
      "No amount of content strategy compensates for pages Google can't properly crawl or index in the first place.",
      "Speed Affects Both Rankings and Revenue",
      "Slow-loading pages lose rankings and lose visitors before they even see what you're offering, it's a compounding cost, not a one-time inconvenience.",
      "Technical Debt Accumulates Quietly",
      "Small issues, a missing sitemap update, an unnoticed redirect chain build up over time until they're collectively suppressing a meaningful share of your traffic.",
      "A Clean Foundation Makes Everything Else Work Better",
      "Content, link building, and local SEO all perform better once crawlability and speed aren't working against them."
    ],
    "whyChooseUs": [
      "\"Most sites don't have a content problem. They have a foundation problem that content work can't fix, no matter how good the writing is.\" Crawl & Indexation Fixes | Core Web Vitals Optimization | Structured Data Implementation",
      "Technical SEO covers a lot of ground, here's how we break it down.",
      "If Google can't find and index your pages properly, nothing else about your SEO strategy matters.",
      "* XML Sitemap Optimization: Making sure your sitemap accurately reflects what should actually be indexed. * Robots.txt Review: Confirming you're not accidentally blocking pages search engines should be crawling. * Crawl Budget Analysis: Identifying wasted crawl activity on low-value pages that pulls attention from ones that matter. * Orphan Page & Broken Link Fixes: Finding pages with no internal links pointing to them, and links that lead nowhere. A page search engines can't find is a page that doesn't exist as far as rankings are concerned.",
      "Speed is both a ranking factor and a conversion factor, fixing it serves two goals at once.",
      "* Page Speed Audits: Identifying exactly what's slowing pages down, not just reporting a generic score. * Image & Asset Optimization: Compression and format fixes that cut load time without visibly hurting quality. * Core Web Vitals Fixes: Addressing loading, interactivity, and visual stability metrics Google actively measures. * Mobile Performance Optimization: Making sure speed holds up on real mobile connections, not just desktop broadband. A three-second delay in load time is enough to send a meaningful share of visitors somewhere else.",
      "Helping search engines understand exactly what's on the page, not just that something is there.",
      "* Schema Markup Implementation: Product, review, FAQ, and article schema, matched to what each page actually contains. * Rich Result Eligibility: Structuring data so pages qualify for enhanced search listings where relevant. * Schema Validation & Testing: Confirming markup is implemented correctly, not just present. * Local Business Schema: Structured data that supports local search and Google Business Profile visibility. Structured data doesn't guarantee a rich result, but skipping it guarantees you're not eligible for one.",
      "The underlying structure that determines whether search engines understand how your site fits together.",
      "* URL Structure Review: Clean, logical URLs that reflect site hierarchy instead of generated strings. * Duplicate Content Resolution: Canonical tags and redirects fixed where the same content is competing against itself. * HTTPS & Security Configuration: Confirming certificates and security setup meet current standards. * Mobile-Friendliness & Responsive Fixes: Addressing layout or functionality issues specific to mobile crawling and indexing. Search engines reward sites that are easy to understand, technical clutter works against that even when the content itself is strong.",
      "Technical health isn't a one-time fix, sites drift out of good shape as content and code accumulate.",
      "* Regular Crawl Health Checks: Catching new indexation issues before they compound. * Core Web Vitals Monitoring: Tracking performance metrics over time, not just at a single audit snapshot. * Search Console Error Tracking: Monitoring for crawl errors, security issues, and manual actions as they appear. * Technical Regression Prevention: Flagging when a site update accidentally reintroduces a fixed issue. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing technical monitoring fits into a broader retainer. Why Your Business Needs Real Technical SEO Work Content and link building work harder and produce better results faster once the technical foundation underneath them is solid. Rankings Can't Outrun a Broken Foundation No amount of content strategy compensates for pages Google can't properly crawl or index in the first place.",
      "Slow-loading pages lose rankings and lose visitors before they even see what you're offering, it's a compounding cost, not a one-time inconvenience.",
      "Small issues, a missing sitemap update, an unnoticed redirect chain build up over time until they're collectively suppressing a meaningful share of your traffic. A Clean Foundation Makes Everything Else Work Better Content, link building, and local SEO all perform better once crawlability and speed aren't working against them. Why We're Different",
      "Technical fixes, content, and development work together under one roof, so a technical recommendation isn't disconnected from what your dev team can actually implement.",
      "No generic technical checklist applied regardless of your site. We find the specific issues actually suppressing your rankings, then fix those first. Local & International Technical Experience Based in Dhaka. Working with clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every technical change goes through your review before it touches the live site.",
      "Sitemap, robots.txt, and internal linking cleaned up so search engines can actually find your important pages.",
      "Core Web Vitals and mobile performance addressed at the source, not patched around.",
      "Schema markup matched to what each page actually contains, tested for correctness.",
      "URL structure, duplicate content, and security configuration brought up to current standards.",
      "Technical health tracked over time, so new issues get caught before they compound.",
      "Every change reviewed and approved by you before it goes live."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What Drives the Cost"
        ],
        [
          "",
          "Typical Delivery"
        ],
        [
          "",
          "Technical Audit Only"
        ],
        [
          "",
          "৳20,000"
        ],
        [
          "",
          "Full diagnostic report, prioritized recommendations"
        ],
        [
          "",
          "~1 week"
        ],
        [
          "",
          "Standard Technical Fix"
        ],
        [
          "",
          "৳40,000"
        ],
        [
          "",
          "Audit plus implementation for a small-to-medium site"
        ],
        [
          "",
          "~2–3 weeks"
        ],
        [
          "",
          "Advanced Technical Overhaul"
        ],
        [
          "",
          "৳80,000"
        ],
        [
          "",
          "Larger site, complex architecture, extensive cleanup"
        ],
        [
          "",
          "~4–6 weeks"
        ],
        [
          "",
          "Ongoing Technical Monitoring"
        ],
        [
          "",
          "৳15,000/month"
        ],
        [
          "",
          "Continuous monitoring, regression prevention, monthly reporting"
        ],
        [
          "",
          "Ongoing"
        ],
        [
          "",
          "Included at every tier:"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and provides technical SEO services for businesses across Bangladesh and clients in the UAE, US, UK, Australia, and Canada, 20+ countries so far. Hosting environments, common CMS platforms, and connection speeds vary by region, and our recommendations account for that instead of applying one market's technical assumptions everywhere.\n\nFor businesses in Bangladesh, that includes prioritizing mobile performance specifically, since most local search traffic arrives on mobile connections that are more sensitive to unoptimized page weight than desktop broadband."
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
      },
      {
        "question": "Why not just buy links to move faster?",
        "answer": "Bought links, especially in bulk, carry real penalty risk, Google's systems are increasingly good at detecting unnatural link patterns, and a resulting penalty typically costs far more time to recover from than the links would have saved."
      },
      {
        "question": "How many links will I get each month?",
        "answer": "It depends on your plan and industry, and we won't promise a fixed number regardless of outreach conditions, quality and relevance matter more than hitting an arbitrary count."
      },
      {
        "question": "Do you guarantee placement on specific high-authority sites?",
        "answer": "No, publication decisions belong to the sites we're pitching, not to us. We pursue genuinely relevant, high-quality targets, but final acceptance is always the publisher's call."
      },
      {
        "question": "What happens if my site already has some low-quality or spammy backlinks?",
        "answer": "We review your existing backlink profile as part of the initial audit and can prepare a disavow file for genuinely harmful links, separate from the ongoing outreach work."
      },
      {
        "question": "Do you build links for businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we build authority for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "seo",
      "content-marketing",
      "seo-content-writing",
      "local-seo"
    ],
    "metaTitle": "Off-Page SEO Services | Link Building & Digital PR",
    "metaDescription": "Sustainable off-page SEO services covering relevant link building, digital PR, citations, brand mentions, and authority growth.",
    "heroHook": "Strong search visibility does not come from on-page optimization alone. External links, brand mentions, publisher relationships, and other off-page signals can contribute to how a website is discovered, understood, and evaluated. Mahedi Hasan provides off-page SEO and link building services built around relevance, editorial quality, and manual outreach. We identify realistic opportunities, create useful content where needed, and pursue placements that make sense for the publication, audience, and target page. Our campaigns support businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.",
    "quote": "The links that actually help a site are the ones that would exist even if Google didn't. A link earned because the content deserved it holds up. A link bought because a tool made it easy usually doesn't.",
    "offerings": [
      {
        "title": "LINK PROSPECTING & OUTREACH",
        "description": "Finding the right sites to pursue matters as much as the pitch itself. A hundred low-quality links rarely outperform ten genuinely relevant ones, and the risk profile isn't close.",
        "bullets": [
          "Relevant Site Identification: Finding publications and sites genuinely related to your industry, not just ones with a high metric score.",
          "Editorial Quality Assessment: Vetting sites for real editorial standards before pursuing a placement.",
          "Personalized Outreach: Pitches written for the specific publication, not a mail-merged template sent to five hundred sites at once.",
          "Relationship Building: Maintaining ongoing relationships with publishers rather than treating every outreach as a one-time transaction."
        ]
      },
      {
        "title": "GUEST POSTING & CONTENT PLACEMENT",
        "description": "Contributing genuinely useful content to sites your target audience already reads. A guest post that wouldn't get published on its own merit isn't a link building strategy, it's a liability waiting to be noticed.",
        "bullets": [
          "Guest Post Pitching: Identifying topics and publications where a contribution would add real value, not just a link.",
          "Content Development: Writing genuinely useful articles, not thin content built solely to house a link.",
          "Placement Negotiation: Securing publication on sites with actual traffic and editorial standards.",
          "Anchor Text Strategy: Natural, varied anchor text that reads like normal writing, not an optimization pattern."
        ]
      },
      {
        "title": "BROKEN LINK & RESOURCE OUTREACH",
        "description": "Finding existing opportunities where a link to your content genuinely improves someone else's page. This is link building that solves someone else's problem first, which is exactly why it tends to work.",
        "bullets": [
          "Broken Link Identification: Finding dead links on relevant sites that could be replaced with a link to your content.",
          "Resource Page Outreach: Identifying curated resource pages where your content is a genuine fit.",
          "Competitor Backlink Analysis: Finding where competitors are earning links, to identify opportunities you might be missing.",
          "Digital PR & Content-Based Outreach: Pitching original research, data, or content genuinely newsworthy enough to earn coverage."
        ]
      },
      {
        "title": "LOCAL & INDUSTRY CITATIONS",
        "description": "Building the kind of foundational authority that supports both rankings and trust. Citations won't carry a link building strategy alone, but skipping them leaves an easy foundation unbuilt.",
        "bullets": [
          "Local Citation Building: Consistent business listings across relevant directories, supporting local search visibility.",
          "Industry Directory Submissions: Placement in directories genuinely relevant to your sector, not a mass submission to hundreds of low-quality ones.",
          "NAP Consistency Audits: Making sure your business name, address, and phone number match everywhere they appear.",
          "Social Signal Support: Profile and presence consistency that reinforces overall brand authority."
        ]
      },
      {
        "title": "BACKLINK MONITORING & DISAVOW SUPPORT",
        "description": "Protecting the authority you've built and catching problems before they compound. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing link monitoring fits into a broader retainer.",
        "bullets": [
          "Backlink Profile Monitoring: Tracking new links, both good and potentially harmful, as they appear.",
          "Toxic Link Identification: Flagging spammy or manipulative links that could put your site at risk.",
          "Disavow File Management: Preparing and submitting disavow requests where genuinely warranted.",
          "Link Velocity Monitoring: Watching for unnatural link growth patterns that could draw unwanted algorithmic attention."
        ]
      }
    ],
    "whyMatters": [
      "Authority built the slow way is authority that survives Google's next update. Authority bought the fast way often doesn't.",
      "Manufactured Links Carry Real Penalty Risk",
      "Bulk-bought links and link networks can trigger a manual action or algorithmic penalty that takes far longer to recover from than the links took to acquire.",
      "Relevance Matters More Than Volume",
      "A handful of links from genuinely relevant, respected sites in your industry typically carries more weight than a large volume of unrelated ones.",
      "Authority Compounds, Slowly",
      "Link building is one of the few SEO channels where the effect builds cumulatively over time, each earned link adds to a foundation, rather than resetting with each new campaign.",
      "Your Backlink Profile Needs Active Protection",
      "New links, including harmful ones from spam sites linking to you without your involvement, keep appearing whether you're actively building or not, monitoring catches problems before they compound."
    ],
    "whyChooseUs": [
      "\"The links that actually help a site are the ones that would exist even if Google didn't. A link earned because the content deserved it holds up. A link bought because a tool made it easy usually doesn't.\" Manual, Relevance-Based Outreach | No Bulk Buying or Link Networks | Built to Last, Not Just to Rank",
      "Authority gets built through several different channels, each with its own approach.",
      "Finding the right sites to pursue matters as much as the pitch itself.",
      "* Relevant Site Identification: Finding publications and sites genuinely related to your industry, not just ones with a high metric score. * Editorial Quality Assessment: Vetting sites for real editorial standards before pursuing a placement. * Personalized Outreach: Pitches written for the specific publication, not a mail-merged template sent to five hundred sites at once. * Relationship Building: Maintaining ongoing relationships with publishers rather than treating every outreach as a one-time transaction. A hundred low-quality links rarely outperform ten genuinely relevant ones, and the risk profile isn't close.",
      "Contributing genuinely useful content to sites your target audience already reads.",
      "* Guest Post Pitching: Identifying topics and publications where a contribution would add real value, not just a link. * Content Development: Writing genuinely useful articles, not thin content built solely to house a link. * Placement Negotiation: Securing publication on sites with actual traffic and editorial standards. * Anchor Text Strategy: Natural, varied anchor text that reads like normal writing, not an optimization pattern. A guest post that wouldn't get published on its own merit isn't a link building strategy, it's a liability waiting to be noticed.",
      "Finding existing opportunities where a link to your content genuinely improves someone else's page.",
      "* Broken Link Identification: Finding dead links on relevant sites that could be replaced with a link to your content. * Resource Page Outreach: Identifying curated resource pages where your content is a genuine fit. * Competitor Backlink Analysis: Finding where competitors are earning links, to identify opportunities you might be missing. * Digital PR & Content-Based Outreach: Pitching original research, data, or content genuinely newsworthy enough to earn coverage. This is link building that solves someone else's problem first, which is exactly why it tends to work.",
      "Building the kind of foundational authority that supports both rankings and trust.",
      "* Local Citation Building: Consistent business listings across relevant directories, supporting local search visibility. * Industry Directory Submissions: Placement in directories genuinely relevant to your sector, not a mass submission to hundreds of low-quality ones. * NAP Consistency Audits: Making sure your business name, address, and phone number match everywhere they appear. * Social Signal Support: Profile and presence consistency that reinforces overall brand authority. Citations won't carry a link building strategy alone, but skipping them leaves an easy foundation unbuilt.",
      "Protecting the authority you've built and catching problems before they compound.",
      "* Backlink Profile Monitoring: Tracking new links, both good and potentially harmful, as they appear. * Toxic Link Identification: Flagging spammy or manipulative links that could put your site at risk. * Disavow File Management: Preparing and submitting disavow requests where genuinely warranted. * Link Velocity Monitoring: Watching for unnatural link growth patterns that could draw unwanted algorithmic attention. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing link monitoring fits into a broader retainer. Why Your Business Needs Real Link Building Work Authority built the slow way is authority that survives Google's next update. Authority bought the fast way often doesn't. Manufactured Links Carry Real Penalty Risk Bulk-bought links and link networks can trigger a manual action or algorithmic penalty that takes far longer to recover from than the links took to acquire.",
      "A handful of links from genuinely relevant, respected sites in your industry typically carries more weight than a large volume of unrelated ones. Authority Compounds, Slowly Link building is one of the few SEO channels where the effect builds cumulatively over time, each earned link adds to a foundation, rather than resetting with each new campaign. Your Backlink Profile Needs Active Protection New links, including harmful ones from spam sites linking to you without your involvement, keep appearing whether you're actively building or not, monitoring catches problems before they compound. Why We're Different",
      "Outreach, content, and monitoring handled by people who actually understand your industry, not an outsourced link-buying operation running the same playbook for every client. Manual Outreach, Not Automation Every pitch is written for the specific publication we're reaching out to no mail-merged templates blasted to hundreds of sites at once.",
      "Based in Dhaka. Building authority for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process You see exactly which sites we're pursuing and which links get placed, with full visibility into the process.",
      "Relevant, editorially credible sites identified and pursued through personalized outreach, not automation.",
      "Genuinely useful content placed on sites your audience actually reads.",
      "Opportunities that solve a publisher's problem first, earning links as a natural byproduct.",
      "Consistent, accurate business listings that support both rankings and trust.",
      "Ongoing tracking of your link profile, with disavow support where genuinely needed.",
      "Full visibility into which sites are being pursued and which links get placed."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What's Covered"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Foundation"
        ],
        [
          "",
          "৳25,000/month"
        ],
        [
          "",
          "Local citations, basic outreach, 2-3 placements monthly"
        ],
        [
          "",
          "Small businesses starting from a limited backlink profile"
        ],
        [
          "",
          "Growth"
        ],
        [
          "",
          "৳50,000/month"
        ],
        [
          "",
          "Guest posting, broken link outreach, 5-8 placements monthly"
        ],
        [
          "",
          "Businesses building competitive authority"
        ],
        [
          "",
          "Authority"
        ],
        [
          "",
          "৳90,000/month"
        ],
        [
          "",
          "Digital PR, content-based outreach, 10+ placements monthly"
        ],
        [
          "",
          "Competitive industries needing aggressive authority building"
        ],
        [
          "",
          "Custom Campaign"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Large-scale outreach, dedicated content development"
        ],
        [
          "",
          "Large sites, major market expansion"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and provides link building services for businesses across Bangladesh and clients in the UAE, US, UK, Australia, and Canada, 20+ countries so far. Relevant publications and industry sites differ meaningfully by region, and outreach targeting accounts for that instead of pursuing the same site list regardless of where your business actually operates.\n\nFor businesses in Bangladesh, that includes both local citation building on directories relevant to the Bangladeshi market and outreach to international publications where a business's audience genuinely extends beyond it."
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
      },
      {
        "question": "What is an SEO & blog writing service?",
        "answer": "An SEO and blog writing service combines topic research, search-intent analysis, content planning, writing, editing, and relevant on-page SEO considerations to create useful articles for a business website."
      },
      {
        "question": "What is included in your SEO blog writing service?",
        "answer": "Depending on the selected scope, it can include keyword and topic research, search-intent analysis, SERP research, competitor content analysis, content briefs, SEO blog writing, editing, internal-link recommendations, metadata recommendations, content refreshes, and performance support."
      },
      {
        "question": "How do you choose keywords for blog content?",
        "answer": "We consider the business, audience, market, search intent, existing website content, competition, topic relevance, and potential business value. We do not select topics based only on search volume."
      },
      {
        "question": "How long should an SEO blog post be?",
        "answer": "There is no universal word count that guarantees better rankings. The appropriate length depends on the topic, search intent, audience, competition, and the amount of information needed to satisfy the searcher. Google explicitly says it does not have a preferred word count."
      },
      {
        "question": "Do you guarantee Google rankings?",
        "answer": "No. We do not guarantee first-page rankings or specific ranking positions. Search performance depends on many factors beyond the writing itself."
      },
      {
        "question": "Do you update old blog posts?",
        "answer": "Yes. We can review and refresh existing content when it has become outdated, incomplete, poorly structured, or less competitive."
      },
      {
        "question": "Do you create topic clusters?",
        "answer": "Yes, where a topic-cluster approach is appropriate. We can help identify supporting topics and connect relevant articles to broader pillar, service, product, or category pages through internal linking."
      },
      {
        "question": "Can you write about technical or specialized subjects?",
        "answer": "Yes, depending on the subject and available expertise. For specialist topics, we may require client-provided documentation, subject-matter expert input, interviews, references, or additional research to ensure the content is accurate and useful."
      },
      {
        "question": "Can you use information from our internal team?",
        "answer": "Yes. Client interviews, internal documentation, product information, customer questions, expert input, and proprietary information can help make content more specific and useful."
      },
      {
        "question": "Do you publish the articles?",
        "answer": "Publish-ready formatting is included within the standard scope. CMS publishing can be added where agreed."
      },
      {
        "question": "How many blog posts should a business publish each month?",
        "answer": "There is no universal number. The right publishing cadence depends on your available topics, search opportunities, content quality, resources, competition, approval workflow, and business goals. A smaller number of genuinely useful articles can be more appropriate than publishing large volumes of repetitive content."
      },
      {
        "question": "Do you write SEO blog content in Bangla?",
        "answer": "Yes, where included in the project scope. We can support English, Bangla, or bilingual content depending on the target audience and market."
      },
      {
        "question": "Do you provide SEO blog writing outside Bangladesh?",
        "answer": "Yes. Mahedi Hasan supports businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "seo",
      "content-marketing",
      "off-page-seo",
      "creative-content"
    ],
    "metaTitle": "SEO Content Writing Services | Pages, Blogs & Topic Clusters",
    "metaDescription": "Research-led SEO content writing for service pages, blogs, topical authority clusters, local pages, and conversion-focused website content.",
    "heroHook": "SEO blog content should do more than target a keyword. It should answer the right search, provide useful information, demonstrate appropriate expertise, and give readers a clear reason to keep reading. Mahedi Hasan provides SEO & Blog Writing Service in Bangladesh for SMEs, startups, ecommerce businesses, and established brands, with content support for international markets including the US, UK, Australia, Canada, and UAE.",
    "whyChooseUs": [
      "Content, SEO, website, and digital marketing work can be coordinated through one in-house team. This reduces the need to manage separate providers when a content project also involves SEO strategy, website implementation, or broader digital marketing work.",
      "Our writers do not have to work completely separately from the SEO requirements of the website. Research, content structure, internal linking, search intent, and wider site architecture can be considered together.",
      "We do not treat every article as a fixed word-count assignment. We first determine what the content needs to accomplish, who it is for, what search it should address, and where it fits within the wider website.",
      "Content is reviewed for clarity, structure, relevance, brand voice, and alignment with the agreed brief before final delivery. Where specialist knowledge is required, client input and subject-matter expertise can be incorporated rather than relying on unsupported assumptions.",
      "Publishing is not necessarily the end of the content lifecycle. We can review existing content and recommend updates when information, search intent, competition, or business priorities change.",
      "Mahedi Hasan is based in Dhaka and supports businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Where relevant, research can consider local terminology, audience expectations, language, and market-specific search behavior."
    ],
    "pricingTable": {
      "headers": [
        "Plan",
        "Starting Price",
        "What's Covered",
        "Best For"
      ],
      "rows": [
        [
          "Per-Article",
          "From ৳3,500/article",
          "Individual SEO article within the agreed scope, including keyword/topic research",
          "Occasional content needs"
        ],
        [
          "Growth",
          "From ৳20,000/month",
          "4–5 agreed articles per month, with research and SEO structure",
          "Consistent blog publishing"
        ],
        [
          "Comprehensive",
          "From ৳35,000/month",
          "8–10 agreed articles per month, plus selected content refresh support",
          "Active content programs"
        ],
        [
          "Enterprise",
          "Custom Quote",
          "High-volume, multi-market, specialist, or technically complex content",
          "Larger content operations"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan provides SEO and blog writing services for businesses across Bangladesh, including Dhaka and other locations. Where relevant, content research can consider English and Bangla search behavior, local terminology, audience needs, and market context. We also support businesses targeting international markets, including the United States, United Kingdom, Australia, Canada, the UAE, and other international markets. International SEO content is adapted to the intended audience rather than simply translating an existing article word for word."
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
      },
      {
        "question": "What's the Google Map Pack, and why does it matter?",
        "answer": "It's the three-business block that appears at the top of local search results, and it captures the majority of clicks for location-based searches. Appearing there consistently takes a combination of profile quality, on-page local signals, and review authority working together."
      },
      {
        "question": "How is local SEO different from regular SEO?",
        "answer": "Regular SEO targets broad, often national visibility. Local SEO focuses specifically on ranking for searches tied to a location, \"near me\" searches, city-specific terms, and depends heavily on your Google Business Profile and citation consistency, which general SEO doesn't address."
      },
      {
        "question": "Can you manage multiple business locations?",
        "answer": "Yes, multi-location management is available, with each profile optimized individually and consolidated reporting so you can see performance across all locations at once."
      },
      {
        "question": "How do you generate reviews without violating Google's policies?",
        "answer": "We use practical, compliant approaches, making it easy for genuinely satisfied customers to leave a review, rather than incentivized or fake reviews, which risk your entire profile being suspended."
      },
      {
        "question": "Do you provide local SEO for businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we provide local SEO for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "seo",
      "technical-seo",
      "website-marketing",
      "cro"
    ],
    "metaTitle": "Local SEO Services in Bangladesh | Mahedi Hasan",
    "metaDescription": "Rank higher on Google Maps and local search across Dhaka, Chittagong, and Bangladesh. Google Business Profile optimization, citations, and reviews.",
    "heroHook": "Get found by customers searching for your products or services nearby. Mahedi Hasan improves local visibility through Google Business Profile optimization, local website signals, citations, reviews, and location-based search strategy. We help businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.",
    "quote": "A customer searching nearby has already decided to buy something close to now. Losing that click to a competitor with a more complete listing is one of the more avoidable ways to lose business.",
    "offerings": [
      {
        "title": "GOOGLE BUSINESS PROFILE MANAGEMENT",
        "description": "Often the first thing a potential customer sees, before they ever reach your website. A profile set up once and never touched again tends to lose ground to competitors actively managing theirs.",
        "bullets": [
          "Profile Setup & Category Optimization: Getting the business category and details right, since miscategorization quietly suppresses visibility.",
          "Business Description Writing: Descriptions written for both search relevance and genuine reader conversion.",
          "Photo & Post Management: Regular photo uploads and Google Posts that keep the profile active and engaging.",
          "Q&A Monitoring & Review Response: Managing the profile's ongoing activity, not just setting it up once and leaving it."
        ]
      },
      {
        "title": "LOCAL KEYWORD & ON-PAGE OPTIMIZATION",
        "description": "Making sure your site itself signals the right location to search engines, not just your Google profile. Local rankings depend on your site reinforcing the same location signals your Business Profile is sending.",
        "bullets": [
          "Location-Based Keyword Research: Identifying the specific terms local customers use, including neighborhood and area-specific searches.",
          "City & Service-Area Page Optimization: Building or refining pages that clearly establish where you operate.",
          "Local Schema Markup: Structured data that helps Google understand your business type and service area precisely.",
          "NAP Consistency on Page: Making sure your name, address, and phone number are accurate and consistent on your own site."
        ]
      },
      {
        "title": "CITATION BUILDING & CONSISTENCY",
        "description": "Building the foundational trust signals that support local rankings across the web. Inconsistent business information across the web is one of the more common, avoidable drags on local ranking potential.",
        "bullets": [
          "Local Directory Citations: Consistent listings across relevant local and industry-specific directories.",
          "NAP Consistency Audits: Finding and fixing mismatched business details across every existing citation.",
          "Duplicate Listing Cleanup: Removing or merging duplicate profiles that dilute local ranking signals.",
          "Industry-Specific Directory Placement: Listings on directories genuinely relevant to your specific business category."
        ]
      },
      {
        "title": "REVIEW GENERATION & MANAGEMENT",
        "description": "Reviews influence both rankings and whether a customer actually chooses you over the next listing. A steady flow of genuine reviews, responded to consistently, is one of the stronger local trust signals available.",
        "bullets": [
          "Review Generation Strategy: Practical, policy-compliant approaches to encouraging genuine customer reviews.",
          "Review Response Management: Timely, thoughtful responses to both positive and negative reviews.",
          "Review Monitoring: Tracking new reviews across platforms so nothing goes unanswered for long.",
          "Reputation Signal Reporting: Regular visibility into how your review profile compares to nearby competitors."
        ]
      },
      {
        "title": "MAP PACK & LOCAL RANKING TRACKING",
        "description": "Understanding exactly where you stand in local results, not just guessing based on your own searches. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing local tracking fits into a broader retainer.",
        "bullets": [
          "Local Rank Tracking: Monitoring Map Pack and organic local rankings for your key terms and service areas.",
          "Competitor Local Analysis: Understanding what nearby competitors are doing well that's outranking you.",
          "Insights & Performance Reporting: Tracking calls, direction requests, and profile views through Business Profile Insights.",
          "Ongoing Optimization Adjustments: Refining the strategy based on what the ranking data actually shows."
        ]
      }
    ],
    "whyMatters": [
      "For a business tied to a physical location or service area, local visibility often matters more than broad national rankings ever will.",
      "The Map Pack Captures Most of the Local Click",
      "Falling outside those top three local results means losing the majority of location-based search traffic to whichever competitors made it in.",
      "A Neglected Profile Loses to an Active One",
      "Google increasingly favors profiles showing regular activity, posts, photo updates, review responses, over ones set up once and forgotten.",
      "Inconsistent Listings Quietly Undermine Trust",
      "Mismatched business details across directories confuse both search engines and potential customers trying to reach you.",
      "Reviews Compound Into Real Competitive Advantage",
      "A stronger review profile than nearby competitors becomes a genuine differentiator, not just a vanity metric."
    ],
    "whyChooseUs": [
      "\"A customer searching nearby has already decided to buy something close to now. Losing that click to a competitor with a more complete listing is one of the more avoidable ways to lose business.\" Google Business Profile Management | Map Pack Optimization | Citation & Review Authority",
      "Ranking locally depends on several signals working together, not any single fix.",
      "Often the first thing a potential customer sees, before they ever reach your website.",
      "* Profile Setup & Category Optimization: Getting the business category and details right, since miscategorization quietly suppresses visibility. * Business Description Writing: Descriptions written for both search relevance and genuine reader conversion. * Photo & Post Management: Regular photo uploads and Google Posts that keep the profile active and engaging. * Q&A Monitoring & Review Response: Managing the profile's ongoing activity, not just setting it up once and leaving it. A profile set up once and never touched again tends to lose ground to competitors actively managing theirs.",
      "Making sure your site itself signals the right location to search engines, not just your Google profile.",
      "* Location-Based Keyword Research: Identifying the specific terms local customers use, including neighborhood and area-specific searches. * City & Service-Area Page Optimization: Building or refining pages that clearly establish where you operate. * Local Schema Markup: Structured data that helps Google understand your business type and service area precisely. * NAP Consistency on Page: Making sure your name, address, and phone number are accurate and consistent on your own site. Local rankings depend on your site reinforcing the same location signals your Business Profile is sending.",
      "Building the foundational trust signals that support local rankings across the web.",
      "* Local Directory Citations: Consistent listings across relevant local and industry-specific directories. * NAP Consistency Audits: Finding and fixing mismatched business details across every existing citation. * Duplicate Listing Cleanup: Removing or merging duplicate profiles that dilute local ranking signals. * Industry-Specific Directory Placement: Listings on directories genuinely relevant to your specific business category. Inconsistent business information across the web is one of the more common, avoidable drags on local ranking potential.",
      "Reviews influence both rankings and whether a customer actually chooses you over the next listing.",
      "* Review Generation Strategy: Practical, policy-compliant approaches to encouraging genuine customer reviews. * Review Response Management: Timely, thoughtful responses to both positive and negative reviews. * Review Monitoring: Tracking new reviews across platforms so nothing goes unanswered for long. * Reputation Signal Reporting: Regular visibility into how your review profile compares to nearby competitors. A steady flow of genuine reviews, responded to consistently, is one of the stronger local trust signals available.",
      "Understanding exactly where you stand in local results, not just guessing based on your own searches.",
      "* Local Rank Tracking: Monitoring Map Pack and organic local rankings for your key terms and service areas. * Competitor Local Analysis: Understanding what nearby competitors are doing well that's outranking you. * Insights & Performance Reporting: Tracking calls, direction requests, and profile views through Business Profile Insights. * Ongoing Optimization Adjustments: Refining the strategy based on what the ranking data actually shows. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing local tracking fits into a broader retainer. Why Your Business Needs Real Local SEO Work For a business tied to a physical location or service area, local visibility often matters more than broad national rankings ever will. The Map Pack Captures Most of the Local Click Falling outside those top three local results means losing the majority of location-based search traffic to whichever competitors made it in. A Neglected Profile Loses to an Active One Google increasingly favors profiles showing regular activity, posts, photo updates, review responses, over ones set up once and forgotten. Inconsistent Listings Quietly Undermine Trust Mismatched business details across directories confuse both search engines and potential customers trying to reach you. Reviews Compound Into Real Competitive Advantage A stronger review profile than nearby competitors becomes a genuine differentiator, not just a vanity metric. Why We're Different",
      "Business Profile management, on-page work, and citation building handled together, not split across separate tools and vendors that don't coordinate. We Treat Local SEO as One Connected Strategy Profile, website, citations, and reviews all reinforce each other here, not managed as isolated, disconnected tasks. Local & International Local SEO Experience Based in Dhaka. Building local visibility for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process You see exactly what's being changed on your profile and site, with regular reporting on results.",
      "Full setup, ongoing posting, and review response handled as an active, maintained profile.",
      "Your site reinforcing the same location signals your Business Profile sends.",
      "Consistent, accurate business listings across relevant directories.",
      "A steady, policy-compliant approach to building and managing your review profile.",
      "Real visibility into Map Pack and local organic rankings, not guesswork.",
      "Regular reporting on what's changed and what results it's producing."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What's Covered"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Single Location"
        ],
        [
          "",
          "৳20,000/month"
        ],
        [
          "",
          "Business Profile management, basic citations, local on-page optimization"
        ],
        [
          "",
          "Single-location businesses"
        ],
        [
          "",
          "Growth"
        ],
        [
          "",
          "৳35,000/month"
        ],
        [
          "",
          "Expanded citations, review generation, competitor tracking"
        ],
        [
          "",
          "Businesses in competitive local markets"
        ],
        [
          "",
          "Multi-Location"
        ],
        [
          "",
          "৳60,000/month"
        ],
        [
          "",
          "Multiple location/profile management, consolidated reporting"
        ],
        [
          "",
          "Businesses with several physical locations"
        ],
        [
          "",
          "Custom Multi-Market"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Extensive multi-location or franchise-level management"
        ],
        [
          "",
          "Large multi-location operations"
        ],
        [
          "",
          "Included at every tier:"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and provides local SEO services for businesses across Bangladesh and clients in the UAE, US, UK, Australia, and Canada, 20+ countries so far. Relevant local directories, review platforms, and search behavior all vary by market, and citation and profile work accounts for that instead of applying one country's directory list everywhere.\n\nFor businesses in Dhaka specifically, that includes bilingual Bangla-English profile and content optimization, since local search behavior doesn't fit a single-language assumption."
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
      },
      {
        "question": "How much should I budget for Google Ads?",
        "answer": "It depends on your industry's competition and what a conversion is worth to your business. We help calculate a realistic starting budget during the account audit rather than recommending a generic number."
      },
      {
        "question": "What's the difference between Search, Shopping, and Performance Max?",
        "answer": "Search shows text ads for specific searches, Shopping shows product listings for ecommerce catalogs, and Performance Max is Google's automated campaign type running across multiple placements at once. We recommend based on what your business actually sells and needs."
      },
      {
        "question": "Do you need access to my existing Google Ads account, or do we start fresh?",
        "answer": "Either works, we can audit and improve an existing account, or build a new one from scratch if you're starting for the first time. You retain ownership of the account either way."
      },
      {
        "question": "Why is my conversion tracking important if I just want more clicks?",
        "answer": "Google's own bidding algorithms optimize based on your conversion data, if tracking is broken or missing, the platform is optimizing blind, which usually means wasted spend regardless of how many clicks come through."
      },
      {
        "question": "Do you manage Google Ads for businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we manage Google Ads for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "website-marketing",
      "cro",
      "analytics-tracking",
      "media-buying"
    ],
    "metaTitle": "Google Ads Management Services in Bangladesh | Mahedi Hasan",
    "metaDescription": "Conversion-first Google Ads management for businesses in Bangladesh and globally: Search, Shopping, Performance Max, and GA4 tracking.",
    "heroHook": "Google Ads rewards precision and punishes neglect in roughly equal measure, a well-structured account can produce leads within days, and a poorly managed one can burn budget for months without anyone noticing until the numbers get checked. Mahedi Hasan manages Google Ads accounts for businesses in Dhaka and clients across the US, UK, Australia, Canada, and UAE, built around actual conversions instead of the clicks and impressions a dashboard makes look impressive on their own.",
    "quote": "Google Ads doesn't work for us",
    "offerings": [
      {
        "title": "ACCOUNT STRATEGY & CAMPAIGN STRUCTURE",
        "description": "The foundational decisions that determine how efficiently every dollar afterward actually gets spent. An account structured poorly at the start creates optimization problems that compound for as long as it keeps running.",
        "bullets": [
          "Campaign Type Selection: Choosing Search, Shopping, Performance Max, or a combination based on what your business actually needs.",
          "Account Structure Planning: Organizing campaigns and ad groups around genuine themes, not a flat list that makes optimization harder later.",
          "Conversion Goal Definition: Establishing exactly what counts as a result, a purchase, a form fill, a call, before spend begins.",
          "Budget Allocation Strategy: Distributing spend across campaigns based on realistic performance potential, not equal splits by default."
        ]
      },
      {
        "title": "KEYWORD RESEARCH & TARGETING",
        "description": "Making sure spend goes toward the searches most likely to actually convert. A negative keyword list left unmaintained is one of the more common, quietly expensive gaps in a Google Ads account.",
        "bullets": [
          "Buyer-Intent Keyword Research: Prioritizing terms that signal genuine purchase or inquiry readiness over broad, informational searches.",
          "Match Type Strategy: Using exact, phrase, and broad match deliberately, not defaulting to broad match and hoping for the best.",
          "Negative Keyword Management: Actively excluding irrelevant searches that burn budget without any real chance of converting.",
          "Audience & Demographic Targeting: Layering audience data on top of keyword targeting where it genuinely sharpens relevance."
        ]
      },
      {
        "title": "AD CREATIVE & LANDING PAGE ALIGNMENT",
        "description": "The click only matters if what happens after it actually supports a conversion. An ad that earns a click but sends the visitor to a mismatched landing page has done half the job and wasted the spend on the other half.",
        "bullets": [
          "Ad Copy Development: Writing headlines and descriptions built around what actually gets someone to click and follow through.",
          "Ad Extension Setup: Sitelinks, callouts, and other extensions configured to improve both visibility and click quality.",
          "Landing Page Relevance Review: Confirming the page an ad sends traffic to actually matches what the ad promised.",
          "A/B Testing: Testing ad variations against each other to identify what genuinely performs better, not guessing."
        ]
      },
      {
        "title": "CONVERSION TRACKING & MEASUREMENT",
        "description": "Making sure the account's own data actually reflects what happened, not just what the platform assumes. Bad conversion tracking doesn't just hide problems, it can actively mislead an account's own bidding algorithms into optimizing for the wrong outcome.",
        "bullets": [
          "Conversion Tracking Setup: Configuring tracking correctly for purchases, leads, calls, or whatever counts as a real result for your business.",
          "Google Analytics & Tag Manager Integration: Connecting Ads data with broader site analytics for a fuller picture of performance.",
          "Call Tracking Setup: Attributing phone call conversions accurately where calls are a genuine part of the buyer journey.",
          "Attribution Model Review: Understanding which campaigns and keywords are actually driving results, not just getting last-click credit."
        ]
      },
      {
        "title": "ONGOING OPTIMIZATION & REPORTING",
        "description": "An account managed once at setup and left alone tends to drift toward inefficiency over time. Google Ads performs best paired with a landing page genuinely built to convert its traffic - see our Landing Page Development page for how that connects.",
        "bullets": [
          "Bid Strategy Management: Adjusting bidding approach as performance data accumulates and goals evolve.",
          "Search Term Report Review: Regularly checking what people actually searched to trigger your ads, catching waste early.",
          "Performance Reporting: Clear, regular reporting on conversions and cost-per-conversion, not just clicks and impressions.",
          "Ongoing A/B Testing & Refinement: Continuous testing of ad copy, landing pages, and targeting based on real results."
        ]
      },
      {
        "title": "The Different Ways Google Ads Actually Works",
        "description": "\"Google Ads\" covers several genuinely different campaign types, and picking the right one matters more than most advertisers realize. Search Campaigns Text ads shown when someone actively searches for a relevant term, the closest thing to advertising to someone who's already raised their hand. Shopping Campaigns Product listings with image, price, and store name shown directly in search results, built for ecommerce catalogs competing at the moment of comparison. Performance Max Google's automated campaign type running across Search, Display, YouTube, and Gmail from one campaign, trading manual control for machine-learning-driven reach. Display & YouTube Visual and video ads shown across Google's network and video content, better suited to awareness and remarketing than direct response. Most accounts that perform well use more than one of these deliberately, not because more campaign types automatically means better results, but because different stages of the buyer journey are genuinely served by different formats.",
        "bullets": []
      }
    ],
    "whyMatters": [
      "Google Ads is powerful enough to reward good management and unforgiving enough to punish neglect quickly.",
      "Setup Mistakes Compound Every Day the Account Runs",
      "A broad match keyword with no negative list, or conversion tracking that's silently broken, doesn't cost a one-time amount, it costs a little more every single day it goes unnoticed.",
      "The Platform Rewards Attention",
      "Google's own algorithms respond to signals from active management, regular optimization tends to outperform an account left on autopilot, even with the same underlying budget.",
      "Vanity Metrics Can Mask Real Problems",
      "An account can show excellent click-through rates and still be losing money if those clicks aren't converting into anything that matters to your business.",
      "Fast Feedback Cuts Both Ways",
      "Google Ads can start producing results within days of a properly built campaign, and can just as quickly reveal when something's fundamentally wrong with the strategy."
    ],
    "whyChooseUs": [
      "\"A campaign spending efficiently on the wrong keywords is still wasting money efficiently. Low cost-per-click means nothing if the clicks were never going to convert in the first place.\" Conversion-First Setup | Full Campaign Type Coverage | Transparent, Reviewable Account Access",
      "Managing a Google Ads account well touches strategy, structure, and ongoing optimization together.",
      "The foundational decisions that determine how efficiently every dollar afterward actually gets spent.",
      "* Campaign Type Selection: Choosing Search, Shopping, Performance Max, or a combination based on what your business actually needs. * Account Structure Planning: Organizing campaigns and ad groups around genuine themes, not a flat list that makes optimization harder later. * Conversion Goal Definition: Establishing exactly what counts as a result, a purchase, a form fill, a call, before spend begins. * Budget Allocation Strategy: Distributing spend across campaigns based on realistic performance potential, not equal splits by default. An account structured poorly at the start creates optimization problems that compound for as long as it keeps running.",
      "Making sure spend goes toward the searches most likely to actually convert.",
      "* Buyer-Intent Keyword Research: Prioritizing terms that signal genuine purchase or inquiry readiness over broad, informational searches. * Match Type Strategy: Using exact, phrase, and broad match deliberately, not defaulting to broad match and hoping for the best. * Negative Keyword Management: Actively excluding irrelevant searches that burn budget without any real chance of converting. * Audience & Demographic Targeting: Layering audience data on top of keyword targeting where it genuinely sharpens relevance. A negative keyword list left unmaintained is one of the more common, quietly expensive gaps in a Google Ads account.",
      "The click only matters if what happens after it actually supports a conversion.",
      "* Ad Copy Development: Writing headlines and descriptions built around what actually gets someone to click and follow through. * Ad Extension Setup: Sitelinks, callouts, and other extensions configured to improve both visibility and click quality. * Landing Page Relevance Review: Confirming the page an ad sends traffic to actually matches what the ad promised. * A/B Testing: Testing ad variations against each other to identify what genuinely performs better, not guessing. An ad that earns a click but sends the visitor to a mismatched landing page has done half the job and wasted the spend on the other half.",
      "Making sure the account's own data actually reflects what happened, not just what the platform assumes.",
      "* Conversion Tracking Setup: Configuring tracking correctly for purchases, leads, calls, or whatever counts as a real result for your business. * Google Analytics & Tag Manager Integration: Connecting Ads data with broader site analytics for a fuller picture of performance. * Call Tracking Setup: Attributing phone call conversions accurately where calls are a genuine part of the buyer journey. * Attribution Model Review: Understanding which campaigns and keywords are actually driving results, not just getting last-click credit. Bad conversion tracking doesn't just hide problems, it can actively mislead an account's own bidding algorithms into optimizing for the wrong outcome.",
      "An account managed once at setup and left alone tends to drift toward inefficiency over time.",
      "* Bid Strategy Management: Adjusting bidding approach as performance data accumulates and goals evolve. * Search Term Report Review: Regularly checking what people actually searched to trigger your ads, catching waste early. * Performance Reporting: Clear, regular reporting on conversions and cost-per-conversion, not just clicks and impressions. * Ongoing A/B Testing & Refinement: Continuous testing of ad copy, landing pages, and targeting based on real results. Google Ads performs best paired with a landing page genuinely built to convert its traffic - see our Landing Page Development page for how that connects. The Different Ways Google Ads Actually Works \"Google Ads\" covers several genuinely different campaign types, and picking the right one matters more than most advertisers realize.",
      "Text ads shown when someone actively searches for a relevant term, the closest thing to advertising to someone who's already raised their hand.",
      "Product listings with image, price, and store name shown directly in search results, built for ecommerce catalogs competing at the moment of comparison.",
      "Google's automated campaign type running across Search, Display, YouTube, and Gmail from one campaign, trading manual control for machine-learning-driven reach.",
      "Visual and video ads shown across Google's network and video content, better suited to awareness and remarketing than direct response. Most accounts that perform well use more than one of these deliberately, not because more campaign types automatically means better results, but because different stages of the buyer journey are genuinely served by different formats. Why Your Business Needs Real Google Ads Management Google Ads is powerful enough to reward good management and unforgiving enough to punish neglect quickly. Setup Mistakes Compound Every Day the Account Runs A broad match keyword with no negative list, or conversion tracking that's silently broken, doesn't cost a one-time amount, it costs a little more every single day it goes unnoticed.",
      "Google's own algorithms respond to signals from active management, regular optimization tends to outperform an account left on autopilot, even with the same underlying budget.",
      "An account can show excellent click-through rates and still be losing money if those clicks aren't converting into anything that matters to your business.",
      "Google Ads can start producing results within days of a properly built campaign, and can just as quickly reveal when something's fundamentally wrong with the strategy. Why We're Different",
      "Strategy, creative, and landing page alignment reviewed together, so a Google Ads recommendation isn't disconnected from what happens after the click.",
      "Every new account gets a real review of existing structure, tracking, and spend efficiency before we change anything, not assumptions applied blind. Local & International Google Ads Experience Based in Dhaka. Managing accounts for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Full Account Access, No Black Box You retain ownership and full visibility into your own Google Ads account, nothing runs in a system you can't see into yourself.",
      "Campaigns organized around genuine themes and conversion goals, not a flat structure that's hard to optimize.",
      "Spend directed toward genuinely buyer-intent searches, with negative keywords actively maintained.",
      "Ad copy and the pages it sends traffic to reviewed together, not managed as separate, disconnected pieces.",
      "Tracking is configured correctly from day one, so account data reflects reality, not platform assumptions.",
      "Regular bid, search term, and creative review, not a set-and-forget account.",
      "Clear, regular reporting on conversions and cost-per-conversion, with full account access retained by you."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Management Fee"
      ],
      "rows": [
        [
          "",
          "Recommended Minimum Ad Spend"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Starter"
        ],
        [
          "",
          "৳15,000/month"
        ],
        [
          "",
          "৳25,000+/month"
        ],
        [
          "",
          "Businesses testing Google Ads for the first time"
        ],
        [
          "",
          "Growth"
        ],
        [
          "",
          "৳25,000/month"
        ],
        [
          "",
          "৳50,000+/month"
        ],
        [
          "",
          "Established accounts scaling an already-validated strategy"
        ],
        [
          "",
          "Ecommerce (Shopping + Search)"
        ],
        [
          "",
          "৳40,000/month"
        ],
        [
          "",
          "৳80,000+/month"
        ],
        [
          "",
          "Ecommerce stores running Shopping and Search together"
        ],
        [
          "",
          "Enterprise / Performance Max"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Custom"
        ],
        [
          "",
          "Large accounts, multi-campaign-type strategies"
        ],
        [
          "",
          "Included at every tier:"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and manages Google Ads accounts for businesses across Bangladesh and clients in the UAE, US, UK, Australia, and Canada, 20+ countries so far. Cost-per-click, competition, and search behavior all vary meaningfully by region, and campaign strategy accounts for that instead of applying one market's benchmarks everywhere.\n\nFor businesses in Bangladesh, that includes accounting for local currency billing, bilingual Bangla-English keyword targeting where relevant, and mobile-first ad experience given how much local search traffic arrives on mobile."
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
      },
      {
        "question": "Why does creative matter more on Meta than on Google Ads?",
        "answer": "Search ads reach people who've already expressed intent through their query. Meta ads have to generate interest from people who weren't necessarily looking for you, which puts more of the persuasive burden on the creative itself."
      },
      {
        "question": "How often does ad creative actually need to change?",
        "answer": "It depends on spend level and audience size, but creative fatigue typically sets in within two to four weeks at meaningful spend, we monitor frequency and performance signals to know when to refresh rather than working off a fixed calendar alone."
      },
      {
        "question": "What's the difference between custom audiences and lookalike audiences?",
        "answer": "Custom audiences target people who've already interacted with your business, site visitors, past customers. Lookalike audiences find new people who resemble your best existing customers, built from that same data."
      },
      {
        "question": "Do I need a large budget to run Meta Ads effectively?",
        "answer": "Meaningful results are possible at moderate budgets, but very small daily budgets can limit the algorithm's ability to gather enough data to optimize efficiently, we help calculate a realistic starting point during the account audit."
      },
      {
        "question": "Do you manage Meta Ads for businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we manage Meta Ads for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "media-buying",
      "tiktok-ads",
      "creative-content",
      "analytics-tracking"
    ],
    "metaTitle": "Meta Ads Management for Facebook & Instagram | Mahedi Hasan",
    "metaDescription": "Structured Meta Ads management for Facebook and Instagram. Conversions API setup, weekly creative testing, and transparent performance reporting.",
    "heroHook": "Nobody opens Facebook or Instagram looking for what you sell, the ad has to earn attention someone wasn't planning to give it, which is a fundamentally different job than showing up when someone searches. Mahedi Hasan manages Meta Ads campaigns for businesses in Dhaka and clients across the US, UK, Australia, Canada, and UAE, built around creative and targeting that actually stops a scroll instead of blending into it.",
    "quote": "On Meta, the ad has to do more work than the offer. Someone scrolling past isn't looking for you yet, the creative's job is to make them stop and reconsider that.",
    "offerings": [
      {
        "title": "CAMPAIGN STRATEGY & OBJECTIVE SETUP",
        "description": "Meta's own campaign objectives shape how the algorithm optimizes delivery, so getting this right early matters more than it looks like it should. Choosing the wrong campaign objective quietly tells Meta's algorithm to optimize for the wrong outcome from day one.",
        "bullets": [
          "Campaign Objective Selection: Choosing conversion, traffic, or awareness objectives based on what actually matters to your business, not the default suggestion.",
          "Funnel Stage Strategy: Structuring campaigns around where an audience sits cold, warm, or ready to convert, rather than one campaign trying to do everything.",
          "Budget Allocation & Bid Strategy: Distributing spend across campaign stages based on realistic performance potential.",
          "Placement Strategy: Deciding where ads actually run Feed, Stories, Reels based on where your specific audience engages, not a default blanket setting."
        ]
      },
      {
        "title": "AUDIENCE RESEARCH & TARGETING",
        "description": "Meta's targeting depth is a real advantage, and also easy to use badly without genuine research behind it. A broad, untested audience often performs worse than a smaller, genuinely relevant one, regardless of reach numbers.",
        "bullets": [
          "Interest & Behavior-Based Targeting: Building audiences around genuine buyer signals, not broad demographic guessing.",
          "Custom Audience Setup: Targeting people who've already interacted with your business, site visitors, past customers, email lists.",
          "Lookalike Audience Development: Finding new prospects who resemble your best existing customers, built from real conversion data.",
          "Audience Testing & Refinement: Testing multiple audience segments against each other to identify what actually performs."
        ]
      },
      {
        "title": "CREATIVE STRATEGY & DEVELOPMENT",
        "description": "On a platform built around scrolling, the creative is doing most of the actual persuasion work. The single biggest lever on Meta performance is usually creative, not targeting refinement - most underperforming accounts have a creative problem mislabeled as a targeting problem.",
        "bullets": [
          "Ad Creative Concepting: Developing visual and video concepts built around what actually stops a scroll in your specific category.",
          "Copywriting for Social: Headlines and captions written for how people actually read on Facebook and Instagram, not repurposed website copy.",
          "Video & Static Ad Production Guidance: Direction on format and style that performs well within Meta's specific placements.",
          "Creative Variation & Testing: Multiple creative angles tested against each other, since Meta creative fatigues faster than most advertisers expect."
        ]
      },
      {
        "title": "CONVERSION TRACKING & MEASUREMENT",
        "description": "Making sure Meta's own optimization has accurate data to actually work from. Meta's advertising algorithm learns from your conversion data, inaccurate tracking doesn't just hide problems, it actively misdirects future optimization.",
        "bullets": [
          "Meta Pixel & Conversions API Setup: Configuring tracking correctly, including server-side tracking as browser-based tracking becomes less reliable.",
          "Event Tracking Configuration: Setting up purchase, lead, and custom event tracking specific to what actually matters for your business.",
          "Attribution Window Review: Understanding how Meta credits conversions across its attribution settings.",
          "Cross-Platform Measurement: Connecting Meta data with broader analytics for a fuller picture beyond the platform's own reporting."
        ]
      },
      {
        "title": "ONGOING OPTIMIZATION & CREATIVE REFRESH",
        "description": "Meta campaigns need more frequent attention than search campaigns, since creative fatigue sets in faster than keyword performance typically declines. Meta Ads perform best paired with a landing page built for that specific traffic - see our Landing Page Development page for how that connects.",
        "bullets": [
          "Performance Monitoring: Regular review of frequency, cost-per-result, and creative-level performance data.",
          "Creative Refresh Scheduling: Rotating in new creative before fatigue meaningfully hurts performance, not after.",
          "Audience Expansion & Refinement: Adjusting targeting as performance data reveals what's actually working.",
          "Budget Reallocation: Shifting spend toward what's performing, away from what isn't, based on real results."
        ]
      },
      {
        "title": "Why Creative Carries More Weight on Meta Than Almost Anywhere Else",
        "description": "Search advertising and social advertising ask fundamentally different things about the advertiser, and it's worth understanding why. Search: Answering a Question Already Asked Someone searching has already expressed intent, the ad's job is mostly to be relevant and show up at the right moment. Meta: Creating Interest From Nothing Someone scrolling wasn't looking for you, the ad has to generate the interest a search ad gets to assume already exists, which is a creative problem before it's a targeting problem. Why That Changes the Management Approach Because the creative is doing the heavier lift, testing has to be continuous and fatigue has to be actively managed, a \"set it and check quarterly\" approach that might work reasonably on search tends to underperform badly here.",
        "bullets": []
      }
    ],
    "whyMatters": [
      "Meta rewards genuine creative and targeting effort more visibly than most platforms, and punishes neglect just as visibly.",
      "Creative Fatigue Is Real and Fast",
      "The same ad shown to the same audience repeatedly loses effectiveness within weeks, sometimes days at higher spend levels, a static creative library is a quietly declining one.",
      "Broad Targeting Isn't Automatically Efficient",
      "Meta's algorithm can find efficiency at scale, but that efficiency still depends on accurate conversion data and a genuinely relevant starting audience to learn from.",
      "The Platform's Depth Cuts Both Ways",
      "Meta's targeting and creative tools offer real depth, but that depth is exactly where inexperienced management tends to waste budget on unused or poorly configured options.",
      "Attention Is the Actual Currency Here",
      "Every scroll past your ad without a stop is a missed opportunity that a slightly better creative angle might have caught, small creative improvements often move performance more than targeting tweaks."
    ],
    "whyChooseUs": [
      "\"On Meta, the ad has to do more work than the offer. Someone scrolling past isn't looking for you yet, the creative's job is to make them stop and reconsider that.\" Creative-Led Strategy | Behavior-Based Audience Targeting | Continuous Creative Testing",
      "Managing Meta campaigns well means treating creative, audience, and measurement as equally important, not creative as an afterthought to targeting.",
      "Meta's own campaign objectives shape how the algorithm optimizes delivery, so getting this right early matters more than it looks like it should.",
      "* Campaign Objective Selection: Choosing conversion, traffic, or awareness objectives based on what actually matters to your business, not the default suggestion. * Funnel Stage Strategy: Structuring campaigns around where an audience sits cold, warm, or ready to convert, rather than one campaign trying to do everything. * Budget Allocation & Bid Strategy: Distributing spend across campaign stages based on realistic performance potential. * Placement Strategy: Deciding where ads actually run Feed, Stories, Reels based on where your specific audience engages, not a default blanket setting. Choosing the wrong campaign objective quietly tells Meta's algorithm to optimize for the wrong outcome from day one.",
      "Meta's targeting depth is a real advantage, and also easy to use badly without genuine research behind it.",
      "* Interest & Behavior-Based Targeting: Building audiences around genuine buyer signals, not broad demographic guessing. * Custom Audience Setup: Targeting people who've already interacted with your business, site visitors, past customers, email lists. * Lookalike Audience Development: Finding new prospects who resemble your best existing customers, built from real conversion data. * Audience Testing & Refinement: Testing multiple audience segments against each other to identify what actually performs. A broad, untested audience often performs worse than a smaller, genuinely relevant one, regardless of reach numbers.",
      "On a platform built around scrolling, the creative is doing most of the actual persuasion work.",
      "* Ad Creative Concepting: Developing visual and video concepts built around what actually stops a scroll in your specific category. * Copywriting for Social: Headlines and captions written for how people actually read on Facebook and Instagram, not repurposed website copy. * Video & Static Ad Production Guidance: Direction on format and style that performs well within Meta's specific placements. * Creative Variation & Testing: Multiple creative angles tested against each other, since Meta creative fatigues faster than most advertisers expect. The single biggest lever on Meta performance is usually creative, not targeting refinement - most underperforming accounts have a creative problem mislabeled as a targeting problem.",
      "Making sure Meta's own optimization has accurate data to actually work from.",
      "* Meta Pixel & Conversions API Setup: Configuring tracking correctly, including server-side tracking as browser-based tracking becomes less reliable. * Event Tracking Configuration: Setting up purchase, lead, and custom event tracking specific to what actually matters for your business. * Attribution Window Review: Understanding how Meta credits conversions across its attribution settings. * Cross-Platform Measurement: Connecting Meta data with broader analytics for a fuller picture beyond the platform's own reporting. Meta's advertising algorithm learns from your conversion data, inaccurate tracking doesn't just hide problems, it actively misdirects future optimization.",
      "Meta campaigns need more frequent attention than search campaigns, since creative fatigue sets in faster than keyword performance typically declines.",
      "* Performance Monitoring: Regular review of frequency, cost-per-result, and creative-level performance data. * Creative Refresh Scheduling: Rotating in new creative before fatigue meaningfully hurts performance, not after. * Audience Expansion & Refinement: Adjusting targeting as performance data reveals what's actually working. * Budget Reallocation: Shifting spend toward what's performing, away from what isn't, based on real results. Meta Ads perform best paired with a landing page built for that specific traffic - see our Landing Page Development page for how that connects. Why Creative Carries More Weight on Meta Than Almost Anywhere Else Search advertising and social advertising ask fundamentally different things about the advertiser, and it's worth understanding why. Search: Answering a Question Already Asked Someone searching has already expressed intent, the ad's job is mostly to be relevant and show up at the right moment. Meta: Creating Interest From Nothing Someone scrolling wasn't looking for you, the ad has to generate the interest a search ad gets to assume already exists, which is a creative problem before it's a targeting problem.",
      "Because the creative is doing the heavier lift, testing has to be continuous and fatigue has to be actively managed, a \"set it and check quarterly\" approach that might work reasonably on search tends to underperform badly here. Why Your Business Needs Real Meta Ads Management Meta rewards genuine creative and targeting effort more visibly than most platforms, and punishes neglect just as visibly.",
      "The same ad shown to the same audience repeatedly loses effectiveness within weeks, sometimes days at higher spend levels, a static creative library is a quietly declining one. Broad Targeting Isn't Automatically Efficient Meta's algorithm can find efficiency at scale, but that efficiency still depends on accurate conversion data and a genuinely relevant starting audience to learn from. The Platform's Depth Cuts Both Ways Meta's targeting and creative tools offer real depth, but that depth is exactly where inexperienced management tends to waste budget on unused or poorly configured options.",
      "Every scroll past your ad without a stop is a missed opportunity that a slightly better creative angle might have caught, small creative improvements often move performance more than targeting tweaks. Why We're Different",
      "Creative, targeting, and landing page alignment reviewed together, not managed by a media buyer disconnected from what the ad actually says or where it sends traffic. Creative-First, Not Targeting-First We treat creative as the primary performance lever here, testing and refreshing continuously rather than setting an ad and revisiting it occasionally.",
      "Based in Dhaka. Managing campaigns for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Full Account Access, No Black Box You retain ownership and full visibility into your own Meta Business account, nothing runs in a system you can't see into yourself.",
      "Campaigns structured around genuine funnel stages, with objectives chosen for what actually matters to your business.",
      "Interest, behavior, custom, and lookalike audiences built from real signals, not demographic guessing.",
      "Visual and copy concepts built specifically to stop a scroll, tested continuously against each other.",
      "Pixel and Conversions API configured correctly, so Meta's own algorithm is optimizing from accurate data.",
      "Regular monitoring and creative rotation, staying ahead of fatigue rather than reacting to it.",
      "Clear, regular reporting on conversions and cost-per-result, with full account access retained by you."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Management Fee"
      ],
      "rows": [
        [
          "",
          "Recommended Minimum Ad Spend"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Starter"
        ],
        [
          "",
          "৳15,000/month"
        ],
        [
          "",
          "৳20,000+/month"
        ],
        [
          "",
          "Businesses testing Meta Ads for the first time"
        ],
        [
          "",
          "Growth"
        ],
        [
          "",
          "৳25,000/month"
        ],
        [
          "",
          "৳45,000+/month"
        ],
        [
          "",
          "Established accounts scaling a validated strategy"
        ],
        [
          "",
          "Creative-Intensive"
        ],
        [
          "",
          "৳40,000/month"
        ],
        [
          "",
          "৳70,000+/month"
        ],
        [
          "",
          "Businesses needing frequent original creative production"
        ],
        [
          "",
          "Enterprise"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Custom"
        ],
        [
          "",
          "Large accounts, multi-market campaigns"
        ],
        [
          "",
          "Included at every tier:"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and manages Meta Ads accounts for businesses across Bangladesh and clients in the UAE, US, UK, Australia, and Canada, 20+ countries so far. Platform usage patterns, cost-per-result, and creative preferences all vary by region, and strategy accounts for that instead of applying one market's creative or targeting assumptions everywhere.\n\nFor businesses in Bangladesh, that includes accounting for local currency billing, bash-and-Nagad-aware landing pages for ecommerce clients, and creative that reflects how Bangladeshi audiences actually engage on Facebook and Instagram, not a directly imported international template."
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
      },
      {
        "question": "How is TikTok Ads management different from Meta or Instagram ads?",
        "answer": "TikTok generally requires more creative volume and faster iteration, since content fatigues quicker on the platform. Targeting also leans more on behavior and content interaction than the demographic-heavy targeting common on Meta."
      },
      {
        "question": "Do we need to work with creators, or can ads run with in-house content only?",
        "answer": "In-house content can work, but creator-produced and Spark Ads content typically outperforms studio-style ads on TikTok, since it matches what people expect to see in the feed."
      },
      {
        "question": "How much creativity do we actually need each month?",
        "answer": "It depends on budget and testing pace, but businesses running structured TikTok campaigns typically need several new video variations monthly rather than one or two, we scope this specifically during onboarding rather than assuming a fixed number."
      },
      {
        "question": "Can TikTok Shop be set up if we're already selling through Shopify or another platform?",
        "answer": "Yes, TikTok Shop can typically be connected to an existing product catalog rather than requiring a separate inventory system, though the exact setup depends on the platform in use."
      },
      {
        "question": "Do you provide this service for businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we manage TikTok Ads for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "meta-ads",
      "media-buying",
      "creative-content",
      "analytics-tracking"
    ],
    "metaTitle": "TikTok Ads Management Services | Mahedi Hasan",
    "metaDescription": "High-converting TikTok Ads management for e-commerce and lead generation. Native creative direction, Spark Ads, and TikTok Events API tracking.",
    "heroHook": "TikTok doesn't care how many followers an account has when it decides what to show next. The algorithm tests a video against a small audience first and only pushes it further if people actually watch, which means a two-week-old account with the right video can outperform an account that's been running ads for years. Mahedi Hasan provides TikTok Ads management for businesses in Dhaka and clients across the US, UK, Australia, Canada, and UAE, built around that reality instead of importing tactics that work on other platforms and hoping they translate.",
    "quote": "TikTok Ads management example showing an in-feed video ad",
    "whyChooseUs": [
      "Batch video production scoped from the start, not billed as a surprise add-on once the first set of ads goes stale. Spark Ads & Creator Management Handled Together Paid strategy and creator sourcing run by the same team, so campaigns aren't stitched together from separate vendors.",
      "Catalog and shoppable video setup handled alongside paid campaigns, for businesses selling products directly through TikTok. Reporting Built for a Fast-Moving Platform Performance reviewed frequently enough to catch fatigue and cut underperforming creative before it drains budget."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What's Covered"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "TikTok Ads Management - Standard"
        ],
        [
          "",
          "৳30,000/month (~$255 USD)"
        ],
        [
          "",
          "Campaign management, targeting, reporting, up to 4 native-style videos/month"
        ],
        [
          "",
          "Businesses starting structured TikTok testing"
        ],
        [
          "",
          "TikTok Ads Management - Creator & Spark Ads"
        ],
        [
          "",
          "৳45,000/month (~$385 USD)"
        ],
        [
          "",
          "Everything in Standard, plus creator sourcing, Spark Ads setup, and usage rights handling"
        ],
        [
          "",
          "Businesses wanting creator-driven creative at volume"
        ],
        [
          "",
          "TikTok Shop Package"
        ],
        [
          "",
          "৳40,000/month (~$340 USD)"
        ],
        [
          "",
          "Catalog setup, shoppable video, and Shop-focused campaign management"
        ],
        [
          "",
          "Product businesses selling through TikTok Shop"
        ],
        [
          "",
          "Included at every tier:"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and manages TikTok Ads for businesses across Bangladesh and serves clients in the US, UK, Australia, Canada, UAE and 20+ countries. TikTok's audience size, TikTok Shop availability, and creator ecosystem vary by market, so we confirm what's actually usable in a business's specific region before setting expectations."
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
      },
      {
        "question": "How much should I budget for Pinterest Ads?",
        "answer": "Most businesses see meaningful test results starting around ৳30,000–50,000/month in ad spend, separate from management fees, though this varies by category competitiveness and catalog size."
      },
      {
        "question": "Do I need a large product catalog to run Pinterest Ads?",
        "answer": "No. Catalog and Shopping Ads work best with a larger catalog, but awareness and consideration campaigns work fine for smaller product ranges or service businesses with strong visual content."
      },
      {
        "question": "How is Pinterest different from running the same budget on Meta?",
        "answer": "Pinterest generally has a longer consideration window and skews toward planning-stage intent rather than impulse engagement, so campaigns are usually judged over a longer timeframe and creative is built to be saved rather than just clicked."
      },
      {
        "question": "Can you manage Pinterest alongside our existing Meta or Google campaigns?",
        "answer": "Yes, we coordinate targeting and retargeting logic across platforms where it makes sense, so Pinterest and other channels aren't working against each other."
      },
      {
        "question": "Do you provide this service for businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we manage Pinterest Ads for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "media-buying",
      "creative-content",
      "social-media-management",
      "meta-ads"
    ],
    "metaTitle": "Pinterest Ads Management Services | Mahedi Hasan",
    "metaDescription": "Grow e-commerce and DTC sales with expert Pinterest Ads management: Shopping campaigns, Promoted Pins, Pinterest Tag setup, and transparent pricing.",
    "heroHook": "Most people open Pinterest already planning to buy something for a wedding, a home renovation, a wardrobe for a season that hasn't started yet. That's a different intent than scrolling for entertainment, and it changes what a Pinterest ad actually has to do. Mahedi Hasan provides Pinterest Ads management for businesses in Dhaka and clients across the US, UK, Australia, Canada, and UAE, building campaigns around that planning-stage intent instead of treating Pinterest like a smaller version of Instagram or Facebook.",
    "quote": "Pinterest Ads management examples showing product catalog Pins",
    "whyChooseUs": [
      "Strategy, creative, targeting, and catalog setup handled as one connected system, not separate handoffs, part of our broader paid advertising management work.",
      "Campaigns timed around when Pinterest search actually picks up for a category, not just launched reactively. Creative That's Built for the Platform Pins designed to function as saved content first, ad unit second. Clear, Regular Reporting Performance reported against the objective each campaign was actually built for, save rate and outbound clicks for awareness work, conversions and ROAS for catalog and retargeting campaigns."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What's Covered"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Pinterest Ads Management - Standard"
        ],
        [
          "",
          "৳25,000/month (~$210 USD)"
        ],
        [
          "",
          "Campaign management, targeting, reporting on up to 3 active campaigns"
        ],
        [
          "",
          "Businesses running a focused set of campaigns"
        ],
        [
          "",
          "Pinterest Ads Management - Catalog & Shopping"
        ],
        [
          "",
          "৳35,000/month (~$300 USD)"
        ],
        [
          "",
          "Everything in Standard, plus catalog feed setup, dynamic retargeting, and Collection Ads"
        ],
        [
          "",
          "Product/e-commerce businesses with a sizeable catalog"
        ],
        [
          "",
          "Creative-Only Package"
        ],
        [
          "",
          "৳12,000/month (~$100 USD)"
        ],
        [
          "",
          "Pin and video creative production without campaign management"
        ],
        [
          "",
          "Businesses managing their own ad account but needing creative support"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and manages Pinterest Ads for businesses across Bangladesh and serves clients in the US, UK, Australia, Canada, UAE, and 20+ Countries. Pinterest's user base and category strength vary meaningfully by market, so we check actual search volume and audience size for a business's specific category and region before setting expectations."
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
    "metaDescription": "CRO services combining heatmaps, session recordings, and structured A/B testing to increase conversions without more ad spend.",
    "heroHook": "Driving traffic to a website that doesn't convert is the most expensive mistake in digital marketing. Every friction point in your layout, copy, and checkout funnel directly reduces ROAS. We analyze user friction, session recordings, and click heatmaps to engineer high-converting digital storefronts.",
    "quote": "Doubling your conversion rate cuts your customer acquisition cost in half without spending an extra penny on ads.",
    "offerings": [
      {
        "title": "Full-Funnel Drop-Off & Friction Audit",
        "description": "Comprehensive heuristic and quantitative review of your traffic flow from ad landing page to order completion.",
        "bullets": [
          "Session recording analysis highlighting points of user hesitation",
          "Scroll heatmaps and dead-click detection across mobile and desktop",
          "Cart and checkout abandon analysis pinpointing payment hurdles",
          "Core Web Vitals and speed audit measuring friction on low-bandwidth networks"
        ]
      },
      {
        "title": "Mobile-First UX & Copy Optimization",
        "description": "Transforming confusing layouts into clean, high-conviction mobile journeys built for immediate comprehension.",
        "bullets": [
          "Value proposition clarification above the mobile fold",
          "Sticky add-to-cart and simplified 1-click checkout flows",
          "Strategic placement of trust seals, customer reviews, and guarantees",
          "Form field reduction cutting friction on lead generation forms"
        ]
      },
      {
        "title": "Hypothesis-Driven A/B Testing",
        "description": "Data-backed split testing to validate design and messaging changes before permanent implementation.",
        "bullets": [
          "Statistical significance calculation to prevent false positives",
          "Testing primary offers, pricing displays, and bundle incentives",
          "Hero section layout experiments comparing product demo vs social proof",
          "Documented test log with clear winning variants deployed directly"
        ]
      }
    ],
    "whyMatters": [
      "Over 70% of digital traffic in Bangladesh and global e-commerce comes from mobile devices. If mobile checkout is cumbersome, visitors abandon immediately.",
      "Conversion optimization turns non-performing ad campaigns into profitable ones without increasing media budget."
    ],
    "whyChooseUs": [
      "Direct code execution: Next.js and frontend engineering allows us to implement fixes directly without waiting on third-party developers.",
      "Rigorous qualitative and quantitative insights, not arbitrary design opinions."
    ],
    "pricingTable": {
      "headers": [
        "Engagement Model",
        "Scope & Investment"
      ],
      "rows": [
        [
          "Comprehensive CRO Audit & Roadmap",
          "৳35,000 – ৳60,000 ($350 – $600)"
        ],
        [
          "Ongoing Monthly CRO & Split Testing",
          "৳75,000 – ৳130,000/mo ($750 – $1,300/mo)"
        ]
      ],
      "note": "Audit covers complete mobile and desktop checkout pathways, speed benchmarks, and wireframes."
    },
    "serviceAreas": [
      "Dhaka",
      "Chittagong",
      "Bangladesh-wide",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "UAE"
    ]
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
      },
      {
        "question": "What are content writing services?",
        "answer": "Content writing services involve researching, planning, writing, editing, and delivering written content for business and marketing purposes.\n\nDepending on the project, this can include SEO blogs, website pages, landing pages, product descriptions, sales copy, emails, case studies, and content strategy."
      },
      {
        "question": "What types of content does Mahedi Hasan write?",
        "answer": "Mahedi Hasan provides SEO and blog writing, website content writing, landing page copywriting, product description writing, sales copywriting, email copywriting, case study writing, content rewriting, and content strategy support."
      },
      {
        "question": "What is SEO content writing?",
        "answer": "SEO content writing is content created around relevant search intent and topics, with appropriate structure, useful information, natural keyword usage, internal linking opportunities, and other on-page considerations where included in the scope.\n\nThe goal is to make the content useful for readers while supporting relevant search visibility."
      },
      {
        "question": "Is content writing the same as copywriting?",
        "answer": "No.\n\nContent writing is often focused on informing, educating, and building useful information. Copywriting is generally more focused on persuasion and action.\n\nMany businesses need both."
      },
      {
        "question": "Can you match our existing brand voice?",
        "answer": "Yes.\n\nWe can review your existing website, content examples, brand guidelines, terminology, and feedback to develop content that fits your established voice."
      },
      {
        "question": "Can you rewrite our existing website content?",
        "answer": "Yes. We can review and rewrite outdated, unclear, thin, repetitive, or poorly structured content based on the agreed project scope."
      },
      {
        "question": "Can you write product descriptions for a large ecommerce catalog?",
        "answer": "Yes.\n\nFor larger catalogs, we can establish a consistent structure and writing direction before producing descriptions at scale.\n\nThe final scope depends on product volume, available product information, research requirements, and catalog complexity."
      },
      {
        "question": "Do you provide Bangla content?",
        "answer": "Yes, where included in the project scope.\n\nWe can support Bangla, English, or bilingual content depending on the intended audience and communication requirements."
      },
      {
        "question": "How much does content writing cost in Bangladesh?",
        "answer": "There is no single price for every type of content.\n\nCost depends on content format, length, research depth, subject complexity, SEO requirements, number of pieces, revision scope, and turnaround time.\n\nOur starting packages provide a reference point, while the final quote is based on the actual project."
      },
      {
        "question": "Can you handle one-time content projects?",
        "answer": "Yes.\n\nWe work with businesses that need individual pieces as well as businesses that require ongoing monthly content support."
      },
      {
        "question": "Can you provide ongoing monthly content writing?",
        "answer": "Yes. Monthly engagements can cover an agreed mix of blog posts, website content, product content, landing pages, case studies, or other approved formats."
      },
      {
        "question": "Do you provide content strategy as well?",
        "answer": "Yes. Content strategy can be included when the project requires topic prioritization, content planning, content audits, keyword mapping, editorial calendars, or a broader content roadmap."
      },
      {
        "question": "Do you provide SEO keyword research?",
        "answer": "Yes, when SEO research is included in the agreed scope.\n\nFor SEO-focused projects, keyword and topic research can inform search intent, content structure, and topic prioritization."
      },
      {
        "question": "Do you guarantee Google rankings?",
        "answer": "No.\n\nNo responsible content provider can guarantee a specific Google ranking from writing alone.\n\nWe focus on creating useful, well-structured content aligned with the agreed search and business objectives."
      },
      {
        "question": "Do you serve businesses outside Bangladesh?",
        "answer": "Yes. Mahedi Hasan supports businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE."
      },
      {
        "question": "How do I get started?",
        "answer": "Tell us what type of content you need, your business and audience, the approximate volume, target market, and deadline.\n\nWe can then recommend the appropriate scope and provide a project estimate."
      }
    ],
    "relatedServices": [
      "seo",
      "seo-content-writing",
      "creative-content",
      "marketing-strategy"
    ],
    "metaTitle": "Content Marketing",
    "metaDescription": "Strategic content marketing built on pillar-and-cluster architecture — content that builds topical authority and ranks in search.",
    "heroHook": "Writing built to do something specific: rank, explain, persuade, sell, or build trust. Mahedi Hasan provides content writing services for SMEs, startups, ecommerce businesses, and established brands in Bangladesh and international markets. Our in-house team handles research, writing, editing, SEO integration, and revisions around the purpose of each piece.",
    "whyChooseUs": [
      "Content is handled by an in-house team rather than being passed between an unknown chain of external writers. This makes coordination easier when a project also involves SEO, website design, development, paid advertising, or other marketing work.",
      "A service page should make sense with its design. An SEO article should fit the site’s information architecture. A landing page should work with the campaign sending traffic to it. Because Mahedi Hasan also works across SEO, websites, advertising, and digital marketing, content can be developed with those surrounding requirements in mind.",
      "We do not start every project by asking, “How many words do you need?” We first ask what the content needs to accomplish, who it needs to reach, and where it fits within the wider customer journey.",
      "Your website should not sound like five different writers produced five different pages. We review existing content, references, brand guidelines, terminology, and feedback to keep the writing consistent across an engagement.",
      "Mahedi Hasan is based in Dhaka and supports businesses in Bangladesh as well as international markets, including the US, UK, Australia, Canada, and UAE. Content is adapted to the intended audience rather than treating every market as identical.",
      "Content goes through review before final delivery, and client feedback is incorporated within the agreed project scope. Where the subject requires specialist expertise or factual verification, we also rely on information and approvals provided by the client rather than inventing expertise or claims."
    ],
    "pricingTable": {
      "headers": [
        "Plan",
        "Starting Price",
        "What's Covered",
        "Best For"
      ],
      "rows": [
        [
          "Per-Piece",
          "From ৳3,000/piece",
          "Standard individual content such as selected blog or product-content projects",
          "One-off or occasional needs"
        ],
        [
          "Growth",
          "From ৳25,000/month",
          "4–6 pieces per month across agreed content types",
          "Businesses building a consistent content pipeline"
        ],
        [
          "Full Content Program",
          "From ৳45,000/month",
          "8–12 pieces per month, mixed content types, strategy support",
          "Businesses with ongoing content requirements"
        ],
        [
          "Enterprise",
          "Custom Quote",
          "High-volume, multi-market, complex, or specialized requirements",
          "Larger content operations"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Bangladesh: Mahedi Hasan provides content writing services for businesses across Bangladesh, including Dhaka and other locations. Depending on the audience and project, content can be produced in English, Bangla, or a suitable bilingual format. Local audience considerations, terminology, offers, and cultural context can be incorporated where relevant.\n\nInternational Markets: We also support businesses targeting markets such as the United States, the United Kingdom, Australia, Canada, the UAE, and other international markets. International content is developed around the intended audience and market rather than simply translating an existing piece word for word."
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
    "metaDescription": "Full-funnel marketing strategy connecting SEO, paid ads, content, and CRO into one aligned growth roadmap.",
    "heroHook": "Growth breaks down when marketing is fragmented across multiple uncoordinated vendors. Without an aligned 360 growth operating system, ad spend leaks from unoptimized landing pages, creative fails to convert, and attribution remains impossible. We build cohesive growth engines connecting strategy, creative, tech, and media.",
    "quote": "Tactics without strategy is the noise before defeat. Sustainable growth requires a predictable engine connecting brand offer, traffic acquisition, and customer retention.",
    "offerings": [
      {
        "title": "Full-Funnel Go-to-Market Architecture",
        "description": "Strategic blueprint defining ideal customer profiles, value propositions, and unfair category advantages.",
        "bullets": [
          "Customer pain point and buying trigger mapping",
          "Competitive positioning and market category differentiation",
          "Core offer structuring with high-perceived-value risk reversals",
          "Unified messaging framework across organic and paid channels"
        ]
      },
      {
        "title": "Channel Mix & Media Allocation",
        "description": "Systematic capital distribution balancing short-term cash flow with long-term brand equity.",
        "bullets": [
          "High-intent capture (Google Search & SEO) vs demand generation (Meta & TikTok)",
          "Customer acquisition cost (CAC) and payback window financial modeling",
          "Budget velocity benchmarks across growth stages",
          "Multichannel synergy ensuring organic content amplifies paid performance"
        ]
      },
      {
        "title": "Retention & Customer Lifetime Value (LTV) Engines",
        "description": "Automated customer journey workflows maximizing revenue from existing customer databases.",
        "bullets": [
          "Post-purchase email and WhatsApp automation sequences",
          "VIP customer reactivation and cross-sell campaign planning",
          "Subscription and recurring revenue retention strategies",
          "Customer feedback loops informing product and service improvements"
        ]
      }
    ],
    "whyMatters": [
      "Hiring isolated vendors for ads, SEO, and website design results in conflicting messages, finger-pointing, and disjointed customer journeys.",
      "A strategic growth framework ensures every marketing dollar directly funds measurable enterprise value."
    ],
    "whyChooseUs": [
      "Founded FrameCipher and scaled multi-million taka client campaigns with end-to-end accountability.",
      "Bridge between high-level business strategy and deep technical execution."
    ],
    "pricingTable": {
      "headers": [
        "Strategy Scope",
        "Investment Level"
      ],
      "rows": [
        [
          "Comprehensive Growth Architecture Blueprint",
          "৳50,000 – ৳90,000 ($500 – $900)"
        ],
        [
          "Fractional CMO & Ongoing Strategic Steering",
          "৳120,000 – ৳220,000/mo ($1,200 – $2,200/mo)"
        ]
      ],
      "note": "Deliverables include complete financial model, channel roadmap, creative briefs, and execution checklists."
    },
    "serviceAreas": [
      "Dhaka",
      "Chittagong",
      "Bangladesh-wide",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "UAE"
    ]
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
    "metaDescription": "GA4, Google Tag Manager, and server-side tracking implementation for accurate, privacy-resilient marketing data.",
    "heroHook": "Accurate tracking is the bedrock of profitable advertising and organic conversion. Without server-side tracking and verified conversion attribution, algorithms optimize blindly and ad budgets bleed. Mahedi Hasan engineers resilient tracking infrastructure using Google Tag Manager, GA4, Meta Conversions API (CAPI), and offline conversion imports.",
    "quote": "You cannot scale what you cannot accurately measure. In a post-iOS14 world, client-side browser pixels lose 20-40% of conversion signals. Server-side tracking restores truth to your ad spend.",
    "offerings": [
      {
        "title": "GA4 & Server-Side Google Tag Manager",
        "description": "Architecture setup on Cloud Run / Stape / AWS for reliable, first-party cookie measurement resistant to ad-blockers.",
        "bullets": [
          "Server container provisioning and custom sub-domain routing (sst.yourdomain.com)",
          "E-commerce data layer audit and standard event taxonomy mapping",
          "Cookieless ping integration and advanced user data protection compliance",
          "Cross-domain journey tracking across subdomains and external checkouts"
        ]
      },
      {
        "title": "Meta Conversions API (CAPI) & Deduplication",
        "description": "Redundant browser and server event pipeline with Event Match Quality (EMQ) scores consistently above 8.5/10.",
        "bullets": [
          "Server-to-server purchase, initiate checkout, and lead dispatch",
          "Unique event_id generation to ensure 100% duplicate protection",
          "Hashed email, phone number, and IP address parameter enrichment",
          "Elimination of iOS 14.5+ Safari tracking blindspots"
        ]
      },
      {
        "title": "Google Ads Enhanced Conversions",
        "description": "Secure, first-party hashed customer conversion transmission empowering Smart Bidding algorithms.",
        "bullets": [
          "Enhanced conversions for web and lead generation forms",
          "Offline conversion import (OCI) pipelines for qualified CRM leads",
          "Consent Mode v2 implementation meeting international privacy mandates",
          "Custom variable tracking for average order value and margin segmentation"
        ]
      },
      {
        "title": "Consolidated Attribution Dashboards",
        "description": "Custom Looker Studio dashboards giving executive clarity on true blended ROAS and customer acquisition cost.",
        "bullets": [
          "Blended MER (Marketing Efficiency Ratio) vs channel-reported ROAS",
          "First-click, last-click, and data-driven attribution comparison",
          "Real-time e-commerce revenue reconciliation against payment gateway receipts",
          "Automated weekly performance digest alerts for anomalies"
        ]
      }
    ],
    "whyMatters": [
      "Client-side browser pixels miss 20% to 40% of purchases due to Safari ITP, iOS privacy updates, and ad-blockers. When ad platforms lack conversion data, their machine learning optimizes for clicks instead of paying buyers.",
      "Inaccurate conversion attribution creates false confidence or unneeded panic—leading brands to pause winning ads and scale losing ones. Server-side tracking establishes a single source of financial truth."
    ],
    "whyChooseUs": [
      "Senior technical web and tracking architecture background—not surface-level plugin installations.",
      "Rigorous deduplication protocols preventing inflated metrics and double-counted sales.",
      "Custom server container setup with complete client ownership and zero recurring vendor lock-in."
    ],
    "pricingTable": {
      "headers": [
        "Scope Factor",
        "Investment Range"
      ],
      "rows": [
        [
          "Single Platform Server-Side CAPI",
          "৳25,000 – ৳40,000 ($250 – $400)"
        ],
        [
          "Full Omnichannel Tracking (GA4 + Meta CAPI + Google Ads)",
          "৳50,000 – ৳85,000 ($500 – $850)"
        ],
        [
          "Enterprise Multi-Domain & Offline CRM Pipeline",
          "৳90,000 – ৳150,000 ($900 – $1,500)"
        ]
      ],
      "note": "All setups include full data layer validation, container testing, and 30 days of post-launch signal monitoring."
    },
    "serviceAreas": [
      "Dhaka",
      "Chittagong",
      "Bangladesh-wide",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "UAE"
    ]
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
      },
      {
        "question": "Can you actually run ads inside ChatGPT right now?",
        "answer": "It depends on current platform availability, which changes over time. We track this directly and will tell you honestly what's genuinely accessible for your business today rather than assuming a fixed answer."
      },
      {
        "question": "Is it worth investing in this channel before it's fully proven?",
        "answer": "It depends on your risk tolerance and available budget. Small-scale, disciplined testing lets you build genuine early experience without significant risk, we don't recommend large commitments to a channel this early regardless of the business."
      },
      {
        "question": "How is this different from your AI Search Optimization service?",
        "answer": "AI Search Optimization (AEO/GEO) focuses on organic visibility, getting cited naturally in AI-generated answers. This service covers paid placement specifically, though the brand foundation work genuinely overlaps and supports both."
      },
      {
        "question": "What happens if the promised ad formats don't materialize the way expected?",
        "answer": "The brand entity and foundational work still holds value on its own, since it supports organic AI visibility regardless of how paid formats specifically develop, nothing in this engagement is wasted if the paid mechanics shift."
      },
      {
        "question": "Do you provide this service for businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we provide ChatGPT Ads management for clients in the US, UK, Australia, Canada, and UAE, subject to platform availability in each region."
      }
    ],
    "relatedServices": [
      "seo",
      "content-marketing",
      "analytics-tracking",
      "google-ads"
    ],
    "metaTitle": "ChatGPT Ads Strategy & Campaign Management | Mahedi Hasan",
    "metaDescription": "Eligibility-first ChatGPT Ads readiness, context-hint targeting, GEO alignment, and paid campaign management for Bangladesh and global brands.",
    "heroHook": "Being early to a channel that eventually matures is one of the few genuine advantages left in advertising, and being early to one that never does is just a cost. Mahedi Hasan helps businesses in Dhaka and clients across the US, UK, Australia, Canada, and UAE test and structure advertising within ChatGPT and similar AI assistants as sponsored formats become available, with the honesty this early a channel actually requires.",
    "quote": "Nobody claiming deep ChatGPT advertising expertise today is telling you the whole truth. What we can offer is genuine AI-platform experience and the discipline to test honestly rather than guess confidently.",
    "offerings": [
      {
        "title": "PLATFORM MONITORING & ACCESS SETUP",
        "description": "Sponsored placement options on AI platforms are still rolling out, and access itself is often the first hurdle. Chasing a feature that doesn't exist yet wastes time better spent on the parts of this channel that are actually actionable now.",
        "bullets": [
          "Availability & Eligibility Tracking: Monitoring when and where sponsored placement options actually become available to advertisers.",
          "Access & Account Setup: Getting your business set up and eligible as opportunities open, without you having to track platform announcements yourself.",
          "Format Understanding: Staying current on what ad formats actually exist at any given time, since this is changing faster than most channels ever have.",
          "Realistic Expectation Setting: Being direct about what's genuinely available today versus what's still speculative or in limited testing."
        ]
      },
      {
        "title": "BRAND ENTITY & VISIBILITY FOUNDATION",
        "description": "Whatever the specific ad mechanics end up being, a clearly structured brand presence is a genuine head start. The businesses positioned best when this channel matures will likely be the ones who built genuine AI visibility beforehand, not the ones who waited to react.",
        "bullets": [
          "Entity Consistency Review: Making sure your brand, products, and services are represented consistently everywhere AI systems draw information from.",
          "Structured Content Alignment: Connecting this work with AEO and GEO foundations, since the same clarity that helps organic AI citation likely helps sponsored visibility too.",
          "Topical Authority Assessment: Understanding how established your brand's presence already is in the areas you'd want to advertise around.",
          "Competitive AI Visibility Check: Seeing whether competitors are already establishing a stronger AI-visible presence than you are."
        ]
      },
      {
        "title": "CAMPAIGN TESTING & EARLY STRATEGY",
        "description": "Where sponsored options exist, testing needs to be treated as genuine experimentation, not a scaled-down version of a mature-channel campaign. Every test run here adds to genuine, first-hand knowledge that generic \"AI advertising trends\" content can't substitute for.",
        "bullets": [
          "Small-Scale Test Campaigns: Structured, limited-budget tests rather than committing significant spend to unproven mechanics.",
          "Format & Placement Experimentation: Trying available options directly rather than assuming they'll behave like search or social ads.",
          "Result Documentation: Careful tracking of what actually happens, since there's no established playbook yet to compare against.",
          "Rapid Iteration: Adjusting quickly based on real test results, given how fast this channel's own rules are still changing."
        ]
      },
      {
        "title": "CONVERSATIONAL BRAND MENTION MONITORING",
        "description": "Distinct from paid placement, tracking how your brand shows up in ChatGPT's actual conversational answers. This overlaps meaningfully with organic AI visibility work - see our AI Search Optimization (AEO/GEO) page for the fuller picture beyond paid placement specifically.",
        "bullets": [
          "Brand Mention Tracking: Monitoring when and how your business gets referenced in AI-generated conversations relevant to your category.",
          "Competitor Mention Comparison: Understanding who's currently getting surfaced for queries relevant to your business.",
          "Sentiment & Context Review: Checking not just whether you're mentioned, but how accurately and favorably.",
          "Gap Identification: Flagging where your brand should logically be surfacing and currently isn't."
        ]
      },
      {
        "title": "What Advertising on ChatGPT Actually Means Right Now",
        "description": "This channel deserves a direct, no-spin explanation rather than being folded into the same confident language used for mature platforms. What's Genuinely Available Sponsored placement options within ChatGPT and similar assistants are rolling out gradually and unevenly, with access, format, and availability changing over time rather than existing as one settled product. What's Still Developing The actual mechanics, how targeting works, how pricing gets determined, what genuinely moves performance, are still being defined by the platforms themselves, which means no provider anywhere has years of proven playbook to draw from yet. What's Worth Doing Regardless Brand entity clarity and topical authority, the foundation of good AEO and GEO work, position a business well no matter how the specific ad mechanics eventually settle, which makes this a reasonable place to start even before formal ad products fully mature. Our Honest Position We'll help you test early and access what's genuinely available, and we won't claim more certainty about outcomes than this channel currently allows anyone to have.",
        "bullets": []
      }
    ],
    "whyChooseUs": [
      "\"Nobody claiming deep ChatGPT advertising expertise today is telling you the whole truth. What we can offer is genuine AI-platform experience and the discipline to test honestly rather than guess confidently.\" Early-Mover Positioning | Grounded in Real AI Search Experience | Honest About What's Still Unproven",
      "Structuring for this channel touches both the emerging ad mechanics and the broader brand presence that supports them.",
      "Sponsored placement options on AI platforms are still rolling out, and access itself is often the first hurdle.",
      "* Availability & Eligibility Tracking: Monitoring when and where sponsored placement options actually become available to advertisers. * Access & Account Setup: Getting your business set up and eligible as opportunities open, without you having to track platform announcements yourself. * Format Understanding: Staying current on what ad formats actually exist at any given time, since this is changing faster than most channels ever have. * Realistic Expectation Setting: Being direct about what's genuinely available today versus what's still speculative or in limited testing. Chasing a feature that doesn't exist yet wastes time better spent on the parts of this channel that are actually actionable now.",
      "Whatever the specific ad mechanics end up being, a clearly structured brand presence is a genuine head start.",
      "* Entity Consistency Review: Making sure your brand, products, and services are represented consistently everywhere AI systems draw information from. * Structured Content Alignment: Connecting this work with AEO and GEO foundations, since the same clarity that helps organic AI citation likely helps sponsored visibility too. * Topical Authority Assessment: Understanding how established your brand's presence already is in the areas you'd want to advertise around. * Competitive AI Visibility Check: Seeing whether competitors are already establishing a stronger AI-visible presence than you are. The businesses positioned best when this channel matures will likely be the ones who built genuine AI visibility beforehand, not the ones who waited to react.",
      "Where sponsored options exist, testing needs to be treated as genuine experimentation, not a scaled-down version of a mature-channel campaign.",
      "* Small-Scale Test Campaigns: Structured, limited-budget tests rather than committing significant spend to unproven mechanics. * Format & Placement Experimentation: Trying available options directly rather than assuming they'll behave like search or social ads. * Result Documentation: Careful tracking of what actually happens, since there's no established playbook yet to compare against. * Rapid Iteration: Adjusting quickly based on real test results, given how fast this channel's own rules are still changing. Every test run here adds to genuine, first-hand knowledge that generic \"AI advertising trends\" content can't substitute for.",
      "Distinct from paid placement, tracking how your brand shows up in ChatGPT's actual conversational answers.",
      "* Brand Mention Tracking: Monitoring when and how your business gets referenced in AI-generated conversations relevant to your category. * Competitor Mention Comparison: Understanding who's currently getting surfaced for queries relevant to your business. * Sentiment & Context Review: Checking not just whether you're mentioned, but how accurately and favorably. * Gap Identification: Flagging where your brand should logically be surfacing and currently isn't. This overlaps meaningfully with organic AI visibility work - see our AI Search Optimization (AEO/GEO) page for the fuller picture beyond paid placement specifically. What Advertising on ChatGPT Actually Means Right Now This channel deserves a direct, no-spin explanation rather than being folded into the same confident language used for mature platforms. What's Genuinely Available Sponsored placement options within ChatGPT and similar assistants are rolling out gradually and unevenly, with access, format, and availability changing over time rather than existing as one settled product. What's Still Developing The actual mechanics, how targeting works, how pricing gets determined, what genuinely moves performance, are still being defined by the platforms themselves, which means no provider anywhere has years of proven playbook to draw from yet. What's Worth Doing Regardless Brand entity clarity and topical authority, the foundation of good AEO and GEO work, position a business well no matter how the specific ad mechanics eventually settle, which makes this a reasonable place to start even before formal ad products fully mature.",
      "We'll help you test early and access what's genuinely available, and we won't claim more certainty about outcomes than this channel currently allows anyone to have. Why Your Business Might Consider ChatGPT Ads Now Being early carries real tradeoffs, worth weighing honestly rather than assuming early is automatically right for every business.",
      "Channels tend to get more competitive and more expensive as they mature - a business testing now, even at small scale, builds real experience and potentially early positioning before costs rise.",
      "Committing a meaningful budget to unproven mechanics carries real risk, and businesses without spare testing budget may be better served focusing on established channels until this one matures further.",
      "Small-scale, disciplined testing lets a business build genuine experience without betting significant budget on a channel that's still finding its shape, which is the approach we actually recommend over an all-in commitment in either direction. Why We're Different",
      "AI search experience and paid media management under one roof, so this isn't handled by a media buyer with no actual background in how AI systems retrieve and surface content. We Won't Oversell an Unproven Channel No inflated claims about mastery of a space this new, genuine testing, honest reporting, and clear expectations about what's still unknown. Local & International Early-Adopter Experience Based in Dhaka. Testing and structuring AI advertising presence for clients across Bangladesh, the US, UK, Australia, Canada, and UAE.",
      "Our understanding of how AI systems retrieve and surface brands comes from active organic AI search optimization work, not a fresh, disconnected guess.",
      "Staying ahead of what's actually available, so you're positioned to move when opportunities open.",
      "AI-visibility groundwork that helps regardless of exactly how sponsored formats eventually settle.",
      "Small-scale, carefully documented experiments rather than large, unproven bets.",
      "Real visibility into how your brand already shows up in AI-generated answers today.",
      "Results reported plainly, without dressing up an early, uncertain channel as more settled than it is.",
      "Paid and organic AI visibility strategy coordinated, not run as disconnected efforts."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What's Covered"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Brand Foundation & Monitoring"
        ],
        [
          "",
          "৳15,000/month"
        ],
        [
          "",
          "Entity consistency work, mention tracking, availability monitoring"
        ],
        [
          "",
          "Businesses building AI visibility ahead of formal ad access"
        ],
        [
          "",
          "Early Access Test Campaign"
        ],
        [
          "",
          "৳20,000 setup + ad spend"
        ],
        [
          "",
          "Small-scale test campaign where sponsored options are available"
        ],
        [
          "",
          "Businesses ready to test with limited, disciplined budget"
        ],
        [
          "",
          "Combined AEO/GEO + Ads Package"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Full organic and paid AI visibility strategy together"
        ],
        [
          "",
          "Businesses wanting a coordinated approach to AI-native presence"
        ],
        [
          "",
          "Included at every tier:"
        ]
      ],
      "note": ""
    },
    "serviceAreas": "Mahedi Hasan is based in Dhaka and provides ChatGPT Ads management for businesses across Bangladesh and clients in the UAE, US, UK, Australia, Canada, and 20+ countries so far. Platform availability, language support, and access rollout can vary by region, and we track that directly rather than assuming uniform availability everywhere.\n\nFor businesses in Bangladesh, that includes monitoring availability specifically, since access to newer advertising features often rolls out unevenly by region and language before reaching full global availability."
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
      },
      {
        "question": "How much should I actually budget for paid advertising?",
        "answer": "It depends on your industry's competition and what a conversion is worth to your business. We help calculate a realistic starting budget during the free audit rather than recommending an arbitrary number."
      },
      {
        "question": "What's the difference between your management fee and my ad spend?",
        "answer": "The management fee pays for strategy, setup, and ongoing optimization; ad spend goes directly to the platform, usually billed separately to you, so you always know exactly what's paying for what."
      },
      {
        "question": "How is paid advertising different from SEO?",
        "answer": "Paid advertising produces traffic immediately but stops the moment it stops. SEO builds slower but keeps producing results without ongoing spend. Many businesses use both, since they solve different timing problems."
      },
      {
        "question": "Do you guarantee a specific return on ad spend?",
        "answer": "No, no agency can honestly guarantee a specific return, since results depend on your offer, market, and competition. We focus on transparent tracking and continuous optimization instead of unverifiable promises."
      },
      {
        "question": "Can you manage campaigns across multiple platforms at once?",
        "answer": "Yes, Google, Meta, LinkedIn, and the other platforms we manage are often coordinated as one strategy rather than run in isolation, since search, social, professional, and remarketing channels typically perform better together than separately."
      },
      {
        "question": "How do you decide which of these ten platforms my business should actually use?",
        "answer": "It depends on where your specific buyers actually spend attention and make decisions, a B2B service business needs a very different platform mix than an ecommerce store or a consumer app, and we recommend based on that rather than running every platform by default."
      },
      {
        "question": "Do you actually run ads inside ChatGPT?",
        "answer": "Yes, where the platform's sponsored placement options are available, it's an early, evolving channel, and we're upfront about it being less proven than Google or Meta, but early positioning in a channel like this can be a genuine advantage before it gets more competitive and expensive."
      },
      {
        "question": "Do you serve businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we manage paid advertising for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "google-ads",
      "meta-ads",
      "tiktok-ads",
      "analytics-tracking"
    ],
    "metaTitle": "Full-Stack Media Buying Services | Mahedi Hasan",
    "metaDescription": "Cross-channel media buying across Meta, Google, TikTok, LinkedIn, Pinterest, and ChatGPT Ads. Coordinated ad spend and conversion tracking.",
    "heroHook": "Short Description (under H1): Ad spend should be accountable. Mahedi Hasan provides paid advertising services across Google, Meta, LinkedIn, TikTok, Microsoft, Amazon, and other relevant platforms, with campaigns built around leads, sales, bookings, and measurable business outcomes. We connect campaign strategy with creative, landing pages, conversion tracking, and ongoing optimization for businesses in Bangladesh and international markets.",
    "quote": "Get Your Free Ad Account Audit",
    "offerings": [
      {
        "title": "Paid advertising covers the strategy, creative, and ongoing management needed to turn ad spend into actual leads or sales, and it typically includes platform strategy, campaign setup, ad creative, landing page alignment, and continuous optimization based on real performance data, not just platform-reported vanity metrics. It's built for businesses that want spend treated as an investment with a measurable return, not a monthly line item nobody's fully accountable for.",
        "description": "Google Ads Management Search and Shopping campaigns that capture people actively looking for what you sell, built around the terms and intent that actually drive purchases. Meta Ads Management Facebook and Instagram campaigns built around genuine buyer behavior and interest data, not just broad demographic guessing. LinkedIn Ads Management B2B-focused campaigns targeted by job title, industry, and company size, where the buyer research and decision-making around higher-consideration purchases actually happens. Pinterest Ads Management Visual discovery campaigns for businesses whose products or content fit how Pinterest users actually browse and plan purchases. ChatGPT Ads Management Advertising placements within ChatGPT and similar AI assistants as sponsored formats open up, an early-mover channel worth testing before it gets more competitive. TikTok Ads Management Short-form video campaigns built around the platform's specific content style and audience behavior, not a repurposed Instagram ad. Microsoft Ads Management Search campaigns on Bing and the Microsoft Search Network, often less competitive and lower-cost than Google Ads for the same search terms. Amazon Ads Management Sponsored product and brand campaigns built around Amazon's own search and buying behavior, for businesses selling directly on the platform. Remarketing Re-engaging people who've already shown interest, visited your site, added to cart, started a form, before that intent quietly disappears. Lead Generation Ads Campaigns built specifically around form fills and direct inquiries rather than ecommerce checkout, with lead quality treated as seriously as lead volume.",
        "bullets": []
      }
    ],
    "whyMatters": [
      "Every platform charges for something slightly different, and understanding that changes how a campaign should actually be built.",
      "Search Platforms: Paying for Intent",
      "Google Ads and Microsoft Ads charge when someone actively searching for what you offer clicks through, you're paying to reach people who've already expressed intent, which is why search campaigns often convert at a higher rate than platforms built around passive scrolling.",
      "Social & Discovery Platforms: Paying for Attention",
      "Meta, TikTok, and Pinterest charge based on reach and engagement among people who weren't necessarily looking for you, the campaign's job is to interrupt attention convincingly enough to create the intent search ads get to assume already exists.",
      "LinkedIn: Paying for Precision",
      "LinkedIn's targeting costs more per click than most platforms, but it buys access to job titles, industries, and company sizes that are hard to reach accurately anywhere else; the premium is for precision, not volume.",
      "Amazon: Paying for Purchase-Ready Traffic",
      "Amazon Ads put your product in front of people already in a buying mindset on the platform itself, competing directly against similar listings at the exact moment someone's deciding what to buy.",
      "Remarketing: Paying to Close the Loop",
      "Remarketing budgets are typically smaller but often carry the highest return, since you're spending to bring back someone who already showed real interest rather than trying to create interest from nothing.",
      "AI Platform Ads: Paying for a Conversation",
      "ChatGPT and similar AI assistants are early in monetizing sponsored placements, and the mechanic looks less like a search results page and more like being recommended inside an answer someone's actively asking for, a genuinely different kind of attention than a scroll feed or a search results list.",
      "Most effective strategies blend a few of these deliberately, rarely all nine at once, based on where your specific buyers actually spend their attention, not which platforms happen to be trending.",
      "Why This Service Matters",
      "Every week a poorly structured campaign keeps running, budget keeps flowing toward clicks that were never going to convert, and unlike organic SEO, paid advertising doesn't compound in your favor if it's set up wrong, it just keeps costing money at the same rate until someone actually fixes it. The upside cuts the same way: a properly optimized campaign can start producing results almost immediately, which is the real advantage paid advertising has over slower-building organic channels.",
      "A common misunderstanding treats ad platforms' own reported metrics, clicks, impressions, reach, as proof of success. A campaign can look excellent by every number the platform shows you and still be losing money once you check what actually happened after the click. The number that matters is what a click turned into, not how many happened."
    ],
    "whyChooseUs": [
      "We work with Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means campaign strategy accounts for real differences in platform costs, competition, and buyer behavior between markets rather than applying one region's playbook everywhere. Conversion tracking gets set up properly from day one here, not treated as an afterthought once someone finally asks where the budget actually went."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Management Fee"
      ],
      "rows": [
        [
          "",
          "Recommended Minimum Ad Spend"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Starter"
        ],
        [
          "",
          "৳20,000/month"
        ],
        [
          "",
          "৳30,000+/month"
        ],
        [
          "",
          "Businesses testing paid advertising for the first time"
        ],
        [
          "",
          "Growth"
        ],
        [
          "",
          "৳35,000/month"
        ],
        [
          "",
          "৳60,000+/month"
        ],
        [
          "",
          "Businesses scaling an already-validated campaign"
        ],
        [
          "",
          "Ecommerce / Multi-Platform"
        ],
        [
          "",
          "৳55,000/month"
        ],
        [
          "",
          "৳100,000+/month"
        ],
        [
          "",
          "Ecommerce stores running Google, Meta, and Amazon Ads together"
        ],
        [
          "",
          "Enterprise"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Custom"
        ],
        [
          "",
          "Large budgets, multi-platform or multi-market campaigns"
        ],
        [
          "",
          "A free initial audit and consultation is included before any paid commitment, so you know exactly what you're paying for and why."
        ]
      ],
      "note": ""
    },
    "serviceAreas": [
      "Dhaka",
      "Chittagong",
      "Sylhet",
      "Bangladesh-wide",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "UAE"
    ]
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
      },
      {
        "question": "How is social media management different from paid social advertising?",
        "answer": "Social media management covers your organic, unpaid presence, content, posting, and community engagement. Paid advertising targets specific audiences with a budget behind it for faster, more controllable results. Most businesses eventually benefit from both working together."
      },
      {
        "question": "Do you create original content, or just post what we provide?",
        "answer": "Both are available, depending on your plan, some businesses provide their own photography and video for us to schedule and manage, others want full content creation included."
      },
      {
        "question": "Which platforms should my business actually be on?",
        "answer": "It depends on where your specific audience actually spends time, we help identify the right platform mix during the initial audit rather than recommending all five by default."
      },
      {
        "question": "How quickly will we see growth?",
        "answer": "Meaningful growth typically becomes visible within two to three months of consistent management, though this varies by platform, industry, and your starting point; we don't promise a guaranteed timeline since platform algorithms are outside anyone's direct control."
      },
      {
        "question": "Do you handle responding to comments and messages, or just posting?",
        "answer": "Community management, including timely responses to comments and messages, is a core part of the service, an unanswered question sitting publicly for days reflects on the business as much as the content itself."
      },
      {
        "question": "Do you serve businesses outside Bangladesh?",
        "answer": "Yes, alongside Bangladeshi businesses, we manage social media for clients in the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "creative-content",
      "meta-ads",
      "tiktok-ads",
      "content-marketing"
    ],
    "metaTitle": "Social Media Management Services | Mahedi Hasan",
    "metaDescription": "Platform-specific social media management for Facebook, Instagram, LinkedIn, and Pinterest. Content calendars, bilingual community care, and monthly analytics.",
    "heroHook": "Short Description (under H1): A social presence that actually looks after itself, content planned, posted, and engaged consistently across every platform that matters, handled by one in-house team. Get a free social audit and see what's actually working right now.\n\nAn Inactive Profile Says Something About a Business, Whether That's the Intended Message or Not\n\nA business page that hasn't posted in six weeks, hasn't responded to a comment in longer, tells a visitor something about the business behind it before they've read a single word of actual content. Mahedi Hasan manages social media presence for SMEs, startups, and personal brands in Bangladesh, and for international clients across the US, UK, Australia, Canada, UAE, and 20+ countries across Facebook, Instagram, LinkedIn, TikTok, and YouTube, handled by one in-house team instead of a single overworked person trying to keep five platforms simultaneously alive. Curious what your current profiles are actually communicating? A free audit will tell you.",
    "quote": "See What Your Profiles Say About You",
    "offerings": [
      {
        "title": "Social media management covers the ongoing content, community engagement, and platform-specific strategy needed to maintain an active, consistent presence, and it typically includes content planning, platform-specific posting, community response, and monthly performance reporting, not just a content calendar handed over and left unmanaged. It's built for businesses that want their social presence to actually reflect well on them, not just technically exist.",
        "description": "Facebook Management Page management, content posting, and community engagement built around how Facebook audiences actually use the platform today, less about broad organic reach, which has declined significantly for business pages over the years, and more about community building, customer service, local discovery, and serving as a trust signal buyers check before purchasing. Includes post scheduling, Facebook Group management where relevant, event promotion, and review monitoring. Instagram Management Feed posts, Stories, Reels, and Guides managed around Instagram's visual-first culture and its algorithm's current preference for short-form video and genuine engagement over follower count alone. Includes content planning across formats, hashtag and caption strategy, Stories interaction features (polls, questions, links), and coordination with influencer or creator partnerships where relevant. LinkedIn Management Company page management alongside, where relevant, ghostwriting and posting support for founder or executive personal profiles, since LinkedIn's algorithm still favors personal profile content over company pages for reach. Includes thought leadership content, industry commentary, employee advocacy encouragement, and positioning built around B2B credibility rather than consumer-style engagement tactics. TikTok Management Short-form video content built around TikTok's specific format conventions, native editing style, trending audio and formats used deliberately, and a posting cadence suited to how the platform's discovery algorithm actually surfaces content to new audiences, not just existing followers. Includes trend monitoring, content concepting, and captions written for how TikTok users actually search and browse. YouTube Management Channel management, upload strategy, and on-platform optimization for a channel that rewards long-term consistency and search-optimized metadata more than almost any other platform. Includes title, description, and tag optimization for YouTube's own search function, thumbnail strategy, playlist organization, and community tab engagement, alongside a realistic upload schedule your team or ours can actually sustain. Content Calendar & Strategy The planning layer underneath everything else, deciding what gets posted where, in what format, and why, before content gets created under time pressure. Includes content pillar development, platform-specific format planning, key date and campaign alignment, and a documented calendar your team can review and provide input on ahead of time, not a plan revealed only as posts go live. Community Management Responding to comments, direct messages, and mentions across platforms in a timely, on-brand way, including flagging genuine customer service issues to your team and moderating spam or inappropriate content. An unanswered question or complaint sitting publicly for days reflects on the business as much as any post does, and response time is itself a signal both platforms and potential customers notice. Monthly Reporting & Analytics Clear reporting on engagement rate, follower growth, reach, and content performance by format and platform, with context explaining what the numbers actually mean for your business rather than a raw export of platform-native metrics. Includes identifying which content types are genuinely working, so strategy adjusts based on real performance rather than assumption.",
        "bullets": []
      },
      {
        "title": "Where This Fits Next to Paid Advertising",
        "description": "Social media management and paid social advertising sound similar and solve genuinely different problems. Organic: Building a Presence Over Time Social media management is about the ongoing, unpaid presence, the content, the community responses, the consistency that builds an audience gradually and keeps existing followers engaged. Paid: Buying Specific, Immediate Reach Paid social advertising, covered under our separate Paid Advertising services, targets specific audiences with a budget behind it, built for faster, more controllable results tied to a campaign objective. Why Most Businesses Eventually Need Both An active, well-managed organic presence makes paid ads perform better, since a visitor who clicks an ad and lands on an inactive, poorly maintained profile often loses trust immediately, the two genuinely reinforce each other rather than competing for the same budget.",
        "bullets": []
      }
    ],
    "whyMatters": [
      "Every week a social profile sits inactive, the businesses actively posting and engaging keep building an audience relationship that's harder to catch up to later, social growth compounds through consistency in a way that's difficult to shortcut once a gap has opened up. The cost of neglect isn't always obvious either: a potential customer checking a business's Instagram before deciding to reach out, seeing nothing posted in months, forms an impression before any actual product or service quality gets a chance to matter.",
      "A common misunderstanding treats social media as something that runs itself once a few posts go up. It doesn't. Each platform has its own rhythm, its own content conventions, and its own audience expectations, a strategy that ignores those differences and posts the same content everywhere usually underperforms on every platform at once, rather than succeeding broadly."
    ],
    "whyChooseUs": [
      "We work with Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means content strategy accounts for real platform and audience differences between markets rather than one region's posting habits applied everywhere. Community management here means actual timely responses, not a monthly content drop with nobody watching the comments in between."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Starting Price"
      ],
      "rows": [
        [
          "",
          "What's Covered"
        ],
        [
          "",
          "Best For"
        ],
        [
          "",
          "Essential"
        ],
        [
          "",
          "৳20,000/month"
        ],
        [
          "",
          "2 platforms, standard posting frequency, basic community management"
        ],
        [
          "",
          "Small businesses starting out"
        ],
        [
          "",
          "Growth"
        ],
        [
          "",
          "৳35,000/month"
        ],
        [
          "",
          "Up to 4 platforms, increased frequency, active community management"
        ],
        [
          "",
          "Growing businesses building real presence"
        ],
        [
          "",
          "Full Presence"
        ],
        [
          "",
          "৳55,000/month"
        ],
        [
          "",
          "All 5 platforms, original content production, dedicated community management"
        ],
        [
          "",
          "Businesses wanting comprehensive coverage"
        ],
        [
          "",
          "Enterprise"
        ],
        [
          "",
          "Custom Quote"
        ],
        [
          "",
          "Multi-brand or multi-market management, dedicated team allocation"
        ],
        [
          "",
          "Large or multi-location businesses"
        ],
        [
          "",
          "A free initial audit and consultation is included before any paid commitment, so you know exactly what you're paying for."
        ]
      ],
      "note": ""
    },
    "serviceAreas": [
      "Dhaka",
      "Chittagong",
      "Sylhet",
      "Bangladesh-wide",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "UAE"
    ]
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
      },
      {
        "question": "What makes this different from a regular website design service?",
        "answer": "A regular design service typically delivers a visually finished site. Business website development, as we scope it, includes site architecture built around your sales funnel and integration with your CRM. The site is built to function as part of your sales process."
      },
      {
        "question": "Do you integrate with the CRM or marketing tools we already use?",
        "answer": "In most cases, yes, integration with common CRM and marketing platforms is part of the build. Specific compatibility depends on the tool, so we confirm this during the initial consultation."
      },
      {
        "question": "How long does a business website build take?",
        "answer": "Typically 4 to 8 weeks, depending on the complexity of the tech stack, custom features, and CRM integrations required."
      },
      {
        "question": "Do you work with businesses outside Bangladesh?",
        "answer": "Yes, we work with clients across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE."
      }
    ],
    "relatedServices": [
      "seo",
      "google-ads",
      "cro",
      "website-development"
    ],
    "metaTitle": "Website Marketing Services in Bangladesh | Mahedi Hasan",
    "metaDescription": "Integrated website marketing in Bangladesh: SEO, Local SEO, Google Business Profile, eCommerce optimization, and Answer Engine Optimization (AEO).",
    "heroHook": "Mahedi Hasan builds business websites for SMEs, startups, and corporate brands that need a site that actually generates leads, not a digital brochure. Whether you're a growing business in Dhaka or an international company across the US, UK, Australia, Canada, or UAE, our development services deliver a site built to work as part of your sales process.",
    "quote": "If you're tired of a website that looks fine but doesn't generate a single lead, Mahedi Hasan builds sites meant to work, not just display.",
    "offerings": [
      {
        "title": "STRATEGY & ARCHITECTURE",
        "description": "Every business website starts with a plan built around your sales funnel, not a generic template sitemap. Good architecture means visitors find what they need without friction and take the next step.",
        "bullets": [
          "Buyer Journey Mapping: Structuring pages around how customers actually decide.",
          "Site Architecture: Clear navigation built for conversion, not just aesthetics.",
          "Competitor Review: Identifying what's missing from sites you're up against.",
          "Content Planning: Defining what each page needs to say and do."
        ]
      },
      {
        "title": "UI/UX DESIGN",
        "description": "Design that looks professional while guiding visitors toward an inquiry, not just scrolling past. Design isn't decoration here; every layout choice is tied to a reason a visitor should act.",
        "bullets": [
          "Wireframing: Mapping layout and flow before visual design begins.",
          "Conversion-Focused Layout: CTAs and forms placed where decisions happen.",
          "Brand-Aligned Visuals: Design that matches how your business presents itself.",
          "Mobile-First Design: Built for the device most visitors actually use."
        ]
      },
      {
        "title": "DEVELOPMENT & CRM INTEGRATION",
        "description": "The technical build that connects your website to the tools your sales team already uses. A website that doesn't talk to your CRM is a website your sales team has to work around.",
        "bullets": [
          "Custom Development: Clean, maintainable code, not bloated page-builder output.",
          "CRM Integration: Connecting forms and lead capture to your existing systems.",
          "Analytics Setup: Tracking visitor behavior and conversion points from day one.",
          "Third-Party Integrations: Booking tools, live chat, or marketing platforms as needed."
        ]
      },
      {
        "title": "TECHNICAL PERFORMANCE",
        "description": "Speed and stability that keep visitors on the page long enough to convert. Technical performance is invisible when it works, and costly when it doesn't.",
        "bullets": [
          "Speed Optimization: Fast load times across devices and connection speeds.",
          "Mobile Responsiveness: Full functionality on every screen size.",
          "Security Setup: SSL, secure hosting practices, and basic hardening.",
          "Clean Code Structure: Built to be maintained and extended, not rebuilt in a year."
        ]
      },
      {
        "title": "ONGOING SUPPORT & MAINTENANCE",
        "description": "A website's job isn't done at launch it needs regular attention to stay secure, fast, and current as your business changes. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement.",
        "bullets": [
          "Security Monitoring & Updates: Keeping core software, plugins, and dependencies current and patched.",
          "Backup & Recovery: Regular backups so a recoverable version of the site always exists.",
          "Performance Checks: Monitoring speed and uptime, and fixing issues before visitors notice them.",
          "Content & Feature Updates: Small changes and additions handled without a full redevelopment project."
        ]
      }
    ],
    "whyMatters": [
      "A website isn't a one-time project; it's infrastructure your business depends on every day.",
      "Organic Search Still Drives Most Traffic",
      "A well-built site supports SEO from the ground up, so the visibility you build through content and search doesn't get undercut by a slow or poorly structured site.",
      "Visitors judge a business by its website within seconds. A site that looks and functions professionally signals that the business behind it is, too.",
      "Leads That Actually Convert",
      "A site built around your buyer journey turns visits into inquiries traffic without a conversion path is traffic you paid for and lost.",
      "One-Time Build, Long-Term Asset",
      "Unlike ad spend, a well-built website keeps working after launch, it's infrastructure, not a recurring cost with no lasting value."
    ],
    "whyChooseUs": [
      "\"If you're tired of a website that looks fine but doesn't generate a single lead, Mahedi Hasan builds sites meant to work, not just display.\" Lead-Focused | In-House Team | Global & Local Experience",
      "We offer end-to-end website development tailored to how your business actually sells.",
      "Every business website starts with a plan built around your sales funnel, not a generic template sitemap.",
      "* Buyer Journey Mapping: Structuring pages around how customers actually decide. * Site Architecture: Clear navigation built for conversion, not just aesthetics. * Competitor Review: Identifying what's missing from sites you're up against. * Content Planning: Defining what each page needs to say and do. Good architecture means visitors find what they need without friction and take the next step.",
      "Design that looks professional while guiding visitors toward an inquiry, not just scrolling past.",
      "* Wireframing: Mapping layout and flow before visual design begins. * Conversion-Focused Layout: CTAs and forms placed where decisions happen. * Brand-Aligned Visuals: Design that matches how your business presents itself. * Mobile-First Design: Built for the device most visitors actually use. Design isn't decoration here; every layout choice is tied to a reason a visitor should act.",
      "The technical build that connects your website to the tools your sales team already uses.",
      "* Custom Development: Clean, maintainable code, not bloated page-builder output. * CRM Integration: Connecting forms and lead capture to your existing systems. * Analytics Setup: Tracking visitor behavior and conversion points from day one. * Third-Party Integrations: Booking tools, live chat, or marketing platforms as needed. A website that doesn't talk to your CRM is a website your sales team has to work around.",
      "Speed and stability that keep visitors on the page long enough to convert.",
      "* Speed Optimization: Fast load times across devices and connection speeds. * Mobile Responsiveness: Full functionality on every screen size. * Security Setup: SSL, secure hosting practices, and basic hardening. * Clean Code Structure: Built to be maintained and extended, not rebuilt in a year. Technical performance is invisible when it works, and costly when it doesn't.",
      "A website's job isn't done at launch it needs regular attention to stay secure, fast, and current as your business changes.",
      "* Security Monitoring & Updates: Keeping core software, plugins, and dependencies current and patched. * Backup & Recovery: Regular backups so a recoverable version of the site always exists. * Performance Checks: Monitoring speed and uptime, and fixing issues before visitors notice them. * Content & Feature Updates: Small changes and additions handled without a full redevelopment project. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Development Partner A website isn't a one-time project; it's infrastructure your business depends on every day.",
      "A well-built site supports SEO from the ground up, so the visibility you build through content and search doesn't get undercut by a slow or poorly structured site.",
      "Visitors judge a business by its website within seconds. A site that looks and functions professionally signals that the business behind it is, too.",
      "A site built around your buyer journey turns visits into inquiries traffic without a conversion path is traffic you paid for and lost. One-Time Build, Long-Term Asset Unlike ad spend, a well-built website keeps working after launch, it's infrastructure, not a recurring cost with no lasting value. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one.",
      "Strategy, design, development, and integration handled by one team, not handed off between freelancers who've never spoken to each other.",
      "We don't start with a template. We start with how your business actually gets leads, then build the site around that.",
      "Based in Dhaka, working with clients across Bangladesh and internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage of architecture, design, and development goes through your review and approval before we move forward.",
      "We start by understanding your business goals, current site gaps, and sales process before any design begins.",
      "Structured navigation and page planning built around your buyer journey, not a generic template.",
      "Conversion-focused layouts that balance professional appearance with a clear path to action.",
      "Clean custom development with CRM and marketing-tool integration built in, not bolted on later.",
      "Speed, mobile responsiveness, and security are handled as standard, not an upsell.",
      "Review checkpoints at every stage, so you approve the direction before it's built, not after."
    ],
    "pricingTable": {
      "headers": [
        "",
        "Launch Kit"
      ],
      "rows": [
        [
          "",
          "Growth Build"
        ],
        [
          "",
          "Enterprise Tech Build"
        ],
        [
          "",
          "Best for"
        ],
        [
          "",
          "New businesses needing a focused, conversion-ready foundational site"
        ],
        [
          "",
          "Established SMEs needing CRM integration and deeper architecture"
        ],
        [
          "",
          "Corporate brands with complex stack integrations and custom requirements"
        ],
        [
          "",
          "Starting Price"
        ],
        [
          "",
          "৳45,000 ($499)"
        ],
        [
          "",
          "৳90,000 ($999)"
        ],
        [
          "",
          "৳180,000+ ($1,999+) / Custom Quote"
        ],
        [
          "",
          "Page Count"
        ],
        [
          "",
          "Up to 5 pages"
        ],
        [
          "",
          "Up to 15 pages"
        ],
        [
          "",
          "Up to 40+ pages"
        ],
        [
          "",
          "Delivery Time"
        ],
        [
          "",
          "~1 week"
        ],
        [
          "",
          "~2 weeks"
        ],
        [
          "",
          "~4–8 weeks"
        ],
        [
          "",
          "Strategy & Consultation"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Core Site Architecture"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included (advanced)"
        ],
        [
          "",
          "Included (advanced)"
        ],
        [
          "",
          "UI/UX Design"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Responsive Development & Hosting Setup"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Basic Lead Capture Forms"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Speed & SEO Optimization"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Revisions"
        ],
        [
          "",
          "3"
        ],
        [
          "",
          "5"
        ],
        [
          "",
          "10"
        ],
        [
          "",
          "CRM Integration"
        ],
        [
          "",
          "Not included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included (multi-system)"
        ],
        [
          "",
          "Analytics & Conversion Tracking Setup"
        ],
        [
          "",
          "Not included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Included"
        ],
        [
          "",
          "Custom Functionality"
        ],
        [
          "",
          "Not included"
        ],
        [
          "",
          "Included (as scoped)"
        ],
        [
          "",
          "Included (full custom)"
        ]
      ],
      "note": ""
    },
    "pricingPackages": [
      {
        "name": "Launch Kit",
        "price": "৳XX,XXX starting price",
        "features": [
          "Strategy & Consultation",
          "Core Site Architecture (up to X pages)",
          "UI/UX Design",
          "Standard Development & Hosting Setup",
          "Basic Lead Capture Forms",
          "Mobile Responsive Build"
        ]
      },
      {
        "name": "Growth Build",
        "price": "৳XX,XXX starting price",
        "features": [
          "CRM Integration",
          "Advanced Site Architecture",
          "Analytics & Conversion Tracking Setup",
          "Custom Functionality (as scoped)",
          "Extended Launch Support"
        ]
      }
    ],
    "serviceAreas": "Mahedi Hasan is based in Dhaka, Bangladesh, and builds business websites for companies across Bangladesh as well as clients worldwide, including the UAE, the US, the UK, Australia, and Canada. We've delivered projects for clients in 20+ countries across the globe, so our process is built to handle different market expectations and buyer behavior, not a single-market template applied everywhere.\n\nFor businesses in Dhaka, this includes a team that understands local buyer behavior, including how Bangladeshi decision-makers research vendors online, alongside the technical and communication standards expected by international clients."
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
      },
      {
        "question": "What is included in content creation services?",
        "answer": "Content creation can include video production, short-form video, photography, graphic design, motion graphics, branding, social media graphics, and other agreed creative production. The exact deliverables depend on your project scope."
      },
      {
        "question": "Do you create both video and photography?",
        "answer": "Yes. Mahedi Hasan can coordinate video and photography production under the same creative team when both are required for a project."
      },
      {
        "question": "Do you create Reels, Shorts, and TikTok videos?",
        "answer": "Yes. We produce short-form vertical video for platforms such as Instagram Reels, YouTube Shorts, and TikTok, with the exact format and deliverables defined during project planning."
      },
      {
        "question": "Can you create content for paid advertising?",
        "answer": "Yes. Video, photography, motion graphics, and graphic assets can be produced for paid advertising when that is part of the agreed project scope."
      },
      {
        "question": "Do you provide product photography?",
        "answer": "Yes. Product photography can be produced for ecommerce, websites, advertising, social media, catalogs, and other commercial uses."
      },
      {
        "question": "Can you create content from footage we already have?",
        "answer": "Yes. Editing-only projects can be considered when you already have suitable footage, photographs, or other source materials."
      },
      {
        "question": "Can you create content for our existing brand identity?",
        "answer": "Yes. We review your existing brand guidelines and visual references before production so new content follows the established visual direction."
      },
      {
        "question": "Can you create a brand identity and logo as part of content creation?",
        "answer": "Yes. Logo design and branding are available as related creative services. Larger branding projects can be scoped separately when a complete identity system is required."
      },
      {
        "question": "Do you provide source files and raw footage?",
        "answer": "That depends on the project and agreement. Final deliverables are defined in the proposal, while source files, editable files, raw footage, and other production materials can be included when agreed."
      },
      {
        "question": "Can I use the content for advertising?",
        "answer": "Yes, where the agreed scope and relevant licensing allow it. Usage rights for third-party music, stock assets, talent, locations, or other licensed materials should be confirmed as part of the project."
      },
      {
        "question": "Do you provide content creation outside Bangladesh?",
        "answer": "Yes. Mahedi Hasan works with businesses in Bangladesh and international clients across the US, UK, Australia, Canada, and UAE. The production arrangement depends on the project location and requirements."
      },
      {
        "question": "How long does content creation take?",
        "answer": "It depends on the production. Simple creative assets may take a few business days, while larger video, photography, branding, or campaign projects can take several weeks. Your proposal confirms the actual timeline."
      },
      {
        "question": "Do you offer ongoing monthly content creation?",
        "answer": "Yes. Ongoing production can be structured around a monthly content requirement, with the exact formats, volume, production schedule, and deliverables agreed in advance."
      }
    ],
    "relatedServices": [
      "content-marketing",
      "seo-content-writing",
      "social-media-management",
      "seo"
    ],
    "metaTitle": "Creative Content Services That Rank & Convert | Mahedi Hasan",
    "metaDescription": "Research-led creative content writing across ten specialized formats: articles, product descriptions, website copy, PR, and email newsletters.",
    "heroHook": "Your brand needs more than a content plan. It needs content that actually gets made.\n\nMahedi Hasan provides Content Creation Services for businesses that need professional video, photography, motion graphics, branding, and design produced under one coordinated creative team.\n\nWe create content for businesses in Bangladesh and international clients across the US, UK, Australia, Canada, and UAE. Every project is planned around your brand, audience, platform, and production requirements.",
    "quote": "Get a Free Production Consultation",
    "offerings": [
      {
        "title": "Video Production",
        "description": "We produce promotional, corporate, product, brand, campaign, and other commercial videos from concept through final delivery. Depending on the project, production can include creative direction, scripting or outlines, shot planning, filming, editing, sound work, color correction, motion graphics, captions, and platform-specific exports. The exact production setup depends on the project's goals, locations, talent, equipment, duration, and required output.",
        "bullets": [
          "Promotional, corporate, product, and campaign videos",
          "Creative direction, scripting, and shot planning",
          "Studio and on-location filming with high-end optics",
          "Video editing, color grading, sound design, and captions",
          "Platform-specific exports in 16:9, 9:16, 1:1, and 4:5"
        ]
      },
      {
        "title": "Short-Form Video for Reels, Shorts & TikTok",
        "description": "Short-form content needs a different production approach from longer video. We create vertical videos designed around fast openings, clear messaging, strong pacing, visual variety, and platform-ready delivery. Production can include concept development, hook development, filming or footage sourcing, editing, captions, text overlays, motion elements, music, sound effects, and multiple versions where required.",
        "bullets": [
          "Hook and concept development for high viewer retention",
          "Vertical 9:16 filming and mobile-native framing",
          "Fast-paced editing, text overlays, sound effects, and dynamic captions",
          "Multiple opening hooks and cut variations for A/B testing",
          "Ready for Instagram Reels, YouTube Shorts, and TikTok"
        ]
      },
      {
        "title": "YouTube Video Production",
        "description": "Long-form video needs more than simply extending a short clip. We produce YouTube content with attention to structure, pacing, audio quality, visual continuity, editing, thumbnails, and the viewing experience across longer videos.",
        "bullets": [
          "Video concept and outline",
          "Script development or script support",
          "Filming",
          "Video editing",
          "Color correction or grading",
          "Sound editing",
          "Motion graphics",
          "Captions",
          "Thumbnail design",
          "Platform-ready exports"
        ]
      },
      {
        "title": "Motion Graphics & Animation",
        "description": "Some ideas are easier to explain through movement than live footage. We create motion graphics and animation for product explanations, processes, statistics, presentations, social content, advertisements, brand assets, and other communication needs.",
        "bullets": [
          "Kinetic typography",
          "Animated graphics",
          "2D animation",
          "Explainer visuals",
          "Product animations",
          "Logo animation",
          "Data visualization",
          "Social motion graphics"
        ]
      },
      {
        "title": "Commercial & Brand Photography",
        "description": "Professional photography helps businesses present products, people, places, and experiences with greater consistency. Our photography production can cover product, ecommerce, lifestyle, corporate, campaign, food, fashion, or other commercial requirements depending on the project. The process can include shoot planning, styling direction, location planning, photography, editing, retouching, and final delivery.",
        "bullets": [
          "Product and ecommerce catalog photography",
          "Commercial, lifestyle, and brand storytelling visuals",
          "Corporate headshots, office environments, and team photography",
          "Shoot planning, styling direction, and set coordination",
          "High-end retouching, color grading, and web/print optimization"
        ]
      },
      {
        "title": "Graphic Design & Marketing Assets",
        "description": "Graphic design supports the everyday visual needs of a business. Every design is created within an agreed visual direction so individual assets remain part of the same brand system.",
        "bullets": [
          "Social media graphics",
          "Advertising creatives",
          "Presentations",
          "Pitch decks",
          "Brochures",
          "Flyers",
          "One-pagers",
          "Banners",
          "Marketing materials",
          "Campaign assets",
          "Business materials"
        ]
      },
      {
        "title": "Logo Design",
        "description": "A logo needs to work across more than a presentation mockup. We design logos that can be used across websites, social profiles, packaging, business materials, advertising, print, and other real-world applications. Depending on the project, the process includes concept development, initial directions, refinement, and final files in appropriate formats and color variations.",
        "bullets": [
          "Versatile logo marks designed for real-world readability",
          "Concept development and multiple initial design directions",
          "Refinement cycles based on structured feedback",
          "Comprehensive exports: vector (AI, SVG, EPS) and raster (PNG, JPG)",
          "Full color, monochrome, and reversed colorway variations"
        ]
      },
      {
        "title": "Branding & Visual Identity",
        "description": "A logo is only one part of a brand identity. Our branding work can establish the broader visual system that guides future content. If your business already has a brand identity, we work within it. If the identity needs development, branding can establish the foundation before production begins.",
        "bullets": [
          "Color direction",
          "Typography",
          "Imagery style",
          "Graphic elements",
          "Visual consistency",
          "Brand applications",
          "Usage guidance"
        ]
      },
      {
        "title": "Social Media Graphics",
        "description": "Social media graphics need to work within the format and context of each platform. We create custom and recurring graphics for announcements, promotions, educational content, campaigns, product launches, offers, and other social content requirements. Where appropriate, we can also create reusable templates so recurring content can be produced more efficiently while maintaining visual consistency.",
        "bullets": [
          "Custom announcement, promotion, and campaign graphics",
          "Educational carousels and multi-slide infographics",
          "Platform-optimized aspect ratios (1:1, 4:5, 9:16)",
          "Reusable Figma and Canva template systems",
          "Brand-aligned typography, spacing, and iconography"
        ]
      },
      {
        "title": "UGC & Creator-Style Content",
        "description": "For businesses that use creator-led or user-generated-style content, we can support production requirements such as concepts, creative direction, editing, platform formatting, and branded variations. The exact scope depends on whether the project requires supplied footage, creator coordination, original filming, or editing-only production.",
        "bullets": [
          "Creator-style video concepts and hook direction",
          "Editing and pacing for user-generated source clips",
          "Branded captions, dynamic stickers, and audio syncing",
          "Creator coordination or in-house talent capture",
          "Multiple ad variation testing formats"
        ]
      }
    ],
    "whyMatters": [
      "Build a Consistent Brand Experience: When your website, social media, advertising, product photography, and videos follow the same visual direction, the brand becomes easier to recognize.",
      "Remove Production Bottlenecks: A content plan is not useful if production cannot keep up. A defined creative workflow gives your team a clearer path from idea to finished asset.",
      "Reduce Fragmented Creative Work: Working with different providers for photography, video, graphics, and motion can create inconsistent styles, repeated briefing work, and additional coordination. One production team can reduce those handoffs.",
      "Create More Value From Every Shoot: A well-planned production can produce multiple useful assets instead of one isolated piece of content.",
      "Produce Content for the Right Platform: A YouTube video, Instagram Reel, website banner, and paid advertisement do not necessarily need the same format or edit. Production should begin with the intended use in mind."
    ],
    "whyChooseUs": [
      "Video, photography, motion, branding, and graphic design can be coordinated within one team instead of being managed as unrelated production jobs.",
      "When content strategy is part of the engagement, production can follow a defined content purpose instead of creating assets without a clear role.",
      "Your visual identity should remain recognizable across a product photo, video, social graphic, website asset, and campaign creative. We build production around that consistency.",
      "Mahedi Hasan works with businesses in Bangladesh and international clients across the US, UK, Australia, Canada, and UAE. Production can be planned around the audience, market, platform, and project requirements rather than applying one visual approach to every market.",
      "Your review is built into the production process. We agree on the scope and direction before production, then provide the relevant deliverables for review and agreed revisions before final delivery.",
      "We consider the practical requirements behind the content, including format, platform, production complexity, timeline, volume, locations, and required versions."
    ],
    "pricingTable": {
      "headers": [
        "Plan",
        "Starting Price",
        "Typical Scope",
        "Best For"
      ],
      "rows": [
        [
          "Per-Project",
          "৳15,000+",
          "A defined video, photography, design, or creative production project",
          "One-time production needs"
        ],
        [
          "Growth",
          "৳40,000/month",
          "Recurring short-form video, graphics, and related creative production",
          "Businesses building a regular content pipeline"
        ],
        [
          "Full Production",
          "৳75,000/month",
          "Multi-format video, photography, design, and ongoing creative production",
          "Businesses with broader monthly production needs"
        ],
        [
          "Enterprise",
          "Custom Quote",
          "Larger campaigns, launches, multi-location, or multi-market production",
          "Larger organizations and complex campaigns"
        ]
      ],
      "note": ""
    },
    "pricingPackages": [
      {
        "name": "Per-Project",
        "price": "৳15,000+",
        "features": [
          "Defined project scope and creative brief",
          "Single video, photoshoot, or design deliverable",
          "Professional editing and post-production",
          "Agreed revision round included",
          "Platform-ready format exports"
        ]
      },
      {
        "name": "Growth",
        "price": "৳40,000/month",
        "features": [
          "Monthly recurring content calendar",
          "Batch short-form vertical videos (Reels/Shorts/TikTok)",
          "Branded social media graphics & carousels",
          "Consistent visual identity alignment",
          "Scheduled delivery cadence"
        ]
      },
      {
        "name": "Full Production",
        "price": "৳75,000/month",
        "features": [
          "Comprehensive monthly multi-format production",
          "Long-form YouTube and commercial video production",
          "Dedicated product & brand photography sessions",
          "Motion graphics, animations, and campaign creatives",
          "Priority review, revisions, and dedicated team"
        ]
      },
      {
        "name": "Enterprise",
        "price": "Custom Quote",
        "features": [
          "Full campaign creative direction & multi-market rollout",
          "Multi-location studio & on-location crew coordination",
          "Extensive talent, styling, and prop management",
          "Comprehensive multi-platform asset library",
          "Dedicated creative director & priority SLA"
        ]
      }
    ],
    "serviceAreas": "Mahedi Hasan provides content creation services for businesses in Bangladesh, including Dhaka and other locations where production requirements can be supported. We also work with international clients across the United States, United Kingdom, Australia, Canada, and United Arab Emirates."
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
  },
] as unknown as Service[];

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
