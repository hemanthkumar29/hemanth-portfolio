import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-14 sm:py-16" aria-labelledby={`${id}-title`}>
      <div className="container space-y-8">
        <header className="max-w-3xl space-y-3">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent" aria-hidden="true">
              {eyebrow}
            </span>
          ) : null}
          <h2 id={`${id}-title`} className="text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-relaxed text-stone-500 sm:text-lg">{description}</p>
          ) : null}
        </header>
        <div role="region" aria-label={title}>
          {children}
        </div>
      </div>
    </section>
  );
}
