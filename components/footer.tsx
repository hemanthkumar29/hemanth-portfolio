"use client";

import Link from "next/link";
import { personal } from "@/data/portfolio";
import { Github, Linkedin, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="container py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} {personal.name}. Crafted with{" "}
              <Heart className="inline-block h-3 w-3 text-accent" /> and lots of coffee.
            </p>
            <p className="text-xs text-zinc-600">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={personal.contact.github}
              target="_blank"
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-500 transition-all duration-200 hover:border-accent/30 hover:text-white hover:bg-accent/10 hover:shadow-glow"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={personal.contact.linkedin}
              target="_blank"
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-500 transition-all duration-200 hover:border-accent/30 hover:text-white hover:bg-accent/10 hover:shadow-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-zinc-500 transition-all duration-200 hover:border-accent/30 hover:text-white hover:bg-accent/10 hover:shadow-glow"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
