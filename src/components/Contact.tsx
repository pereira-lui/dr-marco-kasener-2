import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import doctorImage from "@/assets/doctor-3.jpg";

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <img src={doctorImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para realçar sua beleza com{" "}
              <span className="text-primary">naturalidade?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato conosco e agende sua avaliação
            </p>
          </div>

          <div className="text-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6"
              onClick={() => window.open("https://wa.me/5554996833828", "_blank")}
            >
              <Phone className="mr-2 w-5 h-5" />
              Agendar avaliação agora
            </Button>
          </div>

          <div className="flex justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary/40 bg-card/60 px-8 py-6 text-base text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://www.instagram.com/marcoklasener/", "_blank")}
            >
              <Instagram className="h-5 w-5" />
              <span>Siga no Instagram</span>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card p-8 rounded-lg border border-border">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-primary">Clínica Marco Kläsener</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rua Benjamin Constant, 402<br />
                Centro, Panambi/RS
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-primary">Unidade Passo Fundo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rua Doutor Vergueiro, 411<br />
                Vila Rodrigues, Passo Fundo/RS
              </p>
            </div>
          </div>

          <div className="mt-8 bg-card p-8 rounded-lg border border-border text-center">
            <Clock className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Horário de Atendimento</h3>
            <p className="text-muted-foreground">
              Segunda a Sexta: 8h às 18h
            </p>
            <p className="text-lg text-primary font-semibold mt-4">
              (54) 99683-3828
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
