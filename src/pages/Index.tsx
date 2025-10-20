import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: 'Layers',
      title: 'Шлифовка бетона',
      description: 'Профессиональная шлифовка бетонных полов с использованием современного оборудования',
    },
    {
      icon: 'Sparkles',
      title: 'Полировка бетона',
      description: 'Высококачественная полировка для достижения зеркального блеска поверхности',
    },
    {
      icon: 'Shield',
      title: 'Упрочнение полов',
      description: 'Топпинговое упрочнение и пропитка бетонных поверхностей',
    },
    {
      icon: 'Hammer',
      title: 'Ремонт полов',
      description: 'Восстановление и выравнивание поврежденных бетонных покрытий',
    },
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/be043c8e-5419-46df-b41a-69228476e1ec/files/acbe99c1-44e3-4778-aa87-112a8548052c.jpg',
      title: 'Промышленный склад',
      area: '5000 м²',
    },
    {
      image: 'https://cdn.poehali.dev/projects/be043c8e-5419-46df-b41a-69228476e1ec/files/e3bc1958-2829-4b7d-9abe-431c38c28b15.jpg',
      title: 'Торговый центр',
      area: '3200 м²',
    },
    {
      image: 'https://cdn.poehali.dev/projects/be043c8e-5419-46df-b41a-69228476e1ec/files/e4b55c90-5aac-4520-8e0c-e3b61d945c9d.jpg',
      title: 'Офисное здание',
      area: '1800 м²',
    },
  ];

  const technologies = [
    {
      icon: 'Cog',
      title: 'Современное оборудование',
      description: 'Используем шлифовальные машины европейского производства',
    },
    {
      icon: 'Droplet',
      title: 'Профессиональные материалы',
      description: 'Работаем с проверенными пропитками и упрочнителями',
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Специалисты с опытом работы более 10 лет',
    },
  ];

  const pricing = [
    { service: 'Шлифовка бетона (1 проход)', price: 'от 180 ₽/м²' },
    { service: 'Полировка бетона (до блеска)', price: 'от 450 ₽/м²' },
    { service: 'Упрочнение топпингом', price: 'от 320 ₽/м²' },
    { service: 'Пропитка силером', price: 'от 120 ₽/м²' },
    { service: 'Ремонт трещин и сколов', price: 'от 250 ₽/м²' },
  ];

  const faq = [
    {
      question: 'Сколько времени занимает шлифовка пола?',
      answer: 'Время зависит от площади и состояния поверхности. В среднем, обработка 1000 м² занимает 3-5 рабочих дней.',
    },
    {
      question: 'Можно ли шлифовать старый бетон?',
      answer: 'Да, мы работаем как с новыми, так и со старыми бетонными полами. Старые поверхности могут потребовать дополнительной подготовки.',
    },
    {
      question: 'Какая гарантия на выполненные работы?',
      answer: 'Мы предоставляем гарантию 2 года на все виды работ при соблюдении условий эксплуатации.',
    },
    {
      question: 'Нужно ли убирать оборудование из помещения?',
      answer: 'Желательно освободить помещение для удобства работы, но мы можем работать участками, если это необходимо.',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-white">БЕТОНПОЛ</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {['Главная', 'Услуги', 'Портфолио', 'О компании', 'Технологии', 'Прайс', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-accent transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              {['Главная', 'Услуги', 'Портфолио', 'О компании', 'Технологии', 'Прайс', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white hover:text-accent transition-colors py-2 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section
        id="главная"
        className="relative min-h-screen flex items-center justify-center pt-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 44, 46, 0.85), rgba(44, 44, 46, 0.85)), url('https://cdn.poehali.dev/projects/be043c8e-5419-46df-b41a-69228476e1ec/files/acbe99c1-44e3-4778-aa87-112a8548052c.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Шлифовка и полировка
            <br />
            <span className="text-accent">бетонных полов</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Профессиональная обработка бетона с гарантией качества. Работаем с объектами любой сложности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
              onClick={() => scrollToSection('контакты')}
            >
              Заказать расчет
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              onClick={() => scrollToSection('портфолио')}
            >
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный комплекс работ по обработке бетонных поверхностей
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Реализованные проекты различного масштаба
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 flex items-center gap-2">
                      <Icon name="Ruler" size={18} />
                      {project.area}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="о компании" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на шлифовке и полировке бетонных полов уже более 12 лет. За это время выполнили более 500 проектов различной сложности.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда использует только современное европейское оборудование и проверенные материалы, что гарантирует высокое качество и долговечность результата.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/be043c8e-5419-46df-b41a-69228476e1ec/files/e3bc1958-2829-4b7d-9abe-431c38c28b15.jpg"
                alt="О компании"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="технологии" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Технологии</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Современный подход к обработке бетона
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon name={tech.icon} className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{tech.title}</h3>
                <p className="text-muted-foreground text-lg">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-0">
                {pricing.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-6 ${
                      index !== pricing.length - 1 ? 'border-b' : ''
                    } hover:bg-accent/5 transition-colors`}
                  >
                    <span className="text-lg font-medium text-primary">{item.service}</span>
                    <span className="text-xl font-bold text-accent">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6">
              * Точная стоимость рассчитывается индивидуально после осмотра объекта
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Вопросы и ответы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на часто задаваемые вопросы
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-white/80 mb-12 text-lg">
            Свяжитесь с нами для бесплатного расчета стоимости
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Phone" className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Телефон</h3>
                  <a href="tel:+79001234567" className="text-white/90 hover:text-accent text-lg">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <a href="mailto:info@betonpol.ru" className="text-white/90 hover:text-accent text-lg">
                    info@betonpol.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Адрес</h3>
                  <p className="text-white/90 text-lg">г. Москва, ул. Промышленная, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Режим работы</h3>
                  <p className="text-white/90 text-lg">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: по договоренности</p>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="text-base" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="text-base" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="text-base" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} className="text-base" />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 border-t border-secondary/20 py-8">
        <div className="container mx-auto px-4 text-center text-white/70">
          <p>&copy; 2024 БЕТОНПОЛ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
