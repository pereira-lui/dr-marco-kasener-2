import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dr. Marco Kläsener" className="h-8 md:h-10" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("procedimentos")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Procedimentos
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.open("https://wa.me/5554996833828", "_blank")}
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">Agendar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
