"use client";

import { useEffect, useState } from "react";
import Store_Item from "./store";
interface Store_Class {
  id: number;
  title: string;
  desc: string;
}

export default function Stores() {
  const [list, changeList] = useState<React.JSX.Element[]>([]);

  useEffect(()=>{
    async function GetServerProps() {
        // aca iria el codigo donde awaiteo un fetch de las tiendas.
        const arr: Array<Store_Class> = [
          { id: 1, title: "asdf", desc: "asdf" },
          { id: 2, title: "asdf", desc: "asdf" },
          { id: 3, title: "asdf", desc: "asdf" },
          { id: 4, title: "asdf", desc: "asdf" },
          { id: 5, title: "asdf", desc: "asdf" },
          { id: 6, title: "asdf", desc: "asdf" },
          { id: 7, title: "asdf", desc: "asdf" },


        ];
        // armamos un array de "divs" con los datos obtenidos del servidor
        const temp: any = arr.map((store,key)=> {
           return (<Store_Item id_negocio={store.id} key={key} desc={store.desc} title={store.title} />)    
        })
        

        changeList(temp);
      }
      GetServerProps();

    },[])
  
  return (
    <div className="grid grid-cols-3 overflow-auto m-10 row-span-2  h-[80%] gap-5 col-span-3">
        {list}
        
    </div>
  );
}
