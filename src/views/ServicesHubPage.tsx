// ============================================================================
// VIEW: ServicesHubPage
// Focused, conversion-oriented composition of the /services hub page.
// ============================================================================

import {
  ServicesHero,
  ServicesGrid,
  ServicesProblemSelector,
  ServicesBundles,
  ServicesComparison,
  ServicesPricingTiers,
} from "@/components/services";
import { CTA } from "@/components/home/CTA";

export function ServicesHubPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProblemSelector />
      <ServicesBundles />
      <ServicesPricingTiers />
      <ServicesComparison />
      <CTA />
    </>
  );
}
