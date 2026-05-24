"use client";

import { useState } from "react";
import { Section } from "./section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (formData: FormData) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      setTimeout(() => setState("idle"), 3000);
    } catch {
      setState("idle");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Reach out for collaboration, internships, or project ideas. I respond quickly."
    >
      <form
        action={handleSubmit}
        className="relative grid gap-4 rounded-xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-glow md:grid-cols-2"
      >
        <div className="space-y-4">
          <Input name="name" placeholder="Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="subject" placeholder="Subject" />
        </div>
        <div className="flex flex-col gap-4">
          <Textarea name="message" rows={5} placeholder="Tell me about your idea" required />
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={state === "loading"}>
              {state === "loading" ? "Sending..." : "Send message"}
            </Button>
            {state === "success" ? (
              <div className="flex items-center gap-2 text-stone-600">
                <CheckCircle className="h-5 w-5 text-accent" /> Sent!
              </div>
            ) : null}
          </div>
          <p className="text-sm text-stone-400">
            Direct line: {personal.contact.email}
          </p>
        </div>
      </form>
    </Section>
  );
}
