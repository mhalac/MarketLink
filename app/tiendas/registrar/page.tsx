"use client"

import { useState } from "react";

export default function Registrar() {
    const [status, changeStatus] = useState("Enviar");
    async function Submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        changeStatus("Enviando");
        const formdata = new FormData(e.currentTarget);
        const head = new Headers();

    
        const data = await fetch( "/api/creacion/tienda", {
          method: "POST",
          body: formdata,
          cache:"no-store"
    
        });
        changeStatus("Enviado!");
    }
    
    return(
        <div className="bg-fuchsia-500 w-[50%] h-[85%] fixed bottom-10 rounded-bl-2xl rounded-br-2xl grid-rows-5 justify-center shadow-xl">
            <h1 className="text-6xl text-center mt-10">Registra tu negocio</h1>
            <form onSubmit={Submit} className="grid gap-10 grid-cols-4 p-10 mt-5">
                
                <label htmlFor="nombre" className=" text-3xl text-right mr-5">Nombre:</label>
                <input type="text" className="w-[100%] text-black" id="nombre" name="nombre" required/>

                <label htmlFor="desc" className=" text-3xl text-right mr-5">Descripcion:</label>
                <input type="text" className="w-[100%] text-black" id="desc" name="desc" required/>
                
                <label htmlFor="ubic" className=" text-3xl text-right mr-5">Ubicacion:</label>
                <input type="text" className="w-[100%] text-black" id="ubic" name="ubic" required/>

                <div></div>
                
                <div></div>
                <div></div>
                <button className="col-span-2 row-span-3 rounded-full text-4xl hover:bg-cyan-600 bg-cyan-400" type="submit"> {status}</button>
            </form>
        </div>
    )
}