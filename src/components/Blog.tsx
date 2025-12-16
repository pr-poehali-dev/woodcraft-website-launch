import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const posts = [
  {
    id: 1,
    title: 'Как выбрать породу дерева для мебели',
    excerpt: 'Разбираемся в особенностях дуба, ясеня, ореха и других пород древесины',
    date: '15 декабря 2024',
    category: 'Советы',
    readTime: '5 мин',
  },
  {
    id: 2,
    title: 'Уход за деревянной мебелью',
    excerpt: 'Простые правила, которые помогут сохранить красоту изделий на десятилетия',
    date: '10 декабря 2024',
    category: 'Уход',
    readTime: '4 мин',
  },
  {
    id: 3,
    title: 'Тренды в дизайне мебели 2024',
    excerpt: 'Минимализм, экологичность и функциональность — главные тенденции года',
    date: '5 декабря 2024',
    category: 'Тренды',
    readTime: '6 мин',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Блог
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Делимся знаниями о дереве, мебели и дизайне интерьера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
