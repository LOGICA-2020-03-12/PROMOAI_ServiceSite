"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiInstagram, FiTwitter, FiYoutube, FiSmartphone } from "react-icons/fi";

export default function SNSMarketingPage() {
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
    "SNSアカウント運用の一貫サポート",
    "エンゲージメント向上の戦略立案",
    "各プラットフォーム最適化対応",
    "定期的なコンテンツ制作・投稿",
    "データ分析に基づく改善提案",
    "ブランド認知度向上の実現"
  ];

  // SNSプラットフォーム
  const platforms = [
    {
      name: "Instagram",
      icon: FiInstagram,
      description: "ビジュアル重視のコンテンツでブランドイメージを構築",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Twitter/X",
      icon: FiTwitter,
      description: "リアルタイムな情報発信とエンゲージメント向上",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "YouTube",
      icon: FiYoutube,
      description: "動画コンテンツで深いブランドストーリーを展開",
      color: "from-red-500 to-red-700"
    },
    {
      name: "TikTok",
      icon: FiSmartphone,
      description: "トレンドを活用した若年層向けコンテンツ制作",
      color: "from-pink-500 to-purple-600"
    }
  ];

  // 制作フロー
  const workflow = [
    {
      step: "01",
      title: "現状分析・戦略立案",
      description: "現在のSNSアカウントの状況を分析し、ターゲット層や競合調査を基に最適な戦略を立案します。",
      image: "/images/Searvice_images/現状分析・戦略立案.jpg"
    },
    {
      step: "02",
      title: "コンテンツ企画・制作",
      description: "各プラットフォームに最適化されたコンテンツを企画・制作します。動画、画像、テキストを組み合わせた効果的な投稿を作成します。",
      image: "/images/Searvice_images/コンテンツ制作・企画.jpg"
    },
    {
      step: "03",
      title: "定期投稿・運用管理",
      description: "最適なタイミングで定期的に投稿を行い、フォロワーとのエンゲージメントを促進します。コメント対応やメッセージ管理も含みます。",
      image: "/images/Searvice_images/定期投稿・運用管理.jpg"
    },
    {
      step: "04",
      title: "データ分析・改善",
      description: "投稿のパフォーマンスを分析し、エンゲージメント率やリーチ数を向上させるための改善策を提案・実行します。",
      image: "/images/Searvice_images/データ分析・改善.jpg"
    },
    {
      step: "05",
      title: "継続的成長支援",
      description: "定期的なレポート提供と戦略の見直しを行い、SNSアカウントの継続的な成長をサポートします。",
      image: "/images/Searvice_images/_継続的成長支援.jpg"
    }
  ];

  return (
    <main className="bg-[#1a1a1a] cursor-none">
      {/* ヘッダーセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/SNS運用.jpg"
            alt="SNS運用／各種動画制作"
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
              <span className="text-white font-medium">SNS Marketing & Video Production</span>
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
            SNS運用／各種動画制作
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed"
          >
            SNSアカウントの運用代行から、投稿用の動画コンテンツ制作まで一貫してサポート。<br />
            エンゲージメント向上につながるコンテンツ戦略を提案します。
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
              SNSマーケティングと動画制作の専門知識を組み合わせ、効果的なブランド構築を実現します。
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

      {/* SNSプラットフォームセクション */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              対応プラットフォーム
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              各プラットフォームの特性を活かした最適なコンテンツ戦略を提供します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{platform.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 制作フローセクション */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              運用フロー
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5つのステップで、効果的なSNS運用を実現します。
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