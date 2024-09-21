"use client";
import React, { useEffect, useState } from "react";

export default function MiTienda() {
  const [tienda, cambiarTienda] = useState<React.JSX.Element>();
  useEffect(() => {
    async function RequestStoreData() {
      const datos = await fetch("/api/mitienda", {
        method: "GET",
      });
      const negocio = (await datos.json()).final_result;
      cambiarTienda(
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-5 justify-center shadow-md p-10">
          <div className="row-span-1 col-span-3"></div>
          <div className="col-span-3 h-[100%] w-[100%] place-items-center grid grid-rows-3 ">
            <h1 className="text-4xl text-center text-white">
              {negocio.titulo}
            </h1>
            <hr className="w-[50%]" />
          </div>
          <div className="col-span-3 flex flex-row items-center space-x-10 justify-center">
            <h1 className="text-3xl">Descripcion: {negocio.desc}</h1>
            <h1 className="text-3xl">Ubicacion: {negocio.ubicacion}</h1>

          </div>
        </div>
      );
    }
    RequestStoreData();
  }, []);

  return tienda;
}
