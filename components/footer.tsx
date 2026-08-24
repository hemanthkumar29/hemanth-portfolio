"use client";

import Link from "next/link";
import { personal, navLinks } from "@/data/portfolio";
import { Github, Linkedin, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[rgba(var(--border),0.06)]">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-bold text-lg gradient-text">{personal.name}</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Engineering student building intelligent software for real-world impact.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Navigation</p>
            <nav className="grid grid-cols-2 gap-1">
              {navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Connect</p>
            <div className="flex items-center gap-3">
              <Link
                href={personal.contact.github}
                target="_blank"
                className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground hover:bg-accent/10 hover:shadow-glow"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href={personal.contact.linkedin}
                target="_blank"
                className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground hover:bg-accent/10 hover:shadow-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <button
                onClick={scrollToTop}
                className="rounded-lg border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] p-2 text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-foreground hover:bg-accent/10 hover:shadow-glow"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(var(--border),0.06)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. Crafted with{" "}
            <Heart className="inline-block h-3 w-3 text-accent" /> and lots of coffee.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
