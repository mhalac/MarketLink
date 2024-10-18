"use client";
import React, { useEffect, useState } from "react";

export default function MiTienda() {
  const [misProductos, setMisProductos] = useState<any[]>([]);
  const [displayStock, setDisplayStock] = useState<any[]>([]);

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
    const new_array = [...displayStock];
    const tds = e.currentTarget.querySelectorAll("td");
    const productId = Number(e.currentTarget.dataset.id_producto);
    if (new_array.find((item) => item.id_producto === productId)) {
      return;
    }
    const item = {
      titulo: tds[0].textContent || "",
      cantidad: 1,
      desc: tds[1].textContent || "",
      id_producto: productId,
    };

    new_array.push(item);

    setDisplayStock(new_array);
  }

  async function RequestStoreData() {
    const productos = await fetch("/api/mitienda/misproductos", {
      method: "GET",
    });
    const stock = await fetch("/api/mitienda/mistock", {
      method: "GET",
    });

    const misProductosData = (await productos.json()).final_result;
    const localStockData = (await stock.json()).final_result;

    setMisProductos(misProductosData);
    setDisplayStock(localStockData);
  }

  async function enviar() {
    const response = await fetch("/api/mitienda/mistock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(displayStock),
    });

    if (response.ok) {
      alert("Stock actualizado correctamente");
      await RequestStoreData();
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  }

  const actualizarNumero = (index: number, value: string) => {
    const newStock = [...displayStock];
    const cantidadNum = Number(value);
    if (!isNaN(cantidadNum) && cantidadNum >= 0) {
      newStock[index].cantidad = cantidadNum;
      setDisplayStock(newStock);
    }
  };

  useEffect(() => {
    RequestStoreData();
  }, []);

  return (
    <div className="bg-slate-500 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-2 grid-cols-3 shadow-md p-10">
      <div className="w-[20vw] h-[70vh]">
        <form
          onSubmit={crear_producto}
          className="grid bg-slate-600 p-10 shadow-2xl rounded-2xl grid-cols-2 grid-rows-12"
        >
          <h1 className="text-4xl row-span-2 col-span-2 text-center">
            Registrar Producto
          </h1>
          <div className="col-span-2 row-span-2"></div>

          <label htmlFor="nombre">Nombre del Producto: </label>
          <input
            type="text"
            className="text-black"
            name="nombre"
            id="nombre"
            required
          />
          <div className="col-span-2 row-span-2"></div>

          <label htmlFor="desc">Descripcion: </label>
          <input
            type="text"
            className="text-black"
            name="desc"
            id="desc"
            required
          />
          <div className="col-span-2 row-span-2"></div>

          <button
            type="submit"
            className="row-span-2 col-span-2 outline hover:bg-slate-600 bg-slate-500 rounded-md shadow-2xl mx-10"
          >
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
              {misProductos && misProductos.length > 0 && misProductos.map((value: any, index: any) => (
                <tr
                  key={index}
                  className="odd:bg-slate-600 hover:cursor-pointer even:bg-slate-400"
                  data-id_producto={value.id_producto}
                  onDoubleClick={agregar_producto}
                >
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
            {displayStock && displayStock.length > 0 && displayStock.map((item: any, index: any) => (
              <tr data-id_producto={item.id_producto} key={index}>
                <td>{item.titulo}</td>
                <td>
                  <input
                    type="number"
                    value={item.cantidad}
                    onChange={(e) => actualizarNumero(index, e.target.value)}
                    className="bg-slate-950 w-16 text-center"
                    min="0"
                  />
                </td>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>

        </table>
        <div className="w-full flex justify-center items-center h-fit">
          <button
            onClick={enviar}
            className="bg-blue-400 py-5 px-10 rounded-xl mt-5"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
