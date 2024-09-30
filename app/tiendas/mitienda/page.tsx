"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MiTienda() {
  const [tienda, cambiarTienda] = useState<React.JSX.Element>();
  const router = useRouter()
  function crear_producto(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const enviar = fetch("/api/mitienda/misproductos", {
      method: "POST",
      body: formData
    })
    enviar.then(
      //Agregar que haya un texto que cambie a se ha enviado correctamente.

    )

  }
  useEffect(() => {
    async function RequestStoreData() {
      const datos = await fetch("/api/mitienda", {
        method: "GET",
      });
      const productos = await fetch("/api/mitienda/misproductos", {
        method: "GET",
      });
      const negocio = (await datos.json()).final_result;
      const mis_productos = (await productos.json()).final_result;
      console.log(mis_productos)

      cambiarTienda(
        <div className=" from-cyan-500 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-1 grid-cols-3  shadow-md p-10">
          <div className=" w-[20vw] h-[70vh]">
            <form onSubmit={crear_producto} className="grid grid-cols-2 grid-rows-12">
              <h1 className="text-4xl  row-span-2 col-span-2 text-center">Registrar Producto</h1>
              <div className="col-span-2 row-span-2"></div>
              <label htmlFor="nombre">Nombre del Producto: </label>
              <input type="text" className="text-black" name="nombre" id="nombre" required />
              <div className="col-span-2 row-span-2"></div>

              <label htmlFor="desc">Descripcion: </label>
              <input type="text" className="text-black" name="desc" id="desc" required />
              <div className="col-span-2 row-span-2"></div>

              <button type="submit" className="row-span-2 col-span-2 bg-slate-500 rounded-md shadow-2xl mx-10">Registrar!</button>
            </form>

          </div>
          <div className="w-[20vw] h-[70vh] rounded-2xl flex justify-center overflow-auto">
            <div className="w-full max-h-full overflow-auto">
              <table className="table-auto text-left bg-gray-800 border-separate border-spacing-4 w-full rounded-lg shadow-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  {mis_productos.map((value: any, index: any) => (
                    <tr key={index}>
                      <td className="bg-purple-500 px-4 py-2">{value.titulo}</td>
                      <td className="bg-purple-900 px-4 py-2">{value.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-[20vw] h-[70vh]">
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
