interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="font-heading font-bold text-xl text-primary">Новогоднее Чудо</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('animals')} className="text-foreground hover:text-primary transition-colors">
              Животные
            </button>
            <button onClick={() => scrollToSection('contest')} className="text-foreground hover:text-primary transition-colors">
              Конкурс
            </button>
            <button onClick={() => scrollToSection('how-to')} className="text-foreground hover:text-primary transition-colors">
              Как участвовать
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О приюте
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
