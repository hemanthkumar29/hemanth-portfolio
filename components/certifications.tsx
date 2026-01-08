import { certifications } from "@/data/portfolio";
import { Section } from "./section";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Proof of learning">
      <div className="flex flex-wrap gap-3">
        {certifications.map((cert) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.25 }}
          >
            <Badge className="bg-white/10 text-white shadow-soft">{cert}</Badge>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
