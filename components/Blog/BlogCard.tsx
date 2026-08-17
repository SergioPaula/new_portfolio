import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/lib/blog';
import { ShareNetwork, Heart } from '@phosphor-icons/react/dist/ssr';
import { format } from 'date-fns';

export default function BlogCard({ post }: { post: BlogPostMetadata }) {
  // Format date correctly if valid
  let formattedDate = post.date;
  try {
    formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
  } catch {
    // Keep original string if invalid
  }

  return (
    <article className="flex flex-col gap-4 mb-12">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] md:aspect-square overflow-hidden group">
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 font-body mt-2">
        <span className="border border-gray-200 px-3 py-1 rounded-full">{post.tag}</span>
        <time>{formattedDate}</time>
        <button className="flex items-center gap-1 hover:text-black transition-colors ml-2"><ShareNetwork size={14} weight="bold"/> SHARE</button>
        <button className="flex items-center gap-1 hover:text-black transition-colors"><Heart size={14} weight="bold"/> 0</button>
      </div>

      <Link href={`/blog/${post.slug}`} className="group text-center">
        <h2 className="text-2xl md:text-3xl text-gray-900 group-hover:text-gray-600 transition-colors mx-auto max-w-[90%]" style={{ fontFamily: 'var(--font-coustard)' }}>
          {post.title}
        </h2>
      </Link>

      <p className="font-body text-gray-600 line-clamp-3 leading-relaxed text-center mx-auto max-w-[95%]" style={{ fontFamily: 'var(--font-karla)', fontSize: '15px' }}>
        {post.excerpt}
      </p>

      <div className="mt-4 text-center">
         <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center font-display uppercase tracking-[0.2em] text-[11px] text-gray-900 hover:text-gray-500 transition-colors border-b border-gray-300 pb-1">
          Read More &rarr;
        </Link>
      </div>
    </article>
  );
}
