import { personal } from "@/data/portfolio";
import { Section } from "./section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Curiosity-led builder"
      description={personal.story}
    >
      <div className="grid gap-4 rounded-xl border border-border bg-white p-6 text-slate-700 shadow-soft md:grid-cols-2">
        <div className="space-y-3">
          <p>
            I blend electrical engineering with software, AI, and quantum ideas—shipping things to
            learn faster. I like systems that balance simplicity with rigor and leave behind notes so
            teams can move together.
          </p>
          <p>
            Beyond code, I volunteer with NSS, market energy-efficient builds on campus, and bring
            that collaborative mindset to hackathons.
          </p>
        </div>
        <div className="space-y-3 rounded-lg border border-border bg-slate-50 p-4">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Focus</p>
          <ul className="space-y-2 text-foreground">
            <li>Quantum + ML experiments for smarter detection systems</li>
            <li>Backend craft → clean APIs, data pipelines, testing, and caching</li>
            <li>Interfaces that feel intentional, responsive, and bold</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
