"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 機能のキーの型を定義
  type FeatureKey = 'monthly' | 'sns' | 'weekly' | 'dashboard' | 'shooting';

  // 料金プランの型を定義
  interface PricingPlan {
    name: string;
    price: string;
    features: Record<FeatureKey, string>;
    isPopular: boolean;
  }

  const pricingData: PricingPlan[] = [
    {
      name: "SNS動画",
      price: "30,000",
      features: {
        monthly: "5本〜/月",
        sns: "Instagram/TikTok/YouTube",
        weekly: "1本〜/週",
        dashboard: "リアルタイム共有",
        shooting: "可能/AIアバターの使用可"
      },
      isPopular: false,
    },
    {
      name: "プロモーション広告動画",
      price: "200,000",
      features: {
        monthly: "―",
        sns: "―",
        weekly: "―",
        dashboard: "―",
        shooting: "可能/AIアバター使用可"
      },
      isPopular: false,
    },
    {
      name: "バナー制作",
      price: "5,000",
      features: {
        monthly: "20枚〜/月",
        sns: "―",
        weekly: "―",
        dashboard: "―",
        shooting: "―"
      },
      isPopular: false,
    },
  ];

  const featureLabels: Record<FeatureKey, string> = {
    monthly: "月間制作数",
    sns: "SNS運用",
    weekly: "投稿頻度",
    dashboard: "ダッシュボード",
    shooting: "撮影"
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
    <section id="pricing" className="section-padding bg-zinc-900">
      <div className="container-custom relative">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="inline-block border border-white/30 rounded-full px-6 py-2">
              <span className="text-white font-medium">Pricing</span>
            </div>
          </div>
          
          <div className="mb-6 md:mb-8 text-center md:text-left">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">価格</h2>
          </div>
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
              className="text-5xl md:text-[8rem] font-bold tracking-tight leading-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                PRICING
              </span>
            </h2>
            <h2 
              className="text-5xl md:text-[8rem] font-bold tracking-tight leading-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                DETAILS.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* PRICING DETAILSのテキストの高さ分、余白を追加（デスクトップのみ） */}
        <div className="pt-0 md:pt-20 lg:pt-28"></div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* スマホ用スクロールインジケーター */}
          <div className="md:hidden mb-4 flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-blue-950/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30">
              <svg className="w-4 h-4 text-blue-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-blue-200 text-sm font-medium">横スクロールで詳細を確認</span>
              <svg className="w-4 h-4 text-blue-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* スクロール可能なコンテナ */}
          <div className="overflow-x-auto md:overflow-visible">
            {/* スクロールグラデーション効果（スマホのみ） */}
            <div className="md:hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none"></div>
            </div>

            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-2xl min-w-[600px] md:min-w-0">
              <thead>
                <tr className="bg-gradient-to-r from-blue-950 via-blue-950 to-blue-950 border-b border-gray-700">
                  <th className="py-6 px-6 text-left text-lg font-bold text-gray-300">項目</th>
                  {pricingData.map((plan, index) => (
                    <th key={index} className="py-6 px-6 text-center text-lg font-bold text-gray-300">
                      {plan.name}
                    </th>
                  ))}
                </tr>
                <tr className="bg-blue-950/5 border-b border-gray-800">
                  <th className="py-4 px-6 text-left font-medium text-gray-400">料金</th>
                  {pricingData.map((plan, index) => (
                    <td key={index} className="py-4 px-6 text-center font-bold text-white">
                      ¥{plan.price}<span className="text-sm font-normal text-gray-400">〜/本</span>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(featureLabels).map((key, idx) => (
                  <motion.tr
                    key={idx}
                    variants={itemVariants}
                    className={`border-b border-gray-800 ${idx % 2 === 0 ? 'bg-blue-950/10' : 'bg-blue-950/5'} hover:bg-amber-900/10 transition-all duration-300`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-300">{featureLabels[key as FeatureKey]}</td>
                    {pricingData.map((plan, planIdx) => (
                      <td key={planIdx} className="py-4 px-6 text-center text-gray-400">
                        {plan.features[key as FeatureKey] === "―" ? 
                          <span className="text-gray-600">―</span> : 
                          <span>{plan.features[key as FeatureKey]}</span>
                        }
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* スマホ用スクロール完了インジケーター */}
          <div className="md:hidden mt-4 flex items-center justify-center">
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <span>表を横スクロールして全てのプランを確認できます</span>
            </div>
          </div>
        </motion.div>
        
        {/* 見積もりシミュレーターボタン */}
        <div className="text-center mt-12">
          <Link
            href="/estimate"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
      </div>
    </section>
  );
};

export default Pricing; 