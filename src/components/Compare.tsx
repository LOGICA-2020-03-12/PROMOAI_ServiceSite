"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Compare = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // カスタムカーソルの状態
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // マウスの位置を追跡
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // カーソルのバリアント
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(255, 215, 0, 0.1)",
      border: "1px solid rgba(255, 215, 0, 0.5)",
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(255, 215, 0, 0.15)",
      border: "1px solid rgba(255, 215, 0, 0.8)",
    },
  };

  // ホバー状態の変更関数
  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

  const comparisonData = [
    {
      item: "制作スピード",
      traditional: "週〜月単位",
      promoAi: "日単位 改善",
    },
    {
      item: "体制",
      traditional: "分業・多窓",
      promoAi: "1窓・横断チーム",
    },
    {
      item: "クリエイティブ量産",
      traditional: "難しい",
      promoAi: "AI 生成で多変量",
    },
    {
      item: "データ活用",
      traditional: "月次レポート",
      promoAi: "ダッシュボード即時",
    },
    {
      item: "コスト透明性",
      traditional: "工数膨張",
      promoAi: "プラン固定＋成果連動",
    },
    {
      item: "ノウハウ蓄積",
      traditional: "担当依存",
      promoAi: "使用ツール共有",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="compare" className="pt-20 pb-10 md:pt-28 md:pb-10 bg-zinc-900 cursor-none">
      <div className="container-custom relative z-20">
        <div className="text-center mb-12">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight text-white"
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            従来の動画制作 vs PROMO AI
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="overflow-x-auto">
          <motion.table
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full border-collapse"
          >
            <thead>
              <tr className="bg-gradient-to-r from-blue-950 via-blue-950 to-blue-950 border-b border-gray-700">
                <th className="py-6 px-6 text-left text-lg font-bold text-gray-300">項目</th>
                <th className="py-6 px-6 text-left text-lg font-bold text-gray-300">従来の動画制作</th>
                <th className="py-6 px-6 text-left text-lg font-bold text-amber-300">
                  PROMO AI
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  variants={itemVariants}
                  className={`border-b border-gray-800 ${index % 2 === 0 ? 'bg-blue-950/10' : 'bg-blue-950/5'} hover:bg-amber-900/10 transition-all duration-300`}
                >
                  <td className="py-5 px-6 font-medium text-gray-300">{row.item}</td>
                  <td className="py-5 px-6 text-gray-500">{row.traditional}</td>
                  <td className="py-5 px-6 font-medium text-amber-300 bg-blue-950/20">
                    <span className="font-bold">{row.promoAi}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        <div className="mt-10 p-6 bg-black/50 backdrop-blur-sm rounded-lg border-l-4 border-amber-400/70">
          <p className="text-lg">
            <strong className="text-amber-300">スピード・一貫性・改善回数</strong> が成果を決定。PROMO AI は3点を AI で底上げ。
          </p>
        </div>
      </div>

      {/* カスタムカーソル */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* カーソルの内側の点 */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-amber-300 rounded-full pointer-events-none z-50"
        style={{
          x: mousePosition.x - 0.75,
          y: mousePosition.y - 0.75,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 25,
          mass: 0.2,
        }}
      />
    </section>
  );
};

export default Compare; 