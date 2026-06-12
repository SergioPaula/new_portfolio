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

  // ID do Google Tag Manager (GTM) obtido das variáveis de ambiente (ou fallback para teste)
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P9HL277B";

  // Se o ID não estiver configurado ou o consentimento for falso, não insere o script
  if (!allowAnalytics || !GTM_ID) {
    return null;
  }

  return (
    <>
      {/* Script principal do Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  );
}
