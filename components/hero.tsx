import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="border-b border-border py-14 sm:py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span className="rounded-full border border-border bg-white px-3 py-1">AI • Quantum • Full-stack</span>
            <span>EEE @ Lendi Institute</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {personal.name}
          </h1>
          <p className="text-lg text-slate-700 sm:text-xl">
            {personal.headline}
          </p>
          <p className="leading-relaxed text-slate-600">
            {personal.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects" className="gap-2">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <a href="/api/resume">
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <Link href={personal.contact.github} className="transition-colors hover:text-foreground" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={personal.contact.linkedin} className="transition-colors hover:text-foreground" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
            <span className="text-sm">Based in {personal.location}</span>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full border border-border bg-white px-3 py-1">Hack 2 Impact 2025 Winner</span>
            <span className="rounded-full border border-border bg-white px-3 py-1">IEEE Xtreme 18.0 / 19.0</span>
            <span className="rounded-full border border-border bg-white px-3 py-1">SIH Internal Winner 2024 / 2025</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Quick Profile</p>
          <div className="mt-5 space-y-5">
            <div>
              <p className="text-sm text-slate-500">Focus Areas</p>
              <p className="mt-1 font-medium text-foreground">AI/ML, Quantum Computing, Backend Systems</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Current Goal</p>
              <p className="mt-1 font-medium text-foreground">Build reliable products and grow through internships</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Based In</p>
              <p className="mt-1 font-medium text-foreground">{personal.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
