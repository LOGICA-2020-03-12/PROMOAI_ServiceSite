"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

const FloatingDownload = () => {
  return (
    <Link href="/download">
      <motion.div
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* デスクトップ表示時は画像 */}
        <div className="hidden md:block relative bg-white rounded-2xl shadow-lg">
          <Image
            src="/images/PROMO AI images.png"
            alt="PROMO AI 資料ダウンロード"
            width={300}
            height={300}
            className="rounded-2xl"
          />
        </div>
        
        {/* スマホ表示時は黄色のボタン - 横幅いっぱい */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary text-primary py-4 px-6 font-medium flex items-center justify-center">
          <FiDownload size={20} className="mr-2" />
          <span>資料をダウンロードする</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default FloatingDownload; 