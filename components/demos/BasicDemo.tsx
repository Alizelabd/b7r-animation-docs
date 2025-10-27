"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";

export function BasicDemo() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8 my-6 border border-slate-200 dark:border-slate-700">
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Live Example: Basic Animation</h4>
        <p className="text-sm text-muted-foreground">Scroll down to see the animations in action</p>
      </div>
      
      <AnimateOnScroll>
        <div className="space-y-6">
          <AnimationItem variant="fromTop">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="text-xl font-bold mb-2">From Top</h3>
              <p className="text-muted-foreground">This element slides in from the top with a fade effect.</p>
            </Card>
          </AnimationItem>

          <AnimationItem variant="fromBottom">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="text-xl font-bold mb-2">From Bottom</h3>
              <p className="text-muted-foreground">This element slides in from the bottom with a fade effect.</p>
            </Card>
          </AnimationItem>

          <AnimationItem variant="pop">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="text-xl font-bold mb-2">Pop Effect</h3>
              <p className="text-muted-foreground">This element pops in with a scale animation.</p>
            </Card>
          </AnimationItem>

          <AnimationItem variant="fade">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <h3 className="text-xl font-bold mb-2">Fade In</h3>
              <p className="text-muted-foreground">This element simply fades in smoothly.</p>
            </Card>
          </AnimationItem>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
