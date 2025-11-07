import doctorImage from "@/assets/doctor-2.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl transform -rotate-3" />
              <img
                src={doctorImage}
                alt="Dr. Marco Kläsener"
                className="relative rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6">
              Sobre o Dr. Marco <span className="text-primary">Kläsener</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
