"use client";

import { currentlyLearning } from "@/data/portfolio";
import { Section } from "./section";
import { Code2, Server, Cloud, Layers, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  server: Server,
  cloud: Cloud,
  layers: Layers,
  brain: Brain,
};

const gradients = [
  "from-violet-500 to-purple-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-blue-500",
  "from-rose-500 to-pink-500",
];

export function CurrentlyLearning() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="learning"
      eyebrow="Currently Learning"
      title="Active growth & exploration"
      description="Always learning, always building. Here's what I'm currently focused on."
    >
      <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentlyLearning.map((item, i) => {
          const Icon = iconMap[item.icon] || Code2;
          const gradient = gradients[i % gradients.length];
          return (
            <motion.div
              key={item.title}
              className="card p-5 gradient-border group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`rounded-lg bg-gradient-to-br ${gradient} p-2 shadow-lg`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>
              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs text-muted-foreground">{item.progress}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[rgba(var(--border),0.1)] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.progress}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
