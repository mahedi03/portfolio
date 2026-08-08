import Link from "next/link";
import type { Service } from "@/types";
import { getRelatedServices } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function RelatedServices({ service }: { service: Service }) {
  const related = getRelatedServices(service);
  if (!related.length) return null;
  return <section className="py-20"><Container><Reveal className="text-center"><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Related {service.shortTitle} services</h2></Reveal><div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">{related.map((item, index) => <Reveal key={item.slug} delay={index * 0.06}><Link href={`/services/${item.slug}`} className="block rounded-lg border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"><div className="font-semibold">{item.shortTitle}</div><div className="mt-1 text-sm text-muted-foreground">{item.tagline}</div></Link></Reveal>)}</div></Container></section>;
}
