import { skills } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My tech stack">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-white p-5 shadow-soft transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5 hover:border-teal-200"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{group.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
