import consultorio1 from "@/assets/consultorio/IMG_1791.webp";
import consultorio2 from "@/assets/consultorio/IMG_1793.webp";
import consultorio3 from "@/assets/consultorio/IMG_1796.webp";
import consultorio4 from "@/assets/consultorio/IMG_1799.webp";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Maximize2, X, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const gallery = [
  {
    src: consultorio1,
    alt: "Recepção principal da clínica",
  },
  {
    src: consultorio2,
    alt: "Sala de atendimento aconchegante",
  },
  {
    src: consultorio3,
    alt: "Detalhes do consultório",
  },
  {
    src: consultorio4,
    alt: "Ambiente tecnológico",
  },
];

const Environment = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-[rgba(255,255,255,0.03)] to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 text-center lg:grid-cols-2 lg:gap-16 lg:text-left">
          {/* Coluna da esquerda - Texto */}
          <div className="flex flex-col items-center justify-center space-y-8 lg:items-start">
            <div className="w-full">
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                
                Nosso Espaço
              </div>
              </div>
              <h2 className="font-display mb-6 text-4xl font-normal leading-tight text-foreground md:text-5xl text-center lg:text-left">
                Ambiente projetado para o seu{" "}
                <span className="text-primary">bem-estar</span>
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto lg:mx-0">
                Cada detalhe foi cuidadosamente pensado para oferecer conforto, privacidade e uma experiência acolhedora. Tecnologia de ponta em um ambiente que inspira tranquilidade.
              </p>
            </div>

            <div className="w-full max-w-2xl space-y-6 mx-auto lg:mx-0">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/50 mx-auto sm:mx-0">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading mb-2 text-lg font-normal text-foreground">
                    Conforto e Privacidade
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ambientes climatizados e projetados para garantir sua privacidade e tranquilidade durante todo o atendimento.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/50 mx-auto sm:mx-0">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading mb-2 text-lg font-normal text-foreground">
                    Tecnologia Avançada
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Equipamentos de última geração para procedimentos seguros e resultados precisos com o máximo de eficácia.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/50 mx-auto sm:mx-0">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading mb-2 text-lg font-normal text-foreground">
                    Higiene e Segurança
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Protocolos rigorosos de esterilização e higiene para garantir sua saúde e segurança em todos os momentos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da direita - Slider de Imagens */}
          <div className="relative mx-auto lg:mx-0">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {gallery.map((photo) => (
                  <CarouselItem key={photo.alt} className="flex justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="group relative aspect-[3/4] w-4/5 overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background"
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,24,24,0.8)] via-[rgba(24,24,24,0.2)] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-border/80 bg-background/90 backdrop-blur-sm">
                              <Maximize2 className="h-6 w-6 text-primary" />
                              <span className="sr-only">Ampliar imagem</span>
                            </span>
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl overflow-hidden border-0 bg-transparent p-0 shadow-none sm:rounded-none">
                        <div className="relative">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-contain"
                          />
                          <DialogClose className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-border/80 bg-background/95 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Fechar</span>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
