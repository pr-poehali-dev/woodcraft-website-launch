import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Contacts() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за обращение!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contacts = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      info: 'Москва, ул. Столярная, 15',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      info: '+7 (495) 123-45-67',
    },
    {
      icon: 'Mail',
      title: 'Email',
      info: 'info@woodcraft.ru',
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      info: 'Пн-Пт: 9:00 - 18:00',
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свяжитесь с нами для консультации или заказа
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-heading text-2xl font-bold mb-6">
              Напишите нам
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>

          <div className="space-y-4 animate-scale-in">
            <h3 className="font-heading text-2xl font-bold mb-6">
              Наши контакты
            </h3>
            {contacts.map((contact, index) => (
              <Card
                key={contact.title}
                className="hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Icon name={contact.icon} size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-muted-foreground">{contact.info}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
