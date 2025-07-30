"use client";
import Contact from "@/components/Contact";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const estimateDataParam = searchParams.get('estimateData');
  
  let estimateData = null;
  if (estimateDataParam) {
    try {
      estimateData = JSON.parse(decodeURIComponent(estimateDataParam));
    } catch (error) {
      console.error('Failed to parse estimate data:', error);
    }
  }

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
      <Contact estimateData={estimateData} />
    </main>
  );
} 