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
    <div className="flex justify-center items-center h-screen">
      <div className="flex-login">
        <div>
          <label className="login-label oswald-login text-4xl">LOGIN</label>
        </div>
        <div className="login-div outline outline-slate-100 outline-4 rounded-lg">
          <button
            onClick={handle_clicks}
            className="oswald-login w-32 h-20 text-xl bg-green-400 rounded-lg sticky top-2/3 left-1/4"
          >
            {data ? <div>{data}</div> : <div>Loading...</div>}
          </button>
        </div>
      </div>
    </div>
  );
}
