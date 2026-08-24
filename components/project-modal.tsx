"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, AlertTriangle, Lightbulb, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";
import { useEffect } from "react";
import Link from "next/link";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay flex items-start justify-center p-4 pt-[5vh] sm:pt-[10vh] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl rounded-2xl border border-[rgba(var(--border),0.1)] bg-[rgb(var(--bg-secondary))] p-6 sm:p-8 shadow-2xl mb-10"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-[rgba(var(--border),0.06)]"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-10">
              <div className={`inline-block rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-xs font-medium text-white mb-3`}>
                {project.category === "ai-ml" ? "AI / ML" : project.category === "full-stack" ? "Full-Stack" : "Mobile"}
              </div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="accent">{tech}</Badge>
              ))}
            </div>

            {/* Content sections */}
            <div className="space-y-6">
              {/* Problem */}
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Problem</h4>
                </div>
                <p className="text-muted leading-relaxed text-sm">{project.problem}</p>
              </div>

              {/* Solution */}
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-4 w-4 text-emerald-500" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Solution</h4>
                </div>
                <p className="text-muted leading-relaxed text-sm">{project.solution}</p>
              </div>

              {/* Architecture */}
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-4 w-4 text-accent" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Architecture</h4>
                </div>
                <p className="text-muted leading-relaxed text-sm">{project.architecture}</p>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                  Challenges Overcome
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/60 shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Work */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                  Future Improvements
                </h4>
                <ul className="space-y-2">
                  {project.futureWork.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-secondary/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-[rgba(var(--border),var(--border-opacity))]">
              {project.github && (
                <Button asChild variant="outline" size="md">
                  <Link href={project.github} target="_blank" className="gap-2">
                    <Github className="h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button asChild size="md">
                  <Link href={project.demo} target="_blank" className="gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
