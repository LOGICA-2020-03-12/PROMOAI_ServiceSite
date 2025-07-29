"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface EstimateData {
  genre: string;
  quantity: string;
  duration: string;
  shooting: string;
  planning: string;
  revisions: string;
  graphics: string;
  camera: string;
  schedule: string;
  delivery: string;
}

interface EstimateResult {
  basePrice: number;
  monthlyPrice: number;
  details: EstimateData;
}

interface Question {
  id: keyof EstimateData;
  question: string;
  options: string[] | ((data: EstimateData) => string[]);
  conditional?: (data: EstimateData) => boolean;
}

const EstimateSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [estimateData, setEstimateData] = useState<EstimateData>({
    genre: "",
    quantity: "",
    duration: "",
    shooting: "",
    planning: "",
    revisions: "",
    graphics: "",
    camera: "",
    schedule: "",
    delivery: "",
  });

  const questions: Question[] = [
    {
      id: "genre",
      question: "制作ジャンルは？",
      options: ["SNS動画", "ネット広告", "マニュアル・研修・対談動画", "画像制作"],
    },
    {
      id: "quantity",
      question: "納品本数は？",
      options: (data: EstimateData) => {
        if (data.genre === "SNS動画") {
          return ["月5〜10本（週1以上ペース）", "月10本以上（本格運用）"];
        }
        return ["1本（単発で試したい）", "月5〜10本（週1以上ペース）", "月10本以上（本格運用）"];
      },
    },
    {
      id: "duration",
      question: "納品尺・形式は？",
      options: ["〜6秒（超短尺）", "15〜30秒", "60秒〜"],
      conditional: (data: EstimateData) => data.genre === "SNS動画" || data.genre === "ネット広告",
    },
    {
      id: "shooting",
      question: "撮影は必要？",
      options: ["必要（実写 or アバター含む）", "不要（素材持ち込み）", "撮影あり＋アバター希望"],
    },
    {
      id: "planning",
      question: "演出・企画・構成は依頼したい？",
      options: ["はい（フル企画込み）", "部分的に（構成のみ／ナレーションのみ）", "いいえ（素材・構成すべて支給）"],
    },
    {
      id: "revisions",
      question: "修正回数の希望は？",
      options: ["1回まででOK", "2回以上したい", "修正無制限希望（要相談）"],
    },
    {
      id: "graphics",
      question: "テロップ・図解・チャプターなどは必要？",
      options: ["フル対応希望（研修・対談など）", "軽い字幕だけあればOK", "なしでいい"],
    },
    {
      id: "camera",
      question: "複数カメ構成やCG演出は希望する？",
      options: ["はい（2カメ構成 or CG演出あり）", "一部検討中（オプションで見積もり）", "いいえ（1カメ固定）"],
    },
    {
      id: "schedule",
      question: "制作スケジュールは？",
      options: ["通常納期（2〜3週間）", "急ぎ対応（1週間以内）", "特に指定なし"],
    },
    {
      id: "delivery",
      question: "納品形式の希望は？",
      options: ["完パケ（完成動画納品）", "編集データ（Premiere / AEなど）", "両方欲しい（+α）"],
    },
  ];

  // オプションを取得する関数
  const getOptions = (question: Question, data: EstimateData): string[] => {
    if (typeof question.options === 'function') {
      return question.options(data);
    }
    return question.options;
  };

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentStep].id as keyof EstimateData;
    setEstimateData(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 見積もり計算
      calculateEstimate();
    }
  };

  const calculateEstimate = () => {
    // 見積もり計算ロジック
    let basePrice = 0;
    let multiplier = 1;
    let additionalCosts = 0;

    // ジャンル別基本価格
    switch (estimateData.genre) {
      case "SNS動画":
        basePrice = 30000;
        break;
      case "ネット広告":
        basePrice = 200000;
        break;
      case "マニュアル・研修・対談動画":
        basePrice = 150000;
        break;
      case "画像制作":
        basePrice = 5000;
        break;
    }

    // 企画費用
    if (estimateData.planning === "はい（フル企画込み）") {
      multiplier *= 1.3;
    }

    // 修正回数
    if (estimateData.revisions === "2回以上したい") {
      additionalCosts += basePrice * 0.2;
    } else if (estimateData.revisions === "修正無制限希望（要相談）") {
      additionalCosts += basePrice * 0.5;
    }

    // スケジュール
    if (estimateData.schedule === "急ぎ対応（1週間以内）") {
      multiplier *= 1.25;
    }

    // 納品形式
    if (estimateData.delivery === "編集データ（Premiere / AEなど）") {
      multiplier *= 1.25;
    } else if (estimateData.delivery === "両方欲しい（+α）") {
      multiplier *= 1.25;
    }

    const totalPrice = Math.round(basePrice * multiplier + additionalCosts);
    const monthlyPrice = estimateData.quantity.includes("月") ? 
      Math.round(totalPrice * (estimateData.quantity.includes("5〜10") ? 7 : 10)) : totalPrice;

    setEstimateResult({
      basePrice: totalPrice,
      monthlyPrice,
      details: estimateData
    });
  };

  const [estimateResult, setEstimateResult] = useState<EstimateResult | null>(null);

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-zinc-900 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              見積もりシミュレーター
            </h1>
            <p className="text-xl text-gray-400">
              あなたの要件に合わせた詳細な見積もりをシミュレーション
            </p>
          </div>

          {/* プログレスバー */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">
                質問 {currentStep + 1} / {questions.length}
              </span>
              <span className="text-sm text-gray-400">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!estimateResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-800 rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-white mb-8">
                  {currentQuestion.question}
                </h2>
                
                <div className="space-y-4">
                  {getOptions(currentQuestion, estimateData).map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left p-6 bg-zinc-700 hover:bg-zinc-600 rounded-xl border border-zinc-600 hover:border-amber-500 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white text-lg">{option}</span>
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-800 rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  見積もり結果
                </h2>
                
                <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl p-6 mb-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-500 mb-2">
                      ¥{estimateResult.basePrice.toLocaleString()}〜
                    </p>
                    <p className="text-gray-400">
                      {estimateData.quantity.includes("月") ? 
                        `月額目安: ¥${estimateResult.monthlyPrice.toLocaleString()}〜` : 
                        "1本あたり"
                      }
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">選択された条件</h3>
                  {Object.entries(estimateData).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-zinc-700">
                      <span className="text-gray-400">{questions.find(q => q.id === key)?.question}</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center space-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    詳細条件を詰めて正式お見積もりへ
                  </Link>
                  <button
                    onClick={() => {
                      setCurrentStep(0);
                      setEstimateData({
                        genre: "",
                        quantity: "",
                        duration: "",
                        shooting: "",
                        planning: "",
                        revisions: "",
                        graphics: "",
                        camera: "",
                        schedule: "",
                        delivery: "",
                      });
                      setEstimateResult(null);
                    }}
                    className="block mx-auto text-gray-400 hover:text-white transition-colors"
                  >
                    もう一度シミュレーション
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EstimateSimulator; 