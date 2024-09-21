import Stores from "../ui/stores_ui";
import { GetRole } from "../api/db/functions";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import ThreeBarMenu from "../ThreeBarMenu";
export default async function Dashboard() {

  return (

    <div className="w-full h-screen flex flex-col items-center justify-center ">
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-[75%] h-[85%] fixed rounded-lg grid grid-rows-5 justify-center shadow-md p-10">
        <div className="absolute left-0">
        <ThreeBarMenu/>
        </div>
        <h1 className="xl:text-8xl md:text-4xl mt-20 col-span-3 text-center">
          Tiendas
        </h1>
        <Stores></Stores>
      </div>
      </div> 
  );
}
