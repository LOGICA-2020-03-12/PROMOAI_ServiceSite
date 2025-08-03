"use client";
import Contact from "@/components/Contact";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactPageContent() {
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

export default function ContactPage() {
  return (
    <Suspense fallback={
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
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </main>
    }>
      <ContactPageContent />
    </Suspense>
  );
} 