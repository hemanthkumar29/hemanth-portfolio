import { personal } from "@/data/portfolio";
import { Section } from "./section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Curiosity-led builder"
      description={personal.story}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="grid gap-4 rounded-3xl border border-white/10 bg-card/80 p-6 text-foreground/80 shadow-soft md:grid-cols-2"
      >
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
        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Focus</p>
          <ul className="space-y-2 text-foreground/90">
            <li>Quantum + ML experiments for smarter detection systems</li>
            <li>Backend craft → clean APIs, data pipelines, testing, and caching</li>
            <li>Interfaces that feel intentional, responsive, and bold</li>
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
