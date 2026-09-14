import type { Service, ServiceContentSection } from "@/types";

type EditorialContent = Pick<ServiceContentSection, "heading" | "paragraphs">[];

const editorial: Record<string, EditorialContent> = {
  "content-marketing": [
    {
      "heading": "Content built around customer questions and search intent",
      "paragraphs": [
        "Effective content marketing starts with the questions customers ask before they contact or buy from a business. We map those questions to the customer journey, then build useful pages and articles that explain the problem, compare options, demonstrate expertise, and make the next step clear.",
        "For businesses in Bangladesh and international markets, the plan can account for local language, regional terminology, service areas, and different levels of product awareness. A content map connects pillar pages with supporting articles, service pages, and internal links so the website becomes easier for both people and search engines to understand."
      ]
    },
    {
      "heading": "A sustainable publishing system",
      "paragraphs": [
        "Publishing cadence should match the team, the available expertise, the sales cycle, and the quality bar. We create an editorial calendar with clear topics, formats, owners, review steps, and distribution plans, so each piece has a role after it goes live instead of becoming an isolated blog post.",
        "Performance is reviewed through useful signals such as search visibility, engaged visits, assisted conversions, enquiries, and the questions sales or support teams continue to receive. Those insights shape future briefs, updates, repurposing, and new content opportunities without relying on fabricated traffic promises."
      ]
    }
  ],
  "marketing-strategy": [
    {
      "heading": "A marketing strategy connected to the business model",
      "paragraphs": [
        "A useful marketing strategy starts with the business model, offer, audience, sales cycle, and available capacity. We connect those factors with search demand, paid media, content, conversion improvement, and measurement so the plan reflects how the business actually grows rather than listing every possible channel.",
        "For Bangladesh-based and international businesses, the strategy can account for local language, market maturity, mobile-first behaviour, regional demand, and cross-border delivery. The result is a clear view of which audiences matter, which messages need testing, and which channels deserve attention first."
      ]
    },
    {
      "heading": "Priorities, measurement, and practical execution",
      "paragraphs": [
        "A roadmap is only useful when a team can act on it. We turn research into sequenced priorities with owners, dependencies, expected learning, and measurement requirements. That may mean fixing tracking before increasing ad spend, improving a landing page before sending more traffic, or building a content foundation before expanding keyword targets.",
        "Progress is reviewed against business outcomes such as qualified enquiries, sales, bookings, revenue, acquisition cost, and conversion quality. Channel metrics provide evidence, but they do not replace commercial judgment. Regular reviews make it easier to keep what works, stop weak activity, and adapt when customer behaviour or market conditions change."
      ]
    }
  ],
  "analytics-tracking": [
    {
      "heading": "Measurement designed around real business decisions",
      "paragraphs": [
        "Analytics is useful when it helps a team decide what to improve, fund, pause, or test next. We begin with the customer journey and the business outcomes that matter, then map the events, conversions, parameters, and reporting views needed to understand how people move from first visit to enquiry, purchase, booking, or repeat action.",
        "For Bangladesh-based and international businesses, the implementation can account for multiple domains, local and international campaigns, mobile-heavy journeys, payment or messaging handoffs, and different teams using the data. A clear measurement plan keeps the setup understandable instead of turning the analytics account into a collection of disconnected tags."
      ]
    },
    {
      "heading": "Reliable tracking with privacy and quality checks",
      "paragraphs": [
        "Tracking quality depends on more than installing GA4. We review Google Tag Manager structure, event naming, consent requirements, duplicate conversions, attribution limitations, server-side options, and the handoff between advertising platforms and the website. Each important event is tested so reports reflect meaningful actions as closely as the available data allows.",
        "Ongoing data quality checks help identify broken forms, changed URLs, missing parameters, consent changes, and reporting discrepancies before they create bad decisions. Dashboards are kept focused on useful questions, with clear definitions for metrics and documented ownership so the team knows what the numbers mean and what action they support."
      ]
    }
  ],
  "chatgpt-ads": [
    {
      "heading": "A realistic dual-track model for ChatGPT Ads",
      "paragraphs": [
        "ChatGPT Ads represent a distinct advertising format consisting of sponsored links displayed beneath conversational responses for Free and Go tier accounts. OpenAI does not show ads to paid Plus or Pro subscribers, and sponsored links do not alter the organic response generated by the underlying model.",
        "Advertiser access through OpenAI's Ads Manager is expanding across eligible international markets. For businesses with registered entities in approved countries (such as the US or UK), I manage live campaign setups directly. For Bangladesh-based brands where direct advertiser billing is not yet accessible, I deliver a strategic readiness framework encompassing context-hint architecture, conversion-focused creative assets, and Generative Engine Optimization (GEO) so your brand earns organic citations today and is prepared for immediate deployment once regional access expands."
      ]
    },
    {
      "heading": "Targeting through context hints instead of keyword bidding",
      "paragraphs": [
        "Traditional paid search relies on exact or phrase-matched keywords entered into a search bar. In conversational AI environments, users present complex questions, comparison inquiries, and multi-step scenarios. Context hints describe the situational triggers and conversational themes where your product or service provides a natural solution.",
        "Attempting to copy-paste a standard Google Ads keyword list into a ChatGPT Ads campaign produces disjointed targeting. My approach maps the real-world problems and conversational paths users present to LLMs, translating customer intent into high-relevance ad creative and verified landing page destinations."
      ]
    },
    {
      "heading": "Integrating paid readiness with Generative Engine Optimization (GEO)",
      "paragraphs": [
        "Sponsored placements and organic AI citations are two sides of the same strategic asset. Even while waiting for direct paid ad access in regional markets, prospective buyers in North America, Europe, and Asia are querying ChatGPT, Claude, and Perplexity for recommendations in your industry.",
        "I align your digital presence with Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). By publishing proprietary data, implementing entity-rich schema, and creating retrieval-ready answer passages, your brand establishes topical authority across conversational answer engines independently of paid placement."
      ]
    },
    {
      "heading": "Transparent bidding benchmarks and management economics",
      "paragraphs": [
        "OpenAI operates without mandatory minimum spend requirements. Current platform auctions typically see bids between $3.00 and $5.00 per click, with CPM benchmarks between $25.00 and $60.00 depending on industry competition and commercial intent.",
        "My consulting fee is separated from OpenAI's ad spend. Every client receives direct visibility into account performance, tracking parameters, and eligibility updates. I do not promise unverifiable outcomes on an early-stage channel; I provide documented strategy, rigorous measurement, and practical first-mover advantages."
      ]
    }
  ],
  "creative-content": [
    {
      "heading": "Content built around customer intent and search engine retrieval",
      "paragraphs": [
        "Effective content writing solves a concrete business objective: answering buyer hesitation, establishing topical depth, explaining technical advantages, or guiding a reader toward a purchase. Most websites lose organic visibility not from a lack of content, but because their copy is generic, lacks entity depth, or ignores how modern search algorithms and AI Overviews retrieve information.",
        "I produce content across ten specialized formats—from topical pillar articles and e-commerce product descriptions to email newsletters, press releases, and social captions. Every format follows its own structural checklist, ensuring that technical service pages read persuasively while informational articles lead with direct, standalone answer blocks."
      ]
    },
    {
      "heading": "The compounding value of topical clusters and entity mapping",
      "paragraphs": [
        "Publishing disconnected blog posts rarely creates sustainable search visibility. Modern search engines evaluate topical authority by examining how comprehensively a website covers a subject area. A pillar article explaining a core service must connect logically to supporting cluster guides, comparison tables, and conversion-focused service pages.",
        "Before drafting, I conduct semantic entity mapping to identify related concepts, user question clusters, and natural co-occurring terms. This structural discipline ensures your website builds durable authority that compounds over time, making it easier for search bots and AI answer engines to cite your brand as an industry source."
      ]
    },
    {
      "heading": "Structuring copy for AI Overviews and modern answer engines",
      "paragraphs": [
        "Search behavior has evolved beyond ten blue links. Google AI Overviews, Perplexity, and conversational LLMs extract direct, factual answers from well-structured pages. Pages with rambling introductory filler are routinely bypassed by extraction algorithms.",
        "My writing implements an answer-first methodology: every major section leads with a concise 30-to-60-word retrieval passage that directly resolves the searcher's query before expanding into practical nuances. This clean semantic fingerprint maximizes citation frequency across generative engines while keeping reading flow engaging for human visitors."
      ]
    },
    {
      "heading": "A disciplined, human-authored editorial system",
      "paragraphs": [
        "While AI tools can assist with initial topic research and query categorization, every piece of copy is drafted, refined, and edited by human hands. This ensures authentic voice, factual precision, cultural nuance, and compliance with search engine helpful content standards.",
        "Each project moves through six distinct stages: discovery, entity mapping, structured drafting, SEO/AEO review, collaborative refinement, and publishing cadence planning. Content is delivered in clean markdown or CMS-ready formats that drop directly into your web architecture without reformatting delays."
      ]
    }
  ],
  "google-ads": [
    {
      "heading": "Conversion-first campaign architecture across Search and Performance Max",
      "paragraphs": [
        "Google Ads is uniquely effective because it captures intent at the exact moment a prospect searches for an immediate solution. However, building an account around traffic volume rather than verified conversions dissipates budget rapidly. Before launching any campaign, I define what constitutes a commercial conversion—a qualified form lead, phone call, or completed transaction.",
        "I structure Search, Shopping, Display, and Performance Max campaigns with strict negative keyword lists, tight ad group clustering, and conversion-first bidding strategies. This prevents Google's automated systems from spending budget on low-intent informational searches or mismatched inventory."
      ]
    },
    {
      "heading": "Bilingual search realities and local buying behavior in Bangladesh",
      "paragraphs": [
        "Search queries in Bangladesh frequently mix English and Bangla, incorporate neighborhood landmarks (such as Gulshan, Banani, or Agrabad), and skew heavily toward mobile devices. A Google Ads strategy relying solely on English keywords misses a substantial share of commercial demand.",
        "I build keyword architecture around actual regional search habits, crafting bilingual ad copy and localized landing page signals. For e-commerce stores, checkout expectations like bKash, Nagad, and cash-on-delivery are accounted for in ad extensions and page messaging to maximize conversion rates."
      ]
    },
    {
      "heading": "Rigorous negative keyword mining and Quality Score optimization",
      "paragraphs": [
        "The primary cause of wasted Google Ads spend in unmanaged accounts is the unchecked use of broad match keywords without continuous search term filtering. Irrelevant queries quietly consume daily budgets without generating commercial inquiries.",
        "I conduct routine search query audits to expand negative keyword lists, refine keyword match types, and align ad copy directly with landing page content. Improving Quality Score reduces your effective cost per click while securing superior ad rank positions over competitors who overpay for lower-quality placements."
      ]
    },
    {
      "heading": "Complete data transparency and account ownership",
      "paragraphs": [
        "You maintain 100% administrative ownership of your Google Ads account, payment profiles, and historical data at all times. All tracking tags, conversion actions, and GA4 properties are configured within your own ecosystem rather than proprietary agency software.",
        "My monthly management fee is clearly separated from Google's direct advertising invoice. You receive detailed performance reports outlining actual acquisition costs, return on ad spend, and strategic adjustments based on data rather than vanity metrics."
      ]
    }
  ],
  "local-seo": [
    {
      "heading": "Capturing Google Local Pack visibility across Bangladesh",
      "paragraphs": [
        "When local customers search for medical services, retail stores, professional consultancies, or restaurants, Google displays the three-business Local Pack at the very top of search results. Nearly half of all Google searches carry local intent, and a substantial majority of mobile searchers contact or visit a business within twenty-four hours.",
        "I optimize your Google Business Profile (GBP), standardize NAP (name, address, phone) citations across Bangladeshi and international directories, and build localized on-page signals. This elevates your local search rankings across Dhaka, Chittagong, Sylhet, and regional hubs, directing verified customer inquiries to your business."
      ]
    },
    {
      "heading": "Connecting Google Business Profile with on-page local architecture",
      "paragraphs": [
        "A common mistake businesses make is treating their Google Business Profile as an isolated entity. While a complete profile is necessary, Google's local algorithm heavily weighs the authority, relevance, and technical markup of the website linked to the listing.",
        "I build dedicated area and service pages featuring localized headings, customer testimonials, driving directions, and complete LocalBusiness JSON-LD schema. This structural harmony between your website and your map profile strengthens geographic relevance signals across neighborhood and city-level queries."
      ]
    },
    {
      "heading": "Citation cleanup, NAP consistency, and review reputation",
      "paragraphs": [
        "Conflicting business names, outdated phone numbers, and mismatched addresses across directories confuse search algorithms and reduce local ranking confidence. In Bangladesh, active Facebook Business Pages carry significant local discovery weight and must align perfectly with your Google listing.",
        "My local SEO workflow systematically cleans up duplicate and inaccurate citations across major data aggregators, local business portals, and social channels. Simultaneously, I implement a structured review generation workflow that encourages satisfied customers to leave authentic, keyword-rich feedback on your profile."
      ]
    },
    {
      "heading": "Published pricing tiers and realistic timelines",
      "paragraphs": [
        "Local SEO is structured across three transparent tiers: Starter Local SEO (৳20,000–৳25,000/month or ~$165–$205/month) for single-location clinics or shops; Growth Local SEO (৳35,000–৳50,000/month or ~$290–$415/month) for competitive service categories; and Multi-Location/Enterprise (from ৳70,000/month) for businesses managing branches across multiple cities.",
        "Local SEO typically shows initial Local Pack movement within 60 to 90 days as citations index and profile updates take effect, with durable authority solidifying over 4 to 6 months. Monthly reporting tracks phone call clicks, direction requests, and local rank grid movements so progress is visible from month one."
      ]
    }
  ],
  "media-buying": [
    {
      "heading": "Full-stack media buying as a unified customer acquisition system",
      "paragraphs": [
        "Media buying is the strategic discipline of transforming advertising budget into profitable customer demand across digital platforms. Running ads on disconnected platforms without a synchronized plan frequently causes audience overlap, self-bidding competition, and fragmented conversion attribution.",
        "I manage media buying across Meta (Facebook & Instagram), Google, TikTok, LinkedIn, Pinterest, and ChatGPT Ads as one cohesive system. Each platform is assigned a distinct role aligned with your sales cycle—using Google to capture active search demand, Meta and TikTok to generate visual interest, and LinkedIn for professional decision-makers."
      ]
    },
    {
      "heading": "Platform-specific auction mechanics and bid intelligence",
      "paragraphs": [
        "Each advertising platform operates on a different algorithmic auction model. Google rewards Quality Score and relevance, Meta prioritizes estimated action rates and ad quality, and TikTok rewards rapid creative engagement and thumb-stop retention.",
        "A bid strategy that succeeds on Google Search will fail if copied directly into Meta or TikTok. I engineer platform-specific bidding parameters, budget pacing rules, and automated stop-loss thresholds so budgets shift toward whichever channel is converting most efficiently."
      ]
    },
    {
      "heading": "Server-side tracking, Conversion APIs, and unified attribution",
      "paragraphs": [
        "Browser privacy constraints and third-party cookie restrictions mean that platform-reported ROAS figures can be misleading or duplicative. Relying on platform self-attribution leads to overcounting conversions and misallocating capital.",
        "I install unified server-side tracking pipelines through Google Tag Manager, Conversions APIs (Meta CAPI, TikTok Events API), and GA4 event streams. Attribution is evaluated based on blended customer acquisition costs (blended CAC) and verified business revenue."
      ]
    },
    {
      "heading": "Transparent media management fees and direct account access",
      "paragraphs": [
        "Media management fees are cleanly separated from direct advertising spend. For Bangladesh-based businesses, Meta ad management typically runs ৳10,000–৳20,000/month (or 10–20% of ad spend). Multi-channel retainers range from ৳25,000 to ৳100,000+/month, and international accounts range from $500 to $3,000/month.",
        "You maintain 100% direct ownership of all ad accounts, tracking containers, and analytics dashboards. Regular reporting reviews channel contribution, assisted conversions, and quarterly scaling opportunities."
      ]
    }
  ],
  "meta-ads": [
    {
      "heading": "Audience mapping and Conversions API infrastructure",
      "paragraphs": [
        "Profitable Meta Ads management begins with reliable technical tracking and disciplined audience architecture. Browser-based cookie tracking has degraded significantly since iOS 14 privacy changes, frequently blinding ad algorithms to real conversion events. Without server-side tracking, ad delivery algorithms struggle to optimize effectively.",
        "I implement the Meta Conversions API (CAPI) alongside the standard Pixel, verifying event deduplication and high event match quality. Campaign structures are neatly split between cold prospecting (Advantage+ and broad lookalikes) and warm retargeting (website visitors and video viewers), ensuring your ad spend reaches new prospects without wasting money on recent buyers."
      ]
    },
    {
      "heading": "Weekly creative testing to overcome social ad fatigue",
      "paragraphs": [
        "On social feeds, creative ad fatigue occurs rapidly. An ad that converts profitably in week one will often see its cost-per-acquisition climb as frequency increases and audience engagement declines. Relying on one static image for months at a time leads inevitably to diminishing returns.",
        "I operate a weekly creative testing workflow, testing new visual hooks, headline variations, video pacing, and problem-focused messaging angles. Underperforming creatives are paused before they waste budget, while top-performing creative assets are scaled systematically into higher-budget campaigns."
      ]
    },
    {
      "heading": "Tailoring strategies to the Bangladesh demographic reality",
      "paragraphs": [
        "Targeting audiences in Bangladesh requires an understanding of distinct platform demographics. Bangladesh has approximately 72 million Facebook users (heavily mobile-first) compared to around 10 million on Instagram. The ad audience skews 63% male, with young adults between 18 and 24 representing the single largest user segment.",
        "Direct-to-Messenger communication is a primary sales channel for local service businesses and e-commerce brands in Bangladesh. I design mobile-first creatives and integrate conversational lead capture workflows that convert casual mobile browsers into direct customer relationships."
      ]
    },
    {
      "heading": "Transparent pricing models and no lock-in retainers",
      "paragraphs": [
        "Clients can choose between two clear pricing options: a Service Charge on Ad Spend (20% for spend up to $500, 15% for $501–$1,000, and 10% for $1,000+) or a Fixed Monthly Management Fee (Basic at ৳5,000/month, Pro at ৳10,000/month, and Premium at ৳15,000/month). Ad spend is billed directly by Meta.",
        "You retain complete administrative ownership of your Business Manager and ad accounts. Engagements operate on one-month commitments supported by transparent weekly and monthly reporting on cost per acquisition, ROAS, and creative performance."
      ]
    }
  ],
  "pinterest-ads": [
    {
      "heading": "Engaging high-intent planners before purchase decisions",
      "paragraphs": [
        "Pinterest functions as a visual search engine where users curate inspiration and plan future purchases weeks in advance. Unlike fast-moving social feeds where posts disappear within hours, a high-performing pin remains searchable and can generate referral visits for months after initial publication.",
        "I manage Standard Pins, Shopping Catalog feeds, and Video Pins with complete Pinterest Tag tracking. By targeting visual search terms, categories, and shopping interests, I place your products directly in front of buyers at the precise moment they are evaluating options for home decor, fashion, gifts, and lifestyle goods."
      ]
    },
    {
      "heading": "Catalog integration and visual search optimization",
      "paragraphs": [
        "For e-commerce and DTC brands, live product feeds turn your inventory into shoppable pins displaying live pricing and availability. Pinterest users frequently click outbound product links with clear commercial intent, resulting in higher average order values.",
        "I structure campaigns around vertical 2:3 imagery with readable text overlays, clear branding, and search-optimized titles and descriptions. This format aligns with Pinterest's visual ranking algorithm, ensuring that pins rank prominently in visual search results and related recommendation carousels."
      ]
    },
    {
      "heading": "Published pricing tiers and transparent campaign timelines",
      "paragraphs": [
        "Unlike agencies that hide their pricing behind quotation forms, I publish transparent management structures: a Service Charge on Ad Spend (20% up to $500, 15% for $501–$1,000, 10% for $1,000+) or a Fixed Monthly Fee (Basic at ৳5,000/month, Pro at ৳10,000/month, Premium at ৳15,000/month).",
        "Initial setup and tag installation take 3 to 7 business days. Because Pinterest is an advance planning tool, campaigns require 2 to 4 weeks of delivery data before optimization trends become reliable. Performance reviews evaluate direct checkout conversions alongside board saves and assisted discovery."
      ]
    }
  ],
  "social-media-management": [
    {
      "heading": "Platform-specific strategy instead of blanket posting",
      "paragraphs": [
        "A common reason businesses struggle on social media is treating every platform identically—reposting the exact same square image and caption across Facebook, Instagram, LinkedIn, and Pinterest. Each platform possesses distinct user expectations, content formats, and algorithmic delivery systems.",
        "I manage four core platforms as dedicated channels: Facebook for community and local trust, Instagram for visual storytelling and short-form video, LinkedIn for B2B authority and professional credibility, and Pinterest for search-driven lifestyle planning. Each channel receives its own dedicated calendar, posting frequency, and format specifications."
      ]
    },
    {
      "heading": "Bilingual community management and rapid inquiry response",
      "paragraphs": [
        "Publishing consistent content is only half the battle. In modern digital commerce, prospective customers frequently leave comments or send direct messages asking for pricing, availability, and delivery details. Leaving these inquiries unanswered for hours damages customer trust and loses immediate sales.",
        "I provide responsive community management in Bangla, English, or a natural bilingual blend. Comments, reviews, and private messages are monitored and answered promptly, guiding interested prospects toward booking a call or completing an order."
      ]
    },
    {
      "heading": "Separating organic management from paid advertising",
      "paragraphs": [
        "There is frequent confusion between organic social media management and paid advertising. Organic management maintains an active, credible, and engaging storefront for visitors who discover your brand. Paid advertising puts targeted promotions in front of cold audiences to drive immediate conversions.",
        "I scope organic management and paid ad campaigns as distinct services, ensuring complete transparency in budgeting and expectations. When run in tandem, an active organic feed reinforces the credibility of your paid ads, increasing overall conversion rates."
      ]
    }
  ],
  "tiktok-ads": [
    {
      "heading": "Creating creator-native video ads that capture feed attention",
      "paragraphs": [
        "Traditional corporate commercials and repurposed Facebook banner graphics consistently fail on TikTok. Users swipe past obvious ads within two seconds. The TikTok algorithm favors vertical, fast-paced, unpolished video creative that blends naturally into the For You Page.",
        "I plan and direct native-style video ad campaigns built around strong 2-second visual hooks, clear problem demonstrations, and relevant audio cues. Through Spark Ads, we can boost top-performing organic videos and creator collaborations, establishing immediate social proof and lower cost-per-click metrics."
      ]
    },
    {
      "heading": "Server-side Events API configuration and algorithmic optimization",
      "paragraphs": [
        "Browser-only tracking on TikTok leads to substantial conversion loss and inaccurate attribution. When conversion signals are incomplete, TikTok's bidding algorithm struggles to locate high-intent buyers, leading to inflated acquisition costs.",
        "I configure the TikTok Pixel alongside the server-side TikTok Events API, ensuring deduplicated tracking for page views, add-to-carts, initiate-checkouts, and purchases. This clean data feed allows TikTok's Smart Bidding models to optimize effectively and exit the learning phase with confidence."
      ]
    },
    {
      "heading": "Flexible pricing tiers and disciplined testing cycles",
      "paragraphs": [
        "TikTok Ads management is offered through two transparent options: a Service Charge on Ad Spend (20% for spend up to $500, 15% for $501–$1,000, 10% for $1,000+) or Fixed Monthly Retainers (Basic at ৳5,000/month, Pro at ৳10,000/month, Premium at ৳15,000/month). Ad spend is paid directly to TikTok.",
        "Campaigns launch within one to two weeks following tracking setup and creative production. We monitor thumb-stop rates, video completion percentages, and ROAS daily, scaling winning ad groups while cycling fresh creative angles to maintain profitable delivery."
      ]
    }
  ],
  "website-marketing": [
    {
      "heading": "Uniting SEO, local search, and conversion optimization into one growth system",
      "paragraphs": [
        "A website is an active commercial asset only when qualified prospects discover it and can convert without friction. Fragmenting your marketing across disconnected freelancers—one for basic SEO, another for Google ads, and a third for website tweaks—leads to misaligned strategies and wasted budget.",
        "My website marketing service provides an integrated, full-funnel growth plan for businesses in Bangladesh and abroad. I connect technical SEO, topical content clusters, Google Business Profile management, e-commerce catalog structure, and conversion rate optimization under one accountable practitioner."
      ]
    },
    {
      "heading": "Preparing for conversational AI search (AEO & GEO)",
      "paragraphs": [
        "Search habits are undergoing a fundamental shift. Potential customers increasingly ask complex questions to AI systems like ChatGPT, Claude, Gemini, and Perplexity, receiving direct answers without clicking traditional search links.",
        "I optimize your on-page content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). By structuring information with direct answer passages, verified data points, and schema markup, your website becomes the authoritative source that conversational models cite and recommend."
      ]
    },
    {
      "heading": "Bangladesh commercial nuances and mobile checkout optimization",
      "paragraphs": [
        "In Bangladesh, local search behavior is predominantly mobile-first and mixes Bangla and English search terminology. Furthermore, online conversion rates depend heavily on trust signals and familiar payment methods like bKash, Nagad, and cash on delivery.",
        "I audit your site's mobile performance, page speed, and navigation architecture, removing checkout friction and optimizing local trust elements. This ensures that every visitor acquired through organic search or paid marketing has a clear, frictionless path to becoming a paying client."
      ]
    },
    {
      "heading": "Transparent processes, regular reporting, and no false guarantees",
      "paragraphs": [
        "I do not make unverifiable promises of guaranteed #1 rankings, which violate Google's Webmaster Guidelines. What I provide is a transparent, documented audit-first process, regular monthly performance reporting, and sustainable white-hat optimization that builds long-term organic authority.",
        "Every engagement begins with a comprehensive website audit to evaluate site health, competitor authority, and high-priority conversion bottlenecks. From there, we execute prioritized technical and content improvements with clear milestone tracking."
      ]
    }
  ]
};

function fallbackEditorial(service: Service): EditorialContent {
  const featureList = service.features.map((feature) => feature.title).join(", ");
  const benefitList = service.benefits.map((benefit) => benefit.title.toLowerCase()).join(", ");
  return [
    {
      heading: "A deeper strategy for " + service.title,
      paragraphs: [
        service.title + " should support a real business decision, not exist as an isolated marketing activity. " + service.overview + " We begin by understanding the offer, audience, sales cycle, current performance, and internal capacity. That context determines what needs to happen first and which work can wait until the foundation is ready.",
        "The service is built around " + featureList + ". Each part has a clear role — remove friction, create demand, capture intent, improve trust, or make performance easier to measure. This keeps the work practical while leaving room to adapt when the market, platform, or customer behaviour changes.",
      ],
    },
    {
      heading: "How the work creates compounding value",
      paragraphs: [
        "The immediate goal may be more qualified enquiries, purchases, bookings, or useful conversations, but the strongest programmes also improve the system behind those outcomes. Better messaging creates stronger creative. Better tracking creates better decisions. Better pages and content make every future visit more valuable. Over time, those improvements support " + benefitList + ".",
        "We prioritise work by impact and evidence. A technical fix may come before a new campaign, a positioning decision may come before more content, or a landing-page improvement may come before a larger budget. The point is to build momentum from the highest-impact changes rather than confuse activity with progress.",
      ],
    },
    {
      heading: "What we analyse before making recommendations",
      paragraphs: [
        "Our discovery looks at the current customer journey, competitors, existing assets, analytics quality, search or audience demand, and the practical constraints around implementation. We review what people see, what they are asked to do, where they hesitate, and what the business can reliably deliver after a conversion. This turns a broad ambition into a decision-ready plan.",
        "The audit is deliberately connected to action. Every important observation becomes a recommended change, a testable hypothesis, a measurement requirement, or a reason not to invest yet. That makes the work easier for an owner or internal team to approve, implement, and review.",
      ],
    },
    {
      heading: "A collaborative delivery model",
      paragraphs: [
        "Projects move through discovery, planning, implementation, quality assurance, and optimisation. We share the reasoning behind priorities so the client is never left with a mysterious list of tasks. Depending on the engagement, we can execute directly, work alongside an internal team, or provide the documentation and feedback needed for a clean handoff.",
        "Communication stays focused on decisions and outcomes. Regular updates cover what changed, what was learned, what is blocked, and what should happen next. That rhythm makes it possible to move quickly without losing the context required for good long-term work.",
      ],
    },
    {
      heading: "Measurement that reflects the business",
      paragraphs: [
        "Reporting starts with the agreed definition of success. Depending on the service, that may include qualified leads, revenue, conversion rate, ranking visibility, cost per acquisition, engagement quality, assisted conversions, or improvements in the customer experience. We use channel metrics as evidence, not as a substitute for the outcome the business actually wants.",
        "Performance data is reviewed alongside the quality of the offer and the customer experience. A campaign can be technically efficient but commercially weak, and a high-traffic page can be strategically valuable even before it produces a direct sale. The reporting explains those relationships so the next decision is based on more than a single number.",
      ],
    },
    {
      heading: "Who this service is for",
      paragraphs: [
        "This service is a strong fit for a business with a clear offer, a willingness to share context, and the capacity to act on recommendations. It can support a growing company that needs a structured first plan, an established team that needs specialist execution, or a brand that wants several channels to work together instead of competing for attention.",
        "It is not a promise of instant results or a replacement for product-market fit. We will flag missing foundations, weak tracking, unrealistic timelines, and channel mismatch early. That honesty protects the budget and gives the work a better chance of creating durable value.",
      ],
    },
    {
      heading: "Questions we answer before execution",
      paragraphs: [
        "A useful strategy should make uncertainty smaller. We ask which customer is most valuable, what problem the offer solves, which alternatives the customer is comparing, what proof is available, where the current journey breaks, and which result can be measured with confidence. Those questions prevent a channel or tactic from becoming the plan by default.",
        "We also clarify the practical details — who approves work, who supplies assets, what the implementation window looks like, which platforms are available, and how quickly the team can respond to new insight. A realistic plan is more valuable than an ambitious document that nobody can operate after the first week.",
      ],
    },
    {
      heading: "Building an asset that gets better over time",
      paragraphs: [
        "The first engagement should leave the business with more than a report. It should create reusable messaging, cleaner tracking, better briefs, stronger pages, a clearer calendar, or a repeatable optimisation routine. These assets reduce the cost of the next decision and make future work faster without lowering the quality bar.",
        "As the programme continues, we use new evidence to refine the audience, offer, creative, content, and customer journey. That is why the service is designed as a system — each useful learning should inform another part of the work, and each improvement should make the next month more informed than the last.",
      ],
    },
  ];
}

export function getServiceContent(service: Service): ServiceContentSection[] {
  return [...(editorial[service.slug] ?? []), ...fallbackEditorial(service), ...(service.contentSections ?? [])];
}
