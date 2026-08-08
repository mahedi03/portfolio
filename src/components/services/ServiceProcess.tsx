import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceProcess({ service }: { service: Service }) {
  return <section className="border-t border-border bg-surface py-20"><Container><Reveal className="mx-auto max-w-2xl text-center"><h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">Our {service.shortTitle} process</h2></Reveal><div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">{service.process.map((step, index) => <Reveal key={step.step} delay={index * 0.08}><div className="rounded-lg border border-border bg-card p-6"><div className="font-display text-2xl font-bold text-primary">{String(step.step).padStart(2, "0")}</div><h3 className="mt-3 font-semibold">{step.title}</h3><p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p></div></Reveal>)}</div></Container></section>;
}
