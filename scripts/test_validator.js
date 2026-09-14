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
        throw new Error(`[BANNED WORD] Found "${word}" at ${pathPrefix}: "${obj.substring(0, 80)}..."`);
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

// 1. ChatGPT Ads
const chatgptAdsService = {
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
};

console.log('Testing chatgptAdsService...');
assertNoBannedWords(chatgptAdsService, 'chatgptAdsService');
console.log('Passed chatgptAdsService!');
