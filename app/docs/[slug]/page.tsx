import { notFound } from 'next/navigation';
import { getPages, getPageBySlug } from '@/lib/mdx';
import { MdxLayout } from '@/components/layout/MdxLayout';
import { MdxContentClient } from '@/components/MdxContentClient';


export async function generateStaticParams() {
	const pages = await getPages();
	return pages.map((page) => ({
		slug: page.slug,
	}));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const { frontmatter } = await getPageBySlug(slug).catch(() => ({ frontmatter: { title: 'Not Found' } }));

	return {
		title: `${(frontmatter as any).title} | b7r-animation Docs`,
		description: (frontmatter as any).description || 'b7r-animation Documentation',
	};
}

export default async function DocPage({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const { content } = await getPageBySlug(slug).catch(() => notFound());

	return (
		<MdxLayout>
			<article className="prose dark:prose-invert max-w-none">
				<MdxContentClient content={content} />
			</article>
		</MdxLayout>
	);
}
