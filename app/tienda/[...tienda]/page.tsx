// "use client"

// import "@/app/globals.css"
// import { useEffect, useState } from "react";
// import ThreeBarMenu from "@/app/ThreeBarMenu";
// export default function Tienda({ params }: { params: { tienda: string } }) {
//   const [props, changeProps] = useState({
//     title: "Cargando",
//     desc: "Cargando",
//     ubicacion: "Cargando...",
//     productos: []
//   });
//   useEffect(() => {
//     async function CargarDatos() {
//       const req = await fetch("http://localhost:3000/api/listarTienda/" + params.tienda[0], {
//         method: "GET"
//       })
//       const json = await req.json();
//       changeProps({
//         title: json.tienda.titulo,
//         desc: json.tienda.descripcion,
//         ubicacion: json.tienda.ubicacion,
//         productos: json.tienda.productos
//       });
//     }
//     CargarDatos();
//   }, [params.tienda]);


//   return (
//     <div className="bg-slate-300 w-full h-screen flex flex-col items-center justify-center">
//       <div className="absolute left-0 top-0">
//         <ThreeBarMenu />
//       </div>
//       <h1 className="text-cyan-600 xl:text-8xl md:text-4xl col-span-3 text-center">
//         {props.title}
//       </h1>
//       <p className="text-3xl text-cyan-600 mt-10">
//         {props.desc}
//       </p>
//       <p className="text-2xl text-cyan-600 mt-5">
//         {props.ubicacion}
//       </p>

//       <table className="mt-10 bg-white shadow-md rounded-lg">
//         <thead>
//           <tr>
//             <th className="text-cyan-600 px-96 py-2">Nombre del Producto</th>
//             <th className="text-cyan-600 px-96 py-2">Descripción del Producto</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.productos.length > 0 ? (
//             props.productos.map((producto: any, index: number) => (
//               <tr key={index}>
//                 <td className="text-cyan-600 border px-96 py-2">{producto.titulo}</td>
//                 <td className="text-cyan-600 border px-96 py-2">{producto.descripcion}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={2} className="text-cyan-600 border px-96 py-2 text-center">
//                 No hay productos disponibles.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";

import "@/app/globals.css";
import { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";

// Definición de tipos
type Producto = {
  titulo: string;
  descripcion: string;
};

type TiendaProps = {
  title: string;
  desc: string;
  ubicacion: string;
  productos: {
    [key: string]: Producto; // Permitir propiedades con nombres dinámicos
  };
};

export default function Tienda({ params }: { params: { tienda: string } }) {
  const [props, changeProps] = useState<TiendaProps>({
    title: "Cargando",
    desc: "Cargando",
    ubicacion: "Cargando...",
    productos: {} // Inicializa como un objeto vacío
  });

  useEffect(() => {
    async function CargarDatos() {
      try {
        const req = await fetch("http://localhost:3000/api/listarTienda/" + params.tienda[0], {
          method: "GET"
        });

        // Verificar si la respuesta es correcta
        if (!req.ok) {
          throw new Error(`HTTP error! status: ${req.status}`);
        }

        const json = await req.json();

        // Asegúrate de que json.tienda tenga los datos esperados
        changeProps({
          title: json.tienda.titulo,
          desc: json.tienda.descripcion,
          ubicacion: json.tienda.ubicacion,
          productos: json.tienda // Asigna todos los productos como propiedades
        });
      } catch (error) {
        console.error("Error al cargar los datos:", error);
        changeProps({
          title: "Error",
          desc: "No se pudieron cargar los datos.",
          ubicacion: "",
          productos: {} // Resetear productos
        });
      }
    }
    CargarDatos();
  }, [params.tienda]);
  ;

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
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.productos).length > 0 ? (
            Object.keys(props.productos)
              .filter(key => key.startsWith("producto_")) // Filtrar solo las propiedades de productos
              .map((key, index) => {
                const producto = props.productos[key]; // Ahora TypeScript sabe que es un Producto
                return (
                  <tr key={index}>
                    <td className="text-cyan-600 border px-96 py-2">{producto.titulo}</td>
                    <td className="text-cyan-600 border px-96 py-2">{producto.descripcion}</td>
                  </tr>
                );
              })
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
