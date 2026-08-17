import type { Metadata } from "next";
import BlogNavbar from "@/components/Blog/BlogNavbar";
import BlogFooter from "@/components/Blog/BlogFooter";
import Image from "next/image";
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { getTags } from "@/lib/blog";
import { BLUR_AVATAR } from "@/lib/placeholders";

export const metadata: Metadata = {
  title: "Sobre o Autor — Sérgio Paula",
  description: "Conheça mais sobre o Sérgio, designer e escritor deste blog.",
};

export default function BlogAboutPage() {
  const tags = getTags();

  return (
    <>
      <BlogNavbar tags={tags} />
      
      <main className="w-full pb-32 bg-white">
        <article className="page-container px-4 sm:px-8 max-w-3xl mx-auto flex flex-col items-center mt-12">
          
          {/* Avatar Circular Centralizado */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative mb-12 shadow-sm">
            <Image
              src="/images/Gemini_Generated_Image_g0nh2ag0nh2ag0nh.png"
              alt="Sérgio Paula"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
              placeholder="blur"
              blurDataURL={BLUR_AVATAR}
              priority
            />
          </div>

          {/* Texto de Apresentação (Provisório) */}
          <div className="prose prose-blog text-center max-w-2xl mb-16">
            <p className="text-gray-600 font-body" style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Olá, que bom que você chegou até aqui para saber um pouco mais sobre mim. Eu sou o Sérgio, um apaixonado por entender como as pessoas interagem com o mundo digital e como podemos desenhar experiências que não apenas funcionam, mas encantam.
            </p>
            <p className="text-gray-600 font-body" style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Como designer de produtos e UX strategist, passo meus dias traduzindo complexidade em interfaces limpas. Mas como escritor neste espaço, meu objetivo é compartilhar as lições aprendidas, os erros cometidos e as epifanias diárias que surgem quando você passa tempo demais encarando pixels e jornadas de usuário.
            </p>
            <p className="text-gray-600 font-body" style={{ fontSize: '18px', lineHeight: '1.8' }}>
              Sinta-se à vontade para me perguntar qualquer coisa, discordar de mim nos artigos, ou apenas acompanhar os bastidores do design. Sem ressentimentos.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center gap-6 w-full pt-8 border-t border-gray-100">
            <h3 className="font-display uppercase tracking-[0.2em] text-[11px] font-bold text-gray-900">
              Siga-me
            </h3>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:text-black hover:border-black transition-colors">
                <FacebookLogo size={16} weight="fill" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:text-black hover:border-black transition-colors">
                <TwitterLogo size={16} weight="fill" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:text-black hover:border-black transition-colors">
                <InstagramLogo size={16} weight="bold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:text-black hover:border-black transition-colors">
                <LinkedinLogo size={16} weight="fill" />
              </a>
            </div>
          </div>

        </article>
      </main>

      <BlogFooter />
    </>
  );
}
