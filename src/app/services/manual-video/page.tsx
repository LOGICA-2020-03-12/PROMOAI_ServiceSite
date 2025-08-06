"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiUsers, FiTarget, FiBook, FiVideo } from "react-icons/fi";

export default function ManualVideoPage() {
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
    "書面マニュアルの動画化",
    "アニメーション・CGを活用した分かりやすい説明",
    "チーム全体の認識統一",
    "業務効率化の実現",
    "教育効果の向上",
    "コスト削減と品質向上"
  ];

  // 活用シーン
  const useCases = [
    {
      title: "業務マニュアル",
      icon: FiBook,
      description: "新入社員研修や業務手順の標準化",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "製品説明動画",
      icon: FiVideo,
      description: "製品の使用方法や機能説明",
      color: "from-green-500 to-green-600"
    },
    {
      title: "安全教育",
      icon: FiUsers,
      description: "安全作業手順や注意事項の周知",
      color: "from-red-500 to-red-600"
    },
    {
      title: "システム操作",
      icon: FiTarget,
      description: "社内システムの操作方法説明",
      color: "from-purple-500 to-purple-600"
    }
  ];



  return (
    <main className="bg-[#1a1a1a] cursor-none">
      {/* ヘッダーセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/マニュアル動画制作.jpg"
            alt="マニュアル動画制作(法人向け)"
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
              <span className="text-white font-medium">Manual Video Production for Business</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-7xl font-bold tracking-tight mb-6"
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            <span className="hidden md:inline">
              マニュアル動画制作<br />
              <span className="text-2xl md:text-3xl font-normal text-gray-300">(法人向け)</span>
            </span>
            <span className="md:hidden">
              マニュアル動画制作<br />
              <span className="text-lg font-normal text-gray-300">(法人向け)</span>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed px-4"
          >
            <span className="hidden md:inline">
              書面やデータのマニュアルをベースに、アニメーションやCGを活用した動画マニュアルを制作。<br />
              チームの認識齟齬を解消し、業務効率化と教育効果を実現します。
            </span>
            <span className="md:hidden">
              書面やデータのマニュアルをベースに、<br />
              アニメーションやCGを活用した動画マニュアルを制作します。
            </span>
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
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
              サービスの特徴
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              <span className="hidden md:inline">
                法人企業の教育・研修ニーズに特化した、高品質なマニュアル動画制作サービスを提供します。
              </span>
              <span className="md:hidden">
                法人企業の教育・研修ニーズに特化した、高品質なマニュアル動画制作サービスを提供します。
              </span>
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

      {/* 活用シーンセクション */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
              活用シーン
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              <span className="hidden md:inline">
                様々な業務シーンで活用できるマニュアル動画制作サービスを提供します。
              </span>
              <span className="md:hidden">
                様々な業務シーンで活用できるマニュアル動画制作サービスを提供します。
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <useCase.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
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
              <p className="text-gray-400 text-sm mt-4 hidden md:block">
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