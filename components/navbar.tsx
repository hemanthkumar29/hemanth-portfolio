"use client";

import Link from "next/link";
import { navLinks, personal } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";

interface NavbarProps {
  onCommandOpen: () => void;
}

export default function Navbar({ onCommandOpen }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-transparent">
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
          <Button variant="ghost" size="sm" onClick={onCommandOpen} aria-label="Open command palette">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Command</span>
            <span className="hidden sm:inline text-xs text-foreground/60">⌘K</span>
          </Button>
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
