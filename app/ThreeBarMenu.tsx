"use client";
import React, { useState } from 'react';

export default function ThreeBarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative z-50 ">
      
      <div 
        className="absolute left-0 h-screen w-6 z-40" 
        onMouseEnter={openMenu} //abre el menu 
      ></div>
      
      <button 
        onClick={openMenu} 
        className="p-4 text-white rounded-br"
      >
        <div className="w-6 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl rounded"></div>
      </button>

      <div className='absolute top-0 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl'>
        <nav 
          className={`menu-bar fixed top-0 w-64 h-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl text-white
                      flex flex-col items-center pt-10 transition-transform duration-300 
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onMouseLeave={closeMenu}  // Cierra el menu 
      >
      <button 
          onClick={closeMenu}
          className="m-5 text-lg">
            cerrar
          {/* Botón para cerrar el menú */}  
          </button>

          <a href="../" className="text-lg m-2">Inicio</a>
          <a href="../tiendas" className="text-lg m-2">Tiendas</a>
        </nav>
        </div>
    </div>
  );
}
