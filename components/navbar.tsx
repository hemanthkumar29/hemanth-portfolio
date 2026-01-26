"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface NavbarProps {
}

export default function Navbar({}: NavbarProps) {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const updatePosition = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setIsFixed(false);
        return;
      }
      const heroTop = window.scrollY + hero.getBoundingClientRect().top;
      setIsFixed(window.scrollY < heroTop);
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <header className={`${isFixed ? "fixed inset-x-0 top-2" : "relative mt-1"} z-40 bg-transparent`}>
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
