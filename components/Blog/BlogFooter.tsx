import Link from "next/link";
import { getTags } from "@/lib/blog";
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, Heart } from "@phosphor-icons/react/dist/ssr";

export default function BlogFooter() {
  const tags = getTags();

  return (
    <footer className="w-full bg-white pt-20 pb-10">
      <div className="page-container px-4 sm:px-8 max-w-7xl mx-auto">
        
        {/* Thick Black Line */}
        <div className="w-full h-1 bg-gray-900 mb-16"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 font-body">
          
          {/* ME Column */}
          <div className="flex flex-col gap-4 text-xs">
            <h4 className="font-display font-bold uppercase tracking-[0.2em] text-gray-900 text-[10px] mb-2">Me</h4>
            <p className="text-gray-500 hover:text-gray-900 transition-colors">Sérgio Paula</p>
            <p className="text-gray-500 hover:text-gray-900 transition-colors">UX Designer</p>
          </div>

          {/* REACH Column */}
          <div className="flex flex-col gap-4 text-xs">
            <h4 className="font-display font-bold uppercase tracking-[0.2em] text-gray-900 text-[10px] mb-2">Reach</h4>
            <a href="mailto:hello@sergiopaula.com" className="text-gray-500 hover:text-azul-1 transition-colors">hello@sergiopaula.com</a>
            <p className="text-gray-500 hover:text-gray-900 transition-colors">+55 11 99999-9999</p>
          </div>

          {/* CATEGORIES Column */}
          <div className="flex flex-col gap-4 text-xs">
             <h4 className="font-display font-bold uppercase tracking-[0.2em] text-gray-900 text-[10px] mb-2">Categorias</h4>
             {tags.map(tag => (
                <Link key={tag} href={`/blog/tags/${tag.toLowerCase()}`} className="text-gray-500 hover:text-azul-1 transition-colors">
                  {tag}
                </Link>
             ))}
          </div>

          {/* LEGAL & SOCIAL Column */}
          <div className="flex flex-col gap-4 text-xs">
             <h4 className="font-display font-bold uppercase tracking-[0.2em] text-gray-900 text-[10px] mb-2">Legal</h4>
             <Link href="/legal/termos-de-uso" className="text-gray-500 hover:text-azul-1 transition-colors">Termos de Uso</Link>
             <Link href="/legal/politica-de-privacidade" className="text-gray-500 hover:text-azul-1 transition-colors">Política de Privacidade</Link>
             <Link href="/legal/politica-de-cookies" className="text-gray-500 hover:text-azul-1 transition-colors">Política de Cookies</Link>
             
             <div className="flex gap-4 mt-4 text-gray-400">
              <a href="#" className="hover:text-gray-900 transition-colors"><TwitterLogo size={16} weight="fill" /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><FacebookLogo size={16} weight="fill" /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><InstagramLogo size={16} weight="bold" /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><LinkedinLogo size={16} weight="fill" /></a>
             </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100 mb-8"></div>

        {/* Copyright & Crafted With */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-[10px] font-display font-bold uppercase tracking-widest text-gray-400 gap-2">
          <span>CRAFTED WITH</span>
          <Heart size={12} weight="fill" className="text-gray-900" />
          <span>BY SÉRGIO PAULA</span>
        </div>

      </div>
    </footer>
  );
}
