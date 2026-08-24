"use client";

import { useState } from "react";
import { Section } from "./section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send, Mail, Github, Linkedin, Download, Clock } from "lucide-react";
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
      description="Reach out for collaboration, internships, project ideas, or just to say hi. I respond quickly."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Form */}
        <form
          action={handleSubmit}
          className="card p-6 space-y-5 gradient-border"
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
          <div className="card p-5 gradient-border">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text mb-4">
              Direct contact
            </p>
            <div className="space-y-3">
              <Link
                href={`mailto:${personal.contact.email}`}
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground group"
              >
                <div className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                {personal.contact.email}
              </Link>
              <Link
                href={personal.contact.github}
                target="_blank"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground group"
              >
                <div className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                  <Github className="h-4 w-4" />
                </div>
                GitHub
              </Link>
              <Link
                href={personal.contact.linkedin}
                target="_blank"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground group"
              >
                <div className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                  <Linkedin className="h-4 w-4" />
                </div>
                LinkedIn
              </Link>
              <a
                href="/api/resume"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground group"
              >
                <div className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                  <Download className="h-4 w-4" />
                </div>
                Download Resume
              </a>
            </div>
          </div>

          {/* Availability card */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-foreground/80">Currently available</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Open to internships, collaborations, and project opportunities.
            </p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <p className="text-sm">
                Typically responds within <span className="text-foreground font-medium">24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
