import { projects } from "@/data/portfolio";
import { Section } from "./section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Full-stack, DevOps & AI builds"
      description="Selected projects spanning MERN applications, DevOps automation, and AI-powered tools."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title}>
            <Card className="flex h-full flex-col gap-4 transition-all duration-200 hover:shadow-glow hover:border-teal-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-500">{project.description}</p>
                </div>
                <div className="flex gap-2 text-stone-400">
                  {project.github ? (
                    <Link href={project.github} target="_blank" className="transition-colors hover:text-accent">
                      <Github className="h-4 w-4" />
                    </Link>
                  ) : null}
                  {project.demo ? (
                    <Link href={project.demo} target="_blank" className="transition-colors hover:text-accent">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              {project.impact ? (
                <p className="text-sm text-stone-400">{project.impact}</p>
              ) : null}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
