import { skills } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Stacks I am growing">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-card/70 p-5 shadow-soft"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">{group.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
