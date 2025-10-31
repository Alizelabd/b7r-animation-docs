"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const variants: { name: string; description: string; color: string }[] = [
  { name: "fade", description: "Simple fade in effect", color: "bg-indigo-500" },
  { name: "fromTop", description: "Slide in from top", color: "bg-green-500" },
  { name: "fromBottom", description: "Slide in from bottom", color: "bg-red-500" },
  { name: "fromLeft", description: "Slide in from left", color: "bg-yellow-500" },
  { name: "fromRight", description: "Slide in from right", color: "bg-pink-500" },
  { name: "pop", description: "Pop scale effect", color: "bg-purple-500" },
  { name: "scaleUp", description: "Scale up from small", color: "bg-teal-500" },
  { name: "scaleDown", description: "Scale down from large", color: "bg-cyan-500" },
  { name: "rotateIn", description: "Rotate in effect", color: "bg-orange-500" },
  { name: "flipX", description: "Flip horizontally", color: "bg-lime-500" },
  { name: "flipY", description: "Flip vertically", color: "bg-fuchsia-500" },
  { name: "zoomOut", description: "Zoom out effect", color: "bg-blue-500" },
];

export function VariantsShowcase() {
  return (
    <div className="w-full my-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Animation Variants Gallery</h3>
        <p className="text-muted-foreground">Scroll down to see all available animation variants in action</p>
      </div>

      <AnimateOnScroll config={{ start: "top 90%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((variant) => (
            <AnimationItem
              key={variant.name}
              variant={variant.name as any}
              stagger={0.05}
            >
              <Card className="p-6 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center justify-center h-32 mb-4">
                  <div
                    className={`w-20 h-20 ${variant.color} rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-lg transition-all duration-500`}
                  >
                    <MoveRight className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-foreground mb-1">{variant.name}</h4>
                <p className="text-sm text-muted-foreground flex-grow">{variant.description}</p>
                <Button variant="outline" className="mt-4 w-full">
                  View Code
                </Button>
              </Card>
            </AnimationItem>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
}
