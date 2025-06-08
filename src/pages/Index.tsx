
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Statistics />
      <Pricing />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
