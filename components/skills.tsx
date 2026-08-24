"use client";

import { skills } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Brain,
  Smartphone,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend": Layout,
  "Backend": Server,
  "Database": Database,
  "Cloud & Deployment": Cloud,
  "AI / Machine Learning": Brain,
  "Mobile & Other": Smartphone,
};

const gradients: Record<string, string> = {
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-emerald-500 to-green-500",
  "Database": "from-orange-500 to-amber-500",
  "Cloud & Deployment": "from-violet-500 to-purple-500",
  "AI / Machine Learning": "from-rose-500 to-pink-500",
  "Mobile & Other": "from-cyan-500 to-teal-500",
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="Tools & technologies I work with"
      description="Organized by domain — from frontend interfaces to AI/ML pipelines."
    >
      <div ref={ref} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = iconMap[group.title] || Layout;
          const gradient = gradients[group.title] || "from-violet-500 to-cyan-500";
          return (
            <motion.div
              key={group.title}
              className="card p-5 gradient-border group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`rounded-lg bg-gradient-to-br ${gradient} p-2 shadow-lg`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
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
