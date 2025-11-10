import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Procedures from "@/components/Procedures";
import Differentials from "@/components/Differentials";
import Environment from "@/components/Environment";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import whatsappIcon from "@/assets/whatsapp.svg";

const Index = () => {
  return (
    <>
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
      <a
        href="https://wa.me/5554996833828"
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
      >
        <img src={whatsappIcon} alt="" className="h-9 w-9 object-contain" />
      </a>
    </>
  );
};

export default Index;
