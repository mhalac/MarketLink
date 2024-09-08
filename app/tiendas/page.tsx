import Stores from "../ui/stores_ui";
import { GetRole } from "../api/db/functions";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  //@ts-ignore
  const id = session?.user.id;  
  console.log(session);

  console.log(GetRole(id))
  return (

      <div className="bg-fuchsia-500 w-[50%] h-[93%] grid grid-cols-3 rounded-bl-2xl rounded-br-2xl grid-rows-5 justify-center outline">
        <h1 className="xl:text-8xl md:text-4xl mt-20 col-span-3 text-center">
          Tiendas
        </h1>
        <Stores></Stores>
      </div>
  );
}
