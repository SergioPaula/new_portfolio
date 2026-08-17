"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";

export default function BlogNavbar({ tags }: { tags: string[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50">
      
      {/* ── DESKTOP & TABLET VIEW ── */}
      <div className="hidden md:flex w-full items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="/blog" className="text-3xl tracking-tight text-gray-900 transition-colors hover:text-azul-1 font-display">
          SÉRGIO PAULA
        </Link>

        <nav>
          <ul className="flex items-center gap-8 font-body text-[11px] uppercase tracking-widest font-semibold text-black">
            <li>
              <Link href="/blog" className="hover:text-azul-1 transition-colors">HOME</Link>
            </li>
            
            <li className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="flex items-center gap-1 hover:text-azul-1 transition-colors focus:outline-none uppercase font-semibold">
                CATEGORIAS <CaretDown size={12} weight="bold" />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-4"
                  >
                    <div className="bg-[#171717] min-w-[200px] py-4 flex flex-col">
                      {tags.map(tag => (
                        <Link 
                          key={tag} 
                          href={`/blog/tags/${tag.toLowerCase()}`}
                          className="px-6 py-2.5 text-[10px] text-gray-300 hover:text-azul-1 hover:bg-white/10 transition-colors block uppercase font-semibold"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/" className="hover:text-azul-1 transition-colors">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="/blog/sobre-mim" className="hover:text-azul-1 transition-colors">SOBRE MIM</Link>
            </li>
            <li>
              <Link href="/blog/contato" className="hover:text-azul-1 transition-colors">CONTATO</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ── MOBILE VIEW ── */}
      <div className="md:hidden flex flex-col w-full bg-white">
        {/* Top Logo */}
        <div className="w-full flex justify-center py-6">
           <Link href="/blog" className="text-4xl tracking-tight text-gray-900 transition-colors hover:text-azul-1 font-display">
            SÉRGIO PAULA
          </Link>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[2px] bg-[#171717]"></div>

        {/* Hamburger and Socials Bar */}
        <div className="w-full flex justify-between items-center px-4 py-3 border-b border-gray-100">
           <button 
             onClick={() => setMenuOpen(!menuOpen)}
             className="p-2 text-gray-900 hover:text-azul-1 transition-colors focus:outline-none"
             aria-label="Abrir menu"
           >
             {menuOpen ? <X size={24} /> : <List size={24} />}
           </button>
           
           <div className="flex items-center gap-4 text-gray-400">
              <span className="text-xs font-body uppercase tracking-widest">Follow Me</span>
           </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-white border-b border-gray-100"
            >
              <ul className="flex flex-col py-4 px-6 font-body text-xs uppercase tracking-widest font-semibold text-black gap-6">
                <li><Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-azul-1 transition-colors">HOME</Link></li>
                
                <li className="flex flex-col gap-4">
                  <span className="text-gray-400 border-b border-gray-100 pb-2">CATEGORIAS</span>
                  <div className="flex flex-col gap-3 pl-4">
                    {tags.map(tag => (
                        <Link key={tag} href={`/blog/tags/${tag.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-azul-1 transition-colors uppercase font-semibold">
                          {tag}
                        </Link>
                    ))}
                  </div>
                </li>

                <li><Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-azul-1 transition-colors">PORTFOLIO</Link></li>
                <li><Link href="/blog/sobre-mim" onClick={() => setMenuOpen(false)} className="hover:text-azul-1 transition-colors">SOBRE MIM</Link></li>
                <li><Link href="/blog/contato" onClick={() => setMenuOpen(false)} className="hover:text-azul-1 transition-colors">CONTATO</Link></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
