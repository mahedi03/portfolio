import Link from "next/link";
import type { Service } from "@/types";
import { getServiceContent } from "@/data/serviceContent";
import { getRelatedServices } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceLongForm({ service }: { service: Service }) {
  const sections = getServiceContent(service);
  const contextualServices = getRelatedServices(service).slice(0, 2);
  return (
    <section className="border-y border-border bg-surface/35 py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">01 / Service strategy</p>
            <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight">A clearer route from problem to progress.</h2>
          </div>
          <p className="max-w-2xl text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
            This service works as part of a wider growth system. Explore the <Link href="/services" className="font-semibold text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary">services hub</Link> or connect it with{" "}
            {contextualServices.map((related, index) => (
              <span key={related.slug}>
                {index > 0 ? " or " : ""}{" "}
                <Link href={`/services/${related.slug}`} className="font-semibold text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary">{related.shortTitle}</Link>
              </span>
            ))}.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 0.04, 0.2)}>
              <article className="grid gap-6 py-9 lg:grid-cols-[100px_0.8fr_1.2fr] lg:gap-10 lg:py-12">
                <p className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-2xl font-display font-bold leading-tight tracking-tight text-foreground">{section.heading}</h3>
                <div className="space-y-4 text-base leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
