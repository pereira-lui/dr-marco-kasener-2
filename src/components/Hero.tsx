import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import doctorImage from "@/assets/doctor-1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in">
            <p className="text-primary text-sm md:text-base mb-4 tracking-wider uppercase">
              Medicina Estética
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Naturalidade é o{" "}
              <span className="text-primary">novo luxo</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Resultados sutis e seguros em Panambi e Passo Fundo
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Sentir-se bem ao se olhar no espelho é mais do que estética, é autoconfiança e bem-estar.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              onClick={() => window.open("https://wa.me/5554996833828", "_blank")}
            >
              Agende sua avaliação
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up lg:justify-self-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <img
                src={doctorImage}
                alt="Dr. Marco Kläsener"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
