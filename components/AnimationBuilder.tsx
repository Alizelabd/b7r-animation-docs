"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const easingOptions = ["power1.out", "power2.out", "power3.out", "elastic.out", "back.out", "none"];

const variants = [
  "fade",
  "fromTop",
  "fromBottom",
  "fromLeft",
  "fromRight",
  "pop",
  "scaleUp",
  "scaleDown",
  "rotateIn",
  "flipX",
  "flipY",
  "zoomOut",
];

interface AnimationConfig {
  variant: string;
  duration: number;
  stagger: number;
  ease: string;
}

const generateCode = ({ variant, duration, stagger, ease }: AnimationConfig) => {
  return `import { AnimateOnScroll, AnimationItem } from 'b7r-animation';

function MyComponent() {
  return (
    <AnimateOnScroll>
      <AnimationItem variant="${variant}" duration={${duration}} stagger={${stagger}} ease="${ease}">
        {/* Your content here */}
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow-xl">
          Animated Element
        </div>
      </AnimationItem>
    </AnimateOnScroll>
  );
}`;
};

export function AnimationBuilder() {
  const [config, setConfig] = useState<AnimationConfig>({
    variant: "fromTop",
    duration: 1.0,
    stagger: 0.0,
    ease: "power2.out",
  });
  const [copied, setCopied] = useState(false);

  const codeToCopy = generateCode(config);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">">
        {/* Variant Select */}
        <div className="space-y-2">
          <Label htmlFor="variant-select">Variant</Label>
          <Select
            value={config.variant}
            onValueChange={(v) => setConfig({ ...config, variant: v })}
          >
            <SelectTrigger id="variant-select">
              <SelectValue placeholder="Select an animation variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((v) => (
                <SelectItem key={v} value={v}>
                  {v}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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

        {/* Stagger Slider */}
        <div className="space-y-2">
          <Label htmlFor="stagger-slider">Stagger: {config.stagger.toFixed(2)}s</Label>
          <Slider
            id="stagger-slider"
            min={0.0}
            max={0.5}
            step={0.01}
            value={[config.stagger]}
            onValueChange={(v) => setConfig({ ...config, stagger: v[0] })}
            className="w-full"
          />
        </div>

        {/* Ease Select */}
        <div className="space-y-2">
          <Label htmlFor="ease-select">Ease</Label>
          <Select
            value={config.ease}
            onValueChange={(v) => setConfig({ ...config, ease: v })}
          >
            <SelectTrigger id="ease-select">
              <SelectValue placeholder="Select easing function" />
            </SelectTrigger>
            <SelectContent>
              {easingOptions.map((e) => (
                <SelectItem key={e} value={e}>
                  {e}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Placeholder for future controls */}
        <div className="space-y-2">
          <Label htmlFor="element-count">Element Count</Label>
          <Input id="element-count" type="number" value={1} disabled />
        </div>

        {/* Copy Button */}
        <div className="flex items-end">
          <Button onClick={handleCopy} disabled={copied} className="w-full">
            {copied ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy Code"}
          </Button>
        </div>
      </div>

      </div>

      <Card className="p-6 border-2 border-dashed border-primary/50 bg-primary/5 dark:bg-primary/10">
        <h3 className="text-lg font-semibold mb-4">Live Preview:</h3>
        <AnimateOnScroll config={{ start: "top 90%" }}>
          <AnimationItem
            variant={config.variant as any}
            duration={config.duration}
            stagger={config.stagger}
            ease={config.ease}
            key={config.variant + config.duration + config.stagger + config.ease}
          >
            <div className="flex items-center justify-center h-32 bg-primary text-white rounded-xl shadow-2xl transition-all duration-500">
              <span className="text-xl font-bold">{config.variant}</span>
            </div>
          </AnimationItem>
        </AnimateOnScroll>
      </Card>

      <div className="relative">
        <pre className="p-4 rounded-lg bg-gray-900 text-gray-200 overflow-x-auto text-sm">
          <code>{codeToCopy}</code>
        </pre>
      </div>
    </div>
  );
}
