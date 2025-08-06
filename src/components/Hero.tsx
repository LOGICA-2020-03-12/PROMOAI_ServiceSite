"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Variants } from "framer-motion";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // クライアントサイドでのみ実行されるようにする
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ローディング状態を監視
  useEffect(() => {
    // ローディング完了イベントをリッスン
    const handleLoadingComplete = () => {
      setLoadingComplete(true);
    };

    // カスタムイベントリスナーを追加
    window.addEventListener('loadingComplete', handleLoadingComplete);

    // 既にローディングが完了している場合の対応
    const checkIfLoadingComplete = () => {
      // body要素のdata属性でローディング状態を確認
      const isComplete = document.body.getAttribute('data-loading-complete') === 'true';
      if (isComplete) {
        setLoadingComplete(true);
      }
    };
    
    // 初回チェック
    checkIfLoadingComplete();

    // クリーンアップ
    return () => {
      window.removeEventListener('loadingComplete', handleLoadingComplete);
    };
  }, []);

  // YouTube埋め込みを最適化するためのカスタムフック
  useEffect(() => {
    if (!isClient || !videoContainerRef.current) return;

    // YouTubeプレーヤーのサイズを調整する関数
    const resizeYoutubePlayer = () => {
      const container = videoContainerRef.current;
      if (!container) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = 16 / 9;

      let playerWidth;
      let playerHeight;

      // コンテナを画面いっぱいに広げる
      if (width / height > aspectRatio) {
        playerWidth = width;
        playerHeight = width / aspectRatio;
      } else {
        playerHeight = height;
        playerWidth = height * aspectRatio;
      }

      // 画面をカバーするようにサイズ調整
      container.style.width = `${playerWidth}px`;
      container.style.height = `${playerHeight}px`;
    };

    // 初期サイズ調整
    resizeYoutubePlayer();

    // リサイズイベントリスナー
    window.addEventListener('resize', resizeYoutubePlayer);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', resizeYoutubePlayer);
    };
  }, [isClient]);

  // テキストアニメーション用の変数
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const letterChildVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // デスクトップ用とスマホ用のタイトル
  const desktopTitle = "生成AIを活用した動画制作";
  const mobileTitle = "生成AIを活用した\nプロモーション制作";
  const subTitle = "プロモーションの常識を変える";

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center bg-primary pt-20 overflow-hidden">
      {/* YouTube動画の背景 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <div 
          ref={videoContainerRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[100%] min-h-[100%]"
        >
          {isClient && (
            <iframe 
              src="https://www.youtube.com/embed/ceoXk5z0Il0?si=5RsZOAuYb0FeSpAl&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=ceoXk5z0Il0" 
              title="Background Video"
              className="absolute w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        {/* オーバーレイ - 動画の上に半透明のレイヤーを追加 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto relative z-10 flex items-center justify-center px-4">
        {/* 中央に表示するテキスト */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* メインタイトル - 文字ごとのアニメーション（デスクトップ） */}
          <div className="overflow-hidden mb-6 hidden md:block">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-serif text-center"
              initial="hidden"
              animate={loadingComplete ? "visible" : "hidden"}
              variants={textVariants}
            >
              <motion.div variants={letterVariants}>
                {desktopTitle.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterChildVariants}
                    className="inline-block"
                    style={{ 
                      textShadow: '0 0 15px rgba(255,255,255,0.5)'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            </motion.h1>
          </div>

          {/* メインタイトル - スマホ用 */}
          <div className="overflow-hidden mb-6 md:hidden">
            <motion.h1 
              className="text-4xl font-bold text-white font-serif text-center leading-tight"
              initial="hidden"
              animate={loadingComplete ? "visible" : "hidden"}
              variants={textVariants}
            >
              <motion.div variants={letterVariants}>
                {mobileTitle.split('\n').map((line, lineIndex) => (
                  <div key={lineIndex} className="mb-2">
                    {line.split('').map((char, index) => (
                      <motion.span
                        key={`${lineIndex}-${index}`}
                        variants={letterChildVariants}
                        className="inline-block"
                        style={{ 
                          textShadow: '0 0 15px rgba(255,255,255,0.5)'
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </motion.h1>
          </div>
          
          {/* サブタイトル - スライドインアニメーション（デスクトップのみ） */}
          <div className="overflow-hidden hidden md:block">
            <motion.div
              initial={{ width: 0 }}
              animate={loadingComplete ? { width: '100%' } : { width: 0 }}
              transition={{ delay: loadingComplete ? 1.8 : 0, duration: 0.8, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-6"
            />
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: loadingComplete ? 2 : 0, duration: 0.8 }}
            >
              {subTitle}
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={loadingComplete ? { width: '100%' } : { width: 0 }}
              transition={{ delay: loadingComplete ? 2.2 : 0, duration: 0.8, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-6"
            />
          </div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      {isClient && (
        <>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full border border-white/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={loadingComplete ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 1.5, delay: loadingComplete ? 0.5 : 0 }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full border border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={loadingComplete ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 1.2, delay: loadingComplete ? 0.8 : 0 }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-blue-500/10 blur-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={loadingComplete ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: loadingComplete ? 1 : 0 }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </>
      )}
    </section>
  );
};

export default Hero;