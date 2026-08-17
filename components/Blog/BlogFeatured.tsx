import Link from 'next/link';
import { BlogPostMetadata } from '@/lib/blog';
import { ShareNetwork, Heart } from '@phosphor-icons/react/dist/ssr';
import { format } from 'date-fns';

export default function BlogFeatured({ post }: { post: BlogPostMetadata }) {
  let formattedDate = post.date;
  try {
    formattedDate = format(new Date(post.date), 'MMMM d, yyyy').toUpperCase();
  } catch {}

  return (
    <div className="relative z-10 md:-mt-24">
      <div className="page-container">
        <article className="max-w-4xl mx-auto bg-white px-8 md:px-16 pt-10 pb-12 text-center border-t-4 border-gray-900">

          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 font-body mb-6">
            <span className="border border-gray-200 px-3 py-1 rounded-full">{post.tag}</span>
            <time>{formattedDate}</time>
            <button className="flex items-center gap-1 hover:text-black transition-colors ml-2">
              <ShareNetwork size={14} weight="bold" /> SHARE
            </button>
            <button className="flex items-center gap-1 hover:text-black transition-colors">
              <Heart size={14} weight="bold" /> 0
            </button>
          </div>

          <Link href={`/blog/${post.slug}`} className="group block mb-6">
            <h2
              className="text-3xl md:text-5xl text-gray-900 group-hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'var(--font-coustard)', lineHeight: '1.2' }}
            >
              {post.title}
            </h2>
          </Link>

          <p
            className="text-gray-500 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-karla)', fontSize: '16px' }}
          >
            {post.excerpt}
          </p>
        </article>
      </div>
    </div>
  );
}
