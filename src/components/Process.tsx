"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      backgroundColor: "rgba(255, 215, 0, 0.1)",
      border: "1px solid rgba(255, 215, 0, 0.5)",
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(255, 215, 0, 0.15)",
      border: "1px solid rgba(255, 215, 0, 0.8)",
    },
  };

  // ホバー状態の変更関数
  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

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

  // プロセスのステップデータ
  const processSteps = [
    {
      step: "01",
      title: "ヒアリング",
      description: "クライアント様の事業目標とターゲットオーディエンスを深く理解し、明確なKPIを設定します。AIを活用した市場分析により、競合環境や最新トレンドを踏まえた戦略立案の基盤を構築します。",
      icon: HearingIcon,
      isOptional: false,
    },
    {
      step: "02",
      title: "企画・設計",
      description: "AIによるデータ分析と創造的アイデア生成を組み合わせ、効果的なコンセプトと構成を設計します。複数の企画案をシミュレーションし、目標達成に最適な戦略を選定。ストーリーボードやシナリオも迅速に作成します。",
      icon: PlanningIcon,
      isOptional: false,
    },
    {
      step: "03",
      title: "制作",
      description: "最先端のAIツールを駆使した映像・音声制作により、従来の数分の1の時間で高品質なコンテンツを生成します。人間のクリエイターとAIの協働により、クリエイティブの質と量を両立させた多様なバリエーションを実現します。",
      icon: ProductionIcon,
      isOptional: false,
    },
    {
      step: "04",
      title: "配信・運用",
      description: "最適なプラットフォームとタイミングで効率的に配信。リアルタイムデータ分析に基づき、AIが視聴者の反応を予測しながら継続的に運用を最適化します。A/Bテストを自動化し、パフォーマンスを常に向上させます。",
      icon: DeploymentIcon,
      isOptional: true,
    },
    {
      step: "05",
      title: "レポート",
      description: "直感的なダッシュボードで成果をリアルタイムに可視化。AIによる高度な分析で、視聴者行動や感情反応まで詳細に把握できます。データに基づく次回施策の提案と、長期的な改善サイクルの構築をサポートします。",
      icon: ReportIcon,
      isOptional: true,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section id="process" className="pt-10 pb-20 md:pt-10 md:pb-28 bg-zinc-900 cursor-none">
      <div className="container-custom relative z-20">
        <div className="text-center mb-16">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight text-white"
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            制作プロセス
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
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
                <p className="text-amber-100/70 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 p-6 bg-black/50 backdrop-blur-sm rounded-lg border-l-4 border-amber-400/70">
          <p className="text-lg">
            <strong className="text-amber-300">AI活用</strong> により、従来の制作プロセスを効率化し、<strong className="text-amber-300">スピード</strong>と<strong className="text-amber-300">品質</strong>を両立します。各ステップでデータとクリエイティブの融合を実現し、<strong className="text-amber-300">最大限の成果</strong>を生み出します。
          </p>
        </div>
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
    </section>
  );
};

export default Process; 