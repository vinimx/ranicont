import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  DM_Serif_Display,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/* ── Fonts ── */
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ranicont.com.br";

/* ── Viewport ── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000080",
};

/* ── Root Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Escritório Ranicont — Contabilidade em Avaré SP",
    template: "%s | Escritório Ranicont",
  },
  description:
    "Serviços contábeis, fiscais, trabalhistas e de assessoria para empresas e pessoas físicas em Avaré – SP. Mais de 20 anos de experiência. Fale pelo WhatsApp.",
  keywords: [
    "contabilidade Avaré",
    "escritório contábil Avaré SP",
    "abertura de empresa Avaré",
    "departamento pessoal Avaré",
    "planejamento tributário",
    "MEI Avaré",
    "Ranicont",
    "contador Avaré",
  ],
  authors: [{ name: "Escritório Ranicont", url: SITE_URL }],
  creator: "Escritório Ranicont",
  publisher: "Escritório Ranicont",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/img/brand/logo.png", type: "image/png", sizes: "any" },
    ],
    apple: { url: "/img/brand/logo.png", type: "image/png" },
    shortcut: "/img/brand/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Escritório Ranicont",
    title: "Escritório Ranicont — Contabilidade em Avaré SP",
    description:
      "Contabilidade profissional em Avaré – SP. Abertura de empresas, departamento pessoal, planejamento tributário e muito mais.",
    images: [
      {
        url: "/img/brand/logo.png",
        width: 512,
        height: 512,
        alt: "Ranicont Escritório Contábil",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Escritório Ranicont — Contabilidade em Avaré SP",
    description:
      "Contabilidade profissional em Avaré – SP. Fale pelo WhatsApp.",
    images: ["/img/brand/logo.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const fontVariables = [
  playfairDisplay.variable,
  dmSerifDisplay.variable,
  dmSans.variable,
  jetbrainsMono.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={fontVariables}>
      <body className="page-transition-wrapper">
        {/* T42 — Skip navigation for keyboard/screen-reader users */}
        <a href="#main-content" className="skip-nav">
          Pular para o conteúdo principal
        </a>

        <Header />
        <PageTransition>
          <main id="main-content" style={{ flex: 1 }}>
            {children}
          </main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
