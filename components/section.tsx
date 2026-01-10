"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 sm:py-20"
      aria-labelledby={`${id}-title`}
    >
      <div className="container space-y-10">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          style={{ y: headingY }}
          className="max-w-3xl space-y-3"
        >
          {eyebrow ? (
            <span className="text-sm uppercase tracking-[0.25em] text-foreground/60" aria-hidden="true">
              {eyebrow}
            </span>
          ) : null}
          <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-bold text-gradient">
            {title}
          </h2>
          {description ? (
            <p className="text-lg text-foreground/75 leading-relaxed">{description}</p>
          ) : null}
        </motion.header>
        <motion.div style={{ y: contentY }} role="region" aria-label={title}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
