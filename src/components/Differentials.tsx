import { GraduationCap, Heart, MessageCircle, Building2, ShieldCheck, Sparkles } from "lucide-react";

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
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-background py-24 text-foreground md:py-32"
    >
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] via-background to-[rgba(255,255,255,0.04)]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
            <Sparkles className="h-3.5 w-3.5" />
            Diferenciais
          </div>
          <h2 className="font-heading mb-6 text-4xl font-normal leading-tight text-foreground md:text-5xl">
            Por que escolher nosso{" "}
            <span className="text-primary">atendimento?</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Excelência clínica, atendimento humanizado e resultados harmoniosos para cada paciente
          </p>
        </div>

        <div className="space-y-4">
          {differentials.map((differential, index) => (
            <div
              key={differential.title}
              className="group relative overflow-hidden rounded-lg border border-border/60 bg-card/40 transition-all duration-500 hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]"
            >
              <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-10">
                {/* Número e Ícone */}
                <div className="flex items-center gap-6 md:w-48 md:flex-shrink-0">
                  <span className="text-5xl font-bold text-primary/20 transition-colors duration-300 group-hover:text-primary/30">
                    0{index + 1}
                  </span>
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10">
                    <differential.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-heading text-2xl font-normal text-foreground transition-colors duration-300 group-hover:text-primary">
                    {differential.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {differential.description}
                  </p>
                </div>

                {/* Indicador visual */}
                <div className="hidden md:block md:w-2 md:flex-shrink-0">
                  <div className="h-16 w-1 rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/60" />
                </div>
              </div>

              {/* Barra de progresso ao hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
