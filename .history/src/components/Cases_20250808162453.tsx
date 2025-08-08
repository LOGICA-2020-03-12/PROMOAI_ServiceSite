"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";

const Cases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // モーダル用の状態
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ youtubeId: string; title: string } | null>(null);

  // 動画モーダルを開く関数
  const openVideoModal = (youtubeId: string, title: string) => {
    setSelectedVideo({ youtubeId, title });
    setIsModalOpen(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // 制作事例データ
  const caseStudies = [
    {
      id: 1,
      title: "博多むぎ焼酎 プロモーション広告",
      image: "/images/焼酎サムネ.jpg",
      youtubeId: "y5l5AAZ1K0s",
      url: "https://www.youtube.com/embed/y5l5AAZ1K0s?si=UBePoPjltcdGt0Ox",
      isComingSoon: false,
    },
    {
      id: 2,
      title: "たこ焼き店舗プロモーション SNS広告",
      image: "/images/たこ焼きサムネ.jpg",
      youtubeId: "9L3YryxS--0",
      url: "https://www.youtube.com/embed/9L3YryxS--0?si=GbCwGZKvwlX_iV1o",
      isComingSoon: false,
    },
    {
      id: 3,
      title: "観光プロモーション SNS広告",
      image: "/images/観光CMサムネ.jpg",
      youtubeId: "t-xSCpDuS7Q",
      url: "https://www.youtube.com/embed/t-xSCpDuS7Q?si=yjM5cWpC3sKfVVd0",
      isComingSoon: false,
    },
    {
      id: 4,
      title: "ハイブランド SNS広告",
      image: "/images/ハイブランドサムネ.jpg",
      youtubeId: null, // 準備中
      url: "#",
      isComingSoon: true,
    },
    {
      id: 5,
      title: "ラーメン店舗プロモーション SNS広告",
      image: "/images/ラーメン屋サムネ.jpg",
      youtubeId: "_o2I4iOlQ6c",
      url: "https://www.youtube.com/embed/_o2I4iOlQ6c?si=zA-2KEKnC-4tEod9",
      isComingSoon: false,
    },
    {
      id: 6,
      title: "老眼鏡 SNS広告",
      image: "/images/メガネ広告サムネ.jpg",
      youtubeId: "JvIS15t1FC0",
      url: "https://www.youtube.com/embed/JvIS15t1FC0?si=nqUDyiMjADwIYdjc",
      isComingSoon: false,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
            <section id="cases" className="py-20 md:py-28 bg-[#1a1a1a]">
      <div className="container-custom relative">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="inline-block border border-white/30 rounded-full px-6 py-2">
              <span className="text-white font-medium">Works</span>
            </div>
          </div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={titleVariants}
            className="mb-6 md:mb-8 text-center md:text-left"
          >
            <h2 
              className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              制作事例
            </h2>
          </motion.div>
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
                BET ON
              </span>
            </h2>
            <h2 
              className="text-5xl md:text-[8rem] font-bold tracking-tight leading-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                CREATIVE.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* BET ON CREATIVEのテキストの高さ分、余白を追加（デスクトップのみ） */}
        <div className="pt-0 md:pt-20 lg:pt-28"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              variants={itemVariants}
              className="group"

            >
              <div 
                className={`block ${caseItem.isComingSoon ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={() => {
                  if (caseItem.isComingSoon) return;
                  if (caseItem.youtubeId) {
                    openVideoModal(caseItem.youtubeId, caseItem.title);
                  } else {
                    window.open(caseItem.url, '_blank');
                  }
                }}
              >
                <div className={`relative overflow-hidden aspect-video mb-4 bg-gray-800 border border-gray-700 rounded-lg transition-transform duration-300 ${caseItem.isComingSoon ? '' : 'group-hover:scale-105'}`}>
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                  {/* 準備中のオーバーレイ */}
                  {caseItem.isComingSoon && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-white text-lg font-bold bg-black/50 px-4 py-2 rounded-lg">
                        準備中
                      </div>
                    </div>
                  )}
                  {/* ホバー時のオーバーレイ */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                      {caseItem.isComingSoon ? "準備中" : caseItem.youtubeId ? "動画を見る" : "詳細を見る"}
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-xl font-medium group-hover:text-gray-300 transition-colors duration-300">{caseItem.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>



      {/* 動画モーダル */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            {/* 閉じるボタン */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
            >
              ✕
            </button>
            
            {/* 動画プレーヤー */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* タイトル */}
            <h3 className="text-white text-xl font-bold mt-4 text-center">
              {selectedVideo.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cases; 