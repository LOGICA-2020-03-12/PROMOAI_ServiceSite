"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 機能のキーの型を定義
  type FeatureKey = 'monthly' | 'sns' | 'weekly' | 'abTesting' | 'dashboard' | 'shooting' | 'massProduction' | 'aiBot' | 'school';

  // 料金プランの型を定義
  interface PricingPlan {
    name: string;
    price: string;
    features: Record<FeatureKey, string>;
    isPopular: boolean;
  }

  const pricingData: PricingPlan[] = [
    {
      name: "スタート",
      price: "XXX,000",
      features: {
        monthly: "月◯本ショート",
        sns: "SNS 基本運用",
        weekly: "―",
        abTesting: "―",
        dashboard: "―",
        shooting: "―",
        massProduction: "―",
        aiBot: "―",
        school: "―"
      },
      isPopular: false,
    },
    {
      name: "グロース",
      price: "XXX,000",
      features: {
        monthly: "月◯本ショート",
        sns: "SNS 基本運用",
        weekly: "週次投稿",
        abTesting: "広告 AB",
        dashboard: "ダッシュボード",
        shooting: "―",
        massProduction: "―",
        aiBot: "―",
        school: "―"
      },
      isPopular: false,
    },
    {
      name: "シングル",
      price: "XXX,000",
      features: {
        monthly: "月◯本ショート",
        sns: "SNS 基本運用",
        weekly: "週次投稿",
        abTesting: "広告 AB",
        dashboard: "ダッシュボード",
        shooting: "撮影",
        massProduction: "量産",
        aiBot: "AI Bot",
        school: "スクール構築"
      },
      isPopular: false,
    },
  ];

  const featureLabels: Record<FeatureKey, string> = {
    monthly: "月間動画本数",
    sns: "SNS運用",
    weekly: "週次投稿",
    abTesting: "広告AB",
    dashboard: "ダッシュボード",
    shooting: "撮影",
    massProduction: "量産",
    aiBot: "AI Bot",
    school: "スクール構築"
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
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">価格</h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></div>
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
                <th className="py-6 px-6 text-left text-lg font-bold text-gray-300">機能</th>
                {pricingData.map((plan, index) => (
                  <th key={index} className="py-6 px-6 text-center text-lg font-bold text-gray-300">
                    {plan.name}
                  </th>
                ))}
              </tr>
              <tr className="bg-blue-950/5 border-b border-gray-800">
                <th className="py-4 px-6 text-left font-medium text-gray-400">月額料金</th>
                {pricingData.map((plan, index) => (
                  <td key={index} className="py-4 px-6 text-center font-bold text-white">
                    ¥{plan.price}<span className="text-sm font-normal text-gray-400">〜/月</span>
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
      </div>
    </section>
  );
};

export default Pricing; 