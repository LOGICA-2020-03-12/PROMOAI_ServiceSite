"use client";
import Download from "@/components/Download";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function DownloadPage() {
  return (
    <main>
      <div className="container-custom py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-secondary hover:text-secondary-light transition-colors duration-300"
        >
          <FiArrowLeft className="mr-2" />
          <span>メインページに戻る</span>
        </Link>
      </div>
      <Download />
    </main>
  );
} 