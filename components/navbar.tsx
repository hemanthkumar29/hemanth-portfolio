"use client";

import Link from "next/link";
import { navLinks, personal } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="#hero" className="text-base font-semibold text-foreground">
          {personal.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
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
            <a href="/api/resume" className="gap-2 text-xs sm:text-sm">
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
