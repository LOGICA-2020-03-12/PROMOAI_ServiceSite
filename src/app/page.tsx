import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FloatingDownload from "@/components/FloatingDownload";


export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Cases />
      <Services />
      <Pricing />
      <Footer />
      <FloatingDownload />
    </main>
  );
}
