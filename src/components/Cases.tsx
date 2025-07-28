"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Cases = () => {
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
      backgroundColor: "transparent",
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2)",
      border: "1.5px solid rgba(255, 255, 255, 0.6)",
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1)",
      border: "1.5px solid rgba(255, 255, 255, 0.8)",
      scale: 1.05,
    },
  };

  // ホバー状態の変更関数
  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

  // 制作事例データ
  const caseStudies = [
    {
      id: 1,
      title: "博多むぎ焼酎 プロモーション広告",
      image: "/images/焼酎サムネ.jpg",
      url: "#",
    },
    {
      id: 2,
      title: "たこ焼き店舗プロモーション SNS広告",
      image: "/images/たこ焼きサムネ.jpg",
      url: "#",
    },
    {
      id: 3,
      title: "観光プロモーション SNS広告",
      image: "/images/観光CMサムネ.jpg",
      url: "#",
    },
    {
      id: 4,
      title: "ハイブランド SNS広告",
      image: "/images/ハイブランドサムネ.png",
      url: "#",
    },
    {
      id: 5,
      title: "ラーメン店舗プロモーション SNS広告",
      image: "/images/ラーメン屋サムネ.jpg",
      url: "#",
    },
    {
      id: 6,
      title: "老眼鏡 SNS広告",
      image: "/images/メガネ広告サムネ.jpg",
      url: "#",
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
    <section id="cases" className="py-20 md:py-28 bg-[#1a1a1a] cursor-none">
      <div className="container-custom relative">
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center mb-6">
            <div className="inline-block border border-white/30 rounded-full px-6 py-2">
              <span className="text-white font-medium">Works</span>
            </div>
          </div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={titleVariants}
            className="mb-8"
          >
            <h2 
              className="text-6xl md:text-7xl font-bold tracking-tight text-white"
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              制作事例
            </h2>
          </motion.div>
        </div>
          
        <div className="absolute right-0 top-0 z-10 pointer-events-none">
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

        {/* BET ON CREATIVEのテキストの高さ分、余白を追加 */}
        <div className="pt-10 md:pt-20 lg:pt-28"></div>

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
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              <Link href={caseItem.url} className="block">
                <div className="relative overflow-hidden aspect-video mb-4 bg-gray-800 border border-gray-700 rounded-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                  {/* ホバー時のオーバーレイ */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                      詳細を見る
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-xl font-medium group-hover:text-gray-300 transition-colors duration-300">{caseItem.title}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-16">
          <Link 
            href="/works" 
            className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-full transition-colors duration-300"
            onMouseEnter={enterHover}
            onMouseLeave={leaveHover}
          >
            もっと見る
          </Link>
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
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-50"
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

export default Cases; 