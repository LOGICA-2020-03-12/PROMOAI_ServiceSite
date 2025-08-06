"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiDownload } from 'react-icons/fi';

const BottomActions = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex w-full">
      <Link 
        href="/contact" 
        className="flex-1 bg-gray-900 text-white py-4 flex items-center justify-center border-r border-white/20 hover:bg-gray-800 transition-all duration-300"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <FiMail size={20} className="mr-2" />
          <span className="font-medium hidden sm:inline">お問い合わせ</span>
          <span className="font-medium sm:hidden">問い合わせ</span>
        </motion.div>
      </Link>
      
      <Link 
        href="/download" 
        className="flex-1 bg-secondary text-primary py-4 flex items-center justify-center hover:bg-secondary-dark transition-all duration-300"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <FiDownload size={20} className="mr-2" />
          <span className="font-medium hidden sm:inline">無料で資料ダウンロード</span>
          <span className="font-medium sm:hidden">資料DL</span>
        </motion.div>
      </Link>
    </div>
  );
};

export default BottomActions; 