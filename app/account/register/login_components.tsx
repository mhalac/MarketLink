import React, {useState } from "react";
import { API_REQUEST } from "@/public/api_facilitator";
import {useRouter } from "next/navigation";

let data = {
  mail: "",
  password: "",
};
export function MailInput() {
  const [mail, setMail] = useState("");
  data.mail = mail;
  return (
    <input
      type="email"
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald text-sm  placeholder:text-gray-700 pl-14"
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
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald text-sm placeholder:text-gray-700 pl-14"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
  );
}

export function LoginOutput() {
  const router = useRouter();

  function sendInfo() {
    console.log(JSON.stringify(data));
    API_REQUEST("/login", "POST", JSON.stringify(data))
      .then(() => {
        router.push("http://localhost:3000/account/login"); // Redirect to the desired URL after successful login
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
      Enviar
    </button>
  );
}
