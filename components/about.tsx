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
        className="grid gap-4 rounded-3xl border border-white/10 bg-card/70 p-6 text-foreground/80 shadow-soft md:grid-cols-2"
      >
        <div className="space-y-3">
          <p>
            I explore DevOps and cloud fundamentals to make shipping faster and safer. I enjoy
            designing systems that balance simplicity with resilience, and I document everything as I
            learn.
          </p>
          <p>
            Beyond code, I volunteer with NSS, lead teams for on-ground initiatives, and bring that
            collaboration mindset to hackathons and product builds.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Focus</p>
          <ul className="space-y-2 text-foreground/90">
            <li>Cloud basics → infra as code, observability, secure deployments</li>
            <li>Backend craft → clean APIs, queues, caching, testing</li>
            <li>Interfaces that feel intentional and fast</li>
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
