import { certifications } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Proof of learning">
      <div className="flex flex-wrap gap-3">
        {certifications.map((cert) => (
          <Badge key={cert} className="transition-colors hover:bg-teal-100 hover:text-teal-800 hover:border-teal-200">{cert}</Badge>
        ))}
      </div>
    </Section>
  );
}
