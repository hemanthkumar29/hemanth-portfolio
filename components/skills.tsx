"use client";

import { skills } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Cloud,
  Brain,
  Sparkles,
  Code2,
  Database,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "MERN Stack": Layers,
  "DevOps & Cloud": Cloud,
  "AI & Machine Learning": Brain,
  "Generative AI": Sparkles,
  "Programming Languages": Code2,
  "Tools & Databases": Database,
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="skills" eyebrow="Skills" title="My tech stack">
      <div ref={ref} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = iconMap[group.title] || Code2;
          return (
            <motion.div
              key={group.title}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-accent/20 hover:shadow-glow gradient-border group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 transition-all duration-200 group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Icon className="h-4 w-4 text-zinc-500 group-hover:text-accent transition-colors duration-200" />
                </div>
                <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {group.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
