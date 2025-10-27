"use client";

import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 dark:bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 font-bold text-lg hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">b7r</span>
          </div>
          <span className="text-foreground">b7r-animation</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="https://github.com/Alizelabd/b7r-animation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="GitHub Repository"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
