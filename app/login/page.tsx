"use client";
import { API_REQUEST } from "@/public/api_facilitator";
import React, { useState } from "react";

export default function Login() {
  const [data, setData] = useState(null);

  function requested(response: any) {
    setData(response.text);
  }

  function handle_clicks() {
    API_REQUEST("login", "GET", "", requested);
  }

  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen w-full relative">
      <div className="absolute inset-0 flex items-center outline outline-rose-600 justify-center z-0">
        <div className="relative h-2/5 w-5/12 bg-opacity-50 outline backdrop-blur-lg flex">
          <label className="oswald-medium text-2xl">Nombre</label>
        </div>
      </div>
      <div className="absolute top-60 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
        <label className="text-white oswald-medium text-5xl">LOGIN</label>
      </div>
    </div>
  );
}
