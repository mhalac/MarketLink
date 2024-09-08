"use client"

import { useRouter } from "next/navigation"

export default function Store_Item(props:any) {
    const router = useRouter()
    function Pressed(){
        router.push("/tienda/" + props.id)
    }

    return(
        
        <button onClick={Pressed} className="bg-blue-400 shadow-xl rounded-xl p-5 hover:bg-blue-600 flex flex-col min-h-[200px]">
            <h1 className="text-center text-3xl w-[100%]">{props.title}</h1>
            <h1 className="text-center text-xl w-[100%]">{props.desc}</h1>

        </button>
    )
}