import type { CaseStudy, PortfolioProject } from "@/types";

const imageRoot = "/case-studies/facebook-ads";

const context = `CONTEXT
Why Andromeda Changes the Playbook

In 2026, Meta finished rolling out Andromeda - the AI retrieval engine that now decides which ads even get a chance to enter the auction. Where the old system matched ads to audiences using interests and demographics, Andromeda reads the creative itself: hooks, pacing, message, format. It predicts who will respond before targeting settings matter much at all.

For small and mid-size advertisers, that changes the job. It means fewer manually stacked interest sets and more creative variations; broader ad sets so the algorithm has room to learn; and campaign structures built around signals Andromeda can act on quickly, like Messenger conversations and video ThruPlays. Every account in this portfolio was run with that shift in mind - smaller ad sets, stacking dozens of scrappy new tests, rather than one polished ad left to run for months.`;

const overview: CaseStudy = {
  slug: "facebook-instagram-ads-portfolio",
  title: "Facebook & Instagram Ads Portfolio",
  client: "Seven managed Meta Ads accounts",
  industry: "Performance Marketing",
  category: "paid-ads",
  summary: "Seven creative-led Meta Ads case studies across fragrance, fashion, beauty, education, travel, web development, and overseas-study consultancy.",
  coverImage: `${imageRoot}/sumons-aroma.png`,
  timeline: "Lifetime account totals as of late June 2026",
  tools: ["Meta Ads Manager", "Messenger Conversations", "Lead Forms", "Video ThruPlay", "Advantage+"],
  problem: "Small and mid-size advertisers needed efficient acquisition without depending on large budgets or narrow, manually stacked audiences.",
  research: "The portfolio was reviewed from live Meta Ads Manager reporting across seven managed accounts, covering 334 campaigns and $9,988.16 in spend.",
  planning: "Campaign structures were planned around broad targeting, message-led creative, frequent refreshes, and conversion paths suited to each business.",
  strategy: "The common operating model was small daily budgets, frequent creative refreshes, messaging-first conversion paths, and enough campaign breadth for Meta's Andromeda engine to find responsive people.",
  execution: "Across seven accounts, the work generated over 14 million impressions and reached more than 5.5 million people.",
  screenshots: ["sumons-aroma.png", "riha-webtech.png", "ipb-happy-tours.png", "ruposhi-mart.png", "luxury-beauty-rwt.png", "rpl-consultancy.png", "travel-lifestyle.png"].map((file) => `${imageRoot}/${file}`),
  metrics: [
    { label: "Managed campaigns", before: "7 accounts", after: "334 campaigns", change: "334" },
    { label: "Managed ad spend", before: "$0", after: "$9,988.16", change: "$9,988.16" },
    { label: "Impressions", before: "0", after: "14M+", change: "14M+" },
    { label: "People reached", before: "0", after: "5.5M+", change: "5.5M+" },
  ],
  lessonsLearned: [
    "Creative velocity can outperform budget size when the system is given enough fresh signals.",
    "Broad targeting works best when the creative clearly communicates one offer, audience problem, or service line.",
    "Messenger conversations, lead forms, purchases, and ThruPlay views each need a campaign structure that matches the conversion path.",
  ],
  fullContent: `FACEBOOK & INSTAGRAM ADS PORTFOLIO
Seven Case Studies in Creative-Led Performance Marketing
Built and rebuilt for Meta's Andromeda update

Prepared from live Meta Ads Manager reporting across all managed accounts

Portfolio Snapshot

This portfolio brings together seven live Meta Ads accounts spanning fragrance, fashion, beauty, education, travel, web development, and overseas-study consultancy. Across 334 campaigns and $9,988.16 in managed ad spend, these accounts generated over 14 million impressions and reached more than 5.5 million people - almost entirely on small, daily-budget campaigns rather than large one-off pushes. What ties them together is a shared response to Meta's Andromeda update: broad targeting, messaging-first creative, and a constant rotation of new ad variations built to keep pace with a system that now ranks ads primarily on creative signal, not audience definition.

${context}

CLOSING
The Common Thread

No single account in this portfolio relies on a big budget. What repeats across all seven - fragrance, web design, education, travel, fashion, beauty, and consultancy - is the same operating rhythm: small daily budgets, frequent creative refreshes, messaging-first conversion paths, and campaign structures broad enough for Meta's Andromeda engine to do the targeting work on its own.

Combined, these seven accounts spent $9,988.16 to generate over 14 million impressions and reach 5.5 million people. The lesson carries past any single client: in the Andromeda era, creative velocity - how many honest new variations you can put in front of the algorithm - outperforms budget size almost every time.

Figures compiled from Meta Ads Manager reporting (lifetime account totals as of late June 2026) across all seven managed accounts.`,
  relatedCaseStudies: ["sumons-aroma-messenger-commerce", "rihawebtech-meta-ads"],
  metaTitle: "Facebook and Instagram Ads Portfolio Case Studies",
  metaDescription: "Seven creative-led Meta Ads case studies covering 334 campaigns, $9,988.16 in managed spend, 14M+ impressions, and 5.5M+ reach.",
  sectionLabels: {
    problem: "Paid Social Campaign Challenge",
    research: "Meta Ads Account & Audience Research",
    planning: "Facebook and Instagram Campaign Planning",
    strategy: "Creative-Led Meta Ads Strategy",
    execution: "Campaign Execution and Performance Results",
  },
};

type AdsRecord = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  campaigns: string;
  spend: string;
  impressions: string;
  reach: string;
  problem: string;
  research: string;
  planning: string;
  strategy: string;
  execution: string;
  alignment: string;
};

const records: AdsRecord[] = [
  { slug: "sumons-aroma-messenger-commerce", title: "Sumon's Aroma & Sister Brands", subtitle: "Fragrance, Beauty & D2C Messenger Commerce", image: "sumons-aroma.png", campaigns: "36 campaigns", spend: "$756.71", impressions: "1.6 million", reach: "over a million unique people", problem: "The brands sold primarily through Facebook Messenger rather than a checkout page and needed a steady flow of affordable conversations.", research: "Reporting showed Engagement campaigns optimized for Messaging Conversations Started were the most suitable conversion path across the partner brands.", planning: "New campaigns were launched every few days on $3-$10 daily budgets instead of relying on one large evergreen ad set.", strategy: "The account used dozens of small, fast-moving tests to create broad creative diversity across Sumon's Aroma, RB, Saha, Bokul Tula Dhaka, and BoomBaazz.", execution: "Several campaigns landed below $0.10 per messaging conversation. Across 36 campaigns, $756.71 generated 1.6 million impressions and reached over a million unique people, with blended CPM under $0.50.", alignment: "Frequent, low-cost creative refreshes across many small partner brands - the exact volume-over-polish pattern the retrieval engine now favors." },
  { slug: "rihawebtech-meta-ads", title: "Riha Webtech", subtitle: "Web Design & Local Digital Services", image: "riha-webtech.png", campaigns: "18 campaigns", spend: "$431", impressions: "275K", reach: "not reported", problem: "Technical services such as Laravel development, landing pages, label design, and server-side tracking are harder to sell than physical products and depend on trust-building creative.", research: "The service catalogue was separated by buyer intent so each campaign could communicate one specific service rather than one generic agency pitch.", planning: "Campaigns were split by service line, giving every creative angle a cleaner relationship to the problem it was meant to solve.", strategy: "The strategy used one creative angle per service line, broad delivery, and Messaging Conversations as the primary response path.", execution: "On a modest $431 spend across 18 campaigns, the account generated 275K impressions and drove messaging conversations at costs as low as $0.04; landing-page and tracking-setup campaigns settled around $0.15-$0.20 per conversation.", alignment: "One creative angle per service line, not one ad trying to sell everything - giving the retrieval engine a cleaner signal to match against buyer intent." },
  { slug: "ipb-edu-happy-tours-meta-ads", title: "IPB Edu & Happy Tours", subtitle: "Education Consultancy & Travel Booking", image: "ipb-happy-tours.png", campaigns: "37 campaigns", spend: "$1,141.45", impressions: "1.83 million", reach: "not reported", problem: "Two distinct verticals needed different conversion paths: education-consultancy inquiries and travel bookings.", research: "The account was reviewed across Messenger and click-to-call campaigns, the weekly Jix campaign series, and a Serbia-focused visa and travel audience.", planning: "Creative was iterated every few days instead of running one ad indefinitely, with format and conversion path selected by service.", strategy: "The campaign mix paired Messenger with click-to-call, using weekly refreshes and a focused outbound-migration audience.", execution: "Cost per messaging conversation frequently landed between $0.09 and $0.15. One May campaign pushed 30,000-plus impressions from a $5 daily budget. Across 37 campaigns, $1,141.45 produced 1.83 million impressions.", alignment: "A weekly refresh cadence, rather than a single long-running ad, is what Andromeda's creative-diversity filters are built to reward." },
  { slug: "ruposhi-mart-meta-ads", title: "Ruposhi Mart & Partner Brands", subtitle: "Fashion & Beauty E-Commerce, Multi-Brand Portfolio", image: "ruposhi-mart.png", campaigns: "138 campaigns", spend: "$6,315.66", impressions: "7.28 million", reach: "1.8 million people", problem: "Six e-commerce brands needed different objectives across sales, awareness, and Messenger-led engagement without losing control of the account.", research: "The account included Sales campaigns for Inner Comfort and Beauty Glow, Awareness for Rupchaya, and Engagement campaigns for Bd Brand Shop and Femland.", planning: "Spend stayed distributed across dozens of small, brand-specific tests rather than one mega-campaign.", strategy: "The structure maximized creative surface area for Advantage+ and kept objectives aligned with each brand's actual purchase or conversation path.", execution: "A $10/day awareness push for Rupchaya reached 156,545 people. Across 138 campaigns, $6,315.66 produced 7.28 million impressions and reached 1.8 million people, with low frequency across most awareness campaigns.", alignment: "Six brands, dozens of parallel small-budget campaigns - maximum creative surface area for the retrieval engine to sort through." },
  { slug: "luxury-beauty-rwt-meta-ads", title: "Luxury Beauty - RWT", subtitle: "Beauty & Skincare, Direct-Response Sales", image: "luxury-beauty-rwt.png", campaigns: "23 campaigns", spend: "$350.23", impressions: "488,251", reach: "388,554 people", problem: "The beauty brand needed purchase-focused campaigns that could stay efficient with modest average order values while keeping Messenger demand warm.", research: "The account combined Sales campaigns for IC Basu and the 1RM/2RM/3RM Dipto offers with BG Dipto Engagement campaigns.", planning: "Budgets stayed small and campaigns short-lived, with many wrapping within a week so creative could rotate before fatigue set in.", strategy: "The strategy layered direct website purchase optimization with Messenger engagement between sales pushes.", execution: "On $350.23 in spend, the account reached 388,554 people with 488,251 impressions, while purchase-optimized campaigns held cost-per-purchase in the low single digits.", alignment: "Short-lived, fast-rotating sales campaigns avoid the creative fatigue that Andromeda's filters increasingly penalize." },
  { slug: "rpl-consultancy-meta-ads", title: "RPL Consultancy", subtitle: "Overseas Education & Immigration Consultancy", image: "rpl-consultancy.png", campaigns: "8 campaigns", spend: "$273.17", impressions: "1.15 million", reach: "663,407 people", problem: "An overseas education and immigration consultancy needed high-intent leads while also building affordable top-funnel awareness.", research: "The account was evaluated across a lead-form campaign, a broad Awareness push, and ThruPlay video Engagement campaigns.", planning: "Rather than testing dozens of angles, spend was concentrated on a smaller number of high-intent formats matched to funnel stage.", strategy: "Lead forms served bottom-funnel prospects while broad awareness and recall formats let Andromeda find the audience without heavy segmentation.", execution: "The lead-form campaign converted at $1.42 per lead; the Awareness push reached 329,646 people using ad-set budget optimization; and ThruPlay views cost fractions of a cent. Eight campaigns generated 1.15 million impressions and reached 663,407 people from $273.17.", alignment: "Fewer, sharper formats plus genuinely broad targeting - proof the engine does not need audience segmentation to find the right people." },
  { slug: "travel-lifestyle-meta-ads", title: "Travel & Lifestyle Testing Engine", subtitle: "Travel Agencies, Visa Services & Lifestyle Products", image: "travel-lifestyle.png", campaigns: "74 campaigns", spend: "$719.94", impressions: "1.38 million", reach: "824,745 people", problem: "Travel agencies, visa services, and lifestyle product campaigns needed a low-budget testing engine that could compare creative formats quickly.", research: "The account covered Karima Travel, Green Way Visa & Travels, an iPhone product push, and the RMSD ThruPlay video series.", planning: "Daily budgets stayed between $2 and $5, with head-to-head reel versus static tests and multiple ThruPlay cuts released back-to-back.", strategy: "The account prioritized more variants and smaller budgets, using Messenger conversations for travel and ThruPlay for video awareness.", execution: "Travel messaging campaigns held costs between $0.03 and $0.32. RMSD ThruPlay campaigns ran at roughly $0.001 per view. Across 74 campaigns, $719.94 generated 1.38 million impressions and reached 824,745 people.", alignment: "Volume of tests over size of budget - 74 campaigns on under $750 is the clearest example of feeding the algorithm rather than out-spending it." },
];

function makeContent(record: AdsRecord) {
  return `CASE STUDY\nFacebook & Instagram Ads Campaign: ${record.title}\n${record.subtitle}\n\n1. Campaign Overview\nAds Manager view: ${record.title} account, ${record.campaigns}\n\n2. Meta Ads Strategy and Execution\n${record.execution}\n\n3. Andromeda Creative Alignment\n${record.alignment}`;
}

export const facebookAdsCaseStudies: CaseStudy[] = [overview, ...records.map((record) => ({
  slug: record.slug,
  title: `Meta Ads Case Study: ${record.title}`,
  client: record.title,
  industry: record.subtitle,
  category: "paid-ads" as const,
  summary: record.execution,
  coverImage: `${imageRoot}/${record.image}`,
  timeline: "Lifetime account totals as of late June 2026",
  tools: ["Meta Ads Manager", "Messenger Conversations", "Broad Targeting", "Creative Testing", "Advantage+"],
  problem: record.problem,
  research: record.research,
  planning: record.planning,
  strategy: record.strategy,
  execution: record.execution,
  screenshots: [`${imageRoot}/${record.image}`],
  metrics: [
    { label: "Campaigns", before: "0", after: record.campaigns, change: record.campaigns.replace(" campaigns", "") },
    { label: "Managed spend", before: "$0", after: record.spend, change: record.spend },
    { label: "Impressions", before: "0", after: record.impressions, change: record.impressions },
    { label: "Reach", before: "0", after: record.reach, change: record.reach },
  ],
  lessonsLearned: [record.alignment, "Fresh creative variations gave Meta more useful signals than a single polished ad left to run for months.", "The conversion path was selected by business model: Messenger, calls, lead forms, purchases, or ThruPlay."],
  fullContent: makeContent(record),
  relatedCaseStudies: ["facebook-instagram-ads-portfolio"],
  metaTitle: `Meta Ads Case Study - ${record.title}`,
  metaDescription: record.execution,
  sectionLabels: {
    problem: "Paid Social Campaign Challenge",
    research: "Meta Ads Account & Audience Research",
    planning: "Facebook and Instagram Campaign Planning",
    strategy: "Creative-Led Meta Ads Strategy",
    execution: "Campaign Execution and Performance Results",
  },
}))];

export const facebookAdsPortfolioProjects: PortfolioProject[] = records.map((record) => ({
  slug: record.slug,
  title: `Facebook & Instagram Ads - ${record.title}`,
  client: record.title,
  category: "paid-ads",
  tags: ["Facebook Ads", "Instagram Ads", "Meta Ads", ...record.subtitle.split(" & ")],
  summary: record.execution,
  coverImage: `${imageRoot}/${record.image}`,
  gallery: [`${imageRoot}/${record.image}`],
  technologies: ["Meta Ads Manager", "Creative Testing", "Messenger", "Advantage+"],
  timeline: "Lifetime account totals as of late June 2026",
  challenge: record.problem,
  solution: `${record.strategy} ${record.alignment}`,
  results: [
    { label: "Campaigns", value: record.campaigns },
    { label: "Spend", value: record.spend },
    { label: "Impressions", value: record.impressions },
    { label: "Reach", value: record.reach },
  ],
  featured: true,
  relatedProjects: ["facebook-ads-portfolio-overview"],
  metaTitle: `Meta Ads Portfolio - ${record.title}`,
  metaDescription: record.execution,
}));
