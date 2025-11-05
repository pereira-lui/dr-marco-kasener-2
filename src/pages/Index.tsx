import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Procedures from "@/components/Procedures";
import Differentials from "@/components/Differentials";
import Environment from "@/components/Environment";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Procedures />
      <Differentials />
      <Environment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
