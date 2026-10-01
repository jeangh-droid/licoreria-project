import React from 'react';
import { generateWhatsAppLink } from '../../constants';

const FloatingWhatsApp = () => {
  return (
    <div className="relative">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[#00a884] rounded-full blur-[20px] opacity-40 animate-pulse"></div>
        
        <a 
          href={generateWhatsAppLink("Hola! Quisiera hacer un pedido rápido.")}
          className="w-16 h-16 bg-[#00a884] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative z-10"
          target='_blank'
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.284l-.569 2.1c-.149.546.342 1.038.888.888l2.1-.569c1.014.658 1.986 1.039 3.284 1.038 3.181-.001 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.766-5.767zm3.387 7.464c-.09.254-.51.481-.71.514-.199.033-.464.054-.741-.034-.176-.056-.407-.134-1.127-.433-1.002-.417-1.645-1.44-1.695-1.507-.05-.067-.373-.497-.373-.947 0-.45.234-.67.317-.761.083-.09.183-.113.243-.113.06 0 .12.001.173.003.056.002.131-.021.206.158.075.179.255.623.28.673.025.05.04.108.01.168-.03.06-.05.1-.1.16-.05.06-.104.133-.149.178-.051.05-.104.104-.045.206.059.102.261.431.561.698.386.345.712.451.812.492.1.041.158.034.216-.032.059-.066.251-.294.318-.394.067-.1.134-.083.226-.05.092.033.585.275.685.326.1.05.167.075.192.117.025.042.025.242-.066.496z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;