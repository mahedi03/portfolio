// ============================================================================
// SERVICE COMPONENT REGISTRY
// Maps every service slug (data/services.ts) to its bespoke page component in
// src/components/service/<slug>/. Unknown slugs (a newly added service without
// a bespoke component yet) fall back to the shared ServiceDetailLayout.
// ============================================================================

import type { ComponentType } from "react";
import type { Service } from "@/types";

import { WebsiteDevelopmentServicePage } from "@/components/service/website-development";
import { SeoServicePage } from "@/components/service/seo";
import { TechnicalSeoServicePage } from "@/components/service/technical-seo";
import { OffPageSeoServicePage } from "@/components/service/off-page-seo";
import { SeoContentWritingServicePage } from "@/components/service/seo-content-writing";
import { LocalSeoServicePage } from "@/components/service/local-seo";
import { GoogleAdsServicePage } from "@/components/service/google-ads";
import { MetaAdsServicePage } from "@/components/service/meta-ads";
import { TiktokAdsServicePage } from "@/components/service/tiktok-ads";
import { PinterestAdsServicePage } from "@/components/service/pinterest-ads";
import { CroServicePage } from "@/components/service/cro";
import { ContentMarketingServicePage } from "@/components/service/content-marketing";
import { MarketingStrategyServicePage } from "@/components/service/marketing-strategy";
import { AnalyticsTrackingServicePage } from "@/components/service/analytics-tracking";
import { ChatgptAdsServicePage } from "@/components/service/chatgpt-ads";
import { MediaBuyingServicePage } from "@/components/service/media-buying";
import { SocialMediaManagementServicePage } from "@/components/service/social-media-management";
import { WebsiteMarketingServicePage } from "@/components/service/website-marketing";
import { CreativeContentServicePage } from "@/components/service/creative-content";
import { GuestPostServicesServicePage } from "@/components/service/guest-post-services";

export const SERVICE_PAGE_COMPONENTS: Record<
  string,
  ComponentType<{ service: Service }>
> = {
  "website-development": WebsiteDevelopmentServicePage,
  "seo": SeoServicePage,
  "technical-seo": TechnicalSeoServicePage,
  "off-page-seo": OffPageSeoServicePage,
  "seo-content-writing": SeoContentWritingServicePage,
  "local-seo": LocalSeoServicePage,
  "google-ads": GoogleAdsServicePage,
  "meta-ads": MetaAdsServicePage,
  "tiktok-ads": TiktokAdsServicePage,
  "pinterest-ads": PinterestAdsServicePage,
  "cro": CroServicePage,
  "content-marketing": ContentMarketingServicePage,
  "marketing-strategy": MarketingStrategyServicePage,
  "analytics-tracking": AnalyticsTrackingServicePage,
  "chatgpt-ads": ChatgptAdsServicePage,
  "media-buying": MediaBuyingServicePage,
  "social-media-management": SocialMediaManagementServicePage,
  "website-marketing": WebsiteMarketingServicePage,
  "creative-content": CreativeContentServicePage,
  "guest-post-services": GuestPostServicesServicePage,
};
