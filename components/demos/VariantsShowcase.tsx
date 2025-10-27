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
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4">
                  <span className="text-white font-bold text-lg">{variant.name}</span>
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
