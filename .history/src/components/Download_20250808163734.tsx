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
        </div>

        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-800 bg-opacity-20 border border-green-600 rounded-lg p-8 text-center max-w-3xl mx-auto"
            >
              <h3 className="text-xl font-bold mb-4">資料ダウンロードのご依頼ありがとうございます</h3>
              <p className="text-gray-300 mb-6">
                下記のLINEから資料をお受け取りください。
              </p>
              
              {/* LINE QRコード */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-4 inline-block mb-4">
                  <Image
                    src="/images/LINE/瀬川さんLINE.PNG"
                    alt="瀬川さんLINE QRコード"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <div className="bg-yellow-600 bg-opacity-20 border border-yellow-500 rounded-lg p-4 mb-4">
                  <p className="text-yellow-300 font-bold text-center text-lg">
                    ⚠️ 友達追加したら『PDF資料ください』とメッセージお願いします
                  </p>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  QRコードをスキャンしてLINEで資料を受け取ってください
                </p>
              </div>
              
              {/* スマホ用リンクボタン */}
              <div className="space-y-3">
                <p className="text-gray-300 font-medium">スマホの方はこちらから</p>
                <a
                  href="https://works.do/F9tPnu8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINEで資料を受け取る
                </a>
              </div>
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