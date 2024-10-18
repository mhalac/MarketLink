"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThreeBarMenu from '../ThreeBarMenu';

export default function Contact() {
  return (
    <div className="overflow-hidden h-screen bg-slate-300 flex flex-col items-center justify-start relative">
      <div className='absolute left-0 top-0'><ThreeBarMenu/></div>

    {/*Información de contacto*/}                                                                             
      <div className="bg-white p-2 rounded-lg shadow-2xl mb-8 w-full max-w-md translate-y-24 ">
        <h2 className="text-2xl font-semibold mb-4 text-black">Información d Contacto</h2>
        <p className="mb-2">
          <strong className="text-black">Email: contacto@ejemplo.com</strong> 
        </p>
        <p className="mb-2">
          <strong className="text-black">Teléfono: +54 9 1234 5678</strong>
        </p>
        <div className="mt-2">
          <h3 className="text-xl font-semibold mb-2 text-black">redes sociales</h3>
          <div className="flex space-x-4">
            {/*Enlaces a redes sociales*/}
            <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">
              Facebook</a>
            <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
              Instagram</a>
          </div>
        </div>
      </div>

      {/*Formulario de contacto*/}
      <div className="bg-white p-6 mb rounded-lg shadow-2xl w-full max-w-md translate-y-20">
        <h2 className="text-2xl font-semibold mb-4 text-black">mandanos un mensaje</h2>
        <form className="flex flex-col space-y-4">
          {/*para el mensaje*/}
          <textarea
            className="border border-my-blue p-2 rounded-md resize-none h-32 text-black"
            placeholder="Escribe tu mensaje aquí..."
            required></textarea>

          {/*para el mail*/}
          <input
            type="email"
            className="border border-my-blue p-2 rounded-md text-black"
            placeholder="Tu correo electrónico"
            required/>

          {/*para enviar*/}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-900">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
