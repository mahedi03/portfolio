import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();
  if (projects.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
              Selected work
            </h2>
            <p className="mt-3 max-w-lg text-lg leading-8 text-muted-foreground">
              A look at recent projects across development, SEO, and paid
              advertising.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-base font-medium text-primary"
          >
            View all projects <ArrowUpRight className="size-3.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-container transition-transform duration-500 group-hover:scale-105"
                  />
                  <Link href={`/portfolio/${project.slug}`} className="absolute inset-0 z-10 flex items-center justify-center bg-primary/75 text-sm font-semibold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View project <ArrowUpRight className="ml-1 size-4" />
                  </Link>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium uppercase tracking-wide text-primary">
                    {project.category.replace("-", " ")}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold"><Link href={`/portfolio/${project.slug}`} className="hover:text-primary">{project.title}</Link></h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    {project.summary}
                  </p>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      Visit live website <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
