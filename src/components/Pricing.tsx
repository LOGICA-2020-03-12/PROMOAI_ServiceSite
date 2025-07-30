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
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">価格</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-2xl">
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
          <p className="text-gray-400 text-sm mt-4">
            あなたの要件に合わせた詳細な見積もりをシミュレーション
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 