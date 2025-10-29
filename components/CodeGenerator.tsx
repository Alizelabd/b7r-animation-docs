"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimateOnScroll } from "@/components/animation/AnimateOnScroll";
import { AnimationItem } from "@/components/animation/AnimationItem";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

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

const generateCode = (variant: string) => {
  return `import { AnimateOnScroll, AnimationItem } from 'b7r-animation';

function MyComponent() {
  return (
    <AnimateOnScroll>
      <AnimationItem variant="${variant}">
        {/* Your content here */}
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow-xl">
          Animated Element
        </div>
      </AnimationItem>
    </AnimateOnScroll>
  );
}`;
};

export function CodeGenerator() {
  const [selectedVariant, setSelectedVariant] = useState("fromTop");
  const [copied, setCopied] = useState(false);

  const codeToCopy = generateCode(selectedVariant);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <label className="font-medium text-sm whitespace-nowrap">Select Variant:</label>
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
            <SelectTrigger className="w-[180px]">
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
        <Button onClick={handleCopy} disabled={copied} className="w-full md:w-auto">
          {copied ? (
            <Check className="mr-2 h-4 w-4" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </div>

      <Card className="p-6 border-2 border-dashed border-primary/50 bg-primary/5 dark:bg-primary/10">
        <h3 className="text-lg font-semibold mb-4">Live Preview:</h3>
        <AnimateOnScroll config={{ start: "top 90%" }}>
          <AnimationItem variant={selectedVariant as any} key={selectedVariant}>
            <div className="flex items-center justify-center h-32 bg-primary text-white rounded-xl shadow-2xl transition-all duration-500">
              <span className="text-xl font-bold">{selectedVariant}</span>
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
