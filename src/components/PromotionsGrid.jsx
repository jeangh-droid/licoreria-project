
import React from 'react';
import { COMBOS } from '../../constants';
import PromotionCard from './PromotionCard';

const PromotionsGrid = ({ onExploreCatalog, onAddToCart, onNavigateProduct }) => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
        {COMBOS.slice(0, 4).map((combo) => (
          <div key={combo.id} className="h-full">
            <PromotionCard 
              product={combo} 
              onAddToCart={onAddToCart} 
              onNavigate={() => onNavigateProduct && onNavigateProduct(combo)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <button 
          onClick={() => onExploreCatalog('promos')}
          className="bg-[#ff6d00] hover:bg-black text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-4 shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          Ver más promos en catálogo
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PromotionsGrid;
