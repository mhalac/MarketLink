"use client"
import ThreeBarMenu from "../ThreeBarMenu";

export default function MenuRegister() {
    async function Submit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault(); // Prevent the default form submission
        const formdata = new FormData(e.currentTarget);

        const data = await fetch("/api/signup/",{
            method:"POST",
            body: formdata,
        })

    }
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center ">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-[50%] h-[85%] fixed rounded-lg grid grid-rows-5 justify-center shadow-md p-10">
            <div className="absolute left-0">
            <ThreeBarMenu/>
            </div>
                <form onSubmit={Submit}>
                    <label className="text-white m-3" htmlFor="username">Usuario</label>
                    <input className="bg-white text-black rounded-md m-3" name="username" id="username" type="text" />

                    <label className="text-white m-3" htmlFor="password">Password</label>
                    <input className="bg-white text-black rounded-md m-3" name="password" id="password" type="password" />

                    <button  className="" type="submit">ENVIAR</button>
                    </form>
                </div>
            </div>
    )
}    