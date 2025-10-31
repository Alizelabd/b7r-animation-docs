"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { AnimationItem } from './AnimationItem';
import gsap from 'gsap';
import { presets } from './animationPresets';
// Dynamic import for SplitText to ensure it's loaded only on the client side
let SplitText: any;
if (typeof window !== 'undefined') {
  import('gsap/SplitText').then((module) => {
    SplitText = module.SplitText;
    gsap.registerPlugin(SplitText);
  });
}



type TextAnimationType = 'chars' | 'words' | 'lines';

interface AnimateTextProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  type?: TextAnimationType;
  variant?: keyof typeof presets;
  stagger?: number;
  duration?: number;
  ease?: string;
}

export const AnimateText: React.FC<AnimateTextProps> = ({
  children,
  as = 'div',
  className,
  type = 'chars',
  stagger = type === 'chars' ? 0.02 : 0.08,
  variant = 'fromBottom',
  duration,
  ease,
}) => {
  const textRef = useRef<HTMLDivElement & { split?: any }>(null);
  const childClassName = `split-${type.slice(0, -1)}`;

  useGSAP(() => {
    if (textRef.current && children && SplitText) {
      const split = new SplitText(textRef.current, {
        type,
        [type + 'Class']: childClassName,
      });
      
      return () => {
        split.revert();
      };
    }
  }, { scope: textRef, dependencies: [children, type, SplitText] });

  return (
    <AnimationItem
      ref={textRef}
      as={as}
      className={className}
      variant={variant}
      duration={duration}
      ease={ease}
      stagger={stagger}
      splitTarget={`.${childClassName}`}
    >
      {children}
    </AnimationItem>
  );
};
