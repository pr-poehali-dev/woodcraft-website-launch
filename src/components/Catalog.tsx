import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Обеденный стол из дуба',
    price: 45000,
    category: 'Столы',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6385ebde-b18a-4024-8487-d4911354482f.jpg',
    description: 'Массив дуба, ручная работа, 180x90 см',
  },
  {
    id: 2,
    name: 'Книжная полка',
    price: 18000,
    category: 'Полки',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6c4e9236-d5fb-46a5-a07c-3e520355b527.jpg',
    description: 'Ясень, минималистичный дизайн',
  },
  {
    id: 3,
    name: 'Комод из ореха',
    price: 52000,
    category: 'Шкафы',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6385ebde-b18a-4024-8487-d4911354482f.jpg',
    description: 'Орех, 4 ящика, металлическая фурнитура',
  },
  {
    id: 4,
    name: 'Журнальный столик',
    price: 22000,
    category: 'Столы',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6c4e9236-d5fb-46a5-a07c-3e520355b527.jpg',
    description: 'Дуб, круглая форма, 80 см',
  },
  {
    id: 5,
    name: 'Стеллаж лофт',
    price: 35000,
    category: 'Полки',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6385ebde-b18a-4024-8487-d4911354482f.jpg',
    description: 'Сосна + металл, индустриальный стиль',
  },
  {
    id: 6,
    name: 'Прикроватная тумба',
    price: 15000,
    category: 'Шкафы',
    image: 'https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/6c4e9236-d5fb-46a5-a07c-3e520355b527.jpg',
    description: 'Берёза, 2 ящика, компактная',
  },
];

const categories = ['Все', 'Столы', 'Полки', 'Шкафы'];

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts =
    selectedCategory === 'Все'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наш каталог
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Каждое изделие создаётся вручную из отборных пород дерева
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary/90">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-heading text-2xl mb-2">
                  {product.name}
                </CardTitle>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <p className="text-3xl font-bold text-primary">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full"
                  onClick={() => onAddToCart(product)}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { Product };
