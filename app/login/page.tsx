"use client";
import { API_REQUEST } from "@/public/api_facilitator";
import React, { useState } from "react";
import { LoginOutput, MailInput, PasswordInput} from "./login_components";
import { potentialUser } from "../interfaces/register";


export default function Login() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center w-full relative">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="p-4 rounded-lg">
          <label className="text-white oswald-medium text-5xl px-4 py-2">
            SIGN UP
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center  w-[65vw] p-6 max-w-[65vw]">
        <div className=" outline p-12 rounded-lg backdrop-blur-lg flex flex-col gap-4 w-full max-w-2xl min-h-[48vh]">
          <label className="oswald-medium text-2xl text-gray-800">E-Mail</label>
          <MailInput  />
          <div/><div/><div/>
          <label className="oswald-medium text-2xl text-gray-800">Password</label>
          <PasswordInput />
          <LoginOutput />
        </div>
      </div>
    
    </div>
    
  );
}
