import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, projectSchema, webPageSchema } from "@/lib/schema";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

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
          webPageSchema({ name: project.metaTitle, description: project.metaDescription, path: `/portfolio/${project.slug}`, breadcrumbPath: `/portfolio/${project.slug}` }),
        ]}
      />

      <section className="pt-16 pb-10 lg:pt-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {project.category.replace("-", " ")} · {project.client}
            </p>
            <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-5 text-[length:var(--text-body-lg)] text-muted-foreground">
              {project.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted shadow-elevated">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-[length:var(--text-h3)] font-display font-bold">
                The challenge
              </h2>
              <p className="mt-3 text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-[length:var(--text-h3)] font-display font-bold">
                The solution
              </h2>
              <p className="mt-3 text-muted-foreground">{project.solution}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold">Project details</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Timeline</dt>
                  <dd className="font-medium">{project.timeline}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Technologies</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
                {project.results.length > 0 && (
                  <div>
                    <dt className="text-muted-foreground">Results</dt>
                    <dd className="mt-1 space-y-1">
                      {project.results.map((r) => (
                        <div key={r.label} className="flex justify-between text-sm">
                          <span>{r.label}</span>
                          <span className="font-medium">{r.value}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                )}
                {project.liveUrl && (
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary"
                    >
                      Visit live site →
                    </a>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <Reveal className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">
              Have a similar project in mind?
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
