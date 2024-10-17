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
        <div className="w-6 h-1 bg-cyan-600 shadow-2xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-2xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-2xl rounded"></div>
      </button>

      <div className='absolute top-0 bg-cyan-600 shadow-2xl'>
        <nav
          className={`menu-bar fixed top-0 w-64 h-full bg-slate-200 shadow-2xl text-white
                      flex flex-col items-center pt-10 transition-transform duration-300 
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onMouseLeave={closeMenu}  // Cierra el menu 
        >
          <button
            onClick={closeMenu}
            className="mb-5 text-lg border-2 border-cyan-500 rounded-full w-[70%]">
            <a className="text-2xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Cerrar</a>
            {/* Botón para cerrar el menú */}
          </button>


          <button className="mb-5 text-lg border-2 border-cyan-500 rounded-full w-[70%]">
            <a href="../" className="text-2xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Inicio</a>
          </button>

          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href="../tiendas" className="text-2xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Tiendas</a>
          </button>

          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href='../tiendas/mitienda' className="text-2xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Mi Tienda</a>
          </button>

          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href='../contactanos' className="text-2xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">contactanos</a>
          </button>
        </nav>
      </div>
    </div>
  );
}
