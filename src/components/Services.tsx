"use client";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
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

  // サービス一覧
  const services = [
    {
      id: "Service_promotion-video",
      title: "広告用のプロモーション動画制作",
      description: "商品やサービスの魅力を最大限に引き出すプロモーション動画を制作します。AI技術を活用した効率的な映像制作で、短納期・高品質を実現します。",
      imageUrl: "/images/広告プロモーション2.jpg",
    },
    {
      id: "sns-marketing",
      title: "SNS運用／各種動画制作",
      description: "SNSアカウントの運用代行から、投稿用の動画コンテンツ制作まで一貫してサポート。エンゲージメント向上につながるコンテンツ戦略を提案します。",
      imageUrl: "/images/SNS運用.jpg",
    },
    {
      id: "manual-video",
      title: "マニュアル動画制作(法人向け)",
      description: "書面やデータのマニュアルをベースに、アニメーションやCGを活用した動画マニュアルを制作。チームの認識齟齬を解消し、業務効率化と教育効果を実現します。",
      imageUrl: "/images/マニュアル動画制作.jpg",
    },
    {
      id: "dx-ai-consulting",
      title: "DX推進／AIコンサル派遣",
      description: "企業のDX推進をサポートするAI専門コンサルタントを派遣。業務効率化から新規事業創出まで、AI技術の活用方法を提案します。",
      imageUrl: "/images/DX推進.jpg",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-dark cursor-none">
      <div className="container-custom relative">
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center mb-6">
            <div className="inline-block border border-white/30 rounded-full px-6 py-2">
              <span className="text-white font-medium">Services</span>
            </div>
          </div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={titleVariants}
            className="mb-8"
          >
            <h2 
              className="text-6xl md:text-7xl font-bold tracking-tight text-white"
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              サービス概要
            </h2>
          </motion.div>
        </div>
        
        <div className="absolute right-0 top-0 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-right"
          >
            <h2 
              className="text-5xl md:text-[8rem] font-bold tracking-tight leading-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                OFFERING
              </span>
            </h2>
            <h2 
              className="text-5xl md:text-[8rem] font-bold tracking-tight leading-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                SUMMARY.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* サブタイトルのテキストの高さ分、余白を追加 */}
        <div className="pt-10 md:pt-20 lg:pt-28"></div>

        {/* サービス一覧（2列表示） */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-primary/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              {/* サムネイル画像エリア */}
              <div className="w-full aspect-[2/1] relative bg-gray-800 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* コンテンツエリア */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                {/* 詳細ページへのボタン */}
                <Link 
                  href={`/services/${service.id}`} 
                  className="inline-flex items-center text-secondary hover:text-white transition-colors group text-lg font-semibold"
                >
                  <span className="mr-3">詳細を見る</span>
                  <FiArrowRight className="transform group-hover:translate-x-1 transition-transform text-xl" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
    </section>
  );
};

export default Services; 