import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getLegalBySlug, getLegalSlugs, getTags } from '@/lib/blog';
import BlogNavbar from '@/components/Blog/BlogNavbar';
import BlogFooter from '@/components/Blog/BlogFooter';
import Link from 'next/link';
import { DownloadSimple } from '@phosphor-icons/react/dist/ssr';

export async function generateStaticParams() {
  const slugs = getLegalSlugs();
  return slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => ({
      slug: slug.replace(/\.mdx$/, ''),
    }));
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegalBySlug(slug);

  if (!page) {
    notFound();
  }

  const tags = getTags();

  return (
    <>
      <BlogNavbar tags={tags} />
      <main className="w-full pb-20 bg-white">
        
        <div className="page-container px-4 sm:px-8 max-w-4xl mx-auto mb-10 mt-16 text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontFamily: 'var(--font-coustard)', lineHeight: '1.2' }}>
            {page.meta.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-gray-500 font-body mb-8">
            <span>Última atualização: {page.meta.lastUpdated}</span>
            {page.meta.downloadUrl && (
              <>
                <span className="hidden sm:inline text-gray-300">|</span>
                <Link 
                  href={page.meta.downloadUrl} 
                  target="_blank" 
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 hover:bg-azul-1 transition-colors"
                >
                  <DownloadSimple size={16} weight="bold" /> Baixar PDF
                </Link>
              </>
            )}
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-6"></div>
        </div>

        <div className="page-container px-4 sm:px-8 max-w-4xl mx-auto">
            <article className="prose prose-blog max-w-none w-full">
              <MDXRemote source={page.content} />
            </article>
        </div>

      </main>
      <BlogFooter />
    </>
  );
}
