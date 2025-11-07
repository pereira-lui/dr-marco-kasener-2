import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import doctorImage from "@/assets/doctor-1.jpg";
import heroBg from "@/assets/fundo01.webp";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/65 to-background/90" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in">
            <p className="text-primary text-sm md:text-base mb-4 tracking-wider uppercase">
              Medicina Estética
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
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
              <div className="absolute inset-0 rotate-3 rounded-[0.75rem] bg-gradient-to-br from-primary/20 to-accent/20" />
              <img
                src={doctorImage}
                alt="Dr. Marco Kläsener"
                className="relative w-full max-w-lg rounded-[0.75rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
};

export default Hero;
