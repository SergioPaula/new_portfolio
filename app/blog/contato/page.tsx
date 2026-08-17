import type { Metadata } from "next";
import BlogNavbar from "@/components/Blog/BlogNavbar";
import BlogFooter from "@/components/Blog/BlogFooter";
import BlogContactForm from "@/components/Blog/BlogContactForm";
import { getTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Contato — Sérgio Paula",
  description: "Entre em contato comigo.",
};

export default function BlogContactPage() {
  const tags = getTags();

  return (
    <>
      <BlogNavbar tags={tags} />
      
      <main className="w-full pb-32 bg-white">
        <div className="page-container px-4 sm:px-8 max-w-2xl mx-auto flex flex-col items-center mt-20">
          
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 text-center" style={{ fontFamily: 'var(--font-coustard)' }}>
            Contact
          </h1>
          
          <p className="font-body text-gray-600 text-center mb-16 text-lg">
            Sinta-se livre para me perguntar o que quiser, sem ressentimentos.
          </p>

          <BlogContactForm />

        </div>
      </main>

      <BlogFooter />
    </>
  );
}
