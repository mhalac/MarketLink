import React, { useState } from "react";
import { potentialUser } from "../interfaces/register";
import { API_REQUEST } from "@/public/api_facilitator";
import { json } from "stream/consumers";

let data = {
  mail: "",
  password: "" 
};
let recieved = false;
export function MailInput() {
  const [mail, setMail] = useState("");
  data.mail = mail;
  return (
    <input
      type="email"
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald text-sm outline placeholder:text-gray-700 pl-14"
      value={mail}
      onChange={(e) => {
        setMail(e.target.value);
        
      }}
    />
  );
  
}

export function PasswordInput() {
  const [password, setPassword] = useState("");
  data.password = password;
  

  return (
    <input
      type="password"
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald outline text-sm placeholder:text-gray-700 pl-14"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
  );
}

let status = 0
export async function sendInfo(){
  console.log(JSON.stringify(data))
  status = 1
  API_REQUEST("/login","POST",JSON.stringify(data),() => {
    status = 2;
  })
}

export function LoginOutput(){
  return (
    <button
      className="text-slate-950 bg-green-500 rounded-full relative h-[5vh] w-[10vw] my-10 font-oswald" onClick={sendInfo}>
      {status === 0 ? 'Enviar':
      status === 1 && recieved ? 'Cargando...':
      'Finalizado!'
      }

      </button>
  );
}