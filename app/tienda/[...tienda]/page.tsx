"use client"

import "@/app/globals.css"
import { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";

export default function Tienda({ params }: { params: { tienda: string } }) {
  const [props, changeProps] = useState({
    title: "Cargando...",
    desc: "Cargando...",
    ubicacion: "Cargando...",
    productos: []
  });

  useEffect(() => {
    async function GetProps() {
      const req = await fetch("/api/listado/" + params.tienda[0], {
        method: "GET"
      });
      const data = await req.json();

      changeProps({
        title: data.result.nombre_negocio || "No existen Items",
        desc: data.result.desc_negocio || "No existen Items",
        ubicacion: data.result.ubicacion,
        productos: data.result.negocio_stock
      });
    }
    GetProps();
  }, [params.tienda]);

  return (
    <div className="bg-gradient-to-b from-slate-300 to-slate-100 w-full min-h-screen flex flex-col items-center py-10">
      <div className="absolute left-0 top-">
        <ThreeBarMenu />
      </div>
      <h1 className="text-cyan-700 xl:text-6xl md:text-5xl sm:text-4xl font-bold text-center">
        {props.title}
      </h1>
      <p className="text-2xl text-gray-700 mt-4">{props.desc}</p>
      <p className="text-xl text-gray-600 mt-2 italic">{props.ubicacion}</p>

      <div className="w-[90%] md:w-[70%] lg:w-[60%] flex flex-col items-center mt-8">
        <table className="w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-cyan-600 text-white">
            <tr>
              <th className="px-6 py-3">Nombre del Producto</th>
              <th className="px-6 py-3">Descripción</th>
              <th className="px-6 py-3">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {props.productos.length > 0 ? (
              props.productos.map((producto: any, index: number) => (
                <tr key={index} className="even:bg-slate-100">
                  <td className="text-black text-center px-6 py-4 border-b">{producto.titulo}</td>
                  <td className="text-black text-center px-6 py-4 border-b">{producto.descripcion}</td>
                  <td className="text-black text-center px-6 py-4 border-b">{producto.cantidad_stock}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center text-gray-500 py-6">
                  No hay productos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
