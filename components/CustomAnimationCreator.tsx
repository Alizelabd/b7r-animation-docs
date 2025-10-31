"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import gsap from "gsap";

interface CustomConfig {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  duration: number;
  ease: string;
}

const easingOptions = ["power1.out", "power2.out", "power3.out", "elastic.out", "back.out", "none"];

const generateCustomCode = (config: CustomConfig) => {
  const fromProps = {
    x: config.x,
    y: config.y,
    opacity: config.opacity,
    scale: config.scale,
  };

  const fromPropsString = Object.entries(fromProps)
    .filter(([, value]) => value !== 0 && value !== 1)
    .map(([key, value]) => `${key}: ${value}`)
    .join(',\n    ');

  return `const customAnimation = {
  from: {
    ${fromPropsString}
  },
  to: {
    duration: ${config.duration.toFixed(1)},
    ease: "${config.ease}",
  }
};

// Usage:
<AnimationItem custom={customAnimation}>
  {/* Your content */}
</AnimationItem>`;
};

export function CustomAnimationCreator() {
  const [config, setConfig] = useState<CustomConfig>({
    x: -100,
    y: 0,
    opacity: 0,
    scale: 1,
    duration: 1.0,
    ease: "power2.out",
  });
  const [copied, setCopied] = useState(false);
  const elementRef = React.useRef(null);

  const codeToCopy = generateCustomCode(config);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      toast.success("Custom animation code copied!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePlay = () => {
    gsap.fromTo(
      elementRef.current,
      {
        x: config.x,
        y: config.y,
        opacity: config.opacity,
        scale: config.scale,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: config.duration,
        ease: config.ease,
        overwrite: true,
      }
    );
  };

  // Initial animation on mount
  useEffect(() => {
    handlePlay();
  }, [config]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* X Slider */}
        <div className="space-y-2">
          <Label htmlFor="x-slider">Start X Position: {config.x}px</Label>
          <Slider
            id="x-slider"
            min={-300}
            max={300}
            step={10}
            value={[config.x]}
            onValueChange={(v) => setConfig({ ...config, x: v[0] })}
            className="w-full"
          />
        </div>

        {/* Y Slider */}
        <div className="space-y-2">
          <Label htmlFor="y-slider">Start Y Position: {config.y}px</Label>
          <Slider
            id="y-slider"
            min={-300}
            max={300}
            step={10}
            value={[config.y]}
            onValueChange={(v) => setConfig({ ...config, y: v[0] })}
            className="w-full"
          />
        </div>

        {/* Opacity Slider */}
        <div className="space-y-2">
          <Label htmlFor="opacity-slider">Start Opacity: {config.opacity.toFixed(1)}</Label>
          <Slider
            id="opacity-slider"
            min={0}
            max={1}
            step={0.1}
            value={[config.opacity]}
            onValueChange={(v) => setConfig({ ...config, opacity: v[0] })}
            className="w-full"
          />
        </div>

        {/* Scale Slider */}
        <div className="space-y-2">
          <Label htmlFor="scale-slider">Start Scale: {config.scale.toFixed(1)}</Label>
          <Slider
            id="scale-slider"
            min={0}
            max={2}
            step={0.1}
            value={[config.scale]}
            onValueChange={(v) => setConfig({ ...config, scale: v[0] })}
            className="w-full"
          />
        </div>

        {/* Duration Slider */}
        <div className="space-y-2">
          <Label htmlFor="duration-slider">Duration: {config.duration.toFixed(1)}s</Label>
          <Slider
            id="duration-slider"
            min={0.1}
            max={3.0}
            step={0.1}
            value={[config.duration]}
            onValueChange={(v) => setConfig({ ...config, duration: v[0] })}
            className="w-full"
          />
        </div>

        {/* Ease Select */}
        <div className="space-y-2">
          <Label htmlFor="ease-select">Ease</Label>
          <select
            id="ease-select"
            value={config.ease}
            onChange={(e) => setConfig({ ...config, ease: e.target.value })}
            className="w-full p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600"
          >
            {easingOptions.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button onClick={handlePlay} className="flex items-center gap-2">
          <Play className="w-4 h-4" />
          Replay Animation
        </Button>
        <Button onClick={handleCopy} disabled={copied} className="flex items-center gap-2">
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied!" : "Copy Custom Code"}
        </Button>
      </div>

      <Card className="p-6 border-2 border-dashed border-primary/50 bg-primary/5 dark:bg-primary/10">
        <h3 className="text-lg font-semibold mb-4">Live Preview:</h3>
        <div className="flex items-center justify-center h-32">
          <div
            ref={elementRef}
            className="w-24 h-24 bg-primary rounded-xl shadow-2xl flex items-center justify-center text-white font-bold text-lg"
          >
            Animate Me
          </div>
        </div>
      </Card>

      <div className="relative">
        <h3 className="text-lg font-semibold mb-2">Generated Code:</h3>
        <pre className="p-4 rounded-lg bg-gray-900 text-gray-200 overflow-x-auto text-sm">
          <code>{codeToCopy}</code>
        </pre>
      </div>
    </div>
  );
}
