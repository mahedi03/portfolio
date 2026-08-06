import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground lg:py-20">
          <h2 className="mx-auto max-w-2xl text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            Ready to grow your business online?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-primary-foreground/80">
            Let&apos;s talk about your goals and figure out the fastest path
            to real, measurable growth.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/contact">
              Get in Touch <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
