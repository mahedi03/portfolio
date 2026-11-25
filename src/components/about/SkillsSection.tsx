import { skills } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";

const categoryLabels: Record<string, string> = {
  development: "Development",
  seo: "SEO",
  ads: "Paid Advertising",
  tools: "Tools & Analytics",
  strategy: "Strategy",
};

export function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="border-y border-border/80 bg-surface/40 py-14 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tight text-white uppercase">
            /SKILLS &amp; STACK
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground">
            Core platforms, frameworks, and analytical tools used across client engagements.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, ci) => (
            <Reveal key={category} delay={ci * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-md shadow-soft transition-colors hover:border-white/25">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {categoryLabels[category] ?? category}
                </h3>
                <ul className="mt-5 space-y-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => {
                      const Icon = getLucideIcon(skill.icon);
                      return (
                        <li key={skill.name}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2.5 font-medium text-foreground">
                              <Icon className="size-4 text-primary" />
                              {skill.name}
                            </span>
                            <span className="font-mono text-xs text-muted-foreground">
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-indigo-400"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
