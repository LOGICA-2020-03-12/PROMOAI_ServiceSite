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



  // カスタムラインアイコンコンポーネント
  const HearingIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-300">
      <path d="M10 8H22C23.1046 8 24 8.89543 24 10V18C24 19.1046 23.1046 20 22 20H18L14 24V20H10C8.89543 20 8 19.1046 8 18V10C8 8.89543 8.89543 8 10 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const PlanningIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-300">
      <path d="M6 5H26C27.1046 5 28 5.89543 28 7V25C28 26.1046 27.1046 27 26 27H6C4.89543 27 4 26.1046 4 25V7C4 5.89543 4.89543 5 6 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 16H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const ProductionIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-300">
      <rect x="4" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22H22V24C22 25.1046 21.1046 26 20 26H12C10.8954 26 10 25.1046 10 24V22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 14H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const DeploymentIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-300">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 16L14 20V12L20 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const ReportIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-300">
      <path d="M4 16H8L12 8L20 24L24 16H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const features = [
    {
      icon: <FiZap className="text-amber-300 text-3xl" />,
      title: "低予算で動画を作りたい",
      description: "限られた予算でも高品質な動画制作を実現します。PROMO AIでは、AIによる自動生成技術と人間のクリエイティブディレクションを最適に組み合わせることで、コストを大幅に削減。従来の制作フローでは高額な費用がかかっていた工程の多くを効率化し、予算を抑えながらもプロフェッショナルな品質の映像コンテンツを提供します。企業規模や予算に関わらず、魅力的な動画マーケティングを実現できるソリューションです。",
      imageAlt: "低コスト動画制作の図",
      imageSrc: "/images/About_1.jpg",
      ref: ref1,
      inView: inView1,
      number: "01",
    },
    {
      icon: <FiCpu className="text-amber-300 text-3xl" />,
      title: "短期間で動画を作りたい",
      description: "従来の数週間〜数ヶ月かかる動画制作プロセスを、わずか数日で完成させます。PROMO AIのシステムでは、コンセプト立案からスクリプト作成、映像生成、編集までの工程を最適化。AIによる高速なコンテンツ生成と、熟練したプロによる効率的なディレクションにより、スピーディーな制作サイクルを実現しています。急なプロモーション要件や、タイムリーなコンテンツ配信が必要な場面でも、品質を犠牲にすることなく短納期で対応可能です。",
      imageAlt: "短納期動画制作の図",
      imageSrc: "/images/About_2.jpg",
      ref: ref2,
      inView: inView2,
      number: "02",
    },
    {
      icon: <FiUsers className="text-amber-300 text-3xl" />,
      title: "新しい表現を試したい",
      description: "最先端のAI技術と創造性豊かなクリエイターの知見を組み合わせ、革新的な映像表現を実現します。常に進化するAI映像生成技術を活用することで、従来の制作手法では難しかった表現や、コスト面で断念していた演出も可能に。さらに、業界経験豊富なクリエイターが最新のトレンドやテクニックを取り入れながら、ブランドの個性を活かした独自性のある映像制作をサポートします。他社と差別化できる、印象に残るコンテンツで視聴者の心を掴みます。",
      imageAlt: "革新的表現技術の図",
      imageSrc: "/images/About_3.jpg",
      ref: ref3,
      inView: inView3,
      number: "03",
    },
  ];

  const comparisonData = [
    {
      item: "制作スピード",
      traditional: "週〜月単位",
      promoAi: "日単位 改善",
    },
    {
      item: "体制",
      traditional: "分業・多窓",
      promoAi: "1窓・横断チーム",
    },
    {
      item: "クリエイティブ量産",
      traditional: "難しい",
      promoAi: "AI 生成で多変量",
    },
    {
      item: "データ活用",
      traditional: "月次レポート",
      promoAi: "ダッシュボード即時",
    },
    {
      item: "コスト透明性",
      traditional: "工数膨張",
      promoAi: "プラン固定＋成果連動",
    },
    {
      item: "ノウハウ蓄積",
      traditional: "担当依存",
      promoAi: "使用ツール共有",
    },
  ];

  // プロセスのステップデータ
  const processSteps = [
    {
      step: "01",
      title: "ヒアリング",
      description: "クライアント様の事業目標とターゲットオーディエンスを深く理解し、明確なKPIを設定します。AIを活用した市場分析により、競合環境や最新トレンドを踏まえた戦略立案の基盤を構築します。",
      mobileDescription: "事業目標とターゲットを理解し、KPIを設定。AI分析で戦略立案の基盤を構築。",
      icon: HearingIcon,
      isOptional: false,
    },
    {
      step: "02",
      title: "企画・設計",
      description: "AIによるデータ分析と創造的アイデア生成を組み合わせ、効果的なコンセプトと構成を設計します。複数の企画案をシミュレーションし、目標達成に最適な戦略を選定。ストーリーボードやシナリオも迅速に作成します。",
      mobileDescription: "AI分析と創造的アイデアでコンセプト設計。複数案から最適な戦略を選定。",
      icon: PlanningIcon,
      isOptional: false,
    },
    {
      step: "03",
      title: "制作",
      description: "最先端のAIツールを駆使した映像・音声制作により、従来の数分の1の時間で高品質なコンテンツを生成します。人間のクリエイターとAIの協働により、クリエイティブの質と量を両立させた多様なバリエーションを実現します。",
      mobileDescription: "AIツールで高速・高品質なコンテンツ生成。人間とAIの協働で質と量を両立。",
      icon: ProductionIcon,
      isOptional: false,
    },
    {
      step: "04",
      title: "配信・運用",
      description: "最適なプラットフォームとタイミングで効率的に配信。リアルタイムデータ分析に基づき、AIが視聴者の反応を予測しながら継続的に運用を最適化します。A/Bテストを自動化し、パフォーマンスを常に向上させます。",
      mobileDescription: "最適なプラットフォームで配信。AI分析で運用を最適化し、パフォーマンス向上。",
      icon: DeploymentIcon,
      isOptional: true,
    },
    {
      step: "05",
      title: "レポート",
      description: "直感的なダッシュボードで成果をリアルタイムに可視化。AIによる高度な分析で、視聴者行動や感情反応まで詳細に把握できます。データに基づく次回施策の提案と、長期的な改善サイクルの構築をサポートします。",
      mobileDescription: "リアルタイムダッシュボードで成果を可視化。AI分析で次回施策を提案。",
      icon: ReportIcon,
      isOptional: true,
    }
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



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const compareItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const processContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const processItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="about" 
      className="py-20 md:py-44 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/背景3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
        {/* 暗いオーバーレイ */}
        <div 
          className="absolute inset-0 bg-black opacity-60 z-10"
        ></div>
        
        <div className="container-custom relative z-20">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-16">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="inline-block border border-amber-300/30 rounded-full px-6 py-2">
                <span className="text-amber-100 font-medium">About</span>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="mb-6 md:mb-10 text-center md:text-left"
            >
              {/* デスクトップ用タイトル */}
              <h2 
                className="hidden md:block text-6xl md:text-7xl font-bold tracking-tight text-white"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                PROMO AIとは
              </h2>
              
              {/* スマホ用タイトル */}
              <h2 
                className="md:hidden text-3xl font-bold tracking-tight text-white"
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                PROMO AIとは
              </h2>
            </motion.div>
          </div>
          
          {/* デスクトップ用サブタイトル */}
          <div className="absolute right-0 top-0 z-10 pointer-events-none hidden md:block">
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

          <div className="flex flex-col space-y-16 md:space-y-36 mt-8 md:mt-32 lg:mt-40">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                ref={feature.ref}
                variants={itemVariants}
                initial="hidden"
                animate={feature.inView ? "visible" : "hidden"}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-16`}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                {/* 画像エリア */}
                <div className="md:w-1/2 relative rounded-xl group">
                  {/* 番号表示 - 画像の上部に配置（スマホ時は非表示） */}
                  <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 z-30 hidden md:block">
                    <div className="relative">
                      <div className="text-5xl md:text-7xl lg:text-8xl font-black text-amber-500/15 leading-none tracking-wider">
                        {feature.number}
                      </div>
                      <div className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-black text-amber-500/35 leading-none tracking-wider">
                        {feature.number}
                      </div>
                    </div>
                  </div>
                  
                  {/* 外側の装飾的なグロー効果 */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 via-amber-300/20 to-amber-600/30 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* 動く背景パターン */}
                  <div className="absolute inset-0.5 rounded-xl overflow-hidden z-0">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-black/50 to-amber-700/20 animate-subtle-shift"></div>
                  </div>
                  
                  <div className="aspect-[16/9] bg-black/60 backdrop-blur-md border border-amber-500/30 rounded-xl flex items-center justify-center shadow-xl shadow-amber-500/15 relative z-10 overflow-hidden">
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
                    <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-amber-400/80 rounded-tl-xl z-20"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-amber-400/80 rounded-tr-xl z-20"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-amber-400/80 rounded-bl-xl z-20"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-amber-400/80 rounded-br-xl z-20"></div>
                    
                    {/* 中央の装飾的なアクセント - 各コーナーに小さな光の点 */}
                    <div className="absolute top-1.5 left-1.5 md:top-2 md:left-2 w-0.5 h-0.5 md:w-1 md:h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                    <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-0.5 h-0.5 md:w-1 md:h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                    <div className="absolute bottom-1.5 left-1.5 md:bottom-2 md:left-2 w-0.5 h-0.5 md:w-1 md:h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                    <div className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 w-0.5 h-0.5 md:w-1 md:h-1 bg-amber-300 rounded-full shadow-glow-sm z-20"></div>
                  </div>
                  
                  {/* 装飾的な光の線（デスクトップのみ） */}
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 hidden md:block"></div>
                  <div className="absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 hidden md:block"></div>
                </div>
                
                {/* テキストエリア */}
                <div className="md:w-1/2">
                  <div className="mb-4">
                    {/* スマホ用の番号表示 */}
                    <div className="flex items-center mb-3 md:hidden">
                      <span className="text-2xl font-black text-amber-500/60 mr-3">{feature.number}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-amber-400/30 to-transparent"></div>
                    </div>
                    
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6 text-silver border-l-4 border-amber-400 pl-3 md:pl-4">
                      {feature.title}
                    </h3>
                    <p className="text-amber-100/80 leading-relaxed text-sm md:text-base line-clamp-4 md:line-clamp-none">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 従来の動画制作 vs PROMO AI セクション */}
        <div className="container-custom relative z-20 mt-20">
          <div className="text-center mb-16">
            <h2 
              className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              従来の動画制作 vs{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">
                PROMO AI
              </span>
            </h2>
          </div>

          {/* デスクトップ用の表 */}
          <div className="hidden md:block overflow-x-auto">
            <motion.table
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full border-collapse"
            >
              <thead>
                <tr className="bg-gradient-to-r from-blue-950 via-blue-950 to-blue-950 border-b border-gray-700">
                  <th className="py-6 px-6 text-left text-lg font-bold text-gray-300">項目</th>
                  <th className="py-6 px-6 text-left text-lg font-bold text-gray-300">従来の動画制作</th>
                  <th className="py-6 px-6 text-left text-lg font-bold text-amber-300">
                    PROMO AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={compareItemVariants}
                    className={`border-b border-gray-800 ${index % 2 === 0 ? 'bg-blue-950/10' : 'bg-blue-950/5'} hover:bg-amber-900/10 transition-all duration-300`}
                  >
                    <td className="py-5 px-6 font-medium text-gray-300">{row.item}</td>
                    <td className="py-5 px-6 text-gray-500">{row.traditional}</td>
                    <td className="py-5 px-6 font-medium text-amber-300 bg-blue-950/20">
                      <span className="font-bold">{row.promoAi}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>

          {/* スマホ用のカード形式 */}
          <div className="md:hidden space-y-6">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                variants={compareItemVariants}
                initial="hidden"
                animate="visible"
                className="bg-blue-950/30 backdrop-blur-sm rounded-xl border border-gray-600/40 p-6 shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="text-amber-300 font-bold text-xl mb-3 border-b border-amber-500/30 pb-2">{row.item}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/40 rounded-lg border border-gray-500/30">
                    <span className="text-gray-300 text-base font-medium">従来の動画制作</span>
                    <span className="text-gray-400 font-semibold text-lg">{row.traditional}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-900/30 rounded-lg border border-amber-400/40 shadow-sm">
                    <span className="text-amber-200 text-base font-bold">PROMO AI</span>
                    <span className="text-amber-300 font-bold text-lg">{row.promoAi}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-black/50 backdrop-blur-sm rounded-lg border-l-4 border-amber-400/70">
            <p className="text-lg">
              <strong className="text-amber-300">スピード・一貫性・改善回数</strong> が成果を決定。PROMO AI は3点を AI で底上げ。
            </p>
          </div>
        </div>

        {/* 制作プロセスセクション */}
        <div className="container-custom relative z-20 mt-20">
          <div className="text-center mb-16">
            <h2 
              className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              制作プロセス
            </h2>
          </div>

          <motion.div
            variants={processContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={processItemVariants}
                  className={`${step.isOptional ? 'bg-black/30 border-dashed' : 'bg-black/40 border-solid'} backdrop-blur-sm rounded-lg p-6 border border-amber-900/30 hover:border-amber-400/40 transition-all duration-300 flex flex-col h-full`}
                  onMouseEnter={enterHover}
                  onMouseLeave={leaveHover}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-amber-300/80 mr-2">{step.step}</span>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-amber-400/30 to-transparent"></div>
                    {step.isOptional && (
                      <span className="text-xs font-medium text-amber-500 ml-2 px-2 py-1 border border-amber-500/30 rounded-full">オプション</span>
                    )}
                  </div>
                  <div className="mb-5 flex justify-center">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-amber-100">{step.title}</h3>
                  <p className="text-amber-100/70 text-sm hidden md:block">{step.description}</p>
                  <p className="text-amber-100/70 text-sm md:hidden">{step.mobileDescription}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-12 p-6 bg-black/50 backdrop-blur-sm rounded-lg border-l-4 border-amber-400/70">
            <p className="text-lg hidden md:block">
              <strong className="text-amber-300">AI活用</strong> により、従来の制作プロセスを効率化し、<strong className="text-amber-300">スピード</strong>と<strong className="text-amber-300">品質</strong>を両立します。各ステップでデータとクリエイティブの融合を実現し、<strong className="text-amber-300">最大限の成果</strong>を生み出します。
            </p>
            <p className="text-base md:hidden">
              <strong className="text-amber-300">AI活用</strong>により、<strong className="text-amber-300">スピード</strong>と<strong className="text-amber-300">品質</strong>を両立。最大限の成果を実現します。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 