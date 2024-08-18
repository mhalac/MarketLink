import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import GetStatus from "@/app/ui/user_info/server_status";
import HeadButton from "@/app/ui/header_button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {


    return (
    <div className="bg-cover flex justify-center h-[100vh] w-[100vw] items-center bg-center background-signup">
            <nav className="bg-slate-700 rounded-full translate-y-1 absolute grid grid-flow-col gap-10 items-center px-14 inset-x-[22vw] top-0 h-16">
        <HeadButton title="VOLVER" direccion="/"/>
        <HeadButton title="REGISTRARSE COMO MERCADER"/>
        <LogoutLink className="transition grid ease-in-out duration-150 hover:-translate-y-2 px-10 py-2 bg-purple-500 items-center place-items-center text-white oswald-medium hover:bg-indigo-400">
        CERRAR SESION
      </LogoutLink>
      </nav>
      <section>
        <div className="w-[65vw] h-[70vh] bg-slate-700 rounded-xl">
            <GetStatus/>
        </div>
      </section>
    </div>
  );
}
