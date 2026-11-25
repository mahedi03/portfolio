import Link from "next/link";
import type { Service } from "@/types";
import { getServiceContent } from "@/data/serviceContent";
import { getRelatedServices } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceLongForm({ service }: { service: Service }) {
  const sections = getServiceContent(service);
  const contextualServices = getRelatedServices(service).slice(0, 2);
  if (!sections.length) return null;

  return (
    <section className="border-y border-border/80 bg-surface/35 py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <Reveal className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Strategy Deep Dive
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
              /HOW THIS FITS YOUR GROWTH ENGINE
            </h2>
          </div>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            Every discipline performs stronger when connected to the wider system. Explore the{" "}
            <Link
              href="/services"
              className="font-semibold text-white underline decoration-primary/60 underline-offset-4 hover:text-primary"
            >
              services hub
            </Link>{" "}
            or pair this with{" "}
            {contextualServices.map((related, index) => (
              <span key={related.slug}>
                {index > 0 ? " and " : ""}
                <Link
                  href={`/services/${related.slug}`}
                  className="font-semibold text-white underline decoration-primary/60 underline-offset-4 hover:text-primary"
                >
                  {related.shortTitle}
                </Link>
              </span>
            ))}
            .
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 0.05, 0.2)}>
              <article className="h-full rounded-2xl border border-white/10 bg-card/80 p-6 sm:p-7 backdrop-blur-md shadow-soft">
                <span className="font-mono text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg sm:text-xl font-display font-bold leading-snug text-white">
                  {section.heading}
                </h3>
                <div className="mt-3.5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
