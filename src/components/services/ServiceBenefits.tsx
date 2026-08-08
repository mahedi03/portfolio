import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";

export function ServiceBenefits({ service }: { service: Service }) {
  return (
    <section className="border-t border-border bg-surface py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center"><h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">Benefits</h2></Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {service.benefits.map((benefit, index) => { const Icon = getLucideIcon(benefit.icon); return <Reveal key={benefit.title} delay={index * 0.06}><div className="rounded-lg border border-border bg-card p-6 shadow-soft"><Icon className="size-6 text-primary" /><h3 className="mt-3 font-semibold">{benefit.title}</h3><p className="mt-1.5 text-sm text-muted-foreground">{benefit.description}</p></div></Reveal>; })}
        </div>
      </Container>
    </section>
  );
}
