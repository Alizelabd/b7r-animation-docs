"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";

export function InteractivePlayground() {
  const [variant, setVariant] = useState("pop");
  const [duration, setDuration] = useState(0.8);
  const [stagger, setStagger] = useState(0.1);

  const variants = ["fade", "fromTop", "fromBottom", "fromLeft", "fromRight", "pop", "scaleUp", "rotateIn"];

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 my-6 border border-slate-700">
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-2">Interactive Playground</h4>
        <p className="text-sm text-slate-300">Customize the animation properties and see the results in real-time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <label className="block text-sm font-semibold text-white mb-3">Animation Variant</label>
            <div className="grid grid-cols-2 gap-2">
              {variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-3 py-2 rounded text-xs font-medium transition-all ${
                    variant === v
                      ? "bg-purple-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <label className="block text-sm font-semibold text-white mb-3">
              Duration: <span className="text-purple-400">{duration.toFixed(1)}s</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={duration}
              onChange={(e) => setDuration(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <label className="block text-sm font-semibold text-white mb-3">
              Stagger: <span className="text-purple-400">{stagger.toFixed(2)}s</span>
            </label>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.05"
              value={stagger}
              onChange={(e) => setStagger(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <button
            onClick={() => {
              setVariant("pop");
              setDuration(0.8);
              setStagger(0.1);
            }}
            className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2">
          <AnimateOnScroll config={{ start: "top 90%" }} once={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <AnimationItem
                  key={i}
                  variant={variant as any}
                  duration={duration}
                  stagger={stagger * (i - 1)}
                >
                  <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    <div className="flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">{i}</div>
                        <p className="text-sm opacity-90">Item {i}</p>
                      </div>
                    </div>
                  </Card>
                </AnimationItem>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
        <p className="text-xs text-slate-300">
          <strong>💡 Tip:</strong> Scroll down to trigger the animations again. The <code className="bg-slate-900 px-2 py-1 rounded text-purple-400">once={"{false}"}</code> prop allows animations to replay on every scroll.
        </p>
      </div>
    </div>
  );
}
