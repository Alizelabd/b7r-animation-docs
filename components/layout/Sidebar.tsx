"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/docs/getting-started", label: "Getting Started", icon: "🚀" },
  { href: "/docs/api-reference", label: "API Reference", icon: "📚" },
  { href: "/docs/variants", label: "Animation Variants", icon: "✨" },
  { href: "/docs/advanced-topics", label: "Advanced Topics", icon: "🎯" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-6 border-r border-border h-full fixed top-0 pt-20 hidden md:block bg-background">
      <nav className="flex flex-col space-y-1">
        <div className="px-2 py-3 mb-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Documentation</h3>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-all duration-200 p-2 rounded-lg flex items-center gap-2",
              pathname === item.href
                ? "bg-primary/10 text-primary border-l-2 border-primary pl-3"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
