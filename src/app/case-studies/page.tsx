import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { caseStudies } from "@/data/caseStudies";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CTA } from "@/components/home/CTA";
import { ArrowUpRight, BarChart3 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "In-depth case studies covering the problem, strategy, execution, and measurable results behind real client projects.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
          itemListSchema(
            caseStudies.map((c) => ({
              name: c.title,
              path: `/case-studies/${c.slug}`,
            }))
          ),
          webPageSchema({ name: "Case Studies | Mahedi Hasan", description: "In-depth case studies covering the problem, strategy, execution, and measurable results behind real client projects.", path: "/case-studies", breadcrumbPath: "/case-studies" }),
        ]}
      />
      <PageHero
        eyebrow="Case Studies"
        title="The strategy behind the results"
        description="A closer look at how specific problems were solved, from research through measurable outcomes."
      />

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.06}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <Image
                      src={cs.coverImage}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-container transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{cs.industry} · {cs.category.replace("-", " ")}</div><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="size-4" /></span></div>
                    <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">{cs.title}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {cs.summary}
                    </p>
                    {cs.metrics.length > 0 ? <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">{cs.metrics.slice(0, 4).map((metric) => <div key={metric.label} className="rounded-lg bg-muted/70 px-3 py-2"><div className="font-display text-lg font-bold text-primary">{metric.change}</div><div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{metric.label}</div></div>)}</div> : <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary"><BarChart3 className="size-4" /> Full campaign breakdown and evidence</div>}
                    <div className="mt-6 border-t border-border pt-4 text-sm font-semibold text-foreground">Read case study <span className="ml-1 text-primary transition-all group-hover:ml-2">→</span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
