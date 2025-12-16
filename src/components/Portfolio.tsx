import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'Кухонный гарнитур',
    client: 'Частный заказ',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6385ebde-b18a-4024-8487-d4911354482f.jpg',
    description: 'Массив дуба, современный дизайн',
  },
  {
    id: 2,
    title: 'Офисная мебель',
    client: 'Компания "Прогресс"',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/f8cb7e56-3d7d-404d-8fe3-b70007c37b3a.jpg',
    description: 'Ясень, минималистичный стиль',
  },
  {
    id: 3,
    title: 'Спальный гарнитур',
    client: 'Частный заказ',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6c4e9236-d5fb-46a5-a07c-3e520355b527.jpg',
    description: 'Орех, классический дизайн',
  },
  {
    id: 4,
    title: 'Библиотека',
    client: 'Частный дом',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6385ebde-b18a-4024-8487-d4911354482f.jpg',
    description: 'Дуб, встроенная подсветка',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши работы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Гордимся каждым проектом и вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-1">{project.client}</p>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
