"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";

const variants = [
  { name: "fade", description: "Simple fade in effect" },
  { name: "fromTop", description: "Slide in from top" },
  { name: "fromBottom", description: "Slide in from bottom" },
  { name: "fromLeft", description: "Slide in from left" },
  { name: "fromRight", description: "Slide in from right" },
  { name: "pop", description: "Pop scale effect" },
  { name: "scaleUp", description: "Scale up from small" },
  { name: "scaleDown", description: "Scale down from large" },
  { name: "rotateIn", description: "Rotate in effect" },
  { name: "flipX", description: "Flip horizontally" },
  { name: "flipY", description: "Flip vertically" },
  { name: "zoomOut", description: "Zoom out effect" },
];

export function VariantsShowcase() {
  return (
    <div className="w-full my-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Animation Variants Gallery</h3>
        <p className="text-muted-foreground">Scroll down to see all available animation variants in action</p>
      </div>

      <AnimateOnScroll config={{ start: "top 90%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {variants.map((variant, index) => (
            <AnimationItem
              key={variant.name}
              variant={variant.name as any}
              stagger={index * 0.05}
            >
              <Card className="p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center h-32 mb-4">
                  <div className="w-20 h-20 bg-primary/80 rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-lg">{variant.name}</div>
                </div>
                <h4 className="font-semibold text-foreground">{variant.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{variant.description}</p>
              </Card>
            </AnimationItem>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
}
