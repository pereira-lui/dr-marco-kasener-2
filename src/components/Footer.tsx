import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dr. Marco Kläsener" className="h-8" />
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
