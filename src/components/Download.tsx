"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiCheck } from "react-icons/fi";

const Download = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    selectedMaterials: {
      video: false,
      sns: false,
      dx: false,
    },
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      selectedMaterials: {
        ...prev.selectedMaterials,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 少なくとも1つの資料が選択されているか確認
    if (!formData.selectedMaterials.video && 
        !formData.selectedMaterials.sns && 
        !formData.selectedMaterials.dx) {
      setSubmitError("少なくとも1つの資料を選択してください。");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // ここで実際のフォーム送信処理を行います
      // 例: const response = await fetch('/api/download', { method: 'POST', body: JSON.stringify(formData) });
      
      // 成功時の処理（デモ用）
      setTimeout(() => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      setSubmitError("送信中にエラーが発生しました。後ほど再度お試しください。");
      setIsSubmitting(false);
    }
  };

  const materials = [
    {
      id: "video",
      title: "動画制作サービス紹介資料",
      description: "本資料では、サービスの概要に加えて、対応可能な動画ジャンル、制作の流れ、費用の目安、そしてこれまでの制作事例まで幅広くご紹介しています。国内外での映像制作を検討されている方や、「コストを抑えつつ高品質な動画を作りたい」という方にとって、有益な情報を掲載しています。",
      image: "/images/video-material.jpg",
    },
    {
      id: "sns",
      title: "SNS運用サービス紹介資料",
      description: "本資料では、SNS運用代行の具体的なサービス内容や対応可能なプラットフォーム、運用の流れ、費用感の目安、成果事例などをご紹介しています。「SNSを始めたけれど、どう活用していいかわからない」「SNS運用まで手が回らない」といった課題をお持ちの方にぴったりの内容となっています。",
      image: "/images/sns-material.jpg",
    },
    {
      id: "dx",
      title: "DXコンサルサービス紹介資料",
      description: "本資料では、企業のデジタルトランスフォーメーション(DX)を支援するコンサルティングサービスの概要、アプローチ方法、導入事例などを詳しく解説しています。デジタル化による業務効率化や新たなビジネスモデルの創出を検討されている企業様に役立つ情報を提供しています。",
      image: "/images/dx-material.jpg",
    },
  ];

  return (
    <section id="download" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">無料資料ダウンロード</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            ご興味のある資料を選択し、フォームにご記入いただくと、すぐにメールでお送りいたします。
            お気軽にご利用ください。
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-70"></div>
                  {/* 実際の画像が用意できたら差し替え */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{material.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{material.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-4">
                    {material.description}
                  </p>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors duration-200 ${
                      formData.selectedMaterials[material.id as keyof typeof formData.selectedMaterials]
                        ? "bg-secondary border-secondary"
                        : "border-gray-600 group-hover:border-secondary"
                    }`}>
                      {formData.selectedMaterials[material.id as keyof typeof formData.selectedMaterials] && (
                        <FiCheck className="text-primary" />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      name={material.id}
                      checked={formData.selectedMaterials[material.id as keyof typeof formData.selectedMaterials]}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <span className="text-white group-hover:text-secondary transition-colors duration-200">
                      この資料を選択する
                    </span>
                  </label>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
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