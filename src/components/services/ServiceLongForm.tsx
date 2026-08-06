import type { Service } from "@/types";
import { getServiceContent } from "@/data/serviceContent";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceLongForm({ service }: { service: Service }) {
  const sections = getServiceContent(service);
  return (
    <section className="border-t border-border py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">A considered approach</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight">More than a checklist — a growth system built around your business</h2>
        </Reveal>
        <div className="mt-10 space-y-12">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 0.04, 0.2)}>
              <article>
                <h3 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">{section.heading}</h3>
                <div className="mt-4 space-y-4 text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
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
