import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

interface Props {
  params: Promise<{ slug: string }>;
}

function normalizeCaseStudyText(value: string) {
  return value
    .replaceAll("â€œ", "“")
    .replaceAll("â€", "”")
    .replaceAll("â€™", "’")
    .replaceAll("â€“", "–")
    .replaceAll("â€”", "—")
    .replaceAll("â€¢", "•")
    .replaceAll("â†’", "→")
    .replaceAll("â€“", "–")
    .replaceAll("TuÄŸberk", "Tuğberk")
    .replaceAll("GÃ¼bÃ¼r", "Gübür");
}

function fixCaseStudyEncoding(value: string) {
  return value
    .replaceAll("\u00e2\u20ac\u0153", "\u201c")
    .replaceAll("\u00e2\u20ac\u009d", "\u201d")
    .replaceAll("\u00e2\u20ac\u2122", "\u2019")
    .replaceAll("\u00e2\u20ac\u2013", "\u2013")
    .replaceAll("\u00e2\u20ac\u2014", "\u2014")
    .replaceAll("\u00e2\u20ac\u2022", "\u2022")
    .replaceAll("\u00e2\u2020\u2122", "\u2192")
    .replaceAll("Tu\u00c4\u0178berk", "Tu\u011fberk")
    .replaceAll("G\u00c3\u00bcb\u00c3\u00bcr", "G\u00fcb\u00fcr");
}

function renderCaseStudyContent(value: string) {
  const lines = fixCaseStudyEncoding(normalizeCaseStudyText(value)).split(/\r?\n/);

  return lines.map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={`space-${index}`} className="h-3" aria-hidden />;

    if (trimmed === "CASE STUDY") {
      return <p key={index} className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{trimmed}</p>;
    }

    if (index === 1) {
      return <h2 key={index} className="mt-3 text-2xl font-display font-bold tracking-tight sm:text-3xl">{trimmed}</h2>;
    }

    if (index === 2) {
      return <p key={index} className="mt-3 text-lg leading-8 text-foreground">{trimmed}</p>;
    }

    const numberedHeading = trimmed.match(/^(\d+)\. (.+)$/);
    if (numberedHeading) {
      return <h2 key={index} className="mt-10 border-b border-border pb-2 text-xl font-display font-bold tracking-tight sm:text-2xl"><span className="mr-2 text-primary">{numberedHeading[1]}.</span>{numberedHeading[2]}</h2>;
    }

    if (["Central Entity", "Source Context", "Central Search Intent", "Attribute columns used across all 10 pillars:"].includes(trimmed)) {
      return <h3 key={index} className="mt-7 text-lg font-display font-bold">{trimmed}</h3>;
    }

    if (trimmed.startsWith("•")) {
      return <div key={index} className="flex gap-3 pl-2 text-muted-foreground"><span className="text-primary">•</span><span>{trimmed.slice(1).trim()}</span></div>;
    }

    if (trimmed.startsWith("\u2022")) {
      return <div key={index} className="flex gap-3 pl-2 text-muted-foreground"><span className="text-primary">{"\u2022"}</span><span>{trimmed.slice(1).trim()}</span></div>;
    }

    if (/^\d+\.\t/.test(line)) {
      const [number, ...parts] = line.split("\t");
      return <div key={index} className="flex gap-3 pl-2 text-muted-foreground"><span className="font-semibold text-primary">{number}</span><span>{parts.join(" ")}</span></div>;
    }

    if (line.includes("\t")) {
      const cells = line.split("\t");
      return <div key={index} className="grid gap-2 rounded-md border-b border-border/70 py-2 text-sm md:grid-cols-[1fr_1.4fr_1.8fr]">{cells.map((cell, cellIndex) => <span key={`${index}-${cellIndex}`} className={cellIndex === 0 ? "font-medium text-foreground" : "text-muted-foreground"}>{cell}</span>)}</div>;
    }

    return <p key={index} className="text-muted-foreground">{trimmed}</p>;
  });
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return buildMetadata({
    title: cs.metaTitle,
    description: cs.metaDescription,
    path: `/case-studies/${cs.slug}`,
    ogImage: cs.coverImage,
  });
}

const sections: { key: "problem" | "research" | "planning" | "strategy" | "execution"; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "research", label: "Research" },
  { key: "planning", label: "Planning" },
  { key: "strategy", label: "Strategy" },
  { key: "execution", label: "Execution" },
];

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: cs.title, path: `/case-studies/${cs.slug}` },
          ]),
          caseStudySchema(cs),
        ]}
      />

      <section className="pt-16 pb-10 lg:pt-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {cs.industry} · {cs.client}
            </p>
            <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight">
              {cs.title}
            </h1>
            <p className="mt-5 text-[length:var(--text-body-lg)] text-muted-foreground">
              {cs.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted shadow-elevated">
            <Image
              src={cs.coverImage}
              alt={cs.title}
              fill
              sizes="100vw"
              className="object-container"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {cs.fullContent && (
        <section className="pb-16">
          <Container className="max-w-4xl">
            <article className="rounded-xl border border-border bg-card p-6 text-sm leading-7 shadow-soft sm:p-8 lg:p-10">
              {renderCaseStudyContent(cs.fullContent)}
            </article>
          </Container>
        </section>
      )}

      {cs.screenshots.length > 0 && (
        <section className="pb-16">
          <Container>
            <Reveal className="mb-6">
              <h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">
                Performance snapshots
              </h2>
              <p className="mt-2 text-muted-foreground">
                First-party reporting and campaign evidence from the engagement.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {cs.screenshots.map((screenshot, index) => (
                <Reveal key={screenshot} delay={index * 0.05} className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted shadow-soft">
                  <Image
                    src={screenshot}
                    alt={cs.screenshotCaptions?.[index] ?? `${cs.title} performance snapshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-container"
                  />
                </Reveal>
              ))}
            </div>
            {cs.screenshotCaptions && (
              <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-2">
                {cs.screenshotCaptions.map((caption) => <p key={caption}>{caption}</p>)}
              </div>
            )}
          </Container>
        </section>
      )}

      {cs.snapshot && (
        <section className="py-16">
          <Container className="max-w-4xl">
            <Reveal>
              <h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Client snapshot</h2>
              <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
                {cs.snapshot.map((item) => (
                  <div key={item.label} className="grid gap-2 px-5 py-4 md:grid-cols-[12rem_1fr]">
                    <dt className="text-sm font-semibold">{item.label}</dt>
                    <dd className="text-sm text-muted-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Metrics */}
      {cs.metrics.length > 0 && (
        <section className="border-y border-border bg-surface py-14">
          <Container>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {cs.metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.06} className="text-center">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    {m.label}
                  </div>
                  <div className="mt-2 font-display text-xl font-bold text-primary">
                    {m.change}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {m.before} → {m.after}
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {cs.silos && (
        <section className="border-y border-border bg-surface py-16">
          <Container className="max-w-5xl">
            <Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Local site architecture</h2><p className="mt-3 max-w-3xl text-muted-foreground">The site was organized as a hub-and-spoke structure rooted in the Phone Repair Ocala money page. Each child page matched a specific device and repair intent, then passed relevance back through deliberate internal links.</p></Reveal>
            <div className="mt-7 overflow-hidden rounded-xl border border-border bg-card">
              <div className="hidden grid-cols-[1fr_1.15fr_1.8fr] gap-4 bg-muted px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground md:grid"><span>Silo</span><span>Hierarchy</span><span>Service pages</span></div>
              {cs.silos.map((silo) => <div key={silo.name} className="grid gap-2 border-t border-border px-5 py-4 md:grid-cols-[1fr_1.15fr_1.8fr] md:gap-4"><strong className="text-sm">{silo.name}</strong><span className="text-sm text-muted-foreground">{silo.hierarchy}</span><span className="text-sm text-muted-foreground">{silo.pages}</span></div>)}
            </div>
          </Container>
        </section>
      )}

      {cs.performanceRows && (
        <section className="py-16">
          <Container className="max-w-5xl">
            <Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Search Console results</h2><p className="mt-3 text-muted-foreground">The phased rollout produced a compounding visibility curve across five monitoring snapshots.</p></Reveal>
            <div className="mt-7 overflow-x-auto rounded-xl border border-border"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground"><tr><th className="px-4 py-3">Snapshot</th><th className="px-4 py-3">Date range</th><th className="px-4 py-3">Clicks</th><th className="px-4 py-3">Impressions</th><th className="px-4 py-3">CTR</th><th className="px-4 py-3">Position</th></tr></thead><tbody>{cs.performanceRows.map((row) => <tr key={`${row.date}-${row.range}`} className="border-t border-border"><td className="px-4 py-3 font-medium">{row.date}</td><td className="px-4 py-3 text-muted-foreground">{row.range}</td><td className="px-4 py-3">{row.clicks}</td><td className="px-4 py-3">{row.impressions}</td><td className="px-4 py-3">{row.ctr}</td><td className="px-4 py-3">{row.position}</td></tr>)}</tbody></table></div>
            {cs.resultReadout && <div className="mt-6 space-y-3 text-muted-foreground">{cs.resultReadout.map((item) => <p key={item}>{item}</p>)}</div>}
          </Container>
        </section>
      )}

      {cs.additionalResults && (
        <section className="border-y border-border bg-surface py-16">
          <Container className="max-w-3xl"><Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Additional measurement</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-muted-foreground">{cs.additionalResults.map((item) => <li key={item}>{item}</li>)}</ul></Reveal></Container>
        </section>
      )}

      {cs.rankingGroups && (
        <section className="py-16">
          <Container className="max-w-5xl">
            <Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Keyword-level rankings</h2><p className="mt-3 text-muted-foreground">Independently tracked Google positions show how service pages and supporting content performed across the campaign.</p></Reveal>
            <div className="mt-8 space-y-10">
              {cs.rankingGroups.map((group) => <div key={group.title}><h3 className="text-xl font-display font-bold">{group.title}</h3><div className="mt-4 overflow-x-auto rounded-xl border border-border"><table className="w-full min-w-[540px] text-left text-sm"><thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground"><tr><th className="px-4 py-3">Target</th><th className="px-4 py-3">URL</th><th className="px-4 py-3">Position</th></tr></thead><tbody>{group.rows.map((row) => <tr key={row.target} className="border-t border-border"><td className="px-4 py-3 font-medium">{row.target}</td><td className="px-4 py-3 text-muted-foreground">{row.url ?? "Blog target"}</td><td className="px-4 py-3 font-semibold text-primary">{row.position}</td></tr>)}</tbody></table></div>{group.note && <p className="mt-3 text-sm text-muted-foreground">{group.note}</p>}</div>)}
            </div>
          </Container>
        </section>
      )}

      {cs.timelineSteps && (
        <section className="border-y border-border bg-surface py-16"><Container className="max-w-3xl"><Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Execution timeline</h2><ol className="mt-6 space-y-4">{cs.timelineSteps.map((step, index) => <li key={step} className="flex gap-4"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span><span className="text-muted-foreground">{step}</span></li>)}</ol></Reveal></Container></section>
      )}

      {cs.scopePages && (
        <section className="py-16"><Container className="max-w-5xl"><Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Scope of work: 34 pages published</h2><p className="mt-3 text-muted-foreground">Every page below targeted an Ocala local search intent across the five silos.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{cs.scopePages.map((page, index) => <div key={page} className="rounded-lg border border-border bg-card px-4 py-3 text-sm"><span className="mr-2 text-muted-foreground">{index + 1}.</span>{page}</div>)}</div></Reveal></Container></section>
      )}

      {cs.whyItWorked && (
        <section className="border-y border-border bg-surface py-16"><Container className="max-w-3xl"><Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Why it worked</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-muted-foreground">{cs.whyItWorked.map((item) => <li key={item}>{item}</li>)}</ul></Reveal></Container></section>
      )}

      {/* Problem/Research/Planning/Strategy/Execution */}
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.05}>
              <h2 className="text-[length:var(--text-h3)] font-display font-bold">
                {cs.sectionLabels?.[s.key] ?? s.label}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {cs[s.key] as string}
              </p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Tools */}
      <section className="border-t border-border bg-surface py-14">
        <Container className="max-w-3xl">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Tools used
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Lessons learned */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-[length:var(--text-h3)] font-display font-bold">
              Lessons learned
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {cs.lessonsLearned.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section className="border-t border-border bg-surface py-16">
          <Container className="max-w-2xl text-center">
            <Reveal>
              <blockquote className="text-[length:var(--text-body-lg)] font-medium">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 text-sm text-muted-foreground">
                {cs.testimonial.author}, {cs.testimonial.role}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">
              Want results like this?
            </h2>
            <Button asChild size="lg" variant="secondary" className="mt-6">
              <Link href="/contact">
                Start a Project <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
