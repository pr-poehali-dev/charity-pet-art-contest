import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MainContent = () => {
  return (
    <>
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
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Сроки конкурса</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Принимаем работы до 25 декабря. Итоги подведём 31 декабря и объявим победителей на нашем сайте
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Для кого конкурс</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Участвовать могут дети от 3 до 14 лет. Каждый ребенок может отправить несколько рисунков
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Главная цель</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Помочь нашим питомцам найти любящие семьи и привлечь внимание к проблеме бездомных животных
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
                Как участвовать
              </h2>
              <p className="text-lg text-muted-foreground">
                Всего 4 простых шага до участия в конкурсе
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Выбери питомца",
                  description: "Посмотри на наших животных выше и выбери того, кто тебе больше всего понравился",
                  icon: "Heart"
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
                  <p className="font-semibold text-foreground text-xl">
                    Благотворительный фонд помощи бездомным животным
                  </p>
                  <p>
                    Чтобы избежать размножения безнадзорных животных, собак, кошек, избежать увеличения собачьих стай, 
                    сделать бездомную домашней, избежать проявления агрессии со стороны животных к людям и как следствие 
                    жестокости со стороны людей к животным, БФПБЖ "Лисена" стерилизует безнадзорных собак, обрабатывает, 
                    прививает от бешенства и вирусных заболеваний, оказывает ветеринарную помощь травмированным по той или 
                    иной причине.
                  </p>
                  <p className="font-semibold text-foreground">
                    Это главная задача фонда. Новогодний конкурс рисунков — это наш способ привлечь внимание к проблеме 
                    бездомных животных и помочь нашим питомцам найти любящие семьи к празднику.
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">700+</div>
                      <div className="text-sm text-muted-foreground">Животных спасено</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">200+</div>
                      <div className="text-sm text-muted-foreground">Нашли свой дом</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">2</div>
                      <div className="text-sm text-muted-foreground">Года работы</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">118</div>
                      <div className="text-sm text-muted-foreground">Ждут свою семью</div>
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

      <section id="help" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Как ещё помочь приюту
              </h2>
              <p className="text-lg text-muted-foreground">
                Есть много способов поддержать наших питомцев
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Стать опекуном</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Помогайте конкретному питомцу материально, пока он ищет дом
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Package" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Передать корм</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Привезите корм, лекарства или другие необходимые вещи
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">Волонтёрство</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Помогайте выгуливать собак, ухаживать за животными или на мероприятиях
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/20">
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
                    Среднеахтубинский район, Волгоградская область
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
                    Каждый день: 9:00 - 14:00
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Ждём вас в гости!</p>
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
    </>
  );
};

export default MainContent;
