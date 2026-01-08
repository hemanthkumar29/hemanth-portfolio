import { projects } from "@/data/portfolio";
import { Section } from "./section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="flex h-full flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex gap-2 text-foreground/60">
                  {project.github ? (
                    <Link href={project.github} target="_blank" className="hover:text-white">
                      <Github className="h-4 w-4" />
                    </Link>
                  ) : null}
                  {project.demo ? (
                    <Link href={project.demo} target="_blank" className="hover:text-white">
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
                <p className="text-sm text-foreground/60">{project.impact}</p>
              ) : null}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
