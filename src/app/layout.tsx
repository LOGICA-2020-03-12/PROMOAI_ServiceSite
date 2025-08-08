import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageViewTracker from "@/components/PageViewTracker";
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
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <html lang="ja" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleAnalytics measurementId={measurementId} />
      </head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
