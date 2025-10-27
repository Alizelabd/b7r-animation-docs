"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";

export function CustomAnimationDemo() {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-8 my-6 border border-orange-200 dark:border-orange-800">
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-2">Live Example: Custom Animations</h4>
        <p className="text-sm text-muted-foreground">Create unique animations by defining custom from/to properties</p>
      </div>

      <AnimateOnScroll>
        <div className="space-y-6">
          {/* Slide and Spin */}
          <AnimationItem
            custom={{
              from: { x: -100, rotate: -180, opacity: 0 },
              to: { x: 0, rotate: 0, opacity: 1 },
            }}
            duration={1.5}
          >
            <Card className="p-6 bg-white dark:bg-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <div>
                  <h5 className="font-semibold">Slide & Spin</h5>
                  <p className="text-sm text-muted-foreground">Custom animation: slides from left while spinning</p>
                </div>
              </div>
            </Card>
          </AnimationItem>

          {/* Scale and Fade */}
          <AnimationItem
            custom={{
              from: { scale: 0, opacity: 0 },
              to: { scale: 1, opacity: 1 },
            }}
            duration={1}
            ease="elastic.out"
          >
            <Card className="p-6 bg-white dark:bg-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <div>
                  <h5 className="font-semibold">Elastic Scale</h5>
                  <p className="text-sm text-muted-foreground">Custom animation: scales with elastic easing</p>
                </div>
              </div>
            </Card>
          </AnimationItem>

          {/* 3D Flip */}
          <AnimationItem
            custom={{
              from: { rotationY: 90, opacity: 0 },
              to: { rotationY: 0, opacity: 1 },
            }}
            duration={1.2}
          >
            <Card className="p-6 bg-white dark:bg-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <div>
                  <h5 className="font-semibold">3D Flip</h5>
                  <p className="text-sm text-muted-foreground">Custom animation: 3D flip effect on Y axis</p>
                </div>
              </div>
            </Card>
          </AnimationItem>
        </div>
      </AnimateOnScroll>

      <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg border border-orange-200 dark:border-orange-800">
        <p className="text-sm text-muted-foreground">
          <strong>Custom Animation Syntax:</strong> Use the <code className="bg-muted px-2 py-1 rounded">custom</code> prop with <code className="bg-muted px-2 py-1 rounded">from</code> and <code className="bg-muted px-2 py-1 rounded">to</code> objects to create unlimited animation possibilities.
        </p>
      </div>
    </div>
  );
}
