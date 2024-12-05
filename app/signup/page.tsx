"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function MenuRegister() {
    const [visible,changeVisible] = useState("hidden")
    async function Submit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);

        const data = await fetch("/api/signup/",{
            method:"POST",
            body: formdata,
        })
        const resp = await data.json()
        if (resp.status === 200){

            await signIn("credentials",{
                username:formdata.get("username"),
                password:formdata.get("password"),
                redirect:true,
                callbackUrl:"/tiendas"
            })
        }else{
            changeVisible("visible")
        }
    }

    return(            
        <div>

            <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center">
                <div className="bg-slate-200 w-[300px] h-[350px] reactive flex flex-col justify-center rounded-lg shadow-2xl">
                    <form onSubmit={Submit} className="flex flex-col items-center">
                        <label 
                            className="text-3xl font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal" 
                            htmlFor="username">
                            Usuario
                        </label>
                        <input 
                            className="w-[80%] text-2xl bg-white text-black rounded-md shadow-2xl " 
                            name="username" 
                            id="username" 
                            type="text" 
                        />

                        <label 
                            className="text-3xl font-extrabold bg-cyan-500 bg-clip-text text-transparent leading-normal" 
                            htmlFor="password">
                            Contraseña
                        </label>
                        <input 
                            className="w-[80%] text-2xl bg-white text-black rounded-md shadow-2xl" 
                            name="password" 
                            id="password" 
                            type="password" 
                        />
                        <h1 className={'text-red-500 text-2xl ' + visible}>Usuario/Password no valido </h1>
                        <button 
                            className="bg-cyan-500 rounded hover:bg-cyan-600 hover:shadow-md text-2xl text-white m-6 w-[50%] shadow-2xl" 
                            type="submit">
                                ENVIAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
