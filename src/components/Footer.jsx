
import React from 'react';
import { Facebook, Instagram, MessageCircle, Music2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="relative py-20 flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
            alt="Footer Background" 
            className="w-full h-full object-cover grayscale brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="logo.png" 
              alt="Dosis 24/7 Logo" 
              className="h-32 md:h-48 w-auto object-contain brightness-110 drop-shadow-[0_0_20px_rgba(255,109,0,0.3)]"
            />
          </div>

          <p className="text-white/90 font-black italic text-xl md:text-3xl uppercase tracking-wider mb-8 max-w-5xl leading-none">
            Tu sed no conoce de horarios. <br className="hidden md:block" /> Nosotros tampoco
          </p>

          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff6d00] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-300 shadow-2xl mb-4 group"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-lg font-black tracking-wider">+51 977 335 848</span>
          </a>

          {/* Email */}
          <p className="text-white/80 font-bold text-sm mb-10 tracking-tight">
            informes@dosis247delivery.com
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mb-6">
            <a href="https://www.facebook.com/profile.php?id=61581060594425" className="text-white hover:text-orange-500 transition-colors" target='_blank'>
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/dosis_24_7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white hover:text-orange-500 transition-colors" target='_blank'>
              <Instagram className="w-6 h-6" />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-white hover:text-orange-500 transition-colors" target='_blank'>
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors">
              <Music2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#cc0000] py-4 px-4 text-center">
        <p className="text-white text-[10px] md:text-sm font-black uppercase tracking-[0.4em] md:tracking-[0.8em] leading-none">
          TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO
        </p>
      </div>

      <div className="bg-black py-4 px-4 text-center border-t border-white/5">
        <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">
          <span className="text-white">DOSIS 24/7 DELIVERY</span> Copyright todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
