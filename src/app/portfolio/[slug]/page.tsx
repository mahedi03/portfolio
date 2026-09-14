import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, projectSchema, webPageSchema } from "@/lib/schema";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CTA } from "@/components/home/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

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
      <section className="relative pt-12 pb-10 lg:pt-20 lg:pb-14 overflow-hidden">
        {/* Glow backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl"
        />

        <Container className="relative z-10 max-w-4xl text-center">
          {/* Breadcrumb pills */}
          <Reveal className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5 opacity-50" />
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <ChevronRight className="size-3.5 opacity-50" />
            <span className="text-primary font-bold uppercase tracking-wider">{project.category.replace("-", " ")}</span>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>{project.client} · Verified Deployment</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              {project.summary}
            </p>
          </Reveal>

          {/* Quick Stat Highlights */}
          {project.results.length > 0 && (
            <Reveal delay={0.2} className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {project.results.map((res) => (
                <div
                  key={res.label}
                  className="rounded-2xl border border-white/10 bg-surface/50 p-4 backdrop-blur-md text-center shadow-lg"
                >
                  <div className="font-display text-2xl sm:text-3xl font-black text-white">
                    {res.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground font-medium">
                    {res.label}
                  </div>
                </div>
              ))}
            </Reveal>
          )}
        </Container>
      </section>

      {/* Main Cover Mockup Showcase */}
      <section className="pb-16 lg:pb-20">
        <Container>
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-surface/40 shadow-2xl backdrop-blur-sm">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-30" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-4 py-2 border border-white/20 text-xs font-semibold text-white">
                <ShieldCheck className="size-4 text-emerald-400" />
                <span>Production Environment Case Architecture</span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-white/90 hover:scale-105 shadow-lg"
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
      <section className="pb-16 lg:pb-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* The Challenge */}
            <Reveal className="rounded-3xl border border-white/10 bg-surface/40 p-8 sm:p-10 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                  <span className="font-mono text-xs font-bold">01</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  The Commercial & Technical Challenge
                </h2>
              </div>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </Reveal>

            {/* The Solution */}
            <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-surface/40 p-8 sm:p-10 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="font-mono text-xs font-bold">02</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                  The Engineered Solution
                </h2>
              </div>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </Reveal>
          </div>

          {/* Sidebar Project Parameters */}
          <Reveal delay={0.15}>
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-surface/40 p-8 backdrop-blur-md shadow-xl">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                <span>Project Specifications</span>
              </h3>

              <dl className="mt-6 space-y-5 text-sm">
                <div className="border-b border-white/5 pb-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Client Partner</dt>
                  <dd className="mt-1 text-base font-bold text-white">{project.client}</dd>
                </div>

                <div className="border-b border-white/5 pb-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Execution Timeline</dt>
                  <dd className="mt-1 text-base font-bold text-white">{project.timeline}</dd>
                </div>

                <div className="border-b border-white/5 pb-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Technologies & Stacks</dt>
                  <dd className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-surface/70 px-3 py-1 text-xs font-medium text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>

                {project.liveUrl && (
                  <div className="pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-black transition-all hover:scale-[1.02] shadow-md"
                    >
                      <span>Launch Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Evidence Gallery */}
      {project.gallery.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <Container>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Visual Proof</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-white">
                  Project Evidence & Artifacts
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">
                {project.gallery.length} verified screenshot{project.gallery.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-white/30"
                >
                  <Image
                    src={image}
                    alt={`${project.title} project evidence ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-mono text-white border border-white/15 backdrop-blur-md">
                    Proof #{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Unified CTA everywhere */}
      <CTA />
    </>
  );
}
