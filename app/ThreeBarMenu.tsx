"use client";
import React, { useState, useEffect } from 'react';

export default function ThreeBarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // Estado para manejar la animación

  useEffect(() => {
    if (isOpen) {
      setShouldRenderMenu(true); // Añadimos el menú al DOM
      setTimeout(() => {
        setIsAnimating(true); // Activamos la animación después de que el menú esté en el DOM
      }, 50); // Retraso pequeño para dar tiempo al renderizado
    } else {
      setIsAnimating(false); // Desactivamos la animación
      const timer = setTimeout(() => setShouldRenderMenu(false), 300); // Esperamos la duración de la transición antes de eliminar el menú
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button 
        onClick={toggleMenu} 
        className="p-4 text-my-blue rounded-br"
      >
        <div className="w-6 h-1 bg-purple-600 mb-1 rounded"></div>
        <div className="w-6 h-1 bg-purple-600 mb-1 rounded"></div>
        <div className="w-6 h-1 bg-purple-600 rounded"></div>
      </button>

      {/* Solo renderizamos el menú si shouldRenderMenu es true */}
      {shouldRenderMenu && (
        <nav 
          className={`menu-bar fixed w-64 h-full bg-my-blue text-white
                      flex flex-col items-center pt-10 transition-transform duration-300 
                      ${isAnimating ? 'translate-x-0' : '-translate-x-full'}`}>
          
          {/* Botón para cerrar el menú */}
          <button 
            onClick={() => setIsOpen(false)}
            className="transition-transform duration-300 mb-5"
          >
            Cerrar
          </button>

          <a href="../" className="py-2 px-4">Inicio</a>
          <a href="../tiendas" className="py-2 px-4">Tiendas</a>
          <a href="../contactanos" className="py-2 px-4">Contacto</a>
        </nav>
      )}
    </div>
  );
}
