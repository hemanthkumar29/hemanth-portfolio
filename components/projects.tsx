"use client";

import { projects } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Full-stack, DevOps & AI builds"
      description="Selected projects spanning MERN applications, DevOps automation, and AI-powered tools."
    >
      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className={`group rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-accent/20 hover:shadow-glow gradient-border flex flex-col gap-5 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {i === 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                      <Zap className="h-3 w-3" /> Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-500 transition-all duration-200 hover:border-accent/30 hover:text-white hover:bg-accent/10"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                ) : null}
                {project.demo ? (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-500 transition-all duration-200 hover:border-accent-secondary/30 hover:text-white hover:bg-accent-secondary/10"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {/* Impact */}
            {project.impact ? (
              <div className="flex items-start gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] px-4 py-3">
                <Zap className="h-3.5 w-3.5 mt-0.5 text-accent-secondary shrink-0" />
                <p className="text-sm text-zinc-500">{project.impact}</p>
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
