import type { Service, ServiceContentSection } from "@/types";

type EditorialContent = Pick<ServiceContentSection, "heading" | "paragraphs">[];

const editorial: Record<string, EditorialContent> = {
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
  "local-seo": [
    {
      heading: "Local visibility built for Bangladesh",
      paragraphs: [
        "Local search behaviour in Bangladesh is highly contextual. People may search in English, Bangla, or a mixture of both, then compare a map listing, reviews, phone number, opening hours, and social proof before contacting a business. A local SEO programme therefore has to connect the Google Business Profile with the website, location pages, citations, reviews, and the real customer experience.",
        "We start by finding the places where a customer is most likely to discover you — Google Maps, branded search, service-area searches, directory listings, or a recommendation surfaced in an AI answer. From there, we improve the signals that make the business easy to understand and easy to trust, while keeping every location detail accurate and consistent.",
      ],
    },
    {
      heading: "From map impressions to real enquiries",
      paragraphs: [
        "A local ranking is not the business outcome. The useful outcome is a call, direction request, WhatsApp conversation, booking, or store visit from a relevant customer. Our reporting connects visibility with those actions wherever the available tracking allows it, so a business can see which locations and services are generating demand rather than celebrating impressions alone.",
        "For multi-location brands, the work is organised location by location. Each profile gets a clear service description, appropriate categories, locally relevant photos, review prompts, and a page that answers the questions customers ask in that area. That creates a repeatable system without publishing thin, duplicate location pages.",
      ],
    },
  ],
  "google-ads": [
    {
      heading: "Google Ads management that starts with the conversion",
      paragraphs: [
        "Google Ads can put a business in front of a customer at the exact moment they are looking for a solution. That advantage disappears when an account is built around clicks instead of outcomes. Before launch, we define what a valuable conversion means — a qualified call, a form submission, a purchase, a booking, or another action that can be connected to revenue.",
        "For businesses in Bangladesh, search behaviour often mixes Bangla and English, uses local place names, and changes between mobile and desktop. Campaign structure, keyword research, ad copy, landing-page alignment, and negative keywords are planned around that reality. The result is a cleaner account that can learn from reliable data instead of hiding wasted spend behind attractive traffic numbers.",
      ],
    },
    {
      heading: "Clear boundaries and honest optimisation",
      paragraphs: [
        "Search, Shopping, Display, YouTube, and Performance Max each solve different problems. We do not recommend every campaign type simply because it exists. We choose the mix that matches search demand, sales cycle, creative assets, feed quality, budget, and the ability of the website or landing page to convert visitors.",
        "Ongoing management includes search-term review, bid and budget decisions, ad testing, audience analysis, landing-page feedback, and conversion-quality checks. Ad spend is separate from the management fee, and no agency can guarantee a fixed number of leads without controlling the offer, market, site, and auction. What we can provide is a documented process and a transparent view of what the data is saying.",
      ],
    },
  ],
  "meta-ads": [
    {
      heading: "Creative and audience strategy for Facebook and Instagram",
      paragraphs: [
        "Meta Ads work when the creative makes the right person pause, understand the offer, and believe the next step is worth taking. We combine audience research with a creative testing system — hooks, formats, proof points, offers, objections, and calls to action are treated as variables that can be learned from rather than one final design that must somehow work forever.",
        "Campaigns are planned across the customer journey. Prospecting introduces the offer to relevant people, retargeting answers hesitation, and retention or repeat-purchase messaging protects the value of customers already acquired. The structure changes by business model, but the principle remains the same — each audience should receive a message that matches what it already knows.",
      ],
    },
    {
      heading: "Measurement that respects platform limitations",
      paragraphs: [
        "Browser restrictions and privacy changes mean that platform reporting cannot be accepted without validation. We review the Meta Pixel, events, Conversions API, deduplication, attribution windows, and the handoff between the ad and the website. This helps the account optimise toward real actions instead of duplicate or inflated conversions.",
        "Every month should create a sharper point of view. We look at cost per qualified result, creative fatigue, frequency, funnel movement, audience quality, and the gap between platform-reported results and business data. Scaling then becomes a controlled decision — not simply increasing budget on the ad with the cheapest click.",
      ],
    },
  ],
  "tiktok-ads": [
    {
      heading: "Short-form ads that feel native to TikTok",
      paragraphs: [
        "TikTok users decide very quickly whether a video deserves attention. The first seconds, visual movement, spoken language, captioning, and proof need to work together before the viewer has any reason to care about the brand. Our TikTok Ads work begins with ideas and scripts — not with resizing an old banner ad and hoping it blends into the feed.",
        "We build creative around a clear tension or promise, then support it with demonstrations, reactions, creator-style delivery, social proof, or a concise explanation. Spark Ads can extend the life of strong organic content, while paid testing helps identify which hooks and offers deserve more production effort.",
      ],
    },
    {
      heading: "Testing for attention, intent, and action",
      paragraphs: [
        "Reach is useful only when it moves the audience toward the next step. We monitor hold rate, thumb-stop behaviour, video completion, click quality, landing-page engagement, and final conversion data. That creates a feedback loop between creative production and media buying, so the team learns what to say, show, and change next.",
        "TikTok is not the right first channel for every company. It is usually strongest when the offer is visually demonstrable, the brand can produce a steady stream of native video, and the target audience is active on the platform. We assess that fit before recommending spend, then keep the plan flexible enough to learn without wasting budget.",
      ],
    },
  ],
  "pinterest-ads": [
    {
      heading: "Reach customers while they are planning",
      paragraphs: [
        "Pinterest is a discovery environment with unusually strong planning intent. People save ideas for a future room, outfit, recipe, trip, purchase, or project — which means the best advertising does not interrupt an existing conversation; it helps shape the decision while the customer is collecting possibilities.",
        "We align boards, keywords, pin formats, product feeds, landing pages, and seasonal moments around that planning journey. E-commerce brands can use catalog-based campaigns, while service businesses can use educational and inspirational creative that makes the next step feel useful rather than overly promotional.",
      ],
    },
    {
      heading: "A longer life for useful creative",
      paragraphs: [
        "Pinterest creative should be readable, saveable, and valuable even when it is discovered weeks after publication. We develop a system for multiple aspect ratios, clear text hierarchy, destination-specific messaging, and keyword language that reflects how people browse the platform. Strong pins can continue driving visits beyond the initial media flight.",
        "Performance is evaluated across saves, outbound clicks, assisted conversions, catalog engagement, and direct sales where tracking supports it. This makes Pinterest part of a wider demand-generation system rather than a channel judged only by last-click conversion on a short reporting window.",
      ],
    },
  ],
  "chatgpt-ads": [
    {
      heading: "A realistic readiness plan for ChatGPT Ads",
      paragraphs: [
        "ChatGPT Ads are a new advertising environment, so eligibility and platform mechanics can change as OpenAI expands the rollout. We begin with a plain eligibility check based on the business location and category. If direct campaign access is not available, the engagement becomes a readiness plan covering context-hint strategy, offer positioning, creative direction, measurement preparation, and GEO/AEO work that can make the business discoverable in organic AI answers as well.",
        "Context hints are not a copy of a Google keyword list. They describe the situations, questions, needs, and decision moments that bring someone to ChatGPT. A good plan therefore starts with customer language and use cases, then turns those patterns into useful ad concepts and content signals that can support both paid and organic visibility.",
      ],
    },
    {
      heading: "Paid placement and organic AI visibility together",
      paragraphs: [
        "Sponsored placements should be clearly separated from the answer itself, and advertising should not be presented as a way to control what ChatGPT tells a user. Our role is to help a business prepare accurate messaging, a strong offer, appropriate conversion paths, and a measurement plan for a channel whose benchmarks are still developing.",
        "For eligible businesses, the work can include campaign setup, creative, context-hint targeting, pixel or conversion infrastructure, and ongoing optimisation. For businesses waiting for access, we build the assets now so launch is not the first day the strategy begins. We do not promise guaranteed performance or sell access where the market is not eligible.",
      ],
    },
  ],
  "media-buying": [
    {
      heading: "Media buying as a connected investment system",
      paragraphs: [
        "Media buying is the discipline of turning a budget into qualified attention across the channels where a customer is most likely to notice, consider, and act. It is broader than pressing publish in an ad manager. We connect market research, audience selection, placement decisions, creative testing, frequency control, landing-page quality, and conversion data into one operating plan.",
        "The right channel mix depends on the offer and the buying cycle. Search can capture existing demand, social can create and shape demand, video can explain a complex product, and remarketing can recover attention that would otherwise be lost. We allocate budget according to evidence and business priorities rather than treating every platform as equally important.",
      ],
    },
    {
      heading: "Better decisions before more budget",
      paragraphs: [
        "A media plan should make assumptions visible. We define the audience, estimated demand, creative requirements, conversion event, expected learning period, and stop-or-scale rules before the campaign launches. That protects the account from reactive changes made after one noisy day of data.",
        "Reporting focuses on qualified outcomes and the role each channel plays in the funnel. Reach, frequency, CPM, CPC, CPA, ROAS, assisted conversion, and lead quality are considered together. The purpose is not to force every channel to look identical; it is to understand how the system is performing and where the next useful experiment should happen.",
      ],
    },
  ],
  "social-media-management": [
    {
      heading: "Consistent social media management with a clear role for every platform",
      paragraphs: [
        "Social media management is most effective when a brand knows what each platform is expected to do. Facebook may support community and local trust, Instagram may lead with visual identity and product proof, Pinterest may capture planning behaviour, and LinkedIn may develop professional authority. We build a channel plan around those differences instead of publishing the same message everywhere.",
        "The monthly system covers content pillars, captions, creative direction, publishing, community responses, moderation, and performance review. It is designed to make a brand recognisable over time through clear language, repeatable visual cues, helpful answers, and enough flexibility to respond to timely moments without abandoning the strategy.",
      ],
    },
    {
      heading: "Content that earns attention and trust",
      paragraphs: [
        "Organic social cannot compensate for an unclear offer, but it can make the offer easier to understand and trust. We use education, proof, behind-the-scenes context, product or service demonstrations, customer questions, and point-of-view content to create a balanced feed. Promotional posts have a place, but they work better when the audience already understands why the business is credible.",
        "Success is measured with a mix of meaningful engagement, profile actions, inquiries, saves, shares, reach quality, response time, and downstream website or campaign data. Follower growth can be a useful signal, but it is not treated as the entire business case. The goal is a healthier audience and a more useful brand presence.",
      ],
    },
  ],
  "website-marketing": [
    {
      heading: "A website marketing plan built around the whole customer journey",
      paragraphs: [
        "A website is not finished when it goes live. It needs the right audience to discover it, a clear message to hold attention, a credible reason to believe, and a simple path to enquire or buy. Website marketing connects SEO, paid traffic, content, social distribution, email, analytics, and conversion optimisation so each activity improves the value of the others.",
        "We begin with the business goal and the customer journey. A local service provider may need calls and direction requests, an e-commerce store may need product discovery and repeat purchase, and a B2B company may need education before a sales conversation. The marketing plan changes with that reality rather than forcing every business into the same channel list.",
      ],
    },
    {
      heading: "Traffic is only useful when the website can convert it",
      paragraphs: [
        "Marketing performance often reveals website problems that traffic reports hide. Weak positioning, slow pages, missing proof, confusing navigation, poor mobile forms, or incomplete tracking can make an apparently successful campaign unprofitable. We surface those issues early and connect recommendations to the page, funnel stage, or conversion event they affect.",
        "The ongoing roadmap balances quick wins with compounding work. Paid campaigns can create immediate learning, SEO and content can build durable visibility, and CRO can increase the value of both. Every recommendation is prioritised by likely business impact, evidence, effort, and the capacity of the team to implement it.",
      ],
    },
  ],
  "creative-content": [
    {
      heading: "Content that sounds like the business and serves the customer",
      paragraphs: [
        "Creative content should do more than fill a calendar. It should answer a real question, explain a valuable difference, make a product easier to choose, support a campaign, or give a customer a reason to trust the brand. We develop content across website pages, articles, blogs, product descriptions, press releases, email newsletters, reviews, and social posts while keeping the voice consistent.",
        "The brief covers audience, intent, offer, proof, tone, required action, and any subject-matter constraints before writing begins. That gives each piece a job. SEO content is shaped around search intent and topical depth, while campaign content is shaped around attention, objection handling, and a clear next step.",
      ],
    },
    {
      heading: "A repeatable editorial process",
      paragraphs: [
        "Research and outlining protect quality. We review the audience language, competitor positioning, available evidence, brand vocabulary, and the page or platform where the content will appear. Drafting then focuses on clarity, useful detail, strong structure, and natural calls to action rather than padding a word count.",
        "Editing checks accuracy, flow, search intent, readability, originality, and consistency with the business promise. We can create a single high-priority page or support a regular editorial programme with calendars, briefs, reusable frameworks, and content repurposing. That makes content production easier to manage as the website and campaigns grow.",
      ],
    },
  ],
};

function fallbackEditorial(service: Service): EditorialContent {
  const featureList = service.features.map((feature) => feature.title).join(", ");
  const benefitList = service.benefits.map((benefit) => benefit.title.toLowerCase()).join(", ");
  return [
    {
      heading: `A deeper strategy for ${service.title}`,
      paragraphs: [
        `${service.title} should support a real business decision, not exist as an isolated marketing activity. ${service.overview} We begin by understanding the offer, audience, sales cycle, current performance, and internal capacity. That context determines what needs to happen first and which work can wait until the foundation is ready.`,
        `The service is built around ${featureList}. Each part has a clear role — remove friction, create demand, capture intent, improve trust, or make performance easier to measure. This keeps the work practical while leaving room to adapt when the market, platform, or customer behaviour changes.`,
      ],
    },
    {
      heading: "How the work creates compounding value",
      paragraphs: [
        `The immediate goal may be more qualified enquiries, purchases, bookings, or useful conversations, but the strongest programmes also improve the system behind those outcomes. Better messaging creates stronger creative. Better tracking creates better decisions. Better pages and content make every future visit more valuable. Over time, those improvements support ${benefitList}.`,
        `We prioritise work by impact and evidence. A technical fix may come before a new campaign, a positioning decision may come before more content, or a landing-page improvement may come before a larger budget. The point is to build momentum from the highest-leverage changes rather than confuse activity with progress.`,
      ],
    },
    {
      heading: "What we analyse before making recommendations",
      paragraphs: [
        `Our discovery looks at the current customer journey, competitors, existing assets, analytics quality, search or audience demand, and the practical constraints around implementation. We review what people see, what they are asked to do, where they hesitate, and what the business can reliably deliver after a conversion. This turns a broad ambition into a decision-ready plan.`,
        `The audit is deliberately connected to action. Every important observation becomes a recommended change, a testable hypothesis, a measurement requirement, or a reason not to invest yet. That makes the work easier for an owner or internal team to approve, implement, and review.`,
      ],
    },
    {
      heading: "A collaborative delivery model",
      paragraphs: [
        `Projects move through discovery, planning, implementation, quality assurance, and optimisation. We share the reasoning behind priorities so the client is never left with a mysterious list of tasks. Depending on the engagement, we can execute directly, work alongside an internal team, or provide the documentation and feedback needed for a clean handoff.`,
        `Communication stays focused on decisions and outcomes. Regular updates cover what changed, what was learned, what is blocked, and what should happen next. That rhythm makes it possible to move quickly without losing the context required for good long-term work.`,
      ],
    },
    {
      heading: "Measurement that reflects the business",
      paragraphs: [
        `Reporting starts with the agreed definition of success. Depending on the service, that may include qualified leads, revenue, conversion rate, ranking visibility, cost per acquisition, engagement quality, assisted conversions, or improvements in the customer experience. We use channel metrics as evidence, not as a substitute for the outcome the business actually wants.`,
        `Performance data is reviewed alongside the quality of the offer and the customer experience. A campaign can be technically efficient but commercially weak, and a high-traffic page can be strategically valuable even before it produces a direct sale. The reporting explains those relationships so the next decision is based on more than a single number.`,
      ],
    },
    {
      heading: "Who this service is for",
      paragraphs: [
        `This service is a strong fit for a business with a clear offer, a willingness to share context, and the capacity to act on recommendations. It can support a growing company that needs a structured first plan, an established team that needs specialist execution, or a brand that wants several channels to work together instead of competing for attention.`,
        `It is not a promise of instant results or a replacement for product-market fit. We will flag missing foundations, weak tracking, unrealistic timelines, and channel mismatch early. That honesty protects the budget and gives the work a better chance of creating durable value.`,
      ],
    },
    {
      heading: "Questions we answer before execution",
      paragraphs: [
        `A useful strategy should make uncertainty smaller. We ask which customer is most valuable, what problem the offer solves, which alternatives the customer is comparing, what proof is available, where the current journey breaks, and which result can be measured with confidence. Those questions prevent a channel or tactic from becoming the plan by default.`,
        `We also clarify the practical details — who approves work, who supplies assets, what the implementation window looks like, which platforms are available, and how quickly the team can respond to new insight. A realistic plan is more valuable than an ambitious document that nobody can operate after the first week.`,
      ],
    },
    {
      heading: "Building an asset that gets better over time",
      paragraphs: [
        `The first engagement should leave the business with more than a report. It should create reusable messaging, cleaner tracking, better briefs, stronger pages, a clearer calendar, or a repeatable optimisation routine. These assets reduce the cost of the next decision and make future work faster without lowering the quality bar.`,
        `As the programme continues, we use new evidence to refine the audience, offer, creative, content, and customer journey. That is why the service is designed as a system — each useful learning should inform another part of the work, and each improvement should make the next month more informed than the last.`,
      ],
    },
  ];
}

export function getServiceContent(service: Service): ServiceContentSection[] {
  return [...(editorial[service.slug] ?? []), ...fallbackEditorial(service), ...(service.contentSections ?? [])];
}
