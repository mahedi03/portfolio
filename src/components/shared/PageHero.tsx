import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-16 pb-8 lg:pt-24 lg:pb-12">
      <Container className="max-w-3xl text-center">
        <Reveal>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-[length:var(--text-body-lg)] text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
