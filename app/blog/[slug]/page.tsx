import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts, getTags } from '@/lib/blog';
import BlogNavbar from '@/components/Blog/BlogNavbar';
import BlogFooter from '@/components/Blog/BlogFooter';
import ArticleNav from '@/components/Blog/ArticleNav';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import { ShareNetwork, Heart } from '@phosphor-icons/react/dist/ssr';
import { format } from 'date-fns';
import Image from 'next/image';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get previous and next posts for navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;
  
  const tags = getTags();

  let formattedDate = post.meta.date;
  try {
    formattedDate = format(new Date(post.meta.date), 'MMMM d, yyyy');
  } catch {}

  return (
    <>
      <BlogNavbar tags={tags} />
      <main className="w-full pb-20 bg-white">
        
        <div className="page-container px-4 sm:px-8 mb-10 mt-16 text-center">
          <h1 className="text-4xl md:text-6xl max-w-4xl mx-auto text-gray-900 mb-6" style={{ fontFamily: 'var(--font-coustard)', lineHeight: '1.2' }}>
            {post.meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 font-body mb-8">
            <span className="border border-gray-200 px-3 py-1 rounded-full">{post.meta.tag}</span>
            <time>{formattedDate}</time>
            <span className="text-gray-300">|</span>
            <span>BY {post.meta.author.toUpperCase()}</span>
            <button className="flex items-center gap-1 hover:text-black transition-colors ml-2"><ShareNetwork size={14} weight="bold"/> SHARE</button>
            <button className="flex items-center gap-1 hover:text-black transition-colors"><Heart size={14} weight="bold"/> 0</button>
          </div>
        </div>

        <div className="page-container px-4 sm:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="w-full lg:w-2/3">
            <ArticleNav prevSlug={prevPost?.slug} nextSlug={nextPost?.slug} />

            <article className="prose prose-blog max-w-none w-full">
              {post.meta.coverImage && (
                <div className="w-full aspect-[21/9] relative mb-12 not-prose">
                  <Image src={post.meta.coverImage} alt={post.meta.title} fill className="object-cover" />
                </div>
              )}
              <MDXRemote source={post.content} />
            </article>

            <ArticleNav prevSlug={prevPost?.slug} nextSlug={nextPost?.slug} />
          </div>

          <div className="w-full lg:w-1/3">
             <BlogSidebar tags={tags} recentPosts={allPosts.map(p => p.meta)} />
          </div>

        </div>
      </main>
      <BlogFooter />
    </>
  );
}
