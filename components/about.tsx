"use client";

import { personal } from "@/data/portfolio";
import { Section } from "./section";
import { Code2, Container, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const focusAreas = [
  {
    icon: Code2,
    label: "MERN stack apps",
    detail: "MongoDB, Express, React, Node.js, Next.js",
  },
  {
    icon: Container,
    label: "DevOps craft",
    detail: "Docker, CI/CD, GitHub Actions, cloud infra",
  },
  {
    icon: Brain,
    label: "AI/ML exploration",
    detail: "LLMs, GenAI, computer vision, NLP",
  },
];

const stats = [
  { value: "4+", label: "Projects" },
  { value: "5", label: "Certifications" },
  { value: "3+", label: "Hackathons" },
  { value: "2024", label: "Shipping Since" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section
      id="about"
      eyebrow="About"
      title="Full-stack builder, DevOps thinker"
      description={personal.story}
    >
      <div ref={ref} className="space-y-6">
        {/* Main content card */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm space-y-4 text-zinc-400 gradient-border"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p>
              I specialize in the MERN stack — building everything from RESTful APIs and database
              architectures to responsive React interfaces. I pair this with DevOps practices like
              Docker, CI/CD pipelines, and cloud deployments to ship reliably.
            </p>
            <p>
              Beyond web development, I&apos;m deeply curious about AI/ML and Generative AI — experimenting
              with LLMs, RAG architectures, and computer vision to build smarter applications.
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm space-y-4 gradient-border"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text">Focus</p>
            </div>
            <ul className="space-y-4">
              {focusAreas.map((area) => (
                <li key={area.label} className="flex items-start gap-3 group">
                  <div className="mt-0.5 rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 transition-all duration-200 group-hover:border-accent/30 group-hover:bg-accent/5">
                    <area.icon className="h-4 w-4 text-zinc-500 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-200">{area.label}</p>
                    <p className="text-sm text-zinc-500">{area.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:bg-white/[0.05]"
            >
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
