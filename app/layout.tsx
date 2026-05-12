import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sérgio Paula — Designer Gráfico & Digital",
  description:
    "Portfolio de Sérgio Paula, designer gráfico e digital com 15+ anos de experiência. Transformo ideias em mensagens claras, impossíveis de ignorar.",
  icons: {
    icon: "/images/Gemini_Generated_Image_trb0cctrb0cctrb0.png",
  },
  openGraph: {
    title: "Sérgio Paula — Designer Gráfico & Digital",
    description: "Transformo ideias em mensagens claras, impossíveis de ignorar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
