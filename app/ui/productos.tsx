"use client"

import { useRouter } from "next/navigation"

export default function Store_Item(props: any) {

    return (

        <button className="transition bg-cyan-600 hover:bg-cyan-700 hover:-translate-y-3 hover:shadow-2xl shadow-md rounded-xl p-5 flex flex-col min-h-[350px]">
            <h1 className="text-center text-3xl w-[100%]">{props.title}</h1>
            <h1 className="text-center text-xl w-[100%]">{props.desc}</h1>
        </button>
    )
}