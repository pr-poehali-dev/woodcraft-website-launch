import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Blog from '../components/Blog';
import Contacts from '../components/Contacts';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import OrderDialog from '../components/OrderDialog';
import type { Product } from '../components/Catalog';
import type { CartItem } from '../components/Cart';

export default function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleOrderNow = (product: Product) => {
    setSelectedProduct(product);
    setOrderDialogOpen(true);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setCartOpen(true)} cartItemsCount={totalItems} />
      <main>
        <Hero />
        <Catalog onAddToCart={handleAddToCart} onOrderNow={handleOrderNow} />
        <Portfolio />
        <About />
        <Blog />
        <Contacts />
      </main>
      <Footer />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <OrderDialog
        isOpen={orderDialogOpen}
        onClose={() => setOrderDialogOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}