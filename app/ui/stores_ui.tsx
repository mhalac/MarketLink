"use client";

import { useEffect, useState } from "react";
import Store_Item from "./store";


export default function Stores() {
  const [list, changeList] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    async function GetServerProps() {
      // aca iria el codigo donde awaiteo un fetch de las tiendas.
      const req: any = await fetch("api/creacion/tienda", {
        method: "GET",
      });
      const arr = (await req.json()).result;
      let temp: JSX.Element[] = [];
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        temp.push(
          <Store_Item title={element.titulo} key={index} id={element.id_negocio} desc={element.desc} />
        )

      }
      changeList(temp);
    }
    GetServerProps();
  }, []);

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 overflow-y-auto p-10 m-10 row-span-4  h-screen gap-5 col-span-3">
      {list}
    </div>
  );
}
