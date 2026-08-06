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
    <section className="border-t border-border bg-surface py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            Skills &amp; tools
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, ci) => (
            <Reveal key={category} delay={ci * 0.06}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {categoryLabels[category] ?? category}
              </h3>
              <ul className="mt-4 space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => {
                    const Icon = getLucideIcon(skill.icon);
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 font-medium">
                            <Icon className="size-4 text-primary" />
                            {skill.name}
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
