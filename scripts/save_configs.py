import os
import re
import json

SERVICES = [
    {
        "slug": "chatgpt-ads",
        "pascal": "ChatgptAds",
        "file": "ChatGPT Ads Agency _ Strategy & Campaign Management.txt",
        "title": "ChatGPT Ads Strategy & Campaign Management",
        "h1": "ChatGPT Ads: Strategic Readiness & Campaign Management",
        "subtitle": "Context-Hint Targeting, Conversions API & Full AI Search Alignment",
        "opening": "ChatGPT Ads are sponsored link placements appearing beneath AI-generated responses for Free and Go tier users. As a Growth Consultant, Founder of FrameCipher, and former Co-Founder at Riha Web Tech, Mahedi Hasan engineers readiness strategies, context-hint intent mapping, and direct campaign operations for global and Bangladeshi brands.",
        "offer_title": "Strategic ChatGPT Advertising Offerings",
        "offer_desc": "Two distinct execution tracks tailored to business registration, account eligibility, and global audience reach.",
        "included": [
            ("Market Eligibility & Regulatory Review", "Verification of corporate registration and account authorization against OpenAI Ads Manager rollout schedules."),
            ("Context-Hint Intent Mapping", "Structuring thematic conversational triggers rather than rigid exact-match keywords to match authentic conversational search behavior."),
            ("Conversational Copy & Visual Creative", "Developing tailored offers and value props designed to blend naturally with informational intent in AI conversation windows."),
            ("Conversions API & Server-Side Tracking", "Deploying reliable event ingestion pipelines through GTM server containers to bypass client-side cookie degradation."),
            ("AEO & GEO Organic Alignment", "Optimizing organic brand entities and schema graphs so your brand surfaces naturally in ChatGPT answers alongside paid placements.")
        ],
        "not_included": [
            ("Guaranteed Ad Approvals for Ineligible Regions", "OpenAI restricts direct Ads Manager billing to approved countries; non-eligible brands operate on readiness models."),
            ("Vanity Impressions or Untracked Spend", "No campaigns run without verified first-party event tracking and commercial attribution.")
        ],
        "who_fits": "Growth-stage DTC brands, enterprise software providers, and international businesses seeking first-mover advantages in conversational search engines.",
        "why_matters_title": "Why First-Mover Advantage in ChatGPT Ads Dictates Category Leadership",
        "why_matters_desc": "Conversational search alters consumer discovery. Over 200 million active users engage ChatGPT with complex problem-solving queries, making high-intent conversational mentions more influential than static display banners.",
        "why_matters_points": [
            ("Informational to Transactional Bridge", "Users consult ChatGPT when evaluating options; context-hints present your solution at the precise moment of intent."),
            ("Zero-Click Query Capture", "As standard web search clicks drop due to AI overviews, sponsored recommendations secure immediate visibility."),
            ("Audience Exclusivity", "Targeting focuses on active Free and Go tier users actively researching products, avoiding saturated social feed blindness.")
        ],
        "why_choose_title": "Why Partner With Mahedi Hasan for AI Advertising",
        "why_choose_desc": "Technical mastery meets performance marketing rigor. We combine custom code development with rigorous paid acquisition systems.",
        "why_choose_points": [
            ("Upfront Eligibility Audits", "We provide complete clarity on your account's regional eligibility before asking for any ad budget commitments."),
            ("Dedicated Context-Hint Taxonomy", "We map situational context triggers rather than pasting obsolete Google Search keyword lists."),
            ("Integrated Search Architecture", "Paid AI placements are connected to technical SEO, schema graphs, and landing page conversion rate optimization.")
        ],
        "process_title": "Four-Stage Execution Framework",
        "process_desc": "A documented, repeatable methodology from initial discovery to live campaign scaling.",
        "process_steps": [
            ("Stage 1: Discovery & Regulatory Audit", "Evaluating company registration, target geographic footprint, and OpenAI platform access eligibility."),
            ("Stage 2: Context-Hint & Creative Strategy", "Developing conversational prompt personas, mapping user pain points, and writing persuasive ad assets."),
            ("Stage 3: Account Infrastructure & Tracking", "Setting up server-side Conversions API, catalog feeds, and pre-launch testing environments."),
            ("Stage 4: Optimization & GEO Amplification", "Managing active bids, pruning irrelevant conversational contexts, and strengthening organic citation references.")
        ],
        "pricing_title": "Investment Structure & Scoping Factors",
        "pricing_desc": "OpenAI ads operate on a competitive bidding model typically averaging $3.00 to $5.00 per click, or $25 to $60 per thousand impressions depending on commercial intent.",
        "pricing_factors": [
            ("Scope Track", "Readiness strategy roadmaps require lower resource allocation than ongoing end-to-end campaign execution."),
            ("Context-Hint Thematic Clusters", "Broader product lines demanding multi-theme conversational exploration require expanded research cycles."),
            ("Creative Variation Volume", "Testing multiple angles and offer hooks scales strategic creative production."),
            ("Technical Integration", "Custom server-side tagging and CRM integration scoped according to website architecture.")
        ],
        "service_areas": "Operating globally from Dhaka, Bangladesh. We deliver AI advertising strategy and campaign management for clients in North America, the UK, Europe, and regional enterprises.",
        "faqs": [
            {"question": "Is ChatGPT Ads available for direct billing in Bangladesh?", "answer": "Direct advertiser access in OpenAI Ads Manager is currently limited to selected international markets. For Bangladesh-registered entities, we implement a strategic readiness and GEO alignment roadmap so your brand gains organic AI visibility and is prepared to launch the moment billing opens."},
            {"question": "How do context hints differ from traditional Google Search keywords?", "answer": "Google Ads relies on explicit keyword queries typed into a search bar. ChatGPT Ads utilizes context hints—thematic descriptors representing the situation, dilemma, or question a user discusses with the AI model—requiring conversational prompt modeling rather than single keyword matching."},
            {"question": "What typical advertising budget is required for ChatGPT campaigns?", "answer": "OpenAI enforces no rigid minimum spend. Advertisers typically see cost-per-click bids between $3.00 and $5.00, and CPM rates between $25.00 and $60.00 depending on vertical competitiveness. Consulting and management fees are quoted separately based on strategic scope."},
            {"question": "Can ChatGPT paid ads influence organic ChatGPT answers?", "answer": "No. OpenAI maintains a strict wall between algorithmic organic answers and sponsored links. However, our dual-track strategy pairs paid readiness with Generative Engine Optimization (GEO) to optimize your brand for organic AI citations simultaneously."},
            {"question": "How do you track conversions from conversational ad placements?", "answer": "We integrate the Conversions API and server-side tracking pipelines via Google Tag Manager, matching session identifiers and conversion actions directly to your CRM or ecommerce platform."},
            {"question": "How long does a readiness or launch phase take?", "answer": "A complete readiness strategy engagement spans two to four weeks, covering eligibility review, context-hint architecture, and creative assets. Live campaign setup for eligible accounts requires one to two weeks prior to active media spend."}
        ]
    },
    {
        "slug": "creative-content",
        "pascal": "CreativeContent",
        "file": "Creative Content Services.txt",
        "title": "Creative Content Strategy & Copywriting Services",
        "h1": "Conversion-Focused Creative Content & Brand Copywriting",
        "subtitle": "Topical Articles, Sales Copy, High-Retention Video Scripts & Brand Narratives",
        "opening": "High-performing content bridges customer skepticism and commercial action. Mahedi Hasan produces conversion-focused brand copy, technical editorial assets, and retention-driven social scripts designed to build organic authority and accelerate revenue across digital channels.",
        "offer_title": "Comprehensive Creative Content Capabilities",
        "offer_desc": "From deep technical industry guides to punchy paid social hooks, content built to inform, persuade, and rank.",
        "included": [
            ("Topical Authority Articles & Pillar Guides", "In-depth research pieces answering high-intent buyer questions with original data, practical frameworks, and entity-rich formatting."),
            ("Conversion-Optimized Landing Page Copy", "Wireframe-aligned sales messaging targeting customer objections, value propositions, and compelling calls-to-action."),
            ("Performance Ad Copy & Scriptwriting", "High-retention short-form video scripts (TikTok, Reels) and multi-angle ad copy tailored for paid social funnels."),
            ("Product Descriptions & Catalog Storytelling", "Benefit-driven ecommerce descriptions engineered to improve add-to-cart rates and search visibility."),
            ("Email Lifecycle & Newsletter Campaigns", "Retention-focused onboarding flows, promotional drops, and editorial newsletters that generate repeatable engagement.")
        ],
        "not_included": [
            ("Unresearched AI-Generated Content Spun for Volume", "Every piece is carefully written, fact-checked, and formatted with human editorial rigor."),
            ("Stock Imagery Licensing Fees", "Visual asset design or professional photography is scoped independently from written deliverables.")
        ],
        "who_fits": "B2B service providers, high-growth ecommerce brands, and tech startups needing authoritative, customer-focused content that actually converts.",
        "why_matters_title": "Why Generic Copy Is the Hidden Bottleneck in Paid and Organic Acquisition",
        "why_matters_desc": "Audiences have developed immunity to buzzword-laden copy and surface-level AI summaries. Brands that invest in original perspectives, specific data, and clear communication win search rank and customer trust.",
        "why_matters_points": [
            ("Search Engine Entity Recognition", "Modern search algorithms prioritize content demonstrating verifiable first-party experience and comprehensive topical coverage."),
            ("Lower Paid Ad Customer Acquisition Costs", "Direct, high-empathy ad creative cuts through feed exhaustion, lifting click-through rates and reducing blended acquisition costs."),
            ("Defensible Brand Authority", "Clear, well-crafted messaging positions your company as the premier expert in your niche, making competitors appear commoditized.")
        ],
        "why_choose_title": "Why Work With Mahedi Hasan for Creative Content",
        "why_choose_desc": "A growth strategist who writes copy backed by technical search architecture, conversion rate principles, and commercial empathy.",
        "why_choose_points": [
            ("SEO & Technical Integration", "Content formatted with structured headings, semantic entities, and schema compatibility built-in from the first draft."),
            ("Direct Focus on Commercial Action", "No fluff or ornamental prose. Every sentence is designed to answer a search question or advance a prospect toward conversion."),
            ("Bilingual Market Fluency", "Fluent creative copy development in both English and Bengali, tailored to local cultural resonance or Western enterprise standards.")
        ],
        "process_title": "Structured Five-Step Content Creation Lifecycle",
        "process_desc": "From strategic audience research to published, verified conversion assets.",
        "process_steps": [
            ("1. Research & Customer Avatar Mapping", "Uncovering pain points, objections, search patterns, and competitor content weaknesses."),
            ("2. Content Architecture & Outline Approval", "Defining headings, target entities, answer-first retrieval blocks, and primary arguments before drafting."),
            ("3. Copywriting & Script Drafting", "Crafting persuasive, engaging copy focused on clarity, rhythm, and conversion mechanics."),
            ("4. Review & Editorial Polish", "Iterating based on client feedback and checking against rigorous zero-banned-word criteria."),
            ("5. Publishing Alignment & Performance Tracking", "Integrating metadata, internal linking structures, and conversion tracking milestones.")
        ],
        "pricing_title": "Content Investment Framework",
        "pricing_desc": "Engagements are scoped either as dedicated monthly editorial retainers or milestone-based project sprints depending on your volume requirements.",
        "pricing_factors": [
            ("Content Complexity & Technical Research", "Specialized B2B, SaaS, or healthcare topics requiring clinical or technical precision."),
            ("Deliverable Volume & Publishing Cadence", "Scale of monthly articles, video scripts, or email sequences."),
            ("Design & Production Support", "Optional visual asset creation, custom diagrams, or social carousel design."),
            ("Turnaround Speed", "Standard 5-day delivery versus expedited sprint turnarounds.")
        ],
        "service_areas": "Serving global clients across the US, UK, Canada, Australia, and forward-thinking enterprises across Bangladesh and South Asia.",
        "faqs": [
            {"question": "How do you ensure content avoids AI duplication penalties?", "answer": "All copy is written from custom outlines, incorporates primary research, and follows rigorous anti-cliché filters. We prioritize unique viewpoints, concrete numbers, and actionable frameworks that generic language models cannot replicate."},
            {"question": "Do you handle content uploading and CMS publishing?", "answer": "Yes. We format and publish content directly into WordPress, Webflow, Next.js MDX pipelines, or Shopify stores, including metadata, image alt tags, and internal link integration."},
            {"question": "Can you adapt copy to our existing brand tone of voice?", "answer": "Absolutely. During initial onboarding, we examine your existing top-performing assets, customer feedback, and brand guidelines to establish a consistent, authentic voice across all channels."},
            {"question": "How is creative content performance measured?", "answer": "We evaluate content effectiveness based on organic search impressions, average engagement time, scroll depth, conversion assist attribution, and direct lead or transaction volume."},
            {"question": "What is the typical turnaround time for written assets?", "answer": "Standard articles and landing page copy are delivered within 3 to 5 business days for initial review, with revisions completed within 24 to 48 hours."},
            {"question": "Do you provide revisions on drafted content?", "answer": "Yes. Each deliverable includes two comprehensive revision rounds to guarantee every paragraph aligns precisely with your brand standards and goals."}
        ]
    },
    {
        "slug": "google-ads",
        "pascal": "GoogleAds",
        "file": "Google Ads Service Page.txt",
        "title": "Google Ads Management & PPC Optimization",
        "h1": "Intent-Driven Google Ads Management & Performance PPC",
        "subtitle": "High-Intent Search Campaigns, Performance Max, YouTube Funnels & GA4 Attribution",
        "opening": "Google Ads captures customers at the exact instant they search for a commercial solution. Mahedi Hasan builds high-intent Search campaigns, automated Performance Max architectures, and YouTube video funnels engineered for maximum return on ad spend and verified lead generation.",
        "offer_title": "End-to-End Google PPC Management",
        "offer_desc": "Eliminating wasted ad spend through granular intent mapping, negative keyword protocols, and precision landing page alignment.",
        "included": [
            ("High-Intent Search Campaign Structuring", "Single-theme ad groups, exact and phrase match intent mapping, and responsive search ads that convert high-value searches."),
            ("Performance Max & Shopping Feed Optimization", "Optimizing Google Merchant Center feeds, asset groups, audience signals, and negative brand exclusions."),
            ("YouTube Video & Demand Gen Funnels", "Engaging video ad sequences targeting in-market audiences and competitor channel placements to build category demand."),
            ("GA4, GTM & Server-Side Conversion Tracking", "Offline conversion imports, enhanced conversions, and custom GTM event listeners to ensure 100% data integrity."),
            ("Aggressive Negative Keyword Management", "Continuous search term filtering to stop irrelevant clicks and conserve ad budget for high-converting queries.")
        ],
        "not_included": [
            ("Unmonitored Automated Bidding on Blind Accounts", "We never launch Smart Bidding without adequate historical conversion data to guide the algorithm."),
            ("Third-Party Click-Fraud Software Markups", "Direct transparency on all platform costs and campaign telemetry.")
        ],
        "who_fits": "High-ticket service businesses, ecommerce stores, and local companies where immediate commercial intent search volume exists.",
        "why_matters_title": "Why Most Google Ads Accounts Burn 40% of Their Budget on Junk Searches",
        "why_matters_desc": "Google's default campaign settings are designed to maximize Google's ad revenue, not your profit. Broad match expansion and automated suggestions push spend into low-intent informational queries unless actively controlled.",
        "why_matters_points": [
            ("Capturing Immediate Buyer Intent", "Unlike social media where users browse passively, Google searchers actively seek solutions and are ready to transact."),
            ("Predictable Customer Acquisition Cost", "Structured bidding targets realistic customer acquisition costs, giving your business reliable financial predictability."),
            ("First-Party Data Reinforcement", "Enhanced conversions and customer match lists train Google's machine learning on your highest-value customers.")
        ],
        "why_choose_title": "Why Choose Mahedi Hasan for Google Ads",
        "why_choose_desc": "Direct management by a technical growth architect—no junior account managers or generic automated agency templates.",
        "why_choose_points": [
            ("Full Account Access & Transparency", "You own your Google Ads account, billing, and data. Complete transparency with zero markup on media spend."),
            ("Technical Tracking Expertise", "We configure GA4, GTM, enhanced conversions, and CRM offline conversion tracking with precision."),
            ("Integrated Landing Page CRO", "We optimize ad copy and landing page UX simultaneously to improve Quality Score and reduce cost per click.")
        ],
        "process_title": "Systematic 4-Step PPC Growth Process",
        "process_desc": "A disciplined workflow designed to extract maximum value from every dollar spent on Google.",
        "process_steps": [
            ("1. Account Audit & Tracking Validation", "Auditing search term waste, Quality Scores, conversion accuracy, and competitor pressure."),
            ("2. Intent Architecture & Keyword Modeling", "Structuring campaigns around customer intent tiers, negative lists, and high-converting commercial keywords."),
            ("3. Campaign Build & Ad Copy Production", "Creating high-CTR responsive ads, ad assets (sitelinks, callouts), and setting up bidding rules."),
            ("4. Daily Monitoring, Bid Tuning & Scaling", "Pruning wasteful search terms, testing ad copy variations, and scaling budget into winning themes.")
        ],
        "pricing_title": "PPC Management Pricing & Fee Structure",
        "pricing_desc": "Management fees are structured as a flat monthly retainer or a hybrid base fee plus a transparent percentage of ad spend for scaled accounts.",
        "pricing_factors": [
            ("Monthly Ad Spend Volume", "Campaigns spending $1,000/mo vs $20,000/mo require different operational bandwidth and testing frequency."),
            ("Channel Breadth", "Search-only vs multi-network Search, Performance Max, YouTube, and Display combinations."),
            ("Tracking Architecture", "Standard web tracking versus complex offline CRM lead status synchronizations."),
            ("Creative & Landing Page Scope", "Including dedicated landing page design and custom video asset production.")
        ],
        "service_areas": "Managing Google Ads accounts for clients across Bangladesh, the United States, the UK, UAE, and European markets.",
        "faqs": [
            {"question": "What minimum ad budget do I need for Google Ads?", "answer": "We recommend a minimum ad spend of $500 to $1,000 per month (or equivalent in local currency) to generate sufficient search volume, collect statistically valid conversion data, and optimize bidding algorithms effectively."},
            {"question": "How quickly do Google Ads campaigns produce results?", "answer": "Search campaigns begin capturing impressions and traffic within 24 to 48 hours of launch. Most accounts achieve optimized conversion costs within the first 30 days as search terms are refined and negative keywords are implemented."},
            {"question": "Do I retain ownership of my Google Ads account?", "answer": "Yes, 100%. You retain administrative ownership of your Google Ads account, payment profiles, and data history. We connect through our Google Partner manager account with explicit permissions."},
            {"question": "How do you prevent money being wasted on accidental clicks?", "answer": "We maintain curated negative keyword lists, disable broad match expansion on unverified terms, eliminate irrelevant network placements, and review search query reports multiple times per week."},
            {"question": "What is the role of Quality Score in lowering costs?", "answer": "Quality Score measures the relevance of your keywords, ad copy, and landing page. High Quality Scores earn ad auction discounts, allowing you to achieve top page positions at significantly lower costs than competitors."},
            {"question": "Do you provide bilingual ads for Bangladesh and international audiences?", "answer": "Yes. We create and optimize campaigns in both English and Bengali (Bangla), accounting for local phonetic search patterns and transliterated queries."}
        ]
    },
    {
        "slug": "local-seo",
        "pascal": "LocalSeo",
        "file": "Local SEO Services.txt",
        "title": "Local SEO & Google Business Profile Optimization",
        "h1": "Local SEO Services & Google Map Pack Domination",
        "subtitle": "Google Business Profile, Localized Schema, Citation Networks & High-Trust Reviews",
        "opening": "Local SEO ensures your business captures customers searching for services in specific cities, districts, and neighborhoods. Mahedi Hasan optimizes Google Business Profiles, localized schema data, and geographic authority networks to dominate high-converting local map pack rankings.",
        "offer_title": "Comprehensive Local Search Optimization",
        "offer_desc": "Everything needed to win top 3 Google Map pack rankings, incoming phone calls, and direct local foot traffic.",
        "included": [
            ("Google Business Profile (GBP) Full Optimization", "Category optimization, secondary attributes, geotagged photos, business hours, and weekly post scheduling."),
            ("NAP Consistency & Local Citation Auditing", "Building and cleaning up business listings across high-authority local and international business directories."),
            ("Localized On-Page SEO & City Landing Pages", "Creating dedicated service-area pages formatted with localized headings, embedded maps, and local customer evidence."),
            ("Local Business Schema & Geo-Coordinates", "Implementing LocalBusiness JSON-LD markup with geo-coordinates, service radius, and price ranges."),
            ("Review Generation & Reputation Workflows", "Establishing automated follow-up sequences to capture positive customer reviews and draft keyword-rich responses.")
        ],
        "not_included": [
            ("Fake or Purchased Reviews", "We strictly reject review buying which violates Google guidelines and risks profile suspension."),
            ("Spammy Virtual Offices", "Legitimate local ranking requires verified physical presence or compliant service-area business setups.")
        ],
        "who_fits": "Clinics, law firms, dental practices, retail outlets, home service contractors, and B2B providers serving specific geographic regions.",
        "why_matters_title": "Why the Google Map Pack Captures Over 44% of All Local Clicks",
        "why_matters_desc": "When customers search for immediate services, Google displays the Local 3-Pack above standard organic results. If your business is not in the top 3 map positions, your direct competitors take almost all high-intent phone calls and enquiries.",
        "why_matters_points": [
            ("Near Me Search Surge", "Mobile searches with local commercial intent convert at over 28% within 24 hours of the query."),
            ("Direct Call & Direction Actions", "Google Map pack listings allow prospects to call or request navigation directions with a single screen tap."),
            ("Trust and Social Proof", "Star ratings and verified reviews displayed in map rankings establish immediate authority over unranked competitors.")
        ],
        "why_choose_title": "Why Work With Mahedi Hasan on Local SEO",
        "why_choose_desc": "Technical precision paired with field-tested local directory networks and clean White-Hat execution.",
        "why_choose_points": [
            ("Deep Understanding of Bangladeshi & Global Local Algorithms", "Extensive experience ranking businesses in Dhaka, Chittagong, and regional hubs as well as competitive US/UK metros."),
            ("Clean Citation Auditing", "We identify and correct contradictory phone numbers, old addresses, and duplicate listings that confuse Google's algorithms."),
            ("Technical Schema Integration", "We connect your website's code directly to your Google Business Profile entity using structured data.")
        ],
        "process_title": "Six-Stage Local Ranking Architecture",
        "process_desc": "A methodical system to take your business from hidden to prominent in local search results.",
        "process_steps": [
            ("1. Local SEO Audit & Competitor Scan", "Analyzing local grid rankings, citation accuracy, category choices, and top competitors."),
            ("2. GBP Complete Optimization", "Refining primary and secondary business categories, descriptions, service menus, and attributes."),
            ("3. On-Page Local Landing Page Engineering", "Developing hyper-targeted city and area pages with localized content and embedded map signals."),
            ("4. Citation Building & Cleanup", "Submitting correct NAP data to leading directories, mapping platforms, and localized business portals."),
            ("5. Reputation System Deployment", "Implementing an automated customer review collection workflow and review response strategy."),
            ("6. Geo-Rank Monitoring & Iteration", "Tracking local keyword visibility on geo-grid maps and optimizing based on conversion actions.")
        ],
        "pricing_title": "Local SEO Investment Packages",
        "pricing_desc": "Transparent monthly retainers scaled to single-location businesses or multi-location enterprise brands.",
        "pricing_factors": [
            ("Number of Physical Locations", "Single storefront versus multi-branch businesses spanning multiple cities."),
            ("Local Competition Density", "Moderate local competition versus hyper-competitive metropolitan areas like Gulshan or London."),
            ("Current Listing Health", "Fresh setup versus resolving extensive citation duplicates and suspended profile issues."),
            ("Content Creation Volume", "Creating localized suburb landing pages and continuous local blog production.")
        ],
        "service_areas": "Specialized local SEO across Dhaka, Chittagong, Sylhet, and all regions of Bangladesh, alongside UK, US, and Australian service businesses.",
        "faqs": [
            {"question": "How long does it take to rank in Google's Local Map Pack?", "answer": "Most businesses experience noticeable improvements in map rankings within 60 to 90 days. Factors influencing speed include existing domain authority, physical address proximity to the searcher, and competitor review volume."},
            {"question": "What is NAP consistency and why does it matter?", "answer": "NAP stands for Name, Address, and Phone number. Google compares your NAP information across hundreds of directories on the web. Inconsistencies like old phone numbers or wrong addresses erode Google's confidence and drop your map rankings."},
            {"question": "Can I do Local SEO if I do not have a physical storefront?", "answer": "Yes. Google supports Service Area Businesses (SABs) that visit or deliver to customers directly. In this setup, your physical street address is hidden while your designated service radius is clearly displayed and ranked."},
            {"question": "How do you handle Google Business Profile suspensions?", "answer": "We audit your profile for policy compliance, prepare verified utility bills and registration documentation, and submit formal reinstatement appeals through Google Support."},
            {"question": "Do positive reviews directly improve local Google rankings?", "answer": "Yes. Review count, review velocity, star rating, and keywords included within customer reviews are among the strongest confirmed local ranking factors evaluated by Google's algorithm."},
            {"question": "What monthly reporting is provided for local search performance?", "answer": "We provide detailed reports showing geo-grid ranking improvements, Google Business Profile direct calls, website visits, direction requests, and organic search impressions."}
        ]
    },
    {
        "slug": "media-buying",
        "pascal": "MediaBuying",
        "file": "Media Buying Services.txt",
        "title": "Cross-Platform Media Buying & Paid Advertising",
        "h1": "Full-Funnel Media Buying & Paid Performance Advertising",
        "subtitle": "Meta, Google, TikTok, LinkedIn & Pinterest Strategic Budget Allocation",
        "opening": "Media buying is the discipline of allocating advertising capital across multiple channels to maximize blended customer acquisition efficiency. Mahedi Hasan plans, executes, and scales multi-channel paid ad campaigns that turn advertising spend into predictable profit.",
        "offer_title": "Multi-Channel Media Buying Execution",
        "offer_desc": "Coordinating paid social and paid search to capture attention, nurture consideration, and close high-value transactions.",
        "included": [
            ("Cross-Platform Budget Allocation", "Balancing spend dynamically across Meta, Google, TikTok, LinkedIn, and Pinterest according to customer acquisition costs."),
            ("Full-Funnel Campaign Architecture", "Structuring top-of-funnel awareness, middle-of-funnel consideration, and bottom-of-funnel retargeting into a cohesive ecosystem."),
            ("Continuous Creative Fatigue Management", "Testing fresh creative concepts, hooks, and messaging weekly to prevent ad saturation and rising CPAs."),
            ("First-Party Tracking & Attribution Modeling", "Implementing server-side tagging, UTM parameters, and blended ROAS dashboards to measure true channel contribution."),
            ("Audience Lifecycle Segmentation", "Building custom lookalikes, customer match lists, and engaged video viewers for targeted re-engagement.")
        ],
        "not_included": [
            ("Single-Channel Silo Management", "We manage media holistically; paid social feeds search, and search validates social demand."),
            ("Hidden Ad Spend Markups", "You pay ad networks directly with your payment cards. Our compensation is completely transparent.")
        ],
        "who_fits": "Scaling ecommerce brands, enterprise B2B lead generation teams, and growing businesses spending $1,500+ monthly on paid ads.",
        "why_matters_title": "Why Relying on a Single Ad Channel Is the Biggest Risk to Your Business",
        "why_matters_desc": "Algorithm updates, unexpected account flags, or sudden ad cost spikes on a single platform can paralyze your revenue overnight. Diversifying your acquisition across search and social channels creates a resilient growth engine.",
        "why_matters_points": [
            ("Blended Customer Acquisition Efficiency", "Prospects who encounter your brand on social media and subsequently convert on Google Search yield lower overall acquisition costs."),
            ("Protection from Platform Volatility", "Multi-channel media distribution protects your company from unexpected platform policy shifts or account restrictions."),
            ("Audience Intent Harmonization", "Matching creative formats to platform intent—visual inspiration on Pinterest, entertainment on TikTok, immediate solutions on Google.")
        ],
        "why_choose_title": "Why Choose Mahedi Hasan for Media Buying",
        "why_choose_desc": "A data-driven performance marketer focused on cash flow, contribution margins, and net profit.",
        "why_choose_points": [
            ("Full Attribution Transparency", "We track real business KPIs—Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Customer Lifetime Value (LTV)—not vanity clicks."),
            ("Rapid Creative Testing Frameworks", "We implement structured testing matrices to systematically identify winning visual hooks, headlines, and calls to action."),
            ("Direct Founder Involvement", "Your budget strategy is engineered directly by Mahedi Hasan, backed by 4+ years of hands-on paid media experience.")
        ],
        "process_title": "Six-Stage Media Buying Framework",
        "process_desc": "A scientific methodology to deploy, validate, and scale your advertising capital.",
        "process_steps": [
            ("1. Discovery & Performance Audit", "Reviewing historical ad account data, unit economics, target CAC, and customer demographics."),
            ("2. Platform & Channel Selection", "Determining the optimal channel distribution based on where your buyers congregate and convert."),
            ("3. Media Plan & Budget Modeling", "Drafting a detailed budget allocation plan with projected milestones and testing parameters."),
            ("4. Campaign Setup & Tracking Launch", "Configuring server-side pixels, conversions APIs, custom audiences, and launching initial creative tests."),
            ("5. Active Optimization & Bid Tuning", "Reallocating daily spend toward top-performing ad sets, pausing fatigue creative, and tuning bids."),
            ("6. Strategic Review & Scaling", "Analyzing blended acquisition metrics and scaling budgets into validated winning campaigns.")
        ],
        "pricing_title": "Media Buying Management Fees",
        "pricing_desc": "Transparent management retainers scaled according to media spend volume and cross-channel complexity.",
        "pricing_factors": [
            ("Total Managed Media Spend", "Account scale determines testing frequency, data velocity, and optimization workload."),
            ("Number of Active Channels", "Managing Meta only versus coordinating Meta, Google, TikTok, and LinkedIn in parallel."),
            ("Creative Production Involvement", "Whether your internal team supplies visual creative or we produce ad assets and video edits."),
            ("Attribution & Dashboard Depth", "Custom multi-touch attribution setup and live executive reporting dashboards.")
        ],
        "service_areas": "Managing paid acquisition for brands globally, including companies in the United States, the UK, Europe, Australia, and Bangladesh.",
        "faqs": [
            {"question": "How do you decide which ad platforms my business should use?", "answer": "Platform selection is dictated by your product offering, target demographic, and sales cycle. High-consideration B2B services belong on Google Search and LinkedIn; visually engaging consumer products thrive on Meta, TikTok, and Pinterest."},
            {"question": "What is the recommended minimum ad spend for cross-platform advertising?", "answer": "For effective cross-channel media buying, we recommend a combined monthly media spend of at least $1,500 to $2,500 to provide adequate budget for statistical testing across multiple platforms."},
            {"question": "How do you prevent ad fatigue from increasing acquisition costs?", "answer": "We maintain an active creative pipeline, introducing new visual hooks, headlines, and angles weekly. Ad fatigue is identified through declining click-through rates and rising frequency, prompting automated ad rotation."},
            {"question": "Do I have direct access to my advertising accounts?", "answer": "Yes. You maintain full administrative ownership of your ad accounts on Meta, Google, TikTok, and other platforms. We connect as partner agencies or managers with authorized access."},
            {"question": "How do you track sales across multiple ad platforms accurately?", "answer": "We implement server-side tracking (Meta CAPI, TikTok Events API, Google Enhanced Conversions) and use clean UTM parameter schemas to analyze platform data alongside Google Analytics 4."},
            {"question": "How frequently will I receive performance updates?", "answer": "Clients receive access to a 24/7 live analytics dashboard, weekly summary updates, and a comprehensive monthly strategic review meeting."}
        ]
    },
    {
        "slug": "meta-ads",
        "pascal": "MetaAds",
        "file": "Meta Ads.txt",
        "title": "Meta Ads Management (Facebook & Instagram)",
        "h1": "Meta Ads Management: Scale Revenue on Facebook & Instagram",
        "subtitle": "Advantage+ Shopping, Creative Hook Testing, Conversions API & Full Funnel Scaling",
        "opening": "Meta Ads represents the world's most powerful demand-generation engine when executed with creative discipline and technical tracking accuracy. Mahedi Hasan engineers high-converting Facebook and Instagram ad campaigns that acquire customers profitably and scale brand revenue.",
        "offer_title": "Comprehensive Meta Ads Campaign Architecture",
        "offer_desc": "From rapid creative testing matrices to automated catalog scaling, designed for sustainable return on ad spend.",
        "included": [
            ("Advantage+ Shopping & Catalog Campaigns", "Harnessing Meta's machine learning with optimized product feeds, audience constraints, and dynamic catalog ads."),
            ("Weekly Creative Testing Frameworks", "Systematically testing 3-second visual hooks, primary copy angles, and diverse formats (Reels, Carousels, Static)."),
            ("Meta Conversions API (CAPI) & Server-Side Tagging", "Direct server-to-server event tracking via Google Tag Manager and AWS/Stape to eliminate iOS tracking losses."),
            ("Full-Funnel Retargeting & Customer LTV Flows", "Engaging past purchasers with cross-sell offers while nurturing warm leads with proof points and testimonials."),
            ("Account Health & Policy Protection", "Maintaining high feedback scores, adhering to ad policies, and proactively protecting ad accounts from unexpected flags.")
        ],
        "not_included": [
            ("Generic Boosting of Unoptimized Posts", "Every dollar is committed to structured ad sets with measurable conversion objectives."),
            ("Static Set-and-Forget Campaigns", "Ad accounts receive continuous monitoring, daily metric checks, and aggressive creative rotation.")
        ],
        "who_fits": "Ecommerce brands, DTC retailers, lead generation businesses, and coaching programs looking for predictable customer acquisition.",
        "why_matters_title": "Why Meta Ads Remains the Premier Scalable Paid Acquisition Channel",
        "why_matters_desc": "With over 3 billion active users across Facebook and Instagram, Meta offers unparalleled audience scale. The algorithm's predictive capability can find your ideal customers anywhere in the world—provided you feed it high-converting creative and accurate conversion data.",
        "why_matters_points": [
            ("Unmatched Audience Reach", "Facebook and Instagram offer the deepest consumer behavioral graph in digital advertising history."),
            ("Algorithmic Broad Targeting", "Meta's AI excels at finding buyers within broad audiences when guided by creative that speaks directly to customer pain points."),
            ("Visual Storytelling Formats", "Full-screen Instagram Reels and interactive carousel formats allow immersive demonstration of product value.")
        ],
        "why_choose_title": "Why Work With Mahedi Hasan for Meta Advertising",
        "why_choose_desc": "Deep technical expertise in server-side attribution paired with persuasive performance copywriting.",
        "why_choose_points": [
            ("Bulletproof Server-Side Tracking", "Complete Meta Conversions API implementation to maximize Event Quality Scores above 8.0/10."),
            ("Creative-Led Growth Strategy", "We don't just push buttons in Ads Manager; we write compelling ad copy and guide visual asset creation that converts."),
            ("Documented Scaling Protocols", "We scale winning ad sets methodically without resetting algorithm learning phases or spiking acquisition costs.")
        ],
        "process_title": "Six-Stage Meta Advertising Playbook",
        "process_desc": "A tested process to take your ad account from inconsistent results to predictable, scalable profitability.",
        "process_steps": [
            ("1. Account & Pixel Infrastructure Audit", "Checking event match quality, pixel health, domain verification, and historical campaign efficiency."),
            ("2. Audience & Avatar Strategy", "Defining cold prospecting audiences, customer match lists, and high-intent engagement retargeting pools."),
            ("3. Creative Production & Hook Ideation", "Drafting persuasive copy angles, designing visual assets, and preparing video hooks for testing."),
            ("4. Campaign Build & Launch", "Deploying isolated testing campaigns alongside consolidated Advantage+ scaling campaigns."),
            ("5. Algorithmic Optimization & Bid Tuning", "Monitoring cost per purchase, ROAS, and frequency daily to prune losers and scale winning assets."),
            ("6. Scaling & Retargeting Expansion", "Increasing budgets systematically by 15-20% on winning ad sets and expanding retargeting sequences.")
        ],
        "pricing_title": "Meta Ads Management Investment",
        "pricing_desc": "Monthly management fees are structured transparently based on your monthly ad spend and creative testing requirements.",
        "pricing_factors": [
            ("Monthly Media Spend", "Managing $2,000/month versus scaling $30,000/month with high daily budget velocity."),
            ("Weekly Creative Testing Volume", "Testing 3 new creative concepts weekly versus high-frequency 10+ variant testing programs."),
            ("Catalog & Feed Complexity", "Standard lead generation setup versus dynamic multi-thousand SKU ecommerce product catalogs."),
            ("International Market Targeting", "Single-country domestic targeting versus multi-country localized ad accounts.")
        ],
        "service_areas": "Managing Meta ad campaigns globally across the United States, United Kingdom, Canada, Australia, Bangladesh, and the Middle East.",
        "faqs": [
            {"question": "How much budget is required to start advertising on Meta?", "answer": "We recommend a minimum monthly ad budget of $1,000 (roughly $30-$35 per day) to allow Meta's algorithm to exit the learning phase and generate sufficient statistical data for optimization."},
            {"question": "What is Meta Conversions API (CAPI) and do I need it?", "answer": "Yes. Due to browser tracking restrictions (like Apple's iOS 14.5+), standard browser pixels miss 20-30% of conversion data. CAPI sends conversion events directly from your web server to Meta, restoring tracking accuracy and lowering ad costs."},
            {"question": "How often should new ad creatives be tested?", "answer": "For active ad accounts, we test fresh creative concepts every week. Continuous creative testing prevents ad fatigue, keeps click-through rates high, and sustains consistent return on ad spend."},
            {"question": "Can Meta Ads work for B2B lead generation?", "answer": "Yes, exceptionally well. By using Meta's Instant Lead Forms, localized job title targeting, and retargeting website visitors, B2B companies routinely generate qualified leads at lower costs than LinkedIn."},
            {"question": "What ROAS (Return on Ad Spend) can I expect?", "answer": "Target ROAS depends heavily on your product margins and price point. Healthy ecommerce brands typically aim for 2.5x to 4.5x blended ROAS, while high-ticket lead generation focuses on cost per qualified acquisition."},
            {"question": "Do I own my ad account and audience assets?", "answer": "Yes, absolutely. You retain complete administrative control of your Meta Business Manager, ad accounts, pixel datasets, and billing details. We connect as an authorized Agency Partner."}
        ]
    },
    {
        "slug": "pinterest-ads",
        "pascal": "PinterestAds",
        "file": "Pinterest Ads.txt",
        "title": "Pinterest Ads Management for Ecommerce & DTC Brands",
        "h1": "Pinterest Ads Management: High-Intent Visual Search Acquisition",
        "subtitle": "Shopping Pins, Idea Pins, Visual Search Targeting & High-LTV Customer Acquisition",
        "opening": "Pinterest is not a social network; it is a visual search and discovery engine where over 480 million active users plan future purchases. Mahedi Hasan builds targeted Pinterest Ads campaigns that drive high-value ecommerce sales and long-tail brand discovery.",
        "offer_title": "End-to-End Pinterest Ads Management",
        "offer_desc": "Capturing affluent consumers during the research and planning phase before they make purchasing decisions elsewhere.",
        "included": [
            ("Catalog & Product Feed Integration", "Syncing Shopify, WooCommerce, or custom product catalogs to deploy automated Shopping Pins with live pricing and stock status."),
            ("Keyword & Visual Search Targeting", "Targeting high-intent search terms, interest categories, and lookalike actalike audiences based on verified customer lists."),
            ("High-Performing Pin Creative Direction", "Designing vertical 2:3 aspect ratio pins, video pins, and multi-image carousels engineered for maximum save rates and clicks."),
            ("Pinterest Tag & Conversions Tracking", "Installing the Pinterest Tag with enhanced match and server-side tracking to capture full-funnel checkout events."),
            ("Continuous Bid & Campaign Optimization", "Optimizing bids across consideration and conversion campaigns to lower cost-per-click and maximize return on ad spend.")
        ],
        "not_included": [
            ("Organic Pin Scheduling Only", "This service is dedicated to paid media acquisition and catalog ad scaling."),
            ("Low-Resolution Repurposed Social Media Assets", "Pinterest requires dedicated 2:3 vertical creative; horizontal assets are never recommended.")
        ],
        "who_fits": "Ecommerce brands in fashion, home decor, beauty, wellness, jewelry, food, gifting, and content publishers monetizing high-value products.",
        "why_matters_title": "Why Pinterest Advertising Captures Buyers Other Platforms Miss",
        "why_matters_desc": "Pinterest users come to the platform with open commercial intent. Over 80% of weekly pinners have made a purchase based on brand content they discovered on Pinterest. Furthermore, pins enjoy a longer lifespan than posts on any other social network.",
        "why_matters_points": [
            ("Planning Mindset with High Purchasing Power", "Users save ideas weeks or months before major life events, holidays, home renovations, and gift shopping."),
            ("Substantially Lower Cost Per Click", "Because competition is lower than Google and Meta, Pinterest frequently delivers 30-50% lower CPCs in competitive niches."),
            ("Compounding Long-Tail Traffic", "Paid pins that accumulate organic repins continue driving free referral traffic and sales long after ad spend concludes.")
        ],
        "why_choose_title": "Why Work With Mahedi Hasan on Pinterest Ads",
        "why_choose_desc": "A growth architect who approaches Pinterest as a visual search engine, not a social feed.",
        "why_choose_points": [
            ("Search-First Keyword Architecture", "We structure campaigns around keyword queries and search intent, treating Pinterest like a visual version of Google."),
            ("Technical Product Catalog Mastery", "Flawless integration of ecommerce product catalogs, custom tags, and dynamic retargeting."),
            ("Cross-Channel Integration", "We connect Pinterest discovery with Google Search and Meta retargeting to maximize blended conversion efficiency.")
        ],
        "process_title": "Five-Stage Pinterest Campaign Execution",
        "process_desc": "From initial account audit to full catalog shopping deployment and scaling.",
        "process_steps": [
            ("1. Account Audit & Audience Assessment", "Evaluating brand fit, competitor pin performance, website tracking readiness, and seasonal opportunities."),
            ("2. Campaign Strategy & Keyword Mapping", "Mapping primary search queries, interest clusters, and designing the creative specifications brief."),
            ("3. Campaign Setup & Tag Integration", "Building conversion campaigns, setting up standard and video pins, and validating the Pinterest Tag."),
            ("4. Monitoring, Bid Tuning & Pruning", "Analyzing search term performance, pausing low-converting pins, and scaling winning creative assets."),
            ("5. Reporting & Long-Tail Analysis", "Tracking paid ROAS, earned organic save traffic, and adjusting strategy for upcoming seasonal peaks.")
        ],
        "pricing_title": "Pinterest Management Investment Structure",
        "pricing_desc": "Monthly management retainers based on ad spend volume and product catalog size.",
        "pricing_factors": [
            ("Monthly Advertising Budget", "Recommended minimum of $1,000/month for active audience testing and catalog scaling."),
            ("Creative Production Needs", "Providing ready vertical assets versus requiring our team to design custom 2:3 pin graphics."),
            ("Catalog Size & Feed Complexity", "Managing a curated 20-product boutique versus a multi-thousand SKU catalog."),
            ("Seasonal Campaign Scaling", "Quarterly planning and intensive budget surges for Q4 holiday and Black Friday sales.")
        ],
        "service_areas": "Delivering Pinterest Ads management for ecommerce and DTC brands across the USA, UK, Europe, Australia, and international merchants.",
        "faqs": [
            {"question": "How do Pinterest Ads differ from Facebook and Instagram ads?", "answer": "Facebook and Instagram are disruption platforms where ads interrupt personal social browsing. Pinterest is a search-and-discovery engine where users actively look for products, ideas, and solutions, yielding higher intent and longer shopping consideration cycles."},
            {"question": "What is the recommended budget for Pinterest advertising?", "answer": "We suggest starting with at least $1,000 per month in ad spend to collect sufficient click and conversion data, test multiple keyword themes, and enable Pinterest's conversion optimization algorithms."},
            {"question": "Can B2B companies succeed with Pinterest Ads?", "answer": "While consumer goods (fashion, home, beauty, food) are natural fits, B2B brands offering design software, business templates, marketing tools, or online education also find high-converting audiences at low CPCs."},
            {"question": "What creative dimensions are required for Pinterest Ads?", "answer": "Pinterest requires a 2:3 vertical aspect ratio (such as 1000 x 1500 pixels). Standard square or horizontal assets perform poorly and are heavily penalized in user engagement."},
            {"question": "How long does it take to see sales from Pinterest Ads?", "answer": "Because Pinterest users often plan in advance, consideration cycles can take 7 to 21 days. Initial traffic and add-to-carts appear immediately, with full ROAS stabilizing over the first 30 to 45 days."},
            {"question": "Do I need an existing organic Pinterest account to run ads?", "answer": "Yes, a free Pinterest Business account is required. We can assist in converting your existing profile or creating an optimized business presence from scratch."}
        ]
    },
    {
        "slug": "social-media-management",
        "pascal": "SocialMediaManagement",
        "file": "Social Media Management Services.txt",
        "title": "Platform-Specific Social Media Management",
        "h1": "Social Media Management Built for Authentic Engagement & Growth",
        "subtitle": "Strategic Facebook, Instagram, LinkedIn & Pinterest Management for Growing Brands",
        "opening": "Social media management is not simply posting content for the sake of an active feed—it is the systematic stewardship of your brand's voice, community relationships, and organic customer pipeline. Mahedi Hasan builds platform-specific social strategies that build trust, spark engagement, and support commercial revenue.",
        "offer_title": "Tailored Platform Management Services",
        "offer_desc": "Each social platform serves a unique audience mindset. We engineer tailored content calendars for each network.",
        "included": [
            ("Facebook Page Growth & Community Stewardship", "Managing engaging post formats, community discussions, and responsive bilingual customer message handling."),
            ("Instagram Visual-First Strategy & Reels", "Crafting cohesive visual grids, high-retention Reels, carousel education posts, and interactive Stories."),
            ("LinkedIn Company & Executive Presence", "Publishing thought-leadership articles, industry commentary, and company milestone updates that attract B2B prospects and talent."),
            ("Pinterest Visual SEO & Board Organization", "Curating branded boards, publishing SEO-optimized vertical pins, and driving continuous organic referral clicks to your website."),
            ("Monthly Strategy Calendar & Analytics Review", "Pre-planned monthly content roadmaps with transparent metrics tracking reach, follower quality, and engagement rates.")
        ],
        "not_included": [
            ("Automated Generic Bot Comments", "All community interactions, comments, and direct message replies are handled by human managers."),
            ("Paid Ad Spend Budget", "Organic social management and paid performance advertising are scoped separately for maximum operational focus.")
        ],
        "who_fits": "Established businesses, professional service practices, startups, and product brands that need a polished, active, and responsive online presence.",
        "why_matters_title": "Why Inconsistent Social Media Activity Silently Destroys Brand Credibility",
        "why_matters_desc": "When prospective clients research your company, they check your social channels before making contact. An abandoned page or sporadic, low-effort posts signal stagnation and lack of professionalism, pushing buyers directly into the hands of active competitors.",
        "why_matters_points": [
            ("Immediate Trust & Due Diligence Validation", "Active profiles with responsive customer interaction prove that your business is thriving, reliable, and attentive to clients."),
            ("Bilingual Market Engagement", "In markets like Bangladesh, authentic bilingual communication (Bangla and English) dramatically expands customer resonance."),
            ("Compound Organic Brand Equity", "Consistent editorial publishing builds an engaged, loyal audience that drives zero-cost referral sales and inquiries over time.")
        ],
        "why_choose_title": "Why Work With Mahedi Hasan for Social Media Management",
        "why_choose_desc": "Content backed by real business strategy, technical SEO understanding, and conversion-focused storytelling.",
        "why_choose_points": [
            ("Integrated Marketing Context", "Your social media works in direct synergy with your SEO, website architecture, and paid advertising efforts."),
            ("Bilingual Community Fluency", "Expert community management in both professional English and natural, culturally nuanced Bengali."),
            ("Strict Content Quality Standards", "Every graphic, caption, and video script adheres to professional design standards with zero generic clichés.")
        ],
        "process_title": "Six-Stage Social Management Lifecycle",
        "process_desc": "A consistent monthly rhythm to keep your brand visible, relevant, and engaging.",
        "process_steps": [
            ("1. Channel Audit & Brand Voice Definition", "Reviewing existing social profiles, competitor activity, customer personas, and setting tone guidelines."),
            ("2. Platform Strategy & Pillar Architecture", "Selecting high-priority channels and establishing core content themes (education, proof, culture, offers)."),
            ("3. Monthly Content Calendar Production", "Writing captions, designing graphics, scripting videos, and presenting the calendar for client approval."),
            ("4. Scheduled Publishing & Live Distribution", "Scheduling posts at optimal engagement hours and verifying formatting across all platforms."),
            ("5. Daily Community Management & Monitoring", "Moderating comments, answering inquiries, and engaging with relevant industry discussions."),
            ("6. Monthly Performance Analysis & Tuning", "Reviewing top-performing formats, audience growth, and refining the next month's calendar based on data.")
        ],
        "pricing_title": "Social Media Management Retainer Plans",
        "pricing_desc": "Straightforward monthly retainers structured around the number of platforms managed and monthly publishing frequency.",
        "pricing_factors": [
            ("Number of Managed Channels", "Managing a single flagship channel versus coordinated multi-platform distribution across 3+ networks."),
            ("Publishing Frequency & Format Mix", "3 posts per week versus daily publishing with high-production short-form video Reels."),
            ("Community Management Bandwidth", "Standard daytime moderation versus high-volume 7-day customer inquiry response coverage."),
            ("Original Video & Graphic Production", "Working with existing brand photo libraries versus creating custom graphics and video edits from scratch.")
        ],
        "service_areas": "Managing social media presences for enterprises and growing brands across Bangladesh, the UK, the US, and regional South Asia.",
        "faqs": [
            {"question": "How is social media management different from social media marketing?", "answer": "Social media management focuses on organic profile activity, regular content publishing, community interactions, and maintaining brand reputation. Social media marketing (paid advertising) focuses on committing ad spend into platform algorithms to acquire customers at scale."},
            {"question": "Do you handle responses to customer messages and comments?", "answer": "Yes. Our team monitors your page comments and incoming direct messages, providing prompt, professional, and brand-aligned responses or escalating complex inquiries to your internal team."},
            {"question": "Will I have an opportunity to review content before it goes live?", "answer": "Yes. We deliver a complete monthly content calendar including final visuals, copy, and hashtags in advance for your review and approval before anything is scheduled."},
            {"question": "Can you create content in both Bengali and English?", "answer": "Yes. We specialize in bilingual content creation, tailoring captions and visual messaging to match the linguistic preferences of your specific audience in Bangladesh or internationally."},
            {"question": "How many platforms should my business be active on?", "answer": "We recommend focusing deeply on 1 to 2 core platforms where your target audience actively spends time, rather than spreading resources thin across 5 platforms with mediocre content."},
            {"question": "What metrics do you track in monthly reports?", "answer": "We report on organic reach, follower growth, engagement rate, top-performing posts, customer inquiry volume, and website referral clicks."}
        ]
    },
    {
        "slug": "tiktok-ads",
        "pascal": "TiktokAds",
        "file": "TikTok Ads.txt",
        "title": "TikTok Ads Management Services",
        "h1": "TikTok Ads Management: Native Creative & Rapid Customer Acquisition",
        "subtitle": "Spark Ads, In-Feed Video, TikTok Shop & Server-Side Events API Scaling",
        "opening": "TikTok has transformed into one of the world's most aggressive commercial discovery platforms. Mahedi Hasan builds native-style TikTok ad campaigns, Spark Ad amplification frameworks, and reliable Events API tracking to turn viral attention into scalable customer acquisition.",
        "offer_title": "End-to-End TikTok Ads Campaign Management",
        "offer_desc": "Creative that looks like authentic TikTok content, backed by rigorous media buying discipline and technical tracking.",
        "included": [
            ("Native Short-Form Video Creative Strategy", "Developing fast-paced, high-retention video ad concepts that mimic organic viral formats rather than traditional television commercials."),
            ("Spark Ads & Creator Partnership Amplification", "Boosting top-performing organic posts from your own profile or creator partner accounts to maintain social proof and credibility."),
            ("TikTok Pixel & Server-Side Events API Setup", "Deploying hybrid tracking with custom GTM server containers to eliminate attribution gaps caused by mobile browser restrictions."),
            ("TikTok Shop Advertising & Catalog Feeds", "Configuring live product showcase ads, video shopping ads, and synchronized catalog shopping campaigns."),
            ("Daily Bid Optimization & Audience Testing", "Testing broad, interest, behavior, and custom lookalike audience segments to systematically lower Cost Per Acquisition (CPA).")
        ],
        "not_included": [
            ("Repurposed Television Commercials", "Traditional corporate ads fail on TikTok; we insist on native mobile-first vertical video formats."),
            ("Guaranteed Overnight Viral Hits", "We focus on predictable, repeatable paid acquisition economics rather than chasing lottery-style viral spikes.")
        ],
        "who_fits": "Ecommerce brands, DTC product innovators, mobile app developers, and direct-response lead generators targeting Gen Z, Millennials, and modern consumers.",
        "why_matters_title": "Why Traditional Advertising Fails on TikTok and What Works Instead",
        "why_matters_desc": "TikTok's algorithm prioritizes watch time, hook retention, and authentic emotion. Polished corporate commercials are swiped away in less than one second. Brands that succeed treat the platform like a creator, producing lo-fi, relatable, and entertaining demonstrations of value.",
        "why_matters_points": [
            ("The First 3-Second Hook Rule", "Over 63% of top-converting TikTok ads communicate their core offer or hook within the first 3 seconds of playback."),
            ("High Buyer Purchasing Urgency", "The viral #TikTokMadeMeBuyIt phenomenon drives impulsive, immediate purchasing behavior unlike any other social platform."),
            ("Significantly Lower CPMs", "TikTok ad inventory often delivers lower CPMs and CPCs compared to mature Western ad networks like Meta and Google.")
        ],
        "why_choose_title": "Why Work With Mahedi Hasan for TikTok Ads",
        "why_choose_desc": "Technical tracking precision paired with creative hook architecture and performance media buying.",
        "why_choose_points": [
            ("Full Server-Side Events API Implementation", "We configure server-side conversion ingestion so your attribution remains accurate despite mobile tracking limitations."),
            ("Native Creative Briefs & Hook Testing", "We script and direct high-converting hook variations that hold user attention past the initial 3-second mark."),
            ("Direct Founder Involvement & Transparent Reporting", "Direct account oversight by Mahedi Hasan with 24/7 access to live metrics and clear commercial attribution.")
        ],
        "process_title": "Six-Stage TikTok Growth Architecture",
        "process_desc": "A systematic methodology to launch, validate, and scale your TikTok ad spend.",
        "process_steps": [
            ("1. Brand & Audience Readiness Audit", "Evaluating website mobile speed, product pricing, creative assets, and TikTok platform suitability."),
            ("2. Campaign Strategy & Creative Ideation", "Scripting native video hooks, mapping competitor angles, and defining initial testing objectives."),
            ("3. Pixel & Events API Technical Setup", "Installing the TikTok Pixel and server-side Events API to track conversions accurately from day one."),
            ("4. Creative Production & Launch", "Producing vertical 9:16 video ads and launching structured testing ad groups."),
            ("5. Daily Monitoring & Fast Optimization", "Evaluating 3-second hook rates, click-through rates, and pausing underperforming creative within 48 hours."),
            ("6. Scaling Winning Creative & Budget Expansion", "Scaling budget into winning creative angles, testing Spark Ads, and expanding lookalike audiences.")
        ],
        "pricing_title": "TikTok Ads Management Pricing",
        "pricing_desc": "Management retainers based on monthly advertising spend volume and creative production scope.",
        "pricing_factors": [
            ("Monthly Advertising Spend", "Recommended minimum ad spend of $1,000/month for effective algorithmic optimization."),
            ("Video Creative Production Needs", "Client-provided raw footage versus full concept scripting and professional editing by our team."),
            ("TikTok Shop Integration", "Standard lead generation / website checkout versus complex TikTok Shop catalog configuration."),
            ("Geographic Targeting Footprint", "Single domestic territory versus international multi-country campaign scaling.")
        ],
        "service_areas": "Managing TikTok campaigns for clients in the US, UK, Canada, Australia, Bangladesh, and regional growth markets.",
        "faqs": [
            {"question": "How does TikTok advertising differ from Facebook and Instagram ads?", "answer": "TikTok requires native, unpolished, sound-on vertical video that looks like user-generated content. Polished corporate ads that perform on Facebook almost always fail on TikTok due to rapid user swipe behavior."},
            {"question": "What is a Spark Ad and why are they so effective?", "answer": "Spark Ads allow you to sponsor and boost organic TikTok videos from your own account or a creator's profile while retaining all organic comments, shares, likes, and profile visits, yielding higher credibility and lower acquisition costs."},
            {"question": "What is the minimum ad budget to start advertising on TikTok?", "answer": "We recommend a minimum monthly media spend of $1,000 to $1,500. This provides the TikTok algorithm with adequate data volume to exit learning phases and identify high-converting buyer clusters."},
            {"question": "Do you supply the video content or does our team provide it?", "answer": "We offer flexible creative options: we can script and edit ads using your existing raw footage and product videos, coordinate with vetted UGC creators, or provide detailed storyboards for your internal team to shoot."},
            {"question": "Why is the TikTok Events API critical for tracking?", "answer": "Browser-based pixels fail to record up to 30% of conversions due to mobile in-app browser restrictions and cookie blockers. The server-side Events API sends conversion data directly from your server to TikTok, ensuring complete tracking accuracy."},
            {"question": "Can TikTok Ads work for professional or B2B businesses?", "answer": "Yes. While B2C ecommerce is the largest category on TikTok, educational products, SaaS apps, career coaching, and professional services are rapidly finding high-intent audiences at low acquisition costs."}
        ]
    },
    {
        "slug": "website-marketing",
        "pascal": "WebsiteMarketing",
        "file": "Website Marketing Services in Bangladesh.txt",
        "title": "Full-Funnel Website Marketing Services",
        "h1": "Website Marketing Services in Bangladesh & Global Markets",
        "subtitle": "SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO) & CRO",
        "opening": "Building a website is only the first step—without a structured acquisition and conversion system, your site remains an invisible digital brochure. Mahedi Hasan builds comprehensive website marketing systems combining Technical SEO, AEO, GEO, and CRO to drive qualified traffic and scalable revenue.",
        "offer_title": "Comprehensive Full-Funnel Website Marketing",
        "offer_desc": "Integrating search discovery, AI engine citation, local visibility, and conversion rate optimization into one growth system.",
        "included": [
            ("Technical & Organic SEO Architecture", "Crawl budget optimization, site speed tuning, semantic content clusters, and high-intent keyword ranking."),
            ("Answer Engine Optimization (AEO)", "Formatting content into 30-60 word answer-first retrieval blocks to capture direct AI answers in Perplexity and Google Overviews."),
            ("Generative Engine Optimization (GEO)", "Building topical authority, entity graphs, and brand citations so LLMs recommend your business as the definitive answer."),
            ("Local SEO & Google Business Profile Synergy", "Dominating local geographic map packs, citation building, and localized landing pages for regional customer capture."),
            ("Conversion Rate Optimization (CRO) & Funnel Engineering", "Eliminating checkout friction, refining page typography, and engineering high-converting CTA hierarchies.")
        ],
        "not_included": [
            ("Unethical Guaranteed #1 Ranking Promises", "No agency can ethically guarantee Google #1 spots; we deliver verifiable growth through defensible strategy."),
            ("Disconnected Vanity Traffic Tactics", "We optimize strictly for commercially qualified traffic, inbound phone calls, and revenue conversions.")
        ],
        "who_fits": "SMEs, ecommerce platforms, professional practices, and startups looking to transform their website into an active revenue-generating engine.",
        "why_matters_title": "Why Modern Website Marketing Requires SEO, AEO, and CRO Working in Harmony",
        "why_matters_desc": "Consumer search behavior has split. Some users search Google; others query ChatGPT or Perplexity; others browse social feeds. When traffic lands on your website, it must convert immediately. Marketing your website requires aligning the entire discovery-to-transaction pipeline.",
        "why_matters_points": [
            ("The Zero-Click Search Shift", "AI answers are absorbing informational queries. Modern websites must optimize for both direct citations (AEO/GEO) and commercial search terms."),
            ("Eliminating Wasted Website Investment", "An unmarketed website generates zero return. Strategic marketing transforms your web asset into a 24/7 business development engine."),
            ("Compound Traffic Value", "Unlike paid advertising that stops the moment ad spend halts, an optimized search and citation foundation continues generating qualified organic leads indefinitely.")
        ],
        "why_choose_title": "Why Choose Mahedi Hasan for Website Marketing",
        "why_choose_desc": "Web development architect meets growth consultant. Complete technical mastery from backend code to frontend marketing.",
        "why_choose_points": [
            ("Full-Stack Technical Capabilities", "As a Next.js web architect, I optimize site speed, Core Web Vitals, and schema at the code level, not just on surface checklists."),
            ("Pioneering AEO & GEO Frameworks", "Early adopter of AI retrieval optimization, positioning your business to win in ChatGPT, Claude, and Google Search Overviews."),
            ("Direct Accountability", "Work directly with the founder of FrameCipher (former co-founder of Riha Web Tech) with 4+ years of proven track record.")
        ],
        "process_title": "Six-Stage Website Marketing Growth Framework",
        "process_desc": "A disciplined, step-by-step roadmap from initial diagnostic audit to continuous monthly optimization.",
        "process_steps": [
            ("1. Free Comprehensive Website Audit", "Deep diagnostic review of technical health, page speed, current rankings, competitor gaps, and conversion roadblocks."),
            ("2. Strategy & Commercial Keyword Roadmap", "Mapping high-intent buyer keywords, AI query opportunities, and establishing topical cluster priorities."),
            ("3. On-Page & Technical Code Optimization", "Restructuring title tags, heading hierarchies, schema markup, Core Web Vitals, and internal linking."),
            ("4. AEO & GEO Content Enhancement", "Writing answer-first retrieval blocks, structured FAQs, and authority-building editorial sections."),
            ("5. Authority Building & Local Optimization", "Executing digital PR, local citation synchronization, Google Business Profile enhancement, and link acquisition."),
            ("6. Monthly Performance Tracking & CRO Iteration", "Monitoring search console trends, user session recordings, conversion rates, and refining quarterly goals.")
        ],
        "pricing_title": "Website Marketing Retainer Options",
        "pricing_desc": "Comprehensive monthly growth retainers tailored to the scale, tech stack, and competition level of your website.",
        "pricing_factors": [
            ("Website Scale & Architecture", "Single-page landing pages versus 1,000+ page enterprise web applications and ecommerce stores."),
            ("Scope of Integrated Disciplines", "Technical SEO only versus full SEO + AEO/GEO + CRO + Local Business Profile management."),
            ("Market Competition Level", "Local city targeting versus highly contested national and international commercial keywords."),
            ("Content Creation Bandwidth", "Monthly editorial volume required to build defensible topical authority.")
        ],
        "service_areas": "Delivering website marketing across Dhaka, Chittagong, Sylhet, and nationwide in Bangladesh, alongside clients in the USA, UK, and Europe.",
        "faqs": [
            {"question": "What is the difference between SEO, AEO, and GEO?", "answer": "SEO optimizes your website to rank in traditional search engine results pages (SERPs). AEO (Answer Engine Optimization) formats content to be directly quoted by voice assistants and AI summary widgets. GEO (Generative Engine Optimization) builds topical authority so AI language models (like ChatGPT and Claude) recommend your brand organically."},
            {"question": "How long does it take to see results from website marketing?", "answer": "Technical fixes and on-page improvements often show initial ranking movements within 30 to 60 days. Substantial organic traffic growth and topical authority maturation typically unfold over 3 to 6 months of consistent execution."},
            {"question": "Do I need to rebuild my existing website to market it?", "answer": "Not necessarily. In most cases, we can optimize your existing website on WordPress, Shopify, Next.js, or custom code. If your current site suffers from fatal technical speed or architectural flaws, we will clearly advise you on remediation options."},
            {"question": "Can any agency guarantee #1 rankings on Google?", "answer": "No. Google's official documentation explicitly warns against any agency promising guaranteed #1 rankings. We deliver proven, repeatable optimization systems grounded in technical evidence, search intent, and conversion value."},
            {"question": "How do you track website marketing return on investment (ROI)?", "answer": "We track key business metrics through Google Analytics 4, Google Search Console, and conversion tracking: organic impressions, qualified organic clicks, form submissions, phone call clicks, and direct ecommerce revenue."},
            {"question": "How do we get started?", "answer": "We begin with a complimentary website audit and discovery consultation to review your current performance, identify immediate opportunities, and formulate a customized growth proposal."}
        ]
    }
]

os.makedirs("tmp", exist_ok=True)
with open("tmp/service_configs.json", "w", encoding="utf-8") as f:
    json.dump(SERVICES, f, indent=2, ensure_ascii=False)
print("Saved tmp/service_configs.json successfully!")
