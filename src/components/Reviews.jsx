
import React from 'react';
import { EVENT_REVIEWS } from '../../constants';

const Reviews = () => {
  return (
    <section id="resenas" className="py-16 bg-white/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-[#ff6d00] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-2 block">
            EXPERIENCIA DOSIS
          </span>
          <div className="flex flex-col items-center leading-none">
            <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] tracking-tighter uppercase">
              EN TUS
            </h2>
            <h2 className="text-6xl md:text-6xl font-black text-[#ff6d00] tracking-tighter uppercase -mt-1 md:-mt-4">
              EVENTOS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EVENT_REVIEWS.map((review) => (
            <div key={review.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-500">
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img 
                  src={review.image} 
                  alt={review.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#ff6d00] text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-tight shadow-lg">
                    {review.event}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-black text-[#0f172a] uppercase tracking-tighter mb-4">
                  {review.title}
                </h3>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#ff6d00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-500 font-bold text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest block">
                    {review.user}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
