"use client";

import { Section } from "./section";
import { FileText, Cloud, Server, Brain, Wrench, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const topics = [
  {
    title: "DSA Notes & Patterns",
    description: "Algorithm explanations, problem-solving patterns, and coding interview preparation notes",
    icon: FileText,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "AWS Deployment Guides",
    description: "Step-by-step cloud deployment guides, EC2 setup, and infrastructure-as-code walkthroughs",
    icon: Cloud,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Backend Architecture",
    description: "API design patterns, database optimization, authentication systems, and server architecture",
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Concept Breakdowns",
    description: "Machine learning concepts explained simply — from neural networks to computer vision pipelines",
    icon: Brain,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Engineering Insights",
    description: "Lessons learned from building projects, debugging war stories, and engineering best practices",
    icon: Wrench,
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function LearningLab() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="lab"
      eyebrow="Learning Lab"
      title="Knowledge sharing — coming soon"
      description="A space for documenting my learning journey — DSA patterns, deployment guides, and engineering insights."
    >
      <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, i) => (
          <motion.div
            key={topic.title}
            className="card p-5 gradient-border group relative overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {/* Coming soon badge */}
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent">
                <Sparkles className="h-2.5 w-2.5" /> Soon
              </span>
            </div>

            <div className={`rounded-lg bg-gradient-to-br ${topic.gradient} p-2 shadow-lg w-fit mb-4 opacity-60 group-hover:opacity-100 transition-opacity`}>
              <topic.icon className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-semibold text-foreground/70 group-hover:text-foreground/90 transition-colors mb-2">
              {topic.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {topic.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
