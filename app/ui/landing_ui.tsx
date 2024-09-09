"use client";

import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    <div className="bg-slate-200 h-screen w-full flex flex-col justify-center items-center px-4 ">
      <h1 className="text-6xl md:text-8xl text-black text-center mb-6">
        MarketLink
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 text-center mb-8">
        ¡Revisa el stock de tu producto favorito!
      </p>
      <div className="w-full flex flex-col items-center">
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 w-full max-w-[300px] text-center mb-4"
          onClick={() => {
            signIn();
          }}
        >
          INICIAR SESIÓN
        </button>
        <Link
          href="/signup/"
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 w-full max-w-[300px] text-center mb-4"
        >
          REGISTRARSE
        </Link>
      </div>
    </div>
  );
}
