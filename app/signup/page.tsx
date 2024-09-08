"use client"

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
            <form onSubmit={Submit}>
                <label className="text-black" htmlFor="username">Usuario</label>
                <input className="bg-black" name="username" id="username" type="text" />


                <label className="text-black" htmlFor="password">Password</label>
                <input className="bg-black" name="password" id="password" type="password" />

                <button  className="bg-black" type="submit">ENVIAR</button>
            </form>
        </div>
    )
}