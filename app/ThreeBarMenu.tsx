"use client";
import React, { useState } from 'react';
import { signOut, signIn, useSession } from "next-auth/react";

export default function ThreeBarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [rol, setRol] = useState(1);
  const { data: session, status } = useSession();
  console.log(session)
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const cambiarcuenta = async () => {
    const nrol = rol === 1 ? 2 : 1;
    setRol(nrol);

    try {
      const response = await fetch('/api/rolUpdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nrol }),
      });
      if (response.ok) {
        console.log('Rol se cambió');
      } else {
        console.error('Error al cambiar el rol');
      }
    } catch (error) {
      console.error('Error en la petición:', error);
    }
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
        <div className="w-6 h-1 bg-cyan-600 shadow-xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-xl mb-1 rounded"></div>
        <div className="w-6 h-1 bg-cyan-600 shadow-xl rounded"></div>
      </button>

      <div className='absolute top-0 bg-cyan-600 shadow-xl'>
        <nav
          className={`menu-bar fixed top-0 w-64 h-full bg-slate-200 shadow-xl text-white
                      flex flex-col items-center pt-10 transition-transform duration-300 
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onMouseLeave={closeMenu}  // Cierra el menu 
        >
          <button
            onClick={closeMenu}
            className="mb-5 text-lg border-2 border-cyan-500 rounded-full w-[70%]">
            <a className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Cerrar</a>
          </button>

          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href="../tiendas" className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Tiendas</a>
          </button>

          <button onClick={cambiarcuenta} className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href='../tiendas/registrar' className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Añadir Negocio</a>
          </button>

         {session?.user.rol === 2 ? ( <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href='../tiendas/mitienda' className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Mi Tienda</a>
          </button>):(
            <>
            </>
)}

          <button className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
            <a href='../contactanos' className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Contactanos</a>
          </button>

          {status === "authenticated" ? (
            <button onClick={() => signOut()} className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
              <a className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Cerrar Sesion</a>
            </button>
          ) : (
            <button onClick={() => signIn()} className="mb-5 border-2 border-cyan-500 rounded-full w-[70%]">
              <a className="text-xl m-2 font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal">Iniciar Sesion</a>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
