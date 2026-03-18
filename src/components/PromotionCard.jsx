
import React, { useState } from 'react';
import { generateWhatsAppLink } from '../../constants';
import { ShoppingBag } from 'lucide-react';

const PromotionCard = ({ product, onAddToCart, onNavigate }) => {
  const [quantity, setQuantity] = useState(1);

  const subtotal = (product.price * quantity).toFixed(2);
  const handleOrder = (e) => {
    e.stopPropagation();
    const message = `¡Hola! Quiero pedir ${quantity} x ${product.name}. Subtotal: S/ ${subtotal}`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  return (
    <div className="bg-white rounded-[1.2rem] p-4 shadow-md flex flex-col h-[440px] md:h-[460px] relative group transition-all hover:shadow-xl border border-black/5 mx-auto w-full max-w-[280px]">
      
      <div 
        onClick={onNavigate}
        className="relative h-40 md:h-48 mb-3 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mb-2 h-16 flex flex-col flex-shrink-0">
        <h3 
          onClick={onNavigate}
          className="text-[13px] md:text-[15px] font-black text-slate-900 uppercase tracking-tighter leading-tight mb-1 line-clamp-2 cursor-pointer hover:text-orange-500 transition-colors"
        >
          {product.name}
        </h3>
        <p className="text-[9px] font-bold text-slate-400 leading-snug line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="mb-4 bg-slate-50 rounded-xl p-2 flex items-center justify-between border border-slate-100 mt-auto flex-shrink-0">
        <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest ml-1">CANTIDAD</span>
        <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
          <button 
            onClick={(e) => { e.stopPropagation(); setQuantity(prev => Math.max(1, prev - 1)); }}
            className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-900 font-black text-sm transition-colors hover:bg-slate-50 rounded-md"
          >
            -
          </button>
          <span className="w-4 text-center font-black text-slate-900 text-[12px]">{quantity}</span>
          <button 
            onClick={(e) => { e.stopPropagation(); setQuantity(prev => prev + 1); }}
            className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-900 font-black text-sm transition-colors hover:bg-slate-50 rounded-md"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-end justify-between flex-shrink-0 gap-2">
        <div className="flex flex-col">
          <span className="text-[6px] text-orange-500 font-black uppercase tracking-widest mb-0.5">SUBTOTAL</span>
          <span className="text-[18px] md:text-[16px] font-black text-slate-900 tracking-tighter leading-none">S/ {subtotal}</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleAddToCart}
            className="bg-black hover:bg-orange-600 text-white p-2.5 rounded-xl transition-all active:scale-90 flex items-center justify-center group/cart shadow-lg"
            title="Añadir al carrito"
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover/cart:scale-110" />
          </button>
          <button 
            onClick={handleOrder}
            className="bg-[#ff6d00] hover:bg-black text-white px-4 py-2.5 rounded-xl transition-all active:scale-90 flex items-center gap-1.5 font-black uppercase text-[9px] shadow-lg"
          >
            PEDIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
