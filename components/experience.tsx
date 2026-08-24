"use client";

import { experiences } from "@/data/portfolio";
import { Section } from "./section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Zap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  zap: Zap,
};

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="experience"
      eyebrow="Experience & Leadership"
      title="Beyond code — service & impact"
      description="Volunteering, leadership, and community engagement that shapes my perspective as an engineer."
    >
      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent-secondary/20 to-transparent hidden md:block" />

        <div className="space-y-6 md:pl-14">
          {experiences.map((item, i) => {
            const Icon = iconMap[item.icon] || Heart;
            return (
              <motion.article
                key={item.title}
                className="relative card p-6 gradient-border"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[43px] top-7 hidden md:flex items-center justify-center">
                  <div className={`h-10 w-10 rounded-full border-2 flex items-center justify-center ${
                    i === 0
                      ? "border-accent bg-accent/20 shadow-glow"
                      : "border-[rgba(var(--border),0.2)] bg-[rgba(var(--card-bg),0.05)]"
                  }`}>
                    <Icon className={`h-4 w-4 ${i === 0 ? "text-accent" : "text-muted-foreground"}`} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.organization}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] px-3 py-1 text-xs uppercase tracking-[0.12em] text-muted-foreground shrink-0">
                    {item.timeline}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted leading-relaxed text-sm">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/50 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
