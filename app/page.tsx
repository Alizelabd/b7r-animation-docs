"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownIcon, CheckIcon, ClipboardIcon, GithubIcon, LinkedinIcon, PackageIcon, RocketIcon, TwitterIcon, UserIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyComponentCode = async () => {
    const code = `"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Variant = 
  | 'fade'
  | 'fromTop'
  | 'fromBottom'
  | 'fromLeft'
  | 'fromRight'
  | 'pop'
  | 'rotateIn'
  | 'skewIn'
  | 'flip'
  | 'bounce'
  | 'zoomOut';

interface AnimationItemProps {
  sort: number;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

export const AnimationItem: React.FC<AnimationItemProps> = ({ 
  sort, 
  variant = 'fade', 
  children, 
  className 
}) => (
  <div
    className={cn('aos-item', className)}
    data-sort={sort}
    data-variant={variant}
    style={{ opacity: 0, willChange: 'transform, opacity' }}
  >
    {children}
  </div>
);

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  stagger?: number;
  start?: string;
  watch?: Array<unknown>;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className,
  duration = 0.4,
  stagger = 0.2,
  start = 'top 90%',
  watch = [],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const elements = Array.from(containerRef.current.querySelectorAll<HTMLElement>('.aos-item'))
      .sort((a, b) => (+a.dataset.sort! || 0) - (+b.dataset.sort! || 0));
    
    const setupAnimation = () => {
      timelineRef.current?.kill();
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: 'play none none none',
        }
      });

      elements.forEach((el, i) => {
        const variant = el.dataset.variant as Variant;
        
        const fromVars = getFromVars(variant);
        const toVars = getToVars(variant);
        
        tl.fromTo(el, fromVars, {
          ...toVars,
          duration,
          ease: 'power2.out',
        }, i * stagger);
      });

      return tl;
    };

    timelineRef.current = setupAnimation();

    return () => {
      timelineRef.current?.kill();
      ScrollTrigger.refresh();
    };
  }, {
    dependencies: [start, duration, stagger, ...watch],
    scope: containerRef,
  });

  const getFromVars = (variant: Variant): gsap.TweenVars => ({
    fade: { opacity: 0 },
    fromTop: { y: -250, opacity: 0 },
    fromBottom: { y: 100, opacity: 0 },
    fromLeft: { x: -150, opacity: 0 },
    fromRight: { x: 150, opacity: 0 },
    pop: { scale: 0.8, opacity: 0 },
    rotateIn: { rotation: -45, opacity: 0 },
    skewIn: { skewY: 10, opacity: 0 },
    flip: { rotationY: 90, opacity: 0 },
    bounce: { y: -250, opacity: 0 },
    zoomOut: { scale: 1.2, opacity: 0 },
  }[variant]);

  const getToVars = (variant: Variant): gsap.TweenVars => ({
    fade: { opacity: 1 },
    fromTop: { y: 0, opacity: 1 },
    fromBottom: { y: 0, opacity: 1 },
    fromLeft: { x: 0, opacity: 1 },
    fromRight: { x: 0, opacity: 1 },
    pop: { scale: 1, opacity: 1 },
    rotateIn: { rotation: 0, opacity: 1 },
    skewIn: { skewY: 0, opacity: 1 },
    flip: { rotationY: 0, opacity: 1 },
    bounce: { y: 0, opacity: 1, ease: 'bounce.out' },
    zoomOut: { scale: 0.8, opacity: 1 },
  }[variant]);

  return (
    <div ref={containerRef} className={cn('overflow-hidden', className)}>
      {children}
    </div>
  );
};`;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-24 text-center">
        <AnimateOnScroll>
          <AnimationItem duration={0.5}  variant="fromBottom">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Animate On Scroll
            </h1>
          </AnimationItem>
          <AnimationItem duration={1} variant="fromBottom">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A beautiful and powerful scroll animation component for React
            </p>
          </AnimationItem>
          <AnimationItem duration={1.5} variant="pop">
            <Button size="lg" onClick={copyComponentCode} className="min-w-[200px]">
              {copied ? (
                <>
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <ClipboardIcon className="mr-2 h-4 w-4" />
                  Copy Component Code
                </>
              )}
            </Button>
          </AnimationItem>
        </AnimateOnScroll>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <AnimateOnScroll>
            <AnimationItem duration={1} variant="fromLeft">
              <h2 className="text-4xl font-bold mb-12">Examples</h2>
            </AnimationItem>
            <AnimationItem duration={2} variant="fade">
              <Tabs defaultValue="basic">
                <TabsList className="mb-8">
                  <TabsTrigger value="basic">Basic Usage</TabsTrigger>
                  <TabsTrigger value="variants">Animation Variants</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced Usage</TabsTrigger>
                </TabsList>
                <TabsContent value="basic">
                  <Card className="p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold mb-4">Basic Example</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Wrap your content with AnimateOnScroll and use AnimationItem for each element you want to animate.
                      </p>
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`import { AnimateOnScroll, AnimationItem } from './animate-on-scroll'

export default function Example() {
  return (
    <AnimateOnScroll>
      <AnimationItem sort={1} variant="fromBottom">
        <h1>Hello World</h1>
      </AnimationItem>
      <AnimationItem sort={2} variant="fade">
        <p>This content will animate when scrolled into view</p>
      </AnimationItem>
    </AnimateOnScroll>
  )
}`}
                    />
                  </Card>
                </TabsContent>
                <TabsContent value="variants">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "fade",
                      "fromTop",
                      "fromBottom",
                      "fromLeft",
                      "fromRight",
                      "pop",
                      "rotateIn",
                      "skewIn",
                      "flip",
                      "bounce",
                      "zoomOut",
                    ].map((variant, index) => (
                      <AnimateOnScroll key={variant}>
                        <AnimationItem duration={index} variant={variant as any}>
                          <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{variant}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              Animation variant: {variant}
                            </p>
                          </Card>
                        </AnimationItem>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="advanced">
                  <Card className="p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold mb-4">Advanced Configuration</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Customize animation duration, stagger, and scroll trigger position.
                      </p>
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`<AnimateOnScroll
  duration={0.6}    // Animation duration in seconds
  stagger={0.3}     // Delay between animations
  start="top 80%"   // Scroll trigger position
>
  <AnimationItem sort={1} variant="fromLeft">
    <h1>Custom Animation</h1>
  </AnimationItem>
  <AnimationItem sort={2} variant="fromRight">
    <p>With advanced configuration</p>
  </AnimationItem>
</AnimateOnScroll>`}
                    />
                  </Card>
                </TabsContent>
              </Tabs>
            </AnimationItem>
          </AnimateOnScroll>
        </section>

        <section className="mb-24">
          <AnimateOnScroll>
            <AnimationItem duration={1} variant="fromLeft">
              <h2 className="text-4xl font-bold mb-12">Developer Setup</h2>
            </AnimationItem>
            <AnimationItem duration={2} variant="fade">
              <Card className="p-6 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <PackageIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Required Dependencies</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Install these packages in your React project:
                    </p>
                    <CodeBlock
                      language="bash"
                      code="npm install gsap @gsap/react clsx tailwind-merge"
                    />
                  </div>
                </div>
              </Card>
              <Card className="p-6 mb-8">
                <div className="flex items-start gap-4">
                  <RocketIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Project Setup</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      1. Copy the component code using the button above<br />
                      2. Create a new file in your project (e.g., <code>animate-on-scroll.tsx</code>)<br />
                      3. Paste the component code into the file<br />
                      4. Create a utility function for class names (or use your existing one):
                    </p>
                    <CodeBlock
                      language="typescript"
                      code={`// utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
                    />
                  </div>
                </div>
              </Card>
            </AnimationItem>
          </AnimateOnScroll>
        </section>

        <section>
          <AnimateOnScroll>
            <AnimationItem duration={1} variant="fromLeft">
              <h2 className="text-4xl font-bold mb-12">About the Developer</h2>
            </AnimationItem>
            <AnimationItem duration={2} variant="fade">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <UserIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold mb-2">Aleiz Bahr</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        A passionate developer focused on creating beautiful and performant web experiences.
                        This component was built to make it easier for developers to add engaging scroll-based
                        animations to their React applications.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Alizelabd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                      >
                        <GithubIcon className="w-6 h-6" />
                      </a>
                      <a
                        href="https://x.com/_7coder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                      >
                        <TwitterIcon className="w-6 h-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/aleizalabd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                      >
                        <LinkedinIcon className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimationItem>
          </AnimateOnScroll>
        </section>
      </main>
    </div>
  );
}