"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1.5秒後にローディング画面を非表示にする
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // ローディング完了時にカスタムイベントを発火
      const loadingCompleteEvent = new Event('loadingComplete');
      window.dispatchEvent(loadingCompleteEvent);
      
      // body要素にローディング完了のdata属性を追加
      document.body.setAttribute('data-loading-complete', 'true');
    }, 1500);

    // コンポーネントのアンマウント時にタイマーをクリア
    return () => clearTimeout(timer);
  }, []);

  // ローディング中はbodyのスクロールを無効化
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      // 少し遅延させてからスクロールを有効に戻す（アニメーション完了後）
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 800);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  // テキストのアニメーション設定
  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.5 }
    }
  };

  // テキストの塗りつぶしアニメーション
  const fillVariants: Variants = {
    hidden: { 
      fillOpacity: 0,
    },
    visible: { 
      fillOpacity: 1,
      transition: { 
        delay: 0.4,
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: {
      fillOpacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // プログレスバーのアニメーション
  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    exit: {
      width: 0,
      transition: { duration: 0.3 }
    }
  };

  // 背景のグラデーションアニメーション
  const gradientVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.15,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  // コンテナのアニメーション
  const containerVariants: Variants = {
    visible: { 
      y: 0,
      opacity: 1
    },
    exit: { 
      y: "-100%", 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.65, 0, 0.35, 1] // カスタムイージング（easeInOutCubic相当）
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 w-full h-full"
          style={{ zIndex: 9999 }}
          variants={containerVariants}
          initial="visible"
          animate="visible"
          exit="exit"
        >
          <div className="fixed inset-0 bg-black w-full h-full flex flex-col items-center justify-center overflow-hidden">
            {/* 高級感のある背景エフェクト */}
            <div className="absolute inset-0 w-full h-full">
              {/* 上部の光沢エフェクト */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1.5 }}
              />
              
              {/* 装飾的なグラデーションエフェクト */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full"
                style={{ 
                  background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(40px)'
                }}
                variants={gradientVariants}
                initial="hidden"
                animate="visible"
              />
              
              {/* 微細なノイズテクスチャ */}
              <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{ 
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                  backgroundSize: 'cover'
                }}
              />
            </div>

            <div className="relative flex flex-col items-center z-10">
              {/* PROMO AIのテキスト */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="relative mb-12"
              >
                <svg 
                  width="500" 
                  height="160" 
                  viewBox="0 0 400 120" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible"
                >
                  {/* SVGでテキストを描画 - 枠線 */}
                  <text 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    className="text-8xl"
                    stroke="white" 
                    strokeWidth="2"
                    fill="transparent"
                    style={{ fontFamily: 'sans-serif', fontWeight: 900, letterSpacing: '0.05em' }}
                  >
                    PROMO AI
                  </text>
                  
                  {/* 塗りつぶし部分 - アニメーション */}
                  <motion.text 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    className="text-8xl"
                    fill="white"
                    variants={fillVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ fontFamily: 'sans-serif', fontWeight: 900, letterSpacing: '0.05em' }}
                  >
                    PROMO AI
                  </motion.text>
                </svg>
              </motion.div>
              
              {/* 洗練されたプログレスバー */}
              <div className="relative w-96 mb-4">
                {/* ゲージのラベル - 上中央に配置 */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white/70 text-xs font-medium tracking-widest">
                  LOADING
                </div>
                
                {/* ゲージの外枠 */}
                <div className="relative h-4 bg-black/30 border border-white/40 rounded-full overflow-hidden backdrop-blur-sm">
                  {/* ゲージの背景 */}
                  <div className="absolute inset-0.5 bg-gradient-to-r from-white/5 to-white/2 rounded-full"></div>
                  
                  {/* メインのゲージバー */}
                  <motion.div
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-full bg-gradient-to-r from-white/90 via-white/70 to-white/90 relative overflow-hidden rounded-full"
                  >
                    {/* ゲージ内の光沢効果 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-full"></div>
                    
                    {/* ゲージ内の微細なパターン */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* ゲージの境界線エフェクト */}
                  <div className="absolute inset-0 border border-white/20 rounded-full pointer-events-none"></div>
                  
                  {/* 洗練された光の点 */}
                  <motion.div 
                    className="absolute top-1/2 h-1 w-1 bg-white rounded-full -translate-y-1/2 shadow-sm shadow-white/30"
                    animate={{ 
                      x: ['0%', '100%'],
                      opacity: [0, 1, 0],
                      scale: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.5, 1]
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 