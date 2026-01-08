import Link from "next/link";
import { personal } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-8">
      <div className="container flex flex-col gap-4 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {personal.name}. Crafted with care.</p>
        <div className="flex items-center gap-4">
          <Link href={personal.contact.github} target="_blank" className="hover:text-white transition">
            <Github className="h-4 w-4" />
          </Link>
          <Link href={personal.contact.linkedin} target="_blank" className="hover:text-white transition">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="mailto:hemanth@example.com" className="hover:text-white transition">
            {personal.contact.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
