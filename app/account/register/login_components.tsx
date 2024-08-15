import React, { ChangeEventHandler, useEffect, useState } from "react";
import { API_REQUEST } from "@/public/api_facilitator";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const globals = { email: "", password: "" };

export function MailInput() {
  const [mail, changeMail] = useState("");
  return (
    <input
      type="email"
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald text-sm  placeholder:text-gray-700 pl-14"
      value={mail}
      onChange={(e) => {
        changeMail(e.target.value);
        globals.email = e.target.value;
      }}
    />
  );
}

export function PasswordInput() {
  const [password, changePassword] = useState("");

  return (
    <input
      type="password"
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald text-sm placeholder:text-gray-700 pl-14"
      value={password}
      onChange={(e) => {
        changePassword(e.target.value);
        globals.password = e.target.value;
      }}
    />
  );
}
export function LoginOutput() {
  const [valor_boton, setBoton] = useState("Enviar");

  const router = useRouter();
  function sendInfo() {
    API_REQUEST("/login", "POST", JSON.stringify(globals))
      .then(() => {
        setBoton("Enviando...");
        const head = new Headers();
        head.append("intent","creation-status");
        const checkLogin = setInterval(async function () {
          const resp:NextResponse = await API_REQUEST("/login","GET","",true,head);
          const txt = await resp.text;
          // @ts-ignore
          if(txt !== "loading"){
            router.push("http://localhost:3000/account/login");
          }
          clearInterval(checkLogin);
        }, 500);
      })
      .catch((error) => {
        console.error("API request failed", error);
      });
  }

  return (
    <button
      className="text-slate-950 bg-green-500 rounded-full relative h-[5vh] w-[10vw] my-10 font-oswald"
      onClick={sendInfo}
    >
      {valor_boton}
    </button>
  );
}

