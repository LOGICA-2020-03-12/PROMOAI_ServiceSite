import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Compare from "@/components/Compare";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import BottomActions from "@/components/BottomActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Compare />
      <Process />
      <Cases />
      <Services />
      <Pricing />
      <Footer />
      <BottomActions />
    </main>
  );
}
