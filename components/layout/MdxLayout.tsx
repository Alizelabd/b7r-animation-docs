import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "next-themes";

interface MdxLayoutProps {
  children: ReactNode;
}

export function MdxLayout({ children }: MdxLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen bg-background">
        <Header />
        <Sidebar />
        <main className="flex-1 pt-20 md:ml-64">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
            <div className="prose dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
