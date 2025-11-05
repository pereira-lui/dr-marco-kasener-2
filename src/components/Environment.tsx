import consultorio1 from "@/assets/consultorio/IMG_1791.webp";
import consultorio2 from "@/assets/consultorio/IMG_1793.webp";
import consultorio3 from "@/assets/consultorio/IMG_1796.webp";
import consultorio4 from "@/assets/consultorio/IMG_1799.webp";
import fundo02 from "@/assets/fundo02.webp";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Maximize2, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="pointer-events-none absolute inset-0">
        <img
          src={fundo02}
          alt=""
          className="h-full w-full object-cover opacity-35 mix-blend-overlay"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna da esquerda - Texto */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                <Sparkles className="h-3.5 w-3.5" />
                Nosso Espaço
              </div>
              <h2 className="mb-6 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Ambiente projetado para o seu{" "}
                <span className="text-primary">bem-estar</span>
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Cada detalhe foi cuidadosamente pensado para oferecer conforto, privacidade e uma experiência acolhedora. Tecnologia de ponta em um ambiente que inspira tranquilidade.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/50">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Conforto e Privacidade
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ambientes climatizados e projetados para garantir sua privacidade e tranquilidade durante todo o atendimento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/50">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Tecnologia Avançada
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Equipamentos de última geração para procedimentos seguros e resultados precisos com o máximo de eficácia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/50">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
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
          <div className="relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {gallery.map((photo, index) => (
                  <CarouselItem key={photo.alt} className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-[3/4] w-4/5 overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(114,92,70,0.3)] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,33,34,0.8)] via-[rgba(29,33,34,0.2)] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-border/80 bg-background/90 backdrop-blur-sm">
                          <Maximize2 className="h-6 w-6 text-primary" />
                          <span className="sr-only">Ampliar imagem</span>
                        </span>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Lightbox Dialog */}
            <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
              <DialogContent className="max-w-7xl overflow-hidden border-0 bg-transparent p-0 shadow-none sm:rounded-none [&>button]:hidden">
                <div className="relative flex items-center justify-center max-h-[80vh]">
                  <img
                    src={gallery[currentIndex].src}
                    alt={gallery[currentIndex].alt}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                  
                  {/* Botão Fechar */}
                  <DialogClose asChild>
                    <button className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Fechar</span>
                    </button>
                  </DialogClose>

                  {/* Botão Anterior */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Anterior</span>
                  </button>

                  {/* Botão Próximo */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Próximo</span>
                  </button>

                  {/* Indicador de posição */}
                  <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-medium text-white">
                      {currentIndex + 1} / {gallery.length}
                    </span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
