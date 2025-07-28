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
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 PROMO AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://logicajapan.co.jp/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                運用会社
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 