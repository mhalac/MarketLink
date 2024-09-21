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
        <div>
            <div className="absolute left-0 top-0">
            <ThreeBarMenu/>
            </div>
        <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center ">
            <div className="reactive justify-center rounded-lg ">
                <form onSubmit={Submit}>
                    <label className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent leading-normal m-3" htmlFor="username">Usuario</label>
                    <input className="text-2xl bg-white text-black rounded-md m-3 shadow-md" name="username" id="username" type="text" />

                    <label className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent leading-normal m-3" htmlFor="password">Password</label>
                    <input className="text-2xl bg-white text-black rounded-md m-3 shadow-md" name="password" id="password" type="password" />

                    <button  className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded text-3xl text-white m-3" type="submit">ENVIAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}    