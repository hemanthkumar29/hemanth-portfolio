"use client";

import { personal, stats } from "@/data/portfolio";
import { Section } from "./section";
import { Code2, Server, Brain, Cloud, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "./animated-counter";

const focusAreas = [
  {
    icon: Code2,
    label: "Full-Stack Development",
    detail: "React, Next.js, Node.js, Express.js — building end-to-end applications",
  },
  {
    icon: Server,
    label: "Backend & APIs",
    detail: "RESTful architecture, authentication systems, database design",
  },
  {
    icon: Brain,
    label: "AI/ML Engineering",
    detail: "Computer vision, NLP, anomaly detection, intelligent applications",
  },
  {
    icon: Cloud,
    label: "Cloud & Deployment",
    detail: "AWS EC2, CI/CD workflows, GitHub, production deployments",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering mindset, software builder"
      description="From circuits to code — how engineering problem-solving led me to software development and AI."
    >
      <div ref={ref} className="space-y-8">
        {/* Story narrative */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="card p-6 space-y-4 text-muted gradient-border"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p>
              I started in Electrical & Electronics Engineering — learning circuits, systems, and
              how things work at a fundamental level. But somewhere between solving engineering
              problems and writing my first lines of code, I discovered a deeper passion: building
              software that solves real problems.
            </p>
            <p>
              That curiosity led me from hardware to full-stack development, from static pages to
              intelligent AI-powered applications, from local scripts to cloud-deployed systems.
              Today, I build practical projects that combine software engineering with artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            className="card p-6 gradient-border"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text">Focus Areas</p>
            </div>
            <ul className="space-y-4">
              {focusAreas.map((area) => (
                <li key={area.label} className="flex items-start gap-3 group">
                  <div className="mt-0.5 rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 transition-all duration-200 group-hover:border-accent/30 group-hover:bg-accent/5">
                    <area.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground/80">{area.label}</p>
                    <p className="text-sm text-muted-foreground">{area.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mindset callout */}
        <motion.div
          className="card p-5 border-l-2 border-l-accent/50 gradient-border"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <p className="text-muted leading-relaxed">
              <span className="font-medium text-foreground">I&apos;m not just learning to code</span> — I&apos;m learning
              to engineer solutions. Every project I build, every DSA problem I solve, and every system I design brings
              me closer to becoming the kind of developer who ships products that matter.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card p-4 text-center"
            >
              <p className="text-2xl font-bold gradient-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
