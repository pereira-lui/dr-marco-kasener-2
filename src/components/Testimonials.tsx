import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana S.",
    text: "Sempre me senti acolhida pelo Dr. Marco. Os resultados foram naturais e acima das minhas expectativas."
  },
  {
    name: "Carla M.",
    text: "A clínica é moderna, o atendimento é excelente e eu voltei a me sentir confiante e bonita."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que dizem <span className="text-primary">nossos pacientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-background border-border hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="text-primary font-semibold">— {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
