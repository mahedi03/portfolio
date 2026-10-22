// One-off generator: creates src/components/service/<slug>/index.tsx for every
// service (Frame-Cipher convention: one bespoke component per service page) and
// the slug→component registry. Safe to re-run — it overwrites generated files.
import fs from "node:fs";
import path from "node:path";

const slugs = [
  "website-development",
  "seo",
  "technical-seo",
  "off-page-seo",
  "seo-content-writing",
  "local-seo",
  "google-ads",
  "meta-ads",
  "tiktok-ads",
  "pinterest-ads",
  "cro",
  "content-marketing",
  "marketing-strategy",
  "analytics-tracking",
  "chatgpt-ads",
  "media-buying",
  "social-media-management",
  "website-marketing",
  "creative-content",
  "guest-post-services",
];

const pascal = (slug) =>
  slug.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");

const SECTION_IMPORTS = `import {
  ServiceHero,
  ServiceOfferings,
  ServiceWhyItMatters,
  ServiceWhyChooseMe,
  ServiceProcess,
  ServicePricing,
  ServiceAreas,
  ServiceDeliverables,
  ServiceLongForm,
  ServiceFAQ,
  RelatedServices,
  ServiceCTA,
} from "@/components/service";`;

const SECTIONS_BODY = `      <ServiceHero service={service} />
      <ServiceOfferings service={service} />
      <ServiceWhyItMatters service={service} />
      <ServiceWhyChooseMe service={service} />
      <ServiceProcess service={service} />
      <ServicePricing service={service} />
      <ServiceAreas service={service} />
      <ServiceDeliverables service={service} />
      <ServiceLongForm service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices service={service} />
      <ServiceCTA />`;

const registryEntries = [];
let count = 0;

for (const slug of slugs) {
  const Name = pascal(slug);
  const dir = path.join("src", "components", "service", slug);
  fs.mkdirSync(dir, { recursive: true });

  const isSeo = slug === "seo";
  const extraImport = isSeo
    ? 'import { SeoServicesContent } from "@/components/service";\n'
    : "";
  const extraSection = isSeo
    ? "\n      {/* Bespoke deep-dive sections (only /services/seo carries this) */}\n      <SeoServicesContent />"
    : "";

  const file = `// ============================================================================
// SERVICE PAGE COMPONENT: ${slug}
// One bespoke component per service page (Frame-Cipher convention). Content
// comes from data/services.ts; bespoke edits (custom section order, extra
// sections, service-specific proof blocks) belong in this file.
// ============================================================================

import type { Service } from "@/types";
${SECTION_IMPORTS}
${extraImport}
export function ${Name}ServicePage({ service }: { service: Service }) {
  if (service.slug !== "${slug}") return null;

  return (
    <>
${SECTIONS_BODY}${extraSection}
    </>
  );
}
`;
  fs.writeFileSync(path.join(dir, "index.tsx"), file);
  registryEntries.push(`  "${slug}": ${Name}ServicePage,`);
  count++;
}

const registry = `// ============================================================================
// SERVICE COMPONENT REGISTRY
// Maps every service slug (data/services.ts) to its bespoke page component in
// src/components/service/<slug>/. Unknown slugs (a newly added service without
// a bespoke component yet) fall back to the shared ServiceDetailLayout.
// ============================================================================

import type { ComponentType } from "react";
import type { Service } from "@/types";

${slugs
  .map((s) => `import { ${pascal(s)}ServicePage } from "@/components/service/${s}";`)
  .join("\n")}

export const SERVICE_PAGE_COMPONENTS: Record<
  string,
  ComponentType<{ service: Service }>
> = {
${registryEntries.join("\n")}
};
`;

fs.writeFileSync(path.join("src", "views", "service-registry.ts"), registry);
console.log(`generated ${count} service component folders + registry`);
