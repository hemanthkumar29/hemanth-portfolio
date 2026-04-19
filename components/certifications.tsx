import { certifications } from "@/data/portfolio";
import { Section } from "./section";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Proof of learning">
      <div className="flex flex-wrap gap-3">
        {certifications.map((cert) => (
          <Badge key={cert}>{cert}</Badge>
        ))}
      </div>
    </Section>
  );
}
