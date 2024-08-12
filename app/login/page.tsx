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
    <div className="bg-[url('/background.jpg')] bg-cover bg-center h-screen w-full">
      
    </div>
  );
}
