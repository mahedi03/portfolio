import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { caseStudies } from "@/data/caseStudies";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CTA } from "@/components/home/CTA";

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
                  className="group block overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
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
                    <div className="text-xs font-medium uppercase tracking-wide text-primary">
                      {cs.industry} · {cs.category.replace("-", " ")}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold">{cs.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cs.summary}
                    </p>
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
