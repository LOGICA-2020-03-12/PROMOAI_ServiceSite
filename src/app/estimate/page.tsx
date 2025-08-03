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

interface Question {
  id: keyof EstimateData;
  question: string;
  options: string[] | ((data: EstimateData) => string[]);
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
      options: ["SNS動画（ショートorロング）", "動画広告（縦型 / 横型どちらも可）", "マニュアル・研修・対談動画", "画像制作（バナー / ポスター・フライヤー / ロゴ）"],
    },
    {
      id: "quantity",
      question: "納品本数は？",
      options: (data: EstimateData) => {
        if (data.genre === "SNS動画（ショートorロング）") {
          return [
            "ショート 月5〜10本（週1以上ペース）",
            "ショート 月10本以上（本格運用）",
            "ロング 月5〜10本（週1以上ペース）",
            "ロング 月10本以上（本格運用）"
          ];
        } else if (data.genre === "動画広告（縦型 / 横型どちらも可）") {
          return ["1本", "5本", "10本以上"];
        } else if (data.genre === "マニュアル・研修・対談動画") {
          return ["1本", "5本", "10本以上"];
        } else if (data.genre === "画像制作（バナー / ポスター・フライヤー / ロゴ）") {
          return ["1本", "5本", "10本"];
        }
        return [];
      },
    },
    {
      id: "duration",
      question: "納品尺・形式は？",
      options: (data: EstimateData) => {
        if (data.genre === "SNS動画（ショートorロング）") {
          // ショートかロングかを判定
          const isShort = data.quantity.includes("ショート");
          if (isShort) {
            return ["1分以内"];
          } else {
            return ["15分以内", "30分", "60分"];
          }
        } else if (data.genre === "動画広告（縦型 / 横型どちらも可）") {
          return ["6秒", "15秒", "30秒", "60秒"];
        } else if (data.genre === "マニュアル・研修・対談動画") {
          return ["15分以内", "30分", "60分"];
        } else if (data.genre === "画像制作（バナー / ポスター・フライヤー / ロゴ）") {
          return ["画像生成のみ", "画像生成＋デザイン(Photoshop)", "画像生成＋デザイン(Photoshop)＋編集データ"];
        }
        return [];
      },
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
      options: (data: EstimateData) => {
        if (data.genre === "画像制作（バナー / ポスター・フライヤー / ロゴ）") {
          return ["画像制作には含まれないので次に進んでください"];
        }
        return ["フル対応希望", "軽い字幕だけあればOK", "なしでいい"];
      },
    },
    {
      id: "camera",
      question: "複数カメ構成やCG演出は希望する？",
      options: (data: EstimateData) => {
        if (data.genre === "画像制作（バナー / ポスター・フライヤー / ロゴ）") {
          return ["画像制作には含まれないので次に進んでください"];
        }
        return ["はい（2カメ構成 or CG演出あり）", "一部検討中（オプションで見積もり）", "いいえ（1カメ固定）"];
      },
    },
    {
      id: "schedule",
      question: "制作スケジュールは？",
      options: ["通常納期（2〜3週間）", "急ぎ対応（1週間以内）", "特に指定なし"],
    },
    {
      id: "delivery",
      question: "納品形式の希望は？",
      options: (data: EstimateData) => {
        if (data.genre === "画像制作（バナー / ポスター・フライヤー / ロゴ）") {
          return ["完パケ（jpeg / pngデータ納品）", "編集データ（PSDファイルなど）", "両方欲しい（+α）"];
        }
        return ["完パケ（完成動画納品）", "編集データ（Premiere / AEなど）", "両方欲しい（+α）"];
      },
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
    // 基本価格を取得
    const basePrice = getBasePrice();
    
    // 本数を取得
    const quantity = getQuantity();
    
    // 乗数を計算
    let multiplier = 1.0;
    if (estimateData.planning === "はい（フル企画込み）") {
      multiplier *= 1.3;
    }
    if (estimateData.schedule === "急ぎ対応（1週間以内）") {
      multiplier *= 1.25;
    }
    if (estimateData.delivery === "編集データ（Premiere / AEなど）" || 
        estimateData.delivery === "編集データ（PSDファイルなど）") {
      multiplier *= 1.25;
    }
    if (estimateData.delivery === "両方欲しい（+α）") {
      multiplier *= 1.25;
    }
    
    // 追加コストを計算
    let additionalCosts = 0;
    if (estimateData.revisions === "2回以上したい") {
      additionalCosts += (basePrice * quantity) * 0.2;
    } else if (estimateData.revisions === "修正無制限希望（要相談）") {
      additionalCosts += (basePrice * quantity) * 0.5;
    }
    
    // SNS動画の場合は特別な計算
    let totalPrice, monthlyPrice;
    if (estimateData.genre === "SNS動画（ショートorロング）") {
      // 単発単価は1本分の価格
      totalPrice = Math.round(basePrice * multiplier + (basePrice * 0.2 * (estimateData.revisions === "2回以上したい" ? 1 : 0)) + (basePrice * 0.5 * (estimateData.revisions === "修正無制限希望（要相談）" ? 1 : 0)));
      
      // 月額目安は本数分の価格
      if (estimateData.quantity.includes("月")) {
        const monthlyQuantity = estimateData.quantity.includes("5〜10") ? 5 : 10;
        monthlyPrice = Math.round(basePrice * monthlyQuantity * multiplier + (basePrice * monthlyQuantity * 0.2 * (estimateData.revisions === "2回以上したい" ? 1 : 0)) + (basePrice * monthlyQuantity * 0.5 * (estimateData.revisions === "修正無制限希望（要相談）" ? 1 : 0)));
      } else {
        monthlyPrice = null;
      }
    } else {
      // その他のジャンルは通常の計算
      totalPrice = Math.round((basePrice * quantity) * multiplier + additionalCosts);
      monthlyPrice = null;
    }
    
    setEstimateResult({
      basePrice: totalPrice,
      monthlyPrice,
      details: estimateData
    });
  };

  // 基本価格を取得する関数
  const getBasePrice = (): number => {
    const { genre, duration } = estimateData;
    
    if (genre === "SNS動画（ショートorロング）") {
      if (duration === "1分以内") {
        return 30000; // ショート固定
      } else if (duration === "15分以内") {
        return 150000;
      } else if (duration === "30分") {
        return 250000;
      } else if (duration === "60分") {
        return 350000;
      }
    } else if (genre === "動画広告（縦型 / 横型どちらも可）") {
      if (duration === "6秒") return 200000;
      if (duration === "15秒") return 350000;
      if (duration === "30秒") return 450000;
      if (duration === "60秒") return 650000;
    } else if (genre === "マニュアル・研修・対談動画") {
      if (duration === "15分以内") return 300000;
      if (duration === "30分") return 400000;
      if (duration === "60分") return 500000;
    } else if (genre === "画像制作（バナー / ポスター・フライヤー / ロゴ）") {
      if (duration === "画像生成のみ") return 5000;
      if (duration === "画像生成＋デザイン(Photoshop)") return 7500;
      if (duration === "画像生成＋デザイン(Photoshop)＋編集データ") return 10000;
    }
    
    return 0;
  };

  // 本数を取得する関数
  const getQuantity = (): number => {
    const { quantity } = estimateData;
    
    if (quantity.includes("1本")) return 1;
    if (quantity.includes("5本")) return 5;
    if (quantity.includes("10本")) return 10;
    if (quantity.includes("10本以上")) return 10;
    if (quantity.includes("月5〜10本")) return 5;
    if (quantity.includes("月10本以上")) return 10;
    
    return 1;
  };

  const [estimateResult, setEstimateResult] = useState<{
    basePrice: number;
    monthlyPrice: number | null;
    details: EstimateData;
  } | null>(null);

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
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    {currentQuestion.question}
                  </h2>
                  {/* 1つ前の質問に戻るボタン（質問2以降のみ表示） */}
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      1つ前の質問に戻る
                    </button>
                  )}
                </div>
                
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
                      ¥{estimateResult.basePrice.toLocaleString()}{estimateData.genre === "SNS動画（ショートorロング）" ? "〜 / 本" : getQuantity() > 1 || estimateData.quantity.includes("月") ? "〜" : ""}
                    </p>
                    <p className="text-gray-400">
                      {estimateResult.monthlyPrice ? 
                        `月額目安: ¥${estimateResult.monthlyPrice.toLocaleString()}〜` : 
                        estimateData.genre === "SNS動画（ショートorロング）" ? "単発単価" :
                        getQuantity() > 1 ? `${getQuantity()}本分` : "1本あたり"
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
                    href={`/contact?estimateData=${encodeURIComponent(JSON.stringify({
                      ...estimateData,
                      basePrice: estimateResult.basePrice,
                      monthlyPrice: estimateResult.monthlyPrice
                    }))}`}
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