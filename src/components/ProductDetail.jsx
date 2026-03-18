
import React, { useState } from 'react';
import { generateWhatsAppLink } from '../../constants';

const ProductDetail = ({ product, onBack, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-white pt-16 pb-20 -m-5">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <button 
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] hover:text-orange-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al Catálogo
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-slate-50 rounded-[3rem] p-8 flex items-center justify-center relative overflow-hidden aspect-square max-h-[500px]">
              {product.discount && (
                <span className="absolute top-8 right-8 bg-[#ff4d4d] text-white text-xs font-black px-4 py-2 rounded-lg z-10">
                  {product.discount}
                </span>
              )}
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <nav className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-6">
              {product.breadcrumb}
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6 leading-none">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-10">
              {product.oldPrice && (
                <span className="text-xl text-slate-300 line-through font-black">S/ {product.oldPrice.toFixed(2)}</span>
              )}
              <span className="text-4xl font-black text-orange-500 tracking-tighter">S/ {product.price.toFixed(2)}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10 pb-10 border-b border-slate-100">
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-12">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 hover:bg-slate-50 text-slate-400 font-black text-lg"
                >
                  -
                </button>
                <span className="w-12 text-center font-black text-slate-900 border-x border-slate-100 h-full flex items-center justify-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 hover:bg-slate-50 text-slate-400 font-black text-lg"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-1 min-w-[200px]">
                <button 
                  onClick={() => onAddToCart(product, quantity)}
                  className="flex-1 h-12 bg-black hover:bg-orange-500 text-white font-black uppercase text-xs tracking-tighter rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Añadir al carrito
                </button>
                <button 
                  onClick={() => window.open(generateWhatsAppLink(`¡Hola! Quisiera pedir ${quantity} x ${product.name}`), '_blank')}
                  className="flex-1 h-12 bg-[#ff6d00] hover:bg-black text-white font-black uppercase text-xs tracking-tighter rounded-full shadow-lg transition-all active:scale-95"
                >
                  Pedir ahora
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="pt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest space-y-2">
                <p>Categorías: <span className="text-slate-900">{product.category}</span></p>
                <p className="text-slate-500 leading-relaxed font-normal normal-case pt-2">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
