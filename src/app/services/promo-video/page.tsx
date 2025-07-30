"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiPlay, FiCheck, FiUsers, FiClock, FiTarget } from "react-icons/fi";

const PromoVideoPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: <FiPlay className="w-6 h-6" />,
      title: "高品質な映像制作",
      description: "最新の映像技術とAIを活用し、プロフェッショナルな品質の動画を制作します。"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "短納期対応",
      description: "AI技術を活用した効率的な制作プロセスで、通常より短い納期での制作が可能です。"
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "ターゲット最適化",
      description: "ターゲット層に合わせた最適な映像表現とメッセージングを提案します。"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "専門チーム",
      description: "映像制作の専門家とAI技術者が連携し、クリエイティブと効率性を両立します。"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "ヒアリング・企画",
      description: "お客様のニーズを詳しくヒアリングし、最適な企画を提案します。"
    },
    {
      number: "02",
      title: "脚本・構成",
      description: "ターゲットに響く脚本と映像構成を作成します。"
    },
    {
      number: "03",
      title: "撮影・制作",
      description: "AI技術を活用した効率的な撮影と編集作業を行います。"
    },
    {
      number: "04",
      title: "修正・納品",
      description: "お客様のご要望に応じて修正を行い、最終納品いたします。"
    }
  ];

  return (
    <main className="bg-black text-white">
      {/* ページヘッダー */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/広告プロモーション2.jpg"
          alt="広告用のプロモーション動画制作"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* 戻るボタン */}
        <div className="absolute top-6 left-6 z-10">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-white hover:text-secondary transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2" />
            <span>サービス一覧に戻る</span>
          </Link>
        </div>

        {/* ヘッダーコンテンツ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              広告用のプロモーション動画制作
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto px-6"
            >
              商品やサービスの魅力を最大限に引き出すプロモーション動画を制作します。
              AI技術を活用した効率的な映像制作で、短納期・高品質を実現します。
            </motion.p>
          </div>
        </div>
      </section>

      {/* サービス詳細 */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6">サービス概要</h2>
              <p className="text-gray-300 text-lg mb-6">
                広告用のプロモーション動画は、商品やサービスの価値を効果的に伝え、
                ターゲット層の行動を促す重要なツールです。私たちは、AI技術を活用した
                効率的な制作プロセスにより、高品質な映像を短納期でお届けします。
              </p>
              <p className="text-gray-300 text-lg">
                従来の映像制作では時間とコストがかかっていましたが、AI技術の活用により
                制作効率を大幅に向上させ、お客様により良い価値を提供できるようになりました。
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">制作可能な動画ジャンル</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FiCheck className="text-secondary mr-3 flex-shrink-0" />
                    <span>商品紹介動画</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-secondary mr-3 flex-shrink-0" />
                    <span>サービス説明動画</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-secondary mr-3 flex-shrink-0" />
                    <span>企業PR動画</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-secondary mr-3 flex-shrink-0" />
                    <span>イベント告知動画</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-secondary mr-3 flex-shrink-0" />
                    <span>SNS広告動画</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-secondary mr-3 flex-shrink-0" />
                    <span>Web広告動画</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* 特徴 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
              サービスの特徴
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-secondary/50 transition-colors duration-300"
                >
                  <div className="text-secondary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 制作フロー */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
              制作フロー
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-white/10">
                    <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold mb-6">プロモーション動画制作について</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                お客様の商品やサービスの魅力を最大限に引き出す動画制作をお手伝いします。
                まずはお気軽にご相談ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                お問い合わせ
                <FiArrowLeft className="ml-2 transform rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PromoVideoPage; 