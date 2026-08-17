import Link from 'next/link';
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr';

export default function ArticleNav({ 
  prevSlug, 
  nextSlug 
}: { 
  prevSlug?: string, 
  nextSlug?: string 
}) {
  return (
    <div className="w-full border-t border-b border-gray-200 py-4 flex items-center justify-between my-8 font-display text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
      <div>
        {prevSlug ? (
          <Link href={`/blog/${prevSlug}`} className="flex items-center gap-2 hover:text-black transition-colors">
            <CaretLeft size={16} /> PREVIOUS POST
          </Link>
        ) : <span className="opacity-0">PREVIOUS POST</span>}
      </div>
      
      <div className="flex gap-4">
        {/* Placeholder icons for share in the middle if needed, matching the ref image */}
      </div>

      <div>
        {nextSlug ? (
          <Link href={`/blog/${nextSlug}`} className="flex items-center gap-2 hover:text-black transition-colors">
            NEXT POST <CaretRight size={16} />
          </Link>
        ) : <span className="opacity-0">NEXT POST</span>}
      </div>
    </div>
  );
}
