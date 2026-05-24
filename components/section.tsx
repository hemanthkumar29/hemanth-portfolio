"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 sm:py-24"
      aria-labelledby={`${id}-title`}
    >
      <div className="container space-y-10">
        <motion.header
          className="max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {eyebrow ? (
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text">
                {eyebrow}
              </span>
            </div>
          ) : null}
          <h2
            id={`${id}-title`}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.header>
        <motion.div
          role="region"
          aria-label={title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
