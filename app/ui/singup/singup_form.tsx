"use client";
import { signup } from "@/app/actions/auth";
import { useState } from "react";

export function SignupForm() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  return (
    <form
      action={signup}
      className="space-y-[5vh] w-[30vw] flex flex-col items-center justify-center translate-y-[-2vh]"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-slate-50text-lg font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={(e) => {
            setUser({...user,name:e.target.value});
          }}
          className="p-2 border text-black  border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-slate-50text-lg font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 text-black rounded-md"
          value={
            user.email
          }
          onChange={(e) =>{
            setUser({...user,email:e.target.value});
          }}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="text-slate-50text-lg font-bold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="p-2 border border-gray-300 text-black  rounded-md"
          value={user.password}
          onChange={
            (e)=>{
              setUser({...user,password:e.target.value});
            }
          }
        />
      </div>
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Sign Up
      </button>
    </form>
  );
}
