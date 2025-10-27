import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';

const DOCS_PATH = path.join(process.cwd(), 'docs');

export async function getPages() {
  const files = await fs.readdir(DOCS_PATH);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  return mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    return { slug };
  });
}

export async function getPageBySlug(slug: string) {
  const fullPath = path.join(DOCS_PATH, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  return {
    slug,
    frontmatter,
    content,
  };
}
