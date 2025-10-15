import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const timeSlots = [
  { id: 1, day: 'Понедельник', time: '10:00 - 11:30', available: true },
  { id: 2, day: 'Понедельник', time: '14:00 - 15:30', available: false },
  { id: 3, day: 'Среда', time: '10:00 - 11:30', available: true },
  { id: 4, day: 'Среда', time: '16:00 - 17:30', available: true },
  { id: 5, day: 'Пятница', time: '10:00 - 11:30', available: true },
  { id: 6, day: 'Пятница', time: '14:00 - 15:30', available: true },
];

const Index = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      toast.error('Пожалуйста, выберите время занятия');
      return;
    }
    toast.success('Заявка отправлена! Скоро с вами свяжутся.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSelectedSlot(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                Профессиональное обучение
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Александра Иветазенка
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Репетитор по математике и физике с 10-летним опытом. Помогаю достигать высоких результатов на экзаменах и олимпиадах.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 hover-scale shadow-lg"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться на занятие
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 hover-scale"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src="https://v3b.fal.media/files/b/koala/U34Hfz0XjU6VY7wCFgvWK_output.png"
                alt="Репетитор"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Образование и опыт для достижения ваших целей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-2 transition-all duration-300 hover:border-primary">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Образование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  МГУ им. М.В. Ломоносова, механико-математический факультет. Кандидат физико-математических наук.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 transition-all duration-300 hover:border-primary">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Award" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  95% учеников поступают в топовые вузы. Призёры олимпиад всероссийского уровня среди учеников.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 transition-all duration-300 hover:border-primary">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Users" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  10 лет преподавания. Более 200 успешных учеников. Индивидуальный подход к каждому.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Методика обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Авторская программа для максимального результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Индивидуальный подход</CardTitle>
                    <CardDescription className="text-base">
                      Разработка персональной программы под цели и уровень знаний каждого ученика
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Структурированная программа</CardTitle>
                    <CardDescription className="text-base">
                      От базовых принципов до сложных задач повышенного уровня
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Контроль прогресса</CardTitle>
                    <CardDescription className="text-base">
                      Регулярное тестирование и отслеживание динамики развития
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Laptop" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Современные технологии</CardTitle>
                    <CardDescription className="text-base">
                      Интерактивные материалы, визуализация и онлайн-инструменты
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как записаться на занятие</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобное время и оставьте заявку
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Расписание занятий</h3>
              <div className="space-y-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedSlot === slot.id
                        ? 'border-primary bg-primary/10 shadow-lg scale-105'
                        : slot.available
                        ? 'border-border hover:border-primary/50 hover:shadow-md'
                        : 'border-border bg-muted/50 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg">{slot.day}</p>
                        <p className="text-muted-foreground">{slot.time}</p>
                      </div>
                      <div>
                        {slot.available ? (
                          selectedSlot === slot.id ? (
                            <Icon name="CheckCircle2" size={24} className="text-primary" />
                          ) : (
                            <Icon name="Circle" size={24} className="text-muted-foreground" />
                          )
                        ) : (
                          <Badge variant="secondary">Занято</Badge>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Card className="shadow-2xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Форма записи</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Расскажите о ваших целях и пожеланиях..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  tutor@example.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Формат обучения</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Онлайн-занятия</p>
                <p>• Очные встречи</p>
                <p>• Занятия 1,5 часа</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">График работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: Выходной</p>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t pt-8">
            <p>© 2024 Александра Иветазенка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
