import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-2.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 text-center lg:grid-cols-2 lg:text-left">
          {/* Image */}
          <div className="relative order-2 mx-auto max-w-sm lg:order-1 lg:max-w-none">
            <div className="relative">
              <img
                src={doctorImage}
                alt="Dr. Marco Kläsener"
                className="relative rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col items-center lg:order-2 lg:items-start">
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-6 text-center lg:text-left">
              Sobre o Dr. Marco <span className="text-primary">Kläsener</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <p>
                Sou o Dr. Marco Kläsener, médico pós-graduado em Medicina Estética pelo Instituto BWS Primum, em São Paulo (CRMRS 51045).
              </p>
              <p>
                Minha missão é unir ciência e arte para realçar a beleza natural de cada paciente. Acredito que estética é mais do que aparência, é sobre autoestima, equilíbrio e bem-estar.
              </p>
              <p>
                Cada atendimento é realizado com escuta ativa, transparência e foco em resultados sutis, respeitando sua identidade e seus objetivos.
              </p>
            </div>
            <Button
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 mx-auto lg:mx-0"
              onClick={() => window.open("https://wa.me/5554996833828", "_blank")}
            >
              Agende sua consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
