"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ReCaptcha from "./ReCaptcha";

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
  basePrice?: number;
  monthlyPrice?: number | null;
}

interface ContactProps {
  estimateData?: EstimateData;
}

// 見積もりデータをフォーマットする関数
const formatEstimateData = (data: EstimateData): string => {
  const questions = [
    { id: "genre", label: "制作ジャンル" },
    { id: "quantity", label: "納品本数" },
    { id: "duration", label: "納品尺・形式" },
    { id: "shooting", label: "撮影" },
    { id: "planning", label: "演出・企画・構成" },
    { id: "revisions", label: "修正回数" },
    { id: "graphics", label: "テロップ・図解・チャプター" },
    { id: "camera", label: "複数カメ構成やCG演出" },
    { id: "schedule", label: "制作スケジュール" },
    { id: "delivery", label: "納品形式" },
  ];

  let result = questions
    .map(q => `${q.label}: ${data[q.id as keyof EstimateData] || "未選択"}`)
    .join("\n");

  // 価格情報を追加
  if (data.basePrice) {
    result += `\n\n💰 見積もり価格: ¥${data.basePrice.toLocaleString()}`;
    if (data.monthlyPrice) {
      result += `\n💰 月額目安: ¥${data.monthlyPrice.toLocaleString()}`;
    }
  }

  return result;
};

const Contact = ({ estimateData }: ContactProps) => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    budget: "",
    interests: {
      sns: false,
      ads: false,
      video: false,
      ai: false,
      analytics: false,
      education: false,
    },
    startDate: "",
    message: "",
    referenceUrl: "",
    selectedConditions: estimateData ? formatEstimateData(estimateData) : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // reCAPTCHA トークンの確認
    if (!recaptchaToken) {
      setSubmitError("reCAPTCHA認証を完了してください。");
      setIsSubmitting(false);
      return;
    }

    try {
      // APIエンドポイントにフォームデータを送信
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || "送信に失敗しました。後ほど再度お試しください。");
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitError("送信中にエラーが発生しました。後ほど再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">お問い合わせ</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-800 bg-opacity-20 border border-green-600 rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-2">お問い合わせありがとうございます</h3>
              <p className="text-gray-300">
                48時間以内にご返信いたします。迷惑メールフォルダもご確認ください。
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    担当者名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label htmlFor="budget" className="block mb-2 text-sm font-medium">
                  予算レンジ
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="〜50万">〜50万円/月</option>
                  <option value="50万〜100万">50万円〜100万円/月</option>
                  <option value="100万〜">100万円〜/月</option>
                </select>
              </div>

              <div>
                <span className="block mb-2 text-sm font-medium">興味のある領域</span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="sns"
                      checked={formData.interests.sns}
                      onChange={handleCheckboxChange}
                      className="text-secondary focus:ring-secondary"
                    />
                    <span>SNS運用</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="ads"
                      checked={formData.interests.ads}
                      onChange={handleCheckboxChange}
                      className="text-secondary focus:ring-secondary"
                    />
                    <span>広告運用</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="video"
                      checked={formData.interests.video}
                      onChange={handleCheckboxChange}
                      className="text-secondary focus:ring-secondary"
                    />
                    <span>動画制作</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="ai"
                      checked={formData.interests.ai}
                      onChange={handleCheckboxChange}
                      className="text-secondary focus:ring-secondary"
                    />
                    <span>AI活用</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="analytics"
                      checked={formData.interests.analytics}
                      onChange={handleCheckboxChange}
                      className="text-secondary focus:ring-secondary"
                    />
                    <span>分析</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="education"
                      checked={formData.interests.education}
                      onChange={handleCheckboxChange}
                      className="text-secondary focus:ring-secondary"
                    />
                    <span>教育</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="startDate" className="block mb-2 text-sm font-medium">
                  希望開始時期
                </label>
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  placeholder="例: 2024年6月頃"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              {estimateData && (
                <div>
                  <label htmlFor="selectedConditions" className="block mb-2 text-sm font-medium">
                    選択した条件
                  </label>
                  <textarea
                    id="selectedConditions"
                    name="selectedConditions"
                    value={formData.selectedConditions}
                    readOnly
                    rows={6}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-300 cursor-not-allowed"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">※ 見積もりシミュレーターで選択された条件です（編集不可）</p>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="referenceUrl" className="block mb-2 text-sm font-medium">
                  参考 URL
                </label>
                <input
                  type="url"
                  id="referenceUrl"
                  name="referenceUrl"
                  value={formData.referenceUrl}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  // 参考URLは必須ではない
                />
              </div>

              <div>
                <ReCaptcha
                  onChange={setRecaptchaToken}
                  onError={() => setSubmitError("reCAPTCHA認証でエラーが発生しました。")}
                  onExpired={() => setSubmitError("reCAPTCHA認証が期限切れです。再度認証してください。")}
                />
              </div>

              {submitError && (
                <div className="bg-red-800 bg-opacity-20 border border-red-600 rounded-lg p-4">
                  <p className="text-red-400">{submitError}</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                  className="btn-primary px-10 py-3"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </button>
              </div>
            </form>
          )}

          <div className="mt-10 text-center text-gray-400">
            <p>ざっくり相談歓迎。48 時間以内に返信します。迷惑メールフォルダもご確認ください。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 