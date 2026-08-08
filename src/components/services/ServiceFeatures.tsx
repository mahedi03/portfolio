import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";

export function ServiceFeatures({ service }: { service: Service }) {
  return <section className="py-20"><Container><Reveal className="mx-auto max-w-2xl text-center"><h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">What&apos;s included in {service.shortTitle}</h2></Reveal><div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">{service.features.map((feature, index) => { const Icon = getLucideIcon(feature.icon); return <Reveal key={feature.title} delay={index * 0.06}><div className="flex gap-3"><Icon className="mt-0.5 size-5 shrink-0 text-primary" /><div><h3 className="font-semibold">{feature.title}</h3><p className="mt-1 text-sm text-muted-foreground">{feature.description}</p></div></div></Reveal>; })}</div></Container></section>;
}
