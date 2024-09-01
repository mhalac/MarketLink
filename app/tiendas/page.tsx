import Stores from "../ui/stores_ui";
export default function Dashboard() {
  return (
    <div className="bg-cover h-[100vh] w-[100vw] flex justify-center items-center bg-slate-500">
      <div className="bg-black w-[50%] h-[100%] grid grid-cols-3 grid-rows-3 justify-center outline">
        <h1 className="xl:text-8xl md:text-4xl mt-10 col-span-3 text-center">
          Tiendas
        </h1>

        <Stores></Stores>
      </div>
    </div>
  );
}
