import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl space-y-3"
        >
          {eyebrow ? (
            <p className="text-sm uppercase tracking-[0.25em] text-foreground/60">{eyebrow}</p>
          ) : null}
          <h2 className="text-2xl sm:text-3xl font-bold text-gradient">{title}</h2>
          {description ? (
            <p className="text-lg text-foreground/75 leading-relaxed">{description}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
