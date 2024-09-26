import Stores from "../ui/stores_ui";
import ThreeBarMenu from "../ThreeBarMenu";
export default async function Dashboard() {

  return (

    <div className="w-full h-screen flex flex-col items-center justify-center ">
      <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center ">
        <div className="absolute left-0 top-0">
          <ThreeBarMenu />
        </div>
        <div className="bg-blue-400 w-[70%] h-[80%] flex flex-col ">
          <h1 className="text-6xl w-full  h-fit text-center text-white">
            Tiendas
          </h1>
          <div className="text-white">
            <Stores />
          </div>
        </div>
      </div>
    </div>
  );
}
