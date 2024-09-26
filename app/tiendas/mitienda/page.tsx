"use client";
import React, { useEffect, useState } from "react";

export default function MiTienda() {
  const [tienda, cambiarTienda] = useState<React.JSX.Element>();
  useEffect(() => {
    async function RequestStoreData() {
      const datos = await fetch("/api/mitienda", {
        method: "GET",
      });
      const productos = await fetch("/api/mitienda/misproductos", {
        method: "GET",
      });
      const mis_productos = (await datos.json()).final_result;
      const negocio = (await datos.json()).final_result;
      cambiarTienda(
        <div className="bg-gradient-to-r translate-y-2 from-cyan-500 to-purple-600 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-1 grid-cols-3  shadow-md p-10">
          <div className=" w-[20vw] h-[70vh]">
            <table className="table-auto text-left bg-gray-800 border-separate border-spacing-4 w-full rounded-lg shadow-lg">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="text-xl px-4 py-2 border-b border-purple-800">Producto</th>
                  <th className="text-xl px-4 py-2 border-b border-purple-800">Cantidad</th>
                  <th className="text-xl px-4 py-2 border-b border-purple-800">Descripcion</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>

          </div>
          <div className="outline-dashed w-[20vw] h-[70vh]">

          </div>
          <div className="outline-dashed w-[20vw] h-[70vh]">

          </div>
        </div>
      );
    }
    cambiarTienda(
      <div className="bg-gradient-to-r translate-y-2 from-cyan-500 to-purple-600 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-5  shadow-md p-10">
        <h1>Cargando...</h1>
      </div>
    );
    RequestStoreData();
  }, []);

  return tienda;
}
