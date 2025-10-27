"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimateText } from "@/components/animation/AnimateText";
import { Card } from "@/components/ui/card";

export function TextAnimationDemo() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-8 my-6 border border-indigo-200 dark:border-indigo-800">
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-2">Live Example: Text Animations</h4>
        <p className="text-sm text-muted-foreground">Scroll down to see text animations in action</p>
      </div>

      <AnimateOnScroll>
        <div className="space-y-12">
          {/* Character Animation */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-4">Character by Character Animation</p>
            <Card className="p-8 bg-white dark:bg-slate-800">
              <AnimateText
                type="chars"
                variant="fromBottom"
                stagger={0.02}
                as="h2"
                className="text-3xl font-bold"
              >
                Animate each character
              </AnimateText>
            </Card>
          </div>

          {/* Word Animation */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-4">Word by Word Animation</p>
            <Card className="p-8 bg-white dark:bg-slate-800">
              <AnimateText
                type="words"
                variant="pop"
                stagger={0.1}
                as="h2"
                className="text-3xl font-bold"
              >
                Each word pops in separately
              </AnimateText>
            </Card>
          </div>

          {/* Line Animation */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-4">Line by Line Animation</p>
            <Card className="p-8 bg-white dark:bg-slate-800">
              <AnimateText
                type="lines"
                variant="fromLeft"
                stagger={0.15}
                as="div"
                className="text-lg leading-relaxed"
              >
                Lines slide in from the left.
This creates a nice flowing effect.
Perfect for paragraphs and longer text.
              </AnimateText>
            </Card>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
