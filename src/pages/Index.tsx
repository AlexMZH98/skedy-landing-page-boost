
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
