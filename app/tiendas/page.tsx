import Stores from "../ui/stores_ui";
import ThreeBarMenu from "../ThreeBarMenu";

export default async function Dashboard() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-300 h-fit w-fit flex flex-col justify-center items-center">
        <div className="absolute left-0 top-0">
          <ThreeBarMenu />
        </div>
        <h1 className="text-6xl w-full h-fit text-center text-cyan-600">
          Tiendas
        </h1>
        <div className="text-white">
          <Stores />
        </div>
      </div>
    </div>
  );
}
