
import React from 'react';
import { CATALOG_PRODUCTS } from '../../constants';
import PromotionCard from './PromotionCard';

const CatalogSection = ({ onNavigateCatalog, onAddToCart, onNavigateProduct }) => {
  return (
    <section id="productos" className="py-12 bg-[#ffff93]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl md:text-[3.5rem] font-black text-black tracking-tighter uppercase leading-none">
              CATÁLOGO DE <span className="text-orange-500">LICORES</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto mb-20">
          {CATALOG_PRODUCTS.slice(0, 4).map((product) => (
            <div key={product.id} className="h-full">
              <PromotionCard 
                product={product} 
                onAddToCart={onAddToCart}
                onNavigate={() => onNavigateProduct && onNavigateProduct(product)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => onNavigateCatalog('solos')}
            className="bg-[#ff6d00] hover:bg-black text-white px-10 py-4 rounded-xl font-black text-[12px] uppercase tracking-widest flex items-center gap-4 shadow-lg transition-all active:scale-95"
          >
            Ver más productos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
