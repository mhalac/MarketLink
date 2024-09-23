import Stores from "../ui/stores_ui";
import { GetRole } from "../api/db/functions";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import ThreeBarMenu from "../ThreeBarMenu";
export default async function Dashboard() {

  return (

    <div className="w-full h-screen flex flex-col items-center justify-center ">
        <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center ">
        <div className="absolute left-0 top-0">
        <ThreeBarMenu/>
        </div>
        <h1 className= "text-6xl bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent leading-normal">
          Tiendas
        </h1>
          <div className="text-white">
            <Stores/>
          </div>
        </div>
      </div> 
  );
}
