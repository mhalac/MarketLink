"use client";
import { API_REQUEST } from "@/public/api_facilitator";
import React, { useState } from "react";
import { MailInput, PasswordInput } from "./login_components";


export default function Login() {
  const [mail, setMail] = useState(null);

  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen w-full relative">
      

      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute h-2/5 w-5/12 outline backdrop-blur-lg p-8 flex flex-col gap-6">
          <label className="oswald-medium text-2xl">
            E-Mail
          </label>
          <MailInput />
          <label className="oswald-medium text-2xl">
            Password
          </label>
          <PasswordInput />
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center top-60">
        <label className="text-white absolute oswald-medium text-5xl">
          SING UP
        </label>
      </div>
    </div>
  );
}
