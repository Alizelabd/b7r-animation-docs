import { MdxLayout } from "@/components/layout/MdxLayout";
import { MdxContentClient } from "@/components/MdxContentClient";
import { getPageBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";



export default async function HomePage() {
  const { content } = await getPageBySlug("index").catch(() => notFound());

  return (
    <MdxLayout>
      <article className="prose dark:prose-invert max-w-none">
        <MdxContentClient content={content}  />
      </article>
    </MdxLayout>
  );
}
