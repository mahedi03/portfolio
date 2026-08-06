import type { CaseStudy } from "@/types";
import { jarixoCaseStudyContent } from "@/data/jarixoCaseStudyContent";

/**
 * Case studies. Metrics must reflect real, verifiable results only.
 * per project convention, never fabricate statistics.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "jarixo-topical-map-seo-visibility",
    title: "Building a Topical Map to Boost SEO Visibility for Jarixo",
    client: "Jarixo",
    industry: "DTC Wellness",
    category: "seo",
    summary:
      "How a 10-pillar topical authority framework turned an 11-SKU wellness catalog into a structured content and internal-linking system built for organic search growth.",
    coverImage: "/case-studies/Jarixo/Jarixo Website.png",
    timeline: "Topical map and content strategy project",
    tools: ["Topical Authority Framework", "Semrush", "Ahrefs", "Shopify"],
    problem:
      "Jarixo had 11 live products and Shopify collection pages, but no blog, internal linking system, or defined search intent connecting the product catalog to content.",
    research:
      "The work began by defining the central entity, Jarixo's source context, and the central search intent before breaking the space into topical pillars.",
    planning:
      "The catalog was organized into 10 pillars, three content layers, 11 content attributes, and a phased rollout plan designed to separate informational blog intent from commercial collection intent.",
    strategy:
      "The strategy used a 10-pillar topical authority framework covering body-area, use-case, office, travel, and seasonal gifting topics, with every planned article connected to a product and an internal-link destination.",
    execution:
      "The final topical map corrected hub-versus-collection cannibalization, replaced truncated slugs with real search phrases, added reviews and social proof, mapped all 11 products, and produced roughly 100 content opportunities across the core pillars.",
    screenshots: [],
    metrics: [],
    lessonsLearned: [
      "Architecture before content gives every page a clear job and a clear conversion destination.",
      "Separating blog hubs, commercial collection pages, and cluster articles prevents keyword cannibalization.",
      "A complete product-to-topic map keeps content connected to something the store can convert into.",
    ],
    fullContent: jarixoCaseStudyContent,
    relatedCaseStudies: ["pixc-retouch-global-seo", "phone-fashion-fix-local-seo"],
    metaTitle: "Jarixo Topical Map SEO Case Study",
    metaDescription:
      "How a 10-pillar topical authority framework turned Jarixo's 11-SKU wellness catalog into a structured SEO content and internal-linking system.",
  },
  {
    slug: "example-seo-growth",
    title: "Organic Traffic Growth Through Technical SEO",
    client: "Example Client",
    industry: "E-commerce",
    category: "seo",
    summary:
      "Fixed critical crawlability issues and rebuilt the site's content architecture to drive sustainable organic growth.",
    coverImage: "/case-studies/placeholder-cover.jpg",
    timeline: "6 months",
    tools: ["Google Search Console", "Screaming Frog", "Semrush"],
    problem:
      "The site had significant indexation issues caused by duplicate content and a shallow crawl depth on key pages.",
    research:
      "A full technical crawl and log file analysis revealed which pages Google was and wasn't discovering.",
    planning:
      "Built a prioritized remediation plan covering canonical tags, internal linking, and a topical content structure.",
    strategy:
      "Combined technical fixes with a pillar-and-cluster content strategy targeting high-intent commercial keywords.",
    execution:
      "Implemented fixes in phases, monitoring crawl stats and indexation in Search Console after each release.",
    screenshots: ["/case-studies/placeholder-chart-1.jpg"],
    metrics: [
      { label: "Indexed pages", before: "Baseline", after: "Improved", change: "Increased" },
    ],
    lessonsLearned: [
      "Technical fixes alone plateau without a supporting content strategy.",
      "Log file analysis surfaced crawl budget issues invisible in standard audits.",
    ],
    relatedCaseStudies: [],
    metaTitle: "Organic Traffic Growth Case Study",
    metaDescription:
      "How technical SEO fixes and a content strategy combined to drive sustainable organic growth for an e-commerce client.",
  },
  {
    slug: "phone-fashion-fix-local-seo",
    title: "Building Top-10 Local Search Visibility for Phone Fashion Fix",
    client: "Phone Fashion Fix",
    industry: "Mobile Device & Electronics Repair",
    category: "seo",
    summary:
      "A local and technical SEO programme built a 34-page service architecture for an Ocala, Florida repair business, growing Search Console impressions from 263 to 6,980 and clicks from 12 to 196 across the trailing three-month comparison.",
    coverImage: "/case-studies/phone-fashion-fix/image-4.png",
    timeline: "Phased campaign, 2026",
    tools: ["Google Search Console", "Semrush", "Schema markup", "Local SEO", "Internal linking"],
    problem:
      "Phone Fashion Fix was competing in Ocala, Florida against national repair chains, mall kiosks, and established local shops, but the site had no meaningful organic footprint. It lacked a local silo structure, service-specific landing pages, content depth, and an off-site trust signal. A generic repair-services page could not match the many exact searches customers use, from iPhone screen repair to Android charging-port repair in Ocala.",
    research:
      "The campaign began with keyword, competitor, service-catalog, and site-architecture research. The opportunity was mapped across five topical silos: iPhone repair, iPad repair, Android smartphone repair, tablet repair, and common repair issues. Search Console snapshots were used as first-party evidence during rollout, while competitor and query analysis clarified which device-and-repair combinations needed their own local page.",
    planning:
      "The site was planned as a hub-and-spoke structure rooted in a local money page for phone repair in Ocala. Device hubs and individual repair pages were connected through deliberate internal links, with each page targeting one clear local intent. Supporting blog topics were mapped under the appropriate silo so problem-aware searches could feed relevance and authority back to commercial service pages.",
    strategy:
      "The strategy combined local site architecture, on-page optimisation, semantic content, and off-page authority building. Thirty-four money and supporting pages were published across five silos, with local signals reflected in URLs, titles, headings, opening copy, internal links, and schema opportunities. Citation work, branded profile links, and contextual outreach were layered in to help a new local domain compete with established businesses.",
    execution:
      "Execution moved through foundation research, service-page rollout, semantic blog clusters, off-page campaigns, and ongoing Search Console monitoring. The latest three-month snapshot recorded 196 clicks and 6.98K impressions compared with 12 clicks and 263 impressions in the previous period. The blended average position increased as the site began ranking for a much wider keyword universe, including newer pages still moving upward.",
    screenshots: [
      "/case-studies/phone-fashion-fix/image-1.png",
      "/case-studies/phone-fashion-fix/image-2.png",
      "/case-studies/phone-fashion-fix/image-3.png",
      "/case-studies/phone-fashion-fix/image-4.png",
    ],
    metrics: [
      { label: "Service pages ranked", before: "0 meaningful pages", after: "34 pages", change: "34" },
      { label: "3-month impressions", before: "263", after: "6,980", change: "+2,554%" },
      { label: "3-month clicks", before: "12", after: "196", change: "+1,533%" },
      { label: "Topical silos", before: "0", after: "5", change: "5 built" },
    ],
    lessonsLearned: [
      "Architecture before content gave every page a clear job and a clear internal-link destination.",
      "Local intent specificity made it possible to compete for exact device-and-repair searches instead of one broad term.",
      "Topical depth and off-page trust worked together. Neither a flat service list nor links alone would have created the same signal.",
      "A wider keyword footprint can temporarily lower blended average position while the new long-tail pages mature.",
    ],
    snapshot: [
      { label: "Business", value: "Phone Fashion Fix, mobile device repair" },
      { label: "Website", value: "phonefashionfix.com" },
      { label: "Target market", value: "Ocala, Florida, hyper-local single-city service area" },
      { label: "Competitive landscape", value: "National repair chains, mall kiosks, and established local competitors" },
      { label: "Engagement scope", value: "Technical and on-page SEO, local architecture, semantic content, link building, and Search Console monitoring" },
      { label: "My role", value: "Sole SEO strategist covering architecture, keyword mapping, content briefs, implementation oversight, and link acquisition" },
    ],
    silos: [
      { name: "iPhone Repair Silo", hierarchy: "Phone Repair Ocala > iPhone Repair", pages: "Screen Repair, Battery Replacement, Charging Port Repair, Camera Repair, Water Damage Repair, Back Glass Repair" },
      { name: "iPad Repair Silo", hierarchy: "Phone Repair Ocala > iPad Repair", pages: "Screen Repair, Battery Replacement, Charging Port Repair, Water Damage Repair, Button Repair" },
      { name: "Smartphone (Android) Silo", hierarchy: "Phone Repair Ocala > Smartphone Repair", pages: "Android Phone Repair, Samsung Repair, Google Pixel Repair, Cracked Screen Repair, Battery Replacement, Charging Port Repair, Water Damage Repair" },
      { name: "Tablet Repair Silo", hierarchy: "Phone Repair Ocala > Tablet Repair", pages: "Screen Repair, Battery Replacement, Charging Port Repair, Water Damage Repair, Diagnostic Service" },
      { name: "Common Repair Issues Silo", hierarchy: "Phone Repair Ocala > Common Repair Issues", pages: "Cracked Screen, Battery Drain, Not Charging, Water Damage, Camera Repair" },
    ],
    timelineSteps: [
      "Phase 1 - Foundation: keyword and competitor research, silo mapping, URL structure, and local money page build-out.",
      "Phase 2 - Service Page Rollout: publication of all 34 device and service local landing pages across five silos.",
      "Phase 3 - Semantic Content Layer: supporting blog clusters mapped to each silo for topical depth and long-tail visibility.",
      "Phase 4 - Off-Page Campaign: directory citations, profile backlinks, and contextual outreach to build domain trust.",
      "Phase 5 - Monitoring and Iteration: Search Console tracking for indexing, impressions, and ranking movement, followed by on-page refinements.",
    ],
    performanceRows: [
      { date: "Jun 28, 2026", range: "Last 28 days", clicks: "108", impressions: "1.33K", ctr: "8.1%", position: "15.4" },
      { date: "Jul 3, 2026", range: "Last 28 days, prior: 31 clicks / 436 impressions", clicks: "103", impressions: "1.62K", ctr: "6.4%", position: "17.2" },
      { date: "Jul 3, 2026", range: "Last 3 months", clicks: "159", impressions: "2.39K", ctr: "6.7%", position: "17.8" },
      { date: "Jul 24, 2026", range: "Last 3 months", clicks: "194", impressions: "4.61K", ctr: "4.2%", position: "19.9" },
      { date: "Aug 4, 2026", range: "Last 3 months, prior: 12 clicks / 263 impressions", clicks: "196", impressions: "6.98K", ctr: "2.8%", position: "21.1" },
    ],
    resultReadout: [
      "Impressions scaled 26x, from 263 to 6,980, showing that Google began surfacing the site for a much wider set of local queries.",
      "Clicks grew from 12 to 196, confirming that the added visibility produced qualified organic visits rather than impressions alone.",
      "The blended average position moved from 9.5 to 21.1 because the current view includes many new service and blog pages still climbing the rankings. The core Ocala money and service pages are being judged within a much larger keyword universe.",
    ],
    scopePages: [
      "Phone Repair Ocala (Money Page)", "iPhone Repair", "iPad Repair", "Smartphone Repair", "Tablet Repair", "iPhone Screen Repair", "iPhone Battery Replacement", "iPhone Charging Port Repair", "iPhone Camera Repair", "iPhone Water Damage Repair", "iPhone Back Glass Repair", "iPad Screen Repair", "iPad Battery Replacement", "iPad Charging Port Repair", "iPad Water Damage Repair", "iPad Button Repair", "Android Phone Repair", "Samsung Phone Repair", "Google Pixel Repair", "Tablet Water Damage Repair", "Android Cracked Screen Repair", "Android Battery Replacement", "Android Charging Port Repair", "Smartphone Water Damage Repair", "Tablet Screen Repair", "Tablet Battery Replacement", "Tablet Charging Port Repair", "Tablet Diagnostic Service", "Common Repair Issues (Hub)", "Cracked Screen Repair", "Battery Drain", "Phone Not Charging Repair", "Water Damage Repair", "Phone Camera Repair",
    ],
    whyItWorked: [
      "Architecture before content ensured every page had a clear job, target, and internal-link destination.",
      "Local intent specificity captured exact device and repair searches that a generic services page could not address.",
      "Topical depth paired each service silo with a semantic blog cluster, helping Google interpret the site as a repair authority.",
      "Layered off-page trust combined citations, profile links, and contextual outreach for a new local domain.",
    ],
    screenshotCaptions: [
      "28-day snapshot, June 28, 2026: early performance after the core money pages went live.",
      "28-day comparison, July 3, 2026: 103 clicks versus 31 in the prior 28 days.",
      "3-month snapshot, July 24, 2026: 194 clicks and 4.61K impressions as the semantic layer rolled out.",
      "3-month comparison, August 4, 2026: 196 clicks and 6.98K impressions versus 12 clicks and 263 impressions.",
    ],
    relatedCaseStudies: ["pixc-retouch-global-seo", "example-seo-growth"],
    metaTitle: "Phone Fashion Fix Local SEO Case Study",
    metaDescription:
      "How a 34-page local SEO architecture helped Phone Fashion Fix grow Ocala search visibility from 263 to 6,980 impressions.",
  },
  {
    slug: "pixc-retouch-global-seo",
    title: "Competing Globally in Photo Editing and Retouching SEO",
    client: "PixC Retouch",
    industry: "Photo Editing & Retouching",
    category: "seo",
    summary:
      "A global organic SEO campaign built service verticals, 40+ supporting articles, geo-layered real-estate content, and a diversified authority programme, producing 203% click growth and 91% top-10 visibility across tracked keywords.",
    coverImage: "/case-studies/pixc-retouch/image-1.png",
    timeline: "8 months, August 2025 to March 2026",
    tools: ["Google Search Console", "GA4", "Semrush", "Content architecture", "Technical SEO"],
    problem:
      "PixC Retouch operates in one of the most saturated organic categories on the web. Global competitors, offshore production houses, freelance marketplaces, and established retouching brands already owned strong positions for clipping path, ghost mannequin, background removal, and product-editing terms. The site also covered more than 20 distinct services across e-commerce, fashion, real estate, and portrait photography, each with different buyer vocabulary and search intent.",
    research:
      "Research focused on the commercial service catalogue, competitive search results, buyer questions, geo opportunities, and the existing analytics baseline. The campaign used Google Search Console and GA4 as first-party performance sources, complemented by independently tracked keyword positions and Semrush visibility data. The analysis showed that a single generic photo-editing page would dilute relevance, while vertical-specific pages could create multiple focused entry points.",
    planning:
      "The plan split the catalogue into service verticals: e-commerce and product, fashion and apparel, real estate, portrait and people, and specialty services. Each vertical received dedicated money pages and a supporting content map. Real estate received a geo layer for Washington DC and New York because that vertical combines global service demand with local buyer intent. A near-monthly semantic blog cadence was added to support the commercial pages.",
    strategy:
      "The strategy combined service-vertical architecture, problem-aware blog content, geo-layered expansion, off-page authority building, and recurring UI/UX and content refreshes. More than 40 articles answered questions buyers search before hiring an editor, from manual versus automated masking to jewelry shine, property lines, natural shadows, and product-image workflows. This created a connected path from informational discovery to commercial service pages.",
    execution:
      "The campaign rolled out in stages from August 2025 through March 2026. Core vertical pages came first, followed by catalog expansion, specialty technique pages, semantic blog clusters, Washington DC and New York real-estate content, and a refresh cycle on the highest-value pages. The six-month Search Console comparison grew clicks from 413 to 1,250, impressions from 58.7K to 99.8K, and average position from 55 to 38. GA4 active users grew 148% year over year.",
    screenshots: [
      "/case-studies/pixc-retouch/image-1.png",
      "/case-studies/pixc-retouch/image-2.png",
      "/case-studies/pixc-retouch/image-3.png",
    ],
    metrics: [
      { label: "Tracked keywords in top 10", before: "3 of 32", after: "29 of 32", change: "91%" },
      { label: "6-month clicks", before: "413", after: "1,250", change: "+203%" },
      { label: "6-month impressions", before: "58.7K", after: "99.8K", change: "+70%" },
      { label: "GA4 active users", before: "Prior year", after: "3.6K", change: "+148% YoY" },
    ],
    lessonsLearned: [
      "A vertical-first architecture lets a global brand compete for many commercial terms without forcing one page to represent every service.",
      "Buyer-question content can build strong long-tail visibility when every article has a deliberate commercial destination.",
      "Geo-layering can capture local intent inside a global site without rebuilding the entire SEO model around local search.",
      "Transparent keyword reporting is stronger than cherry-picking. Page-two terms show where the next optimisation cycle belongs.",
    ],
    snapshot: [
      { label: "Business", value: "PixC Retouch, professional photo editing and retouching services" },
      { label: "Website", value: "pixcretouch.com" },
      { label: "Target market", value: "Global, with primary commercial focus on the USA and UK" },
      { label: "Competitive landscape", value: "Offshore production agencies, global marketplace freelancers, and established retouching brands" },
      { label: "Engagement scope", value: "Service-vertical architecture, on-page SEO, semantic content, authority building, UI/UX, and content refresh cycles" },
      { label: "My role", value: "Sole SEO strategist covering vertical mapping, keyword mapping, content briefs across 25+ service pages and 40+ blog posts, implementation oversight, and link acquisition" },
    ],
    silos: [
      { name: "E-commerce and Product", hierarchy: "Global Photo Editing > Product Services", pages: "Product Photo Editing, Clothing, Shoe, Hat and Bag, Eyeglass, Background Removal, Clipping Path, Image Masking, Color Correction, Drop Shadow, Original Shadow, Reflection Shadow" },
      { name: "Fashion and Apparel", hierarchy: "Global Photo Editing > Fashion Services", pages: "Ghost Mannequin, Underwear and Undergarments, apparel-focused clusters" },
      { name: "Real Estate", hierarchy: "Global Photo Editing > Real Estate Services", pages: "Real Estate Photo Editing, Washington DC expansion, New York expansion" },
      { name: "Portrait and People", hierarchy: "Global Photo Editing > Portrait Services", pages: "Portrait, Maternity, Newborn, Model, Wedding, and High-End Photo Retouching" },
      { name: "Specialty and Emerging", hierarchy: "Global Photo Editing > Specialty Services", pages: "Jewelry, Furniture, Photo Restoration, and AI Photo Re-editing Services" },
    ],
    timelineSteps: [
      "August to September 2025: core service-vertical build-out covering background removal, ghost mannequin, masking, real estate, furniture, clipping path, eyeglass, wedding, underwear, portrait, maternity, and newborn pages.",
      "October to November 2025: catalog expansion across e-commerce, shoe, clothing, product, high-end retouching, model, jewelry, and photo restoration, alongside the first semantic blog wave.",
      "December 2025 to January 2026: specialty technique pages for drop shadow, original shadow, reflection shadow, color correction, hat and bag, plus AI photo re-editing and the Washington DC and New York real estate expansion.",
      "February to March 2026: UI/UX and content-quality refreshes across the highest-traffic money pages to sustain rankings and improve conversion.",
      "Ongoing: Search Console, GA4, and third-party visibility monitoring to track movement and reallocate effort toward underperforming terms.",
    ],
    performanceRows: [
      { date: "Prior period", range: "Previous 6 months", clicks: "413", impressions: "58.7K", ctr: "0.7%", position: "55" },
      { date: "Current period", range: "Last 6 months", clicks: "1,250", impressions: "99.8K", ctr: "1.2%", position: "38" },
    ],
    resultReadout: [
      "Clicks grew 203%, from 413 to 1,250, across the trailing six-month comparison. This is first-party evidence that the expanded content footprint is producing real traffic.",
      "Impressions grew 70%, from 58.7K to 99.8K, showing that the site is being surfaced for a substantially larger set of global queries.",
      "Average position improved by 17 spots, from 55 to 38. The keyword-level tracking below is stronger still for the pages specifically targeted by the campaign.",
    ],
    additionalResults: [
      "GA4 active users increased 148% year over year, reaching 3.6K. Pageviews and event volume roughly doubled over the same window.",
      "SEMrush recorded 366 tracked organic keywords, up 5.2% in the latest period, with an estimated 21% visibility share for tracked terms.",
      "The domain footprint reached roughly 61.5K backlinks from about 1.2K referring domains. Authority Score remains low, which is expected for a young domain in a backlink-heavy category. Ranking and traffic data remain the more useful measures.",
    ],
    rankingGroups: [
      {
        title: "Flagship service pages",
        rows: [
          { target: "Hat and Bag Photo Editing", url: "/hat-bag-photo-editing/", position: "1st" },
          { target: "Maternity Photo Retouching", url: "/maternity-retouching/", position: "2nd" },
          { target: "Furniture Photo Editing", url: "/funiture-photo-editing/", position: "3rd" },
          { target: "Underwear Photo Editing", url: "/underwear-photo-editing/", position: "4th" },
          { target: "Eyeglass Photo Editing Service", url: "/eyeglass-photo-editing/", position: "15th" },
          { target: "Shoe Photo Editing", url: "/shoe-photo-editing/", position: "33rd" },
        ],
        note: "Four of six tracked service pages are in the top four positions. Eyeglass at 15th and Shoe at 33rd remain active targets for the next content and link-building cycle.",
      },
      {
        title: "Supporting blog content",
        rows: [
          { target: "Manual vs. Automated Photo Masking", position: "1st" },
          { target: "How to Add Shine to Jewelry in Photoshop", position: "1st" },
          { target: "How Photo Retouching Can Improve Your Product Photos", position: "1st" },
          { target: "How to Edit Clothing Product Images", position: "1st" },
          { target: "How to Create a Transparent Background for Product Photos", position: "1st" },
          { target: "Shoe Photo Editing Techniques in Photoshop", position: "1st" },
          { target: "Interior Color Correction Tips for Real Estate Photos", position: "1st" },
          { target: "How to Add Natural Shadow to Shoe Photos", position: "1st" },
          { target: "Newborn Retouching Mistakes", position: "1st" },
          { target: "How to Replace Skies in Real Estate Photos", position: "1st" },
          { target: "How to Add Property Lines in Photoshop", position: "1st" },
          { target: "Why Real Estate Photo Editing Matters", position: "1st" },
          { target: "How to Do Furniture Photo Editing", position: "1st" },
          { target: "How to Edit Underwear Product Photos Professionally", position: "1st" },
          { target: "Underwear Photo Editor", position: "1st" },
          { target: "How to Edit Jewelry Photos", position: "2nd" },
          { target: "How to Edit Maternity Photos in Photoshop", position: "2nd" },
          { target: "Best Lightroom Presets for Newborn Photography", position: "3rd" },
          { target: "How to Create a 3D Packshot Ghost Mannequin Effect", position: "3rd" },
          { target: "Best Lightroom Settings for Real Estate Photography", position: "4th" },
          { target: "Newborn Photo Color Correction", position: "4th" },
          { target: "Furniture Image Editing for Stunning Visuals", position: "4th" },
          { target: "Apparel Photo Editing Services That Fashion Brands Use", position: "5th" },
          { target: "Best Undergarments Photo Editing Solutions", position: "7th" },
          { target: "Best Background Colors for E-commerce Product Photos", position: "8th" },
          { target: "Mistakes to Avoid in Real Estate Photo Editing", position: "15th" },
        ],
        note: "Of 26 tracked long-tail blog targets, 25 rank in the top 10, with 15 holding the number one position.",
      },
    ],
    screenshotCaptions: [
      "Google Search Console six-month comparison: 1.25K clicks versus 413 in the prior six months, with average position improving from 55 to 38.",
      "GA4 home report, July 3, 2026: 3.6K active users, up 147.9% year over year, and 26K events, up 104.9%.",
      "SEMrush domain overview, July 3, 2026: 366 organic keywords, 61.5K backlinks, and 1.2K referring domains.",
    ],
    whyItWorked: [
      "Vertical-first architecture split a 20+ service catalog into dedicated money pages that could compete for separate commercial terms in parallel.",
      "Buyer-question content at scale gave the site the topical depth needed to earn number one rankings on 15 long-tail terms.",
      "Smart geo-layering let one real estate vertical capture both global and high-value US metro intent without a full local SEO rebuild.",
      "A broad, diversified off-page footprint gave a young domain the trust signals needed to compete with category incumbents.",
      "Transparent measurement included page-two and page-three terms, showing exactly where the next optimization cycle should focus.",
    ],
    relatedCaseStudies: ["phone-fashion-fix-local-seo", "example-seo-growth"],
    metaTitle: "PixC Retouch Global SEO Case Study",
    metaDescription:
      "How PixC Retouch grew global organic clicks 203% through service architecture, semantic content, geo expansion, and authority building.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
