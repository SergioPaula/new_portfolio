import type { Metadata } from "next";
import BlogNavbar from "@/components/Blog/BlogNavbar";
import BlogFooter from "@/components/Blog/BlogFooter";
import BlogHeroCarousel from "@/components/Blog/BlogHeroCarousel";
import BlogFeatured from "@/components/Blog/BlogFeatured";
import BlogCard from "@/components/Blog/BlogCard";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import { getAllPosts, getTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Sérgio Paula",
  description: "Artigos e reflexões sobre design, branding, UX e carreira.",
};

export default async function BlogPage() {
  const posts = getAllPosts();
  const tags = getTags();
  
  const featuredPost = posts.find(post => post.meta.featured)?.meta || posts[0]?.meta;
  const regularPosts = posts.filter(post => post.meta.slug !== featuredPost?.slug).map(p => p.meta);

  return (
    <>
      <BlogNavbar tags={tags} />
      
      {/* NOVO CARROSSEL NO TOPO */}
      <BlogHeroCarousel />

      <main className="w-full py-20 bg-white">
        <div className="page-container px-4 sm:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content: 80% (3/4) */}
          <div className="w-full lg:w-3/4">
            
            {/* O artigo principal agora fica no topo da coluna da esquerda */}
            {featuredPost && (
              <BlogFeatured post={featuredPost} />
            )}

            {/* Grid dos demais artigos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-t border-gray-100 pt-16">
              {regularPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            
          </div>

          {/* Sidebar: 20% (1/4) */}
          <div className="w-full lg:w-1/4">
            <BlogSidebar tags={tags} recentPosts={posts.map(p => p.meta)} />
          </div>

        </div>
      </main>
      <BlogFooter />
    </>
  );
}

