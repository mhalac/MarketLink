"use client";

import { signOut } from "next-auth/react";

export default function NavBar() {
  return (
    <div className="w-[60%] h-[20%] max-h-[80px] rounded-full grid grid-cols-5 fixed top-1  shadow-2xl bg-fuchsia-700">
      <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
        <button
          onClick={() => {
            signOut({
              callbackUrl:
                "http://dev-va6sz37h8lpdzwwf.us.auth0.com/v2/logout?returnTo=http://localhost:3000", // Your app's URL after logout
            });
          }}
          className="w-full h-full rounded-full flex items-center justify-center text-white"
        >
          Inicio
        </button>
      </div>
      <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
        <a
          href=""
          className="w-full h-full rounded-full flex items-center justify-center text-white"
        >
          Productos
        </a>
      </div>
      <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
        <a
          href="/tiendas/"
          className="w-full h-full rounded-full flex items-center justify-center text-white"
        >
          Tiendas
        </a>
      </div>
      <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
        <a
          href="/tiendas/registrar"
          className="w-full h-full rounded-full flex items-center justify-center text-white"
        >
          Registrar Tienda
        </a>
      </div>
      <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
        <a
          href="/productos/"
          className="w-full h-full rounded-full flex items-center justify-center text-white"
        >
          Actualizar Stock
        </a>
      </div>
    </div>
  );
}
