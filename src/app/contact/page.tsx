"use client";
import Contact from "@/components/Contact";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function ContactPage() {
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
      <Contact />
    </main>
  );
} 