
import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { generateWhatsAppLink } from '../../constants';

const CartDrawer = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = "🍻 ¡Hola! Quiero realizar el siguiente pedido:\n\n";

    items.forEach(item => {
      message += `🍾 ${item.quantity} x ${item.product.name} - S/ ${(item.product.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n💰 *TOTAL: S/ ${total.toFixed(2)}*`;

    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity"
          onClick={onClose}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[101] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-black text-white">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-black uppercase tracking-tighter">Tu Carrito</h2>
              <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="bg-slate-50 p-8 rounded-full mb-4">
                  <ShoppingBag className="w-12 h-12 text-slate-200" />
                </div>
                <h3 className="text-lg font-black uppercase text-slate-900">Carrito vacío</h3>
                <p className="text-slate-400 font-bold text-xs">¡Añade algo rico para empezar!</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="flex gap-4 group">
                  <div className="w-20 h-20 bg-slate-50 rounded-2xl p-2 flex-shrink-0 flex items-center justify-center border border-slate-100">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-[13px] font-black uppercase tracking-tighter text-slate-900 line-clamp-1">{item.product.name}</h4>
                      <p className="text-[11px] font-black text-orange-500">S/ {item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1 border border-slate-100">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-4 text-center font-black text-slate-900 text-xs">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Total a pagar</span>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">S/ {total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#ff6d00] hover:bg-black text-white py-4 rounded-2xl font-black uppercase text-sm tracking-tighter shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                Finalizar Pedido
                <ShoppingBag className="w-5 h-5" />
              </button>
              <p className="text-center text-[10px] text-slate-400 font-bold mt-4 uppercase tracking-widest">
                Se abrirá WhatsApp para confirmar tu pedido
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
