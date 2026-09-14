import os
import json

with open("tmp/service_configs.json", "r", encoding="utf-8") as f:
    SERVICES = json.load(f)

for s in SERVICES:
    slug = s["slug"]
    pascal = s["pascal"]
    
    # Target directories
    dir_services = os.path.join("src", "components", "services", slug)
    dir_direct = os.path.join("src", "components", slug)
    os.makedirs(dir_services, exist_ok=True)
    os.makedirs(dir_direct, exist_ok=True)

    # 1. Hero.tsx
    hero_code = f'''import Link from "next/link";
import {{ ArrowUpRight, CheckCircle2, Sparkles }} from "lucide-react";
import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";

export function {pascal}Hero() {{
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-surface via-background to-background py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">{s['title']}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
            {s['h1']}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary">
            {s['subtitle']}
          </p>
          <div className="mt-6 max-w-3xl rounded-xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm">
            <p className="text-base leading-relaxed text-muted-foreground">
              {s['opening']}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Book Strategy Consultation <ArrowUpRight className="size-4" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
            >
              View Pricing & Deliverables ↓
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-4">
            <div>
              <div className="text-2xl font-bold font-display text-foreground">4+ Years</div>
              <div className="text-xs text-muted-foreground">Technical Track Record</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">50+ Projects</div>
              <div className="text-xs text-muted-foreground">Successfully Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">৳15L+ Revenue</div>
              <div className="text-xs text-muted-foreground">Client Sales Impact</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">100% Proven</div>
              <div className="text-xs text-muted-foreground">Zero AI Clichés / Fluff</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}}
'''

    # 2. Offer.tsx
    included_items_jsx = "\n".join([
        f'''              <div key="{title}" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">{title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>''' for title, desc in s["included"]
    ])

    not_included_items_jsx = "\n".join([
        f'''              <div key="{title}" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">{title}</h5>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>''' for title, desc in s["not_included"]
    ])

    offer_code = f'''import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";
import {{ CheckCircle2 }} from "lucide-react";

export function {pascal}Offer() {{
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            {s['offer_title']}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {s['offer_desc']}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
{included_items_jsx}
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
{not_included_items_jsx}
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s['who_fits']}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}}
'''

    # 3. WhyItMatters.tsx
    why_matters_points_jsx = "\n".join([
        f'''            <div key="{title}" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage {i+1}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>''' for i, (title, desc) in enumerate(s["why_matters_points"])
    ])

    why_matters_code = f'''import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";

export function {pascal}WhyItMatters() {{
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            {s['why_matters_title']}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {s['why_matters_desc']}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
{why_matters_points_jsx}
        </div>
      </Container>
    </section>
  );
}}
'''

    # 4. WhyChooseMe.tsx
    why_choose_points_jsx = "\n".join([
        f'''            <div key="{title}" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                0{i+1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>''' for i, (title, desc) in enumerate(s["why_choose_points"])
    ])

    why_choose_code = f'''import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";

export function {pascal}WhyChooseMe() {{
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            {s['why_choose_title']}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {s['why_choose_desc']}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
{why_choose_points_jsx}
        </div>
      </Container>
    </section>
  );
}}
'''

    # 5. Process.tsx
    process_steps_jsx = "\n".join([
        f'''            <div key="{title}" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 0{i+1}</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>''' for i, (title, desc) in enumerate(s["process_steps"])
    ])

    process_code = f'''import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";

export function {pascal}Process() {{
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            {s['process_title']}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {s['process_desc']}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
{process_steps_jsx}
        </div>
      </Container>
    </section>
  );
}}
'''

    # 6. Pricing.tsx
    pricing_factors_jsx = "\n".join([
        f'''              <tr key="{factor}" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">{factor}</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">{how}</td>
              </tr>''' for factor, how in s["pricing_factors"]
    ])

    pricing_code = f'''import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";
import Link from "next/link";
import {{ ArrowUpRight }} from "lucide-react";

export function {pascal}Pricing() {{
  return (
    <section id="pricing" className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Transparent Investment</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            {s['pricing_title']}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {s['pricing_desc']}
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-6 md:p-8 backdrop-blur-sm">
          <h3 className="text-lg font-bold font-display text-foreground">Core Scope & Pricing Factors</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 pr-4 font-semibold">Scope Factor</th>
                  <th className="pb-3 pl-4 font-semibold">Impact on Investment</th>
                </tr>
              </thead>
              <tbody>
{pricing_factors_jsx}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="font-semibold text-foreground">Free Discovery & Scope Audit</h4>
              <p className="mt-1 text-sm text-muted-foreground">We review your accounts and goals before quoting, guaranteeing you only pay for what directly generates results.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Request Custom Quote <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}}
'''

    # 7. ServiceAreas.tsx
    service_areas_code = f'''import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";
import {{ Globe, MapPin, ShieldCheck }} from "lucide-react";

export function {pascal}ServiceAreas() {{
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <Reveal className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-bold font-display text-foreground">Bangladesh Operations</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Based in Dhaka, supporting local enterprises with strategic alignment, bilingual marketing, and localized execution.
            </p>
          </Reveal>

          <Reveal delay={{0.1}} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Globe className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-bold font-display text-foreground">Global Client Engagements</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Direct technical and media campaign operations for companies across North America, the UK, Europe, and Australia.
            </p>
          </Reveal>

          <Reveal delay={{0.2}} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-bold font-display text-foreground">Execution Guarantee</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We guarantee 100% transparency, rigorous tracking setups, and continuous iterative optimization. No vanity metrics.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}}
'''

    # 8. FAQ.tsx
    faqs_json = json.dumps(s["faqs"], indent=2, ensure_ascii=False)
    faq_code = f'''"use client";

import {{ Container }} from "@/components/ui/container";
import {{ Reveal }} from "@/components/shared/Reveal";
import {{ FAQAccordion }} from "@/components/shared/FAQAccordion";

const faqItems = {faqs_json};

export function {pascal}FAQ() {{
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our {s['title'].lower()} scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={{0.1}} className="mt-10">
          <FAQAccordion items={{faqItems}} />
        </Reveal>
      </Container>
    </section>
  );
}}
'''

    # 9. CTA.tsx
    cta_code = f'''import {{ CTA }} from "@/components/home/CTA";

export function {pascal}CTA() {{
  return <CTA />;
}}
'''

    # 10. index.ts
    index_code = f'''export {{ {pascal}Hero }} from "./{pascal}Hero";
export {{ {pascal}Offer }} from "./{pascal}Offer";
export {{ {pascal}WhyItMatters }} from "./{pascal}WhyItMatters";
export {{ {pascal}WhyChooseMe }} from "./{pascal}WhyChooseMe";
export {{ {pascal}Process }} from "./{pascal}Process";
export {{ {pascal}Pricing }} from "./{pascal}Pricing";
export {{ {pascal}ServiceAreas }} from "./{pascal}ServiceAreas";
export {{ {pascal}FAQ }} from "./{pascal}FAQ";
export {{ {pascal}CTA }} from "./{pascal}CTA";
'''

    # Write files to src/components/services/<slug>/
    files_to_write = [
        (f"{pascal}Hero.tsx", hero_code),
        (f"{pascal}Offer.tsx", offer_code),
        (f"{pascal}WhyItMatters.tsx", why_matters_code),
        (f"{pascal}WhyChooseMe.tsx", why_choose_code),
        (f"{pascal}Process.tsx", process_code),
        (f"{pascal}Pricing.tsx", pricing_code),
        (f"{pascal}ServiceAreas.tsx", service_areas_code),
        (f"{pascal}FAQ.tsx", faq_code),
        (f"{pascal}CTA.tsx", cta_code),
        ("index.ts", index_code),
    ]

    for fname, code in files_to_write:
        with open(os.path.join(dir_services, fname), "w", encoding="utf-8") as out_f:
            out_f.write(code)

    # Also mirror/re-export in src/components/<slug>/
    direct_index_code = f'''// Re-export dedicated page components for {slug}
export * from "@/components/services/{slug}";
'''
    with open(os.path.join(dir_direct, "index.ts"), "w", encoding="utf-8") as out_f:
        out_f.write(direct_index_code)

    # 11. Update src/app/services/<slug>/page.tsx
    app_page_code = f'''import type {{ Metadata }} from "next";
import {{ JsonLd }} from "@/components/seo/JsonLd";
import {{ breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema }} from "@/lib/schema";
import {{ getServiceForPage, getServicePageMetadata }} from "@/lib/service-page";
import {{ getExpandedServiceFaqs }} from "@/data/serviceFaqs";
import {{ {pascal}Hero }} from "@/components/services/{slug}/{pascal}Hero";
import {{ {pascal}Offer }} from "@/components/services/{slug}/{pascal}Offer";
import {{ {pascal}WhyItMatters }} from "@/components/services/{slug}/{pascal}WhyItMatters";
import {{ {pascal}WhyChooseMe }} from "@/components/services/{slug}/{pascal}WhyChooseMe";
import {{ {pascal}Process }} from "@/components/services/{slug}/{pascal}Process";
import {{ {pascal}Pricing }} from "@/components/services/{slug}/{pascal}Pricing";
import {{ {pascal}ServiceAreas }} from "@/components/services/{slug}/{pascal}ServiceAreas";
import {{ {pascal}FAQ }} from "@/components/services/{slug}/{pascal}FAQ";
import {{ {pascal}CTA }} from "@/components/services/{slug}/{pascal}CTA";

export const metadata: Metadata = getServicePageMetadata("{slug}");

export default function {pascal}Page() {{
  const service = getServiceForPage("{slug}");

  return (
    <>
      <JsonLd
        data={{[
          breadcrumbSchema([
            {{ name: "Home", path: "/" }},
            {{ name: "Services", path: "/services" }},
            {{ name: service.title, path: "/services/" + service.slug }},
          ]),
          serviceSchema(service),
          serviceArticleSchema(service),
          faqSchema(getExpandedServiceFaqs(service), "/services/" + service.slug),
        ]}}
      />
      <{pascal}Hero />
      <{pascal}Offer />
      <{pascal}WhyItMatters />
      <{pascal}WhyChooseMe />
      <{pascal}Process />
      <{pascal}Pricing />
      <{pascal}ServiceAreas />
      <{pascal}FAQ />
      <{pascal}CTA />
    </>
  );
}}
'''
    page_file = os.path.join("src", "app", "services", slug, "page.tsx")
    with open(page_file, "w", encoding="utf-8") as out_f:
        out_f.write(app_page_code)

    print(f"Generated {slug} components and updated {page_file}")

print("All 10 services successfully created with dedicated component folders!")
