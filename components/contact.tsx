"use client";

import { useState } from "react";
import { Section } from "./section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

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
      title="Let’s build something"
      description="Reach out for collaboration, internships, or feedback. I respond quickly."
    >
      <motion.form
        action={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35 }}
        className="relative grid gap-4 rounded-3xl border border-white/10 bg-card/90 p-6 shadow-soft md:grid-cols-2"
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
            <AnimatePresence>
              {state === "success" ? (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <CheckCircle className="h-5 w-5 text-accent" /> Sent!
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <p className="text-sm text-foreground/60">
            Direct line: hemanthkumarhk100@gmail.com. API is wired to /api/contact—configure your
            email provider (Resend/EmailJS) before deploying.
          </p>
        </div>
      </motion.form>
    </Section>
  );
}
