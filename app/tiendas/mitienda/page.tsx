"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function MiTienda() {
  const [tienda, cambiarTienda] = useState<React.JSX.Element>();
  async function crear_producto(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await fetch("/api/mitienda/misproductos", {
      method: "POST",
      body: formData,
    });

    await RequestStoreData();
  }
  async function agregar_producto(e: any) {
  }

  async function RequestStoreData() {
    const datos = await fetch("/api/mitienda", {
      method: "GET",
    });
    const productos = await fetch("/api/mitienda/misproductos", {
      method: "GET",
    });
    const stock = await fetch("/api/mitienda/mistock", {
      method: "GET",
    });
    const negocio = (await datos.json()).final_result;
    const mis_productos = (await productos.json()).final_result;
    const mi_stock = (await stock.json()).final_result;
    console.log(mi_stock)


    cambiarTienda(
      <div className=" bg-slate-500 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-2 grid-cols-3 shadow-md p-10">
        <div className=" w-[20vw] h-[70vh]">
          <form onSubmit={crear_producto} className="grid bg-slate-600 p-10 shadow-2xl rounded-2xl grid-cols-2 grid-rows-12">
            <h1 className="text-4xl row-span-2 col-span-2 text-center">Registrar Producto</h1>
            <div className="col-span-2 row-span-2"></div>
            <label htmlFor="nombre">Nombre del Producto: </label>
            <input type="text" className="text-black" name="nombre" id="nombre" required />
            <div className="col-span-2 row-span-2"></div>

            <label htmlFor="desc">Descripcion: </label>
            <input type="text" className="text-black" name="desc" id="desc" required />
            <div className="col-span-2 row-span-2"></div>

            <button type="submit" className="row-span-2 col-span-2 outline hover:bg-slate-600 bg-slate-500 rounded-md shadow-2xl mx-10">
              Registrar!
            </button>
          </form>
        </div>
        <div className="w-[20vw] h-[70vh] rounded-2xl flex justify-center overflow-auto">
          <div className="w-full max-h-full overflow-auto">
            <table className="table-fixed text-center bg-gray-800 border-separate w-full rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Descripcion</th>
                </tr>
              </thead>
              <tbody className="overflow-scroll">
                {mis_productos.map((value: any, index: any) => (
                  <tr key={index} className="odd:bg-slate-600 hover:cursor-pointer  even:bg-slate-400" data-id={value.id_producto} onDoubleClick={agregar_producto}>
                    <td className="py-2">{value.titulo}</td>
                    <td className="py-2">{value.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-[20vw] h-[70vh]">
          <table className="table-auto text-left bg-gray-800 border-separate border-spacing-1 w-full rounded-lg shadow-lg">
            <thead>
              <tr className="bg-slate-500 text-white">
                <th className="text-xl px-4 py-2 border-b">Producto</th>
                <th className="text-xl px-4 py-2 border-b">Cantidad</th>
                <th className="text-xl px-4 py-2 border-b">Descripcion</th>
              </tr>
            </thead>
            <tbody className="overflow-scroll">
              {mi_stock.map((value: any, index: any) => {
                return (
                  <tr key={index} className="odd:bg-slate-600 even:bg-slate-400" data-id={value.id_producto}>
                    <td>{value.titulo}</td>
                    <td><input type="number" className="m-4 text-black" /></td>
                    <td>{value.desc}</td>
                  </tr>
                )
              })}


            </tbody>
          </table>
        </div>


      </div>
    );
  }

  useEffect(() => {
    cambiarTienda(
      <div className="bg-gradient-to-r translate-y-2 from-cyan-500 to-purple-600 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-5 shadow-md p-10">
        <h1>Cargando...</h1>
      </div>
    );

    RequestStoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return tienda;
}
