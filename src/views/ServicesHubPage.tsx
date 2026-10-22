// ============================================================================
// VIEW: ServicesHubPage
// Composition of the /services hub page. Sections live in
// src/components/services/* (hub components).
// ============================================================================

import {
  ServicesHero,
  ServicesProblemSelector,
  ServicesBusinessGoals,
  ServicesSystem,
  ServicesGrid,
  ServicesBundles,
  ServicesProcessOverview,
  ServicesIndustries,
  ServicesComparison,
  ServicesPricingTiers,
} from "@/components/services";
import { CTA } from "@/components/home/CTA";

export function ServicesHubPage() {
  return (
    <>
      <ServicesHero />
      <ServicesProblemSelector />
      <ServicesBusinessGoals />
      <ServicesSystem />
      <ServicesGrid />
      <ServicesBundles />
      <ServicesProcessOverview />
      <ServicesIndustries />
      <ServicesComparison />
      <ServicesPricingTiers />
      <CTA />
    </>
  );
}
