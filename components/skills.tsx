import { skills } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Stacks I am growing">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-white p-5 shadow-soft"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{group.title}</p>
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
