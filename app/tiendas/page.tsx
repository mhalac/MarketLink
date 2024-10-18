import Stores from "../ui/stores_ui";
import ThreeBarMenu from "../ThreeBarMenu";
import { getServerSession } from "next-auth";

export default async function Menu_Tiendas() {
  const session = await getServerSession()
  console.log(session)



  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-300 h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute left-0 top-0">
          <ThreeBarMenu />
        </div>
        <h1 className="mt-36 text-6xl text-center text-cyan-600">
          Tiendas
        </h1>
        <div className="text-white h-[1000%] w-screen">
          <Stores />
        </div>
      </div>
    </div>
  );
}
