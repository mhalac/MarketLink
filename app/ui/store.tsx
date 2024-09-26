"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Store_Item(props:any) {
    const router = useRouter()
    function Pressed(){
        router.push("/tienda/" + props.id)
    }

    return(
        
        <button onClick={Pressed} className="transition bg-gradient-to-r from-cyan-500 to-purple-600 hover:-translate-y-3 shadow-xl rounded-xl p-5 flex flex-col min-h-[200px]">
            <h1 className="text-center text-3xl w-[100%]">{props.title}</h1>
            <h1 className="text-center text-xl w-[100%]">{props.desc}</h1>
                <div className="">
                    <Image
                        className=""
                        src="/landing.jpg"
                        alt=""
                        layout=""
                        width={100}
                        height={50}
                    ></Image>
                </div>
        </button>
    )
}