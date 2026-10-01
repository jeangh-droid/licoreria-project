import React, { useState } from 'react';
import { NAV_ITEMS, generateWhatsAppLink } from '../../constants';

const Header = ({ onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black h-20 shadow-2xl border-b border-white/5">
      <div className="container mx-auto h-full px-4 md:px-6 flex items-center justify-between">
        
        <button onClick={onNavigateHome} className="flex items-center gap-3 focus:outline-none">
          <div className="w-11 h-11 flex items-center justify-center overflow-hidden">
             <img 
              src="logo.png" 
              alt="Logo Dosis" 
              className="w-full h-full object-cover brightness-110"
            />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-xl md:text-2xl font-black text-white leading-none tracking-tighter uppercase">DOSIS 24/7</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black text-emerald-500 tracking-widest uppercase">DELIVERY ACTIVO</span>
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => onNavigateHome(e, item.href.replace('#', ''))}
              className="text-[11px] font-black text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={generateWhatsAppLink("Hola! Quiero hacer un pedido.")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-full text-[11px] font-black transition-all active:scale-95 uppercase tracking-widest shadow-lg shadow-orange-500/10"
            target='_blank'
          >
            WhatsApp Directo
          </a>
        </nav>

        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2.5 rotate-45' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 top-20 bg-black z-50 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] gap-10 p-6">
          {NAV_ITEMS.map((item, index) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => {
                setIsMenuOpen(false);
                onNavigateHome(e, item.href.replace('#', ''));
              }}
              className="text-3xl font-black text-white uppercase tracking-tighter"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
