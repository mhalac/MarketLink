"use client";
import { API_REQUEST } from "@/public/api_facilitator";
import React, { useState } from "react";
import { MailInput } from "./login_components";


export default function Login() {
  const [mail,setMail] = useState(null);

  
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen w-full relative">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="relative h-2/5 w-5/12 bg-opacity-50 outline backdrop-blur-lg flex">
          <label className="oswald-medium relative color text-2xl left-24 h-10 top-14 ">
            E-Mail
          </label>
          <MailInput />
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center top-60">
        <label className="text-white relative oswald-medium text-5xl">
          LOGIN
        </label>
      </div>
    </div>
  );
}
