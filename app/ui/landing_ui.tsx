// esto es la imagen grande que se va a cargar cuando entres a la pagina.
// frontend customizen esto
"use client";

import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LandingUI() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="bg-slate-200 h-screen w-[50%] min-w-[540px] align-middle grid-rows-3 items-center place-items-center grid">
        <h1 className="text-8xl text-black text-center">MarketLink</h1>
        <p className="text-2xl text-gray-700 text-center">Bla bla bla</p>
        <button
          className="bg-green-400 h-[20%] w-[50%]"
          onClick={() => {
            router.push("/tiendas");
          }}
        >
          ENTRAR
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-200 h-screen w-[50%] min-w-[540px] align-middle grid-rows-3 items-center place-items-center grid">
      <h1 className="text-8xl text-black text-center">MarketLink</h1>
      <p className="text-2xl text-gray-700 text-center">Bla bla bla</p>
      <button
        className="bg-green-400 h-[20%] w-[50%]"
        onClick={() => {
          signIn("github");
        }}
      >
        INICIAR SESION
      </button>
    </div>
  );
}
