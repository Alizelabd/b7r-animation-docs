import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Animations By Gsap',
  description: 'Animations Components By Gsap',
  keywords: "gsap, front-end, animations, next.js, react, Gsap, freamwork, typescript"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
