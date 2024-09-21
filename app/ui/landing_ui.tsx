"use client";

import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThreeBarMenu from "../ThreeBarMenu";

export default function LandingUI() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  if(status === "authenticated"){
    router.push("/tiendas/")
  }

  return (
    <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center px-4 ">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent leading-normal">
        MarketLink
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 text-center mb-8">
        ¡Revisa el stock de tu producto favorito!
      </p>
      <div className="w-full flex flex-col items-center">
        <button
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-6 rounded-lg transition-all duration-300 w-full max-w-[300px] text-center mb-4"
          onClick={() => {
            signIn();
          }}
        >
          INICIAR SESIÓN
        </button>
        <Link
          href="/signup/"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-6 rounded-lg transition-all duration-300 w-full max-w-[300px] text-center mb-4"
        >
          REGISTRARSE
        </Link>
      </div>
    </div>
  );
}
