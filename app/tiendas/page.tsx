"use client";

import Stores from "../ui/stores_ui";
import ThreeBarMenu from "../ThreeBarMenu";
import { useSession } from "next-auth/react"; 
import { useState } from "react";

export default function Menu_Tiendas() {
  const { data: session, status } = useSession();
  const [searchTerm, setSearchTerm] = useState("");

  if (status === "loading") {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="bg-slate-600 h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute left-0 top-0">
            <ThreeBarMenu />
          </div>
          <a href="/">No estas logueado</a>
        </div>
      </div>
    );
  }

  function search() {
    if (searchTerm.trim() !== "") {
      window.location.href = `/tiendas?search=${encodeURIComponent(searchTerm)}`;
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-300 h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute rounded-2xl flex flex-row items-center justify-center top-[4%] right-[10%] p-3 w-[18%] h-[8%] ">
          <input
            type="text"
            className="w-[80%] h-[100%] text-3xl p-4 rounded-2xl text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-4 bg-blue-700 hover:bg-blue-500 rounded-2xl p-3"
            onClick={search}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        <div className="absolute left-0 top-0">
          <ThreeBarMenu />
        </div>
        <h1 className="mt-36 text-6xl text-center text-cyan-600">Tiendas</h1>
        <div className="text-white h-[100%] w-screen">
          <Stores />
        </div>
      </div>
    </div>
  );
}
