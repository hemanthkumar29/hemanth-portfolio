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
      title="Systems, AI/ML, and platforms"
      description="Selected builds across cloud, automation, AI/ML, and backend foundations."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title}>
            <Card className="flex h-full flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{project.description}</p>
                </div>
                <div className="flex gap-2 text-slate-500">
                  {project.github ? (
                    <Link href={project.github} target="_blank" className="transition-colors hover:text-foreground">
                      <Github className="h-4 w-4" />
                    </Link>
                  ) : null}
                  {project.demo ? (
                    <Link href={project.demo} target="_blank" className="transition-colors hover:text-foreground">
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
                <p className="text-sm text-slate-500">{project.impact}</p>
              ) : null}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
