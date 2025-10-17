import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Comparison from "@/components/Comparison";
import VideoShowcase from "@/components/VideoShowcase";
import Stats from "@/components/Stats";
import Curriculum from "@/components/Curriculum";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <div id="about">
        <About />
      </div>
      <Comparison />
      <VideoShowcase />
      <Stats />
      <div id="curriculum">
        <Curriculum />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
