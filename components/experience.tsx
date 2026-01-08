import { experiences } from "@/data/portfolio";
import { Section } from "./section";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Activities"
      title="Leading, volunteering, and building"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-card/70 p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">{item.timeline}</span>
            </div>
            <ul className="mt-3 space-y-2 text-foreground/80">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
