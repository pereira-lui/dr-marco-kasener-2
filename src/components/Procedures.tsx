import { Card } from "@/components/ui/card";
import { Sparkles, Droplet, Zap, Scissors, Target, Sparkle } from "lucide-react";

const procedures = [
  {
    icon: Sparkles,
    title: "Toxina Botulínica",
    description: "Suaviza linhas de expressão e previne o envelhecimento, mantendo a naturalidade facial."
  },
  {
    icon: Droplet,
    title: "Preenchimento Facial",
    description: "Restaura volumes e contornos com Ácido Hialurônico, proporcionando harmonia e proporção."
  },
  {
    icon: Zap,
    title: "Bioestimuladores de Colágeno",
    description: "Estimulam a produção natural de colágeno, garantindo firmeza e rejuvenescimento gradual."
  },
  {
    icon: Scissors,
    title: "Fios de PDO",
    description: "Efeito lifting imediato e estímulo de colágeno para suavizar a flacidez."
  },
  {
    icon: Target,
    title: "Microagulhamento (MMP)",
    description: "Ativa a renovação celular, melhorando manchas, textura e cicatrizes."
  },
  {
    icon: Sparkle,
    title: "Peelings Químicos",
    description: "Renovam e uniformizam a pele, trazendo brilho e vitalidade."
  }
];

const Procedures = () => {
  return (
    <section id="procedimentos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Procedimentos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tratamentos avançados e personalizados para realçar sua beleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <procedure.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {procedure.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {procedure.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
