"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const Download = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // APIエンドポイントにフォームデータを送信
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
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
    <section id="download" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">無料資料ダウンロード</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            フォームにご記入いただくと、資料ダウンロード用のQRコードを発行いたします。
            <br />
            お気軽にご利用ください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/images/スライド表紙.jpg"
                alt="PROMO AI サービス紹介資料"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">PROMO AI サービス紹介資料</h3>
              <p className="text-gray-400 text-sm mb-4">
                本資料では、PROMO AIのサービス概要、対応可能な動画ジャンル、制作の流れ、費用の目安、そしてこれまでの制作事例まで幅広くご紹介しています。動画制作やSNS運用を検討されている方にとって、有益な情報を掲載しています。
              </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-800 bg-opacity-20 border border-green-600 rounded-lg p-6 text-center max-w-3xl mx-auto"
            >
              <h3 className="text-xl font-bold mb-2">資料ダウンロードのご依頼ありがとうございます</h3>
              <p className="text-gray-300 mb-4">
                ご入力いただいたメールアドレス宛に資料をお送りしました。
              </p>
              <p className="text-gray-400 text-sm">
                ※メールが届かない場合は、迷惑メールフォルダをご確認いただくか、別のメールアドレスでお試しください。
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-xl border border-gray-800 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-6 text-center">ダウンロード申請フォーム</h3>
              
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
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
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
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  メッセージ（任意）
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="ご質問やご要望があればご記入ください"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>

              {submitError && (
                <div className="bg-red-800 bg-opacity-20 border border-red-600 rounded-lg p-4">
                  <p className="text-red-400">{submitError}</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-10 py-3 flex items-center justify-center mx-auto"
                >
                  {isSubmitting ? (
                    "送信中..."
                  ) : (
                    <>
                      <FiDownload className="mr-2" />
                      <span>資料をダウンロード</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Download; 