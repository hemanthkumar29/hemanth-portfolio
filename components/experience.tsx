import { experiences } from "@/data/portfolio";
import { Section } from "./section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Activities"
      title="Leading, volunteering, and building"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-border bg-white p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <span className="text-xs uppercase tracking-[0.12em] text-slate-500">{item.timeline}</span>
            </div>
            <ul className="mt-3 space-y-2 text-slate-600">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
