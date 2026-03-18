import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromotionsGrid from './components/PromotionsGrid';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CatalogSection from './components/CatalogSection';
import ExploreCatalog from './components/ExploreCatalog';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import { MapPin, ShoppingBag } from 'lucide-react';
import { COVERAGE_AREAS } from '../constants';

const App = () => {
  const [currentView, setCurrentView] = useState('home'); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [initialCatalogGroup, setInitialCatalogGroup] = useState('solos');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const navigateToCatalog = (group = 'solos') => {
    setInitialCatalogGroup(group);
    setCurrentView('catalog');
    window.scrollTo(0, 0);
  };

  const navigateToProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo(0, 0);
  };

  const navigateToHome = (e, sectionId = null) => {
    if (e) e.preventDefault();
    setCurrentView('home');
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#ffff93]">
      <Header onNavigateHome={navigateToHome} />

      <main className="grow pt-20 mt-5">
        {currentView === 'home' && (
          <>
            <section className="container mx-auto px-4 md:px-6 mb-6">
              <Hero onNavigateCatalog={() => navigateToCatalog('promos')} onAddToCart={addToCart} />
            </section>

            <section id="pedir" className="py-16 bg-white/30">
              <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-black mb-12 tracking-tighter uppercase leading-[0.85]">
                  ¿CÓMO <br /> <span className="text-orange-500">PEDIR?</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { step: '01', title: 'Elige tu dosis', desc: 'Navega en nuestro bar online y elige el trago que deseas disfrutar.', icon: '🛒' },
                    { step: '02', title: 'Pide por WhatsApp', desc: 'Escríbenos por WhatsApp y reserva tu pedido por S/10. Aceptamos Yape o Plin.', icon: '💬' },
                    { step: '03', title: 'Brinda al toque', desc: 'Preparamos tu pedido y lo enviamos sin costo de delivery hasta tu ubicación.', icon: '🛵' },
                    { step: '04', title: 'Sigue disfrutando', desc: 'Paga el saldo restante al momento de la entrega y sigue disfrutando de la diversión.', icon: '🍾' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-black/5 flex flex-col items-center group hover:-translate-y-1 transition-all">
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                      <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Paso {item.step}</span>
                      <h3 className="text-xl font-black text-black mb-2 uppercase tracking-tighter">{item.title}</h3>
                      <p className="text-black/50 font-bold text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="cobertura" className="py-16">
              <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  
                  <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl md:text-[3.5rem] font-black text-black mb-4 tracking-tighter uppercase leading-[0.85]">
                      ZONAS DE <br /> <span className="text-orange-500">COBERTURA</span>
                    </h2>

                    <p className="text-black/70 italic font-bold mb-8 max-w-sm">
                      Estamos cerca de ti. Delivery garantizado en las siguientes zonas:
                    </p>

                    <div className="flex flex-col gap-4">
                      {COVERAGE_AREAS.map((loc, i) => (
                        <div key={i} className="bg-white flex items-center gap-4 px-8 py-4 rounded-full shadow-md w-full max-w-md">
                          <span className="text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                          </span>
                          <span className="text-black text-xl font-black uppercase tracking-tighter">
                            {loc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Columna Derecha: Imagen/Mapa */}
                  <div className="w-full md:w-1/2">
                    <div className="rounded-[3rem] overflow-hidden h-[350px] md:h-[450px] w-full border-8 border-white/20 shadow-2xl relative">
                      <img
                        src="/fondo/zonas.png"
                        alt="Ubicación"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <section id="promos" className="py-12">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 text-center md:text-left">
                  <h2 className="text-4xl md:text-[3.5rem] font-black text-black tracking-tighter uppercase leading-none">
                    PROMOCIONES <span className="text-orange-500">FLASH</span>
                  </h2>
                  <div className="bg-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                    <span className="text-white font-black uppercase tracking-widest text-[7px]">DELIVERY ACTIVO</span>
                  </div>
                </div>
                <PromotionsGrid 
                  onExploreCatalog={() => navigateToCatalog('promos')} 
                  onAddToCart={addToCart} 
                  onNavigateProduct={navigateToProductDetail}
                />
              </div>
            </section>

            <CatalogSection 
              onNavigateCatalog={() => navigateToCatalog('solos')} 
              onAddToCart={addToCart}
              onNavigateProduct={navigateToProductDetail} />

            <Reviews />
          </>
        )}

        {currentView === 'catalog' && (
          <ExploreCatalog 
            onSelectProduct={navigateToProductDetail} 
            initialGroup={initialCatalogGroup} 
            onAddToCart={addToCart}
          />
        )}

        {currentView === 'product-detail' && (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => navigateToCatalog(initialCatalogGroup)} 
            onAddToCart={addToCart}
          />
        )}
      </main>

      <Footer />

      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 flex flex-row-reverse items-center gap-4 z-[90]">
        {/* WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Cart Button */}
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-black text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center relative group transition-all hover:scale-110 active:scale-95 border-2 border-white/10"
        >
          <ShoppingBag className="w-7 h-7" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[12px] font-black w-7 h-7 rounded-full flex items-center justify-center border-2 border-black animate-in zoom-in">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
          <div className="absolute bottom-full mb-4 right-0 bg-black text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            Ver Carrito
          </div>
        </button>
      </div>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
