"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-12 mb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-secondary">
              PROMO AI
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* スマホ用：2行レイアウト */}
            <div className="md:hidden flex flex-col items-center space-y-2 mb-4">
              <p className="text-gray-500 text-xs">
                &copy; 2025 PROMO AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <Link
                  href="https://logicajapan.co.jp/company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xs transition-colors"
                >
                  運用会社
                </Link>
                <span className="text-gray-500 text-xs">|</span>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-xs transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </div>
            </div>
            
            {/* デスクトップ用：1行レイアウト */}
            <div className="hidden md:flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; 2025 PROMO AI. All rights reserved.
              </p>
              <span className="text-gray-500 text-sm">|</span>
              <Link
                href="https://logicajapan.co.jp/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                運用会社
              </Link>
              <span className="text-gray-500 text-sm">|</span>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 