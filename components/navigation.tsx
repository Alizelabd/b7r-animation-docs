"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sparkles, Code2, BookOpen } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">GSAP Animations</span>
          <span className="sm:hidden">GSAP</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/examples">
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Examples</span>
            </Button>
          </Link>
          <Link href="/builder">
            <Button variant="ghost" size="sm" className="gap-2">
              <Code2 className="h-4 w-4" />
              <span className="hidden sm:inline">Builder</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
