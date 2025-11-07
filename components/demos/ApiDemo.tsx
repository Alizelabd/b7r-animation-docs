"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";

export function ApiDemo() {
  return (
    <Card className="p-6 border-2 border-dashed border-primary/50 bg-primary/5 dark:bg-primary/10 mb-8">
      <h3 className="text-lg font-semibold mb-4">Live Demo: AnimateOnScroll</h3>
      <AnimateOnScroll config={{ start: "top 90%" }}>
        <AnimationItem variant="fromLeft" stagger={0.1}>
          <div className="p-4 bg-primary/80 text-white rounded-lg shadow-md mb-2">Element 1</div>
        </AnimationItem>
        <AnimationItem variant="fromRight" stagger={0.1}>
          <div className="p-4 bg-primary/70 text-white rounded-lg shadow-md mb-2">Element 2</div>
        </AnimationItem>
        <AnimationItem variant="pop" stagger={0.1}>
          <div className="p-4 bg-primary/60 text-white rounded-lg shadow-md">Element 3</div>
        </AnimationItem>
      </AnimateOnScroll>
    </Card>
  );
}
