import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Competencies from "@/components/Competencies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090a0f] text-[#f8fafc] flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Case Studies (Prodily, Featuresmith, Operate, Samsung PRISM) */}
        <CaseStudies />

        {/* Professional Experience Timeline */}
        <Experience />

        {/* Competencies & Toolstack */}
        <Competencies />

        {/* About & Transition Story */}
        <About />

        {/* Contact & Verified Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
