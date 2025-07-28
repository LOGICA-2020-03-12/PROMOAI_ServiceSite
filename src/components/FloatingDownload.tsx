"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="relative bg-white rounded-2xl shadow-lg">
          <Image
            src="/images/PROMO AI images.png"
            alt="PROMO AI 資料ダウンロード"
            width={300}
            height={300}
            className="rounded-2xl"
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default FloatingDownload; 