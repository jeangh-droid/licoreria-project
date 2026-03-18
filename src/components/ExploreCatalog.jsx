
import React, { useState, useEffect, useMemo } from 'react';
import { CATALOG_PRODUCTS, CATEGORIES_GROUPS, COMBOS } from '../../constants';
import PromotionCard from './PromotionCard';

const ExploreCatalog = ({ onSelectProduct, initialGroup = 'solos', onAddToCart }) => {
  const [openGroup, setOpenGroup] = useState(initialGroup);
  const [selectedSub, setSelectedSub] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('popular');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Sincronizar con el grupo inicial y seleccionar la primera subcategoría
  useEffect(() => {
    setOpenGroup(initialGroup);
    setSelectedSub('');
    setCurrentPage(1);
  }, [initialGroup]);

  // Resetear página al cambiar de subcategoría o búsqueda
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSub, searchTerm, openGroup, priceRange, sortBy]);

  
 const filteredProducts = useMemo(() => {
    let baseProducts = openGroup === 'promos' ? COMBOS : CATALOG_PRODUCTS;

    let filtered = baseProducts.filter(product => {
      const productCat = product.category?.toLowerCase() || "";
      
      if (openGroup === 'complementos') {
        const complementosCats = ['rtd', 'cigarro', 'bebida', 'snack', 'complementos'];
        
        if (!selectedSub) {
          return complementosCats.includes(productCat);
        }
        return productCat === selectedSub;
      }
      
      if (!selectedSub) return true;
      const isPromo = openGroup === 'promos';
      if (isPromo) {
        return selectedSub.includes(productCat) || productCat.includes(selectedSub.replace('-promo', ''));
      }
      return productCat === selectedSub;
    });

    // Filtramos por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtramos por rango de precio
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Ordenamiento
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [openGroup, selectedSub, searchTerm, priceRange, sortBy]);

  // Lógica de Paginación
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  return (
    <div className="min-h-screen bg-[#ffff93] text-black pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="w-full lg:w-64 flex flex-col gap-6 flex-shrink-0 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-black rounded-[2.5rem] p-6 text-white shadow-2xl overflow-hidden">
              <div className="mb-8">
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-5">Filtrar Licores</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-[10px] focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                  />
                  <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                {CATEGORIES_GROUPS.map((group) => (
                  <div key={group.id} className="border-b border-zinc-800 pb-4 last:border-0">
                    <button 
                      onClick={() => {
                        setOpenGroup(group.id);
                        setSelectedSub('');
                      }}
                      className="flex items-center justify-between w-full text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${openGroup === group.id && !selectedSub ? 'text-orange-500' : (openGroup === group.id ? 'text-white' : 'text-zinc-400')} group-hover:text-white`}>
                          {group.name}
                        </span>
                      </div>
                      <svg className={`w-4 h-4 text-zinc-600 transition-transform ${openGroup === group.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openGroup === group.id && group.subcategories && (
                      <div className="mt-4 flex flex-col gap-1.5 pl-1 animate-in fade-in slide-in-from-top-2 duration-300">
                        {group.subcategories.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => setSelectedSub(sub.id)}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[10px] font-bold tracking-widest transition-all ${
                              selectedSub === sub.id 
                              ? 'bg-white text-black shadow-lg scale-105' 
                              : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
                            }`}
                          >
                            <span>{sub.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black rounded-[2.5rem] p-6 text-white shadow-2xl">
              <h4 className="text-[9px] font-black uppercase italic tracking-widest mb-6 text-zinc-400">Rango de Precio</h4>
              <div className="space-y-4">
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">
                  <span>S/ {priceRange[0]}</span>
                  <span>S/ {priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-black">
                {selectedSub ? selectedSub.replace('-', ' ') : openGroup.replace('-', ' ')}
              </h2>
              <div className="relative">
                <button 
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="hidden sm:flex text-[10px] font-black text-black/40 hover:text-black items-center gap-2 uppercase tracking-widest group"
                >
                  Ordenar: <span className="text-black underline underline-offset-4 decoration-orange-500">
                    {sortBy === 'popular' ? 'Más Populares' : sortBy === 'price-asc' ? 'Menor Precio' : sortBy === 'price-desc' ? 'Mayor Precio' : 'Nombre'}
                  </span>
                </button>
                
                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black rounded-2xl shadow-2xl z-50 p-2 border border-white/5 animate-in fade-in zoom-in duration-200">
                    {[
                      { id: 'popular', label: 'Más Populares' },
                      { id: 'price-asc', label: 'Menor Precio' },
                      { id: 'price-desc', label: 'Mayor Precio' },
                      { id: 'name', label: 'Nombre' }
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSortBy(option.id);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors ${
                          sortBy === option.id ? 'bg-orange-500 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {displayProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {displayProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="transition-transform hover:scale-[1.01]"
                    >
                      <PromotionCard 
                        product={product} 
                        onAddToCart={onAddToCart} 
                        onNavigate={() => onSelectProduct(product)}
                      />
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    <button 
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => prev - 1)}
                      className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed hover:bg-orange-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div className="flex gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${
                            currentPage === i + 1 
                            ? 'bg-orange-500 text-white shadow-lg scale-110' 
                            : 'bg-white text-black hover:bg-black hover:text-white'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <button 
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => prev + 1)}
                      className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed hover:bg-orange-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-black/5 p-8 rounded-full mb-4">
                  <svg className="w-12 h-12 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black uppercase">No hay productos</h3>
                <p className="text-black/40 font-bold">Intenta con otra categoría o término de búsqueda.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ExploreCatalog;
