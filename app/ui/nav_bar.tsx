"use client";

import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [botones, cambiarBotones] = useState<React.JSX.Element>();
  const router = useRouter();
  useEffect(() => {
    async function WaitForRoles() {
      const aux = await getSession();
      //Si es un cliente
      if (aux?.user.rol == 1) {
        cambiarBotones(
          <div className="w-[60%] h-[20%] max-h-[80px] rounded-full grid grid-cols-3 fixed top-1  shadow-2xl bg-fuchsia-700">
            <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
              <button
                onClick={() => {
                  signOut({
                    callbackUrl:"http://localhost:3000/"
                  });                }}
                className="w-full h-full rounded-full flex items-center justify-center text-white"
              >
                Cerrar sesion
              </button>
            </div>
            <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
              <button
                onClick={() => {
                  router.push("/tiendas")
                }}
                className="w-full h-full rounded-full flex items-center justify-center text-white"
              >
                Tiendas
              </button>
              
            </div>
            <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
              <button
                onClick={() => {
                  router.push("/productos")
                }}
                className="w-full h-full rounded-full flex items-center justify-center text-white"
              >
                Productos
              </button>
              
            </div>
          </div>
        );
      }
      else if(aux?.user.rol == 2){
        cambiarBotones(
          <div className="w-[60%] h-[20%] max-h-[80px] rounded-full grid grid-cols-2 fixed top-1  shadow-2xl bg-fuchsia-700">
            <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
              <button
                onClick={() => {
                  signOut({
                    callbackUrl:"http://localhost:3000/"
                  });
                }}
                className="w-full h-full rounded-full flex items-center justify-center text-white"
              >
                Cerrar sesion
              </button>
            </div>
            <div className="bg-cyan-500 hover:bg-blue-400 mx-5 my-3 rounded-full flex justify-center items-center">
              <button
                onClick={() => {
                  router.push("/mitienda")
                }}
                className="w-full h-full rounded-full flex items-center justify-center text-white"
              >
                Mi tienda
              </button>
              
            </div>
              
          </div>
        );
      }
      // si es empresario
    }
    WaitForRoles();
  }, [router]);
  return <div className="flex justify-center">
    { botones }
  </div>;
}
