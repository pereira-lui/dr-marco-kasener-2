import logo from "@/assets/logo.png";
import headLogo from "@/assets/head.png";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src={logo} alt="Dr. Marco Kläsener" className="h-8" />
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <a
              href="https://headdigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-all hover:text-primary"
            >
              <span>Desenvolvido por</span>
              <img src={headLogo} alt="Head Digital" className="h-8" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              CRMRS 51045 • © 2025 Dr. Marco Kläsener
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
