import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "b7r-animation Docs",
  description: "A powerful, flexible, and lightweight React animation library for creating performant scroll-based and text animations using GSAP and ScrollTrigger.",
  keywords: "gsap, front-end, animations, next.js, react, Gsap, freamwork, typescript, scroll, scroll-trigger"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
