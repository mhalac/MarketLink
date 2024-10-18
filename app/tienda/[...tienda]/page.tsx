"use client"

import "@/app/globals.css"
import { useEffect, useState } from "react";
import ThreeBarMenu from "@/app/ThreeBarMenu";
export default function Tienda({ params }: { params: { tienda: string } }) {
  const [props, changeProps] = useState({
    title: "Cargando",
    desc: "Cargando",
    ubicacion: "Cargando"
  });
  useEffect(() => {
    async function CargarDatos() {
      const req = await fetch("http://localhost:3000/api/listado/" + params.tienda[0], {
        method: "GET"
      })
      const json = await req.json();
      changeProps({ ...props, title: json.result.titulo, desc: json.result.desc })
    }
    CargarDatos();
  }, [])


  return (
    <div className="bg-slate-300 w-full h-screen flex flex-col items-center justify-center ">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>
      <h1 className="text-cyan-600 xl:text-8xl md:text-4xl col-span-3 text-center">
        {props.title}
      </h1>
      <p className="text-3xl text-cyan-600 mt-10">
        {props.desc}
      </p>
      <div>
        folaaa
      </div>
    </div>
  );
}
