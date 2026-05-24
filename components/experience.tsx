"use client";

import { experiences } from "@/data/portfolio";
import { Section } from "./section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="experience"
      eyebrow="Experience & Activities"
      title="Building, shipping, and volunteering"
    >
      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent-secondary/20 to-transparent hidden md:block" />

        <div className="space-y-6 md:pl-14">
          {experiences.map((item, i) => (
            <motion.article
              key={item.title}
              className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-accent/20 hover:shadow-glow gradient-border"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[43px] top-7 hidden md:flex items-center justify-center">
                <div className={`h-4 w-4 rounded-full border-2 ${
                  i === 0
                    ? "border-accent bg-accent/30 shadow-glow"
                    : "border-white/20 bg-white/5"
                }`}>
                  {i === 0 && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-accent/20" />
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.12em] text-zinc-500 shrink-0">
                  {item.timeline}
                </span>
              </div>
              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/50 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
