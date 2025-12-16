import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Trees" size={28} />
              <h3 className="font-heading text-xl font-bold">WoodCraft</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Создаём уникальную мебель из дерева с 2009 года
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#catalog" className="hover:text-accent transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-accent transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Москва, ул. Столярная, 15</li>
              <li>+7 (495) 123-45-67</li>
              <li>info@woodcraft.ru</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Youtube"
              >
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 WoodCraft. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
