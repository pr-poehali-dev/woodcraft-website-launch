import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/a3ac9c0f-ccd1-46e5-8592-b006d0abb5fc/files/f8cb7e56-3d7d-404d-8fe3-b70007c37b3a.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Изделия из дерева<br />с душой
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Создаём уникальную мебель и декор из натурального дерева с вниманием к каждой детали
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToCatalog}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              Посмотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur text-white border-white hover:bg-white/20"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
