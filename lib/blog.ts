import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');
const legalDirectory = path.join(process.cwd(), 'content/legal');

export type BlogPostMetadata = {
  title: string;
  date: string;
  tag: string;
  coverImage: string;
  featured: boolean;
  author: string;
  excerpt: string;
  slug: string;
};

export type LegalPageMetadata = {
  title: string;
  lastUpdated: string;
  downloadUrl?: string;
  slug: string;
};

export function getBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs.readdirSync(blogDirectory);
}

export function getLegalSlugs() {
  if (!fs.existsSync(legalDirectory)) return [];
  return fs.readdirSync(legalDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(blogDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: { ...data, slug: realSlug } as BlogPostMetadata,
    content,
  };
}

export function getLegalBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(legalDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: { ...data, slug: realSlug } as LegalPageMetadata,
    content,
  };
}

export function getAllPosts() {
  const slugs = getBlogSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
  return posts;
}

export function getTags() {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach(post => {
    if (post.meta.tag) {
      tags.add(post.meta.tag);
    }
  });
  return Array.from(tags);
}
