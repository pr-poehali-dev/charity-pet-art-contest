import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const animals = [
  {
    id: 1,
    name: "Рыжик",
    type: "Кот",
    age: "2 года",
    description: "Ласковый рыжий котик, который обожает играть и мурлыкать. Ищет любящую семью!",
    image: "https://cdn.poehali.dev/projects/d166914e-4ca0-4401-a3c7-d4bd2ca1a8f7/files/f948c651-4a1b-493f-8722-68b46b354699.jpg"
  },
  {
    id: 2,
    name: "Бадди",
    type: "Собака",
    age: "1 год",
    description: "Веселый и игривый щенок золотистого ретривера. Любит детей и готов дарить радость каждый день!",
    image: "https://cdn.poehali.dev/projects/d166914e-4ca0-4401-a3c7-d4bd2ca1a8f7/files/ec5ffc71-cfbb-41cd-8828-a365711460a8.jpg"
  },
  {
    id: 3,
    name: "Снежок",
    type: "Кролик",
    age: "6 месяцев",
    description: "Милый серый кролик с мягкой шерсткой. Очень спокойный и дружелюбный.",
    image: "https://cdn.poehali.dev/projects/d166914e-4ca0-4401-a3c7-d4bd2ca1a8f7/files/513a3a0d-3406-4f60-9e78-8278ea8a3aac.jpg"
  }
];

const Index = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="animals" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Познакомься с нашими питомцами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбери животное, которое тронет твоё сердце, и нарисуй для него рисунок
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {animals.map((animal, index) => (
              <Card 
                key={animal.id} 
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in ${
                  selectedAnimal === animal.id ? 'ring-2 ring-primary shadow-xl scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedAnimal(animal.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {selectedAnimal === animal.id && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-2 animate-scale-in">
                      <Icon name="Heart" size={24} fill="currentColor" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center justify-between">
                    {animal.name}
                    <span className="text-sm font-normal text-muted-foreground">{animal.type}</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Возраст: {animal.age}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{animal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contest" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                О конкурсе
              </h2>
              <p className="text-lg text-muted-foreground">
                Творчество детей помогает привлечь внимание к нашим питомцам
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Призы победителям</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Лучшие рисунки будут опубликованы на нашем сайте, а авторы получат дипломы участников и памятные подарки от приюта
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Для всех детей</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Участвовать могут дети любого возраста. Каждый рисунок важен и помогает привлечь внимание к судьбе животных
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Помощь приюту</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Конкурс привлекает внимание к проблеме бездомных животных и помогает найти питомцам новый дом
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Сроки конкурса</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Прием работ до 25 декабря 2024 года. Результаты будут объявлены 31 декабря на нашем сайте
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Как участвовать в конкурсе
              </h2>
              <p className="text-lg text-muted-foreground">
                Всего 4 простых шага до участия
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Выбери питомца",
                  description: "Посмотри фотографии животных из приюта и выбери того, кто тебе понравился больше всего",
                  icon: "Eye"
                },
                {
                  step: "2",
                  title: "Нарисуй рисунок",
                  description: "Создай рисунок выбранного питомца. Используй краски, карандаши или любые другие материалы",
                  icon: "Palette"
                },
                {
                  step: "3",
                  title: "Сфотографируй работу",
                  description: "Сделай качественную фотографию своего рисунка в хорошем освещении",
                  icon: "Camera"
                },
                {
                  step: "4",
                  title: "Отправь нам",
                  description: "Отправь фото рисунка на нашу почту с именем ребенка, возрастом и именем питомца",
                  icon: "Send"
                }
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-heading text-xl mb-2 flex items-center gap-2">
                          <Icon name={item.icon as any} size={20} className="text-primary" />
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Card className="bg-accent/10 border-accent">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-4">
                    <Icon name="Mail" size={32} className="text-accent" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Отправляйте рисунки на почту:</p>
                      <a href="mailto:konkurs@shelter.ru" className="text-2xl font-heading font-bold text-accent hover:underline">
                        konkurs@shelter.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                О приюте «Лисена»
              </h2>
            </div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Приют «Лисена» работает уже более 10 лет и помог найти дом для тысяч бездомных животных. 
                    Мы верим, что каждое животное заслуживает любви и заботы.
                  </p>
                  <p>
                    В приюте содержатся собаки, кошки, кролики и другие животные, которые ждут своих хозяев. 
                    Мы обеспечиваем им ветеринарную помощь, питание и заботу.
                  </p>
                  <p className="font-semibold text-foreground">
                    Новогодний конкурс рисунков — это наш способ привлечь внимание к проблеме бездомных животных 
                    и помочь нашим питомцам найти любящие семьи к празднику.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Животных нашли дом</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">10</div>
                      <div className="text-sm text-muted-foreground">Лет работы</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">30+</div>
                      <div className="text-sm text-muted-foreground">Питомцев в приюте</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pt-6 border-t border-border">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-foreground">Адрес приюта:</p>
                        <p className="text-muted-foreground">Среднеахтубинский район, Волгоградская область</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Globe" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-foreground">Сайт:</p>
                        <a href="https://fondlisena.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">
                          fondlisena.ru
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Контакты
              </h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@shelter.ru" className="text-primary hover:underline">
                    info@shelter.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Для общих вопросов</p>
                  <a href="mailto:konkurs@shelter.ru" className="text-primary hover:underline block mt-2">
                    konkurs@shelter.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Для отправки рисунков</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79991234567" className="text-primary hover:underline">
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 20:00</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Добрая, д. 15
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Приезжайте в гости к нашим питомцам</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Вт-Вс: 10:00 - 18:00
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Понедельник - выходной</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-2xl">
              <span>🐾</span>
              <span className="font-heading font-bold">Новогоднее Чудо</span>
            </div>
            <p className="text-primary-foreground/80">
              Благотворительная акция приюта для животных
            </p>
            <div className="pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60">
                © 2024 Приют для животных. Создано с любовью к нашим питомцам
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;