import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, projectSchema, webPageSchema } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CTA } from "@/components/home/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/portfolio/${project.slug}`,
    ogImage: project.coverImage,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = (
    project.relatedProjects
      .map((s) => getProjectBySlug(s))
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
  );
  const moreProjects =
    related.length > 0
      ? related.slice(0, 3)
      : portfolioProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path: `/portfolio/${project.slug}` },
          ]),
          projectSchema(project),
          webPageSchema({
            name: project.metaTitle,
            description: project.metaDescription,
            path: `/portfolio/${project.slug}`,
            breadcrumbPath: `/portfolio/${project.slug}`,
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
          {/* Top navigation bar: Back button + Breadcrumbs */}
          <Reveal className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur-md transition-colors hover:border-white/40 hover:bg-surface hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              <span>All Projects</span>
            </Link>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-3.5 opacity-50" />
              <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              <ChevronRight className="size-3.5 opacity-50" />
              <span className="text-primary font-bold uppercase tracking-wider">{project.category.replace("-", " ")}</span>
            </nav>
          </Reveal>

          <div className="mx-auto max-w-4xl text-center">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>{project.client} · Verified Deployment</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.08]">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                {project.summary}
              </p>
            </Reveal>

            {/* Quick Stat Highlights */}
            {project.results.length > 0 && (
              <Reveal delay={0.2} className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
                {project.results.map((res) => (
                  <div
                    key={res.label}
                    className="rounded-2xl border border-white/10 bg-surface/60 p-4 backdrop-blur-md text-center shadow-soft"
                  >
                    <div className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white">
                      {res.value}
                    </div>
                    <div className="mt-1 text-[11px] sm:text-xs text-muted-foreground font-medium">
                      {res.label}
                    </div>
                  </div>
                ))}
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {/* Main Cover Mockup Showcase */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <Container>
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/40 shadow-2xl backdrop-blur-sm">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-2 border border-white/15 text-[11px] sm:text-xs font-semibold text-white">
                <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
                <span>Production Environment Showcase</span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel={project.liveUrl.includes("framecipher.info") ? "noopener noreferrer" : "noopener noreferrer nofollow"}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-white/90 hover:scale-105 shadow-lg"
                >
                  <span>Explore Live Project</span>
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Challenge & Solution Architecture */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <Container className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* The Challenge */}
            <Reveal className="rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/50 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                  <span className="font-mono text-xs font-bold">01</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-display font-bold text-white">
                  The Commercial &amp; Technical Challenge
                </h2>
              </div>
              <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </Reveal>

            {/* The Solution */}
            <Reveal delay={0.1} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/50 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="font-mono text-xs font-bold">02</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-display font-bold text-white">
                  The Engineered Solution
                </h2>
              </div>
              <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </Reveal>
          </div>

          {/* Sidebar Project Specifications */}
          <Reveal delay={0.15}>
            <div className="lg:sticky lg:top-24 rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/50 p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <h3 className="text-base sm:text-lg font-display font-bold text-white flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                <span>Project Specifications</span>
              </h3>

              <dl className="mt-6 space-y-5 text-sm">
                <div className="border-b border-white/10 pb-4">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Client Partner</dt>
                  <dd className="mt-1 text-base font-bold text-white">{project.client}</dd>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Execution Timeline</dt>
                  <dd className="mt-1 text-base font-bold text-white">{project.timeline}</dd>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Technologies &amp; Stack</dt>
                  <dd className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-background/70 px-3 py-1 text-xs font-medium text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>

                <div className="pt-1 flex flex-col gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel={project.liveUrl.includes("framecipher.info") ? "noopener noreferrer" : "noopener noreferrer nofollow"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-black transition-all hover:scale-[1.02] shadow-md"
                    >
                      <span>Launch Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-xs font-semibold text-foreground transition-colors hover:border-white/40 hover:text-white"
                  >
                    <span>Build Something Similar</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Evidence Gallery */}
      {project.gallery.length > 0 && (
        <section className="pb-14 sm:pb-16 lg:pb-20">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-6 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Visual Proof</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-display font-black text-white uppercase">
                  Project Evidence &amp; Artifacts
                </h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {project.gallery.length} verified screenshot{project.gallery.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e13] shadow-xl transition-all duration-300 hover:border-white/30"
                >
                  <Image
                    src={image}
                    alt={`${project.title} project evidence ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-mono text-white border border-white/15 backdrop-blur-md">
                    Proof #{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related / More Projects */}
      {moreProjects.length > 0 && (
        <section className="border-t border-border/80 bg-surface/40 py-14 sm:py-20">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Keep Exploring</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-display font-black text-white uppercase">
                  More Selected Work
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-white/40 hover:text-white"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {moreProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-surface"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {item.client}
                    </p>
                    <h3 className="mt-1.5 text-lg font-display font-bold text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {item.summary}
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
