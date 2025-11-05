import { GraduationCap, Heart, MessageCircle, Building2, ShieldCheck } from "lucide-react";

const differentials = [
  {
    icon: GraduationCap,
    title: "Formação Especializada",
    description: "Pós-graduação em Medicina Estética, domínio anatômico e atualização constante."
  },
  {
    icon: Heart,
    title: "Resultados Naturais",
    description: "Foco em harmonia, prevenção e sutileza para valorizar o que há de melhor em você."
  },
  {
    icon: MessageCircle,
    title: "Atendimento Humanizado",
    description: "Escuta ativa, explicações claras e acompanhamento pós-procedimento."
  },
  {
    icon: Building2,
    title: "Ambiente Moderno",
    description: "Clínica recém-reformada com equipamentos de ponta e design pensado para seu conforto."
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Ética",
    description: "Compromisso com protocolos seguros e aprovação de procedimentos pela ciência."
  }
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Por que escolher a Clínica Marco Kläsener
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <differential.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {differential.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
