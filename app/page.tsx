"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import HeadButton from "./ui/header_button";

async function HomePage() {
  const { isAuthenticated } = await getKindeServerSession();
  const authed = await isAuthenticated();
  const cuenta =  authed ? "CUENTA" : "INICIAR SESION"
  const direccion = authed ?"/account/user" : "/api/auth/login"
  return (
    <div className="bg-cover flex justify-center h-[100vh] w-[100vw] items-center bg-center background-signup">
      <nav className="bg-slate-700 rounded-full translate-y-1 absolute grid grid-flow-col gap-10 items-center px-14 inset-x-[22vw] top-0 h-16">
        <HeadButton
          title={cuenta}
          direccion={direccion}
          
        />
        <HeadButton title="TIENDAS" />
        <HeadButton title="PRODUCTOS" />
      </nav>
      <section>
        {(await isAuthenticated()) ? (
          <div className="w-[65vw] h-[70vh] bg-slate-700 rounded-xl">
            <p>Logueado!</p>
          </div>
        ) : (
          <div className="w-[65vw] h-[70vh] bg-slate-700 rounded-xl">
            <p>No Logueado!</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;
