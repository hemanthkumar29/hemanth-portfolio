import { personal } from "@/data/portfolio";
import { Section } from "./section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Full-stack builder, DevOps thinker"
      description={personal.story}
    >
      <div className="grid gap-4 rounded-xl border border-border bg-white p-6 text-stone-600 shadow-soft transition-all duration-300 hover:shadow-glow md:grid-cols-2">
        <div className="space-y-3">
          <p>
            I specialize in the MERN stack — building everything from RESTful APIs and database
            architectures to responsive React interfaces. I pair this with DevOps practices like
            Docker, CI/CD pipelines, and cloud deployments to ship reliably.
          </p>
          <p>
            Beyond web development, I&apos;m deeply curious about AI/ML and Generative AI — experimenting
            with LLMs, RAG architectures, and computer vision to build smarter applications.
          </p>
        </div>
        <div className="space-y-3 rounded-lg border border-teal-100 bg-teal-50/50 p-4">
          <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Focus</p>
          <ul className="space-y-2 text-foreground">
            <li>MERN stack apps → MongoDB, Express, React, Node.js, Next.js</li>
            <li>DevOps craft → Docker, CI/CD, GitHub Actions, cloud infra</li>
            <li>AI/ML exploration → LLMs, GenAI, computer vision, NLP</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
