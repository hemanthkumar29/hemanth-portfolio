"use client";

import { certifications, type Certification } from "@/data/portfolio";
import { Section } from "./section";
import { Award, Brain, BarChart3, Cloud, Sparkles, ExternalLink, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  "bar-chart": BarChart3,
  cloud: Cloud,
  sparkles: Sparkles,
};

const statusStyles: Record<Certification["status"], { label: string; className: string }> = {
  completed: {
    label: "Completed",
    className: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },
  "in-progress": {
    label: "In Progress",
    className: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },
  planned: {
    label: "Coming Soon",
    className: "border-violet-500/20 bg-violet-500/10 text-violet-400",
  },
};

export function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="certifications" eyebrow="Certifications" title="Proof of continuous learning">
      <div ref={ref} className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon] || Award;
          const status = statusStyles[cert.status];
          return (
            <motion.div
              key={cert.title}
              className="card p-5 gradient-border group flex flex-col gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2.5 transition-all duration-200 group-hover:border-accent/30 group-hover:bg-accent/10 shrink-0">
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 mt-auto">
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${status.className}`}>
                  {cert.status === "in-progress" && <Clock className="h-3 w-3" />}
                  {cert.status === "planned" && <Sparkles className="h-3 w-3" />}
                  {status.label}
                </span>
                {cert.verifyUrl && (
                  <Link
                    href={cert.verifyUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    Verify <ExternalLink className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
