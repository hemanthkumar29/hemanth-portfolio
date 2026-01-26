"use client";

import Link from "next/link";
import { navLinks, personal } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-40 bg-transparent mt-1.5">
      <div className="container flex items-center justify-between py-3">
        <Link href="#hero" className="text-sm font-semibold tracking-wide text-gradient">
          {personal.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-foreground/80 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
              scroll={true}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="/api/resume" className="gap-2">
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
