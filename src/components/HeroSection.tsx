import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20">
            <span className="text-2xl animate-float">❄️</span>
            <span className="text-primary font-semibold">Благотворительная новогодняя акция</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground leading-tight">
            Подари питомцу<br />
            <span className="text-primary">новогоднее чудо</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Участвуй в конкурсе детских рисунков и помоги животным из приюта найти дом к Новому году
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg" onClick={() => scrollToSection('animals')}>
              <Icon name="Heart" className="mr-2" size={20} />
              Выбрать питомца
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('how-to')}>
              <Icon name="Info" className="mr-2" size={20} />
              Как участвовать
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">❄️</div>
      <div className="absolute top-32 right-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-20 left-1/4 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🎄</div>
    </section>
  );
};

export default HeroSection;
