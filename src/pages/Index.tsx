
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <AnimatedSection animation="bounce-in" delay={100}>
        <Features />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-in-left" delay={200}>
        <Statistics />
      </AnimatedSection>
      
      <AnimatedSection animation="zoom-in" delay={150}>
        <Pricing />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-in-right" delay={100}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-in-up" delay={200}>
        <Team />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
