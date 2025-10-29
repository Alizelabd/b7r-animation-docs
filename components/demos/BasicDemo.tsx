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
              <div className="flex items-center space-x-4"><div className="w-8 h-8 bg-blue-500 rounded-full"></div><h3 className="text-xl font-bold">From Top</h3></div>
              
            </Card>
          </AnimationItem>

          <AnimationItem variant="fromBottom">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <div className="flex items-center space-x-4"><div className="w-8 h-8 bg-green-500 rounded-full"></div><h3 className="text-xl font-bold">From Bottom</h3></div>
              
            </Card>
          </AnimationItem>

          <AnimationItem variant="pop">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <div className="flex items-center space-x-4"><div className="w-8 h-8 bg-yellow-500 rounded-full"></div><h3 className="text-xl font-bold">Pop Effect</h3></div>
              
            </Card>
          </AnimationItem>

          <AnimationItem variant="fade">
            <Card className="p-6 bg-white dark:bg-slate-800">
              <div className="flex items-center space-x-4"><div className="w-8 h-8 bg-red-500 rounded-full"></div><h3 className="text-xl font-bold">Fade In</h3></div>
              
            </Card>
          </AnimationItem>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
