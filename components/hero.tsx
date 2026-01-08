"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-12 pt-20 sm:pt-28">
      <div className="container relative flex flex-col gap-10 lg:flex-row lg:items-center">
        <motion.div
          className="space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-foreground/70">
            DevOps • Cloud • Backend
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I’m <span className="text-gradient">{personal.name}</span>
          </h1>
          <p className="text-lg text-foreground/80 sm:text-xl">
            {personal.headline}
          </p>
          <p className="text-foreground/70 leading-relaxed">
            {personal.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects" className="gap-2">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <Link href={personal.resumeUrl} target="_blank">
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 text-foreground/70">
            <Link href={personal.contact.github} className="hover:text-white transition" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={personal.contact.linkedin} className="hover:text-white transition" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
            <span className="text-sm">Based in {personal.location}</span>
          </div>
        </motion.div>
        <motion.div
          className="relative ml-auto flex h-72 w-full max-w-md items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-accent/40 via-accent2/30 to-transparent blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-card/70 shadow-soft">
            <div className="absolute inset-0 backdrop-grid opacity-60" />
            <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
              EEE • B.Tech
            </div>
            <div className="absolute bottom-6 left-6 space-y-2">
              <p className="text-sm text-white/70">Shipping reliable systems</p>
              <p className="text-xl font-semibold text-white">18 y/o • Builder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
