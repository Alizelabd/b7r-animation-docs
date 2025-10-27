"use client";

import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";

export function StaggerDemo() {
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    description: `This is staggered item number ${i + 1}`,
  }));

  return (
    <div className="w-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-8 my-6 border border-green-200 dark:border-green-800">
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-2">Live Example: Staggered Animations</h4>
        <p className="text-sm text-muted-foreground">Each item animates with a delay, creating a wave effect</p>
      </div>

      <AnimateOnScroll config={{ start: "top 80%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <AnimationItem
              key={item.id}
              variant="pop"
              stagger={index * 0.1}
            >
              <Card className="p-6 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h5 className="font-semibold mb-2">{item.title}</h5>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </AnimationItem>
          ))}
        </div>
      </AnimateOnScroll>

      <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg border border-green-200 dark:border-green-800">
        <p className="text-sm text-muted-foreground">
          <strong>Tip:</strong> The stagger prop adds a delay between each animation. Each item is delayed by 0.1 seconds, creating a smooth cascading effect.
        </p>
      </div>
    </div>
  );
}
