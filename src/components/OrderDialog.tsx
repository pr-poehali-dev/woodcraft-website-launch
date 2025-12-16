import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import type { Product } from './Catalog';

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function OrderDialog({ isOpen, onClose, product }: OrderDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    comment: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', address: '', comment: '' });
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', phone: '', email: '', address: '', comment: '' });
    onClose();
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Оформление заказа</DialogTitle>
              <DialogDescription>
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </DialogDescription>
            </DialogHeader>

            <div className="flex gap-4 p-4 rounded-lg border bg-card mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <p className="text-2xl font-bold text-primary mt-2">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Петров"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="address">Адрес доставки *</Label>
                <Input
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="г. Москва, ул. Ленина, д. 1, кв. 1"
                />
              </div>

              <div>
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Дополнительные пожелания к заказу..."
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                  Отмена
                </Button>
                <Button type="submit" className="flex-1">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заказ
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-12 text-center animate-scale-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={40} className="text-green-600" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2">Заказ принят!</h3>
            <p className="text-muted-foreground">
              Мы свяжемся с вами в ближайшее время для уточнения деталей
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
