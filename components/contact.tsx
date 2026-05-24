"use client";

import { useState } from "react";
import { Section } from "./section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send, Mail, Github, Linkedin } from "lucide-react";
import { personal } from "@/data/portfolio";
import Link from "next/link";

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
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Form */}
        <form
          action={handleSubmit}
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm space-y-5 gradient-border"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="Name" required />
            <Input name="email" type="email" placeholder="Email" required />
          </div>
          <Input name="subject" placeholder="Subject" />
          <Textarea name="message" rows={5} placeholder="Tell me about your idea..." required />
          <div className="flex items-center gap-4">
            <Button type="submit" disabled={state === "loading"} className="gap-2">
              {state === "loading" ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </Button>
            {state === "success" && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle className="h-5 w-5" /> Message sent!
              </div>
            )}
          </div>
        </form>

        {/* Contact info sidebar */}
        <div className="space-y-4">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm gradient-border">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text mb-4">
              Direct contact
            </p>
            <div className="space-y-4">
              <Link
                href={`mailto:${personal.contact.email}`}
                className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white group"
              >
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                {personal.contact.email}
              </Link>
              <Link
                href={personal.contact.github}
                target="_blank"
                className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white group"
              >
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                  <Github className="h-4 w-4" />
                </div>
                GitHub
              </Link>
              <Link
                href={personal.contact.linkedin}
                target="_blank"
                className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white group"
              >
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                  <Linkedin className="h-4 w-4" />
                </div>
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm">
            <p className="text-sm text-zinc-400">
              Prefer email? Drop me a line at{" "}
              <Link href={`mailto:${personal.contact.email}`} className="text-accent hover:underline">
                {personal.contact.email}
              </Link>
              {" "}and I&apos;ll get back within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
