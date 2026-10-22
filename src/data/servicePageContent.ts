import type { ServiceContentSection } from "@/types";

/**
 * Page-specific editorial copy inspired by the service-page structure used in
 * the reference site. The wording is original to this portfolio and is kept
 * separate from the reusable service components.
 */
export const servicePageContent: Record<string, ServiceContentSection[]> = {
  "website-development": [
    {
      heading: "Websites designed around the next business action",
      paragraphs: [
        "A strong website does more than present information. It explains the offer quickly, builds confidence, and gives the right visitor a clear next step. We shape the structure, content hierarchy, and interface around the people the business wants to attract.",
        "The build can support a local Bangladeshi business, an international service company, or a product-led brand. Performance, accessibility, responsive behaviour, technical SEO, and maintainable components are considered from the first sprint rather than added after launch.",
      ],
    },
    {
      heading: "A launch-ready system, not just a visual redesign",
      paragraphs: [
        "Discovery, information architecture, UI design, development, content integration, quality assurance, and deployment are connected into one delivery path. That makes it easier to catch missing messages, broken journeys, slow assets, and tracking gaps before the site reaches customers.",
        "You receive a clear codebase, documented decisions, and a foundation that can grow with new pages, campaigns, integrations, and content without rebuilding the experience from scratch.",
      ],
    },
  ],
  seo: [
    {
      heading: "Search visibility tied to commercial intent",
      paragraphs: [
        "SEO is most useful when visibility leads to better conversations, enquiries, bookings, or sales. We connect technical health, search intent, content quality, internal linking, local signals, and conversion paths so the work supports the whole customer journey.",
        "The plan can be adapted for Bangladesh or international markets, including multilingual search behaviour, location-specific demand, competitive service categories, and the growing role of AI-assisted answer engines.",
      ],
    },
    {
      heading: "A prioritised programme instead of a list of generic tasks",
      paragraphs: [
        "We start with evidence from crawling, analytics, competitors, existing content, and customer questions. The result is a practical sequence of fixes and opportunities, showing what should happen first, what needs testing, and what can wait.",
        "Progress is reviewed through qualified organic visits, meaningful rankings, assisted conversions, enquiries, and revenue signals—not rankings alone.",
      ],
    },
  ],
  "technical-seo": [
    {
      heading: "Removing the technical barriers between your site and search engines",
      paragraphs: [
        "Technical SEO gives crawlers a clearer path to discover, render, understand, and index important pages. We investigate crawl waste, indexation, redirects, canonical signals, rendering, page experience, structured data, and site architecture.",
        "Recommendations are written for real implementation. Developers receive reproducible issues, priority levels, acceptance checks, and context so fixes can be shipped without guesswork.",
      ],
    },
    {
      heading: "A healthier foundation for every future page",
      paragraphs: [
        "Once the technical foundation is stable, content and authority work have a better chance to perform. We also check templates, internal links, mobile journeys, and measurement so technical improvements are connected to the pages and actions that matter commercially.",
        "The final handoff includes a prioritised audit, implementation guidance, validation notes, and a monitoring routine for issues that can return after releases.",
      ],
    },
  ],
  "off-page-seo": [
    {
      heading: "Authority built through relevance and real relationships",
      paragraphs: [
        "Off-page SEO is not a volume race. We look for relevant publishers, industry references, partnerships, useful resources, and brand mentions that make sense for the audience and the page being supported.",
        "Outreach is guided by topical fit, editorial quality, realistic expectations, and transparent approval. We avoid shortcuts that can create a temporary spike but leave a business exposed later.",
      ],
    },
    {
      heading: "A link profile that supports the wider search strategy",
      paragraphs: [
        "Link opportunities are mapped to service pages, supporting resources, local visibility, and the topics where the business needs stronger credibility. Existing backlinks are reviewed for relevance and risk before new activity is planned.",
        "You receive campaign records, prospecting logic, placement context, and reporting that explains what was earned and why it matters.",
      ],
    },
  ],
  "seo-content-writing": [
    {
      heading: "Content that answers the search and moves the reader forward",
      paragraphs: [
        "SEO content should do more than repeat a keyword. We research the intent behind the query, define the useful answer, organise supporting detail, and connect the page to the next commercial or informational step.",
        "The writing can support blog articles, service pages, topical clusters, refreshes, internal links, and answer-first sections designed for both human readers and modern search interfaces.",
      ],
    },
    {
      heading: "A repeatable editorial workflow",
      paragraphs: [
        "Each assignment moves through research, brief creation, structured drafting, fact and SEO review, refinement, and publishing support. The result is content that fits the website instead of becoming another disconnected article.",
        "We measure usefulness through visibility, engagement, assisted actions, and the quality of the questions the content helps answer.",
      ],
    },
  ],
  "local-seo": [
    {
      heading: "Helping nearby customers find and trust the right business",
      paragraphs: [
        "Local SEO brings together Google Business Profile optimisation, location-focused pages, consistent business details, reviews, citations, and local relevance signals. The goal is to make the business easier to discover when a nearby customer is ready to act.",
        "For Bangladesh-based businesses, the plan can account for city, neighbourhood, bilingual, mobile, map, and social discovery patterns rather than treating every location as identical.",
      ],
    },
    {
      heading: "From map visibility to real enquiries",
      paragraphs: [
        "We align the profile, website, contact paths, service areas, trust signals, and measurement. Duplicate listings, inconsistent contact details, weak review workflows, and unclear location pages are prioritised according to their likely impact.",
        "Reporting focuses on calls, direction requests, profile actions, qualified leads, and local visibility—not just impressions.",
      ],
    },
  ],
  "google-ads": [
    {
      heading: "Google Ads structured around measurable demand",
      paragraphs: [
        "Google Ads can capture intent at the moment someone is actively looking for a solution, but only when campaigns are connected to meaningful conversion definitions. We plan keywords, landing pages, ad groups, negative terms, extensions, and bidding around the outcome the business actually needs.",
        "Search, Shopping, Display, and Performance Max are used selectively, with local language, mobile behaviour, regional demand, and Bangladesh payment or contact expectations considered where relevant.",
      ],
    },
    {
      heading: "Transparent optimisation and account ownership",
      paragraphs: [
        "Search-term reviews, creative testing, landing-page feedback, conversion checks, and budget pacing help reduce waste over time. We separate management decisions from the platform invoice and keep the account, data, and tracking assets in the client’s ecosystem.",
        "Reports explain acquisition cost, lead quality, revenue signals, and the changes being made next.",
      ],
    },
  ],
  "meta-ads": [
    {
      heading: "Meta campaigns built around creative, audience, and action",
      paragraphs: [
        "Meta performance depends on the relationship between the offer, creative angle, audience signal, landing experience, and conversion event. We build campaigns for awareness, consideration, lead generation, sales, or remarketing with a clear role for each stage.",
        "Creative testing covers hooks, formats, proof, offers, language, and calls to action so the account learns from meaningful variations rather than random asset changes.",
      ],
    },
    {
      heading: "Better signals for better optimisation",
      paragraphs: [
        "Pixel, Conversions API, event deduplication, UTM structure, and CRM or lead-quality feedback are reviewed so the platform receives more useful information. Audiences are managed with frequency, exclusions, funnel stage, and privacy realities in mind.",
        "You see what was tested, what changed, how leads or sales were assessed, and which next experiment has the strongest case.",
      ],
    },
  ],
  "tiktok-ads": [
    {
      heading: "TikTok advertising that feels native to the feed",
      paragraphs: [
        "TikTok creative needs to earn attention quickly. We plan vertical-first concepts with clear opening moments, simple stories, creator-style delivery, platform-aware editing, and a direct connection between the video and the landing experience.",
        "Spark Ads, creator collaborations, prospecting, retargeting, and catalogue or lead flows can be combined when the offer and tracking support them.",
      ],
    },
    {
      heading: "Testing for attention and business quality",
      paragraphs: [
        "Tracking is checked across browser and server-side events where appropriate. We review thumb-stop rate, completion, click quality, conversion rate, and downstream lead or purchase quality before scaling a winning angle.",
        "The workflow keeps creative production, campaign learning, and budget decisions connected instead of treating media buying as a set-and-forget task.",
      ],
    },
  ],
  "pinterest-ads": [
    {
      heading: "Pinterest campaigns aligned with planning-led discovery",
      paragraphs: [
        "Pinterest users often discover ideas while planning a future purchase, project, event, or lifestyle change. We build campaigns around useful visual assets, search-aware descriptions, audience intent, seasonal timing, and a landing page that continues the idea clearly.",
        "Catalogues, collection formats, promoted pins, and retargeting are selected according to the product or service rather than used as a fixed checklist.",
      ],
    },
    {
      heading: "Creative that can keep working beyond one campaign",
      paragraphs: [
        "The strongest Pinterest assets can support organic discovery, paid reach, seasonal planning, and evergreen demand. We organise testing around visual concept, message, format, audience, and destination so the library becomes more useful over time.",
        "Reporting connects saves and clicks with qualified visits, enquiries, assisted conversions, and sales where the data allows.",
      ],
    },
  ],
  cro: [
    {
      heading: "Conversion improvement begins with the customer journey",
      paragraphs: [
        "Conversion rate optimisation is not about changing button colours in isolation. We study intent, message match, friction, proof, form behaviour, mobile usability, speed, and the questions that stop a visitor from taking the next step.",
        "The work can focus on a landing page, service funnel, ecommerce journey, lead form, booking flow, or the transition between an ad and the page it sends people to.",
      ],
    },
    {
      heading: "A testing roadmap grounded in evidence",
      paragraphs: [
        "Analytics review, session evidence, user feedback, competitor comparison, and business context help define testable hypotheses. We prioritise changes by likely impact, confidence, effort, and the quality of the available data.",
        "Every test has a decision rule and a learning outcome, so even an inconclusive result improves the next iteration.",
      ],
    },
  ],
  "content-marketing": [
    {
      heading: "Content planned around the questions customers ask",
      paragraphs: [
        "Content marketing works best when each piece has a job: explain a problem, compare options, build trust, support sales, or create a useful next step. We map customer questions to the journey and connect pillar pages, supporting articles, service pages, and distribution.",
        "The approach can reflect local terminology, bilingual audiences, regional demand, and international markets without losing a consistent brand voice.",
      ],
    },
    {
      heading: "A publishing system your team can actually run",
      paragraphs: [
        "Editorial calendars include topics, formats, owners, review steps, internal links, publishing targets, and repurposing opportunities. That keeps output consistent without confusing activity with progress.",
        "Performance is reviewed through visibility, engaged visits, assisted conversions, enquiries, and the questions customers continue to ask.",
      ],
    },
  ],
  "marketing-strategy": [
    {
      heading: "A marketing plan connected to the business model",
      paragraphs: [
        "A useful strategy starts with the offer, audience, sales cycle, capacity, competition, and commercial target. We connect those realities to SEO, paid media, content, website experience, and measurement so the plan reflects how the business can actually grow.",
        "The result is a clear view of which audiences matter, which messages need testing, and which channels deserve attention first.",
      ],
    },
    {
      heading: "Priorities that lead to practical execution",
      paragraphs: [
        "Research becomes a sequenced roadmap with owners, dependencies, expected learning, and measurement requirements. That may mean fixing tracking before increasing spend, improving a landing page before sending more traffic, or clarifying the offer before publishing more content.",
        "Reviews focus on qualified leads, sales, bookings, revenue, acquisition cost, and conversion quality alongside channel metrics.",
      ],
    },
  ],
  "analytics-tracking": [
    {
      heading: "Measurement built around decisions, not dashboards",
      paragraphs: [
        "Analytics becomes valuable when it helps a team decide what to improve, fund, pause, or test. We map the customer journey, define meaningful events, and connect visits to enquiries, purchases, bookings, or repeat actions.",
        "The setup can account for mobile-heavy journeys, multiple domains, campaign handoffs, messaging apps, payment steps, and the teams who need to use the data.",
      ],
    },
    {
      heading: "Cleaner tracking and more trustworthy reporting",
      paragraphs: [
        "GA4, Google Tag Manager, consent behaviour, duplicate conversions, UTM standards, platform handoffs, and data quality are reviewed together. Important events are tested so reports represent meaningful actions as closely as possible.",
        "You receive clear definitions, documented ownership, and a maintenance routine for broken forms, changed URLs, missing parameters, and reporting discrepancies.",
      ],
    },
  ],
  "chatgpt-ads": [
    {
      heading: "Preparing for conversational advertising and AI discovery",
      paragraphs: [
        "Conversational search changes how people describe problems, compare options, and ask for recommendations. We help businesses prepare the context, creative, landing assets, and measurement framework needed for emerging AI advertising opportunities.",
        "Where direct paid access is limited by market or platform eligibility, the work can still improve organic AI visibility through entity clarity, answer-focused content, structured data, and credible first-party information.",
      ],
    },
    {
      heading: "A practical bridge between paid readiness and GEO",
      paragraphs: [
        "Rather than copying a traditional keyword list into a conversational environment, we map real customer situations, questions, decision stages, and the language people use when seeking help.",
        "The result is a documented readiness plan with clear assumptions, verified destinations, tracking requirements, and no promises about an immature channel that cannot yet be measured responsibly.",
      ],
    },
  ],
  "media-buying": [
    {
      heading: "Media buying as one customer-acquisition system",
      paragraphs: [
        "Running disconnected campaigns across platforms can create audience overlap, competing bids, inconsistent creative, and fragmented attribution. We give each channel a clear role based on the sales cycle and the customer’s level of intent.",
        "Google can capture active demand, Meta and TikTok can create visual interest, LinkedIn can reach professional decision-makers, and other platforms can support discovery or remarketing where the economics make sense.",
      ],
    },
    {
      heading: "Budget decisions supported by cleaner evidence",
      paragraphs: [
        "Platform-specific auction behaviour, creative fatigue, conversion tracking, frequency, pacing, and first-party signals are reviewed together. Budgets can move toward the channels and audiences producing the strongest commercial evidence.",
        "Reporting separates platform metrics from business outcomes so spend, learning, and next actions remain visible.",
      ],
    },
  ],
  "social-media-management": [
    {
      heading: "A channel-specific social presence",
      paragraphs: [
        "Facebook, Instagram, LinkedIn, TikTok, and other channels have different audience expectations, formats, and discovery systems. We build a practical content rhythm for the platforms that matter instead of reposting one asset everywhere.",
        "Strategy can include content pillars, short-form video, thought leadership, community response, reviews, direct messages, and campaign support in Bangla, English, or a natural combination.",
      ],
    },
    {
      heading: "Consistency supported by real community care",
      paragraphs: [
        "Publishing is only one part of social management. Comments, questions, reviews, and messages are opportunities to build trust and guide interested people toward a useful next step.",
        "Monthly reporting covers content performance, audience quality, engagement patterns, response themes, and recommendations for the next content cycle.",
      ],
    },
  ],
  "website-marketing": [
    {
      heading: "Turning a website into an active growth asset",
      paragraphs: [
        "A website creates commercial value when qualified people can discover it, understand the offer, trust the business, and convert without unnecessary friction. We connect technical SEO, content, local visibility, paid traffic, ecommerce structure, and conversion improvement into one plan.",
        "This integrated view reduces the gaps that appear when SEO, advertising, copy, analytics, and website changes are handled without a shared direction.",
      ],
    },
    {
      heading: "Growth work with transparent priorities",
      paragraphs: [
        "The engagement begins with an audit of search demand, competitors, customer journeys, tracking, performance, and conversion bottlenecks. Improvements are sequenced by impact and evidence rather than by whichever channel is most fashionable.",
        "Reporting explains what changed, what was learned, how the work affected qualified actions, and which next investment has the strongest case.",
      ],
    },
  ],
  "creative-content": [
    {
      heading: "Creative assets made for the platform and the purpose",
      paragraphs: [
        "Creative content should do a specific job: stop attention, explain an offer, show a product, build trust, support a campaign, or make a brand easier to remember. We connect the concept, format, production plan, and distribution context before making the asset.",
        "The service can support video, motion graphics, social assets, campaign visuals, product storytelling, and content designed for search or conversion journeys.",
      ],
    },
    {
      heading: "A coordinated production workflow",
      paragraphs: [
        "Briefing, concept development, scripting or design direction, production, editing, review, and delivery are handled as one workflow. This keeps the message consistent across the asset library and makes approvals easier.",
        "Final files are prepared for the channels where they will actually appear, with reusable variants where that improves the value of the production.",
      ],
    },
  ],
  "guest-post-services": [
    {
      heading: "Guest publishing focused on relevance and trust",
      paragraphs: [
        "A guest post is useful when it reaches a relevant audience, earns a credible mention, and supports the wider authority of the website. We evaluate publication fit, topical context, editorial quality, and the page being supported before outreach begins.",
        "The process prioritises useful contributions and transparent placement context rather than chasing large link counts from unrelated sites.",
      ],
    },
    {
      heading: "Outreach that supports a broader SEO plan",
      paragraphs: [
        "Topics, anchors, destination pages, publisher expectations, and approval requirements are documented so external content reinforces the brand and internal content structure.",
        "Reporting records opportunities, accepted placements, links, publication context, and the next authority-building priorities.",
      ],
    },
  ],
};
