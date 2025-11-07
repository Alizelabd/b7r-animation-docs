"use client"
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from '@/components/code-block';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BasicDemo } from "@/components/demos/BasicDemo";
import { VariantsShowcase } from "@/components/demos/VariantsShowcase";
import { InteractivePlayground } from "@/components/demos/InteractivePlayground";
import { TextAnimationDemo } from "@/components/demos/TextAnimationDemo";
import { StaggerDemo } from "@/components/demos/StaggerDemo";
import { CustomAnimationDemo } from "@/components/demos/CustomAnimationDemo";
import { AnimationBuilder } from "@/components/AnimationBuilder";
import { CustomAnimationCreator } from "@/components/CustomAnimationCreator";
import { ApiDemo } from "@/components/demos/ApiDemo";

const components: any = {
  CodeBlock,
  Button,
  Card,
  BasicDemo,
  VariantsShowcase,
  InteractivePlayground,
  TextAnimationDemo,
  AnimationBuilder,
  StaggerDemo,
  CustomAnimationDemo,
	  CustomAnimationCreator,
	  ApiDemo,
  table: (props: any) => <table className="w-full border-collapse" {...props} />,
  thead: (props: any) => <thead className="bg-muted" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr className="border-b" {...props} />,
  th: (props: any) => <th className="border px-4 py-2 text-left font-semibold" {...props} />,
  td: (props: any) => <td className="border px-4 py-2" {...props} />,
  h1: (props: any) => <h1 className="text-4xl font-bold mt-10 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-8 mb-3 border-b pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold mt-6 mb-2" {...props} />,
  p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline font-medium" {...props} />,
};


export function MdxContentClient({ content }: { content: string }) {

	return (
		<MDXRemote source={content} components={components} />
	)
};
