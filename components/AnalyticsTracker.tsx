"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function AnalyticsTracker() {
  const [allowAnalytics, setAllowAnalytics] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const savedChoice = localStorage.getItem("cookie-consent-choice");
        if (savedChoice) {
          const parsed = JSON.parse(savedChoice);
          setAllowAnalytics(!!parsed.analytics);
        } else {
          setAllowAnalytics(false);
        }
      } catch (error) {
        console.error("Falha ao analisar consentimento do Analytics:", error);
        setAllowAnalytics(false);
      }
    };

    // Checagem na montagem do componente
    checkConsent();

    // Ouvir evento personalizado disparado pelo CookieBanner em tempo real
    window.addEventListener("cookie-consent-updated", checkConsent);

    return () => {
      window.removeEventListener("cookie-consent-updated", checkConsent);
    };
  }, []);

  // ID do Google Analytics (GA4) obtido das variáveis de ambiente (ou fallback para teste)
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

  // Se o ID não estiver configurado de verdade, ou o consentimento for falso, não insere o script
  if (!allowAnalytics || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    return null;
  }

  return (
    <>
      {/* Script principal do gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {/* Inicialização do dataLayer e configuração */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
