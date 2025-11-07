import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles, Droplet, Zap, Scissors, Target, Sparkle } from "lucide-react";
import proceduresBg from "@/assets/fundo03.webp";

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
    <section
      id="procedimentos"
      className="relative overflow-hidden bg-background py-24 text-foreground md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-[rgba(255,255,255,0.08)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block">
        <img
          src={proceduresBg}
          alt=""
          className="h-full w-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[rgba(255,255,255,0.2)] via-background/75 to-background" />
      </div>
      <div className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-6 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)] blur-2xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
              Procedimentos
            </p>
            <h2 className="font-heading text-4xl font-normal leading-tight md:text-5xl">
              Nossos <span className="text-primary">Procedimentos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tratamentos avançados e personalizados para realçar sua beleza natural
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="self-start border-primary/40 bg-background/60 px-8 py-6 text-base"
          >
            <a href="#contato">Agendar consulta</a>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {procedures.map((procedure, index) => {
            const isHighlight = index === 2;

            return (
              <Card
                key={procedure.title}
                className={cn(
                  "group relative flex h-full w-full flex-col overflow-hidden rounded-lg border bg-card/60 p-8 text-foreground backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_90px_-45px_rgba(0,0,0,0.45)]",
                  isHighlight
                    ? "border-primary/40 bg-gradient-to-br from-primary/10 via-card/60 to-card/60"
                    : "border-border/60 hover:border-primary/30"
                )}
              >
                {/* Efeito de brilho ao hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
                </div>

                {/* Cabeçalho do card */}
                <div className="relative mb-8 flex items-start justify-between">
                  <div
                    className={cn(
                      "relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border transition-all duration-500",
                      isHighlight
                        ? "border-primary/50 bg-primary/15 text-primary shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]"
                        : "border-border/60 bg-card/80 text-primary/80 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <procedure.icon className="relative h-7 w-7" />
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.4em] transition-colors duration-300",
                        isHighlight ? "text-primary/70" : "text-muted-foreground/60 group-hover:text-primary/70"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {isHighlight && (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        Destaque
                      </span>
                    )}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative flex-1 space-y-4">
                  <h3 className="font-heading text-2xl font-normal leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {procedure.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {procedure.description}
                  </p>
                </div>

                {/* Barra inferior decorativa */}
                <div className="relative mt-8 h-1 w-full overflow-hidden rounded-full bg-border/30">
                  <div
                    className={cn(
                      "h-full w-0 rounded-full transition-all duration-700",
                      isHighlight
                        ? "bg-gradient-to-r from-primary/60 via-primary to-primary/60 group-hover:w-full"
                        : "bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 group-hover:w-full"
                    )}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
