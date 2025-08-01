"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiPlay, FiCheck, FiClock, FiDollarSign, FiUsers } from "react-icons/fi";

export default function PromotionVideoPage() {
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
    "AI技術を活用した効率的な制作プロセス",
    "短納期・高品質の映像制作",
    "商品・サービスの魅力を最大限に引き出す企画",
    "ターゲット層に響くストーリーテリング",
    "SNS対応の最適化された動画フォーマット",
    "データ分析に基づく効果的なコンテンツ戦略"
  ];

  // 制作フロー
  const workflow = [
    {
      step: "01",
      title: "ヒアリング・企画",
      description: "お客様の商品・サービスの特徴、ターゲット層、目的を詳しくヒアリングし、最適な企画を提案します。",
      image: "/images/Searvice_images/企画.jpg"
    },
    {
      step: "02",
      title: "シナリオ・絵コンテ制作",
      description: "企画に基づいてシナリオを作成し、視覚的な絵コンテで制作イメージを共有します。",
      image: "/images/Searvice_images/絵コンテ.jpg"
    },
    {
      step: "03",
      title: "撮影・素材制作",
      description: "プロのカメラマンによる高品質な撮影と、必要に応じてCG・アニメーション素材を制作します。",
      image: "/images/Searvice_images/撮影.jpg"
    },
    {
      step: "04",
      title: "編集・仕上げ",
      description: "AI技術を活用した効率的な編集作業で、魅力的な映像に仕上げます。",
      image: "/images/Searvice_images/編集.jpg"
    },
    {
      step: "05",
      title: "納品・効果測定",
      description: "最適なフォーマットで納品し、効果測定のサポートも提供します。",
      image: "/images/Searvice_images/効果測定.jpg"
    }
  ];

  return (
    <main className="bg-[#1a1a1a] cursor-none">
      {/* ヘッダーセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/広告プロモーション2.jpg"
            alt="広告用のプロモーション動画制作"
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
              <span className="text-white font-medium">Promotion Video Production</span>
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
            広告用のプロモーション動画制作
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            商品やサービスの魅力を最大限に引き出すプロモーション動画を制作します。<br />
            AI技術を活用した効率的な映像制作で、短納期・高品質を実現します。
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
              AI技術とクリエイティブの融合で、従来の映像制作では実現できない効率性と品質を提供します。
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

      {/* 制作フローセクション */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              制作フロー
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5つのステップで、お客様のビジョンを形にします。
            </p>
          </motion.div>

          <div className="space-y-8">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-white/10 relative overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
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
            {/* 見積もりシミュレーターボタン */}
            <div>
              <Link
                href="/estimate"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                見積もりシミュレーター
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                あなたの要件に合わせた詳細な見積もりをシミュレーション
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