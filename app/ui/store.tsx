"use client"

import { useRouter } from "next/navigation"

export default function Store_Item(props:any) {
    console.log(props);
    const router = useRouter()
    function Pressed(){
        router.push("/tienda/" + props.id_negocio)
    }

    return(
        
        <button onClick={Pressed} className="bg-slate-400 rounded-xl hover:bg-slate-600 flex flex-col min-h-[200px]">
            <h1 className="text-center text-3xl w-[100%]">{props.title}</h1>
            <h1 className="text-center text-xl w-[100%]">{props.desc}</h1>

        </button>
    )
}