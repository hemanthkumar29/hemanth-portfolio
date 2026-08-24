"use client";

import { dsaStats } from "@/data/portfolio";
import { Section } from "./section";
import { AnimatedCounter } from "./animated-counter";
import { Code2, Github, ExternalLink, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function DSAJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="dsa"
      eyebrow="DSA & Problem Solving"
      title="Coding journey & consistency"
      description="Building strong fundamentals through consistent practice — essential for placements and technical interviews."
    >
      <div ref={ref} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          {/* Progress bars */}
          <motion.div
            className="card p-6 gradient-border"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Category Progress
              </h3>
            </div>
            <div className="space-y-5">
              {dsaStats.categoriesMastered.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-foreground/80">{cat.name}</span>
                    <span className="text-xs text-muted-foreground">{cat.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[rgba(var(--border),0.1)] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${cat.progress}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & links sidebar */}
          <div className="space-y-4">
            {/* Problems solved counter */}
            <motion.div
              className="card p-6 text-center gradient-border"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 p-4 mb-3 mx-auto w-fit">
                <Code2 className="h-8 w-8 text-accent" />
              </div>
              <p className="text-4xl font-bold gradient-text">
                <AnimatedCounter value={dsaStats.problemsSolved} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Problems Solved</p>
            </motion.div>

            {/* Profile links */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href={dsaStats.profiles.leetcode}
                target="_blank"
                className="card p-4 flex items-center gap-3 group"
              >
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2">
                  <ExternalLink className="h-4 w-4 text-amber-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">LeetCode Profile</p>
                  <p className="text-xs text-muted-foreground">Practice & competitions</p>
                </div>
              </Link>

              <Link
                href={dsaStats.profiles.github}
                target="_blank"
                className="card p-4 flex items-center gap-3 group"
              >
                <div className="rounded-lg bg-[rgba(var(--border),0.06)] border border-[rgba(var(--border),var(--border-opacity))] p-2">
                  <Github className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">GitHub Profile</p>
                  <p className="text-xs text-muted-foreground">Code & contributions</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Consistency message */}
        <motion.div
          className="card p-4 border-l-2 border-l-emerald-500/50"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-medium text-foreground">Consistency is key.</span> I practice DSA daily, focusing on
            pattern recognition and optimal solutions. Each problem strengthens my problem-solving ability for technical
            interviews and real-world engineering challenges.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
