"use client";

import { certifications } from "@/data/portfolio";
import { Section } from "./section";
import { Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="certifications" eyebrow="Certifications" title="Proof of learning">
      <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert}
            className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-accent/20 hover:shadow-glow gradient-border"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 transition-all duration-200 group-hover:border-accent/30 group-hover:bg-accent/10 shrink-0">
              <Award className="h-4 w-4 text-zinc-500 group-hover:text-accent transition-colors" />
            </div>
            <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors leading-snug">
              {cert}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
