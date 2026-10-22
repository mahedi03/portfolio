import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Briefcase } from "lucide-react";

interface IndustryItem {
  industry: string;
  line: string;
}

const industryDetails: IndustryItem[] = [
  { industry: "E-Commerce & DTC", line: "Store builds, dynamic catalog ads, mobile checkout CRO, and server-side CAPI." },
  { industry: "Real Estate & Developers", line: "High-intent lead generation ads, interactive landing pages, and local search visibility." },
  { industry: "Restaurants & Hospitality", line: "Local map pack rankings, social media reels, and mobile ordering integrations." },
  { industry: "Education & EdTech", line: "Student enrollment funnels, authority content writing, and webinar conversion flows." },
  { industry: "Healthcare & Clinics", line: "HIPAA/privacy-compliant appointment systems, trust-first web design, and local SEO." },
  { industry: "Fashion & Lifestyle", line: "Commercial-grade video production, Instagram Reels, and influencer acquisition synergy." },
  { industry: "SaaS & Startups", line: "Go-to-market positioning, developer-grade Next.js marketing sites, and product demos." },
  { industry: "B2B & Professional Services", line: "LinkedIn ads, technical SEO authority clusters, and qualified sales enquiry funnels." },
  { industry: "Local Businesses", line: "Google Business Profile optimization, review workflows, and neighbourhood geo-targeting." },
];

export function ServicesIndustries() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Briefcase className="size-3.5" />
            Industry Tailored Architecture
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Proven Systems Built for Your Market
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            While consumer behaviors differ by industry, the core operating principles remain constant: clear messaging, friction-free conversion paths, and rigorous analytics.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((item, index) => (
            <Reveal key={item.industry} delay={index * 0.04}>
              <article className="group h-full rounded-2xl border border-border/80 bg-card/60 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/90">
                <span className="font-mono text-2xl font-bold text-primary/70 group-hover:text-primary transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {item.industry}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
