import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import GoogleTagManager from "@/components/GoogleTagManager";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROMO AI | 生成AI×プロフェッショナル プロモーションを加速させる",
  description: "PROMO AI が SNS・広告・動画・AI 活用を一気通貫で高速 PDCA。少数精鋭 × AI 自動化で成果までショートカット。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="ja" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
