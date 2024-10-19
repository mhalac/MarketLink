"use client";
import React, { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function MiTienda() {
  const [misProductos, setMisProductos] = useState<any[]>([]);
  const [displayStock, setDisplayStock] = useState<any[]>([]);
  const router = useRouter()

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
    const session = await getSession()
    if(session === null){
      router.push("/")
    }
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
    <div className="bg-slate-300 w-[100%] h-[100%] fixed rounded-lg grid grid-rows-2 grid-cols-3 shadow-md p-10">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>
      <div className="w-[30vw] h-[70dvh] p-2">
        <form
          onSubmit={crear_producto}
          className="grid h-[100%] bg-cyan-600 p-10 shadow-2xl rounded-2xl grid-cols-2 grid-rows-12"
        >
          <h1 className="text-5xl m-2 font-extrabold row-span-2 col-span-2 text-center">
            <a className="">Registrar Producto</a>
          </h1>
          <div className="col-span-2 row-span-2"></div>

          <label htmlFor="nombre" className="text-lg m-2 font-extrabold">Nombre del Producto: </label>
          <input
            type="text"
            className="text-black rounded-md shadow-2xl"
            name="nombre"
            id="nombre"
            required
          />
          <div className="col-span-2 row-span-2"></div>

          <label htmlFor="desc" className="text-lg m-2 font-extrabold">Descripcion: </label>
          <input
            type="text"
            className="text-black rounded-md shadow-2xl"
            name="desc"
            id="desc"
            required
          />
          <div className="col-span-2 row-span-2"></div>

          <button
            type="submit"
            className="row-span-2 col-span-2 outline bg-cyan-600 hover:bg-cyan-700 rounded-md shadow-2xl mx-10 text-lg m-2 font-extrabold"
          >
            Registrar!
          </button>
        </form>
      </div>

      <div className="w-[30vw] h-[90vh] rounded-2xl flex flex-col p-2">
        <div className="w-full max-h-full overflow-hidden ">
          <table className="table-fixed text-center bg-cyan-500 border-separate w-full rounded-t-lg shadow-2xl">
            <thead>
              <tr>
                <th className="px-4 py-2 text-4xl font-extrabold">Nombre</th>
                <th className="px-4 py-2 text-4xl font-extrabold">Descripcion</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="w-[100%] max-h-[80vh] overflow-y-auto scrollbar-hidden">
          <table className="table-fixed text-center bg-cyan-500 border-separate w-full rounded-b-lg shadow-2xl">
            <tbody>
              {misProductos && misProductos.length > 0 && misProductos.map((value: any, index: any) => (
                <tr
                  key={index}
                  className="odd:bg-cyan-900 hover:cursor-pointer hover:bg-cyan-700 even:bg-teal-600"
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

      <div className="w-[34vw] h-[90vh] p-2">
        <table className="table-auto text-left bg-cyan-500 border-separate border-spacing-1 w-full rounded-lg shadow-lg">
          <thead>
            <tr className="bg-cyan-700 text-white font-extrabold">
              <th className="text-xl px-4 py-2 border-b text-center">Producto</th>
              <th className="text-xl px-4 py-2 border-b text-center">Cantidad</th>
              <th className="text-xl px-4 py-2 border-b text-center">Descripcion</th>
            </tr>
          </thead>
          <tbody className="overflow-scroll text-center">
            {displayStock && displayStock.length > 0 && displayStock.map((item: any, index: any) => (
              <tr data-id_producto={item.id_producto} key={index}>
                <td>{item.titulo}</td>
                <td>
                  <input
                    type="number"
                    value={item.cantidad}
                    onChange={(e) => actualizarNumero(index, e.target.value)}
                    className="bg-cyan-700 w-16 text-center font-extrabold"
                    min="0"
                  />
                </td>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>

        </table>
        <div className="w-full flex justify-center items-center h-fit p-2">
          <button
            onClick={enviar}
            className="bg-cyan-500 py-5 px-10 rounded-xl mt-5 font-extrabold text-center"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
