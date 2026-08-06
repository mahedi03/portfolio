import { Star } from "lucide-react";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function Testimonials() {
  const testimonials = getFeaturedTestimonials();
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            Sample client feedback
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Demonstration testimonials for layout preview. Replace with verified client feedback before publishing.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-soft">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-7 text-card-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-base">
                  <div className="font-semibold">{t.name}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
