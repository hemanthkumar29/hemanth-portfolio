"use client";

import { useState, useCallback } from "react";
import { projects, type Project } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink, Zap, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectModal } from "./project-modal";

const categories = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Full-Stack", value: "full-stack" },
  { label: "Mobile", value: "mobile" },
] as const;

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Engineering case studies"
      description="Selected projects spanning AI-powered applications, full-stack platforms, and mobile solutions — each built to solve real problems."
    >
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.value
                ? "bg-gradient-to-r from-accent to-accent-secondary text-white shadow-glow"
                : "border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] text-muted-foreground hover:text-foreground hover:border-accent/30"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            className={`group card p-6 gradient-border flex flex-col gap-5 cursor-pointer ${
              project.featured ? "md:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                      <Zap className="h-3 w-3" /> Featured
                    </span>
                  )}
                  <span className={`inline-flex rounded-full bg-gradient-to-r ${project.gradient} px-2.5 py-0.5 text-[10px] font-medium text-white`}>
                    {project.category === "ai-ml" ? "AI / ML" : project.category === "full-stack" ? "Full-Stack" : "Mobile"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground italic">{project.tagline}</p>
                <p className="mt-2 leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground hover:bg-accent/10"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                ) : null}
                {project.demo ? (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 text-muted-foreground transition-all duration-200 hover:border-accent-secondary/30 hover:text-foreground hover:bg-accent-secondary/10"
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

            {/* View case study link */}
            <div className="flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all duration-300">
              <span>View case study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project detail modal */}
      <ProjectModal project={selectedProject} onClose={handleClose} />
    </Section>
  );
}
