"use client"

import "@/app/globals.css"
import { useEffect, useState } from "react";
export default function Tienda({ params }: { params: { tienda: string } }) {
  const [props,changeProps] = useState({
    title: "Cargando",
    desc:"Cargando",
    ubicacion:"Cargando"
  });
  useEffect(()=>{
    async function CargarDatos() {
      const req = await fetch("http://localhost:3000/api/listado/" + params.tienda[0],{
        method:"GET"
      })
      const json = await req.json();
      changeProps({...props,title:json.result.titulo,desc:json.result.desc})
    }
    CargarDatos();
  },[])
  

  return (
    <div className="bg-fuchsia-500 w-[50%] fixed bottom-3 h-[90%] flex flex-col justify-start items-center">
      <h1 className="xl:text-8xl md:text-4xl col-span-3 text-center">
        {props.title}
      </h1>
      <p className="text-3xl mt-10">
        {props.desc}
      </p>
    </div>
);
}
