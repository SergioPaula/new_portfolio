import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/lib/blog';
import { ShareNetwork, Heart } from '@phosphor-icons/react/dist/ssr';
import { format } from 'date-fns';

export default function BlogFeaturedCarousel({ post }: { post: BlogPostMetadata }) {
  let formattedDate = post.date;
  try {
    formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
  } catch {}

  return (
    <article className="w-full bg-white mb-16 relative">
      {/* Imagem full width e 40vh */}
      <Link href={`/blog/${post.slug}`} className="block relative w-full h-[40vh] min-h-[300px] overflow-hidden group">
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </Link>
      
      {/* Card de informações sobreposto ou logo abaixo, de acordo com o design editorial */}
      <div className="w-full bg-white relative -mt-12 md:-mt-16 mx-auto px-6 max-w-4xl z-10">
        <div className="bg-white px-8 md:px-16 pt-10 pb-6 text-center border-t-4 border-gray-900 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 font-body mb-4">
            <span className="border border-gray-200 px-3 py-1 rounded-full">{post.tag}</span>
            <time>{formattedDate}</time>
            <button className="flex items-center gap-1 hover:text-black transition-colors ml-2"><ShareNetwork size={14} weight="bold"/> SHARE</button>
            <button className="flex items-center gap-1 hover:text-black transition-colors"><Heart size={14} weight="bold"/> 0</button>
          </div>
          
          <Link href={`/blog/${post.slug}`} className="group block mb-4">
            <h2 className="text-3xl md:text-5xl text-gray-900 group-hover:text-gray-600 transition-colors" style={{ fontFamily: 'var(--font-coustard)', lineHeight: '1.2' }}>
              {post.title}
            </h2>
          </Link>

          <p className="font-body text-gray-600 line-clamp-2 leading-relaxed text-center mx-auto" style={{ fontFamily: 'var(--font-karla)', fontSize: '16px' }}>
            {post.excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}
