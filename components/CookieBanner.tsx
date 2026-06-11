"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield, BarChart3, Settings, Check } from "lucide-react";
import Link from "next/link";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
  });

  // Carrega as preferências salvas na montagem (evitando erros de SSR)
  useEffect(() => {
    try {
      const savedChoice = localStorage.getItem("cookie-consent-choice");
      if (!savedChoice) {
        setIsVisible(true);
      } else {
        const parsed = JSON.parse(savedChoice);
        setPreferences({
          essential: true,
          analytics: !!parsed.analytics,
        });
      }
    } catch (error) {
      console.error("Falha ao ler cookies de consentimento:", error);
      setIsVisible(true);
    }
  }, []);

  // Salva o consentimento e despacha o evento global
  const saveConsent = (updatedPrefs: CookiePreferences) => {
    try {
      localStorage.setItem("cookie-consent-choice", JSON.stringify(updatedPrefs));
      
      // Despacha evento personalizado para que outros componentes (ex: AnalyticsTracker)
      // atualizem seu estado em tempo real sem recarregar a página
      window.dispatchEvent(new Event("cookie-consent-updated"));
      
      setIsVisible(false);
    } catch (error) {
      console.error("Falha ao salvar preferências de cookies:", error);
      setIsVisible(false);
    }
  };

  const handleAcceptAll = () => {
    const allPrefs = { essential: true, analytics: true };
    setPreferences(allPrefs);
    saveConsent(allPrefs);
  };

  const handleRejectAll = () => {
    const necessaryOnly = { essential: true, analytics: false };
    setPreferences(necessaryOnly);
    saveConsent(necessaryOnly);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essencial é sempre obrigatório
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Botão flutuante sutil para revogar consentimento no rodapé
  const [showRevokeButton, setShowRevokeButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão de revogar se o banner não estiver visível
      if (!isVisible) {
        setShowRevokeButton(true);
      } else {
        setShowRevokeButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Checagem inicial
    if (!isVisible) setShowRevokeButton(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <>
      {/* Banner Principal de Consentimento */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-[9999] w-[calc(100vw-3rem)] max-w-[420px]"
          >
            {/* Caixa com Efeito Glassmorphism Premium */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/80 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-950/80">
              
              {/* Cabeçalho */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--azul-1)] text-white">
                    <Cookie className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-wide text-zinc-900 dark:text-zinc-100">
                      Preferências de Privacidade
                    </h3>
                    <p className="font-sans text-[11px] text-zinc-500 dark:text-zinc-400">
                      Nós respeitamos o seu direito à privacidade.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRejectAll}
                  className="rounded-full p-1 text-zinc-400 hover:bg-neutral-100 hover:text-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
                  aria-label="Recusar e fechar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Conteúdo Principal */}
              {!showPreferences ? (
                // Visão Geral Simplificada
                <div className="mt-4">
                  <p className="font-sans text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Este site utiliza cookies para fins estatísticos (como analisar acessos com o Google Analytics) para podermos melhorar constantemente seu conteúdo. Leia nossa{" "}
                    <Link
                      href="/legal/politica-de-cookies"
                      className="font-medium text-[var(--azul-1)] underline hover:text-[var(--azul-dark)]"
                    >
                      Política de Cookies
                    </Link>{" "}
                    para mais informações.
                  </p>

                  {/* Ações principais */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4 dark:border-zinc-900">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                    >
                      <Settings className="h-3.5 w-3.5" />
                      Personalizar
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleRejectAll}
                        className="cursor-pointer rounded-full border border-neutral-200 bg-transparent px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-700 hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-zinc-50 transition-all active:scale-95"
                      >
                        Recusar
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="cursor-pointer rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[var(--azul-1)] dark:bg-white dark:text-black dark:hover:bg-[var(--azul-1)] dark:hover:text-white transition-all active:scale-95 shadow-md shadow-black/5"
                      >
                        Aceitar Todos
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Painel de Preferências Granulares (Expandido)
                <div className="mt-4">
                  <div className="space-y-3.5">
                    
                    {/* Item 1: Cookies Essenciais */}
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-neutral-100/50 bg-neutral-50/50 p-3 dark:border-zinc-900/50 dark:bg-zinc-900/20">
                      <div className="flex items-start gap-2.5">
                        <Shield className="mt-0.5 h-4 w-4 text-emerald-500" />
                        <div>
                          <h4 className="font-sans text-xs font-bold text-zinc-800 dark:text-zinc-200">
                            Necessários (Obrigatórios)
                          </h4>
                          <p className="mt-0.5 font-sans text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                            Essenciais para o funcionamento básico do site e armazenamento das suas preferências.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <div className="h-5 w-8 rounded-full bg-emerald-500/20 flex items-center justify-end px-1 dark:bg-emerald-500/10">
                          <div className="h-3.5 w-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <Check className="h-2 w-2" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 2: Cookies Analíticos */}
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-neutral-100 bg-transparent p-3 dark:border-zinc-900">
                      <div className="flex items-start gap-2.5">
                        <BarChart3 className="mt-0.5 h-4 w-4 text-[var(--azul-1)]" />
                        <div>
                          <h4 className="font-sans text-xs font-bold text-zinc-800 dark:text-zinc-200">
                            Analíticos (Google Analytics)
                          </h4>
                          <p className="mt-0.5 font-sans text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                            Coletam dados anônimos de tráfego que nos ajudam a entender como o blog é utilizado para produzir novos posts.
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePreference("analytics")}
                        className="cursor-pointer relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none"
                        style={{
                          backgroundColor: preferences.analytics ? "var(--azul-1)" : "#d4d4d4",
                        }}
                      >
                        <span
                          className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform duration-200 shadow-sm"
                          style={{
                            transform: preferences.analytics ? "translateX(18px)" : "translateX(3px)",
                          }}
                        />
                      </button>
                    </div>

                  </div>

                  {/* Ações do modo expandido */}
                  <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-zinc-900">
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="cursor-pointer text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Voltar
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleRejectAll}
                        className="cursor-pointer rounded-full border border-neutral-200 bg-transparent px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-700 hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-zinc-50 transition-all active:scale-95"
                      >
                        Essenciais Apenas
                      </button>
                      <button
                        onClick={handleSavePreferences}
                        className="cursor-pointer rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[var(--azul-1)] dark:bg-white dark:text-black dark:hover:bg-[var(--azul-1)] dark:hover:text-white transition-all active:scale-95"
                      >
                        Salvar Escolhas
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pequeno Botão no rodapé para Reabrir Preferências */}
      <AnimatePresence>
        {showRevokeButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => {
              setIsVisible(true);
              setShowPreferences(true);
            }}
            className="fixed bottom-4 left-4 z-[9998] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-200/50 bg-white/90 text-zinc-600 shadow-lg backdrop-blur-md transition-all dark:border-zinc-800/50 dark:bg-zinc-950/90 dark:text-zinc-300 hover:text-[var(--azul-1)]"
            title="Preferências de privacidade e cookies"
            aria-label="Configurações de privacidade"
          >
            <Cookie className="h-4.5 w-4.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
