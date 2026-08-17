import Link from 'next/link';
import { BlogPostMetadata } from '@/lib/blog';

export default function BlogSidebar({ tags, recentPosts }: { tags: string[], recentPosts: BlogPostMetadata[] }) {
  return (
    <aside className="flex flex-col gap-12 w-full">
      {/* Categories Widget */}
      <div>
        <h3 className="font-display uppercase tracking-[0.2em] text-[11px] font-bold text-gray-900 border-b-2 border-limao-1 inline-block pb-1 mb-6">
          CATEGORIES
        </h3>
        <ul className="flex flex-col gap-3">
          {tags.map(tag => (
            <li key={tag}>
              <Link href={`/blog/tags/${tag.toLowerCase()}`} className="font-display font-bold text-gray-800 hover:text-limao-1 transition-colors text-sm" style={{ fontFamily: 'var(--font-coustard)' }}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-[6px] mt-8 bg-[url('/images/blog/stripe-pattern.png')] bg-repeat-x opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ff5b35 0, #ff5b35 10px, white 10px, white 20px, #00a8d9 20px, #00a8d9 30px, white 30px, white 40px)'}}></div>
      </div>

      {/* Recent Posts Widget */}
      <div>
        <h3 className="font-display uppercase tracking-[0.2em] text-[11px] font-bold text-gray-900 border-b-2 border-limao-1 inline-block pb-1 mb-6">
          RECENT POSTS
        </h3>
        <ul className="flex flex-col gap-5">
          {recentPosts.slice(0, 5).map(post => (
            <li key={post.slug} className="border-b border-gray-100 pb-4 last:border-0">
              <Link href={`/blog/${post.slug}`} className="font-display font-normal text-gray-800 hover:text-gray-500 transition-colors text-sm leading-snug block" style={{ fontFamily: 'var(--font-coustard)' }}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Ad/Promo Widget Placeholder */}
      <div className="relative aspect-square w-full bg-gray-900 flex items-center justify-center p-6 text-center group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:bg-black/60"></div>
        <div className="relative z-20 flex flex-col items-center gap-2">
           <span className="border border-white/50 text-white uppercase text-[10px] tracking-widest px-2 py-1">THE BLOGGER</span>
           <h4 className="text-white font-bold text-xl uppercase tracking-widest mt-2" style={{ fontFamily: 'var(--font-coustard)' }}>START BLOGGING NOW</h4>
        </div>
      </div>
    </aside>
  );
}
