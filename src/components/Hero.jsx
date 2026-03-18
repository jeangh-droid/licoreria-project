
import React, { useState, useEffect } from 'react';
import { COMBOS, generateWhatsAppLink } from '../../constants';

const Hero = ({ onNavigateCatalog, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
      setIsImageLoaded(false);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const combo = COMBOS.slice(0, 3)[currentIndex];

  return (
    <div className="relative w-full overflow-hidden rounded-[3rem] shadow-2xl mb-12 min-h-[500px] md:min-h-[600px] flex items-center bg-[#0a0a0a]">
      
      {!isImageLoaded && (
        <div className="absolute inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
            <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px]">Cargando Dosis...</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop&sat=-100" 
          alt="Background" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      </div>
      
      <div className={`relative h-full container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full z-10 transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        <div key={`text-${currentIndex}`} className="flex-[1.2] md:ml-20 text-white z-10 text-center md:text-left order-2 md:order-1 animate-hero-text">
          <span className="inline-block bg-white/10 backdrop-blur-md px-6 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase mb-6 border border-white/10">
            LO MÁS VENDIDO
          </span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-4 leading-[0.9] tracking-tighter uppercase">
            {combo.name.split(' ').slice(0, 2).join(' ')} <br/>
            <span className="text-white/60">{combo.name.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-base md:text-xl font-bold mb-10 opacity-70 leading-tight max-w-lg mx-auto md:mx-0">
            {combo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => onAddToCart(combo, 1)}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-[1.5rem] text-lg font-black shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tighter border border-white/20"
            >
              AÑADIR AL CARRITO
            </button>
            <a 
              href={generateWhatsAppLink(`¡Hola! Quiero pedir el ${combo.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#ff6d00] hover:bg-white hover:text-black text-white px-8 py-4 rounded-[1.5rem] text-lg font-black shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tighter"
            >
              PEDIR POR WHATSAPP
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div key={`img-${currentIndex}`} className="flex-1 relative z-10 md:mr-20 flex justify-center items-center order-1 md:order-2 animate-hero-img">
           <div className="relative group/img-hero scale-90 md:scale-110 lg:scale-125">
              <div className="relative">
                 <div className="absolute inset-0 bg-blue-300/10 blur-[100px] rounded-full"></div>
                 <img 
                   src={combo.image} 
                   alt={combo.name}
                   onLoad={() => setIsImageLoaded(true)}
                   className="relative w-auto h-56 sm:h-72 md:h-80 lg:h-[420px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                 />
              </div>
           </div>
        </div>

      </div>

      {/* Indicadores */}
      <div className="absolute bottom-[15px] left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {COMBOS.slice(0, 3).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === currentIndex ? 'w-8 bg-[#ff6d00]' : 'w-2 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;