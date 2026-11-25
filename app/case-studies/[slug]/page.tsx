import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Quote, ShieldCheck, Wrench } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, caseStudySchema, webPageSchema } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CTA } from "@/components/home/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

function normalizeCaseStudyText(value: string) {
  return value
    .replaceAll("â€œ", "“")
    .replaceAll("â€ ", "”")
    .replaceAll("â€™", "’")
    .replaceAll("â€“", "–")
    .replaceAll("â€”", "—")
    .replaceAll("â€¢", "•")
    .replaceAll("â†’", "→")
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
  const headingLines = new Set([
    "Client Snapshot", "The Challenge", "Strategy & Execution", "Results: Google Search Console",
    "Results: Domain Authority & Keyword Footprint", "Results: Organic Traffic Trend", "Keyword Rankings Achieved",
    "Real-World SERP Visibility", "Where the Campaign Stood at the 5-Month Mark", "Results Summary", "Conclusion",
  ]);

  return lines.map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={`space-${index}`} className="h-3" aria-hidden />;

    if (trimmed === "CASE STUDY" || trimmed === "SEO CASE STUDY") {
      return <p key={index} className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{trimmed}</p>;
    }

    if (headingLines.has(trimmed)) {
      return (
        <h2 key={index} className="mt-12 flex items-center gap-3 border-b border-border/80 pb-3 text-xl font-display font-bold tracking-tight text-white first:mt-0 sm:text-2xl">
          <span className="h-6 w-1 rounded-full bg-primary" />
          {trimmed}
        </h2>
      );
    }

    if (index === 1) {
      return <h2 key={index} className="mt-3 text-2xl font-display font-bold tracking-tight text-white sm:text-3xl">{trimmed}</h2>;
    }

    if (index === 2) {
      return <p key={index} className="mt-3 text-base sm:text-lg leading-relaxed text-foreground">{trimmed}</p>;
    }

    const numberedHeading = trimmed.match(/^(\d+)\. (.+)$/);
    if (numberedHeading) {
      return (
        <h3 key={index} className="mt-8 flex items-center gap-3 font-display text-lg font-bold text-white">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {numberedHeading[1]}
          </span>
          {numberedHeading[2]}
        </h3>
      );
    }

    if (["Central Entity", "Source Context", "Central Search Intent", "Attribute columns used across all 10 pillars:"].includes(trimmed)) {
      return <h3 key={index} className="mt-7 text-lg font-display font-bold text-white">{trimmed}</h3>;
    }

    if (trimmed.startsWith("•") || trimmed.startsWith("\u2022")) {
      return (
        <div key={index} className="flex gap-3 pl-2 text-muted-foreground">
          <span className="text-primary">•</span>
          <span>{trimmed.slice(1).trim()}</span>
        </div>
      );
    }

    if (/^\d+\.\t/.test(line)) {
      const [number, ...parts] = line.split("\t");
      return (
        <div key={index} className="flex gap-3 pl-2 text-muted-foreground">
          <span className="font-semibold text-primary">{number}</span>
          <span>{parts.join(" ")}</span>
        </div>
      );
    }

    if (line.includes("\t")) {
      const cells = line.split("\t");
      return (
        <div key={index} className="grid gap-2 rounded-xl border border-border/80 bg-background/70 px-4 py-3 text-sm md:grid-cols-[1fr_1.4fr_1.8fr]">
          {cells.map((cell, cellIndex) => (
            <span key={`${index}-${cellIndex}`} className={cellIndex === 0 ? "font-semibold text-white" : "text-muted-foreground"}>
              {cell}
            </span>
          ))}
        </div>
      );
    }

    return <p key={index} className="text-muted-foreground leading-relaxed">{trimmed}</p>;
  });
}

export const dynamicParams = false;

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

  const related = cs.relatedCaseStudies
    .map((s) => getCaseStudyBySlug(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const moreStudies =
    related.length > 0
      ? related.slice(0, 3)
      : caseStudies.filter((item) => item.slug !== cs.slug).slice(0, 3);

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
          webPageSchema({
            name: cs.metaTitle,
            description: cs.metaDescription,
            path: `/case-studies/${cs.slug}`,
            breadcrumbPath: `/case-studies/${cs.slug}`,
          }),
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-10 pb-10 sm:pt-14 lg:pt-16 lg:pb-12 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/12 blur-3xl"
        />

        <Container className="relative z-10">
          {/* Top Bar: Back Button + Breadcrumbs */}
          <Reveal className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur-md transition-colors hover:border-white/40 hover:bg-surface hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              <span>All Case Studies</span>
            </Link>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-3.5 opacity-50" />
              <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <ChevronRight className="size-3.5 opacity-50" />
              <span className="text-primary font-bold uppercase tracking-wider">{cs.category.replace("-", " ")}</span>
            </nav>
          </Reveal>

          <div className="mx-auto max-w-4xl text-center">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>{cs.client} · {cs.industry}</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.08]">
                {cs.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                {cs.summary}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Cover Image */}
      <section className="pb-12 sm:pb-16">
        <Container>
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/40 shadow-2xl backdrop-blur-sm">
            <Image
              src={cs.coverImage}
              alt={cs.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 inline-flex items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-2 border border-white/15 text-[11px] sm:text-xs font-semibold text-white">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>Verified Client Case Study</span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Metadata Bar */}
      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              { label: "Client Partner", value: cs.client },
              { label: "Industry Sector", value: cs.industry },
              { label: "Execution Timeline", value: cs.timeline },
              { label: "Primary Discipline", value: cs.tools[0] ?? "SEO Systems" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-surface/60 p-4 sm:p-5 shadow-soft backdrop-blur-md"
              >
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  {item.label}
                </div>
                <div className="mt-1.5 text-sm sm:text-base font-display font-bold text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Metrics */}
      {cs.metrics.length > 0 && (
        <section className="border-y border-border/80 bg-surface/40 py-12 sm:py-16">
          <Container>
            <Reveal className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Measured Outcomes</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Before &amp; After Impact
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {cs.metrics.map((m, i) => (
                <Reveal
                  key={m.label}
                  delay={i * 0.06}
                  className="rounded-2xl border border-white/10 bg-card/80 p-5 sm:p-6 shadow-soft backdrop-blur-md"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                  <div className="mt-2 font-display text-xl sm:text-2xl font-black text-emerald-400">
                    {m.change}
                  </div>
                  <div className="mt-2 inline-flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="line-through opacity-70">{m.before}</span>
                    <span className="text-primary">→</span>
                    <span className="font-semibold text-white">{m.after}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Rich Full Content */}
      {cs.fullContent && (
        <section className="py-12 sm:py-16">
          <Container className="max-w-4xl">
            <article className="case-study-rich-content rounded-3xl border border-white/10 bg-surface/50 p-6 text-sm leading-7 backdrop-blur-md shadow-xl sm:p-9 lg:p-12">
              {renderCaseStudyContent(cs.fullContent)}
            </article>
          </Container>
        </section>
      )}

      {/* Performance Snapshots (fixed object-contain + paired captions) */}
      {cs.screenshots.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container>
            <Reveal className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Visual Proof</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Performance Snapshots
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                First-party reporting and campaign evidence from the engagement.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {cs.screenshots.map((screenshot, index) => (
                <Reveal key={screenshot} delay={index * 0.05}>
                  <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e13] shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={screenshot}
                        alt={cs.screenshotCaptions?.[index] ?? `${cs.title} performance snapshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-3"
                      />
                    </div>
                    {cs.screenshotCaptions?.[index] && (
                      <figcaption className="border-t border-white/10 bg-surface/60 px-5 py-3.5 text-xs sm:text-sm text-muted-foreground">
                        {cs.screenshotCaptions[index]}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Client Snapshot */}
      {cs.snapshot && (
        <section className="py-12 sm:py-16">
          <Container className="max-w-4xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Client Snapshot
              </h2>
              <dl className="mt-6 divide-y divide-border/80 overflow-hidden rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-md">
                {cs.snapshot.map((item) => (
                  <div key={item.label} className="grid gap-1.5 px-5 py-4 sm:px-6 md:grid-cols-[13rem_1fr]">
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary md:pt-0.5">{item.label}</dt>
                    <dd className="text-sm sm:text-base text-foreground/90">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Local Site Architecture Silos */}
      {cs.silos && (
        <section className="border-y border-border/80 bg-surface/40 py-12 sm:py-16">
          <Container className="max-w-5xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Local Site Architecture
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base text-muted-foreground">
                Organized as a hub-and-spoke structure where each child page matched specific service intent and passed topical relevance back through deliberate internal links.
              </p>
            </Reveal>
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-card/80 backdrop-blur-md">
              <div className="hidden grid-cols-[1fr_1.15fr_1.8fr] gap-4 bg-surface px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-primary md:grid">
                <span>Silo</span>
                <span>Hierarchy</span>
                <span>Service pages</span>
              </div>
              {cs.silos.map((silo) => (
                <div
                  key={silo.name}
                  className="grid gap-2 border-t border-border/80 px-5 py-4 md:grid-cols-[1fr_1.15fr_1.8fr] md:gap-4"
                >
                  <strong className="text-sm font-bold text-white">{silo.name}</strong>
                  <span className="text-sm text-muted-foreground">{silo.hierarchy}</span>
                  <span className="text-sm text-muted-foreground">{silo.pages}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Search Console Results Table */}
      {cs.performanceRows && (
        <section className="py-12 sm:py-16">
          <Container className="max-w-5xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Search Console Results
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                The phased rollout produced a compounding visibility curve across monitoring snapshots.
              </p>
            </Reveal>
            <div className="mt-7 overflow-x-auto rounded-2xl border border-white/10 bg-card/80 backdrop-blur-md">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-surface text-xs font-bold uppercase tracking-wider text-primary">
                  <tr>
                    <th className="px-4 py-3.5">Snapshot</th>
                    <th className="px-4 py-3.5">Date range</th>
                    <th className="px-4 py-3.5">Clicks</th>
                    <th className="px-4 py-3.5">Impressions</th>
                    <th className="px-4 py-3.5">CTR</th>
                    <th className="px-4 py-3.5">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.performanceRows.map((row) => (
                    <tr key={`${row.date}-${row.range}`} className="border-t border-border/80">
                      <td className="px-4 py-3.5 font-semibold text-white">{row.date}</td>
                      <td className="px-4 py-3.5 text-muted-foreground">{row.range}</td>
                      <td className="px-4 py-3.5 font-medium text-white">{row.clicks}</td>
                      <td className="px-4 py-3.5 text-muted-foreground">{row.impressions}</td>
                      <td className="px-4 py-3.5 text-muted-foreground">{row.ctr}</td>
                      <td className="px-4 py-3.5 font-semibold text-emerald-400">{row.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {cs.resultReadout && (
              <div className="mt-6 space-y-3 text-sm sm:text-base text-muted-foreground">
                {cs.resultReadout.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Additional Measurement */}
      {cs.additionalResults && (
        <section className="border-y border-border/80 bg-surface/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Additional Measurement
              </h2>
              <ul className="mt-6 space-y-3">
                {cs.additionalResults.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Keyword-level Rankings */}
      {cs.rankingGroups && (
        <section className="py-12 sm:py-16">
          <Container className="max-w-5xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Keyword-Level Rankings
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Independently tracked Google positions showing how service pages and supporting content performed across the campaign.
              </p>
            </Reveal>
            <div className="mt-8 space-y-8">
              {cs.rankingGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">{group.title}</h3>
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-card/80 backdrop-blur-md">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <thead className="bg-surface text-xs font-bold uppercase tracking-wider text-primary">
                        <tr>
                          <th className="px-4 py-3.5">Target</th>
                          <th className="px-4 py-3.5">URL</th>
                          <th className="px-4 py-3.5">Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row) => (
                          <tr key={row.target} className="border-t border-border/80">
                            <td className="px-4 py-3.5 font-semibold text-white">{row.target}</td>
                            <td className="px-4 py-3.5 text-muted-foreground">{row.url ?? "Blog target"}</td>
                            <td className="px-4 py-3.5 font-bold text-emerald-400">{row.position}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {group.note && <p className="mt-3 text-xs sm:text-sm text-muted-foreground">{group.note}</p>}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Execution Timeline */}
      {cs.timelineSteps && (
        <section className="border-y border-border/80 bg-surface/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Execution Timeline
              </h2>
              <ol className="mt-6 space-y-3">
                {cs.timelineSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card/80 p-4 sm:p-5"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Scope Pages */}
      {cs.scopePages && (
        <section className="py-12 sm:py-16">
          <Container className="max-w-5xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Scope of Work: {cs.scopePages.length} Pages Published
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Every page targeted a dedicated local search intent across the topical silos.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cs.scopePages.map((page, index) => (
                  <div
                    key={page}
                    className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground"
                  >
                    <span className="mr-2 font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {page}
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Why It Worked */}
      {cs.whyItWorked && (
        <section className="border-y border-border/80 bg-surface/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Why It Worked
              </h2>
              <ul className="mt-6 space-y-3">
                {cs.whyItWorked.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Structured Breakdown (Problem/Research/Planning/Strategy/Execution) */}
      {!cs.fullContent && (
        <section className="py-12 sm:py-16 lg:py-20">
          <Container className="max-w-4xl space-y-5">
            {sections.map((s, i) => (
              <Reveal key={s.key} delay={i * 0.05}>
                <article className="rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/50 p-6 sm:p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 font-mono text-xs font-bold text-primary">
                      0{i + 1}
                    </span>
                    <h2 className="text-lg sm:text-2xl font-display font-bold text-white">
                      {cs.sectionLabels?.[s.key] ?? s.label}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                    {cs[s.key] as string}
                  </p>
                </article>
              </Reveal>
            ))}
          </Container>
        </section>
      )}

      {/* Tools Used */}
      {cs.tools.length > 0 && (
        <section className="border-t border-border/80 bg-surface/40 py-12 sm:py-14">
          <Container className="max-w-4xl">
            <Reveal>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                <Wrench className="size-3.5" />
                <span>Tools &amp; Platforms Used</span>
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-card/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Lessons Learned */}
      {cs.lessonsLearned.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container className="max-w-4xl">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                Key Takeaways
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {cs.lessonsLearned.map((lesson) => (
                  <li
                    key={lesson}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card/80 p-4 sm:p-5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Client Testimonial */}
      {cs.testimonial && (
        <section className="border-t border-border/80 bg-surface/40 py-14 sm:py-16">
          <Container className="max-w-3xl text-center">
            <Reveal className="rounded-3xl border border-white/10 bg-card/80 p-7 sm:p-10 backdrop-blur-md shadow-xl">
              <Quote className="mx-auto size-8 text-primary/40" />
              <blockquote className="mt-4 text-base sm:text-xl font-medium leading-relaxed text-white">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-5 text-xs sm:text-sm font-semibold text-muted-foreground">
                <span className="text-white">{cs.testimonial.author}</span> · {cs.testimonial.role}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* More Case Studies */}
      {moreStudies.length > 0 && (
        <section className="border-t border-border/80 py-14 sm:py-20">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Continue Reading</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-display font-black text-white uppercase">
                  More Case Studies
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-white/40 hover:text-white"
              >
                <span>View All Studies</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {moreStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-surface"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                    <Image
                      src={study.coverImage}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {study.client} · {study.industry}
                    </p>
                    <h3 className="mt-1.5 text-lg font-display font-bold text-white line-clamp-1">
                      {study.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {study.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}
