"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FiZap, FiCpu, FiUsers } from "react-icons/fi";
import { useState, useEffect } from "react";

const About = () => {
  // 各項目ごとにIntersectionObserverを設定
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  // カスタムカーソルの状態
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
      boxShadow: "0 0 15px rgba(255, 215, 0, 0.3), inset 0 0 10px rgba(255, 215, 0, 0.2)",
      border: "1.5px solid rgba(255, 215, 0, 0.6)",
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(255, 215, 0, 0.03)",
      boxShadow: "0 0 20px rgba(255, 215, 0, 0.4), inset 0 0 15px rgba(255, 215, 0, 0.1)",
      border: "1.5px solid rgba(255, 215, 0, 0.8)",
      scale: 1.05,
    },
  };

  // ホバー状態の変更関数
  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

  const features = [
    {
      icon: <FiZap className="text-amber-300 text-3xl" />,
      title: "低予算で動画を作りたい",
      description: "限られた予算でも高品質な動画制作を実現します。PROMO AIでは、AIによる自動生成技術と人間のクリエイティブディレクションを最適に組み合わせることで、コストを大幅に削減。従来の制作フローでは高額な費用がかかっていた工程の多くを効率化し、予算を抑えながらもプロフェッショナルな品質の映像コンテンツを提供します。企業規模や予算に関わらず、魅力的な動画マーケティングを実現できるソリューションです。",
      imageAlt: "低コスト動画制作の図",
      imageSrc: "/images/About_1.png",
      ref: ref1,
      inView: inView1,
    },
    {
      icon: <FiCpu className="text-amber-300 text-3xl" />,
      title: "短期間で動画を作りたい",
      description: "従来の数週間〜数ヶ月かかる動画制作プロセスを、わずか数日で完成させます。PROMO AIのシステムでは、コンセプト立案からスクリプト作成、映像生成、編集までの工程を最適化。AIによる高速なコンテンツ生成と、熟練したプロによる効率的なディレクションにより、スピーディーな制作サイクルを実現しています。急なプロモーション要件や、タイムリーなコンテンツ配信が必要な場面でも、品質を犠牲にすることなく短納期で対応可能です。",
      imageAlt: "短納期動画制作の図",
      imageSrc: "/images/About_2.png",
      ref: ref2,
      inView: inView2,
    },
    {
      icon: <FiUsers className="text-amber-300 text-3xl" />,
      title: "新しい表現を試したい",
      description: "最先端のAI技術と創造性豊かなクリエイターの知見を組み合わせ、革新的な映像表現を実現します。常に進化するAI映像生成技術を活用することで、従来の制作手法では難しかった表現や、コスト面で断念していた演出も可能に。さらに、業界経験豊富なクリエイターが最新のトレンドやテクニックを取り入れながら、ブランドの個性を活かした独自性のある映像制作をサポートします。他社と差別化できる、印象に残るコンテンツで視聴者の心を掴みます。",
      imageAlt: "革新的表現技術の図",
      imageSrc: "/images/About_3.png",
      ref: ref3,
      inView: inView3,
    },
  ];

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 70,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  // 装飾的な背景要素のアニメーション
  const decorVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
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
        className="fixed w-1.5 h-1.5 bg-amber-300 rounded-full pointer-events-none z-50"
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

      <section 
        id="about" 
        className="py-36 md:py-44 relative overflow-hidden cursor-none"
        style={{
          backgroundImage: "url('/images/背景2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative"
        }}
        onMouseEnter={leaveHover}
      >
        {/* 暗いオーバーレイ */}
        <div 
          className="absolute inset-0 bg-black opacity-60 z-10"
        ></div>
        
        <div className="container-custom relative z-20">
          <div className="flex flex-col items-start mb-16">
            <div className="flex items-center mb-6">
              <div className="inline-block border border-amber-300/30 rounded-full px-6 py-2">
                <span className="text-amber-100 font-medium">About</span>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="mb-10"
            >
              <h2 
                className="text-6xl md:text-7xl font-bold tracking-tight text-white"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                PROMO AIとは
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
                className="text-6xl md:text-8xl font-bold tracking-tight leading-none"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500">
                  ACCELERATE
                </span>
              </h2>
              <h2 
                className="text-6xl md:text-8xl font-bold tracking-tight leading-none"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500">
                  PROMOTION.
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-col space-y-36 mt-32 md:mt-40 lg:mt-48">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                ref={feature.ref}
                variants={itemVariants}
                initial="hidden"
                animate={feature.inView ? "visible" : "hidden"}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                {/* 画像エリア */}
                                <div className="md:w-1/2 relative overflow-hidden rounded-xl group">
                  {/* 外側の装飾的なグロー効果 */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 via-amber-300/20 to-amber-600/30 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* 動く背景パターン */}
                  <div className="absolute inset-0.5 rounded-xl overflow-hidden z-0">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-black/50 to-amber-700/20 animate-subtle-shift"></div>
                  </div>
                  
                  <div className="aspect-[16/9] bg-black/60 backdrop-blur-md border border-amber-500/30 rounded-xl flex items-center justify-center shadow-xl shadow-amber-500/15 relative z-10">
                    {/* 内側の光の効果 */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-amber-300/15 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 via-amber-300/10 to-amber-500/30 rounded-xl blur-sm"></div>
                    
                    {/* ホログラフィック効果 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%] animate-shimmer"></div>
                    
                    {feature.imageSrc ? (
                      <>
                        <Image 
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          fill
                          className="object-cover rounded-xl z-10 group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* 上部の光沢効果 */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-amber-200/20 to-transparent rounded-t-xl z-20 pointer-events-none"></div>
                        {/* 下部の光沢効果 */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-900/30 to-transparent rounded-b-xl z-20 pointer-events-none"></div>
                      </>
                    ) : (
                      <div className="text-amber-400/70 text-lg z-10">画像がここに入ります</div>
                    )}
                    
                    {/* 角の装飾 - より洗練されたデザイン */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400/80 rounded-tl-xl z-20"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400/80 rounded-tr-xl z-20"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400/80 rounded-bl-xl z-20"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400/80 rounded-br-xl z-20"></div>
                    
                    {/* 中央の装飾的なアクセント - 各コーナーに小さな光の点 */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                  </div>
                  
                  {/* 装飾的な光の線 */}
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"></div>
                  <div className="absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"></div>
                </div>
                
                {/* テキストエリア */}
                <div className="md:w-1/2">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-silver border-l-4 border-amber-400 pl-4">
                      {feature.title}
                    </h3>
                    <p className="text-amber-100/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 