"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCpu, FiTarget, FiZap, FiShield, FiDatabase, FiCloud } from "react-icons/fi";

export default function DXAIConsultingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // カスタムカーソル用の状態
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // マウスの位置を追跡
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // カーソルのバリアント
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2)",
      border: "1.5px solid rgba(255, 255, 255, 0.6)",
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1)",
      border: "1.5px solid rgba(255, 255, 255, 0.8)",
      scale: 1.05,
    },
  };

  // ホバー状態の変更関数
  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

  // サービス特徴
  const features = [
    "DX戦略の立案・実行支援",
    "AI導入の最適化提案",
    "業務プロセスのデジタル化",
    "データ活用基盤の構築",
    "組織変革のサポート",
    "継続的な改善支援"
  ];

  // 対応領域
  const serviceAreas = [
    {
      title: "DX戦略立案",
      icon: FiTarget,
      description: "企業のデジタル変革戦略の策定と実行計画の立案",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI導入支援",
      icon: FiCpu,
      description: "AI技術の選定から導入、運用まで一貫サポート",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "業務効率化",
      icon: FiZap,
      description: "既存業務の分析とデジタル化による効率化",
      color: "from-green-500 to-green-600"
    },
    {
      title: "データ戦略",
      icon: FiDatabase,
      description: "データ活用基盤の構築と分析体制の確立",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "クラウド移行",
      icon: FiCloud,
      description: "クラウド環境への移行計画と実行支援",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "セキュリティ強化",
      icon: FiShield,
      description: "デジタル化に伴うセキュリティ対策の強化",
      color: "from-red-500 to-red-600"
    }
  ];



  return (
    <main className="bg-[#1a1a1a] cursor-none">
      {/* ヘッダーセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/DX推進.jpg"
            alt="DX推進／AIコンサル"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* ナビゲーション */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="container-custom py-6">
            <Link 
              href="/#services" 
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300"
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              <FiArrowLeft className="mr-2" />
              <span>サービス一覧に戻る</span>
            </Link>
          </div>
        </div>

        {/* ヘッダーコンテンツ */}
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-block border border-white/30 rounded-full px-6 py-2 mb-6">
              <span className="text-white font-medium">DX & AI Consulting</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            DX推進／AIコンサル
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed"
          >
            企業のデジタル変革を戦略的に支援し、AI技術の最適な活用を実現。<br />
            業務効率化から競争力強化まで、包括的なDXコンサルティングを提供します。
          </motion.p>
        </div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* サービス特徴セクション */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              サービスの特徴
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              企業のデジタル変革を成功に導く、戦略的で実践的なコンサルティングサービスを提供します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center min-h-[120px]"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <div className="text-center">
                  <h3 className="text-white font-semibold leading-relaxed">{feature}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応領域セクション */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              対応領域
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DX推進とAI活用における幅広い領域で、専門的なコンサルティングを提供します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <area.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{area.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTAセクション */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* 無料相談ボタン */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                無料相談する
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="text-gray-400 text-base mt-6">
                DX推進やAI導入について、専門コンサルタントが無料でご相談をお受けします
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* カスタムカーソル */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
     
      {/* カーソルの内側の点 */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-50"
        style={{
          x: mousePosition.x - 0.75,
          y: mousePosition.y - 0.75,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 25,
          mass: 0.2,
        }}
      />
    </main>
  );
} 