import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const values = [
  {
    icon: 'Heart',
    title: 'Качество',
    description: 'Используем только отборные породы дерева и проверенные технологии обработки',
  },
  {
    icon: 'Leaf',
    title: 'Экологичность',
    description: 'Работаем с сертифицированной древесиной из устойчивых источников',
  },
  {
    icon: 'Sparkles',
    title: 'Уникальность',
    description: 'Каждое изделие создаётся индивидуально с учётом ваших пожеланий',
  },
  {
    icon: 'Award',
    title: 'Опыт',
    description: 'Более 15 лет создаём мебель, которая служит поколениям',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              О нашей мастерской
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              WoodCraft — это семейная мастерская, где традиции столярного мастерства передаются из поколения в поколение.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Мы создаём мебель, которая становится частью вашего дома и вашей истории. Каждое изделие — это результат многолетнего опыта, внимания к деталям и любви к своему делу.
            </p>
            <p className="text-muted-foreground text-lg">
              От эскиза до финальной отделки — мы контролируем каждый этап создания вашей мебели, чтобы результат превосходил ожидания.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/f8cb7e56-3d7d-404d-8fe3-b70007c37b3a.jpg"
              alt="Наша мастерская"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name={value.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
