"use client"

import "@/app/globals.css"
import { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";
export default function Tienda({ params }: { params: { tienda: string } }) {
  const [props, changeProps] = useState({
    title: "Cargando",
    desc: "Cargando",
    ubicacion: "Cargando...",
    productos: []
  });
  useEffect(()=>{
    async function GetProps() {
      const req = await fetch("/api/listado/" + params.tienda[0], {
        method: "GET"
      })
      const data = await req.json()

    
      changeProps({
        title:data.result.nombre_negocio || "No exsisten Items",
        desc:data.result.desc_negocio || "No exsisten Items",
        ubicacion:data.result.ubicacion,
        productos:data.result.negocio_stock
      })
    }
    GetProps()
  },[params.tienda])


  return (
    <div className="bg-slate-300 w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>
      <h1 className="text-cyan-600 xl:text-8xl md:text-4xl col-span-3 text-center">
        {props.title}
      </h1>
      <p className="text-3xl text-cyan-600 mt-10">
        {props.desc}
      </p>
      <p className="text-2xl text-cyan-600 mt-5">
        {props.ubicacion}
      </p>

      <table className="mt-10 bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="text-cyan-600 px-96 py-2">Nombre del Producto</th>
            <th className="text-cyan-600 px-96 py-2">Descripción del Producto</th>
            <th className="text-cyan-600 px-96 py-2">Cantidad</th>

          </tr>
        </thead>
        <tbody>
          {props.productos.length > 0 ? (
            props.productos.map((producto: any, index: number) => (
              <tr key={index}>
                <td className="text-cyan-600 border px-96 py-2">{producto.titulo}</td>
                <td className="text-cyan-600 border px-96 py-2">{producto.descripcion}</td>
                <td className="text-cyan-600 border px-96 py-2">{producto.cantidad_stock}</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="text-cyan-600 border px-96 py-2 text-center">
                No hay productos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

