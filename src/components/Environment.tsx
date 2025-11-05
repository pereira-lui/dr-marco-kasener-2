import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";

const Environment = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso <span className="text-primary">Ambiente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada detalhe da nossa clínica foi pensado para proporcionar uma experiência confortável e inspiradora. Ambientes climatizados, tecnologia avançada e espaços acolhedores refletem nosso compromisso em cuidar de você com excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src={clinic1}
              alt="Recepção da clínica"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold text-foreground">Recepção Acolhedora</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src={clinic2}
              alt="Sala de procedimentos"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-bold text-foreground">Equipamentos de Ponta</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
