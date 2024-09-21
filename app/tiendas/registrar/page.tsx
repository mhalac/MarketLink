"use client";

import { useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";

export default function Registrar() {
  const [status, changeStatus] = useState("Enviar");

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    changeStatus("Enviando");
    const formdata = new FormData(e.currentTarget);
    
    const data = await fetch("/api/creacion/tienda", {
      method: "POST",
      body: formdata,
      cache: "no-store",
    });
    
    changeStatus("Enviado!");
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-full h-screen fixed rounded-lg grid grid-rows-5 justify-center shadow-md p-10">
      <div className="absolute left-0">
        <ThreeBarMenu/>
      </div>

      <h1 className="text-6xl text-center mt-5 text-white font-bold">Registra tu negocio</h1>
      
      <form onSubmit={Submit} className="grid gap-8 grid-cols-2 mt-10 text-white">
        <label htmlFor="nombre" className="text-2xl text-right">Nombre:</label>
        <input type="text" className="w-full p-3 rounded-lg text-black" id="nombre" name="nombre" required/>

        <label htmlFor="desc" className="text-2xl text-right">Descripción:</label>
        <input type="text" className="w-full p-3 rounded-lg text-black" id="desc" name="desc" required/>

        <label htmlFor="ubic" className="text-2xl text-right">Ubicación:</label>
        <input type="text" className="w-full p-3 rounded-lg text-black" id="ubic" name="ubic" required/>

        <div className="col-span-2 flex justify-center mt-10">
          <button className="w-1/2 p-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-3xl font-bold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-colors duration-300" type="submit">
            {status}
          </button>
        </div>
      </form>
    </div>
  );
}
